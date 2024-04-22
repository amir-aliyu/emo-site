const express = require('express');
const mongodb = require('mongodb');
const { MongoClient, ServerApiVersion } = require('mongodb');
const router = express.Router();

const bodyParser = require('body-parser');
// Add this line before defining routes
router.use(bodyParser.json());
// Get Posts
/*
router.get('/', async (req, res) => {
  try {
      const db = client.db("Cluster0");
      const posts = await db.collection("posts").find({}).toArray(); // Retrieve all posts from the "posts" collection
      res.json(posts); // Send the posts as JSON response
  } catch (error) {
      console.error("Error retrieving posts:", error);
      res.status(500).json({ message: "Internal server error" });
  }
});*/


// connect to post collection
const uri = "mongodb+srv://amir:amiri@cluster0.xtqec0u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectMongoDB() {
  try {
      await client.connect();
      console.log("Connected to MongoDB");
      // Once connected, define route handlers
      defineRouteHandlers();
  } catch (err) {
      console.error("Failed to connect to MongoDB:", err);
  }
}

async function defineRouteHandlers() {
  try {
      // Get Posts
      router.get('/', async (req, res) => {
          try {
              const db = client.db("Cluster0");
              const posts = await db.collection("posts").find({}).toArray();
              res.json(posts);
          } catch (error) {
              console.error("Error retrieving posts:", error);
              res.status(500).json({ message: "Internal server error" });
          }
      });

      // post request
      router.post('/', async (req, res) => {
        const db = client.db("Cluster0");
        const posts = await db.collection("posts").insertOne({
          text:req.body.text,
          createdAt: new Date()
          // maybe res.json(posts) this? 
        });
        res.status(201).send(); // this says everythings ok but something changed
      });

      // delete request
      router.delete('/:id', async (req, res) => {
        const db = client.db("Cluster0");
        const posts = await db.collection("posts").deleteOne({_id: new mongodb.ObjectId(req.params.id)});
        res.status(200).send();
      });
      
  } catch (err) {
      console.error("Failed to define route handlers:", err);
  }
}

connectMongoDB();
/*
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);*/

module.exports = router; 
 