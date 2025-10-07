# Документация к тестовым заданиям

Тестовое задание расчитано именно на проверку ваших навыков верстки и для этой проверки
вам даны 5 разные лендингов, которые необходимо будет изменить / обновить по ТЗ.

Эти ТЗ максимально приближены к реальным задачам, которые вы будете встречать на вакансии.

Для вашего удобства ниже приведены списки с готовыми скриптами и формами для быстрой вставки на лендинг.

## Задачи

Все лендинги должны соответствовать следующему списку базовых требований:

- Корректно отображаются на телефонах
- При клики на какие-либо ссылки - пользователя не редеректит на другие страницы, а скролит к форме заказа
- Обязательное наличие маски для номера телефона
- Относительно быстрая загрузка страницы при медленном интернете

Так же все фото, которые вам могут понадобиться во время выполнения работы вы можете найти в папке */images*.

- [Задание к лендингу №1](task_1/task_1.md)
- [Задание к лендингу №2](task_2/task_2.md)
- [Задание к лендингу №3](task_3/task_3.md)
- [Задание к лендингу №4](task_4/task_4.md)
- [Задание к лендингу №5](task_5/task_5.md)

## Скрипты

Стандартные скрипты, которые будут нужны для работы лендинга.

### Динамические даты

```html
<script>
function dtime_nums(offset) {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    document.write(date.toLocaleDateString());
}
</script>
```

Для использования вставляем следующий код в то место, где нужно вывести дату.

```html
<script>dtime_nums(0)</script>
```

вместо 0 можно ставить любое отклонение от текущей даты в днях.

Например, если установить -1, то будет выведена дата вчерашнего дня.

### Скролл к форме

Скрип для плавного скролла к форме.

Вешает на все ссылки собитие клика, чтобы по нажатию пользователя скролило к форме без перехода или перезагрузки страницы.

Для работы нужно указать id блока, к которому будет скролить ссылки в переменной **target**.

Скрипт вставляется в конец тега `<body>`.

```html
<script>
    const target = 'form' // Здесь указыватся id блока, к которому будет скролить ссылки с пустым href

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
</script>
```

### Маска для номера телефона

Скрипт с маской для номера телефона с автоматической настройкой под любую страну.

Нужную страну нужно указать в переменной **phoneCountry** в формате **ISO**.

Скрипт вставляется в конец тега `<body>`.

```html
<script src="https://cdn.jsdelivr.net/npm/intl-tel-input@25.11.2/build/js/intlTelInput.min.js"></script>
<script>
    const phoneCountry = "RU"

    const inputs = document.querySelectorAll('input[name="phone"]')
    for (let i = 0; i < inputs.length; i++) {
        const phoneInput = inputs[i]
        phoneInput.placeholder = ''
        const intlTelInput = window.intlTelInput(phoneInput, {
            initialCountry: phoneCountry,
            allowDropdown: false,
            placeholderNumberType: 'MOBILE',
            nationalMode: false,
            formatAsYouType: true,
            loadUtils: () => import("https://cdn.jsdelivr.net/npm/intl-tel-input@25.11.2/build/js/utils.js"),
        });
        phoneInput.style.paddingLeft = 'revert-layer'
        phoneInput.addEventListener('focus', () => {
            const data = intlTelInput.getSelectedCountryData()
            if (phoneInput.value.length === 0) {
                phoneInput.value = "+" + data.dialCode
            }
        })
    }
</script>
```

## Формы

Готовые шаблоны форм для быстрой вставки на лендинг.

### Форма 1

```html
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
<style>.simple_form .simple_form__button,.simple_form .simple_form__input{display:block;width:100%;padding:15px;outline:0;transition:.3s ease-out}.simple_form{max-width:360px;margin:30px auto;box-sizing:border-box}.simple_form *{box-sizing:border-box;margin:0}.simple_form .simple_form__product{text-align:center}.simple_form .simple_form__product img{max-height:300px;max-width:300px;margin:0 auto;}.simple_form .simple_form__product p.old_price{padding:0!important;text-align:center!important;font-size:20px;color:red;text-decoration:line-through}.simple_form .simple_form__product p.new_price{padding:0!important;text-align:center!important;font-size:32px;color:green;text-decoration:underline;font-weight:700}.simple_form form{width:100%;margin-top:30px}.simple_form .simple_form__label {width: 100%}.simple_form .simple_form__label b{font-weight:700}.simple_form .simple_form__input{font-size:16px;color:#757575;border:1px solid #ccc;border-radius:5px;background:#fff;margin-bottom:20px}.simple_form .simple_form__input:focus{border-color:#80bcb0;box-shadow:0 0 0 3px rgba(187,242,231,.4)}.simple_form .simple_form__button{margin-top:20px;border:none;font-weight:700;font-size:21px;text-align:center;text-transform:uppercase;color:#fff;background-color:#2d947e;border-radius:5px;cursor:pointer}.simple_form .simple_form__button:hover{background-color:#bd2c48}</style>
```

### Форма 2

```html

<div class="timer_form" id="helper_form">
    <div class="timer_form__product">
        <img src="prod.png">
    </div>
    <div class="time-block">
        <h1 class="time-title">Discount ends in:</h1>
        <div class="time-remain simple_timer">
            <div class="time-remain-items">
                <span class="number hours">03</span>
                <span class="time-text">Hours</span>
            </div>
            <div class="time-dots">:</div>
            <div class="time-remain-items">
                <span class="number minutes">44</span>
                <span class="time-text">Minutes</span>
            </div>
            <div class="time-dots">:</div>
            <div class="time-remain-items">
                <span class="number seconds">28</span>
                <span class="time-text">Seconds</span>
            </div>
        </div>
    </div>
    <div class="price">
        <div class="old_price price_value">
            <span class="price_text">Old price:</span>
            <span class="old_price-value">$78</span>
        </div>
        <div class="new_price price_value">
            <span class="price_text">New price:</span>
            <span class="new_price-value">$39</span>
        </div>
    </div>
    <form action="order.php" method="POST">
        
        <label class="timer_form__label">
            <span> Name </span>
            <input class="timer_form__input" name="name" placeholder="" required type="text">
        </label>
        <label class="timer_form__label">
            <span> Phone number </span>
            <input class="timer_form__input" name="phone" placeholder="" required type="tel" value="">
        </label>
        <button class="timer_form__button" type="submit"> Order </button>
    </form>
    <p class="pay_after_receive">You pay for the order only after receiving it</p>
</div>
<style>.timer_form{max-width:360px;margin:30px auto;box-sizing:border-box;text-align:center;color:#808285}.timer_form *{box-sizing:border-box;margin:0}.timer_form .timer_form__product{text-align:center}.timer_form .timer_form__product img{max-height:300px;max-width:300px;margin: 0 auto;}.timer_form .time-block .time-title{text-align:center;border:0;font-weight:300;font-size:26px;line-height:1.2;overflow-wrap:break-word;margin-bottom:15px}.timer_form .time-block .time-remain{display:flex;justify-content:center;align-items:center;width:100%;margin:0 auto;font-weight:300;text-transform:uppercase;color:#f30010}.timer_form .time-block .time-remain .time-remain-items{position:relative;display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:0 14px;font-size:32px}.timer_form .time-block .time-remain .time-remain-items .number{line-height:60px}.timer_form .time-block .time-remain .time-text{font-size:10px;font-weight:700}.timer_form .time-block .time-remain .time-dots{font-size:32px}.timer_form .price{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:20px;margin-top:30px;gap:20px}.timer_form .price .price_value{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:32px}.timer_form .price .price_value .price_text{font-size:12px;margin-bottom:6px}.timer_form .price .price_value .old_price-value{text-decoration:line-through}.timer_form .price .price_value .new_price-value{color:red}.timer_form form{width:100%;margin-top:20px}.timer_form .timer_form__label{width:100%}.timer_form .timer_form__label span{font-weight:300;line-height:30px;font-size:16px}.timer_form .timer_form__input{display:block;width:100%;padding:12px;font-size:16px;color:#666;border:1px solid #eaeaea;border-radius:2px;background:#fafafa;transition:.3s ease-out;outline:0;margin-bottom:20px}.timer_form .timer_form__input:focus{border-color:#80bcb0;box-shadow:0 0 0 3px rgba(187,242,231,.4)}.timer_form .timer_form__button{display:block;width:100%;margin-top:20px;padding:15px;border:none;font-weight:700;font-size:21px;text-align:center;text-transform:uppercase;color:#fff;background-color:#f30010;border-radius:5px;cursor:pointer;outline:0;transition:.3s ease-out}.timer_form .timer_form__button:hover{background-color:#bd2c48}.timer_form .pay_after_receive{margin-top:20px;font-size:16px}</style>
```
