/*for the day increment and decrement*/
function daysDecreaser(){
 var day=document.getElementById("id_purchase_days").value;
 if(day>7){
 day--;
 document.getElementById("id_purchase_days").value=day;
 }else {
	 document.getElementById("id_purchase_days").value=7;
	 alert("can not be less then 7");
 }
 calculations();
}
function daysIncreaser(){
	var day=document.getElementById("id_purchase_days").value;
	if(day>=7){
	day++;
	document.getElementById("id_purchase_days").value=day;
	}
	else {
		 document.getElementById("id_purchase_days").value=7;
		 alert("can not be less then 7");
	 }
	calculations();
}
function daysBit(key){
	document.getElementById("id_purchase_days").value=key;
	calculations();
}
/*end of days calculation*/


var iframe = document.getElementById("id_iframe_selectlocation");
var ifdoc= iframe.contentDocument || iframe.contentWindow.document;
var iframe1 = document.getElementById("id_iframe_clockWidged");
var ifdoc1= iframe1.contentDocument || iframe.contentWindow.document;

var count1=0,count2=0,count3=0;

function doneFunctionCaller(id,Passenger,addpas,donebtn){
	var value=ifdoc.getElementById(id);
	var donevalue=donebtn.innerHTML;
	/*for map hide and show*/
	if(donevalue.trim()=="SUBMIT DETAILS")
		$(value).slideUp(1000);
	else
		$(value).slideDown(1000);
	
	if(addpas==".addpas1"){
		count1++;
	}else if(addpas==".addpas2"){
		count2++;
	}
	else if(addpas==".addpas3"){
		count3++;
	}
	/*changing the state of done btn*/
	nextStep(Passenger,addpas,donebtn,count1,count2,count3);
	/* fare calculator*/
	calculations();
	/*calculating return time*/
	returnPickup();

	document.getElementById('passenger1_lat_home').value=ifdoc.getElementById("us2-lat").value;
	document.getElementById('passenger1_lng_home').value=ifdoc.getElementById("us2-lon").value;
	document.getElementById('passenger1_lat_office').value=ifdoc.getElementById("us3-lat").value;
	document.getElementById('passenger1_lng_office').value=ifdoc.getElementById("us3-lon").value;

	document.getElementById('passenger2_lat_home').value=ifdoc.getElementById("us4-lat").value;
	document.getElementById('passenger2_lng_home').value=ifdoc.getElementById("us4-lon").value;
	document.getElementById('passenger2_lat_office').value=ifdoc.getElementById("us5-lat").value;
	document.getElementById('passenger2_lng_office').value=ifdoc.getElementById("us5-lon").value;

	document.getElementById('passenger3_lat_home').value=ifdoc.getElementById("us6-lat").value;
	document.getElementById('passenger3_lng_home').value=ifdoc.getElementById("us6-lon").value;
	document.getElementById('passenger3_lat_office').value=ifdoc.getElementById("us7-lat").value;
	document.getElementById('passenger3_lng_office').value=ifdoc.getElementById("us7-lon").value;
	
	document.getElementById('passenger1_pickup_days').value=ifdoc1.getElementById('days').value;

	/*posting the fare i.e fare INR/trip */
	document.getElementById("id_fare").innerHTML=ifdoc.getElementById("id_output_totalfare").innerHTML;

}

/* return trip */
function returnPickup() {
	
    var completetime=ifdoc1.getElementById("id_return_pickup_time").value;
	/* d matrix distance and o matrix order*/
    var pass=ifdoc.getElementById("id_output_num").innerHTML;
    if(pass !="1"){
		var d=ifdoc.getElementById("id_output_d").innerHTML;
		var o=ifdoc.getElementById("id_output_o").innerHTML;
	}
	
    else {
    	var d=ifdoc.getElementById("id_output_d").innerHTML;
    	var o=ifdoc.getElementById("id_output_o").innerHTML;
    	    
    	    
    }
	timeCalculator(completetime,d,o,"return");
}

function valuesReturn(){
	
	var fare1 = document.getElementById('id_passenger1_fare_out').innerHTML;
	var fare2 = document.getElementById('id_passenger2_fare_out').innerHTML;
	var fare3 = document.getElementById('id_passenger3_fare_out').innerHTML;
	var distance1 = document.getElementById('id_passenger1_distance').innerHTML;
	var distance2 = document.getElementById('id_passenger2_distance').innerHTML;
	var distance3 = document.getElementById('id_passenger3_distance').innerHTML;
	var distancetotal = document.getElementById('id_distance').innerHTML;
	var totalamount = document.getElementById('id_total_amount').innerHTML;
	
	 document.getElementById('id_passenger1_fare_out').innerHTML= fare1*2;
	 document.getElementById('id_passenger2_fare_out').innerHTML =fare2*2;
	 document.getElementById('id_passenger3_fare_out').innerHTML =fare3*2;
	 document.getElementById('id_passenger1_distance').innerHTML =distance1*2;
	 document.getElementById('id_passenger2_distance').innerHTML =distance2*2;
	 document.getElementById('id_passenger3_distance').innerHTML =distance3*2;
	 document.getElementById('id_distance').innerHTML = distancetotal*2;
	  document.getElementById('id_total_amount').innerHTML = totalamount*2;
	
}
function orgValue(){
	var fare1 = document.getElementById('id_passenger1_fare_out').innerHTML;
	var fare2 = document.getElementById('id_passenger2_fare_out').innerHTML;
	var fare3 = document.getElementById('id_passenger3_fare_out').innerHTML;
	var distance1 = document.getElementById('id_passenger1_distance').innerHTML;
	var distance2 = document.getElementById('id_passenger2_distance').innerHTML;
	var distance3 = document.getElementById('id_passenger3_distance').innerHTML;
	var distancetotal = document.getElementById('id_distance').innerHTML;
	var totalamount = document.getElementById('id_total_amount').innerHTML;
	
	 document.getElementById('id_passenger1_fare_out').innerHTML= fare1/2;
	 document.getElementById('id_passenger2_fare_out').innerHTML =fare2/2;
	 document.getElementById('id_passenger3_fare_out').innerHTML =fare3/2;
	 document.getElementById('id_passenger1_distance').innerHTML =(distance1/2).toFixed(2);
	 document.getElementById('id_passenger2_distance').innerHTML =(distance2/2).toFixed(2);
	 document.getElementById('id_passenger3_distance').innerHTML =(distance3/2).toFixed(2);
	 document.getElementById('id_distance').innerHTML = (distancetotal/2).toFixed(2);
	 document.getElementById('id_total_amount').innerHTML = totalamount/2;
}


/* main calculations*/
function calculations(){
	var fare1 =ifdoc.getElementById("id_output_fare1").innerHTML;
	var fare2 =ifdoc.getElementById("id_output_fare2").innerHTML;
	var fare3 =ifdoc.getElementById("id_output_fare3").innerHTML;
	var distance1=ifdoc.getElementById("id_output_distance1").innerHTML;
	var distance2=ifdoc.getElementById("id_output_distance2").innerHTML;
	var distance3=ifdoc.getElementById("id_output_distance3").innerHTML;
	var numdays = document.getElementById('id_purchase_days').value;
	
	fare1= parseFloat(fare1);
	fare2= parseFloat(fare2);
	fare3= parseFloat(fare3);
	
	fare1=(numdays * fare1).toFixed(2);
	fare2=(numdays * fare2).toFixed(2);
	fare3=(numdays * fare3).toFixed(2);
	
	
	distance1=parseFloat(distance1);
	distance2=parseFloat(distance2);
	distance3=parseFloat(distance3);
	
	if(fare1 != "NaN"){
	document.getElementById("id_passenger1_fare_out").innerHTML=Math.round(fare1);
	document.getElementById('id_passenger1_distance').innerHTML=distance1;
	}
	
	var totalfare=0.00;
	totalfare=fare1;
	var totaldistance=distance1;
	if(fare2!="NaN"){
		totalfare=Math.round(fare1*100)+Math.round(fare2*100);
		totalfare=totalfare/100;
		totaldistance=Math.round(totaldistance*100)+Math.round(distance2*100);
		totaldistance=totaldistance/100;
		
		document.getElementById("id_passenger2_distance").innerHTML=distance2;
		document.getElementById("id_passenger2_fare_out").innerHTML=Math.round(fare2);
	}
	if(fare3!="NaN"){
		totalfare=Math.round(totalfare*100)+Math.round(fare3*100);
		totalfare=totalfare/100;
		totaldistance=Math.round(totaldistance*100)+Math.round(distance3*100);
		totaldistance=totaldistance/100;
	document.getElementById("id_passenger3_distance").innerHTML=distance3;
	document.getElementById("id_passenger3_fare_out").innerHTML=Math.round(fare3);
	}
	
	
	document.getElementById('id_total_amount').innerHTML=Math.round(totalfare);
	document.getElementById('id_distance').innerHTML=totaldistance;
	
	
	var completetime=ifdoc1.getElementById("id_drop_time").value;
	
	/* d matrix distance and o matrix order*/
	var d=ifdoc.getElementById("id_output_d").innerHTML;
	var o=ifdoc.getElementById("id_output_o").innerHTML;
	timeCalculator(completetime,d,o,"onward");
}

function timeCalculator(completetime,d,o,trip){
	$('.illustrationhide').slideDown(200);
	var pk_wt=10;
	var dp_wt=2;
	var aspd=10;
	var pass=ifdoc.getElementById("id_output_num").innerHTML;
	//console.log("value of d without split is "+d);
	if(pass!="1"){
		o=o.split(";");
		d=d.split(",");
		var pko=o[0].split(",");
		var dpo=o[1].split(",");
		//console.log("value of d is "+d);
	}
	var pkt=new Array();
	var dpt=new Array();
	var c_pk_wt=1;
	var c_dp_wt=0;
	var ampm="AM";
	
	var time=completetime.split(" ");
	var hr_min=time[0].split(":");
	var min = hr_min[0]*60;
		min=min + parseInt(hr_min[1],10);
	if(time[1]=="PM"){
		min=min+720;}
	document.getElementById('id_passengers').innerHTML=pass;
	if(pass==1){
		var traveltime=((pk_wt)+(d/aspd)*60);
		pkt[0]=min-traveltime;
		
		/* estimation of the time in standerd form*/
		dpt[0]=min;
		
		var hr=Math.floor(pkt[0]/60);
		if(hr>12){
			hr=hr-12;
			ampm="PM";
		}
		var minutes=pkt[0]%60;
		minutes=Math.round(minutes);
		if(minutes==0||minutes==1||minutes==2||minutes==3||minutes==4||minutes==5)
			minutes=minutes+"0";
		
		var name=document.getElementById('id_passenger1_name').value;
		var data=name+"<br>";
		var time=hr+":"+minutes+" "+ampm;
		if(trip=="onward"){
			document.getElementById('id_output_samay_6').innerHTML=completetime;
			document.getElementById('id_output_samay_1').innerHTML=time;
			document.getElementById('id_output_details_1').innerHTML=data;
			document.getElementById('id_output_details_6').innerHTML=data;
		}else{
			document.getElementById('id_output_return_samay_6').innerHTML=completetime;
			document.getElementById('id_output_return_samay_1').innerHTML=time;
			document.getElementById('id_output_return_details_1').innerHTML=data;
			document.getElementById('id_output_return_details_6').innerHTML=data;
		}
	}
	
	else if(pass=="2"){
		$("._2").removeClass("hiddenclass");
		var check=0;
		for(var i=0;i<2;i++){
			if(pko[0]==0){
				c_pk_wt=2;
			}
			if(dpo[1]==0){
				c_dp_wt=1;
			}
			
			var waitingtime=(c_pk_wt*pk_wt)+(c_dp_wt*dp_wt);
			pkt[i]=min-(waitingtime+(((d[i])/aspd)*60));
			
			if(dpo[i]==0){
				dpt[i]=min;
				check=1;
			}else if(check==1){
				dpt[i]=min+(dp_wt+(((d[2])/aspd)*60));
	 		}else if(check==0){
				dpt[i]=min-(dp_wt+(((d[2])/aspd)*60));
			}
			
			timeConverter(pass,pkt,"p",i, pko,dpo,trip);
			timeConverter(pass,dpt,"d",i, pko,dpo,trip);
		}/*end of for*/ 
	}/* end of if*/
	
	else if(pass=="3"){
		console.log("pass 3");
		$("._3").removeClass("hiddenclass");
		var k=3;
		//var check=0;
		var position=0;
		console.log("value of d at pass 3 is "+d);
		for(var j=0;j<3;j++){
			if(dpo[j]==0){
				position=j;
				break;
			}
		}
		for(var i=0;i<3;i++){
			
			c_pk_wt=k;/*k is defined 3 when the loop runs k decreases by 1*/
			k--;
			c_dp_wt=position;
				
			var waitingtime=(c_pk_wt*pk_wt)+(c_dp_wt*dp_wt);
			pkt[i]=min-(waitingtime+(((d[i])/aspd)*60));
			//console.log("dpo is "+dpo);
			//console.log(waitingtime);
			//console.log("position is "+position);
			if(dpo[i]<position&&i!=2){
				j=i+3;
				dpt[i]=min-((dp_wt*i)+(((d[j])/aspd)*60));
				//console.log("dpt at value "+i+" is= "+dpt[i]);
			} else if(dpo[i]>position){
				j=i+3;
				dpt[i]=min+((dp_wt*i)+(((d[j])/aspd)*60));
				//console.log("wt is "+dp_wt+" and d[j] is "+d[j]);
				//console.log("dpt at value smaller positon where i is "+i+" is= "+dpt[i]);
			}else if(dpo[i]==position){
				dpt[i]=min;
				console.log("dpt at value equal position where i is "+i+" is= "+dpt[i]);
			}
			//d matrix is correct
			//console.log("value of d is "+d);
			console.log("drop time is "+dpt);
			timeConverter(pass,pkt,"p",i, pko,dpo,trip);
			timeConverter(pass,dpt,"d",i, pko,dpo,trip);
		}/*end for*/
	}/*end if*/
}

function timeConverter(pass,t,status,i,pko,dpo,trip){

	//var maintime;
	//var premin;
	var ampm="AM";
	var hr=Math.floor(t[i]/60);
	if(hr>12){
		hr=hr-12;
		ampm="PM";
	}
	var minutes=t[i]%60;
	minutes=Math.round(minutes);
	if(minutes==0||minutes==1||minutes==2||minutes==3||minutes==4||minutes==5||minutes==6||minutes==7||minutes==8||minutes==9)
		minutes="0"+minutes;
	
		
	/*not checked yet, it is for populating the value at correct position */
	
	/*if(trip=="return"){
		
		for(var j=0;j<3;j++){
			if(status=="p"){
				if(pko[j]==i){
					j++;
					var name=document.getElementById('id_passenger'+j+'_name').value;
					var data=name+"<br>";
					var time=hr+":"+minutes+" "+ampm;
					
					document.getElementById('id_output_return_samay_'+j).innerHTML=time;
					document.getElementById('id_output_return_details_'+j).innerHTML=data;
					break;
				}
			}
			else if(status=="d"){
				if(dpo[j]==i){
					j++;
					var name=document.getElementById('id_passenger'+j+'_name').value;
					if(pass==2){
						j=j+4;}
					else j=j+3;
					var data=name+"<br>";
					var time=hr+":"+minutes+" "+ampm;
					console.log("dpo is "+dpo);
					document.getElementById('id_output_return_samay_'+j).innerHTML=time;
					document.getElementById('id_output_return_details_'+j).innerHTML=data;
					break;
				}
			}
		}
	}
	
	else{*/
		for(var j=0;j<3;j++){
			if(status=="p"){
				if(pko[j]==i){
					j++;
					var name=document.getElementById('id_passenger'+j+'_name').value;
					var data=name+"<br>";
					var time=hr+":"+minutes+" "+ampm;
					document.getElementById('id_output_samay_'+j).innerHTML=time;
					document.getElementById('id_output_details_'+j).innerHTML=data;
					break;
				}
			}
			else if(status=="d"){
				if(dpo[j]==i){
					j++;
					var name=document.getElementById('id_passenger'+j+'_name').value;
					if(pass==2){
						j=j+4;}
					else j=j+3;
					var data=name+"<br>";
					var time=hr+":"+minutes+" "+ampm;
					//console.log("time is "+time+" hr is "+hr+" min is "+minutes+" ampm is "+ampm);
					document.getElementById('id_output_samay_'+j).innerHTML=time;
					document.getElementById('id_output_details_'+j).innerHTML=data;
					break;
				}
			}
		}
	/*}*/
}