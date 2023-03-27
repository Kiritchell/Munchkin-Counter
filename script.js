let powerWritten = document.getElementById('power-el')
let pastPower = document.getElementById('past-power')
let scoreFromLocalStorage = JSON.parse(localStorage.getItem('Power'))
let power = scoreFromLocalStorage
let roundNumberClicks = document.getElementById('save-btn')
let count = 0

function load(){
  if (scoreFromLocalStorage >=1){
  powerWritten.innerHTML = scoreFromLocalStorage;}
  else{powerWritten.innerHTML = 0}
}

function increase(){
  power += 1
  powerWritten.innerHTML = power
  localStorage.setItem("Power", JSON.stringify(power))
}

function decrease(){
  power -= 1
  powerWritten.innerHTML = power
  localStorage.setItem("Power", JSON.stringify(power))
}

function save(){
    roundNumberClicks.onclick = function(){
    count += 1;
    pastPower.innerHTML += 'Round ' + count + '  =  ' + power + '<br>'

  }
}

function reset(){
  localStorage.clear()
  location.reload();
}
