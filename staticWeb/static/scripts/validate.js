

function validateregdform() {
	var id_email = document.getElementById("id_email");
	if (ValidateEmail(id_email)) {
		
			$('.hidethis').slideDown(1000);
			$("#changesetup").removeClass("btn-signup");
			$("#changesetup").removeClass("btn-primary");
			$("#changesetup").addClass("signup-change");
			$("#changesetup").addClass("btn-default");
			
			return true;
	}
}
	
function ValidateEmail(id_email) {
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (id_email.value.match(mailformat)) {
			return true;
		} else {
			//document.getElementById("emailerror").innerHTML = "You have entered an invalid email address!";
			alert("Please enter a valid email address");
			id_email.focus();
			return false;
		}
	}

