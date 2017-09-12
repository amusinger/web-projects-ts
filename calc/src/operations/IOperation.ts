interface IOperation{

    operation: string;

    param1: number;
    param2: number;

    execute(param1: number, param2: number): number;


}