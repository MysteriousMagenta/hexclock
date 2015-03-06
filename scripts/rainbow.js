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

function backgroundRainbow() {
	clearInterval()
	for (var i=0; i < rainbow.length; i++) {
		body.style["background-color"] = rainbow[i];
	}
	start()
}