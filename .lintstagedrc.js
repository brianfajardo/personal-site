module.exports = {
    '*.scss':
        'stylelint "scss/*.scss" --config "./.stylelintrc.json" --syntax=scss --fix',
    '*.{html,scss,md,json}': ['prettier --write', 'git add'],
}
