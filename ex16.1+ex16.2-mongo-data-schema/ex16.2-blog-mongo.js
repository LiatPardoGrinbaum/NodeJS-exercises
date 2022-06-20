// const { mongoClient } = require("mongodb");
import mongodb from "mongodb";

const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectId;

const connectionURL = "mongodb://127.0.0.1:27017"; //no localhost for some reason... better use this
const databaseName = "blog-data";

const user1_id = new ObjectID();
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database!");
  }
  const db = client.db(databaseName);
  // db.collection("users").insertMany(
  //   [
  //     {

  //       name: "Liat",
  //       age: 34,
  //       city: "Pardes-Hana Karkur",
  //       email: "pardo.liat@gmail.com",
  //     },
  //     {
  //       name: "Ella",
  //       age: 35,
  //       city: "Jerusalem",
  //       email: "dr_ella@gmail.com",
  //     },
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       return console.log("Unable to insert user");
  //     }
  //     console.log(result);
  //   }
  // );

  // db.collection("users").updateOne({
  //   {name:"Liat"},
  //   { $set:{

  //   }}
  // })

  const user1 = db.collection("users").findOne({ email: "pardo.liat@gmail.com" });
  const user2 = db.collection("users").findOne({ email: "dr_ella@gmail.com" });
  console.log(user1); //!returns a promise so inside posts collection i get owner: null

  // db.collection("posts").insertMany(
  //   [
  //     {
  //       name: "Why am I changing my proffession at the age of 34?",
  //       date: "20-06-22",
  //       owner: user1._id,
  //       comments: [
  //         {
  //           // post_id:"",
  //           comment: "Very intresting, thanks!",
  //           date: "",
  //         },
  //         {
  //           comment: "Nothing's new!",
  //           date: "",
  //         },
  //       ],
  //     },
  //     {
  //       name: "10  world's best places to visit.",
  //       date: "20-02-21",
  //       owner: user1._id,
  //       comments: [],
  //     },
  //     {
  //       name: "Doctors in Israel",
  //       date: "25-05-22",
  //       owner: user2._id,
  //       comments: [
  //         {
  //           comment: "I had a fun time reading it! Thank you!",
  //           date: "",
  //         },
  //         {
  //           comment: "Informative. thanks.",
  //           date: "",
  //         },
  //       ],
  //     },
  //     {
  //       name: "5 best songs ever",
  //       date: "10-11-21",
  //       owner: user2._id,
  //       comments: [],
  //     },
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       return console.log("Unable to insert user");
  //     }
  //     console.log(result);
  //   }
  // );

  // db.collection("users").find({name:"Liat"})
});

//? How can I give the posts collections the right owner id's?
