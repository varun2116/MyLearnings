/*==================================================================*/
var mySingleton = (function(){
    //Instance stores a reference to Singleton
    var instance;
    function init() {
        //Singleton

        //private methods and vars
        function privateMethod() {
            console.log("It's Private");
        }

        var privateVar = "Private";

        var privateRandNum = Math.random();

        return {
            //public methods and vars
            publicMethod: function(){
                console.log("Public");
            },

            publicProperty: "Here Public",

            getRandNum: function(){
                return privateRandNum;
            }
        }
    };

    return {
        // Get the Singleton instance if one exists
        // or create one if it doesn't
        getInstance: function(){
            if(!instance){
                instance = init();
            }
            return instance;
        }
    };
})();

var myBadSingleton = (function() {
    var instance;

    function init() {
        var privateRandNum = Math.random();

        return {
            getRandNum: function(){
                return privateRandNum;
            }
        };
    };

    return {
        // Always create a new Singleton instance
        getInstance: function(){
            instance = init();
            return instance;
        }
    };
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log( singleA.getRandNum() === singleB.getRandNum() ); // true

var badSingleA = myBadSingleton.getInstance();
var badSingleB = myBadSingleton.getInstance();
console.log( badSingleA.getRandNum() !== badSingleB.getRandNum() ); // true

/*===============================================extensible by subclassing===============================*/
mySingleton.getInstance = function(){
    if(this._instance == null){
        if(isFoo()){
            this._instance = new FooSingleton();
        } else {
            this._instance = new BasicSingleton();
        }
    }
    return this._instance;
}

/*===============================example with the pattern=====================================*/
var SingletonTester = (function(){
    // options: an object containing configuration options for the singleton
    // e.g var options = { name: "test", pointX: 5};
    function Singleton( options ) {
        // set options to the options supplied
        // or an empty object if none are provided
        options = options || {};
        // set some properties for our singleton
        this.name = "SingletonTester";
        this.pointX = options.pointX || 6;
        this.pointY = options.pointY || 10;
    }
    // our instance holder
    var instance;
    // an emulation of static variables and methods
    var _static = {
      name: "SingletonTester",
      // Method for getting an instance. It returns
      // a singleton instance of a singleton object
      getInstance: function( options ) {
        if( instance === undefined ) {
          instance = new Singleton( options );
        }
        return instance;
      }
    };
    return _static;
})();

var singletonTest = SingletonTester.getInstance({
  pointX: 5
});
// Log the output of pointX just to verify it is correct
// Outputs: 5
console.log( singletonTest.pointX );
