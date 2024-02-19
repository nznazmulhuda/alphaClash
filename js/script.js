let life = 5;
let ptn = 0;

function char() {
	const alphabetString = "abcdefghijklmnopqrstuvwxyz";
	const alphabets = alphabetString.split("");
	let index = Math.floor(Math.random() * 26);
	let alphabet = alphabets[index];

	document.getElementById("alphabet").innerText = alphabet;
	addClassById(`${alphabet}`, "bg-yellow-500");

	return alphabet;
}
function score() {
	addClassById("play-ground", "hidden");
	delClassById("gameOver", "hidden");
	document.getElementById("finalScore").innerText = ptn;
}

function returnGame() {
	life = 5;
	ptn = 0;
	const btns = document.querySelectorAll("kbd");
	for (const btn of btns) {
		if (btn.classList.contains("bg-yellow-500")) {
			btn.classList.remove("bg-yellow-500");
		}
	}
	document.getElementById("score").innerText = ptn;
	plays();
}

function gameOver() {
	if (life <= 0) {
		score();
	}
}

function plays() {
	addClassById("home", "hidden");
	addClassById("gameOver", "hidden");
	delClassById("play-ground", "hidden");
	document.getElementById("life").innerText = life;
	char();
}

window.addEventListener("keydown", function (e) {
	gameOver();
	let alphas = e.key;
	let alpha = alphas.toUpperCase();
	let ch = alphabet.innerText;
	let cha = ch.toLowerCase();
	if (alpha === ch) {
		this.document
			.getElementById(`${cha}`)
			.classList.remove("bg-yellow-500");
		ptn++;
		document.getElementById("score").innerText = ptn;
		char();
	} else if(alphas === 'Enter'){
        plays()
        returnGame()
    } else {
		this.document.getElementById("life").innerText = life--;
	}
});
