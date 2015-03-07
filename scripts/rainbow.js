// Wikipedia's Rainbow
var rainbow = [
	"#FF0000",
	"#FF7F00",
	"#FFFF00",
	"#00FF00",
	"#0000FF",
	"#4B0082",
	"#8B00FF"
]

function rainbowChange(index) {
	if (index < rainbow.length) {
		body.style["background-color"] = rainbow[index];
		setTimeout(function() {rainbowChange(index-1)}, 250)
	}
}

function backgroundRainbow() {
	clearInterval()
	rainbowChange(0);
	setInterval(start(), seconds*1000);
}