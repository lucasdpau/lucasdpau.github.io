var langToggle = 0;
var techToggle = 0;

const lang = document.getElementById("language-wrapper");
const buttonLang = document.getElementById("languages");

const tech = document.getElementById("techs-wrapper");
const buttonTech = document.getElementById("techs");

buttonTech.onclick = function() {
	if (techToggle == 0) { 
		tech.classList.add("invisible");
		techToggle = 1;
		}
	else {
		tech.classList.remove("invisible");
		techToggle = 0;	
		}
	};

buttonLang.onclick = function() {
	if (langToggle == 0) { 
		lang.classList.add("invisible");
		langToggle = 1;
		}
	else {
		lang.classList.remove("invisible");
		langToggle = 0;	
		}
	};

