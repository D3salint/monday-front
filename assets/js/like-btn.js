document.querySelectorAll('#likeButton').forEach(function(button) {
    button.addEventListener('click', function() {
        const likeIcon = button.querySelector('#likeIcon');
        if (likeIcon.getAttribute('fill') === 'none') {
            likeIcon.setAttribute('fill', '#4790FF');
            likeIcon.setAttribute('stroke', '#4790FF');
        } else {
            likeIcon.setAttribute('fill', 'none');
            likeIcon.setAttribute('stroke', '#4790FF');
        }
    });
});
