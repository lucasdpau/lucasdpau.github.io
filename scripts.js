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

const cheats = {'iddqd':0, 'idkfa':0, 'rosebud':0};
document.addEventListener("keydown", key_input);

function key_input(event) {
	// uses cheats object to keep track of keypresses
	Object.keys(cheats).forEach(
		function (key) {
	// automatically make all inputs lowercase 
			if (event.key.toLowerCase() == key[cheats[key]]) {
				cheats[key] += 1;
				if (cheats[key] == key.length) {
					console.log(key);
					cheats[key] = 0;
				}
			} 
			else {
				cheats[key] = 0;
			}
		}
	);
}