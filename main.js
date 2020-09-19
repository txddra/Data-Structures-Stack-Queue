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
        console.log(`The top of the stack :${this.array[0]} `)
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
        this.array.push(data)
    }

    dequeue(data){
        this.array.shift(data)

    }
    
}