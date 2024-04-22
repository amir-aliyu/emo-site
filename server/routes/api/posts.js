const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
  try {
      const db = client.db("Cluster0"); // Replace "your_database_name" with your actual database name
      const posts = await db.collection("posts").find({}).toArray(); // Retrieve all posts from the "posts" collection
      res.json(posts); // Send the posts as JSON response
  } catch (error) {
      console.error("Error retrieving posts:", error);
      res.status(500).json({ message: "Internal server error" });
  }
});

// Add Post


// Delete Post

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

      // Add more route handlers if needed

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
