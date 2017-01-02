var numSquares = 20;
$(document).ready(function(){
	make_grid(numSquares);
	draw();
	reset();
	$('.newGrid').click(function(){
		numSquares = prompt('how many squares do you want per side?');
		make_grid(numSquares);
		draw();
	});

});

function reset(){
	$('.reset').click(function(){
		$('.squares').css('background','white');
	});
};

function draw(){
	$('.squares').hover(function(){
		$(this).css('background','black');
	});
};

function make_grid(squares) {
	$('#container').empty();
	var i = 1;
	var j = 1;
	side = Math.floor(Math.sqrt((960*960) / (squares * squares)));

	while(i < squares){
		$('#container').append('<div class="column'+ i +'"style="display:inline-block;">');

	while(j < squares){
		$('.column'+i).append('<div class="squares" style="width:'+side+'px; height:'+side+'px">');
			j += 1;
		}
		i += 1;
		j = 1;
	}
};