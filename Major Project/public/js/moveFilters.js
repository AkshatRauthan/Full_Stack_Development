function scrollLeft() {
    const container = document.querySelector('.options');
    container.scrollLeft -= 150;  // Scroll left by 150px
}

function scrollRight() {
    const container = document.querySelector('.options');
    container.scrollLeft += 150;  // Scroll right by 150px
}

document.querySelector('#move-left').addEventListener('click', scrollLeft);
document.querySelector('#move-right').addEventListener('click', scrollRight);