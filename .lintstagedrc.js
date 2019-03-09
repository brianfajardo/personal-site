module.exports = {
  "*.scss": "stylelint --syntax=scss",
  "*.{js,html,scss,md}": ["prettier --write", "git add"]
};
