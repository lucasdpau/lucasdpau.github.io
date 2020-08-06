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

const cheats = {'iddqd': {'index':0, 'func':toggleInvertGrayscale}, 
				'idkfa': {'index':0, 'func': toggleInvertGrayscale }, 
				'rosebud': {'index':0, 'func': gainThousandDollars }};
document.addEventListener("keydown", key_input);

function key_input(event) {
	// uses cheats object to keep track of keypresses
	// don't confuse keyboard key and object key!
	Object.keys(cheats).forEach(
		function (cheatsKey) {
	// automatically make all inputs lowercase 
			if (event.key.toLowerCase() == cheatsKey[cheats[cheatsKey]['index'] ]) {
				cheats[cheatsKey]['index']  += 1;
				if (cheats[cheatsKey]['index']  == cheatsKey.length) {
	// call the function assigned to the cheat
					cheats[cheatsKey]['func']();
					cheats[cheatsKey]['index'] = 0;
				}
			} 
			else {
				cheats[cheatsKey]['index']  = 0;
			}
		}
	);
}

function toggleInvertGrayscale() {
	const topHTMLEleClasses = document.getElementById("html").classList;
	const iddqdbarClasses = document.getElementById("iddqdbar").classList;
	if (topHTMLEleClasses.contains("iddqd")) {
		topHTMLEleClasses.remove("iddqd");
		iddqdbarClasses.add("invisible");
	} 
	else {
		topHTMLEleClasses.add("iddqd");
		iddqdbarClasses.remove("invisible");
	}
}

function gainThousandDollars() {
	
}