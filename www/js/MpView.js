
var MpView = function(store) {



    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
		this.el.on('click', '#showMap', this.setHashGis);
		this.el.on('click', '#scan', scanBarcode);
		this.el.on('click','#showMap', this.getSelected);
		this.el.on('click','#acceptPoi', this.setHashInput);
		this.el.on('click','#acceptPoi', this.getSelected);
		 this.el.on('click','#speechBtn', this.recognizeSpeech);
		}
    
 
    this.setHashInput = function(){
    	window.location.hash = 'input';
    }

	this.getSelected = function(){
		var selected = 0;
		$("#selectMP option").each(function () {
			console.log("In MPVIEW");
			if($(this).prop('selected'))
			{
				console.log("Selected MP: " + selected);
       			store.setSelectedMP(selected);
       			//store.selectedRoute = selected;
			}
			selected++;
      });
	}
	

    this.render = function() {
    	console.log("Rendering MPVIEW");
    	
    	var selection = store.getSelectedRoute();
    	console.log("selection number: " +  selection);
    	//var tmpRoutes = store.getRoutes();
    	var tmpPoints = store.getRoute(selection).getMePoints();
    	//mPoints =store.getRoute[0].getMePoints();

    	this.el.html(MpView.template(tmpPoints));
        return this;
    };
    
    
	this.setHashGis = function(){
		window.location.hash='gis';
		
	}

	function scanBarcode() {
	window.plugins.barcodeScanner.scan( function(result) {
        alert("We got a barcode\n" +
                  "Result: " + result.text + "\n" +
                  "Format: " + result.format + "\n" +
                  "Cancelled: " + result.cancelled);
    }, function(error) {
        alert("Scanning failed: " + error);
                }
    );
	}


	this.checkResult = function(){
		
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
  			
  			
  			
  			
  			
            for (x in matches) {
                console.log("possible match: " + matches[x]);
                if(matches[x] == "scannen")
                {
                	scanBarcode();
                }
                else if(matches[x] == "Karte")
                {
                	window.location.hash='gis';
                }
                else if(matches[x] == "wählen")
                {
                	window.location.hash = 'input';
                }
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

MpView.template = Handlebars.compile($("#mpList-tpl").html());
