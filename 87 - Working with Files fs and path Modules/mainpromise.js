import fs from "fs/promises"

// not using async function for await because we are already in module 
let a = await fs.readFile("vishal.txt")

let b = await fs.appendFile("vishal.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(), b)