// Darkmode/Lightdode
const rootStyle = document.querySelector(':root').style
let themeBtn = document.querySelector('.check_box input')

let ThemeStart = window.localStorage.getItem('theme')
if(ThemeStart !== 'light' && ThemeStart !== 'dark'){
    window.localStorage.setItem('theme', 'light')
    changeLightTheme()
} else {
    if(ThemeStart === 'dark') {
        changeDarkTheme()
    }else if(ThemeStart === 'light'){
        changeLightTheme()
    }
}


function toogleTheme(){
    let currentTheme = window.localStorage.getItem('theme')
    if(currentTheme !== 'dark') {
        changeDarkTheme()
    }else if(currentTheme !== 'light'){
        changeLightTheme()
    }
}

themeBtn.addEventListener('click', ()=>{
    toogleTheme()
})

function changeDarkTheme(){
    window.localStorage.setItem('theme', 'dark')
    rootStyle.setProperty('--col_nen', "#0A092D")
    rootStyle.setProperty('--col_element', "#2E3856")
    rootStyle.setProperty('--col_boder', "#282E3E")
    rootStyle.setProperty('--col_text', "#ffffff")
    rootStyle.setProperty('--col_sub', "#b7bccb")
    rootStyle.setProperty('--col_logo', "#ffffff")
}

function changeLightTheme(){
    window.localStorage.setItem('theme', 'light')
    rootStyle.setProperty('--col_nen', "#f6f7fb")
    rootStyle.setProperty('--col_element', "#ffffff")
    rootStyle.setProperty('--col_boder', "#e2e2e2")
    rootStyle.setProperty('--col_text', "#303545")
    rootStyle.setProperty('--col_sub', "#939bb4")
    rootStyle.setProperty('--col_logo', "#4255FF")
}


//card
const cardList = document.querySelector('.card')
const cards = document.querySelectorAll('.inner-card');

cards.forEach(card => {
    card.addEventListener('click', (e) => {
        e.stopPropagation()
        card.classList.toggle('show-answer')
    });

    //Text to speech
    let speechBtnFont = card.querySelector('.inner-card-front > i')
    speechBtnFont.addEventListener('click', (e)=>{
        e.stopPropagation()
        let speech = new SpeechSynthesisUtterance();
        let text = card.querySelector('.inner-card-front > p').textContent
        speech.lang = "en-US";
        speech.text = text;
        speech.volume = 2;
        speech.pitch = 2;
        window.speechSynthesis.speak(speech)
    })

    let speechBtnBack = card.querySelector('.inner-card-back > i')
    speechBtnBack.addEventListener('click', (e)=>{
        e.stopPropagation()
        let speech = new SpeechSynthesisUtterance();
        let text = card.querySelector('.inner-card-back > p').textContent
        speech.lang = "vn-VN";
        speech.text = text;
        speech.volume = 2;
        speech.rate = .5;
        speech.pitch = 1; 
        speech.voice = 
        window.speechSynthesis.speak(speech)
    })
})



let prevs = document.querySelectorAll('.prev.nav-button');
//Slide flashcard
let nexts = document.querySelectorAll('.next.nav-button');
let numCard = document.querySelector('.card-sum').textContent.trim()
let indexCard = 1

nexts.forEach((next)=>{
    next.addEventListener('click', (e) => {
        e.stopPropagation()
        if(indexCard < numCard){
            cardList.scrollLeft += 750;
            indexCard++
        } else{
            cardList.scrollLeft -= 100 + '%';
            indexCard = 1
        }
    });
})

prevs.forEach((next)=>{
    next.addEventListener('click', (e) => {
        e.stopPropagation()
        if(indexCard > 1){
            cardList.scrollLeft -= 750;
            indexCard--
        }else{
            indexCard = 1 
        }
    });    
})

//Xóa ảnh rỗng
let emptyImage = document.querySelectorAll('img[src=""]')
emptyImage.forEach(image =>{
    image.remove()
})
