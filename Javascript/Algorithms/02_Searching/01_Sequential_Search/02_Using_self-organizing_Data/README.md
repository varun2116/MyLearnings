## USING SELF-ORGANIZING DATA

The fastest successful sequential searches on unordered data occur when the data being searched for is located at the beginning of the data set. You can ensure that a successfully found data item will be found quickly in the future by moving it to the beginning of a data set after it has been found in a search.

The concept behind this strategy is that we can minimize search times by locating items that are frequently searched for at the beginning of a data set. For example, if you are a librarian and you are asked several times a day for the same reference book, you will keep that book close to your desk for easy access. After many searches, the most frequently searched-for items will have moved from wherever they were stored to the beginning of the data set. This is an example of **self-organized data**: data that is organized not by the programmer before the program is executed, but by the program itself while the program is running.

It makes sense to allow your data to self-organize since the data being searched most likely follow the “80-20 rule,” meaning that 80% of the searches made on a data set are searching for just 20% of the data in the set. Self-organization will eventually put that 20% at the beginning of the data set, where a simple sequential search will find them quickly.

We can modify our **seqSearch()** function to include self-organization fairly easily.
```
    function seqSearch(arr, data) {
        for (var i = 0; i < arr.length; i++) {
            if(arr[i] == data){
                if(i > 0){
                    swap(arr, i, i - 1);
                }
                return true;
            }
        }
        return false;
    }
```
You’ll notice that the function checks to make sure that the found data is not already in position 0.

The preceding definition uses a *swap()* function to exchange the found data with the data currently stored in the previous position. Here is the definition for the *swap()* function:
```
    function swap(arr, index, index1) {
        var temp = arr[index];
        arr[index] = arr[index1];
        arr[index1] = temp;    
    }
```

You’ll notice that when using this technique, which is similar to how data is sorted with the *bubble sort* algorithm, the most frequently accessed elements will eventually work their way to the beginning of the data set. For example, this program:
```
    var numbers = [5,1,7,4,2,10,9,3,6,8];
    print(numbers);
    for (var i = 1; i <= 3; i++) {
       seqSearch(numbers, 4);
       print(numbers);
    }
```
generates the following output:
```
    5,1,7,4,2,10,9,3,6,8
    5,1,4,7,2,10,9,3,6,8
    5,4,1,7,2,10,9,3,6,8
    4,5,1,7,2,10,9,3,6,8
```
Notice how the value 4 “bubbles” up to the beginning of the list because it is being searched for three times in a row.

This technique also guarantees that if an element is already at the beginning of the data set, it won’t get moved farther down.

Another way we can write the *seqSearch()* function with self-organizing data is to move a found item to the beginning of the data set, though we wouldn’t want to exchange an element if it is already close to the beginning. To achieve this goal, we can swap found elements only if they are located at least some specified distance away from the beginning of the data set. We only have to determine what is considered to a be far enough away from the beginning of the data set to warrant moving the element closer to the beginning. Following the 80-20 rule again, we can make a rule that states that a data element is relocated to the beginning of the data set only if its location lies outside the first 20% of the items in the data set.
```
    function seqSearch(arr, data) {
        for (var i = 0; i < arr.length; i++) {
            if(arr[i] == data && i > (arr.length * 0.2)){
                swap(arr, i, 0);
                return true;
            }
            else if (arr[i] == data) {
                return true;
            }
        }
        return false;
    }
```

 A program that tests this definition on a small data set of 10 elements.
```
    var nums = [];
    for (var i = 0; i < 10; ++i) {
       nums[i] = Math.floor(Math.random() * 11);
    }
    dispArr(nums);
    print();
    var val = 3;
    if (seqSearch(nums, val)) {
       print("Found element: " +val);
       print();
       dispArr(nums);
    }
    else {
       print(val + " is not in array.");
    }
    print();
    var val = 2;
    if (seqSearch(nums, val)) {
       print("Found element: " +val);
       print();
       dispArr(nums);
    }
    else {
       print(val + " is not in array.");
    }
```
Here are the results of a sample run of this program:
```
    8 0 3 2 8 5 4 7 3 9
    Found element: 3
    8 0 3 2 8 5 4 7 3 9
    Found element: 2
    2 0 3 8 8 5 4 7 3 9
```
Because the searched-for element is so close to the front of the data set, the function does not change its position.
