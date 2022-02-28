let fs = require("fs");
let parse = require("csv-parse").parse;
const express = require("express");
const app = express();

app.set("port", 3001);
app.locals.title = "Reenee's Skincare";

const records = [];
fs.createReadStream("data.csv")
  .pipe(parse({ delimeter: ",", columns: true }))
  .on("data", (csvrow) => {
    records.push(csvrow);
  })
  .on("end", () => {
    records.forEach((entry) => {
      entry.id = parseInt(entry.id);
      entry.benefits = entry.benefits.split(", ");
      entry.skinTypes = entry.skinTypes.split(", ");
    });
    app.locals.skincare = records;
  });

app.get("/", (request, response) => {
  response.send("Cool skincare, dude");
});

app.get("/api/v1/skincare", (request, response) => {
  const skincare = app.locals.skincare;

  response.json({ skincare });
});

app.get("/api/v1/skincare/brand/:brand", (request, response) => {
  const skincare = app.locals.skincare.filter(
    (product) =>
      product.brand.toLowerCase() === request.params.brand.toLowerCase()
  );

  response.json({ skincare });
});

app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is running on ${app.get("port")}`);
});
