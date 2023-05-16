module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'preserve',
  jsxSingleQuote: true,

  trailingComma: 'all',

  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      options: {
        parser: 'babel',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
      },
    },
    {
      files: ['*.json', '.*rc', '.yaml', '.yml'],
      options: {
        tabWidth: 2,
      },
    },
  ],

  importOrder: [
    'react',

    "<THIRD_PARTY_MODULES>",

    '^(..\/){15}',
    '^(..\/){14}',
    '^(..\/){13}',
    '^(..\/){12}',
    '^(..\/){11}',
    '^(..\/){10}',
    '^(..\/){9}',
    '^(..\/){8}',
    '^(..\/){7}',
    '^(..\/){6}',
    '^(..\/){5}',
    '^(..\/){4}',
    '^(..\/){3}',
    '^(..\/){2}',
    '^(..\/){1}',

    '^(.\/){1}(.*(?<!css))$',

    '(\w*.css)+$',
  ],

  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
};
