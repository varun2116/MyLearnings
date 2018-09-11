/*=============================================================================*/
var myRevealingModule = (function(){
    var privateVar = "Ben Cherry",
        publicVar = "Hey There";

    function privateFun() {
        console.log("Name :" + privateVar);
    }

    function publicSetName(strName) {
        privateVar = strName;
    }

    function publicGetName() {
        privateFun();
    }

    // Reveal public pointers to
    // private functions and properties
    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    };
})();

myRevealingModule.setName( "Paul Kinlan" );

/*=============================================================================*/
var myRevealingModule = (function(){
    var privateCounter = 0;

    function privateFun() {
        privateCounter++;
    }

    function publicFunction() {
        publicIncrement();
    }

    function publicIncrement() {
        privateFun();
    }

    function publicGetCount() {
        return privateCounter;
    }

    // Reveal public pointers to
    // private functions and properties

   return {
        start: publicFunction,
        increment: publicIncrement,
        count: publicGetCount
    };
})();

myRevealingModule.start();
