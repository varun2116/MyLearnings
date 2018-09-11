/*===================Object Literals===================*/
var myObjectLiteral = {

    variableKey: variableValue,

    functionKey: function () {
      // ...
    }
};

/*================module defined using object literal notation=========*/
var myModule = {
    myProperty: "someValue",
    // object literals can contain properties and methods.
    // e.g we can define a further object for module configuration:
    myConfig: {
      useCaching: true,
      language: "en"
    },
    // a very basic method
    saySomething: function () {
     console.log( "Where in the world is Paul Irish today?" );
    },

    // output a value based on the current configuration
    reportMyConfig: function () {
     console.log( "Caching is: " + ( this.myConfig.useCaching ? "enabled" : "disabled") );
    },
    // override the current configuration
    updateMyConfig: function( newConfig ) {
      if ( typeof newConfig === "object" ) {
        this.myConfig = newConfig;
        console.log( this.myConfig.language );
      }
    }
};

// Outputs: Where in the world is Paul Irish today?
myModule.saySomething();

// Outputs: Caching is: enabled
myModule.reportMyConfig();

// Outputs: fr
myModule.updateMyConfig({
  language: "fr",
  useCaching: false
});

// Outputs: Caching is: disabled
myModule.reportMyConfig();

/*=====================Module pattern by creating a module which is self-contained============*/
var testModule = (function(){
    var counter = 0;
    return {
      incrementCounter: function(){
          return counter++;
      },
      resetCounter: function(){
          console.log( "counter value prior to reset: " + counter );
          counter = 0;
      }
    };
})();

// Increment our counter
testModule.incrementCounter();

// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();

/*===========================Simple Template========================================================*/
var myNamespace = (function(){
    var myPrivateVar, myPrivateMethod;
    //private counter var
    myPrivateVar = 0;

    //private method
    myPrivateMethod = function(foo){
        console.log(foo);
    };

    return {
        //public var
        myPublicVar: 'foo',

        //public method
        myPublicFunction: function(bar){
            // Increment our private counter
            myPrivateVar++;
            // Call our private method using bar
            myPrivateMethod( bar );
        }
    };
})();

/*=============================basketModule====================================================*/
var basketModule = (function(){
    //privates
    var basket = [];

    function doSomethingPrivate() {
        //..
    }

    function doSomethingElsePrivate() {
        //..
    }

    // Return an object exposed to the public
    return {
        // Add items to our basket
        addItem: function(values){
            basket.push(values);
        },
        //Get Item count
        getItemCount: function(){
            return basket.length;
        },
        // Public alias to a private function
        doSomething: doSomethingPrivate,
        // Get the total value of items in the basket
        getTotal: function(){
            var q = this.getItemCount(),
                p = 0;

            while(q--){
                p += basket[q].price;
            }
            return p;
        }
    };
})();

// basketModule returns an object with a public API we can use
basketModule.addItem(
  {
      item: "bread",
      price: 0.5
  }
);
basketModule.addItem(
  {
      item: "butter",
      price: 0.3
  }
);

// Outputs: 2
console.log( basketModule.getItemCount() );

// Outputs: 0.8
console.log( basketModule.getTotal() );

// However, the following will not work:

// Outputs: undefined
// This is because the basket itself is not exposed as a part of our public API
console.log( basketModule.basket );

// This also won't work as it only exists within the scope of our
// basketModule closure, but not in the returned public object
console.log( basket );

/*=============================================Import mixins======================================*/
//Global Module
var myModule = (function( jQ, _ ){
    function privateMethod1() {
        jQ(".container").html("test");
    }
    function privateMethod2() {
        console.log(_.min([10, 5, 100, 2, 1000]));
    }
    return {
        publicMethod: function(){
            privateMethod1();
        }
    };
})( jQuery, _ );

myModule.publicMethod();

/*==========================================Exports================================*/
//Global Module
var myModule = (function(){
    var module = {},
        privateVar = "Hello World";

    function privateMethod() {
        //..
    }

    module.publicProperty = "Foobar";
    module.publicMethod = function(){
        console.log(privateVar);
    };

    return module
})();

/*======================================JQuery================================*/
function library(module) {
    $(function(){
        if(module.init){
            module.init();
        }
    });
    return module;
}

var myLibrary = library(function(){
    return {
        init: function(){
            // module implementation
        }
    }
}());
