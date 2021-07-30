const addMinimizer = (wrapperId, buttonId, isOpen) => {
	const wrapperEle = document.getElementById(wrapperId);
	const buttonEle = document.getElementById(buttonId);

	buttonEle.onclick = () => {
		if (isOpen) {
			buttonEle.innerHTML = '[+]';
			wrapperEle.classList.add('invisible');
			isOpen = false;
		} else {
			buttonEle.innerHTML = '[-]';
			wrapperEle.classList.remove('invisible');
			isOpen = true;
		}
	}
};
var langSectionIsOpen = true;
var techSectionIsOpen = true;
addMinimizer('techs-wrapper', 'techs_minimize', techSectionIsOpen);
addMinimizer('language-wrapper', 'language_minimize', langSectionIsOpen);

const toggleInvertGrayscale = () => {
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
};

const gainThousandDollars = () => {
};

const cheats = {
	'iddqd': { 'index': 0, 'func': toggleInvertGrayscale },
	'idkfa': { 'index': 0, 'func': toggleInvertGrayscale },
	'rosebud': { 'index': 0, 'func': gainThousandDollars }
};

const key_input = (event) => {
	// uses cheats object to keep track of keypresses
	Object.keys(cheats).forEach(cheatsKey => {
			// automatically make all inputs lowercase 
			if (event.key.toLowerCase() === cheatsKey[cheats[cheatsKey]['index']]) {
				cheats[cheatsKey]['index'] += 1;
				if (cheats[cheatsKey]['index'] === cheatsKey.length) {
					// call the function assigned to the cheat
					cheats[cheatsKey]['func']();
					cheats[cheatsKey]['index'] = 0;
				}
			}
			else {
				cheats[cheatsKey]['index'] = 0;
			}
		}
	);
};

document.addEventListener("keydown", key_input);

const skillsData = {
	languages: [
		{
			icon: './images/python-icon.svg',
			label: 'Python'
		},
		{
			icon: './images/javascript-icon.svg',
			label: 'JavaScript'
		},
		{
			icon: './images/html5-icon.svg',
			label: 'HTML5'
		},
		{
			icon: './images/css-icon.svg',
			label: 'CSS3'
		},
	],
	skills: [
		{
			icon: './images/git-icon.svg',
			label: 'Git'
		},
		{
			icon: './images/PostgreSQL-icon.svg',
			label: 'SQL'
		},
		{
			icon: './images/mongodb-icon.svg',
			label: 'MongoDB'
		},
		{
			icon: './images/flask-icon.svg',
			label: 'Flask'
		},
		{
			icon: './images/django-icon.svg',
			label: 'Django'
		},
		{
			icon: './images/ts-logo-128.svg',
			label: 'TypeScript'
		},
		{
			icon: './images/nodejs-icon.svg',
			label: 'Node.js'
		},
		{
			icon: './images/express-icon.svg',
			label: 'Express'
		},
		{
			icon: './images/react-icon.svg',
			label: 'React'
		},
		{
			icon: './images/aws-icon.svg',
			label: 'AWS'
		},
		{
			icon: './images/bootstrap-icon.svg',
			label: 'Bootstrap'
		},
		{
			icon: './images/jest-icon.svg',
			label: 'Jest'
		},
		{
			icon: './images/linux-icon.svg',
			label: 'Linux'
		},
		{
			icon: './images/heroku-icon.svg',
			label: 'Heroku'
		},
	]
};

const renderSkills = (skillsData, dataSection, rootId) => {
	const container = document.getElementById(rootId);

	const createHTMLElements = (skill) => {
		const skillContainer = document.createElement('div');
		skillContainer.setAttribute('class', 'skills-item');

		const iconContainer = document.createElement('div');
		iconContainer.setAttribute('class', 'skills-icon-container');

		const icon = document.createElement('img');
		var skillsClasses = 'skills-icon';
		if (skill.label === 'React') {
			skillsClasses += ' react-icon';
		}
		icon.setAttribute('class', skillsClasses);
		icon.setAttribute('src', skill.icon);

		const label = document.createElement('p');
		label.setAttribute('class', 'skills-label')
		label.textContent = skill.label;

		iconContainer.appendChild(icon);
		skillContainer.appendChild(iconContainer);
		skillContainer.appendChild(label);

		return skillContainer
	};

	skillsData[dataSection].forEach((skill) => {
		container.appendChild(createHTMLElements(skill));
	});
};

renderSkills(skillsData, 'languages', 'language-wrapper');
renderSkills(skillsData, 'skills', 'techs-wrapper');