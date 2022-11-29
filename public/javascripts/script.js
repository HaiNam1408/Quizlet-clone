let face_box1 = document.querySelector('#face_box1');
let title = document.querySelector('.title');

title.addEventListener('click', () => {
    face_box1.classList.toggle('open_face_box');
});


// Create-page add card
let cards = document.querySelector('ul.card')
let cardNumber = 2

function addCard(){
    let cardHtml = `<li class="card_item">
                        <div class="card_item__top row">
                            <span class="card_index"></span>
                            <div class="delete_card"><i class="bi bi-trash3-fill"></i></div>
                        </div>

                        <div class="card_item__centent row">
                            <div class="input_box">
                                <input name="term" type="search">
                                <h4>Thuật ngữ</h4>
                            </div>
                            <div class="input_box">
                                <input name="mean" type="search">
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
    cardHandle()
    numbered()
}
// renderCard(cardNumber)


// imager
function cardHandle(){
    let cardItem = document.querySelectorAll('.card_item');
    
    cardItem.forEach((card) =>{
        let imager = card.querySelector('.imager')
        imager.addEventListener('click', () => {
            let imager_btn = card.querySelector('.imager_btn');
            imager_btn.classList.toggle('open_imager_btn');
        });

        let deletaBtn = card.querySelector('.delete_card')
        deletaBtn.addEventListener('click', ()=>{
            card.remove()
            cardNumber--
            numbered()
        })
    })
}

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