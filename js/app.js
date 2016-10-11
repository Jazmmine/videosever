window.addEventListener("load", function(){
		var linksArray = document.querySelectorAll("a");
		for (var i = 0; i < linksArray.length; i++) {
			var linksArrayElemento = linksArray[i];
			var videoUrl = linksArrayElemento.getAttribute("href"); 
			var imgUrl = youtube.generateThumbnailUrl (videoUrl);
			var imgElemento = document.createElement("img");
				imgElemento.setAttribute("src", imgUrl);
				linksArrayElemento.appendChild(imgElemento);
		}

});
