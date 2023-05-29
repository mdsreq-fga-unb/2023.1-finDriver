module.exports = {
    plugins: ['import'],
    rules: {
        'import/no-unresolved': [
            'error',
            {
                ignore: ['^./.env.js$'],
            },
        ],
    },
};