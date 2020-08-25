// Making map and tiles
map = L.map('js-mapid').setView([48.849484899723805, 2.8250153046109254], 14);

const attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery Â© <a href="https://www.mapbox.com/">Mapbox</a>';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution
});
tiles.addTo(map);

const neuIcon = new L.Icon({
  iconUrl: 'img/leaf-orange.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Marker creation
L.marker([48.849484899723805, 2.8250153046109254], {
}).addTo(map).bindPopup("Ma position");