// eslint-disable-next-line no-undef
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],
  rules: {
    // 'at-rule-no-unknown': null,
    // 'scss/at-rule-no-unknown': true,
    // indentation: 2, // インデント
    'length-zero-no-unit': true, // 値が「0」なら単位を省略する
    'number-leading-zero': 'always', // 小数点の頭の「0」は省略する
    'color-hex-length': 'short', // HEX形式のカラーコードは3文字で表記する
    'shorthand-property-no-redundant-values': true, // ショートハンドでプロパティを書く
  },
}
