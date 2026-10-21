let tests=["login", "search", "checkout"];

for(let i=0; i<tests.length; i++)
{
    console.log(i, tests[i]);
}

//for ....of(cleanest for values)
for(let check of tests)
{
    console.log(check);
}

//for each for ieterate

tests.forEach((x, index) =>{
    console.log(`${index}: ${x}`);
});

//using entries

for(let [i, x] of tests.entries())
{console.log(`${i}, ${x}`);}

//using in

let students=["Bhavi", "Pravi", "Dundu","Nithu"];
for(let x in students)
{
    console.log(x, "->", students[x]);
}