$( "i#arrow-carousel" ).click(function() {
	$widthLi = $('.woocommerce-products-outer .woocommerce-products-wrap .columns-4 ul li').outerWidth(true);
	$firstLi = $('.woocommerce-products-outer .woocommerce-products-wrap .columns-4 ul li:first');
	$lastLi = $('.woocommerce-products-outer .woocommerce-products-wrap .columns-4 ul li:last');
	//if it is animating exit
	if ($firstLi.is(':animated') ||  $lastLi.is(':animated')) {
		return;
	}
	if($(this).hasClass( "left" )){
		$firstLi.animate({marginLeft: -($widthLi + 3)}, 500, function() {
			$firstLi.appendTo( ".woocommerce-products-outer .woocommerce-products-wrap .columns-4 ul" );
			$('.woocommerce-products-outer .woocommerce-products-wrap .columns-4 ul li').css('margin-left', 0);
  		});
	}
	if($(this).hasClass( "right" )){
		$lastLi.prependTo( ".woocommerce-products-outer .woocommerce-products-wrap .columns-4 ul" ).css('margin-left', - $widthLi).animate({marginLeft: '0'}, 500);
	}
});

$( document ).ready(function() {
    console.log( "ready!" );
});