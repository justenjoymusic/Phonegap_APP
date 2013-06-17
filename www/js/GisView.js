var GisView = function(store) {

	this.initialize = function() {
        this.el = $('<div/>');
        this.el.on('click','#myPosition', this.getLocation)
        this.el.on('click','#mpPosition',this.showMp)
        
    };


 this.render = function() {
        this.el.html(GisView.template());
	 return this; 
    }
 
this.getLocation = function(event)
  	{
        event.preventDefault();
        console.log('addLocation');
        navigator.geolocation.getCurrentPosition(
            function(position) {
              console.log('location:' + position.coords.latitude + ',' + position.coords.longitude);
              tmpLat = position.coords.latitude;
              tmpLon = position.coords.longitude;
 			  store.setMarker(tmpLat,tmpLon);	
 			  
            },
            function() {
                alert('Error getting location');
            });            
        //return false;
    };

this.showMp = function(){
	var tmpPoints = store.getRoute(store.getSelectedRoute()).getMePoints();
 	var tmpLon = tmpPoints[store.getSelectedMP()].gkHeight;
 	var tmpLat = tmpPoints[store.getSelectedMP()].gkRight;
 	store.setMarker(tmpLat,tmpLon);
}
    this.initialize();
}

GisView.template = Handlebars.compile($("#gis-tpl").html());