function submit_user_detail() {
    // var user_data = $("#id-user-detail").serialize();
    // console.log(user_data)
    var csrftoken = $.cookie('csrftoken');
    var city = document.getElementById('id_city').value;
    var email = document.getElementById('id_email').value;
    var home_locality = document.getElementById('id_home_locality').value;
    var office_locality = document.getElementById('id_office_locality').value;
    var user_data = {'csrfmiddlewaretoken': csrftoken, 'city': city, 'email': email, 'home_locality': home_locality, 'office_locality': office_locality}
    $.ajax({
        url: 'http://test.blinkautos.in/early-signup/',
        type: 'POST',
        data: user_data,
        dataType: 'json',
        success: function (response) {
            $(".registeration_form").slideUp(1000);
            $("#thank_you").text("Thank you for signing up.");
            
	    document.getElementById('id_email').value = '';
    	    document.getElementById('id_home_locality').value = '';
    	    document.getElementById('id_office_locality').value = '';
        },
	error: function (response) {
	    alert('Please fill all the details.');
	}
   });
}
