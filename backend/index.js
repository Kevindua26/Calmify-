const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;

app.use(cors());
connectDb().then(() => {
  app.listen(
    (PORT,
    () => {
      console.log(`Server listening at port ${PORT}`);
    })
  );
});
