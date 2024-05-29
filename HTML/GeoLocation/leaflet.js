// Initialize and display the map
function initMap() {
    // Specify the coordinates of the location
    var location = [37.7749, -122.4194];

    // Create a new map instance
    var map = L.map("map").setView(location, 12);

    // Add a tile layer (OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution:
                'Map data &copy; <a href = "https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        }
    ).addTo(map);

    // Add a marker to the location
    L.marker(location).addTo(map).bindPopup("Marker Title").openPopup();
}
