const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Pages</h3>
  <br>
  <p>Page not found. Error 404 </p>`);