$(function() {
	function carousel(slide, number, previous=false) {
		slide.eq(number).css({'display':'none'});
		
		if(previous) {
			number--;
		}
		else {
			number++;
		}

		if(number < 0) {
			number = slide.length - 1;
		}
		else if(number > slide.length - 1) {
			number = 0;
		}

		slide.eq(number).css({'display':'block'});

		return number;
	}

	let slide = $('.slide');
	let number = 0;
	slide.css({'display':'none'});
	slide.first().css({'display':'block'});

	$('#previous').click(function() {
		number = carousel(slide, number, true);
		})

	$('#next').click(function() {
		number = carousel(slide, number);
		})

	setInterval( 
		function() {
			number = carousel(slide, number);
		}, 3000)
});