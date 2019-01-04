//two routes

//GET route for url /api/friends -- displays a JSON of all possible friends
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
//POST route /api/friends -- handles incoming survey results and compatibility logic
app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    console.log(newFriend);

    //more that goes here...?
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    console.log(`${newFriend.name} has been added to FriendFinder!`);
    friends.push(newFriend);
    res.json(newFriend);
});
