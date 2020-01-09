var price
var userLat
var userLong
var searchBox = $("#searchResults")
var userInput = $(`#userInp`)
var searchTerm = $("#userInp").val();
var currentBudget
var detractAmt
var historyLink = $("#historyLink");
var userChoices = $("#userChoices");


function resetSearch() {
    var choiceName = `<div><span id="choiceName"></span></div>`
    var choiceAddress = `<div><span id="choiceAddress"></span></div>`
    var avgPrice = `<div><span id="avgPrice"></span></div>`
    var yelpLink = `<div><span id="yelpLink"></span></div>`
    searchBox.html(choiceName + choiceAddress + avgPrice + yelpLink)
}

function userLocation() {
    var queryURL = "https://geolocation-db.com/json/";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        userLat = JSON.parse(response).latitude;
        console.log(userLat);
        userLong = JSON.parse(response).longitude;
        console.log(userLong);

        var currentLocation = { lat: userLat, lng: userLong };

        // the map, centered on current location
        var map = new google.maps.Map(
            document.getElementById("map"), { zoom: 12, center: currentLocation });

        // the marker, positioned at current location
        var marker = new google.maps.Marker({ position: currentLocation, map: map });

    })
}

var lat;
var lng;
var result1 = {};
var result2 = {};
var result3 = {};
var result4 = {};
var result5 = {};

function yelpSearch() {
    searchTerm = $("#userInp").val()
    $("#userInp").val("")
    var yelpQueryURL = `http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${searchTerm}&latitude=${userLat}&longitude=${userLong}`
    var searchBox = $("#searchResults")
    $.ajax({
        url: yelpQueryURL,
        method: "GET",
        headers: {
            Authorization: "Bearer 2XkaLgENjEmUK7eaqNghrPWK2Y6W-vvX9unRTijv3APoGO8xHVkZoGhHuW9_NBeKRmigFk-21QV8bXdM2SfIurwR7IKq5RwXWE8xlNN7fLUQBxod9JuVSh6scp4TXnYx"
        }
    }).then(function (response) {
        console.log(response)
        resetSearch();
        var newBtns = `<button id="selectChoice">Sounds great!</button> <button id="rejectChoice">No way, Jose</button>`
        $("#choiceName").text(`Your choice: ${response.businesses[0].name}`)
        $("#choiceAddress").text(`Address: ${response.businesses[0].location.address1}`)
        $("#yelpLink").html(`<img src="assets/yelp-favicon.png">Yelp page: <a target="blank" href="${response.businesses[0].url}">Click me!</a>`)
        searchBox.append(newBtns)
        var lat1 = response.businesses[0].coordinates.latitude;
        var lng1 = response.businesses[0].coordinates.longitude;
        var lat2 = response.businesses[1].coordinates.latitude;
        var lng2 = response.businesses[1].coordinates.longitude;
        var lat3 = response.businesses[2].coordinates.latitude;
        var lng3 = response.businesses[2].coordinates.longitude;
        var lat4 = response.businesses[3].coordinates.latitude;
        var lng4 = response.businesses[3].coordinates.longitude;
        var lat5 = response.businesses[4].coordinates.latitude;
        var lng5 = response.businesses[4].coordinates.longitude;

        var lat = response.region.center.latitude;
        var lng = response.region.center.longitude;

        var newCity = { lat: lat, lng: lng };

        var restaurant1 = { lat: lat1, lng: lng1 };
        var restaurant2 = { lat: lat2, lng: lng2 };
        var restaurant3 = { lat: lat3, lng: lng3 };
        var restaurant4 = { lat: lat4, lng: lng4 };
        var restaurant5 = { lat: lat5, lng: lng5 };

        $(`#map`).html = "";
        var map = new google.maps.Map(
            document.getElementById("map"), { zoom: 12, center: newCity });

        var marker1 = new google.maps.Marker({ position: restaurant1, map: map });
        var marker2 = new google.maps.Marker({ position: restaurant2, map: map });
        var marker3 = new google.maps.Marker({ position: restaurant3, map: map });
        var marker4 = new google.maps.Marker({ position: restaurant4, map: map });
        var marker5 = new google.maps.Marker({ position: restaurant5, map: map });

        var price = response.businesses[0].price;
        var avgPrice = $("#avgPrice")
        if (price === "$") {
            avgPrice.text("The average user spends $10 or less here.")
            detractAmt = 10
        } else if (price === "$$") {
            avgPrice.text("The average user spends between $10 and $30 here.")
            detractAmt = 20
        } else if (price === "$$$") {
            avgPrice.text("The average user spends between $30 and $60 here.")
            detractAmt = 75
        } else if (price === "$$$$") {
            avgPrice.text("The average user spends more than $60 here.")
            detractAmt = 100
        }

        console.log(detractAmt)
    })

}

function onLoad() {
    if (!localStorage.getItem('budget')) {
        console.log("nothing here!");
    } else {
        localStorage.getItem('budget');
        currentBudget = localStorage.getItem('budget');
        $(".budgetBox").show();
        $("#budgetTotal").text(`$${currentBudget}`);
        $(".searchCard").show();
        $(".des").hide();
        $(".options").hide();

        console.log(currentBudget);

    }
}

function backToLanding(){
    currentBudget = ""
    localStorage.setItem('budget', currentBudget);
    location.reload()
}

function showBudgetDiv() {
    localStorage.setItem('budget', currentBudget);
    $(".budgetBox").show();
    $(".searchCard").show();
    $(".des").hide();
    $(".options").hide();
}

$("#searchBtn").on("click", function (event) {
    if ($("#userInp").val() !== "") {
        yelpSearch();
    }
})

function runMath() {
    currentBudget = currentBudget - detractAmt
    console.log(currentBudget)
    $("#budgetTotal").text(`$${currentBudget}`)
}

function historyOnLoad() {
    // $(`#userChoices`).append = window.localStorage.getItem('choice');

    // console.log(window.localStorage.getItem('choice'));

    // userChoices.text = window.localStorage.getItem('choice');

    // console.log(userChoices.text);

    // $(`#userChoices`).prepend = userChoices.text;

    console.log(localStorage.getItem('store'));

    $(`#userChoices`).text(localStorage.getItem('store'));

    console.log(window.localStorage.choice);
}


//On-click events

$("#b1").on("click", function () {
    $("#budgetTotal").text("$100");
    currentBudget = 100;
    showBudgetDiv()
})

$("#b2").on("click", function () {
    $("#budgetTotal").text("$250");
    currentBudget = 250;
    showBudgetDiv()
})

$("#b3").on("click", function () {
    $("#budgetTotal").text("$325");
    currentBudget = 325;
    showBudgetDiv()
})

$("#userSubbedBudget").on("submit", function (event) {
    event.preventDefault()
    currentBudget = $("#budgetInp").val().split(",").join("")
    currentBudget = parseInt(currentBudget)
    console.log(currentBudget)
    if (isNaN(currentBudget)) {        
        $("#ifNaN").bPopup();
    } else {
        $("#budgetTotal").text(`$${currentBudget}`);
        showBudgetDiv()
    }
})

$("#backToLanding").on("click", function(event) {
backToLanding()
})

$("#budgetReturn").on("click", function (event) {
backToLanding()
})

$("#userSearchForm").on("submit", function (event) {
    event.preventDefault()
    if ($("#userInp").val() !== "") {
        $(".hideSearchArea").hide();
        yelpSearch();
    }
})

$(".material-icons").on("click", function (event) {
    event.preventDefault();
    if ($("#userInp").val() !== "") {
        $(".hideSearchArea").hide();
        yelpSearch();
    }
})

searchBox.on("click", "#selectChoice", function (event) {

    // Local storage setting:
    runMath()

    var storeChoice = $("#choiceName").text();
    var choiceAddress = $("#choiceAddress").text();

    localStorage.setItem('query', searchTerm);
    localStorage.setItem('choice', storeChoice);
    localStorage.setItem('place', choiceAddress);
    localStorage.setItem('budget', currentBudget);

    // Prompt for number of people

    // showDinerNumber();

    // Local storage setting:

    var storeSearch = searchTerm;
    window.localStorage.setItem('query', storeSearch);
    console.log(storeSearch);
    window.localStorage.setItem('store', choiceName.textContent);
    console.log(choiceName.textContent);


    // Run math functionality

    $(".hideSearchArea").show();
    resetSearch()
})

searchBox.on("click", "#rejectChoice", function (event) {
    $(".hideSearchArea").show();
    resetSearch()
})

historyOnLoad();
onLoad();
userLocation();