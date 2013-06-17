var MeasuringPoint = function(id,number,counter,gkH,gkR,value, date) {
  
  		this.id         = id;  
  		this.number = number;
  		this.counter = counter;
  		this.gkHeight = gkH;
  		this.gkRight =	gkR;
  		this.value = value ;
  		this.date = date;
  		
  		this.setValue = function(mValue){
  			this.value = mValue;
  		}
  		
  		this.setActualDate = function(){
  	
  		var actDate = new Date();
		var day = actDate.getDate();
		var year = actDate.getFullYear();
		var month = actDate.getMonth() + 1;
		
		this.date = day + "." + month + " " + year;
		
  		}
  	
  		
  		/*this.userID = name;
        this.number_GWO = nrG;
        this.number_user = nrU;
        this.typID = typID;
        this.place_GK_Precision_ID = p_gk_pre_id;
        */	
}