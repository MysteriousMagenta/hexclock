
//var body = document.getElementsByTagName("body")[0];
function getHexTime() {
	var date = new Date();
	var time = [date.getHours(), date.getMinutes(), date.getSeconds()]
	var body = document.getElementsByTagName("body")[0];
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
	var body = document.getElementsByTagName("body")[0];
	body.style["background-color"] = colorTime;
	var colorHeader = document.getElementById("color");
	colorHeader.innerText = colorTime;
}

function start() {
	var colorText = document.getElementById("color")
	var body = document.getElementsByTagName("body")[0];
	console.log(body);
	if (!colorText) {
		var colorHeader = document.createElement("h1");
		colorHeader.id = "color";
		body.insertBefore(colorHeader, document.getElementById("explanation"))
	}
	else {
		if (colorText.style.display !== "block") {
			colorText.style.display = "block";
		}
	}
	var seconds = 1;
	var colorInterval = setInterval(displayColor, seconds*1000);
	window.onload = colorInterval;
}

start()