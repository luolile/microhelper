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
	
        var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

        // Create a newDate() object
        var newDate = new Date();

        // Extract the current date from Date object
        newDate.setDate(newDate.getDate());

        // Output the day, date, month and year
        $('#date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
        
        // 右边时间
        setInterval( function() {

            // Create a newDate() object and extract the seconds of the current time on the visitor's
            var seconds = new Date().getSeconds();

            // Add a leading zero to seconds value
            $("#sec").html(( seconds < 10 ? "0":"" ) + seconds);
        },1000);

        setInterval( function() {

            // Create a newDate() object and extract the minutes of the current time on the visitor's
            var minutes = new Date().getMinutes();

            // Add a leading zero to the minutes value
            $("#min").html(( minutes < 10 ? "0":"" ) + minutes);
        },1000);

        setInterval( function() {

            // Create a newDate() object and extract the hours of the current time on the visitor's
            var hours = new Date().getHours();

            // Add a leading zero to the hours value
            $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
        }, 1000);
    })();
});


