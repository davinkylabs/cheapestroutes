let currentLocation = null

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    currentLocation = [position.coords.longitude, position.coords.latitude]

    initMap(currentLocation)
  })
}

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGF2aW5reSIsImEiOiJjbTh2c29vYmMwdWZrMmtzZDUyOXV0NW9vIn0.1-tGAA31Ngh94Rw0q2t1Iw"

function initMap(currentLocation = [-74.50, 40]) {
  window.map = new mapboxgl.Map({
    container: "map",
    center: currentLocation,
    zoom: 11,
  })
  window.map.on("load", () => {
    console.log("Map is loaded!")
    window.mapReady = true
  })
}
