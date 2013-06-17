var GraphView = function(store) {

	var tmpLat;
	var tmpLon;
	
    this.initialize = function() {	
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
    };
    
this.showGraph = function(){
	    
    var d2 = [[65, 66], [70, 71], [80, 82], [83, 90]];
    // a null signifies separate line segments
    var plot = $.plot($("#placeholder"), [ d2]);
}


 this.render = function() {
 		var selectedRoute = store.getSelectedRoute();
 		var selectedPoi = store.getSelectedMP();
    	var tmpPoint = store.getRoute(selectedRoute).getMePoints();
    	
    	
        this.el.html(GraphView.template(tmpPoint)); 
        this.showGraph();
        return this; 
    }


    this.initialize();



}

GraphView.template = Handlebars.compile($("#graph-tpl").html());



	

	




