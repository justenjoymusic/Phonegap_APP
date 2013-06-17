var tmpForHomeView; // Vorerst für die Übergabe der Route ans HomeView


var MemoryStore = function(successCallback, errorCallback) {
	
	// Routen im FileSys ablegen.
			var selectedRoute;
			var mRoutes = new Array();
			var lsUsed = 0;
			var selectedMP;
			var routeList = new Array();
			//var mPoints = new Array();
			var dataxml = "";	
			var map;
			
			
			// testRoute for localStorage
			var testRoute = new Route("id-testID-123", "storageRoute");
			var testPoint1 = new MeasuringPoint("stTestId1","gwm1",1,8.679493,49.889160,"nicht gesetzt","nicht gesetzt");
			var testPoint2 = new MeasuringPoint("stTestId2","gwm2",2,8.604048,49.832723,"nicht gesetzt","nicht gesetzt");
			var testMePoints = new Array();
			testMePoints.push(testPoint1);
			testMePoints.push(testPoint2);
			testRoute.setMePoints(testMePoints);
			
			mRoutes.push(testRoute);
			
			
			this.setMarker = function(lat,long){
		
			console.log(lat,long);
			var myLatlng = new google.maps.LatLng(lat, long); //49.8468,9.1622
			var marker = new google.maps.Marker({
    				position: myLatlng,
  				    title:"Hello World!"
				});

// To add the marker to the map, call setMap();
				marker.setMap(map);
				map.setCenter(myLatlng, 5);
				console.log("markerSet");
			}
			
			this.setSelectedMP = function(selected){
				selectedMP = selected;
			}
			this.getSelectedMP = function(){
				return selectedMP;
			}
		
			this.setSelectedRoute = function(selection){
				selectedRoute = selection;
				console.log("Selected Route:" + selectedRoute + "added");
			}
			
			this.getSelectedRoute = function(){
				return selectedRoute;
			}
			
			

			this.getRoutes = function(){
				return mRoutes;
			}
			
			this.getRoute = function(index){
				
				return mRoutes[index];
			}
			
			this.getRoutesToLoad = function()
			{
				return routeList;
			}
	
			this.initializeMap = function(){
			  var mapOptions = {
						          center: new google.maps.LatLng(49.814167000000000000, 8.625972000000047000),
						          zoom: 10,
						          mapTypeId: google.maps.MapTypeId.ROADMAP
						        };
		 	 map = new google.maps.Map(document.getElementById("map_canvas"),
			 mapOptions);
	}
			
			
			/*this.changeCoordSys = function(gkRight, gkLeft){
					var rDegree = gkRight  / 1000000;
					rDegree.toFiexed();
					rDegree = rDegree * 3;
					rMetre = 
			}
			*/
			
			
			this.getRouteList = function(){
				
				//url =	url.replace(/getMessroute/g, "getMessroutenListe");
				
				console.log("Aktuelle URL: " + url);
				dataxml = makeCorsRequest('post', url);
				
				// check ob Route bereits in Liste!
				
				routeList = parseRoutesToList(dataxml); 	
				
				
							
				var lengthR = mRoutes.length;
				var lengthL = routeList.length;
				var hasRoute = false;
				
				element = null;
					for (var i = 0; i < lengthL; i++) {
								for (var x = 0; x < lengthR; x++) {
								
								if(routeList[i].id == mRoutes[x].id){
									console.log("Bereits im Speicher");
									hasRoute = true;
									
								}
							
							  }
					 
					 if(hasRoute == false)
					 {
					 		console.log("Route zum LoadView hinzugefügt");
							mRoutes.push(routeList[i]);
					  
					 } 
					 hasRoute = false;
					  
					}
				return routeList;
			};
			
			
			this.getRoutesFromLocalStorage = function(){
				
				if(lsUsed == 1){
				var tmpRoute = JSON.parse(window.localStorage.getItem(0));
				mRoutes.push(tmpRoute);
				mRoutes[mRoutes.length].setMePoints(tmpRoute.mPoints);
				return mRoutes;
				}
				else
				{
					console.log("Local Storage Empty");
					return false;
				}
				
			}
			
			
			
				this.getMeasurePoints = function(selected){
				var x;
				var id;
				console.log(mRoutes.length+ selectedRoute +"/"+ selected);
				
				
						id = routeList[selected].id;
						params = params + "&selID=" + id;
						
					    url = url.replace(/getMessroutenListe/g, "getMessroute");
						
						//url = "http://192.168.178.27/SyncGwmmob/sync.asmx/getMessroute" // hardcoded
						dataxml = makeCorsRequest('post', url);
						
						var tmpPoints = parseMeasuringPoint(dataxml)
				 		routeList[selected].setMePoints(tmpPoints); 
				 		
				 		tmp2Points = routeList[selected].getMePoints();
				 		console.log(" mPoints :" + tmp2Points[selected].id);
				 		url =	url.replace(/getMessroute/g, "getMessroutenListe");
						console.log("GetMeasurePoints - URL: " + url)					
						//save MeasuringPoints	
						return mRoutes[selected].mPoints;
	
					}
			
				
					this.saveRouteToLocalStorage = function(selected){
					lsUsed=1;
					var tmpRouteToSave =  mRoutes[selected];
					console.log("tmpRouteToSave:" + tmpRouteToSave.id);
					 
					 window.localStorage.setItem( selected, JSON.stringify(tmpRouteToSave));
					 //new route?! 
					// var temp = JSON.parse(window.localStorage.getItem(selected));
					// console.log("from LS:" + temp.mPoints[0].gkRight);
					
					}
				
				    
			
   	
   successCallback();
}
