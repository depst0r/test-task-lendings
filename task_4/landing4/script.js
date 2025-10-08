window.addEventListener('DOMContentLoaded', () => {
    const replaceDoctorPhoto = () => {
    const doctorImage = document.querySelector('img[src="assets/content-1.jpg"]');
    if (doctorImage) {
        doctorImage.src = '/images/Omar Abd al-Kafi/doc1.jpg';
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




    replaceDoctor()
    replaceDoctorPhoto();
})