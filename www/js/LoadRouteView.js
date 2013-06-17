var LoadRouteView = function(store) {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        //this.checkRouteListChange();
        this.el.on('click','#loadRoute',this.saveSelectedRoute);
        this.el.on('click','#loadRoute',this.setHashHome);
   
    };

	
    this.render = function() {
    	 var tempRoutes = store.getRoutesToLoad();
        this.el.html(LoadRouteView.template(tempRoutes));
        return this;
    };

	this.setHashHome = function(){
		window.location.hash = "home";
	}

	this.saveSelectedRoute = function(){
		
		console.log("Save Selected Route:")
		var tmpCheckedRoutes = new Array();  //TEMP Array der ausgewählten Routen
		var selected = 0;
		$('input:checkbox').each(function () {
			
				if($(this).prop('checked')){
					//if(mRoutes.length >= 1 )
					console.log("Checked: " + $(this).val())
					//tmpCheckedRoutes.push(new Route("Übergeben", $(this).val()));
					store.getMeasurePoints(selected);
					store.saveRouteToLocalStorage(selected);
				}
				
				else{	
				}	
       		     console.log("Selected:"+ selected);
			     selected++;
      });
      
      //tmpForHomeView = tmpCheckedRoutes; // Strings der gewählten zu ladenden Routen
	}

    this.initialize();
	
}
LoadRouteView.template = Handlebars.compile($("#loadRoute-tpl").html());
