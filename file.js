const fs = require("fs");
// const quote = "No beauty shines brighter than that of good heart";
// fs.writeFile("./awesome.html", quote, (err) => {
//     console.log(err);
//     console.log("Completed writing");
// });

// const quote2 = "Live more,worry less!!";
// for (let i = 1; i <= 10; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//         // console.log(err);
//         console.log(`Completed writing - ${i}`);
//     });
// }

// const quote2 = "Live more,worry less!!";
// const [ , ,num]=process.argv;
// console.log(process.argv);
// for (let i = 1; i <= parseInt(num); i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//         // console.log(err);
//         console.log(`Completed writing - ${i}`);
//     });
// }

// fs.readFile("./cool.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// });

// const quote3 = "Make every day little less ordinarily";
// fs.appendFile("./nice.txt","\n"+ quote3,(err)=>{
//     console.log("Completed Writing");
// })

fs.unlink("./delete.css",err => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Completed deleting!!");
    }
});