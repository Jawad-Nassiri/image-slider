const nextImageBtn = document.querySelector('.next')
const prevImageBtn = document.querySelector('.prev')
const imgBoxes = document.querySelectorAll('.carousel-image')
const paginationDots = document.querySelectorAll('.pagination-dot')



let currentIndex = 0


function nextImageHandler() {
    currentIndex++
                        
    if(currentIndex > imgBoxes.length - 1) {
        currentIndex = 0
    }

    toggleImgActive()

    togglePaginationActive()

}



function previousImageHandler() {
    currentIndex--
                        
    if(currentIndex < 0) {
        currentIndex = imgBoxes.length - 1
    }


    toggleImgActive()

    togglePaginationActive()

}



function toggleImgActive() {
    const activeImage = document.querySelector('.carousel-image.active')

    activeImage.classList.remove('active')

    imgBoxes[currentIndex].classList.add('active')

}


function togglePaginationActive() {

    const activePagination = document.querySelector('.pagination-dot.active')

    activePagination.classList.remove('active')

    paginationDots[currentIndex].classList.add('active')

}


paginationDots.forEach((paginationDot, index) => {

    paginationDot.addEventListener('click', () => {

        currentIndex = index;

        const activePagination = document.querySelector('.pagination-dot.active')
        activePagination.classList.remove('active')

        paginationDot.classList.add('active')


        const activeImage = document.querySelector('.carousel-image.active')
        activeImage.classList.remove('active')

        imgBoxes[index].classList.add('active')
    })
})



nextImageBtn.addEventListener('click', nextImageHandler)
prevImageBtn.addEventListener('click', previousImageHandler)