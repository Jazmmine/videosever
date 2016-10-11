/*window.addEventListener("load", function(){
		var linksArray = document.querySelectorAll("a");
		for (var i = 0; i < linksArray.length; i++) {
			var linksArrayElemento = linksArray[i];
			var videoUrl = linksArrayElemento.getAttribute("href"); 
			var imgUrl = youtube.generateThumbnailUrl (videoUrl);
			var imgElemento = document.createElement("img");
				imgElemento.setAttribute("src", imgUrl);
				linksArrayElemento.appendChild(imgElemento);
		}

});*/

var cargar = function() {
	var $enlaces = $("a");
	$enlaces.each(iterar);
};

var iterar = function(index, element) {
	var $enlace = $(element);
	var linkVideo = $enlace.attr("href");
	var linkImagen = youtube.generateThumbnailUrl(linkVideo);
	var $img = $("<img>");
	$img.attr("src", linkImagen);
	$enlace.append($img);
};

/*
$(document).ready(cargar);

$(document).ready(function(){
	var $linksArray = $("a");
	for (var i = 0; i < linksArray.length; i++) {
		var $linksArrayElemento = $(linksArray[i]);
		var videoUrl = $linksArrayElemento.attr("href");
	}
});*/