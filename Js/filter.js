let smalT = document.querySelector('#sous_titre')
let testo = document.getElementsByClassName('test')
let test = Array.from(testo)

for(const tests of test){
    tests.addEventListener('click', function(e){
        let ID = test.indexOf(e.target)

        switch(ID){
            case 0:
            smalT.textContent = "allo"
            break;
            case 1:
            smalT.textContent = "bye"
            break;
            case 2:
            smalT.textContent = "IDK"
            break;
        }
    })
}
