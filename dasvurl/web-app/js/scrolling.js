;$(document).ready(function () {
	//SECONDSECTON REFFERENCE
	var menu = $('.scrollbtn');
	var origOffsetY = menu.offset().top;
	$(".signupbtn").hide();

	//FIRSTSECTON REFFERENCE
	var section1=$("#id-studyDestinations");
	var origOffset1SecY = section1.offset().top;
	var bg1_flag = true;

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
		if(bg1_flag && $(window).scrollTop() > origOffset1SecY ) {
			bg1_flag = false;
			$('#bg-1').hide();
			$('#bg-2').show();
		} else if (!bg1_flag && $(window).scrollTop() < origOffset1SecY) {
			bg1_flag = true;
			$('#bg-2').hide();
			$('#bg-1').show();
		}
	}

	document.onscroll = scroll;
});

var registerPopup;

$(".register_now").hover(function(){
	registerPopup = $("#registration_popup").bPopup({
		closeClass: 'close'
	});
});

function sr () {
	$("#form-validate-msg").hide();
	/*todo: apply encryption*/
	var gender = $("[name='gender']").val();
	var full = $("[name='fullName']").val();
	var country2 = $("[name='country2']").val();
	var country1 = $("[name='country1']").val();
	var country3 = $("[name='country3']").val();
	var Number = $("[name='phoneNumber']").val();
	var email = $("[name='email']").val();
	var intake = $("[name='intake']").val();
	var course = $("[name='course']").val();
	var g_recaptcha_response = $("[name='g-recaptcha-response']").val();

	if (!gender || !full || !country2 || !country1 || !country3 || !Number || !email || !intake || !course/* || !g_recaptcha_response*/) {
		$("#form-validate-msg").show();
		return;
	}

	var data = {
			gender : gender,
			fullName: full,
			country1: country2,
			country3: country1,
			country2: country3,
			phoneNumber: Number,
			email: email,
			intake: intake,
			course: course,
			'g-recaptcha-response': g_recaptcha_response
	};
	$.ajax({
		method: "POST",
		data: data,
		url : "http://dasvurl.com/WebRegister/register",
		//url : "http://dasvurl.com:8080/WebRegister/register",
		statusCode: {
			200: function() {
				$("#form-success").show();
				registerPopup.close();
			},
			404: function () {
				$("#form-error").show();
				console.log("Sorry! Your internet is not working or the site is down, Please try again later")
			},
			401: function () {
				$("#form-error").show();
			}
		},
	 	success : function (result) {
			$("#form-success").show();
			registerPopup.close();
		},
		error: function (result) {
			$("#form-error").show();
		}
	});
}
