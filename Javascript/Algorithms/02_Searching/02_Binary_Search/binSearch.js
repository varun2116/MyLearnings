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

function dispArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        print(arr[i]);
        if(i > 0 && i % 10 == 0)
            print("<br />")
    }
}

function binSearch(arr, data) {
    var upperBound = arr.length - 1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        //print("current mid point : " + mid +"<br />")
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

function count(arr, data) {
    var count = 0;
    var position = binSearch(arr, data);
    if (position > -1) {
        count++;
        for (var i = position-1; i > 0; i--) {
            if(arr[i] == data){
                count++;
            }
            else {
                break;
            }
        }
        for (var i = position+1; i < arr.length; i++) {
            if (arr[i] == data) {
                count++;
            }
            else {
                break;
            }
        }
    }
    return count;
}

//Test program for Binary Search
// var nums = [];
// for (var i = 0; i < 100; ++i) {
//    nums[i] = Math.floor(Math.random() * 101);
// }
// insertionSort(nums);
// dispArr(nums);
// print();
// var val = 11;
// var retVal = binSearch(nums, val);
// if (retVal >= 0) {
//    print("Found " + val + " at position " + retVal);
// }
// else {
//    print(val + " is not in array.");
// }

//Test program for COUNTING occurrences
var nums = [];
for (var i = 0; i < 100; ++i) {
   nums[i] = Math.floor(Math.random() * 101);
}
insertionSort(nums);
dispArr(nums);
print();
var val = 45;
var retVal = count(nums, val);
print("Found " + retVal + " occurrences of " + val + ".");
