//first definition
// function seqSearch(arr, data) {
//     for (var i = 0; i < arr.length; i++) {
//         if(arr[i] == data){
//             if(i > 0){
//                 swap(arr, i, i -1);
//             }
//             return true;
//         }
//     }
//     return false;
// }

//second definition
function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] == data && i > (arr.length * 0.2)){
            swap(arr, i, 0);
            return true;
        }
        else if (arr[i] == data) {
            return true;
        }
    }
    return false;
}

function swap(arr, index, index1) {
    var temp = arr[index];
    arr[index] = arr[index1];
    arr[index1] = temp;
}

function dispArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        print(arr[i]);
        if(i > 0 && i % 10 == 0)
            print("<br />")
    }
}

// var numbers = [5,1,7,4,2,10,9,3,6,8];
// print(numbers);
// for (var i = 1; i <= 3; i++) {
//    seqSearch(numbers, 4);
//    print(numbers);
// }

var nums = [];
for (var i = 0; i < 10; ++i) {
   nums[i] = Math.floor(Math.random() * 11);
}
dispArr(nums);
print();
var val = 3;
if (seqSearch(nums, val)) {
   print("Found element: " +val);
   print();
   dispArr(nums);
}
else {
   print(val + " is not in array.");
}
print();
var val = 2;
if (seqSearch(nums, val)) {
   print("Found element: " +val);
   print();
   dispArr(nums);
}
else {
   print(val + " is not in array.");
}
