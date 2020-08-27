// Making map and tiles
map = L.map('js-mapid').setView([48.844196, 2.582493], 7);

const attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery Â© <a href="https://www.mapbox.com/">Mapbox</a>';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution
});
tiles.addTo(map);

// Marker creation
L.marker([48.849484899723805, 2.8250153046109254], {
}).addTo(map).bindPopup("Ma position");