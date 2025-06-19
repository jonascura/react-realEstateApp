import express from "express";

const app = express();

// routes
app.use("/api/test", (req, res) => {
  res.send("it works! test node");
})

app.listen(8080, () => {
  console.log("Server is running");
})