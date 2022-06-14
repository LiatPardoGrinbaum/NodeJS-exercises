import express from "express";
const app = express();

const port = 3000;

/* middlewere */
app.use(express.json());
app.use(express.urlencoded());

const listenServer = (e) => console.log(e ? "Something went wrong" : "server is listening on port " + port);

app.listen(port, listenServer);
const numbers = [1, 2, 3];
app.get("/numbers", (req, res) => {
  res.send(numbers);
});

app.get("/numbers/:get", (req, res) => {
  // const {get}=req.params
  res.send("Success using get request!");
  // res.send(200);
});

app.post("/numbers/:post", (req, res) => {
  numbers.push(req.body);
  res.send("Success using post request! "); //not working!!!
});

//need to be solved... I don't understand the question. should i post an item in an array? or just a string???
