## DEMONSTRATING RECURSION

Stacks are often used in the implementation of computer programming languages. One area where stacks are used is in implementing recursion.

To demonstrate how recursion is implemented using a stack, let’s consider a recursive definition of the factorial function. First, here is a definition of factorial for the number 5:
> 5! = 5 * 4 * 3 * 2 * 1 = 120

Here is a recursive function to compute the factorial of any number:
```
    function factorial(n) {
        if(n === 0){
            return 1;
        }

        return n * factorial(n-1);
    }
```
When called with the argument 5, the function returns 120.

To simulate computing *5!* using a stack, first push the numbers 5 through 1 onto a stack. Then, inside a loop, pop each number and multiply the number by the running product, resulting in the correct answer, 120. The code for the function, along with a test program:
```
    function stackFactorial(n) {
        var s = new Stack();

        while(n > 1){
            s.push(n--);
        }

        var product = 1;

        while(s.length() > 0){
            product *= s.pop();
        }
        return product;
    }

    print(factorial(5)); // displays 120
    print(stackFactorial(5)); // displays 120
```
