// Initialize and display the map
function initMap() {
    // Create a new map instance
    var map = L.map("map").setView(location, 12);

    // Get the user's location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                // Retriece the users latitude and longitude
                var userlocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                // Center the map on the user's location
                map.setCenter(userlocation);

                // Add a marker to the user's location
                L.marker(userLocation)
                    .addTo(map)
                    .bindPopup("Your Location")
                    .openPopup();
            },
            function (error) {
                console.error("Error getting user location:", error);
            }
        );
    } else {
        console.error("Geolocation is not supported by this browser.");
    }

    // Add a tile layer (OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
}
