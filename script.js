$(document).ready(function() {

	// menu responsive
	var btn = document.querySelector(".logoHamb");
	var nav = document.querySelector(".navResp");

	btn.onclick = function() {
		nav.classList.toggle("navResp_open");
	}

});

