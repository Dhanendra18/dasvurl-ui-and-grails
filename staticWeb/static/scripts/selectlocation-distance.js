var atod=0.0;
var x=new Array();
var y=new Array();
var z=new Array();

var plat=new Array();
var dlat=new Array();
var plon=new Array();
var dlon=new Array();
var s=new Array();

var fr1=10,fr2=8,fr3=7;

/*pickup and drop points*/
var pk1,pk2,pk3,dp1,dp2,dp3;
function findDistance(num){
	var totalfare;
	/*get the locations from points on map*/
	var home1lat = document.getElementById("us2-lat").value;
	var home1lon = document.getElementById("us2-lon").value;
	var office1lat = document.getElementById("us3-lat").value;
	var office1lon = document.getElementById("us3-lon").value;
	
	var home2lat = document.getElementById("us4-lat").value;
	var home2lon = document.getElementById("us4-lon").value;
	var office2lat = document.getElementById("us5-lat").value;
	var office2lon = document.getElementById("us5-lon").value;
	
	var home3lat = document.getElementById("us6-lat").value;
	var home3lon = document.getElementById("us6-lon").value;
	var office3lat = document.getElementById("us7-lat").value;
	var office3lon = document.getElementById("us7-lon").value;
	
	/*making array of latitude and longitude of home loc*/
	plon=[home1lon,home2lon,home3lon];
	plat=[home1lat,home2lat,home3lat];
	/*making array of latitude and longitude of office loc*/
	dlat=[office1lat,office2lat,office3lat];
	dlon=[office1lon,office2lon,office3lon];
	
	/*storing the distance from home to office*/
	var distance1=aTob(home1lat,home1lon,office1lat,office1lon);
	var distance2=aTob(home2lat,home2lon,office2lat,office2lon);
	var distance3=aTob(home3lat,home3lon,office3lat,office3lon);
	
	document.getElementById("id_output_distance1").innerHTML=distance1;
	document.getElementById("id_output_distance2").innerHTML=distance2;
	document.getElementById("id_output_distance3").innerHTML=distance3;
	
	/*for first passenger*/
	if(num == 1){
		atod=aTob(home1lat,home1lon,office1lat,office1lon);
		//console.log("passenger 1 distance is "+atod);
		
		document.getElementById('id_output_o').innerHTML=0;
		document.getElementById("id_output_num").innerHTML=num;
		document.getElementById('id_output_d').innerHTML=atod;
		
		var lat=document.getElementById("us2-lat").value;
		var lng=document.getElementById("us2-lon").value;
		var lat1=document.getElementById("us3-lat").value;
		var lng1=document.getElementById("us3-lon").value;
		
		var latlng = new google.maps.LatLng(lat, lng);
		var latlng1 = new google.maps.LatLng(lat1, lng1);
		var points=new Array();
		points.push(latlng);
		points.push(latlng1);
		document.getElementById('location1').innerHTML=points;
		calcRoute();
		hopecaller();
	}/*end of if num=1*/
	
	else if(num == 2){
		var x=new Array();
		for(var i =0;i<2;i++){
			x[i]=new Array();
			
			for(var j =0;j<2;j++){
				x[i][j]=aTob(plat[i], plon[i], dlat[j], dlon[j]);
				//console.log("x "+x[i][j]);
				/*y[i][j]=aTob(plat[i], plon[i], plat[j], plon[j]);
				console.log("y "+y[i][j]);
				z[i][j]=aTob(dlat[i], dlon[i], dlat[j], dlon[j]);
				console.log("z "+z[i][j]);*/
				
				/*minimum finding function*/
				if(i==0&&j==0){
					var min=x[0][0];
					dp1=0;
					pk2=0;
				}
					//console.log(x[i][j]);
					
				if(min>x[i][j]){
						min=x[i][j];
						dp1=j;
						pk2=i;
						
						//console.log(min+" x where i is "+i+" where j is "+j);
				}
				//console.log("min bw 2 passenger is "+min);
			}
		}
		if(pk2==0){
			pk1=1;
		}
		else{
			pk1=0;
		}
		if(dp1==0){
			dp2=1;
		}
		else{
			dp2=0;
		}
		
		
		var lat=plat[pk1];
		var lon=plon[pk1];
		var australia = new google.maps.LatLng(lat, lon);
		var points=new Array();
		points[0]=australia;
		lat=dlat[dp2];
		lon=dlon[dp2];
		australia = new google.maps.LatLng(lat, lon);
		points[1]=australia;
		var lat=plat[pk2];
		var lon=plon[pk2];
		var australia = new google.maps.LatLng(lat, lon);
		points[2]=australia;
		lat=dlat[dp1];
		lon=dlon[dp1];
		australia = new google.maps.LatLng(lat, lon);
		points[3]=australia;
		document.getElementById('location1').innerHTML=points;
		calcRoute();
		
		/*pickup and drop positions*/ 
		s[0]=pk1;s[1]=pk2;s[2]=dp1;s[3]=dp2;
		//console.log("pk1 s0 "+pk1+" pk1 s1 "+pk2+" dp1 s2 "+dp1+" dp2 s3 "+dp2);		
		//var fare=Array();
		//fare=
		fareEstimationFor2(s);
		
		document.getElementById("id_output_num").innerHTML=num;
		
		
		
	}/*end of if num=2*/
	
	/* for the third passenger*/
	else if(num == 3){
		var x=new Array();
		for(var i =0;i<3;i++){
			x[i]=new Array();
			for(var j =0;j<3;j++){
				x[i][j]=aTob(plat[i], plon[i], dlat[j], dlon[j]);
				/*console.log("x "+x[i][j]);*/
				
				/*minimum finding function*/
				if(i==0&&j==0){
					var min=x[0][0];
					dp1=0;
					pk3=0;
				}
					//console.log(x[i][j]);
					
				if(min>x[i][j]){
						min=x[i][j];
						dp1=j;
						pk3=i;
						
						//console.log(min+" x where i is "+i+" where j is "+j);
				}
				//console.log("min is "+min);
		
			}/*end of for j*/
		}/*end of for i*/
	
		if(pk3==0){
			pk1=1;
			pk2=2;
		}
		else if(pk3==1){
			pk1=0;
			pk2=2;
		}
		else if(pk3==2){
			pk1=0;
			pk2=1;
		}
		
		if(aTob(plat[pk3], plon[pk3], dlat[pk1], dlon[pk1])<=aTob(plat[pk3], plon[pk3], dlat[pk2], dlon[pk2])){
			var a=pk1;
			pk1=pk2;
			pk2=a;
		}
		
		if(dp1==0){
			dp2=1;
			dp3=2;
		}
		else if(dp1==1){
			dp2=0;
			dp3=2;
		}
		else if(dp1==2){
			dp2=1;
			dp3=0;
		}
		if(aTob(plat[dp1], plon[dp1], dlat[dp2], dlon[dp2])>=aTob(plat[dp1], plon[dp1], dlat[dp3], dlon[dp3])){
			var a=dp2;
			dp2=dp3;
			dp3=a;
		}
		var lat=plat[pk1];
		var lon=plon[pk1];
		var australia = new google.maps.LatLng(lat, lon);
		var points=new Array();
		points[0]=australia;
		lat=dlat[dp3];
		lon=dlon[dp3];
		australia = new google.maps.LatLng(lat, lon);
		points[1]=australia;
		lat=plat[pk2];
		lon=plon[pk2];
		australia = new google.maps.LatLng(lat, lon);
		points[2]=australia;
		lat=plat[pk3];
		lon=plon[pk3];
		australia = new google.maps.LatLng(lat, lon);
		points[3]=australia;
		lat=dlat[dp1];
		lon=dlon[dp1];
		australia = new google.maps.LatLng(lat, lon);
		points[4]=australia;
		lat=dlat[dp2];
		lon=dlon[dp2];
		australia = new google.maps.LatLng(lat, lon);
		points[5]=australia;
		document.getElementById('location1').innerHTML=points;
		calcRoute();
		//console.log("first pickup "+pk1+" second pickup "+pk2+" last pickup "+pk3);
		//console.log("first drop "+dp1+" second drop "+dp2+" last drop "+dp3);
		s[0]=pk1;s[1]=pk2;s[2]=pk3;s[3]=dp1;s[4]=dp2;s[5]=dp3;
		
		fareEstimation(s);
		
		document.getElementById("id_output_num").innerHTML=num;
		
		/*document.getElementById("id_fare").innerHtml=totalfare;*/
	}/*end of if num=3*/
}

/* fare estimation for 2 passengers */
function fareEstimationFor2(s){
	setTimeout(function(){calculator(s)}, 500);
}

function calculator(s){
		var a=document.getElementById("id_calc_distance1").value;
	var b=document.getElementById("id_calc_distance2").value;
	var c=document.getElementById("id_calc_distance3").value;
	console.log(a+" a value "+b+" b "+c);
	
	var fare=new Array();
  	
	for(var i=0;i<2;i++){
		var sum=fr2*b;
		if(s[0]==i){
		sum=sum +(fr1*a);
			}
		if(s[3]==i){
			sum=sum +(fr1*c);
			}
		fare[i]=Math.round(sum*100)/100;
		var sim=a+","+b+","+c;
		document.getElementById('id_output_d').innerHTML=sim;
	}
	
	var totalfare=0.00;
	var sn=0.00;
	for (var i = 0; i < 2; i++)
	{
		//console.log("fare i "+fare[i]);
		var sum = fare[i];
		sum = parseFloat(sum);
		//console.log(sum);
		sn =sn + sum;
		//console.log(sn);
	}
	totalfare=Math.round(sn*100)/100;
	//console.log(totalfare);
	var a=1;b=0;
	for(var i=0;i<2;i++){
		if(s[0]==0){
			a=0;
			b=1;
		}
	}
	var sim=s[0]+","+s[1]+";"+s[2]+","+s[3];
	/*storing order array*/
	document.getElementById("id_output_o").innerHTML=sim;
	document.getElementById("id_output_totalfare").innerHTML=totalfare;
	document.getElementById("id_output_fare1").innerHTML=fare[a];
	document.getElementById("id_output_fare2").innerHTML=fare[b];
	console.log("fare is "+fare);
}
function hopecaller(){
	setTimeout(fareEstimation1, 500);
}
function fareEstimation1(){
	var a=document.getElementById("id_calc_distance1").value;
	console.log(a);
	var totalfare=(fr1*a).toFixed(2);
	document.getElementById("id_output_totalfare").innerHTML=totalfare;
	document.getElementById("id_output_fare1").innerHTML=totalfare;
	
}

function fareEstimation(s){
	setTimeout(function(){calculator3(s)}, 500);
}
function calculator3(s){
	var a=document.getElementById("id_calc_distance1").value;
	var b=document.getElementById("id_calc_distance2").value;
	var c=document.getElementById("id_calc_distance3").value;
	var d=document.getElementById("id_calc_distance4").value;
	var e=document.getElementById("id_calc_distance5").value;
	
	var fare=new Array();
	
	for(var i=0;i<3;i++){
		var sum=0.00;
		if(s[0]==i){
			sum=fr1*a;
			}
		
		if(s[1]==i){
			sum=sum+(fr2*b);
			}
		
		sum=sum+(fr3*c);
		
		if(s[4]==i){
			sum=sum+(fr2*d);
			}
		if(s[5]==i){
			sum=sum+(fr1*e);
			}
		fare[i]=Math.round(sum*100)/100;
		//console.log("fare of second passenger "+fare[i]);
		var sim=a+","+b+","+c+","+d+","+e;
		document.getElementById('id_output_d').innerHTML=sim;
	}
	
	var sn=0.00;
	for (var i = 0; i < 3; i++)
	{
		var sum = fare[i];
		sum = parseFloat(sum);
		//console.log(sum);
		sn =sn + sum;
		//console.log(sn);
	}
	var totalfare=Math.round(sn*100)/100;
	//console.log(totalfare);
	
	/*console.log("fare of first passener "+fare[0]+" " +
			"which is "+pk1+" fare of seccond passenger "+fare[1]+" which is "+pk2+" fare of third passenger "+fare[2]+" " +
					"which is "+pk3+" and totle fare is "+totalfare);*/
	
	/*storing order array*/
	var sim=s[0]+","+s[1]+","+s[2]+";"+s[3]+","+s[4]+","+s[5];	
	document.getElementById("id_output_o").innerHTML=sim;
	
	document.getElementById("id_output_totalfare").innerHTML=totalfare;/* send data to main page(selectloc)*/
	document.getElementById("id_output_fare1").innerHTML=fare[0];
	document.getElementById("id_output_fare2").innerHTML=fare[1];
	document.getElementById("id_output_fare3").innerHTML=fare[2];
}

function aTob(lat1,lon1,lat2,lon2){
	var p1 = new google.maps.LatLng(lat1,lon1);
	var p2 = new google.maps.LatLng(lat2,lon2);
	var value =calcDistance(p1, p2);
	return value;
}

function calcDistance(p1, p2){
  return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
}
