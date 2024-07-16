var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import Globals from 'globals';
import PluginJs from '@eslint/js';
import TsEslint from 'typescript-eslint';
var ignoreFiles = [
    '**/node_modules/*',
    '**/dist/*',
    '**/dist-*/*',
    '**/tests/**/*.js',
    '**/scripts/**/*.js',
    '**/tmp/*',
    '**/bin/*'
];
var funcsAndBlocks = [
    'function',
    'expression',
    'block-like',
    'multiline-expression',
    'multiline-block-like'
];
var varsAndSuch = [
    'const',
    'let',
    'var',
    'multiline-const',
    'multiline-let',
    'multiline-var',
];
var isTrue = function (val) { return val === true || val === undefined; };
var makeConfig = function (_a) {
    var _b = _a.files, files = _b === void 0 ? [] : _b, _c = _a.ignore, ignore = _c === void 0 ? [] : _c, _d = _a.merge, merge = _d === void 0 ? {} : _d, _e = _a.globals, globals = _e === void 0 ? {} : _e, _f = _a.extraRules, extraRules = _f === void 0 ? {} : _f;
    return __spreadArray(__spreadArray([
        {
            files: isTrue(merge === null || merge === void 0 ? void 0 : merge.files) ? __spreadArray(['**/*.{ts}'], files, true) : files,
        },
        {
            ignores: isTrue(merge === null || merge === void 0 ? void 0 : merge.ignore) ? ignoreFiles.concat(ignore) : ignore,
        },
        {
            languageOptions: {
                globals: __assign(__assign(__assign({}, Globals.browser), Globals.node), globals)
            }
        },
        PluginJs.configs.recommended
    ], TsEslint.configs.recommended, true), [
        {
            rules: __assign({ '@typescript-eslint/no-unused-vars': 'warn', '@typescript-eslint/no-namespace': 'off', 'quotes': ['error', 'single', {
                        allowTemplateLiterals: true,
                        avoidEscape: true,
                    }], 'object-curly-spacing': ['error', 'always'], 'comma-spacing': ['error', { before: false, after: true }], 'keyword-spacing': ['error', { before: true, after: true }], 'space-unary-ops': 'error', 'space-infix-ops': 'error', 'comma-style': ['error', 'last'], 'operator-linebreak': ['error', 'after'], 'multiline-ternary': ['error', 'always-multiline'], 'space-before-blocks': 'error', 'space-in-parens': ['error', 'never'], 'padding-line-between-statements': [
                    'error',
                    {
                        blankLine: 'always',
                        prev: '*',
                        next: [
                            'return',
                            'continue',
                            'break',
                            'default',
                            'case',
                            'function',
                            'class',
                            'throw',
                            'try',
                        ]
                    },
                    { blankLine: 'always', prev: funcsAndBlocks, next: '*' },
                    { blankLine: 'always', prev: '*', next: funcsAndBlocks, },
                    { blankLine: 'always', prev: varsAndSuch, next: '*' },
                    { blankLine: 'always', prev: '*', next: varsAndSuch, },
                    { blankLine: 'any', prev: varsAndSuch, next: varsAndSuch, },
                    { blankLine: 'any', prev: 'expression', next: 'expression', },
                ], '@typescript-eslint/no-this-alias': ['error', {
                        allowedNames: ['self']
                    }] }, extraRules)
        }
    ], false);
};
export default makeConfig;
