const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const url = require('url');
const mongoose = require("mongoose");
const session = require('express-session');
// const passport = require("passport");
// const ObjectId = require('mongodb').ObjectID;
const BSON = require('bson');
const findOrCreate = require('mongoose-findorcreate');
const { all } = require('async');
// const async = require('async');
// var sessionstorage = require('sessionstorage');
require('dotenv').config();
var cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

var sess = {
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: true,
  httpOnly: true,
  cookie: {}
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess));

app.use(express.static(path.resolve(__dirname, '../client/build')));

const mongoPassword = "ZpKKfFH-mP.@2DU";

mongoose.connect(`mongodb+srv://purush:${mongoPassword}@personalpurush.zmiac.mongodb.net/Folio`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((result) => {
  console.log('connected to db');
  // console.log(result);
}).catch((err) => console.log(err));

mongoose.set("useCreateIndex", true);

const projectScheme = new mongoose.Schema({
  tag: String,
  title: String,
  desc: String,
  img_url: String,
  git_url: String
});

projectScheme.plugin(findOrCreate);

Projects = mongoose.model("Projects", projectScheme);

// Projects.create({ tag: "python", title: "Ping Pong", desc: "Sweet Little ping pong game created with python", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsJfN6lTrZk-NZqlMy7XKRQ9W2Wh3l4zNldw&usqp=CAU", "git_url": "" }, function (err, doc) {
//   console.log(err);
// })

let allProjects;

Projects.find({}, function (err, docs) {
  try {
    if (!err) {

      allProjects = docs;
      console.log(docs);
      // const num_of_projects = docs.length;
      // console.log(num_of_projects);
      console.log(`Errors: ${err}`);

    } else {
      throw err;
    }
  }
  catch (e) {
    console.log(e);
  }
});

app.get("/api", (req, res) => {
  res.json({ docs: allProjects });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(port, function () {
  console.log(`Started building at ${port}`);
});



// Git : -------

// const gh = new GitHub({
//   username: 'purushothaman19',
//   password: 'g7auDRBCFTwK6cU'
// });

// var me = gh.getUser('purushothaman19');
// me.listRepos().then(function({data: reposJson}) {
//   console.log(reposJson[1]);
// });