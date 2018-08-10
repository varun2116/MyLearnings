## Searching Textual Data

Up to this point, all of our searches have been conducted on numeric data. We can also use the algorithms with textual data. First, let’s define the data set we are using:
```
    The nationalism of Hamilton was undemocratic. The democracy of Jefferson was,
    in the beginning, provincial. The historic mission of uniting nationalism and
    democracy was in the course of time given to new leaders from a region beyond
    the mountains, peopled by men and women from all sections and free from those
    state traditions which ran back to the early days of colonization. The voice
    of the democratic nationalism nourished in the West was heard when Clay of
    Kentucky advocated his American system of protection for industries; when
    Jackson of Tennessee condemned nullification in a ringing proclamation that
    has taken its place among the great American state papers; and when Lincoln
    of Illinois, in a fateful hour, called upon a bewildered people to meet the
    supreme test whether this was a nation destined to survive or to perish. And
    it will be remembered that Lincoln's party chose for its banner that earlier
    device--Republican--which Jefferson had made a sign of power. The "rail splitter"
    from Illinois united the nationalism of Hamilton with the democracy of Jefferson,
    and his appeal was clothed in the simple language of the people, not in the
    sonorous rhetoric which Webster learned in the schools.
```

Let’s begin with a **sequential search** and search for the word “rhetoric,” which is in the paragraph close to the end of the file. Let’s also time the search so we can compare it with a binary search.
```
    var words = str.split(" ");
    var word = "rhetoric";
    var start = new Date().getTime();
    var position = seqSearch(words, word);
    var stop = new Date().getTime();
    var elapsed = stop - start;
    if (position >= 0) {
       print("Found " + word + " at position " + position + ".<br/>");
       print("Sequential search took " + elapsed + " milliseconds.");
    }
    else {
       print(word + " is not in the file.");
    }
```

The output from this program is:
```
    Found rhetoric at position 175.
    Sequential search took 0 milliseconds.
```

Even though **binary search** is faster, we won’t be able to measure any difference between seqSearch() and binSearch(), but we will run the program using binary search anyway to ensure that the binSearch() function works correctly with text.
```
    var words = str.split(" ");
    insertionSort(words);
    var word = "rhetoric";
    var start = new Date().getTime();
    var position = binSearch(words, word);
    var stop = new Date().getTime();
    var elapsed = stop - start;
    if (position >= 0) {
       print("Found " + word + " at position " + position + ".<br/>");
       print("Binary search took " + elapsed + " milliseconds.");
    }
    else {
       print(word + " is not in the file.");
    }
```

The output from this program is:
```
    Found rhetoric at position 125.
    Binary search took 0 milliseconds.
```
