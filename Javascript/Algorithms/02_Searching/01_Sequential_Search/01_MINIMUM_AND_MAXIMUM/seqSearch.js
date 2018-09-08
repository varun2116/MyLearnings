// first revision code
/*function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] == data){
            return true;
        }
    }
    return false;
}*/

//second revision code
function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] == data){
            return i;
        }
    }
    return -1;
}

function dispArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        print(arr[i]);
        if(i > 0 && i % 10 == 0)
            print("<br />")
    }
}

function findMin(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

function findMax(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

var nums = [];
for (var i = 0; i < 100; ++i) {
   nums[i] = Math.floor(Math.random() * 101);
}
var minValue = findMin(nums);
dispArr(nums);
print();
print();
print("The minimum value is: " + minValue);
var maxValue = findMax(nums);
print();
print();
print("The maximum value is: " + maxValue);
