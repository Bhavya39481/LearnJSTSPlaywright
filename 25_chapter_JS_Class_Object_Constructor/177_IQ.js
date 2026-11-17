class Car{
    // Constructor
    // Default vs Param

    constructor(assigned_name){
        this.name = assigned_name;
    }
}

let hyndai_i10 = new Car("i10");
console.log(hyndai_i10.name);

let mg_hector = new Car("MG Hector");
console.log(mg_hector.name);

const i11 = new Car("i11");     // constructor runs → "i10"
console.log(i11.name);
const Nexon = new Car("Nexon");
console.log(Nexon.name);