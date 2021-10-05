interface ISkillsIcon {
    name: string;
    imagePath: string;
}

interface IContactInfo {
    label: string;
    imagePath: string;
    link: string;
}

export const SKILLS: Array<ISkillsIcon> = [
    { name: 'Vue', imagePath: '' },
    { name: 'React', imagePath: '' },
    { name: 'TypeScript', imagePath: '../assets/images/ts-logo-128.svg' },
    { name: 'Git', imagePath: '' },
    { name: 'Node.js', imagePath: '' },
    { name: 'Express', imagePath: '' },
    { name: 'Django', imagePath: '' },
    { name: 'Flutter', imagePath: '' },
    { name: 'SQL', imagePath: '' },
    { name: 'Jest', imagePath: '' },
    { name: 'Firebase', imagePath: '' },
];

export const LANGUAGES: Array<ISkillsIcon> = [
    { name: 'JavaScript', imagePath: '' },
    { name: 'Python', imagePath: '' },
    { name: 'Dart', imagePath: '' },
    { name: 'HTML5', imagePath: '' },
    { name: 'CSS3', imagePath: '' },
];

export const CONTACT_INFO: Array<IContactInfo> = [
    { label: 'LinkedIn', imagePath: '', link: '' },
    { label: 'Github', imagePath: '', link: '' },
    { label: 'E-Mail', imagePath: '', link: '' },
];