$( ".arrow" ).click(function() {
	$widthLi = $('.images-single').outerWidth(true);
	$firstLi = $('.images-single:first');
	$lastLi = $('.images-single:last');
	//if it is animating exit
	if ($firstLi.is(':animated') ||  $lastLi.is(':animated')) {
		return;
	}
	if($(this).hasClass( "left" )){
		$firstLi.animate({marginLeft: -($widthLi)}, 500, function() {
			$firstLi.appendTo( "ul.images-cont" );
			$('.images-single').css('margin-left', 0);
  		});
	}
	if($(this).hasClass( "right" )){
		$lastLi.prependTo( "ul.images-cont" ).css('margin-left', - $widthLi).animate({marginLeft: '0'}, 500);
	}
});
