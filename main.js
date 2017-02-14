
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  alert("Don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var compoundInvestmentNode = document.querySelector('#compoundInvestment')
  var doubleNum = parseInt(compoundInvestmentNode.innerHTML)
  doubleNum += doubleNum
  compoundInvestmentNode.innerHTML = doubleNum
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var circleNode = document.querySelector('#circle-bw')
  if (circleNode.style.background != "black") {
  	circleNode.style.background = "black"
  }
  else {
  	circleNode.style.background = "white"
  }


})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
var blowUpNode = document.querySelector('.circle-red')
circleGrow = window.getComputedStyle(blowUpNode)
	if (parseInt(circleGrow.width) <= 320) {
		var growWidth = parseInt(circleGrow.width) * 2
		blowUpNode.style.width = growWidth + "px"
		var growHeight = parseInt(circleGrow.height) * 2
		blowUpNode.style.height = growHeight + "px"
	}
	else {
		growWidth = 40
		blowUpNode.style.width = growWidth + "px"
		growHeight = 40
		blowUpNode.style.height = growHeight + "px"
	}

})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var ulNode = document.querySelector('#remove ul')
  var liArray = ulNode.children
  	for (var i = liArray.length - 1; i >= 0; i --) {
      if(liArray[i].classList.contains('inactive')) {
        ulNode.removeChild(liArray[i])
    	}
	}
})



document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var answerBoxNode = document.querySelector('#reverse-squares .answer-box')
  var squareArray = answerBoxNode.children
  	for (var i = squareArray.length - 1; i >= 0; i --) {
  		answerBoxNode.appendChild(squareArray[i])
  	}
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var ulNode = document.querySelector('#pig-latin ul')
  var liArray = ulNode.children
  for (var i = 0; i < liArray.length; i ++) {
  		liArray[i].innerHTML = liArray[i].innerHTML.split("").reverse().join("")
  	}
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
})