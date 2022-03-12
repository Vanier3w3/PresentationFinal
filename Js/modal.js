let pictures = Array.from(document.querySelectorAll('li>div>img'))
let modal = document.querySelector('.modal')
let copys = Array.from(document.querySelectorAll('.modal>img'))

for(const picture of pictures){
    
    picture.addEventListener('click', function(e){
        let id = e.target.id
        
        let copy = document.querySelector('#copy'+ id)
        copy.style.display = 'initial'
        copy.parentElement.style.display = 'flex'
    })
}

document.addEventListener('keydown', function(e){
    if(e.code == 'Escape'){
        copys.forEach(Element => Element.style.display = 'none')
        modal.style.display = 'none'
    }
})

