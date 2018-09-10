let users = {
    1: {
        id: '1',
        username: 'Robin Wieruch',
        age: 77,
        group: 'ADMIN',
        messageIds: [1],
    },
    2: {
        id: '2',
        username: 'Dave Davids',
        age: 55,
        group: 'USER',
        messageIds: [2],
    },
};

let messages = {
    1: {
        id: '1',
        text: 'Hello World',
        userId: '1',
    },
    2: {
        id: '2',
        text: 'Bye World',
        userId: '2',
    },
};

export default {
    users,
    messages,
};