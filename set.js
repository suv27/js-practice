/* SETS */
// funtion: has, size, values, add, delete, union, intersection, difference, subset

function mySet() {
    let collection = [];

    this.has = (item) => (collection.indexOf(item) !== -1);
    this.size = () => collection.length;
    this.values = () => collection;

    this.add = (item) => {
        if(!(this.has(item))) {
            collection.push(item);
            return true;
        }
        return false;
    }

    this.delete = (item) => {
        if(this.has(item)) {
            const index = collection.indexOf(item);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }

    this.union = (otherSet) => {
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach(item => unionSet.add(item));
        secondSet.forEach(item => unionSet.add(item));
        return unionSet.values();
    }

    this.intersection = (otherSet) => {
        let intersectionSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(item => {
            if(otherSet.has(item)){
                intersectionSet.add(item);
            }            
        });
        return intersectionSet.values();
    }

    this.difference = (otherSet) => {
        let differenceSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(item => {
            if(!(otherSet.has(item))){
                differenceSet.add(item);
            }            
        });
        return differenceSet.values();
    }

    this.subset = (otherSet) => {
        let firstSet = this.values();
        return firstSet.every(item => otherSet.has(item));
    }
}

let first = new mySet();
let second = new mySet();
console.log('Adding ...', first.add(2));
console.log('Adding ...', first.add(4));
console.log('Adding ...', first.add(6));
console.log('Adding ...', first.add(8));
console.log('Deleting ...', first.delete(8));
console.log('First set size: ', first.size());
console.log('First set values: ', first.values());
console.log('Adding ...', second.add(1));
console.log('Adding ...', second.add(2));
console.log('Adding ...', second.add(5));
console.log('Adding ...', second.add(4));
console.log('Second set size: ', second.size());
console.log('Second set values: ', second.values());
console.log('The subset of a set: ', second.subset(first));
console.log('The union of two sets: ', first.union(second));
console.log('The difference of two sets: ', first.difference(second));
console.log('The intersection of two sets: ', first.intersection(second));
