const likeButton = document.getElementById('likes-btn');
const prohibited = document.getElementById('prohibited');
let likesCounter = 0;

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
