function isPalindrome(word) {
    var s = new Stack();

    for (var i = 0; i < word.length; i++) {
        s.push(word[i])
    }

    var reverseWord = "";

    while(s.length() > 0){
        reverseWord += s.pop();
    }

    if(word == reverseWord){
        return true;
    }
    return false;
}

var word = "hello";
if (isPalindrome(word)) {
    print(word + " is a palindrome.");
}
else {
    print(word + " is not a palindrome.");
}
word = "racecar"
if (isPalindrome(word)) {
    print(word + " is a palindrome.");
}
else {
    print(word + " is not a palindrome.");
}
