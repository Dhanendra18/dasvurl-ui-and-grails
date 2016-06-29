/**
 * 
 */

    jQuery(document).ready(function($) {

        var count = 2;
        var total = 6;
        $(window).scroll(function(){
                if  ($(window).scrollTop() == $(document).height() - $(window).height()){
                   if (count > total){
                   	  	return false;
                   }else{
                   		loadArticle(count);
                   }
                   count++;
                }
        }); 

        function loadArticle(pageNumber){ 

                $('a#inifiniteLoader').show('fast');

                $.ajax({
                    url: "http://bragthemes.com/demo/pinstrap/wp-admin/admin-ajax.php",
                    type:'POST',
                    data: "action=infinite_scroll&page_no="+ pageNumber + '&loop_file=loop', 
                    success: function(html){
                        $('a#inifiniteLoader').hide('1000');
                        alert(html);
                        $("#container").append(html);    // This will be the div where our content will be loaded
                        $("a[rel='colorbox']").colorbox({
                                transition:'elastic', 
                                opacity:'0.7', 
                                maxHeight:'90%'
                        });
                    }
                });
            return false;
        }

    });
