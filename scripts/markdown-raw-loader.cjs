/**
 * Webpack/Turbopack loader that turns a text file into a JS module exporting
 * its contents as a string.
 *
 * @param {string} source
 * @returns {string}
 */
module.exports = function markdownRawLoader(source) {
  return `export default ${JSON.stringify(source)};`;
};
