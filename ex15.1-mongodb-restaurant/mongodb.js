const restaurant = [
  {
    name: "BellaPizza",
    address: {
      city: "Haifa",
      street: "hanasi",
      coords: [32.806594, 34.987215],
    },
    cusine: "pizza",
    kosher: true,
    reviews: [
      { date: "1/1/22", score: 8.1 },
      { date: "19/01/21", score: 7.6 },
      { date: "8/11/21", score: 8.0 },
    ],
  },
  {
    name: "Tasty",
    address: {
      city: "Tel Aviv",
      street: "Alenbi",
      coords: [32.071219, 34.769747],
    },
    cusine: "Ice Cream",
    kosher: true,
    reviews: [
      { date: "14/06/22", score: 8.5 },
      { date: "10/08/21", score: 7.0 },
      { date: "11/03/22", score: 8.8 },
    ],
  },
  {
    name: "Pola's",
    address: {
      city: "Tel Aviv",
      street: "King Goerge",
      coords: [32.071994, 34.773389],
    },
    cusine: "Pizza",
    kosher: false,
    reviews: [
      { date: "2/12/21", score: 7.5 },
      { date: "5/04/22", score: 8.2 },
      { date: "16/10/21", score: 7.9 },
    ],
  },
  {
    name: "Japan's",
    address: {
      city: "Hadera",
      street: "Harbert Samuel",
      coords: [32.437303, 34.916301],
    },
    cusine: "Sushi",
    kosher: true,
    reviews: [
      { date: "22/10/21", score: 6.5 },
      { date: "18/03/22", score: 8.9 },
      { date: "25/10/21", score: 8.5 },
    ],
  },
  {
    name: "Sushi World",
    address: {
      city: "Haifa",
      street: "Messada",
      coords: [32.809522, 34.993521],
    },
    cusine: "Sushi",
    kosher: false,
    reviews: [
      { date: "17/09/21", score: 7.5 },
      { date: "11/07/21", score: 8.7 },
      { date: "25/03/22", score: 7.2 },
    ],
  },
];

//1.1 – Write a MongoDb query to display all the documents in the restaurant collection.
//db.restaurants.find().pretty()

//1.2 - Write a MongoDb query to display all restaurants that have a specific cuisine
//db.restaurants.find({cusine: "Sushi"})

//1.3 - Write a MongoDb query that displays only kosher restaurants
// db.restaurants.find({kosher: true})

//1.4 - Write a MongoDb query that displays only a specific cities restaurants
//db.restaurants.find({"address.city": "Haifa"}).pretty()

//1.5 - Write a MongoDb query to display a specific restaurants address
//db.restaurants.find({address: {city: "Haifa", street: "Messada", coords: [32.809522, 34.993521]}}).pretty()

//1.6 - Write a MongoDb query to display a specific restaurants coordinates
//db.restaurants.find({"address.coords": [32.071994, 34.773389]}).pretty()

//1.7. - Write a MongoDb query that should display all restaurants in ascending order by restaurant name.
//db.restaurants.find().sort({name:1}).pretty()

//1.8 - Write a MongoDb query that should display all restaurants in ascending order by city names.
// db.restaurants.find().sort({"address.city": 1}).pretty()

//1.9 - Update a specific restaurant's name
//db.restaurants.updateOne({_id : ObjectId("62af3bbe795a36ae1c13265b")},{$set:{name:"Pola's Pizza"}})

//1.10 - Update a specific restaurant by adding a new review.
// db.restaurants.updateOne({_id: ObjectId("62af3bbe795a36ae1c13265a")},{$push:{reviews:{date:"19/06/22", score: 10}}})

//1.11 - Update all restaurants to be kosher
//db.restaurants.updateMany({}, {$set:{kosher:true}})

//1.12 - Delete a specific restaurant
//db.restaurants.deleteOne({"_id" : ObjectId("62af3bbe795a36ae1c13265d")})

//1.13 - Delete all restaurants
//db.restaurants.deleteMany({})

//2.1 - Write a MongoDb query to print all restaurant names.
//db.restaurants.find().forEach(restaurant=>print(restaurant.name))
