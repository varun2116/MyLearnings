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

var nums = [];
for (var i = 0; i < 100; i++) {
    nums[i] = Math.floor(Math.random() * 101);
}
dispArr(nums);
print();
var num = 23;
// if (seqSearch(nums, num)) {
//    print(num + " is in the array.");
// }
// else {
//    print(num + " is not in the array.");
// }
var pos = seqSearch(nums, num);
if (pos > -1) {
   print(num + " is in the array at position " + pos);
}
else {
   print(num + " is not in the array.");
}
