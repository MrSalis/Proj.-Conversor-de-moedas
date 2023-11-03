const converter = document.querySelector(".convert")
const mySelect = document.querySelector(".currency-select")

function convertValues() {
    const myInput = document.querySelector(".digite-o-valor").value
    const toConvert = document.querySelector(".p-01")
    const toConverted = document.querySelector(".p-02")
    console.log(mySelect.value)
    const dolarToDay = 4.95
    const euroToDay = 5.27

    if (mySelect.value == "dolar") {
        toConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(myInput / dolarToDay)
    }

    if (mySelect.value == "euro") {
        toConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(myInput / euroToDay)
    }

    toConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(myInput)

}

function changeCurrency(){
console.log("mudou de moeda")
}

mySelect.addEventListener("change", changeCurrency)
converter.addEventListener("click", convertValues)