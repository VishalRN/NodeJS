const fs = require("fs")
// const fs = require("fs/promises") using fs in es6
 
console.log("starting")
// writeFileSync writes a blocking code where it does not allow the below code to execute whereas writeFile is reverse of it 
// fs.writeFileSync("vishal.txt", "Vishal is a good boy")

fs.writeFile("vishal2.txt", "Vishal is a good boy2", ()=>{
    console.log("done")
    fs.readFile("harry2.txt", (error, data)=>{ // for reading the file 
        console.log(error, data.toString())
    })
})

fs.appendFile("vishal.txt", "vishalrobo", (e, d)=>{
    console.log(d)
})

console.log("ending")