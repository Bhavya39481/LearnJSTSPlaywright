let grid=[
    ["login", "pass", 200],
    ["checkout", "fail", 400],
    ["logout", "pass", 200]
];

for(let i=0; i<grid.length; i++){
    for(j=0; j<grid[i].length; j++)
    {
        process.stdout.write(grid[i][j]+" ");
    }
    console.log(" ");

}