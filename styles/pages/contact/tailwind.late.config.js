// Same theme; generates only the classes that the page's scripts add at runtime
// (they aren't in the markup). See late.css.
const base = require("./tailwind.config.js");

module.exports = {
  ...base,
  content: [{ raw: "function handleFormSubmit const btn document.getElementById submitBtn banner formSuccessMessage if btn.disabled true btn.classList.add opacity-75 btn.innerHTML span class animate-spin progress_activity /span Encrypting Sending... setTimeout check Message Sent banner.classList.remove banner.scrollIntoView behavior: smooth block: nearest" }],
};
