// Initialize and display the map
function initMap() {
    // Specify the coordinates of the location
    var location = { lat: 37.7749, lng: -122.4194 };

    // Create a new map instance
    var map = new google.maps.Map(document.getElementById("map"), {
      center: location,
      zoom: 12,
    });

    // Add a marker to the location
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Marker Title",
    });
}
