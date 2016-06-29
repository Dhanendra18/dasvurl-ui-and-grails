function submit_user_detail() {
    // var user_data = $("#id-user-detail").serialize();
    // console.log(user_data)
	var csrftoken = $.cookie('csrftoken');
    
    $.ajax({
        url: 'http://test.blinkautos.in/early-signup/',
        type: 'GET',
        data: user_data,
        dataType: 'json',
        success: function (response) {
        	
        	document.getElementById('id_driver_id').value=  driver_id ; 
        	document.getElementById('id_link_to_profile').value= link_to_profile;
        	document.getElementById('id_rating').value = rating;
        	document.getElementById('id_base_location').value = base_location;
            
        },
	error: function (response) {
	    
	}
   });
}
