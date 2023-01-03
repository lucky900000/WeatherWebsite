const request = require("request");
function getcoordsfromlocation(city, country, callback) {
  const url = `https://api.opencagedata.com/geocode/v1/json?key=e301a7b6dccc48ddb9f27dd5c89fa808&q=Frauenplan+1%2C+99423+${city}%2C+${country}&pretty=1`;
  request(url, function (error, { body }) {
    const bodyparsed = JSON.parse(body);
    if (error) {
      callback(undefined, "network issue");
    } else {
      console.log(
        bodyparsed.results[0].bounds.northeast.lat,
        bodyparsed.results[0].bounds.northeast.lng
      );
      callback(
        {
          lat: bodyparsed.results[0].bounds.northeast.lat,
          lng: bodyparsed.results[0].bounds.northeast.lng,
        },
        undefined
      );
      console.log(
        "new",
        bodyparsed.results[0].bounds.northeast.lat,
        bodyparsed.results[0].bounds.northeast.lng
      );
    }
  });
}

const getweatherfromcoords2 = (lat, lng, callback) => {
  let url = `http://api.weatherstack.com/current?access_key=fde1e4ba8ea7c158cdde9c26b75c9742&query=${lat},${lng}`;
  request(url, function (err, res) {
    if (err) {
      callback("network issue", undefined);
    } else if (JSON.parse(res.body).error) {
      callback("enter valid inputs", undefined);
    } else {
      const bodyobj = JSON.parse(res.body);
      // console.log(bodyobj);
      callback(
        undefined,
        `${bodyobj.current.weather_descriptions[0]}. Temperature:- ${bodyobj.current.temperature} degree C. There are ${bodyobj.current.precip} percent chances of rain.`
      );
    }
  });
};
module.exports = { getcoordsfromlocation, getweatherfromcoords2 };
