$(document).ready(function(){
	/* --------------------------------------------------------
	Sidebar + Menu
    -----------------------------------------------------------*/
    (function(){
        /* Menu Toggle */
        $('#menu-toggle').click(function(e){
//            console.log("aaa");
            //$('html').toggleClass('menu-active');
            //$('#sidebar').toggleClass('toggled');
        	if ($('html').hasClass('menu-active')) {
        		$('html').removeClass('menu-active');
        	} else {
        		$('html').addClass('menu-active');
        	}
        	if ($('#sidebar').hasClass('toggled')) {
        		$('#sidebar').removeClass('toggled');
        	} else {
        		$('#sidebar').addClass('toggled');
        	}
            e.preventDefault();
            //$('#content').toggleClass('m-0');
        });
         
        /* Active Menu */
        $('#sidebar .menu-item').hover(function(){
            $(this).closest('.dropdown').addClass('hovered');
        }, function(){
            $(this).closest('.dropdown').removeClass('hovered');
        });

        /* Prevent */
        $('.side-menu .dropdown > a').click(function(e){
            e.preventDefault();
        });
	

    })();
});


