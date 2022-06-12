/****** What is the difference between import and require? ******/

// require is typically used with NodeJS to read and execute CommonJS modules. It came before es6 (ecma javascript 2015) and is synchronic.
// if you are using require to get local modules, first you need to export them using module.exports.

// import is an ES module, and with export, they are known as ES6 import and export. it is asynchronous.
//We can’t use import or export outside ES modules.

//more differnces:
/*  you have the freedom of using require statements anywhere in your code.
On the other hand, import statements can only be defined at the beginning of the file. Defining a import statement elsewhere will give you an error or automatically shift to the file’s beginning. */

//---------------------------------------------------------

/****** How can you enable using the import syntax using node js ******/
//npm init and then add in package.json "type":"module"

//---------------------------------------------------------

/****** Give 2 node.js environment variables that are not available when using the import syntax. ******/
// __dirname, __pathname

//---------------------------------------------------------
/* Create 3 functions using the export/import syntax. */
// I created the function in funcs.js file. and I use import in this file below:
import { func1, func2, func3 } from "./funcs.js";

console.log(func1());
console.log(func2());
console.log(func3());

//---------------------------------------------------------
/* Import the file system module using the import syntax. */
// const fs = require("fs")
import fs from "fs";
