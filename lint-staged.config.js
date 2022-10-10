module.exports = {
    // Run tsc on changes to TypeScript files
    '*.{css,scss,less}': ['stylelint --fix --cache', 'prettier --write'],
    '*.{js?(x),ts?(x),json}': ['eslint --fix --cache', 'prettier --write'],
    // Optional: disable prettier for html files (via removing next line)
    '*.{html}': ['prettier --write'],
    '*.{md}': ['markdownlint --fix **/*.md'],
};
