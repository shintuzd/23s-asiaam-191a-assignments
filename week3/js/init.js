let mapOptions = {'center': [34.05486654874919, -118.26360364555003],'zoom':14}

const map2 = L.map('the_map2').setView(mapOptions.center, mapOptions.zoom); // (1)!

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(map2);

//JavaScript let variable declaration to create a marker

// Icon Colors
const green = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

const orange = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const violet = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  // function to add markers 
  
//function addMarker2(lat,lng,title,message){
  //console.log(message)
  //L.marker([lat,lng]).addTo(map2).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
  //return message
//}

//addMarker2(34.070107085950276, -118.2703387444908, orange, 'Peace Over Violence','I volunteered here as a youth leader when I was in 11th grade. Learned a lot about violence and violence prevention among people.')
//addMarker2(34.069184924932095, -118.30827864566749, green, 'Anderson Munger Family YMCA','This was technically my first "real job." I was a front desk representative at this gym. It was a very chill job, and I only worked weekends. I still come here to workout though.')
//addMarker2(34.05384689593033, -118.24266510823598, violet, 'Mayor\'s Office of Eric Garcetti','I interned here during my first and second year in college. I was a Public Engagement Intern, but was unpaid :(')
//addMarker2(34.05305649646147, -118.2417712752958, violet, 'The City Controller\'s Office','I interned here from Summer 2022 to March 2023 across two administrations (Controller Galperin and Controller Mejia). I learned a lot about data analysis, GIS, and working in the City overall.')
//addMarker2(34.050075114586384, -118.29202096504281, orange, 'Bengali Unity Federation of Los Angeles (BUFLA)','This is a cultural org that I sometimes volunteer at. Here, we help organize Bangaldeshi events and parades in the area, and try to engage the youth in our LA Bengali community.')
//addMarker2(34.05376913904552, -118.24160173239126, violet, 'Civil + Human Rights and Equity Department','This is where I currently intern, and been here since Sep 2022. I do a lot of research and writing, but I\'m hoping to bring some data analysis work to their office.')

function createButtons(lat,lng,title){
  const newButton = document.createElement("button"); // adds a new button
  newButton.id = "button"+title; // gives the button a unique id
  newButton.innerHTML = title; // gives the button a title
  newButton.setAttribute("lat",lat); // sets the latitude 
  newButton.setAttribute("lng",lng); // sets the longitude 
  newButton.addEventListener('click', function(){
      map2.flyTo([lat,lng]); //this is the flyTo from Leaflet
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

// JavaScript const variable declaration

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