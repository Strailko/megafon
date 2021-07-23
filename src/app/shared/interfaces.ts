export enum EntityType {
    ORGANISATION,
    INITIATIVE,
    EVENT
}

export interface Entity {
    id?: number;
    name?: string;
    date?: Date;
    description?: string;
    photo?: string;
    type?: EntityType;
    creator?: User;
    category?: string;
    members?: User[];
}

export interface User {
    id?: number;
    email?: string;
    password?: string;
    name?: string;
    surname?: string;
    bio?: string;
    avatar?: string;
}

export interface Post {
    id: number;
    creator: User;
    description: string;
    photo?: string;
    like: Number;
    comments: Comment[];
}

export interface Comment {
    id: number;
    postedBy: User;
    content: string;
}