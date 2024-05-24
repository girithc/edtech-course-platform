export const userData = [
    {
        id: 1,
        avatar: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
        messages: [
            {
                id: 1,
                avatar: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
                name: 'AI Tool Assistant',
                message: 'Hey, Jakob',
            },
            {
                id: 2,
                avatar: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
                name: 'AI Tool Teacher',
                message: 'Hey!',
            },
            {
                id : 3,
                avatar: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
                name: 'AI Content',
                message: 'How are you?',
            },
            {
                id: 4,
                avatar: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
                name: 'AI ',
                message: 'I am good, you?',
            },
            {
                id: 5,
                avatar: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
                name: 'Jane Doe',
                message: 'I am good too!',
            },
            {
                id: 6,
                avatar: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
                name: 'Jakob Hoeg',
                message: 'That is good to hear!'
            },
            {
                id: 7,
                avatar: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
                name: 'Jane Doe',
                message: 'How has your day been so far?',
            },
            {
                id: 8,
                avatar: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
                name: 'Jakob Hoeg',
                message: 'It has been good. I went for a run this morning and then had a nice breakfast. How about you?',
            },
            {
                id: 9,
                avatar: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
                name: 'Jane Doe',
                message: 'I had a relaxing day. Just catching up on some reading.',
            }
        ],
        name: 'Jane Doe',
    },
    {
        id: 2,
        avatar: 'https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg',
        name: 'John Doe',
    },
    {
        id: 3,
        avatar: 'https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Free-File-Download.png',
        name: 'Elizabeth Smith',
    },
    {
        id: 4,
        avatar: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
        name: 'John Smith',
    }
];

export type UserData = (typeof userData)[number];

export const loggedInUserData = {
    id: 5,
    avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png',
    name: 'Jakob Hoeg',
};

export type LoggedInUserData = (typeof loggedInUserData);

export interface Message {
    id: number;
    avatar: string;
    name: string;
    message: string;
}

export interface User {
    id: number;
    avatar: string;
    messages: Message[];
    name: string;
}