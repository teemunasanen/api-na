const request = require("request");
const PORT = process.env.PORT || 5000;
var http = require("http");
var data;

request("http://www.omdbapi.com/?t=harry+potter&apikey=3d3574c1", 
{json: true}, 
(err, res, body) => {
    if (err) {
        return console.log(err); 
    }
    data = body;
    console.log(res);
    console.log(body);
});

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    response.write("<table border='1'>");
    response.write("<tr><td>Name: " + data.Title + "</td></tr>");
    response.write("<tr><td>Year: " + data.Year + "</td></tr>");
    response.write("<tr><td>Genre: " + data.Genre + "</td></tr>");
    response.write("<tr><td>Plot: " + data.Plot + "</td></tr>");
    response.write("<tr><td>Rating: (" + data.Ratings[0].Source + ") " + data.Ratings[0].Value + "</td></tr>");
    response.write("</table>");

    response.end();
  })
  .listen(PORT);
