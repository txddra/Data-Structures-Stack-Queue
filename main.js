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


}