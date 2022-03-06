let grid = document.getElementById('grid')
let blocs = document.querySelectorAll('.bloc')

for(const bloc of blocs){
    document.addEventListener("mousemove", function(e) {
        let posX = e.clientX - screen.width/2
        let posY = e.clientY - screen.width/2
        grid.style.backgroundPositionX = -posX / 10 + "px"
        grid.style.backgroundPositionY = -posY / 10 + "px"
        bloc.style.boxShadow = -posX / 100 + "px " + -posY / 100 + "px 20px rgba(240, 248, 255, 0.822) "
      });
}
