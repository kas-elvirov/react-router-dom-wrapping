/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint.
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
	"env": {
		"browser": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"project": "tsconfig.json",
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint",
		"@typescript-eslint/tslint"
	],
	"rules": {
		"comma-dangle": ["error", {
			"arrays": "always-multiline",
			"objects": "always-multiline",
			"imports": "always-multiline",
			"exports": "always-multiline",
			"functions": "always-multiline",
		}],
		"eol-last": ["error", "always"],
		"camelcase": 2,
		"@typescript-eslint/adjacent-overload-signatures": "error",
		/* "@typescript-eslint/array-type": [
				"error",
				{
						"default": "array"
				}
		], */
		"@typescript-eslint/ban-types": [
			"error",
			{
				"types": {
					"Object": {
						"message": "Avoid using the `Object` type. Did you mean `object`?"
					},
					"Function": {
						"message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
					},
					"Boolean": {
						"message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
					},
					"Number": {
						"message": "Avoid using the `Number` type. Did you mean `number`?"
					},
					"String": {
						"message": "Avoid using the `String` type. Did you mean `string`?"
					},
					"Symbol": {
						"message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
					}
				}
			}
		],
		"@typescript-eslint/consistent-type-assertions": "error",
		"@typescript-eslint/dot-notation": "error",
		"@typescript-eslint/explicit-member-accessibility": [
			"off",
			{
				"accessibility": "explicit"
			}
		],
		/* "@typescript-eslint/indent": [
				"error",
				"tab",
				{
						"ObjectExpression": "first",
						"FunctionDeclaration": {
								"parameters": "first"
						},
						"FunctionExpression": {
								"parameters": "first"
						}
				}
		], */
		"@typescript-eslint/member-delimiter-style": [
			"error",
			{
				"multiline": {
					"delimiter": "semi",
					"requireLast": true
				},
				"singleline": {
					"delimiter": "semi",
					"requireLast": false
				}
			}
		],
		"@typescript-eslint/no-empty-function": "error",
		"@typescript-eslint/no-empty-interface": "error",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-misused-new": "error",
		"@typescript-eslint/no-namespace": "error",
		"@typescript-eslint/no-parameter-properties": "off",
		"@typescript-eslint/no-this-alias": "error",
		"@typescript-eslint/no-unused-expressions": "error",
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/prefer-for-of": "off",
		"@typescript-eslint/prefer-function-type": "error",
		"@typescript-eslint/prefer-namespace-keyword": "error",
		"@typescript-eslint/quotes": [
			"error",
			"single",
			{
				"avoidEscape": true
			}
		],
		"@typescript-eslint/semi": [
			"error",
			"always"
		],
		"@typescript-eslint/triple-slash-reference": [
			"error",
			{
				"path": "always",
				"types": "prefer-import",
				"lib": "always"
			}
		],
		"@typescript-eslint/unified-signatures": "error",
		"arrow-parens": [
			"off",
			"always"
		],
		"camelcase": "off",
		"complexity": "off",
		"constructor-super": "error",
		"eqeqeq": [
			"error",
			"smart"
		],
		"guard-for-in": "error",
		"id-blacklist": "off",
		"id-match": "off",
		"import/no-extraneous-dependencies": "off",
		"import/no-internal-modules": "off",
		"import/order": "off",
		"max-classes-per-file": "off",
		"max-len": [
			"error",
			{
				"ignorePattern": "//",
				"code": 120
			}
		],
		"new-parens": "error",
		"no-caller": "error",
		"no-cond-assign": "error",
		"no-console": [
			"error",
			{
				"allow": [
					"dirxml",
					"warn",
					"error",
					"dir",
					"timeLog",
					"assert",
					"clear",
					"count",
					"countReset",
					"groupCollapsed",
					"table",
					"Console",
					"markTimeline",
					"profile",
					"profileEnd",
					"timeline",
					"timelineEnd",
					"timeStamp",
					"context"
				]
			}
		],
		"no-debugger": "error",
		"no-duplicate-case": "error",
		"no-duplicate-imports": "error",
		"no-empty": "error",
		"no-eval": "error",
		"no-extra-bind": "error",
		"no-fallthrough": "off",
		"no-invalid-this": "off",
		"no-multiple-empty-lines": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-redeclare": "error",
		"no-return-await": "error",
		"no-sequences": "error",
		"no-shadow": "off",
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "error",
		"no-throw-literal": "error",
		"no-trailing-spaces": "error",
		"no-undef-init": "error",
		"no-underscore-dangle": "off",
		"no-unsafe-finally": "error",
		"no-unused-labels": "error",
		"no-var": "error",
		"object-shorthand": "error",
		"one-var": [
			"error",
			"never"
		],
		"prefer-const": "error",
		"prefer-object-spread": "error",
		"radix": "error",
		"space-in-parens": [
			"error",
			"never"
		],
		"spaced-comment": [
			"error",
			"always",
			{
				"markers": [
					"/"
				]
			}
		],
		"use-isnan": "error",
		"valid-typeof": "off",
		"@typescript-eslint/tslint/config": [
			"error",
			{
				"rules": {
					"prefer-conditional-expression": true,
					"whitespace": [
						true,
						"check-module"
					]
				}
			}
		]
	}
};