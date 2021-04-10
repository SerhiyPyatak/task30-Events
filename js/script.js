const likeButton = document.getElementById('likes-btn');
const prohibited = document.getElementById('prohibited');
let likesCounter = 0;


document.addEventListener('keydown', (event) => {
	const {code, ctrlKey, key} = event;
	event.preventDefault();
	const txtArea = document.getElementById('task1-textarea');
	const divElement = document.getElementById('whiteboard');
	if (code == "KeyE" && ctrlKey) {
		divElement.style.display = "none";
		txtArea.style.display = "block";
		txtArea.innerHTML = divElement.innerHTML;
	} else if (code == "KeyS" && ctrlKey) {
		divElement.style.display = "block";
		txtArea.style.display = "none";
		divElement.innerHTML = txtArea.innerHTML;
	} else {
		txtArea.innerHTML += key;
		//console.log();
	}
})

likeButton.addEventListener(
  'click',
  (event) => {
    document.getElementById('likes-counter').innerHTML = ++likesCounter;
  }
)

prohibited.addEventListener(
  'mousedown',
  (event) => {
    if(event.which == 3) {
      console.log('Context menu called');
      alert ('Context menu calling is prohibited!');
    } else {
      console.log('Selection start');
      alert ('Selection inside this block is prohibited!');
    }
    return false;
  }
)
