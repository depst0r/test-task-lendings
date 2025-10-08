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

    replaceProductName()
    changImgUrl()
})