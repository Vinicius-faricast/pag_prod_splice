const carousel = document.querySelector('.group-acessorys');
const itens = document.querySelectorAll('.item');
const btnNext = document.querySelector('[data-js="btn-next"]');
const btnPrev = document.querySelector('[data-js="btn-prev"]');
const itemWidth = itens[0].offsetWidth;
const visibleItens = 5;
let currentIndex = 0;

const upgradeCarousel = () => {
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

btnNext.addEventListener('click', () =>{

    if(currentIndex < itens.length - visibleItens){
        currentIndex++;
        upgradeCarousel();
    }
})

btnPrev.addEventListener('click', () => {

    if(currentIndex > 0){
        currentIndex--;
        upgradeCarousel();
    }
})
