export type pageContent = 'Contact' | 'Projects' | 'Home'; 

export interface IMediumBlogPost {
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    author: string;
    thumbnail: string;
    description: string;
    enclosure: any;
    categories: Array<string>;
}

export interface IHomeData {
    languages: any;
    skills: any;
    fetchAttempted: boolean;
    posts: Array<IMediumBlogPost>
}