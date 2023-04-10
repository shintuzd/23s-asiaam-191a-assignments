
// JavaScript const variable declaration
const map = L.map('the_map').setView([48.742474, -35.568517], 2); // (1)!

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map); // (2)!

//JavaScript let variable declaration to create a marker
let marker_sf = L.marker([37.774929, -122.419418]).addTo(map)
let marker_paris = L.marker([48.856613,2.352222]).addTo(map)
let marker_sd = L.marker([32.715736,-117.161087]).addTo(map)
let marker_la = L.marker([34.052235,-118.243683]).addTo(map)
let marker_london = L.marker([51.507351,-0.127758]).addTo(map)
let marker_madrid = L.marker([40.416775,-3.703790]).addTo(map)
let marker_barca = L.marker([41.385063,2.173404]).addTo(map)
let marker_brighton = L.marker([50.822529,-0.137163]).addTo(map)
let marker_versailles = L.marker([48.802200,2.129680]).addTo(map)
let marker_dhaka = L.marker([23.810331,90.412521]).addTo(map)
let marker_nyc = L.marker([40.712776,-74.005974]).addTo(map)
let marker_milan = L.marker([45.464203,9.189982]).addTo(map)
let marker_florence = L.marker([43.769562,11.255814]).addTo(map)
let marker_rome = L.marker([41.902782,12.496365]).addTo(map)
let marker_vatican = L.marker([41.902916,12.453389]).addTo(map)