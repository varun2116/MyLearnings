## Default parameter values

In JavaScript there is no defined way to assign the default values to the function parameters that are not passed. So, the programmers usually check for the parameters with the **undefined** value (as it is the default value for the missing parameters), and assign the default values to them. Here is an example, which shows how to do this:
```
    function myFunction(x, y, z)
    {
      x = x === undefined ? 1 : x;
      y = y === undefined ? 2 : y;
      z = z === undefined ? 3 : z;

      console.log(x, y, z); //Output "6 7 3"
    }
    myFunction(6, 7);
```

ES6 provides a new syntax that can be used to do this in an easier way. Here is the code which demonstrates how to do this in ES6:
```
    function myFunction(x = 1, y = 2, z = 3)
    {
      console.log(x, y, z); // Output "6 7 3"
    }

    myFunction(6,7);
```

Also, passing *undefined* is considered as missing an argument. Here is an example to demonstrate this:
```
    function myFunction(x = 1, y = 2, z = 3)
    {
      console.log(x, y, z); // Output "1 7 9"
    }

    myFunction(undefined,7,9);
```

Defaults can also be `expressions`. Here is an example to demonstrate this:
```
    function myFunction(x = 1, y = 2, z = 3 + 5)
    {
      console.log(x, y, z); // Output "6 7 8"
    }

    myFunction(6,7);
```
