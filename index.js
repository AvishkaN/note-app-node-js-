// const fs = require("fs");
// const getNotes = require("./notes");

// const message = getNotes();

// console.log(message);

// fs.appendFileSync("note.txt", "\n-----this is appending text  ");

// var validator = require("validator");

// console.log(validator.isURL("www.google.com"));
// var chalk = require("chalk");

// console.log(chalk.bgRed.bold.underline("success"));

// const command = process.argv;

// console.log(command);

const yargs = require("yargs");
const notes = require("./notes");

// yargs.version("2.1.0");

// console.log(yargs.argv);

// yargs.command({
//   command: "add",
//   describe: "Add a new route",
//   handler: function () {
//     console.log("Adding a new route ");
//   },
// });

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    // console.log("argv", argv);
    // console.log("title", argv?.title);
    // console.log("body", argv?.body);

    notes.addNotes(argv?.title, argv?.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Removing a  note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNote(argv?.title);
  },
});

yargs.command({
  command: "list",
  describe: "listing  note",
  handler: () => {
    console.log("these are note list!");
  },
});
yargs.command({
  command: "read",
  describe: "reading note",
  handler: () => {
    console.log("reding note ");
  },
});

// console.log(yargs.argv);

yargs.parse();
