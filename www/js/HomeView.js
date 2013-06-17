var HomeView = function(store) {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
		this.el.on('click', '#routenverwaltung', this.setHashRoutes);
		this.el.on('click', '#settings', this.setHashSettings);
		this.el.on('click', '#start', this.getSelected);
		this.el.on('click', '#start', this.setHashMpList);      
    }

	this.getSelected = function(){
		var selected = 0;	
		$("#selectRoute option").each(function () {
			console.log("in select");
			if($(this).prop('selected'))
			{
			
       			store.setSelectedRoute(selected);
       			//store.selectedRoute = selected;
			}
			selected++;
		});
	}

	this.setHashMpList = function(){
		window.location.hash = 'mpList';
	}

	this.setHashRoutes = function(){ 
		window.location.hash = 'routes';
	};


	this.setHashSettings = function(){
		window.location.hash = 'settings';
	};


    this.render = function() {
    	var temp = store.getRoutes();
        this.el.html(HomeView.template(temp)); //tmpForHomeView
        return this;
    };

	

    this.initialize();

}

HomeView.template = Handlebars.compile($("#home-tpl").html());



  
   
