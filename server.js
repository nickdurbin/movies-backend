//import any dependencies
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

//import our routers
// const authRouter = require("../crudOPS/auth/authRouter");
// const usersRouter = require("../crudOPS/users/usersRouter");
// const recipesRouter = require("../crudOPS/recipes/recipesRouter");
// const artworkRouter = require("../crudOPS/artwork/artworkRouter");

//define express()
const server = express();

//use our dependencies
server.use(helmet());
server.use(cors());
server.use(express.json());

//use our routers(set up our base urls and what router they belong to)
// server.use("/api/auth", authRouter);
// server.use("/api/users", usersRouter);
// server.use("/api/recipes", recipesRouter);
// server.use("/api/artwork", artworkRouter);

//sanity check
server.get("/", (req, res) => {
  res.status(200).json({ status: "The server is running!!" });
});

//export
module.exports = server;
