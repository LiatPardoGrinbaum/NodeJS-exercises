const app = require("./app/app");
require("./app/db/mongoose"); //took the product collection created in the last exercise

const PORT = process.env.PORT || 5000;
const listenServer = (e) => console.log(e ? "Something went wrong" : "server is listening on port " + PORT);
app.listen(PORT, listenServer);
