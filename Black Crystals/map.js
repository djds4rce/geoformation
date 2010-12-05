
function getloc(){
navigator.geolocation.getCurrentPosition(function(position) {
   lat = position.coords.latitude;
   lang = position.coords.longitude;
      initialize();
	  
	  });
	  function initialize() {
	      
      if (GBrowserIsCompatible()) {
        var map = new GMap2(document.getElementById("map"));
	     map.setCenter(new GLatLng(lat, lang), 13);
        map.setUIToDefault();
       }
	   GEvent.addListener(map, "click", getCoordinate);

function getCoordinate(overlay, point) {
  if (!overlay) {
    var longitude = point.lng();
    var latitude =  point.lat();
	alert("longitude:"+longitude+"latitude:"+latitude);
  }
	   }
	   
	   
	   GEvent.addListener(map, "click", getCoordinate);	   
}
}