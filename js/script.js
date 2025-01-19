const navBtn = document.querySelector('#navbar-toggler');
const navDiv = document.querySelector('.navbar-collapse');

navBtn.addEventListener('click',() => {
    navDiv.classList.toggle('showNav')
})

// ## stopping animation and transition during window resizing

let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:samlibin2001@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hey there, Libin! I am ${name}.\n${message}`)}`;
    window.location.href = mailtoLink;
}
