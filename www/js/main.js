var app = {

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },

    registerEvents: function() {
        $(window).on('hashchange', $.proxy(this.route, this));
        $('body').on('mousedown', 'a', function(event) {
            $(event.target).addClass('tappable-active');
        });
        $('body').on('mouseup', 'a', function(event) {
            $(event.target).removeClass('tappable-active');
        });
        
    },
	
	

    route: function() {
        var hash = window.location.hash;
        
       /*  $(window).hashchange( function(){
        
        });
        
        */
       
       
        if(hash != "#gis"){
        $('#map_canvas').hide();
        }
       
        if(hash == '#input'){
        	$('#bodyContainer').html(new InputView(this.store).render().el);
        	return;
        }
        
        
        if(hash == '#graph') {
            $('#bodyContainer').html(new GraphView(this.store).render().el);
            return;
        }
        if (!hash) {
        	window.location.hash = 'home';
            return;
        }
        
        if (hash == "#home") {
            $('#bodyContainer').html(new HomeView(this.store).render().el);
            console.log("in Home!");
            return;
        }
        
		if(hash == "#routes"){
			$('#bodyContainer').html(new RoutesView(this.store).render().el);
			return;
			}
			
		if(hash == "#settings"){
			$('#bodyContainer').html(new SettingsView(this.store).render().el);
			return;
			}
			
	
		if (hash == "#loadRoutes" ){
		    $('#bodyContainer').html(new LoadRouteView(this.store).render().el);
		}
		
			if (hash =="#mpList"){
			$('#bodyContainer').html(new MpView(this.store).render().el);
		}
		
		if (hash == "#gis")	{
			this.store.initializeMap();
		   $('#map_canvas').show();
			$('#bodyContainer').html(new GisView(this.store).render().el);
			
	
        }
  
    },

    initialize: function() {
        var self = this;
        //this.detailsURL = /^#employees\/(\d{1,})/;
        this.registerEvents();
        
        
		  this.store = new MemoryStore(function() {
            self.route();
        });
       
    }

};
app.initialize();







// Sichert dass as Gerät fertig initialisiert ist.
// Sollte die App im Browser ausführbar sein, muss dieses Event auskommentiert werden


 
document.addEventListener("deviceready", onDeviceReady, true); 

function onDeviceReady()
    {
        window.plugins.speechrecognizer.init(speechInitOk, speechInitFail);
        app.initialize();
    }

function speechInitOk() {
        alert("we are good");
    	//supportedLanguages();    
    }
    
    function speechInitFail(m) {
        alert(m);
    }

function supportedLanguages() {
    window.plugins.speechrecognizer.getSupportedLanguages(function(languages){
            // display the json array
        alert(languages);
    }, function(error){
        alert("Could not retrieve the supported languages");
    });
}
     