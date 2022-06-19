import express from "express";
import axios from "axios";
const app = express();
const port = 5000;

//!the resl project is in another path outside this folder. Here it was the the start..

app.get("/weather/:city", async (req, res) => {
  try {
    const city = req.params.city;
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c7655ed43d404d960e1709cac30f60be`);
    console.log(data.list[0].main.temp - 273);
    res.status(200).send(data);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

const listenServer = (e) => console.log(e ? "Something went wrong" : "server is listening on port " + port);
app.listen(port, listenServer);
