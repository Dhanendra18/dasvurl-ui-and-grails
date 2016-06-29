/**
 * 
 */
$('.Tripinfo').hide();
$('.clockInti').hide();
$('.googleMapinti').hide();
$('.addPassengerOne').hide();
$('.addPassengerTwo').hide();

var count=1;
function basicinfopas1(){
	$('.basicinfo').toggle(1000);
	$('.Tripinfo').toggle(900);
	count=count % 2;
	
	if(count==1){
		$(".cl_change_r1_baseinfo img").attr('src', 'static/images/arrow_up.png');
		$(".cl_change_r1_tripinfo img").attr('src', 'static/images/arrow_down.png');
	}
	else{
		$(".cl_change_r1_baseinfo img").attr('src', 'static/images/arrow_down.png');
		$(".cl_change_r1_tripinfo img").attr('src', 'static/images/arrow_up.png');
	}
	count++;
}
function locationframe(){
	$('.clockInti').fadeOut(100);
	$('.googleMapInti').fadeIn(100);
	$('.locationrowhider').slideDown(100);
}
function timeframe(){
	$('.googleMapInti').fadeOut(100);
	$('.clockInti').fadeIn(100);
}

var iframe = document.getElementById("id_iframe_selectlocation");
var ifdoc= iframe.contentDocument || iframe.contentWindow.document;
function showPassenger(addPassenger,addpas,hideThisBeforeDone,id){
	$(addPassenger).slideDown();
	$(addpas).slideUp();
	$(hideThisBeforeDone).slideUp();
	var value=ifdoc.getElementById(id);
	$(value).fadeIn();
}
/*called by javascript_adddetails.js*/
function nextStep(Passenger,addpas,donebtn,count1,count2,count3){
	var flag=0;
	var value=donebtn.innerHTML;
	value=value.trim();
	if(count1==1){
		var flag=1;
		count1++;
	}else if( count2==1){
		var flag=1;
		count2++;
	}else if(count3==1){
		var flag=1;
		count3++;
	}
	
	if(value=="SUBMIT DETAILS" && flag==1){
		 $(Passenger).slideUp(1000);
		 $(".hideThisBeforeDone").slideDown(1000);
		 $(".googleMapInti").slideUp(1000);
		 $(".clockInti").slideUp(1000);
		 donebtn.innerHTML="Edit";
		 donebtn.setAttribute("class", "btn btn-primary btn-gray ");
		 $(addpas).slideDown(100);
		 flag=1;
	}else if(value=="SUBMIT DETAILS"){
		 $(Passenger).slideUp(1000);
		 $(".hideThisBeforeDone").slideDown(1000);
		 $(".googleMapInti").slideUp(1000);
		 $(".clockInti").slideUp(1000);
		 donebtn.innerHTML="Edit";
		 donebtn.setAttribute("class", "btn btn-primary btn-gray ");
	}else{
		 $(Passenger).slideDown(1000);
		 $(".hideThisBeforeDone").slideUp(1000);
		 donebtn.innerHTML="Done";
		 donebtn.setAttribute("class", "btn btn-primary btn-green");
	}	
}