var Route = function(id,name) {

        this.mPoints	= new Array();  
  		this.id         = id;  
  		this.name = name;
        this.state = true;
        
        
        this.setMePoints = function(mPointArr) {
        	this.mPoints = mPointArr;
        }
        
        
   		 this.getMePoints = function(){
    			return this.mPoints;
    	
    	
  	    };
  	      
 
}