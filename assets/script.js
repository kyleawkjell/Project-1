// var location;
// var map = $(`<div>`).attr("id", "map");

// var searchCity = "Denver";
// var apiKey = "AIzaSyDMTGeXn6uxwlPcg4jxLrqN01gzNn9RfAI"

// var queryURL = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`


// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function(response) {
//     console.log(response);
// })

function initMap() {
    // the location
    var Denver = {lat: 39.739, lng: -104.990};

    // the map, centered on Denver
    var map = new google.maps.Map(
        document.getElementById("map"), {zoom: 12, center: Denver});

    // the marker, positioned at Denver
    var marker = new google.maps.Marker({position: Denver, map: map});
}

function yelpSearch () {
    var searchTerm = $("#userInp").val()
    var yelpQueryURL = `http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${searchTerm}&latitude=37.786882&longitude=-122.399972`
    var searchBox = $("#searchResults")
    $.ajax({
        url: yelpQueryURL,
        method: "GET",
        headers: {
            Authorization: "Bearer 2XkaLgENjEmUK7eaqNghrPWK2Y6W-vvX9unRTijv3APoGO8xHVkZoGhHuW9_NBeKRmigFk-21QV8bXdM2SfIurwR7IKq5RwXWE8xlNN7fLUQBxod9JuVSh6scp4TXnYx"
        }
    }).then(function(response) {
        var price = response.businesses[0].price
        console.log(response)
        if (price === "$") {
            searchBox.text("The average user spends $10 or less here.")
        } else if (price === "$$") {
            searchBox.text("The average user spends between $10 and $30 here.")
        } else if (price === "$$$") {
            searchBox.text("The average user spends between $30 and $60 here.")
        } else if (price === "$$$$") {
            searchBox.text("The average user spends more than $60 here.")
        }
    })

$("#searchBtn").on("click", function(event){
    event.preventDefault();
    console.log("yay")
    // yelpSearch();
})

}