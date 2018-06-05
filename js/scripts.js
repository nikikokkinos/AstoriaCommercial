console.log ('mymap');

var mymap = L.map('map').setView([40.771117, -73.910651], 13);

L.tileLayer('https://b.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var CouncilDistrictOverlay = L.geoJSON (cd22,{
    fillColor: "#ffe77c",
    fillOpacity: .1,
    weight: 1,
  }).addTo(mymap);

var NonConformingOverlay = L.geoJSON (nonconforming, {
  fillColor: "#c13432",
  fillOpacity: .5,
  weight: 1,
}).addTo(mymap);
