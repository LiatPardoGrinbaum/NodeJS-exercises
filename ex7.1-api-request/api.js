import https from "https";
import axios from "axios";
import superagent from "superagent";

//***********with request and options:***********

// const options = {
//   hostname: "cat-fact.herokuapp.com",
//   port: 443,
//   path: "/facts",
//   method: "GET",
// };
// const req = https.request(options, (res) => {
//   let data = "";
//   res.on("data", (chunk) => {
//     data += chunk;
//   });

//   res.on("end", () => {

//     console.log(JSON.parse(data));
//   });
// });

// req.on("error", (error) => {
//   console.error(error);
// });

// req.end();

//***********another way- with only get:***********

// https
//   .get("https://cat-fact.herokuapp.com/facts", (response) => {
//     let data = "";
//     response.on("data", (chunk) => {
//       data += chunk;
//     });

//     response.on("end", () => {
//       console.log(JSON.parse(data));
//     });
//   })
//   .on("error", (error) => {
//     console.log(error);
//   });

// ***********with axios:***********

// axios
//   .get("https://cat-fact.herokuapp.com/facts")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//***********with superagent:***********
superagent.get("https://cat-fact.herokuapp.com/facts").then((response) => {
  console.log(response._body);
});
