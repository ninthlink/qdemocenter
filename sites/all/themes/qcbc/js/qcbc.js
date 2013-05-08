jQuery(function($){
	if ( $('body').hasClass('node-type-demo') ) {
		// Storing the Sidecar instance using jQuery's $.data() method
		$.data(document.body, 'Sidecar', new Sidecar( '#sidecar-content', {
			width: '637px', // sets the width of the Sidecar
			tabPosition: '140px', // sets the top position of the open/close tab
			sidecarPosition: 'right', // sets the Sidecar position to right or left
			shadow: true, // enable or disable the shadow in the Sidecar,
			initialOpenFor: 1000
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