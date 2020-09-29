const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const mustacheExpress = require("mustache-express");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(function () {
    console.log("Database Connencted");
  });
const PORT = process.env.PORT || 3000;
const app = express();
const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null;
app.engine("mustache", mustacheExpressInstance);
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

const handleListen = () => {
  console.log(`listen on : http://localhost:${PORT}`);
};

app.listen(PORT, handleListen);
