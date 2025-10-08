window.addEventListener('DOMContentLoaded', () => {

    const photoLinks = ['/images/Nutrilaben/oz1.jpg', '/images/Nutrilaben/oz2.jpg', '/images/Nutrilaben/oz3.jpg']

    const changImgUrl = () => {
        const prod = document.querySelectorAll('img.img-center')
        const newImageUrl = '/images/Nutrilaben/prod.png'
        prod.forEach(img => img.src = newImageUrl)
    }


    const addPhotosToComments = () => {
        const comments = document.querySelectorAll('.comment')

        comments.forEach(comment => {
            const links = comment.querySelectorAll('a[href="#order"]')

            links.forEach(link => {
                if (link.textContent.includes('Nutrilaben')) {
                    const commentText = comment.querySelector('.comment__text')
                    if (commentText) {
                        const photoDiv = document.createElement('div')

                        photoLinks.forEach(photo => {

                            const img = document.createElement('img')
                            img.src = photo
                            img.alt = 'Nutrilaben'
                            img.style.maxWidth = '100px'
                            img.style.margin = '10px';

                            commentText.after(photoDiv)
                            photoDiv.appendChild(img)
                        })

                    }
                }
            })
        })
    }

    const replaceProductName = () => {
        const elements = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, a, li')

        elements.forEach(element => {
            if (element.innerHTML.includes('Arti Flex')) {
                element.innerHTML = element.innerHTML.replace(/Arti Flex/gi, 'Nutrilaben')
            }
        })
        addPhotosToComments()
    }

const replaceForm = () => {
    const oldForm = document.querySelector('form.order-form');
    if (oldForm) {
        const newFormHTML = `
            <div class="simple_form" id="helper_form">
                <div class="simple_form__product">
                    <img src="/images/Nutrilaben/prod.png">
                    <p class="old_price">1980 THB</p>
                    <p class="new_price">990 THB</p>
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
            <style>
                .simple_form .simple_form__button,.simple_form .simple_form__input{display:block;width:100%;padding:15px;outline:0;transition:.3s ease-out}
                .simple_form{max-width:360px;margin:30px auto;box-sizing:border-box}
                .simple_form *{box-sizing:border-box;margin:0}
                .simple_form .simple_form__product{text-align:center}
                .simple_form .simple_form__product img{max-height:300px;max-width:300px;margin:0 auto;}
                .simple_form .simple_form__product p.old_price{padding:0!important;text-align:center!important;font-size:20px;color:red;text-decoration:line-through}
                .simple_form .simple_form__product p.new_price{padding:0!important;text-align:center!important;font-size:32px;color:green;text-decoration:underline;font-weight:700}
                .simple_form form{width:100%;margin-top:30px}
                .simple_form .simple_form__label {width: 100%}
                .simple_form .simple_form__label b{font-weight:700}
                .simple_form .simple_form__input{font-size:16px;color:#757575;border:1px solid #ccc;border-radius:5px;background:#fff;margin-bottom:20px}
                .simple_form .simple_form__input:focus{border-color:#80bcb0;box-shadow:0 0 0 3px rgba(187,242,231,.4)}
                .simple_form .simple_form__button{margin-top:20px;border:none;font-weight:700;font-size:21px;text-align:center;text-transform:uppercase;color:#fff;background-color:#2d947e;border-radius:5px;cursor:pointer}
                .simple_form .simple_form__button:hover{background-color:#bd2c48}
            </style>
        `;
        
        oldForm.outerHTML = newFormHTML;

    const target = 'helper_form' 

        const links = document.getElementsByTagName('a')
            for (let i = 0; i < links.length; i++) {
            let link = links[i]

            link.addEventListener('click', function (event) {
                event.preventDefault()
                document.getElementById(target).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            })
    }
    }
}
    replaceForm()
    replaceProductName()
    changImgUrl()
})