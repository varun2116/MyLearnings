## Priority Queues

In the course of normal queue operations, when an element is removed from a queue, that element is always the first element that was inserted into the queue. There are certain applications of queues, however, that require that elements be removed in an order other than first-in, first-out. When we need to simulate such an application, we need to create a data structure called a **priority queue**.

A priority queue is one where elements are removed from the queue based on a *priority constraint*. For example, the waiting room at a hospital’s emergency department (ED) operates using a priority queue. When a patient enters the ED, he or she is seen by a triage nurse. This nurse’s job is to assess the severity of the patient’s condition and assign the patient a priorty code. Patients with a high priority code are seen before patients with a lower priority code, and patients that have the same priority code are seen on a first-come, first-served, or first-in, first-out, basis.

Let’s begin building a priority queue system by first defining an object that will store the elements of the queue:
```
    function Patient(name, code) {
        this.name = name;
        this.code = code;
    }
```
The value for code will be an integer that represents the patient’s priority, or severity.

Now we need to redefine the **dequeue()** function that removes the element in the queue with the highest priority. We will define the highest priority element as being the element with the lowest priority code. This new dequeue() function will move through the queue’s underlying array and find the element with the lowest code. Then the function uses the splice() function to remove the highest-priority element. Here is the new definition for dequeue():
```
    function dequeue() {
        var priority = this.dataStore[0].code, counter = 0;
        for (var i = 1; i < this.dataStore.length; i++) {
            if(this.dataStore[i].code < priority){
                priority = this.dataStore[i].code;
                counter = i;
            }
        }
        return this.dataStore.splice(counter, 1);
    }
```
The dequeue() function uses a simple sequential search to find the element with the highest priority code (the lowest number; 1 has a higher priority than 5). The function returns an array of one element—the one removed from the queue.

Finally, we add a toString() function modified to handle Patient objects:
```
    function toString() {
        var retStr = "", i =0;
        while (i < this.dataStore.length) {
            retStr += this.dataStore[i].name + "code : "
                      + this.dataStore[i].code +"\n";
            i++;
        }
        return retStr;
    }
```

Test program
```
    var p = new Patient("Smith",5);
    var ed = new Queue();
    ed.enqueue(p);
    p = new Patient("Jones", 4);
    ed.enqueue(p);
    p = new Patient("Fehrenbach", 6);
    ed.enqueue(p);
    p = new Patient("Brown", 1);
    ed.enqueue(p);
    p = new Patient("Ingram", 1);
    ed.enqueue(p);
    print(ed.toString());
    var seen = ed.dequeue();
    print("Patient being treated: " + seen[0].name);
    print("Patients waiting to be seen: ")
    print(ed.toString());
    // another round
    var seen = ed.dequeue();
    print("Patient being treated: " + seen[0].name);
    print("Patients waiting to be seen: ")
    print(ed.toString());
    var seen = ed.dequeue();
    print("Patient being treated: " + seen[0].name);
    print("Patients waiting to be seen: ")
    print(ed.toString());
```
The output of the test program:
```
    Smith code : 5
    Jones code : 4
    Fehrenbach code : 6
    Brown code : 1
    Ingram code : 1

    Patient being treated: Brown
    Patients waiting to be seen:
    Smith code : 5
    Jones code : 4
    Fehrenbach code : 6
    Ingram code : 1

    Patient being treated: Ingram
    Patients waiting to be seen:
    Smith code : 5
    Jones code : 4
    Fehrenbach code : 6

    Patient being treated: Jones
    Patients waiting to be seen:
    Smith code : 5
    Fehrenbach code : 6
```
