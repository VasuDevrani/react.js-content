import Computer from "./computer.js"; 

export default class person extends Computer{  //for exporting general class
    constructor(name,clas)
    {
        super(name);
        this.clas=clas;
    }
    hello(){
        console.log("hello");
    }
}
