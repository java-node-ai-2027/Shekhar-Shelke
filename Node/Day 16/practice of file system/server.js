import fs from "fs"
let shekhar="Shekhar Shelke"

fs.writeFileSync("example.txt",`Hello ${shekhar}, Welcome to our world`)
const data=fs.readFileSync("./example.txt","utf8");
console.log(data)

// fs.appendFileSync(
//     "example.txt",
//     "\nI am working on thinkitive"
// )

console.log()
const data2=fs.readFileSync("./example.txt","utf8");
const line =data2
.split("\n")
.filter(line=>line.trim()!=="")
.join("\n")

const count=line.split("\n")
// console.log(line.length)
console.log(count.length)
// fs.unlinkSync("example.txt")


