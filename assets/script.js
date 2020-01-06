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