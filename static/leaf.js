var mymap = L.map('mapid').setView([24.427,60.996], 6);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZnBpbnZvIiwiYSI6ImNrdnZoajQzOGJ4aGUyb3M3YWE0Yjg1aHQifQ.IIQklQtrUJnooUrXcFoOgg' //ENTER YOUR ACCESS TOKEN HERE
}).addTo(mymap);

mapMarkers1 = [];
mapMarkers2 = [];
mapMarkers3 = [];

var source = new EventSource('/topic/testTrakership'); //ENTER YOUR TOPICNAME HERE
source.addEventListener('message', function(e){

  console.log('Message');
  obj = JSON.parse(e.data);
  console.log(obj);

  if(obj.Shipline == '00001') {
    for (var i = 0; i < mapMarkers1.length; i++) {
      mymap.removeLayer(mapMarkers1[i]);
    }
    marker1 = L.marker([obj.latitude, obj.longitude]).addTo(mymap);
    mapMarkers1.push(marker1);
  }

  if(obj.Shipline == '00002') {
    for (var i = 0; i < mapMarkers2.length; i++) {
      mymap.removeLayer(mapMarkers2[i]);
    }
    marker2 = L.marker([obj.latitude, obj.longitude]).addTo(mymap);
    mapMarkers2.push(marker2);
  }

  if(obj.Shipline == '00003') {
    for (var i = 0; i < mapMarkers3.length; i++) {
      mymap.removeLayer(mapMarkers3[i]);
    }
    marker3 = L.marker([obj.latitude, obj.longitude]).addTo(mymap);
    mapMarkers3.push(marker3);
  }
}, false);
