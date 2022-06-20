/* 

ex16.1- Schema

collections: users, posts

const users = [
  {
    
    name: "Liat",
    age: 34,
    city: "Pardes-Hana Karkur",
    email: "pardo.liat@gmail.com",
  },
  {
  
    name: "Ella",
    age: 35,
    city: "Jerusalem",
    email: "dr_ella@gmail.com",
  },
];

const posts = [
      {
        name: "Why am I changing my proffession at the age of 34?",
        date: "20-06-22",
        owner: user1._id, //? need to figure out
        comments: [
          {
            // post_id:"",
            comment: "Very intresting, thanks!",
            date: "",
          },
          {
            comment: "Nothing's new!",
            date: "",
          },
        ],
      },
      {
        name: "10  world's best places to visit.",
        date: "20-02-21",
        owner: user1._id,
        comments: [],
      },
      {
        name: "Doctors in Israel",
        date: "25-05-22",
        owner: user2._id,
        comments: [
          {
            comment: "I had a fun time reading it! Thank you!",
            date: "",
          },
          {
            comment: "Informative. thanks.",
            date: "",
          },
        ],
      },
      {
        name: "5 best songs ever",
        date: "10-11-21",
        owner: user2._id,
        comments: [],
      },
    ];


*/
