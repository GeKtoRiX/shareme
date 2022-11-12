// Блок в Content.
export default {
    // Имя блока(в строке браузера).
    name: 'pin',
    // Имя блока в колонке Content.
    title: 'Pin',
    // Тип блока.
    type: 'document',
    // Блок элементов.
    fields: [
        // Элемент строки.
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        // Элемент строки.
        {
            name: 'about',
            title: 'About',
            type: 'string',
        },
        // Элемент ссылки.
        {
            name: 'destination',
            title: 'Destination',
            type: 'url',
        },
        // Элемент строки.
        {
            name: 'category',
            title: 'Category',
            type: 'string',
        },
        // Элемент изображения.
        {
            name: 'image',
            title: 'Image ',
            type: 'image',
            // Дополнительные свойства.
            options: {
                // Hotspot позволяет быстро адаптировать изображения к различным соотношениям сторон во время отображения.
                hotspot: true,
            },
        },
        // Элемент строки.
        {
            name: 'userId',
            title: 'UserId',
            type: 'string',
        },
        // Элемент ссылки на другой блок(документ).
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy',
        },
        // Элемент массива, привязанный к элементу.
        {
            name: 'save',
            title: 'Save',
            type: 'array',
            of: [{ type: 'save' }],
        },
        // Элемент массива, привязанный к элементу.
        {
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of: [{ type: 'comment' }],
        },
    ],
};
