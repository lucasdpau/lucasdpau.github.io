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
    { name: 'React', imagePath: require('@/assets/images/react-icon.svg') },
    { name: 'TypeScript', imagePath: require('@/assets/images/ts-logo-128.svg') },
    { name: 'Git', imagePath: require('@/assets/images/git-icon.svg') },
    { name: 'Node.js', imagePath: require('@/assets/images/nodejs-icon.svg') },
    { name: 'Express', imagePath: require('@/assets/images/express-icon.svg') },
    { name: 'Django', imagePath: require('@/assets/images/django-icon.svg') },
    { name: 'Flutter', imagePath: '' },
    { name: 'SQL', imagePath: require('@/assets/images/PostgreSQL-icon.svg') },
    { name: 'Jest', imagePath: require('@/assets/images/jest-icon.svg') },
    { name: 'Firebase', imagePath: '' },
];

export const LANGUAGES: Array<ISkillsIcon> = [
    { name: 'JavaScript', imagePath: require('@/assets/images/javascript-icon.svg') },
    { name: 'Python', imagePath: require('@/assets/images/python-icon.svg') },
    { name: 'Dart', imagePath: '' },
    { name: 'HTML5', imagePath: require('@/assets/images/html5-icon.svg') },
    { name: 'CSS3', imagePath: require('@/assets/images/css-icon.svg') },
];

export const CONTACT_INFO: Array<IContactInfo> = [
    { label: 'LinkedIn', imagePath: require('@/assets/images/linkedin-icon.svg'), link: 'https://www.linkedin.com/in/lucasdpau' },
    { label: 'Github', imagePath: require('@/assets/images/github-icon.svg'), link: 'https://github.com/lucasdpau' },
    { label: 'E-Mail', imagePath: require('@/assets/images/envelope-icon.svg'), link: 'mailto:lucasdpau@gmail.com' },
];