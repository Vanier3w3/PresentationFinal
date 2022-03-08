let hovers = document.querySelectorAll('header>.nav_menu>li>a')
let bottoms = document.querySelectorAll('.bottom>.nav_menu>li')

for(const hover of hovers){
    hover.addEventListener("mouseover", function(e){
        let tagID = e.target.id
        let IDArray = Array.from(hovers).findIndex(elem => elem.id == tagID)
        let bot = Array.from(bottoms)[IDArray]
        switch(IDArray){
            case 0:
                bot.style.backgroundColor = "#00594b"
            break;
            case 1:
                bot.style.backgroundColor = "#89aa72"
            break;
            case 2:
                bot.style.backgroundColor = "#b94528"
            break;
        }

    })
    hover.addEventListener("mouseleave", function(e){
        let tagID = e.target.id
        let yo = Array.from(hovers).findIndex(elem => elem.id == tagID)
        let bot = Array.from(bottoms)[yo]
        bot.style.backgroundColor = ""
    })
}