const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.array.array.forEach(button => {
    button.addEventListener ("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1: -1
        const slides = button
        .closest("[data-carousel")
        .querySelector("[data-slides]")

        const active = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newindex < 0) newIndex = slide.children.length-1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active=true 
        delete active.Slide.dataset.active
    
    } )
  
})
    