// Patches
const { inject, errorHandler } = require("express-custom-error");
inject(); // Patch express in order to use async / await syntax

// Require Dependencies
const express = require("express");
const port = process.env.PORT || 8000;
// Instantiate an Express Application
const app = express();
// const morgan = require("morgan");
const cors = require("cors");
// This middleware adds the json header to every response
app.use(cors());
app.use("*", (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

const { routes } = require("./routes");

// Assign Routes
routes.map((route) => app.use("/", require(`./routes/${route}`)));

// Handle errors
app.use(errorHandler());
// Handle not valid route
// app.use('*', (req, res) => {
//     res
//     .status(404)
//     .json( {status: false, message: 'Endpoint Not Found'} );
// })

// Open Server on selected Port
app.listen(port, () => console.info("Server listening on port ", port));
