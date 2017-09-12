export class SumOperation{
    operation: string;
    param1: number;
    param2: number;

    constructor(){
        this.operation = "+";
    }

    execute(fisrt:number, second:number){
        return fisrt + second;
    }


}