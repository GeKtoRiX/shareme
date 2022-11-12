export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        // Элемент ссылки на другой блок(документ).
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy',
        },
        {
            name: 'comment',
            title: 'Comment',
            type: 'string',
        },
    ],
};
