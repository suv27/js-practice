/* QUEUES */

function queue () {
    collection = [];

    this.print = () => collection;
    this.enqueue = item => collection.push(item);
    this.dequeue = () => collection.shift();
    this.front = () => collection[0];
    this.size = () => collection.length;
    this.isEmpty = () => (collection.length === 0); 
}

let q = new queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
console.log(q.print());
console.log(q.dequeue());
console.log(q.print());
console.log(q.front());
console.log(q.print());
