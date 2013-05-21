var qcbchoff = 0, qcbcount = 0;

jQuery(function($){
	if ( $('body').hasClass('front') ) {
		if (Modernizr.video.h264 == "") {
			// h264 is not supported
			console.log('<video /> does not seem to be supported by this browser');
		} else {
			console.log('<video /> IS supported by this browser?');
			if ( $('#hmovie').size() == 0 ) {
				$('#header').prepend('<div id="hmovie" />');
			}
			$('#hmovie').hide().empty();
			$('<video />').attr({
				width: 1920,
				height: 500,
				src: "/sites/all/themes/qcbc/attractor-h264.mp4?r=051013",
				autoplay: true,
				loop: true
			}).appendTo('#hmovie').parent().show();
		}
		
		var hdemos = $('.hdemos .views-row');
		qcbcount = hdemos.size();
		if ( qcbcount > 4 ) {
			$('.hdemos .view-content').wrapInner('<div class="hslider" />');
			var siz = qcbcount * 430;
			$('.hslider').css('width',siz);
			$('.hdemos').append('<div class="harr"><a href="#p" class="off" /><a href="#n" class="n" /></div>');
			$('.hdemos .harr a').click(function() {
				if ( $(this).hasClass('off') == false ) {
					$(this).siblings('.off').removeClass('off');
					if ( $(this).hasClass('n') ) {
						qcbchoff += 4;
						if ( qcbchoff + 4 > qcbcount ) {
							$(this).addClass('off');
						}
					} else { //p
						qcbchoff -= 4;
						if ( qcbchoff == 0 ) {
							$(this).addClass('off');
						}
					}
					
					$('.hslider').animate({
						left: '-'+ ( qcbchoff * 430 ) + 'px'
					}, 500);
				}
				return false;
			});
		}
	}
	
	if ( $('body').hasClass('node-type-demo') ) {
		// Storing the Sidecar instance using jQuery's $.data() method
		$.data(document.body, 'Sidecar', new Sidecar( '#sidecar-content', {
			width: '390px', // sets the width of the Sidecar
			tabPosition: '140px', // sets the top position of the open/close tab
			sidecarPosition: 'right', // sets the Sidecar position to right or left
			shadow: true, // enable or disable the shadow in the Sidecar,
			initialOpenFor: 2000
		} ));
		
		$('#showdeviceshowcase').click(function() {
			$('#scontent').hide();
			var ifm = $('<iframe />');
			var ww = $(window).width();
			var wh = $(window).height();
			ifm.attr({
				width: ww,
				height: wh,
				src: 'http://qct:device!!@www.deviceshowcase.com',
				frameborder: 0,
				id: 'qframe'
			});
			ifm.insertAfter('#scontent');
			$('body, #sidecar-wrapper, #qframe').css('overflow','hidden');
			$('#sidecar-content h3').after('<p><a href="#home" id="backhome">&lt; Go Back Home</a></p>');
			$('#backhome').click(function() {
				$(this).parent().remove();
				$('#qframe').remove();
				$('#scontent').show();
				return false;
			});
			return false;
		});
	}
});