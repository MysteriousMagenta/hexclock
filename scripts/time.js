function getHexTime() {
	var date = new Date();
	var time = [date.getHours(), date.getMinutes(), date.getSeconds()]
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