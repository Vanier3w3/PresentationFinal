let caroussel = document.querySelectorAll('.contenu_Galerie')
let vwp = document.querySelector('.vp_Galerie')
let progress = document.getElementById('progressBar')
let left = document.getElementById('prev')
let right = document.getElementById('next')

vwp.style.width = Array.from(caroussel).length * 100 + "%"
progress.style.width = 100 / Array.from(caroussel).length + "%"
for(const elmCaroussel of caroussel){
    let index = 0;
    let maxIndex = caroussel.length-1;
    left.addEventListener('click', function(){
        if(index > 0){
            elmCaroussel.style.transform = 'translateX(' + (index*-100 + 100) + '%)';
            progress.style.width = (index* 100/caroussel.length) + '%'
            index--
        }
        else{
            elmCaroussel.style.transform = 'translateX(' + (maxIndex*-100) + '%)';
            progress.style.width = '100%'
            index = maxIndex;
        }
    })
    
    right.addEventListener('click', function(){
        if(index < maxIndex){
            elmCaroussel.style.transform = 'translateX(' + (index*-100 -100) + '%)'
            progress.style.width = (index* 100/caroussel.length + 200/caroussel.length) + '%'
            index++
        }
        else{
            elmCaroussel.style.transform = 'translateX(0%)'
            progress.style.width = 100/caroussel.length + "%"
            index = 0
        }
    })
}