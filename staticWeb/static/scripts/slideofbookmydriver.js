$(document).ready(function() {

	
    
  $("div.addpass").hide();
  $("table.faresumm").hide();
  $("img.active2").hide();
  $("img.active3").hide();
  $("img.active4").hide();
  $(".register").hide();
  $(".addpas1").hide();
  $(".addpas2").hide();

  
  $('#chkSelect').change(function(){
      var isChecked = $('#chkSelect').is(':checked');
      
      if(isChecked)
        $('.pass').slideUp(1000,function(){$('.register').slideDown(1000);});
      else
    	  $('.pass').slideDown(1000,function(){$('.register').slideUp(1000);});
    });
  
  
  $("td.togglethis").click(function(){ $("img.active1").fadeOut(1,function(){$("img.active2").fadeIn(1);   }); });
  
  $("td.togglethis").click(function() {
	  $("div.signin").slideToggle(300,function(){$("div.addpass").slideToggle(300); });  });

  
  
  /*$("a.done").click(function(){  $("table.tripdetails").slideUp(1000,  function() {$("span.emptybox").fadeOut(100, function(){ $("table.faresumm").delay(100).slideDown(1000); });  });     }); });*/ 

 $("button.confirmnnext").click(function(){  $("img.active2").fadeOut(100,function(){$("img.active3").fadeIn(100); });});
 
 $("a.done").click(function(){$("table.faresumm").slideDown(1,function(){ $("span.emptybox").fadeOut(1,function(){ $("table.tripdetails").slideUp(100);  }); });});
 
 $('.add1').click(function(){ $('.addpas1').slideToggle(100);});
 
 $('.add2').click(function(){ $('.addpas2').slideToggle(100);});
 
 
 
 /*final close*/
 
});