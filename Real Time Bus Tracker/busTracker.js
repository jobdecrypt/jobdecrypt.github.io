//https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip
const token = "pk.eyJ1IjoidmlsbGFuY2ExOTkxIiwiYSI6ImNrbHowaGlhcTA2bHAyb3A4NzdzcHlpb3IifQ.DrUk_IeC4uA-_uqhKyXr6Q";

mapboxgl.accessToken =
  `${token}`;

let followMarker = [];

const map = new mapboxgl.Map({
  container: "map",
  //   style: "mapbox://styles/mapbox/streets-v11",
  style: "mapbox://styles/mapbox/satellite-streets-v11", //I just changed the style
  center: [-71.091542, 42.358862],
  zoom: 14,
});

async function run() {
  const locations = await getBusLocations();
  let latLong = [];
  latLong.push(locations[0].attributes.longitude); //this will push the json data of longitude in latLong Array
  latLong.push(locations[0].attributes.latitude); //this will push the json data of latitude in latLong Array

  // Do not switch this two lines, it will affect the centering of the map
  followMarker.push(locations[0].attributes.longitude);
  followMarker.push(locations[0].attributes.latitude); //this will push the json data of longitude in latLong Array

  new mapboxgl.Marker({ color: "red" }).setLngLat(latLong).addTo(map);

  // logs the latitude and longitude of the marker
  console.log(new Date());
  console.log(latLong);

  setTimeout(run, 6000);
}

async function getBusLocations() {
  const url = "https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip";
  //   const url = "https://cdn.mbta.com/realtime/VehiclePositions_enhanced.json";
  // const url =
  //   "https://api-v3.mbta.com/trips/%22job%22?fields%5Btrip%5D=%22vehicle%22&include=%22route%22";
  const response = await fetch(url);
  const json = await response.json();

  return json.data;
}

run();
console.log(mapboxgl.Map.center);
