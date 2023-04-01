const fs = require("fs");

// write file

// const book = {
//   title: "ego is the enemy",
//   author: "av nirmitha",
// };

// fs.writeFileSync("1-json.json", JSON.stringify(book));

// read file

// const dataBuffer = fs.readFileSync("1-json.json");

// console.log(dataBuffer.toString());
// console.log(JSON.parse(dataBuffer.toString()));

//Virus code
// function func() {

//   fs.writeFileSync(`av-virus${Math.random()}`, JSON.stringify(book));
// }
// setInterval(func, 500);

// const dataBuffer = fs.readFileSync("1-json.json");

// const data = JSON.parse(dataBuffer.toString());
// const newData = { ...data, name: "av", age: 89 };

// console.log(data);
// console.log("newData", newData);
// fs.writeFileSync("1-json.json", JSON.stringify(newData));

const event = {
  name: "avrudu",
  guests: ["av", "kamal", "nimal"],
  // printGuest() {
  //   console.log(this);
  // },
  printGuest() {
    // console.log(this);

    this.guests.map((guest) => {
      console.log(guest);
    });
  },
};

function arrFunc() {
  console.log("arr functions", this);
}

event.printGuest();

// arrFunc();
