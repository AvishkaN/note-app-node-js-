const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your Notes";
};

const addNotes = (title, body) => {
  const notes = loadNOtes();

  const duplicatedNOtes = notes.filter((note) => note?.title == title);

  if (!duplicatedNOtes.length) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.bgGreen.bold("successfully added notes"));

    // console.log(chalk.bgRed.bold.underline("success"));
  } else {
    console.log(chalk.bgRed("this note already exists"));
  }
};

const removeNote = (title) => {
  const notes = loadNOtes();

  const findIndex = notes.findIndex((note) => note?.title == title);

  if (findIndex == -1) {
    console.log(chalk.bgRed("this note doesn't exists"));
    return;
  }

  notes.splice(findIndex, 1);

  console.log(chalk.bgGreen("successfully removed note"));
  saveNotes(notes);

  // const newNotes = notes.filter((note) => note?.title != title);
  // console.log("newNotes", newNotes);
  // // if (!newNotes.length) {
  // console.log("successfully removed note");
  // }
};

const saveNotes = (notes = []) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const loadNOtes = () => {
  try {
    const file = fs.readFileSync("notes.json");
    const data = JSON.parse(file.toString());

    return data;
  } catch {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNote: removeNote,
};
