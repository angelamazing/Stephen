interface Strategy {
    AlgorithmInterface(): number;
}
class Operation implements Strategy {
    public numA:number;
    public numB:number;
    AlgorithmInterface(): number {
        let result: number = 0;
        return result;
    }
}
class OperationAdd extends Operation {
    AlgorithmInterface(): number {
        let result: number = 0;
        result = this.numA + this.numB;
        return result;
    }

}
class OperationMul extends Operation{
    AlgorithmInterface(): number {
        let result: number = 0;
        result = this.numA * this.numB;
        return result;
    }
}
class OperationDiv extends Operation{
    AlgorithmInterface(): number {
        let result: number = 0;
        result = this.numA - this.numB;
        return result;
    }
}

/* class operationFactory{
    public static CreateOperation(value:string){
        let cs:Operation =null;
        switch(value){
            case '+':
                cs = new OperationAdd();
                break;
            case '*':
                cs = new OperationMul();
                break;
        }
        return cs;
    }
} */

class OperationText{
    
     cs:Operation = null;

     constructor(value:string,numA:number,numB:number){
        switch(value){
            case '+':
                this.cs = new OperationAdd();
                this.cs.numA=numA;
                this.cs.numB=numB;
                break;
            case '*':
                this.cs = new OperationMul();
                this.cs.numA=numA;
                this.cs.numB=numB;
                break;
            case '-':
                this.cs = new OperationDiv();
                this.cs.numA=numA;
                this.cs.numB=numB;
                break;
        }
     }
     public GetResult():number{
        return this.cs.AlgorithmInterface();
     }
}

let cs:OperationText = new OperationText('-',4,3);
let cs2:OperationText= new OperationText('*',4,3);
let result:number = cs.GetResult();
let result2:number = cs2.GetResult();
console.log(result);
console.log(result2);