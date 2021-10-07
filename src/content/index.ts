interface ISkillsIcon {
    name: string;
    imagePath: string;
}

interface IProjects {
    name: string;
    imagePath: string;
    description: string;
    link: string;
    liveLink?: string;
}

interface IContactInfo {
    label: string;
    imagePath: string;
    link: string;
}

export const SKILLS: Array<ISkillsIcon> = [
    { name: 'Vue', imagePath: require('@/assets/images/vue-icon.svg') },
    { name: 'React', imagePath: require('@/assets/images/react-icon.svg') },
    { name: 'TypeScript', imagePath: require('@/assets/images/ts-logo-128.svg') },
    { name: 'Git', imagePath: require('@/assets/images/git-icon.svg') },
    { name: 'Node.js', imagePath: require('@/assets/images/nodejs-icon.svg') },
    { name: 'Express', imagePath: require('@/assets/images/express-icon.svg') },
    { name: 'Django', imagePath: require('@/assets/images/django-icon.svg') },
    { name: 'Flutter', imagePath: require('@/assets/images/flutter-icon.svg') },
    { name: 'SQL', imagePath: require('@/assets/images/PostgreSQL-icon.svg') },
    { name: 'Jest', imagePath: require('@/assets/images/jest-icon.svg') },
    { name: 'Firebase', imagePath: require('@/assets/images/firebase-icon.svg') },
];

export const LANGUAGES: Array<ISkillsIcon> = [
    { name: 'JavaScript', imagePath: require('@/assets/images/javascript-icon.svg') },
    { name: 'Python', imagePath: require('@/assets/images/python-icon.svg') },
    { name: 'Dart', imagePath: require('@/assets/images/dart-icon.svg') },
    { name: 'HTML5', imagePath: require('@/assets/images/html5-icon.svg') },
    { name: 'CSS3', imagePath: require('@/assets/images/css-icon.svg') },
];

export const PROJECTS: Array<IProjects> = [
    { name: 'TripCaster', link: 'https://github.com/lucasdpau/tripcaster', liveLink: 'https://tripcaster.herokuapp.com', imagePath: require('@/assets/images/tripcaster1.png'), description: 'TripCaster gathers the forecast for multiple cities onto one page. This project was how I learned React.' },
    { name: 'TwitterClone', link: 'https://github.com/lucasdpau/twitclone', imagePath: require('@/assets/images/twitclone2b.png'), description: 'Twitter clone I created to practice working with the Django framework. I learned a lot while making this, since it was a challenge getting all the little pieces of the app working together.' },
];

export const CONTACT_INFO: Array<IContactInfo> = [
    { label: 'LinkedIn', imagePath: require('@/assets/images/linkedin-icon.svg'), link: 'https://www.linkedin.com/in/lucasdpau' },
    { label: 'Github', imagePath: require('@/assets/images/github-icon.svg'), link: 'https://github.com/lucasdpau' },
    { label: 'E-Mail', imagePath: require('@/assets/images/envelope-icon.svg'), link: 'mailto:lucasdpau@gmail.com' },
];

export const MEDIUM_JSON_FEED = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40lucasdpau";