function MissingDigit(str) {
    str = str.replace(/\s/g, "");
    var arr = str.split("=");
    if(arr[1] == "x"){
        return eval(arr[0]);
    }
    switch (arr[0].replace(/\d/g, "").replace(/\w/g, "")) {
      case "*":
        var result = '',idx;
        var arr1 = arr[0].split("*");
        if(arr1[0].indexOf("x") == -1){
            result += arr[1] / arr1[0];
            idx = arr1[1].indexOf("x");
        }
        if(arr1[1].indexOf("x") == -1){
            result += arr[1] / arr1[1];
            idx = arr1[0].indexOf("x");
        }
        return result.charAt(idx);
        break;

      case "+":
        var result = '',idx;
        var arr1 = arr[0].split("+");
        if(arr1[0].indexOf("x") == -1){
            result += arr[1] - arr1[0];
            idx = arr1[1].indexOf("x");
        }
        if(arr1[1].indexOf("x") == -1){
            result += arr[1] - arr1[1];
            idx = arr1[0].indexOf("x");
        }
        return result.charAt(idx);
        break;

      case "-":
        var result = '',idx;
        var arr1 = arr[0].split("-");
        if(arr1[0].indexOf("x") == -1){
            result += arr[1] - arr1[0];
            idx = arr1[1].indexOf("x");
        }
        if(arr1[1].indexOf("x") == -1){
            result += arr[1] + arr1[1];
            idx = arr1[0].indexOf("x");
        }
        return result.charAt(idx);
        break;

      case "/":
        var result = '',idx;
        var arr1 = arr[0].split("/");
        if(arr1[0].indexOf("x") == -1){
            result += arr1[0] / arr[1];
            idx = arr1[1].indexOf("x");
        }
        if(arr1[1].indexOf("x") == -1){
            result += arr[1] * arr1[1];
            idx = arr1[0].indexOf("x");
        }
        return result.charAt(idx);
        break;

      default:
        break;
    }
}
