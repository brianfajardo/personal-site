module.exports = {
  "*.scss": "stylelint --syntax=scss",
  "*.{js,html,scss,md,json}": ["prettier --write", "git add"]
};
