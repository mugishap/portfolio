
var i = 0;
function playText1() {
    var text1 = 'Hello there👋👋👋, I am Mugisha Puceau Precieux. Nice to meet you. I am a software developer based in Rwanda and open to remote jobs, below is my portofolio';
    var speed = 100;
    if (i < text1.length) {
        document.getElementById("playtext1").innerHTML += text1.charAt(i);
        i++;
        setTimeout(playText1, speed);
    }
}
// window.onload = ()=>{playText1()}
//second text
function showBlock1() {
    let down1 = document.querySelector('#down1')
    let block1 = document.querySelector('#personalInformation')
    if (block1.style.display == "none") {
        block1.style.display = "block"
        down1.innerHTML = 'expand_less';
    }
    else {
        block1.style.display = "none"
        down1.innerHTML = 'expand_more'
    }
}
function navigate(){
    if(window.scrollY > 200){
        document.querySelector('.to-top').style.display = 'flex'
    }
}
function showBlock2() {
    let down2 = document.querySelector('#down2')

    let block2 = document.querySelector('#educationalBackground')
    if (block2.style.display == "none") {
        block2.style.display = "block"
        down2.innerHTML = 'expand_less';

    }
    else {
        block2.style.display = "none"
        down2.innerHTML = 'expand_more';

    }
}
function showBlock3() {
    let down3 = document.querySelector('#down3')

    let block3 = document.querySelector('#skills')
    if (block3.style.display == "none") {
        block3.style.display = "flex"
        down3.innerHTML = 'expand_less';

    }
    else {
        block3.style.display = "none"
        down3.innerHTML = 'expand_more';

    }
}
let toTop = document.getElementById('toTop')
window.addEventListener('scroll', () => {
    if (window.scrollY > 700) {
        toTop.style.display = "block"
    }
    else {
        toTop.style.display = "none"
    }
})
function timeDisplay(){
    const now = new Date()
    document.querySelector(".time").innerHTML = now.toLocaleTimeString()
    setTimeout(function () { timeDisplay(); }, 1000)
}
window.onload =function(){timeDisplay(),playText1()}