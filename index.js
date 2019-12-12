//import any dependencies
const server = require("./server.js");
const dotenv = require("dotenv");
const morgan = require("morgan");

//set up environmental config
////setting up environmental variables////
dotenv.config({ path: "./config/config.env" });

if (process.env.NODE_ENV === "development") {
  server.use(morgan("dev"));
}

//define environmental variables if needed
const PORT = process.env.PORT || 4000;

//set up our server.listen
const app = server.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
