import path from "path"

let myPath = "D:\\Github\\NodeJS\\87 - Working with Files fs and path Modules\\aboutpath.js\\vishal.txt"
console.log(path.extname(myPath))

console.log(path.dirname(myPath))
console.log(path.basename(myPath))

console.log(path.join("c:/", "programs\\vishal.txt"))