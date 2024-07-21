// gellery
const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');

container.addEventListener('click', function (e) {
    // cek yang diklik thumb
    if (e.target.className == 'thumb') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function () {
            jumbo.classList.remove('fade');
        }, 100);
    }
});
