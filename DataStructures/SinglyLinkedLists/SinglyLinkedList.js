// piece of data - val
// reference to next node -- next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    } 
  
    // This function should accept a value
    // Create a new node using the value passed to the function
    // If there is no head property on the list, set the head and tail to be the newly created node
    // Otherwise set the next property on the tail node to be the new node and set the tail property on the list to be newly created node.
    // Increment the length by one      
  
    push(val){
        var node = new Node(val);
        if (this.head === null) {
           this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }   
        this.length++;
        return this;
    }
}

let list = new SinglyLinkedList();
console.log(list);
list.push(10);
console.log(list);
list.push(20);
console.log(list);
