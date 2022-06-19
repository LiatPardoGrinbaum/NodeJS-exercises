import express from "express";
const app = express();
let numbers = [1, 2, 3, 4, 5, 6];
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/numbers", (req, res) => {
  try {
    const getNumbers = numbers;
    res.status(200).send(getNumbers);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.post("/numbers", (req, res) => {
  try {
    const newNumber = req.body.number;
    if (numbers.includes(Number(newNumber))) throw new Error("The number is already exist!");
    console.log(req.body.number);
    numbers.push(Number(newNumber));
    res.send(newNumber);
  } catch (e) {
    res.status(400).send(e.message);
    console.log(e.message);
  }
});

app.delete("/numbers/:number", (req, res) => {
  try {
    if (!numbers.includes(Number(req.params.number))) throw new Error("The number isn't exist!");
    let numsToKeep = numbers.filter((num) => num != req.params.number);
    numbers = numsToKeep; //can make it with splice and define array as const..
    res.send(req.params.number);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.put("/numbers/:number", (req, res) => {
  try {
    let updatedNumber = req.body.number;
    let numberTobeUpdate = req.params.number;
    if (!numbers.includes(Number(numberTobeUpdate))) throw new Error("The number isn't exist!");

    // let updatedArr= numbers.map((num) => {
    //   return num === Number(numberTobeUpdate) ? Number(updatedNumber) : num;
    // });
    // numbers = updatedArr;
    //could define array as const and implemnet splice on it to change it.
    numbers.splice(numbers.indexOf(Number(numberTobeUpdate)), 1, Number(updatedNumber));
    console.log(numbers);
    res.send(updatedNumber);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

const listenServer = (e) => console.log(e ? "Something went wrong" : "server is listening on port " + port);
app.listen(port, listenServer);
