function startMap() {
    var ironhackBCN = {
        lat: 41.3977381, 
        lng: 2.190471916};
    var map = new google.maps.Map(
      document.getElementById('map'), 
      {
        zoom: 15,
        center: ironhackBCN
      }
      
    );     
    
    var geocoder = new google.maps.Geocoder();    
    var infoWindow = new google.maps.InfoWindow;


    if (navigator.geolocation) {
      
          navigator.geolocation.getCurrentPosition(function (position) {
      
            var pos = {
      
              lat: position.coords.latitude,
      
              lng: position.coords.longitude
      
            };
      
      
      
            infoWindow.setPosition(pos);
      
            infoWindow.setContent('Location found.');
      
            infoWindow.open(map);
      
            map.setCenter(pos);
      
      
      
          }, function () {
      
            handleLocationError(true, infoWindow, map.getCenter());
      
          });
      
        } else {
      
          // Browser doesn't support Geolocation
      
          handleLocationError(false, infoWindow, map.getCenter());
      
        }
      
      
      
      
      
        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      
          infoWindow.setPosition(pos);
      
          infoWindow.setContent(browserHasGeolocation ?
      
            'Error: The Geolocation service failed.' :
      
            'Error: Your browser doesn\'t support geolocation.');
      
          infoWindow.open(map);
      
        }

  }
  

document.addEventListener("DOMContentLoaded", function(event) { 
    startMap();
});

