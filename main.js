let artObj = {
	mushroom: [
			['o', 'o', 'o', 'o', 'o', 'k', 'k', 'k', 'k', 'k', 'k', 'o', 'o', 'o', 'o', 'o'],
			['o', 'o', 'o', 'k', 'k', 'r', 'r', 'r', 'r', 'w', 'w', 'k', 'k', 'o', 'o', 'o'],
			['o', 'o', 'k', 'w', 'w', 'r', 'r', 'r', 'r', 'w', 'w', 'w', 'w', 'k', 'o', 'o'],
			['o', 'k', 'w', 'w', 'r', 'r', 'r', 'r', 'r', 'r', 'w', 'w', 'w', 'w', 'k', 'o'],
			['o', 'k', 'w', 'r', 'r', 'w', 'w', 'w', 'w', 'r', 'r', 'w', 'w', 'w', 'k', 'o'],
			['k', 'r', 'r', 'r', 'w', 'w', 'w', 'w', 'w', 'w', 'r', 'r', 'r', 'r', 'r', 'k'],
			['k', 'r', 'r', 'r', 'w', 'w', 'w', 'w', 'w', 'w', 'r', 'r', 'w', 'w', 'r', 'k'],
			['k', 'w', 'r', 'r', 'w', 'w', 'w', 'w', 'w', 'w', 'r', 'w', 'w', 'w', 'w', 'k'],
			['k', 'w', 'w', 'r', 'r', 'w', 'w', 'w', 'w', 'r', 'r', 'w', 'w', 'w', 'w', 'k'],
			['k', 'w', 'w', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'w', 'w', 'r', 'k'],
			['k', 'w', 'r', 'r', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'r', 'r', 'r', 'k'],
			['o', 'k', 'k', 'k', 'w', 'w', 'k', 'w', 'w', 'k', 'w', 'w', 'k', 'k', 'k', 'o'],
			['o', 'o', 'k', 'w', 'w', 'w', 'k', 'w', 'w', 'k', 'w', 'w', 'w', 'k', 'o', 'o'],
			['o', 'o', 'k', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'k', 'o', 'o'],
			['o', 'o', 'o', 'k', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'k', 'o', 'o', 'o'],
			['o', 'o', 'o', 'o', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'o', 'o', 'o', 'o'],
	],
	mario: [
			['o', 'o', 'o', 'r', 'r', 'r', 'r', 'r', 'r', 'o', 'o', 'o', 'o'],
			['o', 'o', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'o'],
			['o', 'o', 't', 't', 't', 'p', 'p', 'p', 'k', 'p', 'o', 'o', 'o'],
			['o', 't', 'p', 't', 'p', 'p', 'p', 'p', 'k', 'p', 'p', 'p', 'o'],
			['o', 't', 'p', 't', 't', 'p', 'p', 'p', 'p', 'k', 'p', 'p', 'p'],
			['o', 't', 't', 'p', 'p', 'p', 'p', 'p', 'k', 'k', 'k', 'k', 'o'],
			['o', 'o', 'o', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'o', 'o'],
			['o', 'o', 'r', 'r', 'b', 'r', 'r', 'r', 'r', 'o', 'o', 'o', 'o'],
			['o', 'r', 'r', 'r', 'b', 'r', 'r', 'b', 'r', 'r', 'r', 'r', 'o'],
			['r', 'r', 'r', 'r', 'b', 'b', 'b', 'b', 'r', 'r', 'r', 'r', 'o'],
			['p', 'p', 'r', 'b', 'y', 'b', 'b', 'y', 'b', 'r', 'p', 'p', 'o'],
			['p', 'p', 'p', 'b', 'b', 'b', 'b', 'b', 'b', 'p', 'p', 'p', 'o'],
			['p', 'p', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'p', 'p', 'o'],
			['o', 'o', 'b', 'b', 'b', 'o', 'o', 'b', 'b', 'b', 'o', 'o', 'o'],
			['o', 't', 't', 't', 'o', 'o', 'o', 'o', 't', 't', 't', 'o', 'o'],
			['t', 't', 't', 't', 'o', 'o', 'o', 'o', 't', 't', 't', 't', 'o']
	],
	star: [
			['o', 'o', 'o', 'o', 'o', 'o', 'o', 'k', 'k', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
			['o', 'o', 'o', 'o', 'o', 'o', 'k', 'y', 'y', 'k', 'o', 'o', 'o', 'o', 'o', 'o'],
			['o', 'o', 'o', 'o', 'o', 'o', 'k', 'y', 'y', 'k', 'o', 'o', 'o', 'o', 'o', 'o'],
			['o', 'o', 'o', 'o', 'o', 'k', 'y', 'y', 'y', 'y', 'k', 'o', 'o', 'o', 'o', 'o'],
			['k', 'k', 'k', 'k', 'k', 'k', 'y', 'y', 'y', 'y', 'k', 'k', 'k', 'k', 'k', 'k'],
			['k', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'k'],
			['o', 'k', 'y', 'y', 'y', 'y', 'k', 'y', 'y', 'k', 'y', 'y', 'y', 'y', 'k', 'o'],
			['o', 'o', 'k', 'y', 'y', 'y', 'k', 'y', 'y', 'k', 'y', 'y', 'y', 'k', 'o', 'o'],
			['o', 'o', 'o', 'k', 'y', 'y', 'k', 'y', 'y', 'k', 'y', 'y', 'k', 'o', 'o', 'o'],
			['o', 'o', 'o', 'k', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'k', 'o', 'o', 'o'],
			['o', 'o', 'k', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'k', 'o', 'o'],
			['o', 'o', 'k', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'k', 'o', 'o'],
			['o', 'k', 'y', 'y', 'y', 'y', 'y', 'k', 'k', 'y', 'y', 'y', 'y', 'y', 'k', 'o'],
			['o', 'k', 'y', 'y', 'y', 'k', 'k', 'o', 'o', 'k', 'k', 'y', 'y', 'y', 'k', 'o'],
			['k', 'y', 'y', 'k', 'k', 'o', 'o', 'o', 'o', 'o', 'o', 'k', 'k', 'y', 'y', 'k'],
			['k', 'k', 'k', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'k', 'k', 'k']
	],
	flower: [
			['o', 'o', 'o', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'o', 'o', 'o'],
			['o', 'k', 'k', 'k', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'k', 'k', 'k', 'o'],
			['k', 'k', 'n', 'n', 'n', 'y', 'y', 'y', 'y', 'y', 'y', 'n', 'n', 'n', 'k', 'k'],
			['k', 'n', 'n', 'y', 'y', 'y', 'k', 'w', 'w', 'k', 'y', 'y', 'y', 'n', 'n', 'k'],
			['k', 'n', 'n', 'y', 'y', 'y', 'k', 'y', 'y', 'k', 'y', 'y', 'y', 'n', 'n', 'k'],
			['k', 'n', 'n', 'n', 'n', 'y', 'y', 'y', 'y', 'y', 'y', 'n', 'n', 'n', 'n', 'k'],
			['k', 'k', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'k', 'k'],
			['o', 'k', 'k', 'k', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'k', 'k', 'k', 'o'],
			['o', 'o', 'o', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'o', 'o', 'o'],
			['o', 'k', 'k', 'o', 'o', 'o', 'k', 'g', 'g', 'k', 'o', 'o', 'o', 'k', 'k', 'o'],
			['k', 'g', 'g', 'k', 'k', 'o', 'k', 'g', 'g', 'k', 'o', 'k', 'k', 'g', 'g', 'k'],
			['k', 'g', 'g', 'g', 'g', 'k', 'k', 'g', 'g', 'k', 'k', 'g', 'g', 'g', 'g', 'k'],
			['k', 'g', 'g', 'g', 'g', 'g', 'k', 'g', 'g', 'k', 'g', 'g', 'g', 'g', 'g', 'k'],
			['o', 'k', 'g', 'g', 'g', 'g', 'k', 'g', 'g', 'k', 'g', 'g', 'g', 'g', 'k', 'o'],
			['o', 'o', 'k', 'k', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'k', 'k', 'o', 'o'],
			['o', 'o', 'o', 'o', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'o', 'o', 'o', 'o']
	],
	chance: [
			['o', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 'o'],
			['t', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'k'],
			['t', 'p', 'k', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'k', 'p', 'k'],
			['t', 'p', 'p', 'p', 'p', 't', 't', 't', 't', 't', 'p', 'p', 'p', 'p', 'p', 'k'],
			['t', 'p', 'p', 'p', 't', 't', 'k', 'k', 'k', 't', 't', 'p', 'p', 'p', 'p', 'k'],
			['t', 'p', 'p', 'p', 't', 't', 'k', 'p', 'p', 't', 't', 'k', 'p', 'p', 'p', 'k'],
			['t', 'p', 'p', 'p', 't', 't', 'k', 'p', 'p', 't', 't', 'k', 'p', 'p', 'p', 'k'],
			['t', 'p', 'p', 'p', 'p', 'k', 'k', 'p', 't', 't', 't', 'k', 'p', 'p', 'p', 'k'],
			['t', 'p', 'p', 'p', 'p', 'p', 'p', 't', 't', 'k', 'k', 'k', 'p', 'p', 'p', 'k'],
			['t', 'p', 'p', 'p', 'p', 'p', 'p', 't', 't', 'k', 'p', 'p', 'p', 'p', 'p', 'k'],
			['t', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'k', 'k', 'p', 'p', 'p', 'p', 'p', 'k'],
			['t', 'p', 'p', 'p', 'p', 'p', 'p', 't', 't', 'p', 'p', 'p', 'p', 'p', 'p', 'k'],
			['t', 'p', 'p', 'p', 'p', 'p', 'p', 't', 't', 'k', 'p', 'p', 'p', 'p', 'p', 'k'],
			['t', 'p', 'k', 'p', 'p', 'p', 'p', 'p', 'k', 'k', 'p', 'p', 'p', 'k', 'p', 'k'],
			['t', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'k'],
			['k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k']
	],
	boo: [
			['o', 'o', 'o', 'o', 'o', 'k', 'k', 'k', 'k', 'k', 'o', 'o', 'o', 'o', 'o', 'o'],
			['o', 'o', 'o', 'k', 'k', 'w', 'w', 'w', 'w', 'w', 'k', 'k', 'o', 'o', 'o', 'o'],
			['o', 'o', 'k', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'k', 'o', 'o', 'o'],
			['o', 'k', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'k', 'o', 'o'],
			['o', 'k', 'w', 'k', 'w', 'k', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'k', 'o'],
			['k', 'w', 'w', 'k', 'w', 'k', 'w', 'w', 'w', 'w', 'k', 'k', 'k', 'w', 'w', 'k'],
			['k', 'w', 'w', 'k', 'w', 'k', 'w', 'w', 'w', 'k', 'w', 'w', 'k', 'w', 'w', 'k'],
			['k', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'k', 'w', 'k', 'o'],
			['k', 'w', 'r', 'w', 'r', 'w', 'r', 'w', 'w', 'w', 'w', 'k', 'w', 'w', 'w', 'k'],
			['k', 'w', 'r', 'r', 'r', 'r', 'r', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'k'],
			['k', 'w', 'r', 'r', 'r', 'r', 'r', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'k'],
			['o', 'k', 'w', 'r', 'r', 'r', 'r', 'r', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'k'],
			['o', 'k', 'w', 'r', 'w', 'r', 'w', 'r', 'w', 'w', 'w', 'w', 'w', 'w', 'k', 'o'],
			['o', 'o', 'k', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'k', 'o', 'o'],
			['o', 'o', 'o', 'k', 'k', 'w', 'w', 'w', 'w', 'w', 'w', 'k', 'k', 'o', 'o', 'o'],
			['o', 'o', 'o', 'o', 'o', 'k', 'k', 'k', 'k', 'k', 'k', 'o', 'o', 'o', 'o', 'o']
	]

}

/**
$pixel-color-map: (
'r' : #f00,
'w': #fff,
'k': #000,
'o': transparent,
't': #83401f,
'p': #ffbc77,
'b': #06f,
'y': #ff0,
'n': #ff8000,
'g': #5ac528
); */

for (let key in artObj) {

	let eachArt = artObj[key];
	let eachArtDiv = document.createElement("div");
	eachArtDiv.setAttribute("id", key);
	document.getElementById("artContainer").appendChild(eachArtDiv);

	for (var i = 0; i < eachArt.length; i++) {
			let divRow = document.createElement("div");
			divRow.classList.add("row");

			for (var z = 0; z < eachArt[i].length; z++) {
					let innerSpan = document.createElement("span");

					if (eachArt[i][z] == 'r') {
							innerSpan.classList.add("r")
					} else if (eachArt[i][z] == 'w') {
							innerSpan.classList.add("w")
					} else if (eachArt[i][z] == 'k') {
							innerSpan.classList.add("k")
					} else if (eachArt[i][z] == 'o') {
							innerSpan.classList.add("o")
					} else if (eachArt[i][z] == 't') {
							innerSpan.classList.add("t")
					} else if (eachArt[i][z] == 'p') {
							innerSpan.classList.add("p")
					} else if (eachArt[i][z] == 'b') {
							innerSpan.classList.add("b")
					} else if (eachArt[i][z] == 'y') {
							innerSpan.classList.add("y")
					} else if (eachArt[i][z] == 'n') {
							innerSpan.classList.add("n")
					} else if (eachArt[i][z] == 'g') {
							innerSpan.classList.add("g")
					}
					divRow.appendChild(innerSpan);
			}
			document.getElementById(key).appendChild(divRow);
	}
}