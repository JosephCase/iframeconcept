$( document ).ready(function() {
    alert( "ready!" );
    var oKeyhole = new keyhole();
});

//get midpoint

var keyhole = function() {
	var me = this,
		$target = null,
		targetWidth = 0,
		active = false,
		offsetX = 0,
		acceleration= 0;
	this.constructor = function() {
		$("*").on("mousemove", function() {
			me.mouseMove(event);
		})
	}

	this.mouseMove = function(event) {
		$target = $(event.target);
		if ($target.hasClass("circle")) {	
			var mouseX = event.pageX;
			targetWidth = $target.width();
			var originX = (targetWidth / 2) + $target.offset().left;
			offsetX = mouseX - originX;
			acceleration = 2 * offsetX / targetWidth;
			if (!active) {
				active = true;
				me.moveiFrame();
			}
		} else {
			active = false;
		}
	}

	this.moveiFrame = function () {
		if (active == true) {	
			var $iframe = $target.siblings("iframe"),
				iframeX = $iframe.position().left;
			if ((iframeX < -100 && acceleration < 0) || (iframeX > -targetWidth + 100 && acceleration > 0))  {
				$iframe.animate({
					left: "+=" + 100 * -acceleration
				}, 100, me.moveiFrame);
			} else {
				active = false;
			}
		}
	}

	

	// this.moveiFrame_Done = function () {
	// 	ready = true;
	// }

	this.constructor();
}
//get position relative to midpoint
//get size of page
//get acceleration
//move page