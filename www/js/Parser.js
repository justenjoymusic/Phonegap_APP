
function parseRoutesToList(xhr){
	
	
	xmldoc = xhr.responseXML;
	var routes = new Array();
	
 	
	
	
	$(xmldoc).find("SELEKTION").each(function(){
			var selID = $(xmldoc).find("SELEKTION_ID").text();
			 console.log(selID);
			var name = $(xmldoc).find("SELEKTION_NAME").text();
			var route = new Route(selID,name);
			routes.push(route);
		});
	
	 return routes;	
};


function parseMeasuringPoint(xhr){
	xmldoc = xhr.responseXML;
	var counter = 0;
	var mPs = new Array();
	$(xmldoc).find("OBJEKT").each(function(){
			console.log("OBJEKT FOUND");
			counter++;
			
			var id = $(this).find("OBJEKT_ID").text();
			var number = $(this).find("OBJEKT_NUMMER").text();
			var gkHeight = $(this).find("OBJEKT_LAGE_GKHOCHWERT").text();
			var gkRight = $(this).find("OBJEKT_LAGE_GKRECHTSWERT").text(); 
			var date = "--.--.----";
			
			var mp = new MeasuringPoint(id,number,counter,gkHeight, gkRight, "nicht gesetzt" , date );
	
			console.log("WITH ID: " + mp.id);
			console.log("AND NUMBER: " + mp.number);
			console.log("Counter: " + mp.counter);
			
		mPs.push(mp);
		id ="";
		number = "";

});
	console.log("PARSER FINISHED");
	return mPs;

}
