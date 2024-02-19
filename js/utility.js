function addClassById(elementId, prop) {
	document.getElementById(`${elementId}`).classList.add(`${prop}`);
}

function delClassById(elementId, prop) {
	document.getElementById(`${elementId}`).classList.remove(`${prop}`);
}
