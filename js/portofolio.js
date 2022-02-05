
setTimeout(()=>{
    document.getElementById('compImage').style.visibility="visible"
},10000)



let text1 = "Hello there👋👋👋, I am Mugisha Puceau Precieux. Nice to meet you."

let theInterval1 = setInterval(playText1, 200)
let i = 0

function playText1() {
    document.getElementById('playtext1').textContent += text1[i]

    i++
    if (i == text1.length) {
        clearInterval(theInterval1)
    }
}
let text2 = "I am a software programmer based in Rwanda"

//second text
let theInterval = setInterval(playText2, 200)
let j = 0
function playText2() {

    document.getElementById('playtext2').textContent += text2[j]

    j++
    if (j == text2.length) {
        clearInterval(theInterval)
    }
}

function showBlock1() {
    let down1 = document.querySelector('#down1')
    let block1 = document.querySelector('#personalInformation')
    if (block1.style.display == "none") {
        block1.style.display = "block"
        down1.innerHTML='expand_less';
    }
    else{
        block1.style.display = "none"
        down1.innerHTML='expand_more'
    }
}
function showBlock2() {
    let down2 = document.querySelector('#down2')

    let block2 = document.querySelector('#educationalBackground')
    if (block2.style.display == "none") {
        block2.style.display = "block"
        down2.innerHTML='expand_less';

    }
    else{
        block2.style.display = "none"
        down2.innerHTML='expand_more';

    }
}
function showBlock3() {
    let down3 = document.querySelector('#down3')

    let block3 = document.querySelector('#skills')
    if (block3.style.display == "none") {
        block3.style.display = "block"
        down3.innerHTML='expand_less';

    }
    else{
        block3.style.display = "none"
        down3.innerHTML='expand_more';

    }
}