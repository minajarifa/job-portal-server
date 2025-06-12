const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

// middleware

app.use(cors());
app.use(express.json());

// const uri =`mongodb+srv://<db_username>:<db_password>@cluster0.63qrdth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const uri = `mongodb+srv://job-portal:ZBQVyOTQIv4r7HkH@cluster0.63qrdth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(process.env.DB_USER);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("job making server is running");
});

app.listen(port, () => {
  console.log(`job server are making in running on port: ${port}`);
});
