export interface License {
    text: string;
}

export interface Intro {
    show: boolean;
    name: string;
    avatar: string;
    tagline: string;
    location: string;
    quote: string;
}

export interface About {
    show: boolean;
    label: string;
    value: string;
}

export interface Resume {
    show: boolean;
    label: string;
    url: string;
    download: string;
}

export interface Email {
    address: string;
    url: string;
}

export interface Contact {
    show: boolean;
    label: string;
}

export interface Link {
    label: string;
    url: string;
    icon: string;
}

export interface Links {
    label: string;
    values: Link[];
}

export interface SkillCategory {
    category: string;
    skills: string[];
}

export interface Skills {
    show: boolean;
    label: string;
    values: SkillCategory[];
}

export interface Experience {
    workplace: string;
    website: string;
    designation: string;
    start: string;
    end: string;
    duration: string;
    responsibilities: string[];
    shift: string;
    nature: string;
    location: string;
}

export interface Experiences {
    show: boolean;
    label: string;
    values: Experience[];
}

export interface Education {
    institute: string;
    degree: string;
    result: string;
    activities: string[];
    start: string;
    end: string;
    website: string;
    location: string;
}

export interface Educations {
    show: boolean;
    label: string;
    values: Education[];
}

export interface Research {
    title: string;
    authors: string;
    conference: string;
    year: string;
    abstract: string;
    URL: string;
}

export interface Researches {
    show: boolean;
    label: string;
    values: Research[];
}

export interface Achievement {
    title: string;
    event: string;
    url: string;
}

export interface Achievements {
    show: boolean;
    label: string;
    values: Achievement[];
}

export interface PortfolioData {
    license: License;
    intro: Intro;
    about: About;
    resume: Resume;
    email: Email;
    contact: Contact;
    links: Links;
    skills: Skills;
    experiences: Experiences;
    education: Educations;
    research: Researches;
    achievements: Achievements;
}