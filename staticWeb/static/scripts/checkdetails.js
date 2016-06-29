function checker() {
	var phone=document.getElementById("id_passenger_phone").value;
	if(phoneNo(phone)){
		return true;
	}
}
function phoneNo(phone) {
	
	if(phone==""){
		$('.check_1').addClass('glyphicon-remove');
		$('.check_1').removeClass('glyphicon-ok');
		
		return false;}
	else {
		$('.check_1').removeClass('glyphicon-remove');
		$('.check_1').addClass('glyphicon-ok');
		return true;
	}
	
}