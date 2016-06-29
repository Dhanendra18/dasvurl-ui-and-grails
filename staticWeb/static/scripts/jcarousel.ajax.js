(function($) {
    $(function() {
        var jcarousel = $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });
       
        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
               
            	$(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
            	 var driverId = document.getElementById('id_driver_id').value;
                 var idata={"id": driverId};
            	$.ajax({
                    url: 'MeetDriverAPI',
                    type: 'get',
                    data: idata,
                    success: function (html) {
                    	 var json = $.parseJSON(html);
                    	// Append items
                    	$("#id_jcarousel_selectdriver").append(json.drivers);
                    	document.getElementById('id_driver_id').value=json.driverid;
                        
                        // Reload carousel
                        jcarousel
                            .jcarousel('reload');
                        
                    },
        	    	error: function (response) {
        	    		
        	    	}
               });
            	$(".jcarousel-control-next").addClass('inactive');
               
            })
            .jcarouselControl({
                target: '+=1'
            });
        /*$.ajax({
            url: 'MeetDriverAPI',
            type: 'get',
            data: idata,
            dataType: 'json',
            success: function (html) {
            	
            	var json=$.parseJSON(html);
            	alert(json);
            	// Append items
            	$("#id_jcarousel_selectdriver").html(json.drivers);
                
                // Reload carousel
                jcarousel
                    .jcarousel('reload');
                
                document.getElementById('id_driver_id').value=json.driverid;
                
            },
	    	error: function (response) {
	    		alert("error");
	    	}
       });*/
        
       /* var setup = function(data) {
            var html = '<ul>';

            $.each(data.items, function() {
                html += '<li><img src="' + this.src + '" alt="' + this.title + '"></li>';
            });

            html += '</ul>';

            // Append items
            jcarousel
                .html(html);

            // Reload carousel
            jcarousel
                .jcarousel('reload');
        };

        $.getJSON('data.json', setup);*/
    });
})(jQuery);
