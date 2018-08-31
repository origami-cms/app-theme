module.exports = {
    name: 'Theme',
    uriBase: '/theme',
    icon: {
        type: 'page',
        color: 'green'
    },

    sidemenu: true,

    pages: [{
        title: 'Pages',
        icon: 'page',
        path: '/theme/pages',
        page: 'index.html',
        scripts: ['app.min.js']
    }],

    resources: {
        "page": "./models/page"
    }
};
