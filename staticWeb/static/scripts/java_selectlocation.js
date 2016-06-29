	function home_loc_btn(button,id){
		var val_checker=button.innerHTML;
		if(val_checker=="Done"){
			$(id).slideUp(1000);
			button.innerHTML="Edit";
		}
		else{
			$(id).slideDown(1000);
			button.innerHTML="Done";
		}
	}