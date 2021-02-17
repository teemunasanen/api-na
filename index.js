// Node.js Workshop 3: Processing JSON and using API’s
// Not pretty, but works
// I wanted to build it with search and get, but didn't have enough time

const http = require("http");
const axios = require("axios");
const PORT = process.env.PORT || 5000;

let search = "loser";
let moviesTable = "perkele";
//Get data
const promise = axios
  .get("http://www.omdbapi.com/?s=" + search + "&apikey=66d73af4")
  .then((response) => {
    const data = response.data;

    let moviesTable = '<table style="width:100%; text-align: center;">';
    //add to variable
    try{
    for (var i = 0; i < 9; i = i+ 3) {
      moviesTable +=
        "<tr>" +
        "<td><img src=" +
        data.Search[i].Poster +
        "</img> </td>" +
        "<td><img src=" +
        data.Search[i + 1].Poster +
        "</img> </td>" +
        "<td><img src=" +
        data.Search[i + 2].Poster +
        "</img> </td>" +
        "</tr>" + "<tr>" +
        "<td><h3>" +
        data.Search[i].Title +
        "</h3></td>" +
        "<td><h3>" +
        data.Search[i + 1].Title +
        "</h3></td>" +
        "<td><h3>" +
        data.Search[i + 2].Title +
        "</h3></td>" +"</tr>"+

        "<tr>" +
        "<td><h3>Year: " +
        data.Search[i].Year +
        "</h3></td>" +
        "<td><h3>Year: " +
        data.Search[i + 1].Year +
        "</h3></td>" +
        "<td><h3>Year: " +
        data.Search[i + 2].Year +
        "</h3></td>" +
        "</tr>";
    }
    }catch(err){
        console.log("Error: " + err);
    

    }
    moviesTable += "</table>";
    

    // Create server
    const app = http.createServer(function (req, res) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Movies</h1>");
      res.write(moviesTable);

      res.end();
    });

    app.listen(PORT);
  });
