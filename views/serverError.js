const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Pages</h3>
  <br>
  <p>Internal Server Error. Error 500 </p>`);