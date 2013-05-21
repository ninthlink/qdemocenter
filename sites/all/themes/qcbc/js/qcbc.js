var qcbchoff = 0, qcbcount = 0;

jQuery(function($){
	var ww = $(window).width();
	if ( $('body').hasClass('front') ) {
		if (Modernizr.video.h264 == "") {
			// h264 is not supported
			// console.log('<video /> does not seem to be supported by this browser');
		} else {
			// console.log('<video /> IS supported by this browser?');
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
		var qcbcmax = 4;
		var qcbcsw = 430;
		if ( ww < 1900 ) {
			qcbcmax = 3;
			qcbcsw = Math.floor(ww/3);
			$('.hdemos .views-row').width(qcbcsw);
		}
		
		if ( qcbcount > qcbcmax ) {
			$('.hdemos .view-content').wrapInner('<div class="hslider" />');
			var siz = qcbcount * qcbcsw;
			$('.hslider').css('width',siz);
			$('.hdemos').append('<div class="harr"><a href="#p" class="off" /><a href="#n" class="n" /></div>');
			$('.hdemos .harr a').click(function() {
				if ( $(this).hasClass('off') == false ) {
					$(this).siblings('.off').removeClass('off');
					if ( $(this).hasClass('n') ) {
						qcbchoff += qcbcmax;
						if ( qcbchoff + qcbcmax > qcbcount ) {
							$(this).addClass('off');
						}
					} else { //p
						qcbchoff -= qcbcmax;
						if ( qcbchoff == 0 ) {
							$(this).addClass('off');
						}
					}
					
					$('.hslider').animate({
						left: '-'+ ( qcbchoff * qcbcsw ) + 'px'
					}, 500);
				}
				return false;
			});
		}
	}
	
	if ( $('body').hasClass('node-type-demo') ) {
		var qwidth = ( ww < 1900 ) ? 260 : 390;
		// Storing the Sidecar instance using jQuery's $.data() method
		$.data(document.body, 'Sidecar', new Sidecar( '#sidecar-content', {
			width: qwidth + 'px', // sets the width of the Sidecar
			tabPosition: '140px', // sets the top position of the open/close tab
			sidecarPosition: 'right', // sets the Sidecar position to right or left
			shadow: true, // enable or disable the shadow in the Sidecar,
			initialOpenFor: 2000
		} ));
	}
	
	// dyn
	$(window).bind('resize.qcbc', function() {
		var ww = $(window).width();
		var wh = $(window).height();
		
		if ( $('body').hasClass('front') ) {
			var mh = Math.round(ww*500/1920);
			$('#hmovie, #hmovie video, #header').width(ww).height(mh);
			var rem = wh - mh - 20;
			if ( rem < 330 ) rem = 330;
			$('.hdemos').height(rem);
		} else {
			$('#block-system-main iframe,#scontent').width(ww).height(wh);
			$('.vdemos').height(wh - 210);
		}
	}).trigger('resize.qcbc');
});