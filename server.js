require('dotenv').config()

const mongoose = require('mongoose');
(express = require('express')), (app = express());

const port = process.env.PORT || 3000; //if server finds a port, use that port else use 3000

user = process.env.USERID // read from that env
pw = process.env.PW

uri = 'mongodb+srv://' + user + ':' + pw + '@cluster0.oybroct.mongodb.net/Test_2'

mongoose.connect(uri); // this is the connect syntax to mongodb, after nung mongodb.net/ yung name ng database na gusto mo
// 'mongodb+srv://user_22:ewE6gQSInquBCV5D@cluster0.oybroct.mongodb.net/Tasks' 
// Create a Schema object
const activitySchema = new mongoose.Schema({
  activity: { type: String, required: true },
});

// This Activitry creates the collection called activitimodels
const Activitymodel = mongoose.model('Activity', activitySchema);

app.get('/', (req, res) => {
  const task1 = new Activitymodel({
    activity: 'activity class November 23 - 1',
  });

  Activitymodel.insertMany([task1]);

  res.send(`<h1>Document  Added</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// my syntax: mongodb+srv://<username>:<password>@cluster0.oybroct.mongodb.net/
// npm i -> npm start