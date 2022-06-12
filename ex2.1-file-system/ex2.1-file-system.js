const fs = require("fs");

/* 1. Create a new txt file using the same fs module method we have
learned before. */

fs.writeFileSync("liat-notes.txt", "Hey, my name is Liat!");

// (wasn't one of the exercise... add new text to the same file:)
//it's actually answer to question 5:
/* 5. Find out and implement another method for the fs module. */
fs.appendFileSync("liat-notes.txt", " I live in Pardes Hana Karkur.");
fs.appendFileSync("liat-notes.txt", " hello!");

/* 2. Create a copy of the newly created txt file using a method from
the fs module. */
fs.copyFileSync("liat-notes.txt", "liat-notes-copy.txt");

/* 3. Rename one of the files using a method from the fs module. */
fs.renameSync("liat-notes.txt", "myNotes.txt");

/* 4. Get a list of all the file names of the current directory using a
method from the fs module. */
console.log(fs.readdirSync(__dirname)); /// not working?!
