/* STACKS */
// functions: push, pop, peek , length

function Stack() {

    this.count =  0;
    this.storage = {};

    this.push = (item) => {        
        this.storage[this.count] = item;
        this.count += 1;
        return `pushed ${item} to the stack`;
    }
    
    this.pop = () => {
        if(this.count === 0) {            
            return 'Stack is empty | undefined';
        }

        this.count -= 1;
        const item = this.storage[this.count];
        delete this.storage [this.count];
        return `poped ${item} from the stack`;
    }

    this.size = () => 'size is ' + this.count;
    this.peek = () => 'peeked ' + this.storage[this.count - 1];
}

let s = new Stack();
console.log(s.push(1));
console.log(s.push(3));
console.log(s.size());
console.log(s.peek());
console.log(s.pop());
console.log(s.pop());
