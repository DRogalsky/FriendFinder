friendsArray = [
    {
        name: 'dan',
        picture: 'data:image/jpeg;base64,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',
        answers: ['2', '3', '5', '4', '2', '3', '5', '6', '3', '3']
    },
    {
        name: 'dave',
        picture: 'https://dcp.org/wp-content/uploads/2018/11/person-placeholder-e1543539209738.jpg',
        answers: ['4', '2', '1', '3', '5', '1', '2', '4', '2', '1']
    },
    {
        name: 'darn',
        picture: 'https://dcp.org/wp-content/uploads/2018/11/person-placeholder-e1543539209738.jpg',
        answers: ['5', '5', '5', '4', '3', '3', '2', '1', '2', '2']
    }
];

module.exports = friendsArray;