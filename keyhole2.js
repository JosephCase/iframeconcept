$( document ).ready(function() {
    alert( "ready 21!" );
    var oKeyhole = new keyhole();
});

//get midpoint

var keyhole = function() {
	var me = this
	this.constructor = function() {
		$(".circle").on("mousemove", function() {
			me.mouseMove(event);
		})
	}

	this.mouseMove = function(event) {
		var $target = $(event.target);

		var targetWidth = $target.width();
		var targetHeight = $target.height();
		var originX = (targetWidth / 2) + $target.offset().left;
		var originY = (targetHeight / 2) + $target.offset().top;
		
		var mouseX = event.pageX;
		var mouseY = event.pageY;

		var offsetX = mouseX - originX;
		var offsetY = mouseY - originY;

		var positionX = -offsetX - targetWidth/2;

		var positionY = 0;
		if (offsetY > 0) {
			positionY = -offsetY * 2;
		} else {
			positionY = 0;
		}
		var $iframe = $target.siblings("iframe");

		$iframe.css("left", positionX);
		$iframe.css("top", positionY);
	}

	

	// this.moveiFrame_Done = function () {
	// 	ready = true;
	// }

	this.constructor();
}