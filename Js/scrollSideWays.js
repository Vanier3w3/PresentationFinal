let bloc = document.getElementsByClassName('bloc')
let arry = Array.from(bloc)

for(const test of arry){
  document.addEventListener('wheel', function(e){
    console.log(e)
  })
}
