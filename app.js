let celsiusInput= document.querySelector('#celsius > input')
let FahrenheitInput= document.querySelector('#fahrenheit > input')
let KelvinInput= document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button' )

function roundNumber(number){
    return Math.round(number*100)/100
}

celsiusInput.addEventListener('click',function(){
    let cTemp = parseFloat(celsiusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15
FahrenheitInput.value= roundNumber(fTemp)
KelvinInput.value = roundNumber(kTemp)
})

FahrenheitInput.addEventListener('click',function(){
    let fTemp = parseFloat(FahrenheitInput.value)
    let cTemp = (fTemp-32) * (5/9)
    let kTemp = (fTemp-32) *(5/9) +273.15
celsiusInput.value= roundNumber(cTemp)
KelvinInput.value = roundNumber(kTemp)
})

KelvinInput.addEventListener('click',function(){
    let kTemp = parseFloat(KelvinInput.value)
    let fTemp = (kTemp-273.15) *(9/5) +32
celsiusInput.value= roundNumber(fTemp)
FahrenheitInput.value = roundNumber(kTemp)
})

btn.addEventListener('click', ()=>{
    celsiusInput.value = ""
    FahrenheitInput.value = ""
    KelvinInput.value = ""
})