let title = document.querySelector('#sous_titre')
let chx =  Array.from(document.querySelectorAll('.cont_ST>ul>li'))
let cntnts =Array.from(document.querySelectorAll('.explo_VP>ul'))

title.textContent = 'Base'
chx[0].style.display = 'none'
cntnts.forEach(element => element.style.display = 'none')
cntnts[0].style.display = 'flex'


for(const choice of chx){
    choice.addEventListener('click', function(e){
        chx.forEach(element => element.style.display = 'list-item')
        cntnts.forEach(element => element.style.display = 'none')
        let index = chx.indexOf(e.target)
        title.textContent = choice.textContent
        choice.style.display = 'none'
        cntnts[index].style.display = 'flex'
    })
}
