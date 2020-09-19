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
        console.log(`The top of the stack :${this.array[this.array.length-1]} `)
    }

    isEmpty(){
        
            return this.array.length === 0
        
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
            
        return this.array.length === 0;

        
    }
    printQueue(){
        let str = ""; 
    for(let i = 0; i < this.array.length; i++) 
        str += this.array[i] +" "; 
    return str; 
    }
}