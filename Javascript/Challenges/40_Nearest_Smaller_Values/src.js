function NearestSmallValues(str) {
    var arr = str.replace(/\s/g, "").split(",");
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var min = -1;
        for (var j = 0; j < i; j++) {
            if(arr[i] >= arr[j]){
                min = arr[j];
            }
        }
        result.push(min);
    }
    return result.toString();
}
