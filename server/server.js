const express = require("express");
const app = express();

const morgan = require("morgan");
const cors = require("cors");
require("dotenv/config");
const userRoutes = require("../routes/user.routes");
require("../dataBase/dbConnection");
const loginAuth = require("../routes/login.routes");

const port = process.env.PORT;
//Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "https://entrevista-lab9.netlify.app",
  })
);

//Rutas
app.use("/user", userRoutes);
app.use("/login", loginAuth);

app.listen(port, () => {
  console.log(`estamos escuchando el puerto ${port}`);
});
