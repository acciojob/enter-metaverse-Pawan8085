//your JS code here. If required.
document.getElementById('enterBtn').addEventListener('click', () => {
	let p = document.getElementById('status');
	document.body.removeChild(p);
	let h1 = document.createElement('h1');
	h1.innerText = 'Entered Metaverse';
	document.body.insertBefore(h1, document.body.firstChild);
})