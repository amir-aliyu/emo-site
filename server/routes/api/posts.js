const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
    const db = client.db("cluster0");
    const posts = await db.collection("posts").find({}).toArray();// send an array of posts in database
    res.send(posts);
}); // the slash means /api/posts 

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
run().catch(console.dir);

module.exports = router;
