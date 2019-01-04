//two routes 
var path = require("path");

//GET route to survey which displays the survey page
module.exports = function(app) {
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../survey.html")); //absolute path to the directory and absolute path for a url
  });
  
//default route that leads to home.html
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../home.html"));
  });
};