function LongestPalindrome(str) {
    var longest = '';
    for (var i = 0; i < str.length; i++) {
        for (var j = i+2; j < str.length; j++) {
            if(isPalindrome(str.slice(i,j))){
                return str.slice(i,j);
            }
        }
    }
}

function isPalindrome(str) {
    return str == str.split("").reverse().join("");
}
