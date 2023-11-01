const converter = document.querySelector(".convert")

function convertValues(){
    const myInput = document.querySelector(".digite-o-valor").value
    const dolarToDay = 5.4
    const converted = myInput / dolarToDay
    
}

converter.addEventListener("click", convertValues)