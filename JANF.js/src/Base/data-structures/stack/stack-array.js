//  Data Structure to store the elements of a stack
class Stack {
    constructor() {
        this.items = []; // {1}
    }

    //  Method to add element to top of the stack
    push(element) {
        this.items.push(element); // push from JavaScript Array class
    }

    //  Remove last item from the Stack (LIFO)
    pop() {
       return this.items.pop(); //  pop from JavaScript Array class
    }

    //  Show the last element added to the stack
    peek() {
        return this.items[this.items.length - 1]; //    Last element is at position (length-1)
    }

    //  Returns true if stack is empty and false if not.

    isEmpty() {
        return this.items.length === 0;
    }

    //  Size method (just length but using the term size for collection naming standard)
    size() {
        return this.items.length;
    }

    //  Clear the stack
    clear() {
        this.items = []; // easiest way to clear the stack
    }
}
