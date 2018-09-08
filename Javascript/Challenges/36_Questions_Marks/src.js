function QuestionsMarks(str) {
    var startNum = 0, endNum = 0, queCount = 0;
    for (var i = 0; i < str.length; i++) {
        if(parseInt(str[i])){
            startNum == 0 ? startNum = parseInt(str[i]) : endNum = parseInt(str[i]);
        }
        queCount += str[i] == "?" && startNum ? 1 : 0;
        if(startNum && endNum){
            if(queCount == 3){
                return (startNum + endNum) == 10
            }
            queCount = 0, startNum = 0, endNum = 0;
        }
    }
    return false;
}
