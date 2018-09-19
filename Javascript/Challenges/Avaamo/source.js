var reader = new FileReader();
var API = "dict.1.1.20170610T055246Z.0f11bdc42e7b693a.eefbde961e10106a4efa7d852287caa49ecc68cf";

function APIrequest(text, callback) {
  const request = new XMLHttpRequest();
  const url = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${API}&lang=en-ru&text=${text}`;
  request.timeout = 2000;
  request.onreadystatechange = function(e) {
    if (request.readyState === 4) {
      if (request.status === 200) {
       callback(null, request.response)
      } else {
       callback(request.status, null)
      }
    }
  }
  request.ontimeout = function () {
   console.log('Timeout')
  }
  request.open('get', url, true)
  request.send();
}

//binding mean to the array
function meanBind(tr) {
    let arr = [];
    for (var i = 0; i < tr.length; i++) {
        if(tr[i].hasOwnProperty('mean') && tr[i].mean.length > 0){
            let mean = tr[i].mean;
            arr.push(mean);
        }
    }
    return arr;
}

//array regex count occurrences and api call
function wordOccurrance(txtInput) {
    let wordOutput = [];
    let arr = txtInput.replace(/[^a-zA-Z ]/g, "").toLowerCase().split(" ").filter(function(str) {
      return /\S/.test(str);
    });
    //console.log(arr);
    let counts = arr.reduce(function ( stats, word ) {
        if ( stats.hasOwnProperty( word ) ) {
            stats[ word ] = stats[ word ] + 1;
        } else {
            stats[ word ] = 1;
            wordOutput.push({Word:word, Output:{count:1, pos: [], syn: []}});
        }
        return stats;
    }, {} );
    //console.log( counts, wordOutput );

    wordOutput.sort(function(a, b) {
        return counts[b.Word] - counts[a.Word]
    });
    wordOutput.splice(10);
    //console.log(wordOutput);

    wordOutput.map((str) => {
        str.Output.count = counts[str.Word];
        APIrequest(str.Word, function(err, res){
            if(err){
                console.error(err);
                return false;
            }
            res = JSON.parse(res);
            if(res.hasOwnProperty('def') && res.def.length > 0){
                let def = res.def;
                for (var i = 0; i < def.length; i++) {
                    if(def[i].pos != undefined) str.Output.pos.push(def[i].pos);
                    if(def[i].hasOwnProperty('tr') && def[i].tr.length > 0){
                        let tr = def[i].tr;
                        str.Output.syn = meanBind(tr);

                        display(wordOutput);
                    }
                }
            }
        });
    });
    //wordDetails(wordOutput, counts);
    //console.log(wordOutput);
}

//readFile method to read big.txt
function readFile(that){
    if(that.files && that.files[0]){
        var reader = new FileReader();
        reader.onload = function (e) {
        var output=e.target.result;
        wordOccurrance(output);
        };
        reader.readAsText(that.files[0]);
    }
}

function display(obj) {
  var length = obj.length;

  		if(length>0){
  			var table = document.createElement("table");
  			table.style.width = '50%';
  			table.setAttribute('border', '1');
  			table.setAttribute('cellspacing', '0');
  			table.setAttribute('cellpadding', '5');

  			var col = [];
  			for (var i = 0; i < length; i++) {
  				for (var key in obj[i]) {
  					if (col.indexOf(key) === -1) {
  						col.push(key);
  					}
  				}
  			}

  			var tHead = document.createElement("thead");

  			var hRow = document.createElement("tr");

  			for (var i = 0; i < col.length; i++) {
  					var th = document.createElement("th");
  					th.innerHTML = col[i];
  					hRow.appendChild(th);
  			}
  			tHead.appendChild(hRow);
  			table.appendChild(tHead);
  			var tBody = document.createElement("tbody");
  			for (var i = 0; i < length; i++) {
  					var bRow = document.createElement("tr");
  					for (var j = 0; j < col.length; j++) {
  						var td = document.createElement("td");
              if(typeof obj[i][col[j]] == "object"){
                  let res = obj[i][col[j]];
                  td.innerHTML =`count: ${res.count} & pos: ${res.pos.length} & syn: ${res.syn.length}`
              }
              else{
  						     td.innerHTML = obj[i][col[j]];
              }
  						bRow.appendChild(td);
  					}
  					tBody.appendChild(bRow)

  			}
  			table.appendChild(tBody);
  			var divContainer = document.getElementById("main");
  			divContainer.innerHTML = "";
  			divContainer.appendChild(table);

        var paragraph = document.getElementById("console");
        paragraph.innerHTML = JSON.stringify(obj);

  		}
}
