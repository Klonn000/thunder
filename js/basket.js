const AddBtn = document.querySelectorAll('.btn_rooms_one');
const basketItem = document.querySelector('.modal_basket_container');
const basket = document.querySelector('.basket');
const basketQuantity = document.querySelector('.basket_quantity');
const fullPrice = document.querySelector('.full_price');
let price = 0;


const randomId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpace = (str) => {
    return str.replace(/\s/g, '');
};

const plusFullPrice = (currentPrice) => {
    return price += currentPrice;
};

const minusFullPrice = (currentPrice) => {
    return price -= currentPrice;
};

const printFullPrice = () => {
    fullPrice.textContent = `${normalPrice(price)} ₽`;
};

const printQuantity = () => {
    let length = basketItem.querySelector('.modal_basket_hall').children.length;
    basketQuantity.textContent = length;
    length > 0 ? basket.classList.add('active') : basket.classList.remove('active');
}

const normalPrice = (str) => {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

const generateCartProduct = (img, title, price, id) => {
    return `
    <div class="modal_basket_hall">
                    <div class="modal_basket_content" data-id="${id}">
                        <img src="${img}">
                        <p>${title}</p>
                    <div class="modal_basket_price">
                        <p>${price} ₽</p>
                    </div>
                    </div>
                </div>
    `
};

AddBtn.forEach(el => {
    el.closest('.rooms_item').setAttribute('data-id', randomId());
    el.addEventListener('click', (e) => {
    let self = e.currentTarget;
    let parent = self.closest('.rooms_item'); 
    let id = parent.dataset.id;
    let img = parent.querySelector('.rooms_img img').getAttribute('src');
    let title = parent.querySelector('.rooms_text p').textContent;
    let priceNumber = parseInt(priceWithoutSpace(parent.querySelector('.rooms_text h3').textContent));

    plusFullPrice(priceNumber);
    printFullPrice();
    basketItem.querySelector('.modal_basket_hall').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceNumber, id));
    printQuantity();
    self.disabled = true;
    });
});

// document.querySelector('.basket_form').addEventListener('submit', (e) => {
//     e.preventDefault;
//     let self = e.currentTarget;
//     let formData = new FormData(self);
//     let username = self.querySelector('[name="Имя"]').value;
//     let userPhone = self.querySelector('[name="Телефон"]').value;
//     let dataSeans = self.querySelector('[name="Дата"]').value;
//     let timeSeans = self.querySelector('[name="Время"]').value;
//     let userEmail = self.querySelector('[name="Емаил"]').value;
//     formData.append('Имя', username);
//     formData.append('Телефон', userPhone);
//     formData.append('Дата', dataSeans);
//     formData.append('Время', timeSeans);
//     formData.append('Емаил', userEmail);

//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if(xhr.readyState === 5) {
//             if(xhr.status === 200) {
//                 console.log('Отправлено');
//             }
//         }
//     }
    
//     xhr.open('POST', 'telegram.php', true);
//     xhr.send(formData);

//     self.reset();
// });