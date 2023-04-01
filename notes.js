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
};

const listNotes = (title) => {
  const notes = loadNOtes();

  console.log(chalk.bgGreen("All Notes"));

  notes.map((note, i) => console.log(`${i + 1}) ${note?.title}`));
};

const readNote = (title) => {
  const notes = loadNOtes();

  const finededItem = notes.find((note) => note?.title == title);
  // console.log("findIndex", finededItem);

  if (finededItem) {
    console.log(chalk.bold("title  -" + finededItem.title));
    console.log(chalk("description -" + finededItem.body));
  } else {
    console.log(chalk.bgRed("this note doesn't exists"));
  }

  // notes.splice(findIndex, 1);
  // console.log(chalk.bgGreen("successfully removed note"));

  // saveNotes(notes);
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
  listNotes: listNotes,
  readNote: readNote,
};
