let header = document.querySelector('.nav');
let navbox = document.querySelector('.navbox');
let menu = document.querySelector('#menu');

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0)
})

menu.onclick = () => {
    navbox.classList.toggle('show')
}

window.onscroll = () => {
    navbox.classList.remove('show')

}