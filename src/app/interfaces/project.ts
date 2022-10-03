export interface Project {
    title: string,
    description: string,
    imgPath: string[],
    tools: string,
    platform: string,
    link?: string,
    github?: {
        front?: string,
        back?: string
    }
}