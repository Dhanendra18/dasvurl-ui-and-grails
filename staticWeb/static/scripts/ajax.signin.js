function submit_user_detail() {
    // var user_data = $("#id-user-detail").serialize();
    // console.log(user_data)
    var csrftoken = $.cookie('csrftoken');
    
    //email -----check email onblur
    var email = document.getElementById('id_email').value;
    
  //password of the user
    var password = document.getElementById('id_password').value;
    
    //name of new user
    var id_name = document.getElementById('id_name').value;
    //password of new user
    var password = document.getElementById('id_password_new').value;
    
    var user_data = {'csrfmiddlewaretoken': csrftoken,'email': email, 'password': password, 'id_name': id_name, 'id_password_new':id_password_new}
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
