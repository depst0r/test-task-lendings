window.addEventListener('DOMContentLoaded', () => {
    const replaceDoctorPhoto = () => {
    const doctorImage = document.querySelector('img[src="assets/content-1.jpg"]')
    if (doctorImage) {
        doctorImage.src = '/images/Omar Abd al-Kafi/doc1.jpg'
    }
}

const replaceDoctor = () => {
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
        if (element.textContent.includes('إيمان حسن نديم') || element.textContent.includes('البروفيسور إيمان') || element.textContent.includes('الاستاذ ايمان')) {
            element.innerHTML = element.innerHTML.replace(/إيمان حسن نديم/gi, 'عمر عبد الكافي');
            element.innerHTML = element.innerHTML.replace(/البروفيسور إيمان/gi, 'البروفيسور عمر');
            element.innerHTML = element.innerHTML.replace(/الاستاذ ايمان/gi, 'الاستاذ عمر');
        }
    })
}

const replaceCountries = () => {
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
        if (element.textContent.includes('العراق') || element.textContent.includes('العراقية') || element.textContent.includes('العراقيين')) {
            element.innerHTML = element.innerHTML.replace(/العراق/gi, 'ТУНИС');
            element.innerHTML = element.innerHTML.replace(/العراقية/gi, 'ТУНИС');
            element.innerHTML = element.innerHTML.replace(/العراقيين/gi, 'ТУНИС');
        }
    })
}


const replaceProduct = () => {

    const elements = document.querySelectorAll('*')
    elements.forEach(element => {
        if (element.textContent.includes('Alic')) {
            element.innerHTML = element.innerHTML.replace(/Alic/gi, 'Bionica');
        }
    })
    

    const productImages = document.querySelectorAll('img.prod_img')
    productImages.forEach(img => {
        img.src = '/images/Bionica/prod.png'
    })
    
}


const removeRoulette = () => {
    const rouletteBlock = document.querySelector('.spin-wrapper')
    const orderBlock = document.querySelector('.order_block')
    const rouletteTimer = document.querySelector('.left_count')
    
    if (rouletteBlock && orderBlock && rouletteTimer) {
        rouletteBlock.style.display = 'none'
        orderBlock.style.display = 'block'
        rouletteTimer.style.display = 'none'
        
    }
}

    replaceDoctor()
    replaceDoctorPhoto()
    replaceCountries()
    replaceProduct()
    removeRoulette()
})