## MULTIPLE BASE CONVERSIONS

A stack can be used to convert a number from one base to another base. Given a number, *n*, which we want to convert to a base, *b*, here is the algorithm for performing the conversion:

1. The rightmost digit of *n* is *n % b*. Push this digit onto the stack.
2. Replace *n* with *n / b*.
3. Repeat steps 1 and 2 until *n = 0* and there are no significant digits remaining.
4. Build the converted number string by popping the stack until the stack is empty.

> **Note:** This algorithm will work only with bases 2 through 9.

We can implement this algorithm very easily using a stack in JavaScript. Here is the definition of a function for converting a number to any of the bases 2 through 9:
```
    function mulBase(num, base) {
        var s = new Stack();

        do {
            s.push(num % base);
            num = Math.floor(num / base);
        } while (num > 0);

        var converted = "";

        while (s.length() > 0){
            converted += s.pop()
        }

        return converted;
    }
```
Converting numbers to base 2 and base 8:
```
    var num = 32;
    var base = 2;
    var newNum = mulBase(num, base);
    print(num + " converted to base " + base + " is " + newNum);
    num = 125;
    base = 8;
    var newNum = mulBase(num, base);
    print(num + " converted to base " + base + " is " + newNum);
```
The output is:
```
    32 converted to base 2 is 100000
    125 converted to base 8 is 175
```
