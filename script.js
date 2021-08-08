// Calculate tip
let billInp = document.querySelector('#bill-inp')
let peopleInp = document.querySelector('#people-inp')
let billInpVal = parseInt(billInp.value)
let peopleInpVal = parseInt(peopleInp.value)
let tipAmountResult = document.querySelector('.tip-amount-result')
let totalResult= document.querySelector('.total-result')
let tip = 0.1
let tipPerson = ((billInp.value * tip) / peopleInp)
let totalPerson = (billInp.value / peopleInp.value) + tipPerson
// default
tipAmountResult.textContent = totalResult.textContent = "$0.00"

// Reset button
let resetBtn = document.querySelector('#reset-btn')
resetBtn.addEventListener('click', () => {
  if (resetBtn.classList == 'active-reset-btn') {
  tipAmountResult.textContent = totalResult.textContent = "$0.00"
  billInp.value = ""
  peopleInp.value = ""
  for (i=0; i < tipBtnsArray.length; i++){
    if (tipBtnsArray[i].classList == 'per active-btn') {
      tipBtnsArray[i].classList.remove('active-btn')
    }
  }
  resetBtn.classList.remove('active-reset-btn')
  }
})


//  calculate function
let calculate = () => {
  billInp = document.querySelector('#bill-inp')
  peopleInp = document.querySelector('#people-inp')
  billInpVal = parseInt(billInp.value)
  peopleInpVal = parseInt(peopleInp.value)
  if (billInpVal > 0 && peopleInpVal > 0) {
    tipPerson = ((billInpVal * tip) / peopleInpVal)
    totalPerson = (billInpVal / peopleInpVal) + tipPerson
    tipAmountResult.textContent = `$${Math.round(tipPerson * 100) / 100}`
    totalResult.textContent = `$${Math.round(totalPerson * 100) / 100}`
    // active resetBtn
    resetBtn.classList.add('active-reset-btn')
  } else {
    console.log("error")
  }
}


billInp.addEventListener('keyup', () => {
  calculate()
})
peopleInp.addEventListener('keyup', () => {
  calculate()
})


// Active tip buttons 
let tipBtnsArray = document.querySelectorAll('.per')
for (i=0; i < tipBtnsArray.length; i++){
  tipBtnsArray[i].setAttribute("onclick", "activeBtn(this)")
}
let activeBtn = (element) => {
  if (element.classList == 'per active-btn') {
    element.classList.remove('active-btn')
  } else {
    for (i=0; i < tipBtnsArray.length; i++){
      if (tipBtnsArray[i].classList == 'per active-btn') {
        tipBtnsArray[i].classList.remove('active-btn')
      }
    }
    element.classList.add('active-btn')
    if (element.id != 'custom')
    tip = parseInt(element.value) / 100
    calculate()
  }
}

  
// Custom tip
let customTipInp = document.querySelector('#custom')
let customTipInpVal = parseInt(customTipInp.value)

customTipInp.addEventListener('keyup', () => {
  billInp = document.querySelector('#bill-inp')
  peopleInp = document.querySelector('#people-inp')
  customTipInp = document.querySelector('#custom')
  billInpVal = parseInt(billInp.value)
  peopleInpVal = parseInt(peopleInp.value)
  customTipInpVal = parseInt(customTipInp.value)
  if (billInpVal > 0 && peopleInpVal > 0 && customTipInpVal > 0) {
    console.log(customTipInpVal)
    tip = customTipInpVal / 100
    tipPerson = ((billInpVal * tip) / peopleInpVal)
    totalPerson = (billInpVal / peopleInpVal) + tipPerson
    tipAmountResult.textContent = `$${Math.round(tipPerson * 100) / 100}`
    totalResult.textContent = `$${Math.round(totalPerson * 100) / 100}`
    // active resetBtn
    resetBtn.classList.add('active-reset-btn')
  } else {
    console.log("error")
  }
})

// set limit to price value
// set lmt to bill and ppl inp
// round price value

// input focus effect
let billInpDiv = document.querySelector('.bill-input')
billInpDiv.addEventListener('mouseenter', () => {
  billInpDiv.style.outline = "2px solid #5baaa0";
})
billInpDiv.addEventListener('mouseleave', () => {
  billInpDiv.style.outline = "";
})

let peopleInpDiv = document.querySelector('.people-input')
peopleInpDiv.addEventListener('mouseenter', () => {
  peopleInpDiv.style.outline = "2px solid #5baaa0";
})
peopleInpDiv.addEventListener('mouseleave', () => {
  peopleInpDiv.style.outline = "";
})