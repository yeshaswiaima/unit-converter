/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertButton=document.getElementById("convert-btn")
const valueEl=document.getElementById("value-el")
const lengthEl=document.getElementById("length-el")
const volumeEl=document.getElementById("volume-el")
const massEl=document.getElementById("mass-el")
let valueArray=[]
convertButton.addEventListener("click", convert)
valueEl.addEventListener("input",takeInput)

let value=0

function takeInput(){
    value=Number(valueEl.innerText)
}

function convert(){
    let inMeter=((1/3.281)*value).toFixed(2)
    let inFeet=(3.281*value).toFixed(2)
    let inLiter=((1/0.264)*value).toFixed(2)
    let inGallon=(0.264*value).toFixed(2)
    let inKilogram=((1/2.204)*value).toFixed(2)
    let inPound=(2.204*value).toFixed(2)
    valueArray=[`${value} meters = ${inFeet} feet | ${value} feet = ${inMeter} meters`,`${value} liters = ${inGallon} gallons | ${value} gallons = ${inLiter} liters`,`${value} kilos = ${inPound} pounds | ${value} pounds = ${inKilogram} kilos`]
    
    render()
}
function render(){
    lengthEl.innerHTML=`<p class="components-cls" id="length-el">Length(Meter/Feet)<br class="conversion-values-cls"> ${valueArray[0]}</br></p>`
     volumeEl.innerHTML=`<p class="components-cls" id="volume-el">Volume(Liters/Gallons)<br class="conversion-values-cls"> ${valueArray[1]}</br></p>`
     massEl.innerHTML=` <p class="components-cls" id="mass-el">Mass(Kilograms/Pounds)<br class="conversion-values-cls"> ${valueArray[2]}</br></p>`
}

