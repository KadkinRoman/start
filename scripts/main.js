var backHtml = document.querySelector('html');

backHtml.onclick = function() {
	var myBackground = document.documentElement.style;
    if(myBackground.backgroundImage === 'url("images/back2.png")') {
      myBackground.backgroundImage = 'url("images/back.png")';
    } else {
      myBackground.backgroundImage = 'url("images/back2.png")';
	}
}
