module.exports = {
    '*.scss': 'stylelint --syntax=scss',
    '*.{html,scss,md,json}': ['prettier --write', 'git add'],
}
