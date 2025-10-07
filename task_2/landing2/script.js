window.addEventListener('DOMContentLoaded', () => {
    const changImgUrl = () => {
        const prod = document.querySelectorAll('img.img-center')

        const newImageUrl = '/images/Nutrilaben/prod.png'

        prod.forEach(img => img.src = newImageUrl)
    }

    const replaceProductName = () => {
        const elements = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, a, li');

        elements.forEach(element => {
            if (element.innerHTML.includes('Arti Flex')) {
                element.innerHTML = element.innerHTML.replace(/Arti Flex/gi, 'Nutrilaben');
            }
        })
    }

    replaceProductName()
    changImgUrl()
})