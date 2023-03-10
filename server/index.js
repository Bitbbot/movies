require("dotenv").config();
const models = require("./models/models.js");
const express = require("express");
const sequelize = require("./db");
const cors = require("cors");
const router = require("./routes/index");
const PORT = process.env.PORT;
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

app.use(errorHandler);
const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`server started ${process.env.PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
