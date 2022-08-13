import express from "express"; // Since babel is being used in this project, the newest syntax of ES6 can be used.
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

//mongooose connection
mongoose.Promise = global.Promise; // We wait for the API to connect to the MongoDB instance.
//If connecting fails on your machine, try using 127.0.0.1 instead of localhost.
mongoose.connect("mongodb://127.0.0.1:27017/CRMdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//bodyparser setup - this allows body-parser to parse the request that are going to come in and do it in a way that will be understandable by the api.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

//serving static files
//We pass the name of the folder to the static function, that hold the static files.
app.use(express.static("public"));

app.get("/", (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
