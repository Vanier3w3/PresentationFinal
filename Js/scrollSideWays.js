let test =  document.querySelector('.explo_VP')
let contents = document.querySelectorAll('.explo_VP>ul')
let contentsArray = Array.from(contents)
console.log(test)
  document.addEventListener('wheel', function(e){
    test.scrollLeft += e.deltaY
  })

for(const content of contentsArray){
  let childs = content.children
  let childsArray = Array.from(childs)
  content.style.width = 100*childsArray.length + "%"

  // for(const child of childsArray){
  //   document.addEventListener('wheel', function(e){
  //     child.scrollLeft += e.deltaY
  //     console.log("...")
  //   })
  // }
}
