var API = "dict.1.1.20170610T055246Z.0f11bdc42e7b693a.eefbde961e10106a4efa7d852287caa49ecc68cf";

function APIrequest(url, callback) {
  const request = new XMLHttpRequest();
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

// APIrequest("file:///D:/Projects/MyLearnings/Javascript/Challenges/Avaamo/big.txt", function(error, data){
//     console.log(data);
// })

// APIrequest(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${API}&lang=en-ru&text=time`, function(error, data) {
//     console.log(JSON.parse(data));
// });


var reader = new FileReader();

function sortByFrequency(array) {
	var frequency = {};
	array.forEach(
		function(value) { frequency[value] = 0; }
	);
  console.log(array);
	var uniques = array.filter(
		function(value) { return ++frequency[value] == 1; }
	);
	return uniques.sort(
		//console.log(frequency);
		function(a, b) { return frequency[b] - frequency[a]; }
	);
};

function readFile(that){
    if(that.files && that.files[0]){
        var reader = new FileReader();
        reader.onload = function (e) {
        var output=e.target.result;
        var wordOutput = [];
        var arr = output.replace(/[^a-zA-Z ]/g, "").split(" ").filter(function(str) {
          return /\S/.test(str);
        });
        console.log(arr);
        var counts = arr.reduce(function ( stats, word ) {
            if ( stats.hasOwnProperty( word ) ) {
                stats[ word ] = stats[ word ] + 1;
            } else {
                stats[word] = 1;
            }
            return stats;
        }, [] );
        console.log( counts );
        arr.sort((a, b) => counts[b] - counts[a]);
        console.log(arr);
        };
        reader.readAsText(that.files[0]);
    }
}
