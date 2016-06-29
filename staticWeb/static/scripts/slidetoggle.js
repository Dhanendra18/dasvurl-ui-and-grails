
$(document).ready(function() {

	
    
  $("tr.hide1").hide();
  $("tr.hide2").hide();
  $("tr.hide3").hide();
  $("tr.hide4").hide();

  $("img.picture1").click(function() {
    $("tr.hide1").slideToggle(300,function(){
    });
    
        	
    
   
  });

  
  
  $("img.picture2").click(function() {
	    $("tr.hide2").slideToggle(300);
	  });

  $("img.picture3").click(function() {
	    $("tr.hide3").slideToggle(300);
	  });

  $("img.picture4").click(function() {
	    $("tr.hide4").slideToggle(300);
	  });


});



