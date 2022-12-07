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
