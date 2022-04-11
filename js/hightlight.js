const imgBlocks = document.querySelectorAll('.image-block');

imgBlocks.forEach((imgBlock) => {
    imgBlock.addEventListener('click', () => {
        removeActiveClass();
        imgBlock.classList.add('active');
    });
});

function removeActiveClass(){
    imgBlocks.forEach(imgBlock => {
        imgBlock.classList.remove('active');
    });
}