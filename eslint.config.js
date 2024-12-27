module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', "plugin:security/recommended"],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    "rules": {
        "@typescript-eslint/no-explicit-any": "off",
        "security/detect-object-injection": "off",
        "no-fallthrough": "off"
    }
};