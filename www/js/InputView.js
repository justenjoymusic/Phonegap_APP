var InputView = function(store) {

	var tmpLat;
	var tmpLon;
	
    this.initialize = function() {
    		
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('click','#acceptInput', this.saveValue);
        this.el.on('click','#showGraph', this.setHashGraph);
        this.el.on('click','#speechBtn', this.recognizeSpeech);
    };
    
 this.setHashGraph = function(){
 	window.location.hash = 'graph';
 }   
    
 this.saveValue = function(){
 	var poiValue = $('#mValue').val();
 	console.log("POI:" + poiValue);
 	var tmpPoint = store.getRoute(store.getSelectedRoute()).getMePoints();
 	tmpPoint[store.getSelectedMP()].setValue(poiValue);
 	tmpPoint[store.getSelectedMP()].setActualDate();

 }

this.render = function() {
 		var selectedRoute = store.getSelectedRoute();
 		var selectedPoi = store.getSelectedMP();
    	var tmpPoint = store.getRoute(selectedRoute).getMePoints();
    	this.el.html(InputView.template(tmpPoint[selectedPoi]));
        
        return this;  
    }
    
    
this.recognizeSpeech = function() {

				        var requestCode = 1234;
				        var maxMatches = 5;
				        var promptString = "Please say a command";  // optional
				        var language = "de";                     // optional
				        window.plugins.speechrecognizer.startRecognize(speechOk, speechFail, requestCode, maxMatches, promptString, language);
				    }
				
function speechOk(result) {
    var respObj, requestCode, matches;
    if (result) {
        respObj = JSON.parse(result);
        if (respObj) {
            var matches = respObj.speechMatches.speechMatch;
			//var Ausdruck = /(\d.+)\S(\d.+)/;
  			//Ausdruck.exec(matches);
  			
  			
  			$('#mValue').val(matches[0]);
  			
  			
            for (x in matches) {
                console.log("possible match: " + matches[x]);
                
                // regex comes in handy for dealing with these match strings
                
                
            }
        }        
    }
}
				    
  function speechFail(message) {
    console.log("speechFail: " + message);
}
    
    
this.initialize();


}

InputView.template = Handlebars.compile($("#input-tpl").html());



	

	




