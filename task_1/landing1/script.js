window.addEventListener('DOMContentLoaded', () => {

    const changImgUrl = () => {
        const prod = document.querySelectorAll('img.prod')

        const newImageUrl = '/images/Nutrilaben/prod.png'

        prod.forEach(img => img.src = newImageUrl)
    }

    const replaceProductName = () => {
        const elements = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, a, li');

        elements.forEach(element => {
            if (element.innerHTML.includes('Nano Slim')) {
                element.innerHTML = element.innerHTML.replace(/Nano Slim/gi, 'Nutrilaben');
            }
        })
    }

    const toggleCountry = () => {
        const elements = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, a, li')

        elements.forEach(element => {
            element.innerHTML = element.innerHTML
                .replace(/Estados Unidos/gi, 'México')
                .replace(/Israel/gi, 'México')
                .replace(/España/gi, 'México')
        })
    }


    toggleCountry()
    replaceProductName()
    changImgUrl()

})