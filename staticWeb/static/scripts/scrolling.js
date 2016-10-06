;$(document).ready(function () {
	//SECONDSECTON REFFERENCE
	var menu = $('.scrollbtn');
	var origOffsetY = menu.offset().top;
	$(".signupbtn").hide();

	//FIRSTSECTON REFFERENCE
	var section1=$("#myCarousel");
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

function sr (){
	var data = {	gender :$("[name='gender']").val(),
					fullName:$("[name='fullName']").val(),
					country1:$("[name='country1']").val(),
					country3:$("[name='country3']").val(),
					country2:$("[name='country2']").val(),
					phoneNumber:$("[name='phoneNumber']").val(),
					email:$("[name='email']").val(),
					intake:$("[name='intake']").val(),
					course:$("[name='course']").val()
				};

	$.ajax({
		method: "POST",
		dataType: 'jsonp',
		data: data,
		url : "http://dasvurl.com:8080/WebRegister/register",
		statusCode: {
			200: function() {
				$("#registration_popup").hide();
			},
			404: function () {
				console.log("Sorry! Your internet is not working or the site is down, Please try again later")
			}
		},
	 	success : function (result) {

		},
		error: function (result) {

		}
	})
}
