const likeButton = document.getElementById('likes-btn');
let likesCounter = 0;
likeButton.addEventListener(
    'click',
    (event) => {
        document.getElementById('likes-counter').innerHTML = ++likesCounter;
    }
)