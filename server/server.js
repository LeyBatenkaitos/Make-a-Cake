require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

require("./config/connectToDB")();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV !== "production")
  app.use(cors({ credentials: true, origin: ["http://localhost:3000"] }));

app.use("/auth", require("./routes/auth"));
app.use("/api", require("./routes/api"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`1/2 El servidor está en PORT: ${PORT}`));
