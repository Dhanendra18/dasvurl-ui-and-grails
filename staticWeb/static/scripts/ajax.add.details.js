//function for first passenger
function submit_user_detail() {
    // var user_data = $("#id-user-detail").serialize();
    // console.log(user_data)

	iframe=document.getElementById('id_iframe_selectlocation');
	ifdoc= iframe.contentDocument|| iframe.contentWindow.document;
	
	iframe1=document.getElementById('id_iframe_clockWidged');
	ifdoc1=iframe1.contentDocument || iframe1.contentWindow.document;
	
	var csrftoken = $.cookie('csrftoken');
	
	var passenger_name = document.getElementById('id_passenger1_name').value;
	var passenger_email = document.getElementById('id_passenger_email').value;
	var passenger_phone = document.getElementById('id_passenger_phone').value;
	var passenger_age = document.getElementById('id_passenger_age').value;
	/*mark it is a name here*/
	var passenger_gender= document.getElementsByName("gender").value;
	
	var home_location = ifdoc.getElementById('us2-address').value;/*lat long*/
	var office_location = ifdoc.getElementById('us3-address').value;/*lat long*/
	
	var pickup_days = ifdoc1.getElementById('pickup_days').value;
	var pickup_time = document.getElementById('id_pickup_time').value;/*pickup time correction*/
	var drop_time = ifdoc1.getElementById('id_drop_time').value;
	var return_pickup_time = ifdoc1.getElementById('id_return_pickup_time').value;
	/*mark it is a name here*/
	var number_days = ifdoc1.getElementByName('days').values;
	var cust_days=" ";
	
	if(number_days=="custom"){
		cust_days=ifdoc1.getElementByName('pickup_days').values;
	}
	
	/* for the first passenger */
	var passenger1_name = document.getElementById('id_passenger2_name').value;
	var passenger1_email = document.getElementById('id_passenger1_email').value;
	var passenger1_phone = document.getElementById('id_passenger1_phone').value;
	var passenger1_age = document.getElementById('id_passenger1_age').value;
	var passenger1_gender= document.getElementsByName("gender1").value;
	
	var home_location2 = ifdoc.getElementById('us4-address').value;
	var office_location2 = ifdoc.getElementById('us5-address').value;
	
	
	var pickup_time1 = ifdoc1.getElementById('id_pickup_time').value;
	var drop_time1 = ifdoc1.getElementById('id_drop_time').value;
	var return_pickup_time1 = ifdoc1.getElementById('id_return_pickup_time').value;
					
				    
    /* this is for the third passenger*/
    var passenger2_name = document.getElementById('id_passenger3_name').value;
    var passenger2_email = document.getElementById('id_passenger2_email').value;
    var passenger2_phone = document.getElementById('id_passenger2_phone').value;
    var passenger2_age = document.getElementById('id_passenger2_age').value;
    var passenger2_gender= document.getElementsByName("gender").value;
    

    var home_location2 = ifdoc.getElementById('us6-address').value;
    var office_location2 = ifdoc.getElementById('us7-address').value;
    
    var pickup_time2 = ifdoc1.getElementById('id_pickup_time').value;
    var drop_time2 = ifdoc1.getElementById('id_drop_time').value;
    var return_pickup_time2 = ifdoc1.getElementById('id_return_pickup_time').value;

    /*trip over all values*/
    var fare1="12";
    var fare2="11";
    var fare3='11';
    var inr_onward="11";
    var inr_return="11";
    var total_fare='545';
    var distance_pas1='545';
    var distance_pas2='5454';
    var distance_pas3='87';
    var order_onward="0,1,2";
    var order_return="0,1,2";
    var start_day=document.getElementById('id="id_start_day"').value;
    var purchase_days=document.getElementById('id_purchase_days').value;
    
				    
    /*json object*/
    var user_data = {'csrfmiddlewaretoken': csrftoken, 'passenger_name': passenger_name, 'passenger_email': passenger_email, 'passenger_phone': passenger_phone,
    		'passenger_age': passenger_age, 'passenger_gender': passenger_gender, 'home_location': home_location, 'office_location': office_location,
    		'pickup_days': pickup_days,'pickup_time': pickup_time,'drop_time': drop_time,'return_pickup_time': return_pickup_time,'number_days':number_days,
    		'cust_days':cust_days, 
    		'passenger1_name': passenger1_name, 'passenger1_email': passenger1_email, 'passenger1_phone': passenger1_phone,
    		'passenger1_age': passenger1_age, 'passenger1_gender': passenger1_gender, 'home_location1': home_location1, 'office_location1': office_location1,
    		'pickup_time1': pickup_time1,'drop_time1': drop_time1,'return_pickup_time1': return_pickup_time1,
    		'passenger2_name': passenger2_name, 'passenger2_email': passenger2_email, 'passenger2_phone': passenger2_phone,
    		'passenger2_age': passenger2_age, 'passenger2_gender': passenger2_gender, 'home_location2': home_location2, 'office_location2': office_location2,
    		'pickup_time2': pickup_time2,'drop_time2': drop_time2,'return_pickup_time2': return_pickup_time2,
    		'fare1':fare1,
    		'fare2':fare2,'fare2':fare3,'total_fare':total_fare,'distance_pas1':distance_pas1,'distance_pas2':distance_pas2,'distance_pas3':distance_pas3,
    		'order_onward':order_onward,'order_return':order_return
    		};
    $.ajax({
        url: 'http://test.blinkautos.in/early-signup/',
        type: 'POST',
        data: user_data,
        dataType: 'json',
        success: function (response) {
            
        	
        },
	error: function (response) {
	    alert('Please fill all the details.');
	}
   });
}


//function for second passenger
function submit_second_user_detail() {
    // var user_data = $("#id-user-detail").serialize();
    // console.log(user_data)
	
	
	
	
    var csrftoken = $.cookie('csrftoken');
    
    
    
    
    var user_data = {'csrfmiddlewaretoken': csrftoken, 'passenger1_name': passenger1_name, 'passenger1_email': passenger1_email, 'passenger1_phone': passenger1_phone,
    		'passenger1_age': passenger1_age, 'passenger1_gender': passenger1_gender, 'home_location': home_location, 'office_location': office_location,
    		'pickup_time': pickup_time,'drop_time': drop_time,'return_pickup_time': return_pickup_time };
    $.ajax({
        url: 'http://test.blinkautos.in/early-signup/',
        type: 'POST',
        data: user_data,
        dataType: 'json',
        success: function (response) {
            
        	
        },
	error: function (response) {
	    alert('Please fill all the details.');
	}
   });
}

//function for third passenger
function submit_third_user_detail() {
    // var user_data = $("#id-user-detail").serialize();
    // console.log(user_data)
	
	
	
	
	
    var csrftoken = $.cookie('csrftoken');
    
        
    
    var user_data = {'csrfmiddlewaretoken': csrftoken  };
    $.ajax({
        url: 'http://test.blinkautos.in/early-signup/',
        type: 'POST',
        data: user_data,
        dataType: 'json',
        success: function (response) {
            
        	
        	//in response i need the distance of 1st pass, pickup time and pickup location
        	document.getElementById('id_passenger1_distance').value="?";
        	document.getElementById('id_passenger1_time').value="?";
        	document.getElementById('id_passenger1_location').value="?";
        	
        },
	error: function (response) {
	    alert('Please fill all the details.');
	}
   });
}

function submit_final_trip_detail(){
	
	
	var trip_type = document.getElementById('id_trip_type').value;
	var start_date = document.getElementById('id_start_date').value;
	 $.ajax({
	        url: 'http://test.blinkautos.in/early-signup/',
	        type: 'POST',
	        data: user_data,
	        dataType: 'json',
	        success: function (response) {
	        	
	        	
	        
	        	
	        	
	        
	            
		   
	        },
		error: function (response) {
		    alert('Please fill all the details.');
		}
	   });
	
	
}