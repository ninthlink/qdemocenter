var qcbchoff = 0, qcbcount = 0, qcbct = '/sites/all/themes/qcbc/';

jQuery(function($){
	var ww = $(window).width();
	if ( $('body').hasClass('front') ) {
			if ( $('#hmovie').size() == 0 ) {
				$('#header').prepend('<div id="hmovie" />');
			}
//alert('bc :: '+ jQuery('body').attr('class'));
		var qcbcvid = false;

		if ( $('body').hasClass('desktop') && ( Modernizr.video.h264 == "probably" ) ) {
			qcbcvid = true;
		}
		if ( qcbcvid ) {
			$('#hmovie').hide().empty()
			.append('<video width="1920" height="500" autoplay="autoplay" loop="loop" poster="'+qcbct+'images/header.png"><source src="'+qcbct+'attractor-h264.mp4?r=080513" /></video>')
			.show().parent().show();
		} else {
/*
			$('#hmovie').bind('loaded',function() {
				alert('hmovie sequence loaded?');
});
*/
			$('#hmovie').jsMovie({
				folder: qcbct+"images/seq2/",
				sequence: "demo-center-mobile_#####.png",from:0,to:1139,step:1,
				width: 1366,
				height: 356,
				grid: {height:1366,width:356,rows:1,columns:1},
				fps:30,
				imageScale:true,
				playOnLoad:true
			});
	}
		
		var hdemos = $('.hdemos .views-row');
		qcbcount = hdemos.size();
		var qcbcmax = 4;
		var qcbcsw = 430;
		if ( ww < 1900 ) {
			//qcbcmax = 3;
			qcbcsw = Math.floor((ww-160)/qcbcmax);
			$('.hdemos .views-row').width(qcbcsw);
			$('.hdemos .view-content').width(ww-160).css('margin','0 80px');
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
	$('body').css('overflow','hidden');
	$(window).bind('resize.qcbc', function() {
		var ww = $(window).width();
		var wh = $(window).height();
		
		if ( $('body').hasClass('front') ) {
			var mh = Math.round(ww*500/1920);
			$('#header, #hmovie, #hmovie video, #hmovie .jsMovieFrame').width(ww).height(mh);
			var rem = wh - mh - 20;
			if ( rem < 330 ) rem = 330;
			$('.hdemos').height(rem);
		} else {
			$('#block-system-main iframe,#scontent').width(ww).height(wh);
			$('.vdemos').height(wh - 210);
		}
	}).trigger('resize.qcbc');
});
