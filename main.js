const container = document.querySelector('.container-frames'),
    menu = document.querySelector('.menu'),
    navbarNav = document.querySelector('.navbar-nav')

for(let i = 0; i < 12; i++){
    const frame = document.createElement('div');
    frame.classList.add(`frame`);

    frame.style.transform = `rotate(40deg) translateX(${i*50}px) translateY(-${i*40}px) translateZ(-${(i)*20}px)`
    frame.style.opacity = 1/(i+.5)
    frame.style.animationDelay = i / 4 +'s'

    container.appendChild(frame)
}

menu.addEventListener('click', () => {
    navbarNav.classList.toggle('show-nav')
})