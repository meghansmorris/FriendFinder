
//save the application data here as an array of objects like this:
//default friend list
var friends = [
{
    "name":"Moana",
    "photo":"https://pbs.twimg.com/profile_images/819955513718779905/DY4UfMVj_400x400.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
},
{
    "name":"Robin Hood",
    "photo":"https://vignette.wikia.nocookie.net/disney/images/4/42/Robin_Hood_Disney.jpg/revision/latest?cb=20160706144649",
    "scores":[
        5,
        1,
        5,
        2,
        4,
        2,
        4,
        2,
        3,
        3
    ]
}
];

module.exports = friends;


//determine the user's most compatible friends:
    //convert each user's results into an array of numbers
    //compare the difference between the current user's scores against those from other users -- add up the differences
    //calculate the totalDifference
//     Example:

            // User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

            // User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

            // Total Difference: 2 + 1 + 2 = 5 only adding the numbers that are different

        //absolute differences so no negatives
        //closest match is the least amount of difference

    //show the best match as a modal pop-up with name and picture of the match