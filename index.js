$(document).ready(function(){

  (function loop() {
      var rand = Math.round(Math.random() * 1000 + 500);
      setTimeout(function() {
            shuffle();
            loop();  
      }, rand);
  }());

});


function shuffle(){
    $(".row").each(function(){

        var divs = $(this).find('div');
        for(var i = 0; i < divs.length; i++){
        	$(divs[i]).remove();            
        }
        //the fisher yates algorithm, from http://stackoverflow.com/questions/2450954/how-to-randomize-a-javascript-array
        var i = divs.length;
        if ( i == 0 ) return false;
        while ( --i ) {
           var j = Math.floor( Math.random() * ( i + 1 ) );
           var tempi = divs[i];
           var tempj = divs[j];
           divs[i] = tempj;
           divs[j] = tempi;
         }

        for(var i = 0; i < divs.length; i++){
    		$(divs[i]).appendTo(this);
        	// $(divs[i]).animate({opacity: '0.9'}, "fast");
    	}

    });                    

}