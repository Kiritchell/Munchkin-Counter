let power = 0
let writtenPower = document.getElementById('power-el')
let saveEl = document.getElementById('save-el')

function increase(){
    power += 1
    writtenPower.innerHTML = power
}

function decrease(){
    power -= 1
    writtenPower.innerHTML = power
}

function save(){
    roundNumberClicks.onclick = function(){
      count += 1;
      console.log(count)
      pastPower.innerHTML += 'Round ' + count + '  =  ' + power + '<br>'
    }
}



