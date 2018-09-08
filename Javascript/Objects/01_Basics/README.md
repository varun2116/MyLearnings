## Object basics

An object is a collection of related data and/or functionality (which usually consists of several variables and functions — which are called properties and methods when they are inside objects.) Let's work through an example to understand what they look like.

As with many things in JavaScript, creating an object often begins with defining and initializing a variable. Try entering the following below the JavaScript code:
```
    var person = {};
```

If you enter `alert(person)` into your JS console and press the button, you should get the following result:
```
    [object Object]
```
But this is an empty object, so we can't really do much with it. Let's update our object to look like this:
```
    var person = {
      name: ['Bob', 'Smith'],
      age: 32,
      gender: 'male',
      interests: ['music', 'skiing'],
      bio: function() {
        alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
      },
      greeting: function() {
        alert('Hi! I\'m ' + this.name[0] + '.');
      }
    };
```
try entering some of the following into the JavaScript console on your browser devtools:
```
    person.name
    person.name[0]
    person.age
    person.interests[1]
    person.bio()
    person.greeting()
```
You have now got some data and functionality inside your object, and are now able to access them with some nice simple syntax!

So what is going on here? Well, an object is made up of multiple members, each of which has a `name` (e.g. name and age above), and a `value` (e.g. ['Bob', 'Smith'] and 32). Each `name/value` pair must be separated by a comma, and the name and value in each case are separated by a colon. The syntax always follows this pattern:
```
    var objectName = {
      member1Name: member1Value,
      member2Name: member2Value,
      member3Name: member3Value
    };
```
The value of an object member can be pretty much anything — in our person object we've got a string, a number, two arrays, and two functions. The first four items are data items, and are referred to as the object's **properties**. The last two items are functions that allow the object to do something with that data, and are referred to as the object's **methods**.

An object like this is referred to as an **object literal** — we've literally written out the object contents as we've come to create it. This is in contrast to objects instantiated from classes, which we'll look at later on.

It is very common to create an object using an object literal when you want to transfer a series of structured, related data items in some manner, for example sending a request to the server to be put into a database. Sending a single object is much more efficient than sending several items individually, and it is easier to work with than an array, when you want to identify individual items by name.

<hr />

### Dot notation

Above, you accessed the object's properties and methods using **dot notation**. The object name (person) acts as the **namespace** — it must be entered first to access anything encapsulated inside the object. Next you write a dot, then the item you want to access — this can be the name of a simple property, an item of an array property, or a call to one of the object's methods, for example:
```
    person.age
    person.interests[1]
    person.bio()
```

#### Sub-namespaces

It is even possible to make the value of an object member another object. For example, try changing the name member from
```
    name: ['Bob', 'Smith'],
```
to
```
    name : {
      first: 'Bob',
      last: 'Smith'
    },
```
Here we are effectively creating a **sub-namespace**. This sounds complex, but really it's not — to access these items you just need to chain the extra step onto the end with another dot. Try these in the JS console:
```
    person.name.first
    person.name.last
```
**Important:** At this point you'll also need to go through your method code and change any instances of
```
    name[0]
    name[1]
```
to
```
    name.first
    name.last
```
Otherwise your methods will no longer work.

<hr />

### Bracket notation

There is another way to access object properties — using bracket notation. Instead of using these:
```
    person.age
    person.name.first
```
You can use
```
    person['age']
    person['name']['first']
```

This looks very similar to how you access the items in an array, and it is basically the same thing — instead of using an index number to select an item, you are using the name associated with each member's value. It is no wonder that objects are sometimes called **associative arrays** — they map strings to values in the same way that arrays map numbers to values.

<hr />

### Setting object members

So far we've only looked at retrieving (or **getting**) object members — you can also set (update) the value of object members by simply declaring the member you want to set (using dot or bracket notation), like this:
```
    person.age = 45;
    person['name']['last'] = 'Cratchit';
```
Try entering the above lines, and then getting the members again to see how they've changed, like so:
```
    person.age
    person['name']['last']
```
Setting members doesn't just stop at updating the values of existing properties and methods; you can also create completely new members. Try these in the JS console:
```
    person['eyes'] = 'hazel';
    person.farewell = function() { alert("Bye everybody!"); }
```
You can now test out your new members:
```
    person['eyes']
    person.farewell()
```

One useful aspect of bracket notation is that it can be used to set not only member values dynamically, but member names too. Let's say we wanted users to be able to store custom value types in their people data, by typing the member name and value into two text inputs? We could get those values like this:
```
    var myDataName = nameInput.value;
    var myDataValue = nameValue.value;
```
we could then add this new member name and value to the `person` object like this:
```
    person[myDataName] = myDataValue;
```
To test this, try adding the following lines into your code, just below the closing curly brace of the `person` object:
```
    var myDataName = 'height';
    var myDataValue = '1.75m';
    person[myDataName] = myDataValue;
```
Now try saving and refreshing, and entering the following into your text input:
```
    person.height
```
> **Note :** Adding a property to an object using the method above isn't possible with dot notation, which can only accept a literal member name, not a variable value pointing to a name.

<hr />

### What is `this`?

You may have noticed something slightly strange in our methods. Look at this one for example:
```
    greeting: function() {
      alert('Hi! I\'m ' + this.name.first + '.');
    }
```
You are probably wondering what `this` is. The `this` keyword refers to the current object the code is being written inside — so in this case `this` is equivalent to `person`. So why not just write person instead? As you'll see in the [Object-oriented JavaScript](02_Object_Oriented) when we start creating constructors, etc., this is very useful — it will always ensure that the correct values are used when a member's context changes (e.g. two different person object instances may have different names, but will want to use their own name when saying their greeting).

Let's illustrate what we mean with a simplified pair of person objects:
```
    var person1 = {
      name: 'Chris',
      greeting: function() {
        alert('Hi! I\'m ' + this.name + '.');
      }
    }

    var person2 = {
      name: 'Brian',
      greeting: function() {
        alert('Hi! I\'m ' + this.name + '.');
      }
    }
```
In this case, `person1.greeting()` will output "Hi! I'm Chris."; `person2.greeting()` on the other hand will output "Hi! I'm Brian.", even though the method's code is exactly the same in each case. As we said earlier, `this` is equal to the object the code is inside — this isn't hugely useful when you are writing out object literals by hand, but it really comes into its own when you are dynamically generating objects (for example using constructors). It will all become clearer later on.

<hr />

### Different ways of creating an Object

#### Using the Object() constructor:

```
    var d = new Object();
```

#### Using Object.create() method:

```
    var a = Object.create(null);
```
This method creates a new object extending the prototype object passed as a parameter.

#### Using the bracket's syntactig sugar:

```
    var b = {};
```

#### Using a function constructor

```
    var Obj = function(name) {
      this.name = name
    }
    var c = new Obj("hello");
```
What the new operator does is call a function and setting this of the function to a fresh new Object, and binding the prototype of that new Object to the function's prototype. As is:
```
    function f {};

    new f(a, b, c);

    Would be equivalent to:

    // Create a new instance using f's prototype.
    var newInstance = Object.create(f.prototype)
    var result;

    // Call the function
    result = f.call(newInstance, a, b, c),

    // If the result is a non-null object, use it, otherwise use the new instance.
    result && typeof result === 'object' ? result : newInstance
```

#### Using the function constructor + prototype:

````
    function myObj(){};
    myObj.prototype.name = "hello";
    var k = new myObj();
```

#### Using ES6 class syntax:

```
    class myObject  {
      constructor(name) {
        this.name = name;
      }
    }
    var e = new myObject("hello");
```

#### Singleton pattern:

```
    var l = new function(){
      this.name = "hello";
    }
```
