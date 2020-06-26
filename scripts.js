var langToggle = 0;
var techToggle = 0;

const lang = document.getElementById("language-wrapper");
const buttonLang = document.getElementById("language_minimize");

const tech = document.getElementById("techs-wrapper");
const buttonTech = document.getElementById("techs_minimize");

buttonLang.onclick = function() {
	if (langToggle == 0) { 
		buttonLang.innerHTML = '[+]'
		lang.classList.add("invisible");
		langToggle = 1;
		}
	else {
		buttonLang.innerHTML = '[-]'
		lang.classList.remove("invisible");
		langToggle = 0;	
		}
	};

buttonTech.onclick = function() {
	if (techToggle == 0) { 
		buttonTech.innerHTML = '[+]'
		tech.classList.add("invisible");
		techToggle = 1;
		}
	else {
		buttonTech.innerHTML = '[-]'
		tech.classList.remove("invisible");
		techToggle = 0;	
		}
	};

const bubbleCanvas = document.getElementById("bubble").getContext('2d');
let numberOfValues = 4;
const bubbleValueArray = [];
for (let i=0; i< numberOfValues; i++){
	bubbleValueArray.push(i);
}
for (let i=1; i <= bubbleValueArray.length; i++){
	bubbleCanvas.strokeStyle = 'rgba(0,0,0,1)';
	bubbleCanvas.strokeRect(i*20, 150, 20, -i*20);
	bubbleCanvas.fillStyle = 'rgba(100,100,200,1)';
	bubbleCanvas.fillRect(i*20, 150, 20, -i*20);
}
