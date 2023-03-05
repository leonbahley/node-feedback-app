const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");
dotenv.config();

app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000");
});

const { MONGO_CONNECTION_STRING: mongoConnectionString } = process.env;

mongoose
  .connect(mongoConnectionString)
  .then(() => console.log("Database connection successful"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
