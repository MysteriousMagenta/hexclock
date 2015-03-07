function getHexTime() {
	var date = new Date();
	var time = [date.getHours(), date.getMinutes(), date.getSeconds()]
	var body = document.getElementById("body");
	var timeString = "#";
	for (var i=0; i < time.length; i++) {
		var element = time[i].toString();
		while (element.length < 2) {
			element = "0" + element
		}
		timeString += element;
	}
	return timeString;
}


function displayColor() {
	var colorTime = getHexTime();
	var body = document.getElementById("body");
	body.style["background-color"] = colorTime;
	var colorHeader = document.getElementById("color");
	colorHeader.innerText = colorTime;
}

function start() {
	var seconds = 1;
	var colorInterval = setInterval(displayColor, seconds*1000);
	return colorInterval;
}

window.onload = start()