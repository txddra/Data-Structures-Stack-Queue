class stack{
    constructor(array){
        this.array =[];
        return this
    }

    push(data){
        this.array.push(data);
    }
    
    pop(data){
        this.array.pop(data);
    }

    peek(){
        console.log(`The top of the stack :${this.array.length-1} `)
    }

    isEmpty(){
        if(this.array.length === 0){
            return true
        }
    }

}

class queue{
    constructor(array){
        this.array = [];

    }

    enqueue(data){
        this.array.push(data);
    }

    dequeue(data){
        this.array.shift(data);

    }
    font(){
        console.log(`The front of the queue is ${this.array[0]}`)
    }
    isEmpty(){
        if(this.array.length === 0){
            return true;
        }
    }
    printQueue(){
        console.log(array.join(','))
    }
}