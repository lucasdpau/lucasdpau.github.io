export type pageContent = 'Projects' | 'Home'; 

export interface IAppData {
    pageContent: pageContent;
}

export interface IMediumBlogPost {
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    author: string;
    thumbnail: string;
    description: string;
    enclosure: unknown;
    categories: Array<string>;
}

export interface ISkillsIcon {
    name: string;
    imagePath: string;
}

export interface IProjects extends ISkillsIcon {
    description: string;
    link: string;
    liveLink?: string;
}

export interface IContactInfo extends ISkillsIcon {
    link: string;
}

export interface IHomeData {
    languages: Array<ISkillsIcon>;
    skills: Array<ISkillsIcon>;
    fetchAttempted: boolean;
    posts: Array<IMediumBlogPost>
}