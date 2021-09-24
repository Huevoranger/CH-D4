const express= require("express")

const app= express()

const apiRoute = require("./routes/api");

app.use(express.json());

app.use("/api", apiRoute);




app.listen(8080, () => {
    console.log("Server run on port 8080");
  });