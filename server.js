const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(require("./routes/api.js"));
app.use(require("./routes/homeRoutes.js"));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true ,
  // useCreateIndex: true,
  // useFindAndModify: false
});

const db = mongoose.connection
db.on('error', error=> console.error(error))
db.once('open',() => console.log("connected to mongoose "))

app.listen(PORT, "0.0.0.0",() => {
    console.log(`App running on port ${PORT}!`);
  });