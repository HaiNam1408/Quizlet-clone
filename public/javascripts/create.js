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


// Create-page add card
let cardNumber = 2

function addCard(){
    let cards = document.querySelector('ul.card')
    let cardHtml = `<li class="card_item">
                        <div class="card_item__top row">
                            <span class="card_index"></span>
                            <div class="delete_card"><i class="bi bi-trash3-fill"></i></div>
                        </div>

                        <div class="card_item__centent row">
                            <div class="input_box">
                                <input name="term" required type="search">
                                <h4>Thuật ngữ</h4>
                            </div>
                            <div class="input_box">
                                <input name="mean" required type="search">
                                <h4>Định nghĩa</h4>
                            </div>
                            <div class="imager">
                                <i class="bi bi-image"></i>
                                <p>hình ảnh</p>
                            </div>
                        </div>

                        <div class="imager_btn">
                            <div id="imager_btn" class="row">
                                <div class="imager_btn__box">
                                    <input type="search" name="image" placeholder="Mời bạn nhập link ảnh">
                                </div>
                                <button>Tải ảnh lên của riêng bạn</button>
                            </div>
                        </div>
                    </li>`

    cards.insertAdjacentHTML('beforeend', cardHtml)
    cardNumber++
    newCardHandle()
    numbered()
}
// renderCard(cardNumber)


// imager
function newCardHandle(){
    let cardItem = document.querySelector('ul.card').lastElementChild;
    
    
    let imager = cardItem.querySelector('.imager')
    let imager_btn = cardItem.querySelector('.imager_btn');
    
    imager.addEventListener('click', () => {
        imager_btn.classList.toggle('open_imager_btn');
    });

    let deletaBtn = cardItem.querySelector('.delete_card')
    deletaBtn.addEventListener('click', ()=>{
        cardNumber--
        cardItem.remove()
        numbered()
    })
}

function cardHandle(){
    let cardItem = document.querySelectorAll('.card_item');
    
    cardItem.forEach((card, index) =>{
        let imager = card.querySelector('.imager')
        let imager_btn = card.querySelector('.imager_btn');
        
        imager.addEventListener('click', () => {
            imager_btn.classList.toggle('open_imager_btn');
        });

        let deletaBtn = card.querySelector('.delete_card')
        deletaBtn.addEventListener('click', ()=>{
            cardNumber--
            card.remove()
            numbered()
        })
    })
}
cardHandle()

let addCardBtn = document.querySelector('.Add_card')
addCardBtn.addEventListener('click', ()=>{
    addCard()
})

function numbered(){
    let cardIndex = document.querySelectorAll('.card_index')
    cardIndex.forEach((number, index)=>{
        number.innerHTML = index+1
    })
}


