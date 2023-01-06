console.log(__dirname);
console.log(__filename);
const weatherapp = require("./utils/allfunctions.js");
const path = require("path");
const htmlpath = path.join(__dirname, "../public");
const htmlpath2 = path.join(__dirname, "");
console.log(htmlpath);
const express = require("express");
const hbs = require("hbs");
const app = express();
const viewspath = path.join(__dirname, "../views");
const partialspath = path.join(__dirname, "../public/templates/partials");
hbs.registerPartials(partialspath);
//app.use(express.static(htmlpath2));
app.use(express.static(htmlpath));
app.set("view engine", "hbs");
// app.get("/", function (req, res) {
//   res.send("Hello you are on home page.");
// });
app.set("views", viewspath);
app.get("", function (req, res) {
  res.render("index", { title: "Weather", teacher: "mead", name: "Lucky" });
});

// app.get("/about", function (req, res) {
//   res.send("<h1>Hello...About us </h1>");
// });
app.get("/about", function (req, res) {
  res.render("about", { title: "About Me", name: "Lucky" });
});

app.get("/help", function (req, res) {
  res.render("help", { title: "Help", name: "Lucky" });
});
app.get("/weather", function (req, res) {
  if (!req.query.city || !req.query.country) {
    console.log(22);
    res.send({ error: "You didn't mention city or/and country." });
  } else {
    console.log(99);
    weatherapp.getcoordsfromlocation(
      req.query.city,
      req.query.country,
      function ({ lat, lng }, b) {
        console.log(lat, lng);
        if (b) {
          res.send(b);
          console.log(b);
          return;
        } else if ({ lat, lng } === {}) {
          console.log(100);
          res.send({ error: " Enter valid city/country" });
          return;
        }
        weatherapp.getweatherfromcoords2(lat, lng, function (a, b) {
          if (a) {
            res.send(a);
            console.log(a);
            return;
          }
          {
            res.send({
              city: req.query.city.replace(
                req.query.city[0],
                req.query.city[0].toUpperCase()
              ),
              country: req.query.country,
              forecast: b,
            });
          }
        });
      }
    );
  }
});

app.get("/help/*", function (req, res) {
  res.render("error", {
    title: "404",
    name: "Lucky",
    errormsg: "Help article not found",
  });
});
app.listen(4000);

app.get("*", function (req, res) {
  res.render("error", {
    title: "404",
    name: "Lucky",
    errormsg: "Page not found",
  });
});
//console.log(weatherapp.r);
