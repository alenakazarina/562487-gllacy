
var firstRange = document.querySelector('[type=range].first');
document.documentElement.classList.add('js');
firstRange.addEventListener('input', function () {
	firstRange.style.setProperty('--val', +firstRange.value);
}, false);

var secondRange = document.querySelector('[type=range].second');
document.documentElement.classList.add('js');
secondRange.addEventListener('input', function () {
	secondRange.style.setProperty('--val', +secondRange.value);
}, false);

function outputRange() {
  var firstRange = document.querySelector('[type=range].first');
  var secondRange = document.querySelector('[type=range].second');
  var firstOutput = document.getElementById('firstOutput');
firstOutput.value = 240 - parseInt(firstRange.value);
  var secondOutput = document.getElementById('secondOutput');
secondOutput.value = parseInt(secondRange.value) + 250;  
}


