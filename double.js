const dbl = (n) => n * 2;
console.log("Hello, 🌍", dbl(10));

//Input - node double.js 10
console.log(process.argv); //argument values
// ['C:\\Program Files\\nodejs\\node.exe',
//     'D:\\Guvi\\Notes\\NodeJS\\Node-JS_class\\double.js',
//     '10']

// console.log(dbl(process.argv[2]));
const [,, num]=process.argv;
console.log(dbl(num));



