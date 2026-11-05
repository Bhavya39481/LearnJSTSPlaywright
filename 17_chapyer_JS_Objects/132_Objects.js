let a ={name:"bhavya"};

let a1={status:"pass"}
console.log(a1.status);
console.log(a1["status"]);

//keys are case sensitive
let a2={status:"pass", Status:"fail"};
console.log(a2["status"]);
console.log(a2["Status"]);