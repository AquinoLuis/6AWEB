const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const multer = require("multer");

const app = express(); // DEFINED FIRST
app.use(cors());
const upload = multer();

const CONNECTION_STRING = "mongodb://localhost:27017";
const DATABASENAME = "MyDb";
let database;

async function start() {
  try {
    const client = new MongoClient(CONNECTION_STRING);
    await client.connect();
    database = client.db(DATABASENAME);
    console.log("Yay! Now connected to Cluster");
    app.listen(5038, () => console.log("Server running on http://localhost:5038"));
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}
start();

// GET BOOKS
app.get("/api/books/GetBooks", async (req, res) => {
  const result = await database.collection("Books").find({}).toArray();
  res.send(result);
});

// ADD BOOK
app.post("/api/books/AddBook", upload.none(), async (req, res) => {
  try {
    const numOfDocs = await database.collection("Books").countDocuments();
    await database.collection("Books").insertOne({
      id: String(numOfDocs + 1),
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      desc: req.body.description, // Matches 'description' from FormData
      price: Number(req.body.price) || 0,
    });
    res.json("Added Successfully");
  } catch (err) { res.status(500).send(err); }
});

// UPDATE BOOK
app.post("/api/books/UpdateBook", upload.none(), async (req, res) => {
  try {
    await database.collection("Books").updateOne(
      { id: req.body.id },
      {
        $set: {
          title: req.body.title,
          author: req.body.author,
          category: req.body.category,
          desc: req.body.description,
          price: Number(req.body.price) || 0,
        }
      }
    );
    res.json("Updated Successfully");
  } catch (err) { res.status(500).send(err); }
});

// DELETE BOOK
app.delete("/api/books/DeleteBook", async (req, res) => {
  await database.collection("Books").deleteOne({ id: req.query.id });
  res.json("Deleted successfully!");
});