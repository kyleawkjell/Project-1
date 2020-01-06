var yelpQueryURL = "http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=starbucks&latitude=37.786882&longitude=-122.399972"
var searchBox = $("#searchBox")
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
        searchBox.text("$5")
    } else if (price === "$$") {
        searchBox.text("$20")
    } else if (price === "$$$") {
        searchBox.text("$50")
    } else if (price === "$$$$") {
        searchBox.text("$100")
    }
})