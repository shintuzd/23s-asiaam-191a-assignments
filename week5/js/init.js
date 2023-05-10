// Mapping Favorite Restaurants Map

let mapOptions3 = {'center': [34.05486654874919, -118.26360364555003],'zoom':10}

const map3 = L.map('the_map3').setView(mapOptions3.center, mapOptions3.zoom); // (1)!

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(map3);

function addMarker3(lat,lng,title,message,desc){
    console.log(message)
    L.marker([lat,lng]).addTo(map3).bindPopup(`<h2>${title}</h2> <h3>Submitted by: ${message}</h3> <p>What I Like About It: ${desc}</p>`)
    return message
}

function createButtons2(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button2"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('click', function(){
        map3.flyTo([lat,lng], 14); //this is the flyTo from Leaflet
    })
    document.getElementById("buttons2").appendChild(newButton); //this adds the button to our page.
  }

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS3JMLOzEGJEKn7YFIig9PCzerJO5TofP09ThGtSsqt41yRbZDP9BlPrFSyLAjEKR4cmkIoR2N5MYbR/pub?output=csv"

function loadData(url){
    Papa.parse(url, {
        header: true,
        download: true,
        complete: results => processData(results)
    })
}

function processData(results){
    console.log(results)
    results.data.forEach(data => {
        console.log(data)
        addMarker3(data.lat,data.lng,data["What's the name of your favorite restaurant?"],data["What's your name?"], data["What do you like about it?"])
        createButtons2(data.lat,data.lng,data["What's the name of your favorite restaurant?"])
    })
}

// this is our function call to get the data
// we will put this comment to remember to call our function later!
loadData(dataUrl)

// Places I've worked map

let mapOptions = {'center': [34.05486654874919, -118.26360364555003],'zoom':14}

const map2 = L.map('the_map2').setView(mapOptions.center, mapOptions.zoom); // (1)!

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(map2);

function createButtons(lat,lng,title){
  const newButton = document.createElement("button"); // adds a new button
  newButton.id = "button"+title; // gives the button a unique id
  newButton.innerHTML = title; // gives the button a title
  newButton.setAttribute("lat",lat); // sets the latitude 
  newButton.setAttribute("lng",lng); // sets the longitude 
  newButton.addEventListener('click', function(){
      map2.flyTo([lat,lng], 16); //this is the flyTo from Leaflet
  })
  document.getElementById("buttons").appendChild(newButton); //this adds the button to our page.
}

function textPopup(feature, layer){
  layer.bindPopup(
      `<h2>${feature.properties.job_name}</h2> <h3>Job Type: ${feature.properties.job_type}</h3> <p>${feature.properties.description} </p>`
    );
  createButtons(
    feature.geometry.coordinates[1],
		feature.geometry.coordinates[0],
		feature.properties.job_name,
	);
}

fetch("map.geojson")
    .then(response => {
        return response.json();
    })
    .then(data =>{
        // the leaflet method for adding a geojson
        L.geoJSON(data, {
            onEachFeature: textPopup,
            pointToLayer: (feature, latlng) => {
                return L.circleMarker(latlng, {color: feature.properties.color})
            }
        }).addTo(map2);

    });

// Places I've Been Map

const map = L.map('the_map').setView([48.742474, -35.568517], 2); // (1)!

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//JavaScript let variable declaration to create a marker

function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    return message
}

addMarker(34.052235,-118.243683,'Los Angeles','Where I live!')
addMarker(37.774929,-122.419418,'San Francisco','First trip by myself! I went to visit some friends in the Bay Area.')
addMarker(32.715736,-117.161087,'San Diego','Been here once. It\'s okay.')
addMarker(48.856613,2.352222,'Paris','Came here during my trip to Europe. Beautiful city!')
addMarker(51.507351,-0.127758,'London','The weathers always gloomy. Felt like an English New York.')
addMarker(40.416775,-3.703790,'Madrid','The people in Madrid were so chill.')
addMarker(41.385063,2.173404,'Barcelona','It was chill here, but not as chill as Madrid. Still a nice city, except the part where they have a huge Christopher Columbus memorial.')
addMarker(50.822529,-0.137163,'Brighton','The people were so friendly here. Theres also really fresh fish!')
addMarker(48.802200,2.129680,'Versailles','Not too far from Paris. Lots of gold')
addMarker(23.810331,90.412521,'Dhaka','This is where my parents grew up.')
addMarker(40.712776,-74.005974,'New York City','One of my first trips with my friends. Was unable to explore this city in 5 days.')
addMarker(45.464203,9.189982,'Milan','Got stranded at the train station here because my flight prior was delayed :(')
addMarker(43.769562,11.255814,'Florence','Beautiful city. However, I shouldve explored the city on a moped.')
addMarker(41.902782,12.496365,'Rome','I\'m positive this city worse drivers than LA.')
addMarker(41.902916,12.453389,'The Vatican City','I thought this would be bigger, but its literally just the Pope\'s bacislla')