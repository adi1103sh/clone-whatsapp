// importing
import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import Messages from "./dbmessages.js";
import Pusher from "pusher";
import cors from "cors";

// app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: "1361138",
  key: "ce3bd95cca174b8b6486",
  secret: "a5080f8063c265c7887b",
  cluster: "ap2",
  useTLS: true,
});

// middleware
app.use(express.json());
app.use(cors());

// DB config
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.log(`OH NO! DB CRASHED :(`);
  console.error(error.message);
});

db.once("open", () => {
  console.log(`DB CONNECTED :)`);

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log("A change occured", change);
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else console.log("Error triggering Pusher");
  });

});

// ?????

// api routes
app.get("/", (req, res) => res.status(200).send("SERVER UP AND RUNNING!"));

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;
  Messages.create(dbMessage, (err, data) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(`New message created: \n ${data}`);
  });
});

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(data);
  });
});

// listening
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
