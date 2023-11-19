const converter = document.querySelector(".convert")
const mySelect = document.querySelector(".currency-select")
const mySelectL1 = document.querySelector(".currency-select-l1")

function convertValues() {

    const myInput = document.querySelector(".digite-o-valor").value
    const toConvert = document.querySelector(".p-01")
    const toConverted = document.querySelector(".p-02")

    const dolarToDay = 4.95
    const euroToDay = 5.27
    const libraToDay = 6.3
    const bitcoinToDay = 170.963
    
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

    if (mySelect.value == "bitcoin") {
        toConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XPT"
        }).format(myInput / bitcoinToDay)
    }

    if (mySelect.value == "libra") {
        toConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(myInput / libraToDay)
    }

    toConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(myInput)

}

function convertValues1() {

    const myInput = document.querySelector(".digite-o-valor").value
    const toConvert = document.querySelector(".p-01")
    const toConverted = document.querySelector(".p-02")

    const realToDay = 1
   
    
    if (mySelectL1.value == "real") {
        toConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(myInput * realToDay)
    }

    toConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(myInput)
 

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".dolar-euro")

    if (mySelect.value == "dolar") {
        currencyName.innerHTML = "$ Dólar americano"
        currencyImg.src = "./assets/img-dolar-usa.png"
    }

    if (mySelect.value == "euro") {
        currencyName.innerHTML = "€ Euro"
        currencyImg.src = "./assets/img-euro.png"
    }

    if (mySelect.value == "bitcoin") {
        currencyName.innerHTML = "₿ Bitcoin"
        currencyImg.src = "./assets/bitcoin 1.png"
    }

    if (mySelect.value == "libra") {
        currencyName.innerHTML = "£ Libra"
        currencyImg.src = "./assets/libra 1.png"
    }

    if (mySelect.value == "real") {
        currencyName.innerHTML = "R$ Real"
        currencyImg.src = "./assets/img-real-brasil.png"
    }

    convertValues()
}

function changeCurrencyP1() {
    const currencyNameP1 = document.getElementById("currency-name-p1")
    const currencyImgP1 = document.querySelector(".brazil")

    if (mySelectL1.value == "dolar") {
        currencyNameP1.innerHTML = "$ Dólar americano"
        currencyImgP1.src = "./assets/img-dolar-usa.png"
    }

    if (mySelectL1.value == "euro") {
        currencyNameP1.innerHTML = "€ Euro"
        currencyImgP1.src = "./assets/img-euro.png"
    }

    if (mySelectL1.value == "bitcoin") {
        currencyNameP1.innerHTML = "₿ Bitcoin"
        currencyImgP1.src = "./assets/bitcoin 1.png"
    }

    if (mySelectL1.value == "libra") {
        currencyNameP1.innerHTML = "£ Libra"
        currencyImgP1.src = "./assets/libra 1.png"
    }

    if (mySelectL1.value == "real") {
        currencyNameP1.innerHTML = "R$ Real"
        currencyImgP1.src = "./assets/img-real-brasil.png"
    }

    convertValues()
}



mySelect.addEventListener("change", changeCurrency)
converter.addEventListener("click", convertValues)
mySelectL1.addEventListener("change", changeCurrencyP1)


