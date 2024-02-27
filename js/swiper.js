function changeBackground(imageUrl) {
    document.body.style.backgroundImage = 'url(' + imageUrl + ')';
    localStorage.setItem('selectedBackground', imageUrl);
}

function loadBackground() {
    var selectedBackground = localStorage.getItem('selectedBackground');
    if (selectedBackground) {
        document.body.style.backgroundImage = 'url(' + selectedBackground + ')';
    }
}

var galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(function(item) {
    item.addEventListener('click', function() {
        var imageUrl = this.querySelector('img').src;
        changeBackground(imageUrl);
    });
});

function loadName() {
    var scrolling = document.getElementById('scrolling');

    scrolling.classList.add('scrolling-text');

    setTimeout(function() {
        scrolling.classList.remove('scrolling-text');
    }, 2000);
}

window.addEventListener('load', loadBackground);

window.addEventListener('load', loadName)