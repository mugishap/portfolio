let text = "Hello there👋👋👋, I am Mugisha Puceau Precieux. Nice to meet you, below there is my PORTOFOLIO."

let theInterval = setInterval(playText, 200)
let i = 0

function playText(){
    document.getElementById('playtext').textContent += text[i]
    
    i++
    if(i == text.length){
        clearInterval(theInterval)
    }
} 