let responseTime =850;
let sla = 1000;
let slaStatus = responseTime <=sla? "within sla" : "sla breached";
console.log(`Response Time: ${responseTime} ms - ${slaStatus}`);


//Template literal 
console.log(`what is the sla time? - ${sla} ms`);
    