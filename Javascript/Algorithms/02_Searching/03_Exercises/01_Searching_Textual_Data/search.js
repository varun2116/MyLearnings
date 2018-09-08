function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] == data){
            return i;
        }
    }
    return -1;
}

function insertionSort(arr) {
    var temp, inner;
    for (var outer = 1; outer < arr.length; outer++) {
        temp = arr[outer];
        inner = outer;
        while (inner > 0 && arr[inner-1] >= temp) {
            arr[inner] = arr[inner-1];
            inner--;
        }
        arr[inner] = temp;
    }
}

function binSearch(arr, data) {
    var upperBound = arr.length - 1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if(arr[mid] < data){
            lowerBound = mid + 1;
        }
        else if (arr[mid] > data) {
            upperBound = mid-1;
        }
        else {
            return mid;
        }
    }
    return -1;
}

var str = `The nationalism of Hamilton was undemocratic. The democracy of Jefferson was,
in the beginning, provincial. The historic mission of uniting nationalism and
democracy was in the course of time given to new leaders from a region beyond
the mountains, peopled by men and women from all sections and free from those
state traditions which ran back to the early days of colonization. The voice
of the democratic nationalism nourished in the West was heard when Clay of
Kentucky advocated his American system of protection for industries; when
Jackson of Tennessee condemned nullification in a ringing proclamation that
has taken its place among the great American state papers; and when Lincoln
of Illinois, in a fateful hour, called upon a bewildered people to meet the
supreme test whether this was a nation destined to survive or to perish. And
it will be remembered that Lincoln's party chose for its banner that earlier
device--Republican--which Jefferson had made a sign of power. The "rail splitter"
from Illinois united the nationalism of Hamilton with the democracy of Jefferson,
and his appeal was clothed in the simple language of the people, not in the
sonorous rhetoric which Webster learned in the schools.`

var words = str.split(" ");
var word = "rhetoric";
var start = new Date().getTime();
var position = seqSearch(words, word);
var stop = new Date().getTime();
var elapsed = stop - start;
if (position >= 0) {
   print("Found " + word + " at position " + position + ".<br/>");
   print("Sequential search took " + elapsed + " milliseconds.");
}
else {
   print(word + " is not in the file.");
}

print();

//Binary Search
insertionSort(words);
var word = "rhetoric";
var start = new Date().getTime();
var position = binSearch(words, word);
var stop = new Date().getTime();
var elapsed = stop - start;
if (position >= 0) {
   print("Found " + word + " at position " + position + ".<br/>");
   print("Binary search took " + elapsed + " milliseconds.");
}
else {
   print(word + " is not in the file.");
}
