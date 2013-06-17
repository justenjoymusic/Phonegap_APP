var RoutesView = function(store) {
	var tempRoute;
    this.initialize = function() {
    	
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
	//	this.el.on('click','#addRoute', makeCorsRequest);
		this.el.on('click','#addRoute', this.getRouteList);
		this.el.on('click','#addRoute', this.setHashLoadRoute);
		this.el.on('click','#settings', this.setHashSettings);
		
		  /*if(this.loadData()){
			this.el.on('click','#addRoute', this.setHash);
			}
			*/
		// Store die Route?
		    
    };


	this.getRouteList = function(){
		 tempRoute = store.getRouteList();
		 console.log("Store läd Route :" + tempRoute[0].id);
		 
	}

	this.setHashLoadRoute = function(){
		window.location.hash = '#loadRoutes';
	}
	
	this.setHashSettings = function(){
		window.location.hash = '#settings';
	}
	
    this.render = function() {
    	  var tempRoutes = store.getRoutes();
        this.el.html(RoutesView.template(tempRoutes));
        return this; 
        
    };


    this.initialize();



}

RoutesView.template = Handlebars.compile($("#routes-tpl").html());








