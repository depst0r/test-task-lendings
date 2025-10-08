window.addEventListener('DOMContentLoaded', () => {
    const addOrderForm = () => {
const formHTML = `
<div class="simple_form" id="helper_form">
    <div class="simple_form__product">
        <img src="prod.png">
        <p class="old_price">$78</p>
        <p class="new_price">$39</p>
    </div>
    <form action="order.php" method="POST">
        
        <label class="simple_form__label">
            <b>Name:</b>
            <input class="simple_form__input" required name="name" placeholder="" type="text">
        </label>
        <label class="simple_form__label">
            <b>Phone number:</b>
            <input class="simple_form__input" required name="phone" placeholder="" type="tel" value="">
        </label>
        <button class="simple_form__button" type="submit">Order</button>
    </form>
</div>

<style>.simple_form__button,.simple_form .simple_form__input{display:block;width:100%;padding:15px;outline:0;transition:.3s ease-out}.simple_form{max-width:360px;margin:30px auto;box-sizing:border-box}.simple_form *{box-sizing:border-box;margin:0}.simple_form .simple_form__product{text-align:center}.simple_form .simple_form__product img{max-height:300px;max-width:300px;margin:0 auto;}.simple_form .simple_form__product p.old_price{padding:0!important;text-align:center!important;font-size:20px;color:red;text-decoration:line-through}.simple_form .simple_form__product p.new_price{padding:0!important;text-align:center!important;font-size:32px;color:green;text-decoration:underline;font-weight:700}.simple_form form{width:100%;margin-top:30px}.simple_form .simple_form__label {width: 100%}.simple_form .simple_form__label b{font-weight:700}.simple_form .simple_form__input{font-size:16px;color:#757575;border:1px solid #ccc;border-radius:5px;background:#fff;margin-bottom:20px}.simple_form .simple_form__input:focus{border-color:#80bcb0;box-shadow:0 0 0 3px rgba(187,242,231,.4)}.simple_form .simple_form__button{margin-top:20px;border:none;font-weight:700;font-size:21px;text-align:center;text-transform:uppercase;color:#fff;background-color:#2d947e;border-radius:5px;cursor:pointer}.simple_form .simple_form__button:hover{background-color:#bd2c48}</style>`;
    
    const commentBlock = document.querySelector('.comment-block');
    if (commentBlock) {
        commentBlock.insertAdjacentHTML('beforebegin', formHTML);
    }
}

const makeProductClickable = () => {
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
        if (element.textContent.includes('Alic') && !element.closest('a')) {
            const html = element.innerHTML.replace(/Alic/gi, '<a href="" class="product-link" style="color: #2d947e; text-decoration: underline;">Alic</a>');
            element.innerHTML = html;
        }
    })
}


const replaceDoctor = () => {

    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
        if (element.textContent.includes('مايكل أسامة') || element.textContent.includes('دكتور أسامة') || element.textContent.includes('السيد أسامة')) {
            element.innerHTML = element.innerHTML.replace(/مايكل أسامة/gi, 'Amr Khaled');
            element.innerHTML = element.innerHTML.replace(/دكتور أسامة/gi, 'الدكتور Amr');
            element.innerHTML = element.innerHTML.replace(/السيد أسامة/gi, 'السيد Amr');
        }
    });
    
}

const replaceDoctorPhoto = () => {

    const doctorImage = document.querySelector('img[src="assets/img/image2.jpg"]');
    
    if (doctorImage) {

        doctorImage.src = '/images/Amr Khaled/doc1.jpg';

        doctorImage.width = 400;
    }
}


replaceDoctorPhoto();



const setRTLDirection = () => {
    document.body.style.direction = 'rtl';
    document.body.style.textAlign = 'right';
    
    const containers = document.querySelectorAll('.content, .article, .comment-block, .article__text, .main-content');
    containers.forEach(container => {
        container.style.direction = 'rtl';
        container.style.textAlign = 'right';
    });
}


replaceDoctor();
setRTLDirection();


makeProductClickable()


addOrderForm()
})