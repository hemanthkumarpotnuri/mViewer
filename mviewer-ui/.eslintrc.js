module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "off",
            "tab"
        ],
        "linebreak-style": [
            "off",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};