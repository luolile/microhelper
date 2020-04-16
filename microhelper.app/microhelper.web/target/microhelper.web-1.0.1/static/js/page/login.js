$(function() {

	var $Obg = $("#lunBoBox > div"), $But = $("#LunBoBut > li"), className = 'KMSPrefix_slides_focus', index = 0, Time;

	$Obg.each(function(i) {
		$(this).css({
			zIndex : i
		});
	});

	$But.click(function() {
		index = $(this).index();

		showIMG(index);

	});

	$But.hover(function() {
		clearInterval(Time);
	}, function() {
		autoChangeBackground();
	});

	function showIMG(index) {
		if ($But.eq(index).attr('class') != className) {
			$But.eq(index).addClass(className).siblings()
					.removeClass(className);
			$Obg.eq(index).animate({
				opacity : 0
			}, 1000).siblings().animate({
				opacity : 1
			}, 1000);
		}
	}

	function autoChangeBackground() {
		Time = setInterval(function() {
			if (index >= $But.length) {
				index = 0;
			}
			showIMG(index);
			index++;
		}, 3000);
	}

	autoChangeBackground();

	function controlInputStyle() {
		$('#usercode').focus(function() {
			if ($(this).val() == this.defaultValue) {
				$(this).val('');

			}
		});

		$('#usercode').blur(function() {
			if ($(this).val() == '') {
				$(this).val(this.defaultValue);
			}
		});

		$('#password01').focus(function() {
			$(this).hide();
			$('#password').show().focus();
		});

		$('#password').blur(function() {
			if ($(this).val() == '') {
				$("#password01").show();
			}
		});

	}

	controlInputStyle();
})