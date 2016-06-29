;$(document).ready(function () {
	
	//SECONDSECTON REFFERENCE
    var menu = $('.scrollbtn');
    var origOffsetY = menu.offset().top;
    $(".signupbtn").hide();
    //alert("second section"+origOffsetY);
    
    //FIRSTSECTON REFFERENCE
    var section1=$(".fstpage");
    var origOffset1SecY = section1.offset().top;
    //alert("firstsection "+origOffset1SecY);
    
    //THIRDSECTION REFFERENCE
    var section3=$("#id_trdpage");
    var origOffset3SecY = section3.offset().top;
    //alert("third section "+origOffset3SecY);
    
    //FOURTHPAGE REFFERENCE
    var secton4c=$("#id_fourthpage");
    var origOffset4SecY = secton4c.offset().top;
    
    //FIFTHPAGE REFFERENCE
    var secton5c=$("#id_fifthpage");
    var origOffset5SecY = secton5c.offset().top;
    
    //SIXTHPAGE REFFERENCE
    var secton6c=$("#id_sixthpage");
    var origOffset6SecY = secton6c.offset().top;
    //alert("fourth section"+origOffset4SecY);
    
    var secton7c=$("#id_seventhpage");
    var origOffset7SecY = secton7c.offset().top;
    //alert("sevenet section"+origOffset4SecY);
    
    //SCROLL BTN
    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.btna').addClass('signupbtnscroll');
            $(".navme").slideDown(10);
            $(".topbar").hide(10);
            $(".fbimg").hide();
            $(".twitterimg").hide();
           
            
        } else {
           
        	$('.btna').removeClass('signupbtnscroll');
        	$(".navme").slideUp(10);
        	$(".topbar").show(10);
            $(".fbimg").show();
            $(".twitterimg").show();
           
        }
 
//CHANGE OF SCROLL BAR
    	 if($(window).scrollTop() >= origOffset4SecY)
    		 {
    		 $('.bars').removeClass('topbar');
    		 $('.bars').addClass('topbar1');
    		 //alert('message4');
    		 }
    	 else
    		 {

    		 $('.bars').removeClass('topbar1');
    		 $('.bars').addClass('topbar');    		 
    		 }
    	 
    	 if($(window).scrollTop() >= origOffset1SecY-80 && $(window).scrollTop() < origOffsetY-80)
			 {
    		// alert("you are in first section")
    			 $(".li2").removeClass("hiddenclass");
    			$(".li1").addClass("hiddenclass");
    			$(".li3").addClass("hiddenclass");
    			$("#ul1").addClass("active1");
			 
			 }
    	 else{
    		 $("#ul1").removeClass("active1");
    	 }	
    	 
    	 if($(window).scrollTop() >= origOffsetY-80 && $(window).scrollTop() < origOffset3SecY-80)
		 {
		 //alert("you are in 2nd section");
		 	$(".li3").removeClass("hiddenclass");
		 	$(".li2").addClass("hiddenclass");
		 	$(".li4").addClass("hiddenclass");
		 	$("#ul2").addClass("active1");
		 	$("#li1").addClass("active");
		 	//alert('message2');
		 }
    	 else{
  			$("#ul2").removeClass("active1");
  			$("#li1").removeClass("active");
     	 }
    	 
    	 if($(window).scrollTop() >= origOffset3SecY-80 && $(window).scrollTop() < origOffset4SecY-80)
			 {
    		 //alert("you are in 3rd section");
    		 	$(".li4").removeClass("hiddenclass");
    		 	$(".li3").addClass("hiddenclass");
    		 	$(".li1").addClass("hiddenclass");
    		 	$("#ul3").addClass("active1");
    		 	$("#li2").addClass("active");
    		 //	alert('message3');
			 }
    	 else{
 			$("#ul3").removeClass("active1");
 			$("#li2").removeClass("active");
    	 }
    	
    	 if($(window).scrollTop() >= origOffset4SecY-80  && $(window).scrollTop() < origOffset5SecY-80)
		 {
		 //alert("you are in 4th section");
		 	$(".li1").removeClass("hiddenclass");
		 	$(".li4").addClass("hiddenclass");
		 	$("#ul4").addClass("active1");
		 	$("#li3").addClass("active");
		 }
    	 else{
  			$("#ul4").removeClass("active1");
  			$("#li3").removeClass("active");
     	 }
    	 if($(window).scrollTop() >= origOffset5SecY-80  && $(window).scrollTop() < origOffset6SecY-80)
		 {
		 //alert("you are in 4th section");
		 	$(".li1").removeClass("hiddenclass");
		 	$(".li4").addClass("hiddenclass");
		 	$("#ul5").addClass("active1");
		 	$("#li4").addClass("active");
		 }
    	 else{
  			$("#ul5").removeClass("active1");
  			$("#li4").removeClass("active");
     	 }
    	 if($(window).scrollTop() >= origOffset6SecY-80 && $(window).scrollTop() < origOffset7SecY-150)
		 {
		 //alert("you are in 4th section");
		 	$(".li1").removeClass("hiddenclass");
		 	$(".li4").addClass("hiddenclass");
		 	$("#ul6").addClass("active1");
		 	$("#li5").addClass("active");
		 }
    	 else{
  			$("#ul6").removeClass("active1");
  			$("#li5").removeClass("active");
     	 }
    	 if($(window).scrollTop() > origOffset7SecY-150)
		 {
		 //alert("you are in 4th section");
		 	
		 	$("#ul7").addClass("active1");
		 	$("#li6").addClass("active");
		 }
    	 else{
  			$("#ul7").removeClass("active1");
  			$("#li6").removeClass("active");
     	 }

    }

 document.onscroll = scroll;
    
});	