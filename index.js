//const http = require("http");
const request = require("request");
const url =
  "http://api.openweathermap.org/data/2.5/weather?appid=d34c403481ad6f7b65351d3f65a5cd4e";
const location = process.argv[2];
const mainurl = url + "&q=" + location;
//console.log(mainurl);

request({ url: mainurl, json: true }, (err, response) => {
  //console.log(response.body);
  console.log("WEATHER INFORMATION");
  console.log("Country:", response.body.sys.country);
  console.log("City:", response.body.name);
  console.log("Temperature:", response.body.main.temp - 273);
  console.log("Humidity:", response.body.main.humidity);
});

// const port = 3000;
// const a = http.createServer((req, res) => {
//   console.log("server created");
//   res.statusCode = 200;
//   res.end(`Humidity:{x}`);
// });

// a.listen(port);
