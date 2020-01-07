var lat;
var lng;
var result1 = [];
var result2 = {};
var result3 = {};
var result4 = {};
var result5 = {};

function initMap() {
    // the location
    var Denver = {lat: 39.739, lng: -104.990};

    // the map, centered on Denver
    var map = new google.maps.Map(
        document.getElementById("map"), {zoom: 12, center: Denver});

    // the marker, positioned at Denver
    var marker = new google.maps.Marker({position: Denver, map: map});
}

function newMap() {
    // location
    var newCity = {lat, lng};

    //the map, centered on location
    var map = new google.maps.Map(
        document.getElementById("map"), {zoom: 12, center: newCity});

    // the marker, positioned on newCity
    var marker = new google.maps.Marker({position: newCity, map: map});
}

function renderMarkers() {
    //location
    var newCity = {lat, lng};

    //the map, centered on location
    var map = new google.maps.Map(
        document.getElementById("map"), {zoom: 12, center: newCity});

    // five new markers for the restaurants
    var marker1 = new google.maps.Marker({position: result1, map: map});
    var marker2 = new google.maps.Marker({position: result2, map: map});
    var marker3 = new google.maps.Marker({position: result3, map: map});
    var marker4 = new google.maps.Marker({position: result4, map: map});
    var marker5 = new google.maps.Marker({position: result5, map: map});
}

var yelpQueryURL = "http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=starbucks&latitude=37.786882&longitude=-122.399972"

$.ajax({
    url: yelpQueryURL,
    method: "GET",
    headers: {
    Authorization: "Bearer 2XkaLgENjEmUK7eaqNghrPWK2Y6W-vvX9unRTijv3APoGO8xHVkZoGhHuW9_NBeKRmigFk-21QV8bXdM2SfIurwR7IKq5RwXWE8xlNN7fLUQBxod9JuVSh6scp4TXnYx"
    }
}).then(function(response) {

    
    
    
    
})


function yelpSearch() {
    var searchTerm = $("#searchInp").val()
    var yelpQueryURL = `http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${searchTerm}&latitude=37.786882&longitude=-122.399972`
    var searchBox = $("#searchBox")
    $.ajax({
        url: yelpQueryURL,
        method: "GET",
        headers: {
            Authorization: "Bearer 2XkaLgENjEmUK7eaqNghrPWK2Y6W-vvX9unRTijv3APoGO8xHVkZoGhHuW9_NBeKRmigFk-21QV8bXdM2SfIurwR7IKq5RwXWE8xlNN7fLUQBxod9JuVSh6scp4TXnYx"
        }
    }).then(function(response) {
        var lat1 = response.businesses[0].coordinates.latitude.toFixed(3);
        var lng1 = response.businesses[0].coordinates.longitude.toFixed(3);
        var lat2 = response.businesses[1].coordinates.latitude.toFixed(3);
        var lng2 = response.businesses[1].coordinates.longitude.toFixed(3);
        var lat3 = response.businesses[2].coordinates.latitude.toFixed(3);
        var lng3 = response.businesses[2].coordinates.longitude.toFixed(3);
        var lat4 = response.businesses[3].coordinates.latitude.toFixed(3);
        var lng4 = response.businesses[3].coordinates.longitude.toFixed(3);
        var lat5 = response.businesses[4].coordinates.latitude.toFixed(3);
        var lng5 = response.businesses[4].coordinates.longitude.toFixed(3);
        
        var restaurant1 = {lat: lat1, lng: lng1};
        var restaurant2 = {lat: lat2, lng: lng2};
        var restaurant3 = {lat: lat3, lng: lng3};
        var restaurant4 = {lat: lat4, lng: lng4};
        var restaurant5 = {lat: lat5, lng: lng5};
        
        var price = response.businesses[0].price;
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
    
    $("searchBtn").on("click", function(event){
        event.preventDefault();
        yelpSearch();
    })}
