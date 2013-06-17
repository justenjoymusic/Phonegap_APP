var url = "http://192.168.178.27/SyncGwmmob/sync.asmx/getMessroutenListe";
var user ="testuser";
var password = "1234";
var params = "Benutzername=" + user + "&Passwort=" + password; 
//var toSend= url + parameter;


var SettingsView = function(store) {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('click','#accSetting', this.getData);
        this.el.on('click','#accSetting',this.setHashHome);
        this.el.on('click','#')
    };

	this.setHashHome = function(){
		window.location.hash = 'home';
	};
	
	this.getData = function(){
		
		
		
		url= document.getElementById("gwmURL").value;
		user= document.getElementById("user").value;
		password= document.getElementById("pw").value;
		parameter= "Benutzername=" + user + "&Passwort=" + password;
		
		var SyncConf = new SyncConfig(url,user,password,parameter);   // SyncConf müsste noch übergeben werden
		alert(SyncConf.url)
	
	
			
	}
	
    this.render = function() {
        this.el.html(SettingsView.template(this.isGps()));
        return this;
    
    };
    
  
    this.doChallengeResponse = function(){
    
    str = "username als String" + "*" + "passwort als String";
    var md5_hashed = MD5(str); 
 

  	}
    

    this.initialize();
    
    this.isGps = function(){
    var isGps;
		if(navigator.geolocation){
		 isGps = "aktiv";
		
		}
		else{
		 isGps = "inaktiv";
		}
		return isGps;
    }
    
}

SettingsView.template = Handlebars.compile($("#settings-tpl").html());


function SyncConfig(url,user,pw,para){
		
	this.url = url;
	this.user = user;
	this.pw = pw;
	this.parameter = para;
	
}




