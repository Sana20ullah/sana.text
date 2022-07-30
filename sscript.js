/*------------ chabge nav color scroll------*/

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// fage 



var fags = document.querySelectorAll('.fag');

fags.forEach(fag => {
    fag.addEventListener('click', () => {
        fag.classList.toggle('open');

        // icon change


        const icon = fag.querySelector('.fag_icon i');

        if (icon.className === 'fa-solid fa-plus') {
            icon.className = "fa-solid fa-minus";
        } else
            icon.className = 'fa-solid fa-plus';

    })

});


// nav manu animation


const manu = document.querySelector('.nav_manu');
const manubtn = document.querySelector('#open_manu_btn');
const closeBtn = document.querySelector('#close_manu_btn');


manubtn.addEventListener('click', () => {
    manu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    manubtn.style.display = 'none';


})

const closeNav = () => {
    manu.style.display = 'none';
    closeBtn.style.display = 'none';
    manubtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click', closeNav);