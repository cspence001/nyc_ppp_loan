

// Creating map object
var myMap = L.map("map", {
    center: [40.73, -74.0059],
    zoom: 11
  });
  
  // Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);
/////////


  // Grab the data with d3
  d3.csv("data/nycppprecipients_geo.csv").then(function(data){
    console.log(data);
    // Create a new marker cluster group
    var markers = L.markerClusterGroup();

    // Loop through data
    for (var i = 0; i < data.length; i++) {
      // Set the latitude, longitude property to a variable
      var latitude = data[i].lat;
      var longitude = data[i].lng;
      var popText = ("<h3>" + data[i].BusinessName + "</h3><h3>Address: " + data[i].Address+ "</h3>" + "<h3>Industry: " +data[i].Industry +"</h3>" + "<h3>LoanRange: " +data[i].LoanRange + "</h3><h3>JobsRetained: " + data[i].JobsRetained +"</h3>" );
      // var industry = data[i].Industry;
      // var mySelector = $("#Industry").val();
      // Check for location property

      if (latitude) {
        // Add a new marker to the cluster group and bind a pop-up
        markers.addLayer(L.marker([latitude, longitude])
          .bindPopup(popText));
        };
    }
    // Add our marker cluster layer to the map
    myMap.addLayer(markers);
  });

