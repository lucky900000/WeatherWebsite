const allfunctions = require("./allfunctions.js");
const process = require("process");
const yargs = require("yargs");
// yargs.command({
//   describe: " Find weather of the location",
//   command: "getweather",
//   handler: function (argvs) {
//     allfunctions.getcoordsfromlocation(
//       argvs.city,
//       argvs.country,
//       function (a, b) {
//         console.log(a);
//         console.log(b);
//         if (b) return;
//         allfunctions.getweatherfromcoords2(a.lat, a.lng, function (a, b) {
//           console.log(a);
//           console.log(b);
//         });
//       }
//     );
//   },

//   builder: {
//     city: { describe: "city", demandOption: true, type: "string" },
//     country: { describe: "country", demandOption: true, type: "string" },
//   },
// });

// yargs.argv;

function getweatherfinal(city, country) {
  // if (
  //   process.argv[2].toLowerCase() === "getweather" &&
  //   process.argv[3] &&
  //   process.argv[4]
  // ) {
  //   city = process.argv[2];
  //   country = process.argv[3];
  allfunctions.getcoordsfromlocation(city, country, function ({ lat, lng }, b) {
    //  console.log(lat, lng);
    // console.log(b);
    if (b) return;
    allfunctions.getweatherfromcoords2(lat, lng, function (a, b) {
      console.log(a);
      console.log(b);
    });
  });
  // } else {
  //   console.log("enter valid inputs");
  // }
}

// (function getweatherfinal() {
//   if (
//     process.argv[2].toLowerCase() === "getweather" &&
//     process.argv[3] &&
//     process.argv[4]
//   ) {
//     city = process.argv[2];
//     country = process.argv[3];
//     allfunctions.getcoordsfromlocation(city, country, function (a, b) {
//       console.log(a);
//       console.log(b);
//       if (b) return;
//       allfunctions.getweatherfromcoords2(a.lat, a.lng, function (a, b) {
//         console.log(a);
//         console.log(b);
//       });
//     });
//   } else {
//     console.log("enter valid inputs");
//   }
// })();
const r = 90;
module.exports = { getweatherfinal, r };

// function getweatherfinal(city, country) {
//   allfunctions.getcoordsfromlocation(city, country, function ({ lat, lng }, b) {
//     if (b) return;
//     allfunctions.getweatherfromcoords2(lat, lng, function (a, b) {
//       console.log(a);
//       console.log(b);
//     });
//   });
// }
