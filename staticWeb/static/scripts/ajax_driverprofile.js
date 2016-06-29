function callDriver(driverid){
	
	$('#dvLoading').show();
	var datavalue={'driverid': driverid}
	$.ajax({
        url: 'DriverProfile',
        type: 'get',
        data: datavalue,
        
        success: function (html) {
        	var json = $.parseJSON(html);
        	
        	
        	var iframe = document.getElementById("id_iframe_driver_profile");
        	var ifdoc= iframe.contentDocument || iframe.contentWindow.document;
        	//String address 
        	
        	
        	ifdoc.getElementById('id_name').innerHTML=json.name;
        	ifdoc.getElementById('id_address').innerHTML=json.sector;
        	ifdoc.getElementById('id_driver_rating').innerHTML=json.driverRating;
        	ifdoc.getElementById('id_auto_rating').innerHTML=json.autoRating;
        	ifdoc.getElementById('id_age').innerHTML=json.age;
        	ifdoc.getElementById('id_optarea').innerHTML=json.address;
        	ifdoc.getElementById('id_qualification').innerHTML=json.qualification;
        	ifdoc.getElementById('id_driv_exp').innerHTML=json.driverExp;
        	ifdoc.getElementById('id_vehicle_age').innerHTML=json.vehicalAge;
        	ifdoc.getElementById('id_opt_hrs').innerHTML=json.optHrs;
        	ifdoc.getElementById('id_opt_end').innerHTML=json.operatingHourEndString;
        	ifdoc.getElementById('id_language_known').innerHTML=json.langKnown;
        	ifdoc.getElementById('id_vehicalNo').innerHTML=json.vehicalNo;
        	ifdoc.getElementById('id_img_driver').src=json.driverImg;
        	//driver doc img popups
        	var input1a=json.docImgsm1, input1b=json.docImglg1, input2a=json.docImgsm2, input2b=json.docImglg2, input3a=json.docImgsm3,
        		input3b=json.docImglg3, input4a=json.docImgsm4, input4b=json.docImglg4;
        	
        	
        	
        	/*ifdoc.getElementById('id_driimg_1').src=input1a;
        	ifdoc.getElementById('id_driimg_2').src=input2a;
        	ifdoc.getElementById('id_driimg_3').src=input3a;
        	ifdoc.getElementById('id_driimg_4').src=input4a;
        	*/
        	//driver img popups
        	var drivImgSrc1a=json.driImgsm1, drivImgSrc1b=json.driImglg1, drivImgSrc2a=json.driImgsm2, drivImgSrc2b=json.driImglg2, drivImgSrc3a=json.driImgsm3,
        		drivImgSrc3b=json.driImglg3, drivImgSrc4a=json.driImgsm4, drivImgSrc4b=json.driImglg4;
        	
        	
        	var docInner="<li><img class=\"img-responsive driverZoom\" width=\"500\" src="+input1a+" data-zoom-image="+input1b+" /></li>"+
            "<li><img class=\"img-responsive driverZoom\" width=\"500\" src="+input2a+"  data-zoom-image="+input2b+" /></li>"+
            "<li><img class=\"img-responsive driverZoom\" width=\"500\" src="+input3a+"  data-zoom-image="+input3b+" /></li>"+
            "<li><img class=\"img-responsive driverZoom\" width=\"500\" src="+input4a+"  data-zoom-image="+input4b+" /></li>";
        	
        	var imgInner="<li><img class=\"img-responsive driverZoom\" width=\"500\" src="+drivImgSrc1a+" data-zoom-image="+drivImgSrc1b+" /></li>"+
            "<li><img class=\"img-responsive driverZoom\" width=\"500\" src="+drivImgSrc2a+"  data-zoom-image="+drivImgSrc2b+" /></li>"+
            "<li><img class=\"img-responsive driverZoom\" width=\"500\" src="+input3a+"  data-zoom-image="+drivImgSrc3b+" /></li>"+
            "<li><img class=\"img-responsive driverZoom\" width=\"500\" src="+drivImgSrc4a+"  data-zoom-image="+drivImgSrc4b+" /></li>";
        	
        	
        	
        	var f=$('#id_iframe_driver_profile');
			 
				f.contents().find('#id_jcarousel_driver_doc').html(docInner);
				f.contents().find('#id_jcarousel_driver_img').html(imgInner);
				
				f.contents().find('#id_driver_timeline_sec1').attr("src",json.driverTimeline1);
				f.contents().find('#id_driver_timeline_sec2').attr("src",json.driverTimeline2);
				f.contents().find('#id_driver_timeline_sec3').attr("src",json.driverTimeline3);
				
        	/*var drivDoc=ifdoc.getElementById('id_jcarousel_driver_doc');
        	drivDoc.innerHTML=docInner;*/
        	
        	/*var drivimg=ifdoc.getElementById('id_jcarousel_driver_img');
        	drivimg.innerHTML=imgInner;*/
        	
        	/*ifdoc.getElementById('id_docimg_1').src=input1a;
        	ifdoc.getElementById('id_docimg_1').src=input1a;
        	ifdoc.getElementById('id_docimg_1').src=input1a;
        	ifdoc.getElementById('id_docimg_1').src=input1a;
        	*/
				
        	/*for the Itternery
        	 * ifdoc.getElementById('id_born_year').innerHTML=json.year.born;
        	ifdoc.getElementById('id_school_year').innerHTML=json.year.school;
        	ifdoc.getElementById('id_job_year').innerHTML=json.year.job;
        	ifdoc.getElementById('id_delhi_year').innerHTML=json.year.delhi;
        	ifdoc.getElementById('id_driving_year').innerHTML=json.year.driving;
        	ifdoc.getElementById('id_marriage_year').innerHTML=json.year.marriage;
        	ifdoc.getElementById('id_child_year').innerHTML=json.year.child;
        	ifdoc.getElementById('id_home_year').innerHTML=json.year.home;   */
        	
        	popme();
        	
        	ifdoc.getElementById('id_check_ifclick').value=2;
        	$('#dvLoading').hide();
        	
        },
		error: function (response) {
		    alert('This driver entry is not availabe at this time please try again.');
		    $('#dvLoading').hide();
		}
   });
}