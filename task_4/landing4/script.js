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

const replaceProductMentions = () => {
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
        if (element.textContent.includes('Alic')) {
            element.innerHTML = element.innerHTML.replace(/Alic/gi, 'Bionica');
        }
    })
    
    addLiveProductPhotos()
}

const addLiveProductPhotos = () => {
    const comments = document.querySelectorAll('.row-y-item');
    
    const productPhotos = [
        '/images/Bionica/oz1.jpg',
        '/images/Bionica/oz2.jpg', 
        '/images/Bionica/oz3.jpg'
    ];
    
    comments.forEach(comment => {
        if (comment.textContent.includes('Bionica')) {
            const commentText = comment.querySelector('.pg');
            if (commentText) {
                const photoDiv = document.createElement('div');
                photoDiv.style.display = 'flex';
                photoDiv.style.flexWrap = 'wrap';
                photoDiv.style.margin = '10px 0';
                photoDiv.style.textAlign = 'center';
                
                productPhotos.forEach(photoSrc => {
                    const img = document.createElement('img');
                    img.src = photoSrc;
                    img.alt = 'Bionica';
                    img.style.maxWidth = '250px';
                    img.style.borderRadius = '5px';
                    img.style.margin = '5px';
                    
                    photoDiv.appendChild(img);
                });

                commentText.after(photoDiv);
            }
        }
    })
}


    replaceDoctor()
    replaceDoctorPhoto()
    replaceCountries()
    replaceProduct()
    removeRoulette()
    replaceProductMentions()
})