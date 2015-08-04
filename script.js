
$(document).ready(function () {

var titulo = document.getElementsByTagName("a");
var imagenes=document.getElementsByTagName("img");


$(titulo).on("mouseenter", function() {
			$(this).css("opacity", "0");
			$(this).parent().find("img").css("opacity", '1');


	});

$(titulo).on("mouseleave", function() {
			$(this).css("opacity", "1");
			$(this).parent().find("img").css("opacity", '0.5');

	});

});