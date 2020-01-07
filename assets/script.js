var lat;
var lng;
var result1 = {};
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

  console.log(response);

  var lat1 = response.businesses[0].coordinates.latitude.toFixed(3);
  console.log(lat1);
  var lng1 = response.businesses[0].coordinates.latitude.toFixed(3);
  console.log(lng1);

})
