//Post tweet
function sendTweet() {
    let tweetTitle = document.getElementById("title-input").value;
    let tweetBody = document.getElementById("body-input").value;

    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1
    };

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 201) {
            console.log(JSON.parse(this.responseText));
            alert("Your Tweet has been Submitted!")
        } else if (this.readyState != 4) {
            console.log("LOADING...")
        } else {
            console.log("Something went wrong!");
            console.log(this.status);
        }
    }

    ajax.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(tweetData));
}

let tweetButton = document.getElementById("tweet-submit");
tweetButton.addEventListener("click", sendTweet);

//PATCH = update the tweet
function patchTweet() {
    let tweetTitle = document.getElementById("title-input").value;
    let tweetBody = document.getElementById("body-input").value;

    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1
    };

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));

        } else if (this.readyState != 4) {
            console.log("LOADING...")
        } else {
            console.log("Something went wrong!");
            console.log(this.status);
        }
    }

    ajax.open("PATCH", "https://jsonplaceholder.typicode.com/posts/1", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(tweetData))
}

patchTweet();

//DELETE Data

function deleteTweet() {
    let tweetTitle = document.getElementById("title-input").value;
    let tweetBody = document.getElementById("body-input").value;

    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1
    };

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));

        } else if (this.readyState != 4) {
            console.log("LOADING...")
        } else {
            console.log("Something went wrong!");
            console.log(this.status);
        }
    }
    ajax.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send();
}

deleteTweet();

//GET all the tweets

function getTweets() {
    let tweetTitle = document.getElementById("title-input").value;
    let tweetBody = document.getElementById("body-input").value;

    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1
    };

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let posts = JSON.parse(this.responseText);
            console.log(posts);

            for (i = 0; i < posts.length; i++) {
                let allTweets = document.getElementById("show-tweets");
                allTweets.innerHTML += "<h3>" + posts[i].title + "</h3>";
                allTweets.innerHTML += "<p>" + posts[i].body + "</p>"
            }
        } else if (this.readyState != 4) {
            console.log("LOADING...");
        } else {
            console.log("Something went wrong here!");
        }
    }


    ajax.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send();
}

getTweets();