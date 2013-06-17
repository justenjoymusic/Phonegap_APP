function createCORSRequest(method, url) {
 // url="http://localhost/SyncGwmmob/sync.asmx/getMessroutenListe";	
  var xhr = new XMLHttpRequest();
  	//var params = parameter; //Benutzername=Testuser&Passwort=1234
    xhr.open('POST', url,false);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(params);

  return xhr;
  
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
  // All HTML5 Rocks properties support CORS.
 


  var xhr = createCORSRequest('POST', url);
		  if (!xhr) {
		    alert('CORS not supported');
		    return;
		  }
		  	console.log(url + params + " Received:  "   +    xhr.responseText);
		  	  
		
		  // Response handlers.
		  xhr.onload = function() {
		    var text = xhr.responseText;
		    var title = getTitle(text);
		    alert('Response from CORS request to ' + url + ': ' + title);
		  };
		
		  xhr.onerror = function() {
		    alert('Woops, there was an error making the request.');
		  };
  
  
  return xhr;
}
