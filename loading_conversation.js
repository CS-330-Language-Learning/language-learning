window.addEventListener("load", () => {
	setTimeout(function() {
		const loadingText = document.getElementById('loadingText')
		loadingText.innerHTML = "Matched!"
		setTimeout(function() {
			window.location = './messaging_home.html'
		}, 1000)
	}, 2500)

});