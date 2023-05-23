// const { MongoClient } = require("mongodb");

// // Replace the uri string with your connection string.
// const uri = "mongodb+srv://taushif07:Taushif%40123@cluster0.2izs47z.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     const database = client.db('sample_mflix');
//     const movies = database.collection('movies');

//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await movies.findOne(query);

//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// const MongoClient = require("mongodb").MongoClient;

// const assert = require("assert");

// const url = "mongodb://localhost:27017";

// const dbName = "fruitsDB";

// const client = new MongoClient(url);

// client.connect(function(err) {

//   assert.equal(null, err);

//   console.log("Connected successfully to server");

//   const db = client.db(dbName);

//   client.close();
  
// });


const {MongoClient} = require("mongodb");

const uri = "mongodb://0.0.0.0:27017/";

const client = new MongoClient(uri, {useUnifiedTopology:true});

async function run() {

  try {
    await client.connect();

    console.log("Connected Successfully to server");

    const database = client.db("fruitsDB");

    const fruitsCollection = database.collection("fruits");

    fruitsCollection.insertMany([
      {
        name:"Apple",
        score:8,
        review:"Great fruit"
      },
      {
        name:"Orange",
        score:6,
        review:"rich in Vitamin C"
      },
      {
        name:"Banana",
        score:7,
        review:"rich in Carbs"
      }
    ]);

    const cursor = fruitsCollection.find();

    if((await fruitsCollection.countDocuments()) === 0) {
      console.log("No documents found!");
    };

    await cursor.forEach((fruit) => {
      console.log(fruit);
    });

  } finally {

    await client.close();

  }

}

run().catch(console.dir);