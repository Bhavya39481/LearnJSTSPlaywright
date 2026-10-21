let scores=[72, 45, 70, 87, 93];

let grades = scores.map(i=> i>70 ? "pass" : "fail");
{
    console.log(grades);

}


let scores1=[72, 45, 70, 87, 93];
let passing= scores1.filter(s=> s>=70)
{
    console.log(passing);
}


let browsers = ["chrome", "firefox", "edge"];
for (let i = browsers.length - 1; i >= 0; i--) {
  console.log(browsers[i]);
}
