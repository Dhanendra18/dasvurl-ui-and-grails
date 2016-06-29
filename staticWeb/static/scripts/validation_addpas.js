function validatekr(thisone){
var name = document.getElementById('id_passenger1_name');
var email = document.getElementById('id_passenger_email');
var mobile = document.getElementById('id_passenger_phone');
var iframe = document.getElementById("id_iframe_selectlocation");
var ifdoc= iframe.contentDocument || iframe.contentWindow.document;
var location = ifdoc.getElementById('id_output_fare1');
var trip_pas1=document.getElementById('id_trip_pas1');

if (validate_uid(name, 3)) {
	if (ValidateEmail(email)) {
		if (validate_phone(mobile)) {
			if (validate_location(location)) {
				doneFunctionCaller('id_locationrowhider_pas1','.firstPassenger','.addpas1',thisone);
				return true;
			}
		}
	}
}
return false;
}
function validatePas2(thisone){
	var name = document.getElementById('id_passenger2_name');
	var email = document.getElementById('id_passenger1_email');
	var mobile = document.getElementById('id_passenger1_phone');
	var iframe = document.getElementById("id_iframe_selectlocation");
	var ifdoc= iframe.contentDocument || iframe.contentWindow.document;
	var location = ifdoc.getElementById('id_output_fare2');
	var trip_pas1=document.getElementById('id_trip_pas2');

	if (validate_uid(name, 3)) {
		if (ValidateEmail(email)) {
			if (validate_phone(mobile)) {
				if (validate_location(location)) {
					doneFunctionCaller('id_locationrowhider_pas2','.secondPassenger','.addpas2',thisone);
					return true;
				}
			}
		}
	}
	return false;
}

function validatePas3(thisone){
	var name = document.getElementById('id_passenger3_name');
	var email = document.getElementById('id_passenger2_email');
	var mobile = document.getElementById('id_passenger2_phone');
	var iframe = document.getElementById("id_iframe_selectlocation");
	var ifdoc= iframe.contentDocument || iframe.contentWindow.document;
	var location = ifdoc.getElementById('id_output_fare3');
	var trip_pas1=document.getElementById('id_trip_pas3');

	if (validate_uid(name, 3)) {
		if (ValidateEmail(email)) {
			if (validate_phone(mobile)) {
				if (validate_location(location)) {
					doneFunctionCaller('id_locationrowhider_pas3','.thirdPassenger','.addpas3',thisone);
					return true;
				}
			}
		}
	}
	return false;
}


function validate_uid(userid, min) {
	var len = userid.value.length;
	if (len == 0 || len < min) {
		alert( "please enter your name ");
		userid.focus();
		return false;
	} else {
		return true;
	}
}

function ValidateEmail(mailid) {
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (mailid.value.match(mailformat)) {
		return true;
	} else {
		alert("Enter valid email address!");
		mailid.focus();
		return false;
	}
}
function validate_phone(contact) {
	var onlydigit = /^\d{10}$/;
	if (contact.value.match(onlydigit)) {
		return true;
	} else {
		alert("enter correct phone no");
		contact.focus();
		return false;
	}
}
function validate_location(location){
	var len=location.innerHTML;
	if (len == "") {
		return false;
	} else {
		return true;
	}
}