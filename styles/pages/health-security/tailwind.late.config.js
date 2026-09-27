// Same theme; generates only the classes that the page's scripts add at runtime
// (they aren't in the markup). See late.css.
const base = require("./tailwind.config.js");

module.exports = {
  ...base,
  content: [{ raw: "function const faqItems document.querySelectorAll #faq-accordion .faq-item faqItems.forEach item trigger item.querySelector .faq-trigger content .faq-content icon .faq-icon trigger.addEventListener click isExpanded !content.classList.contains Close all items otherItem otherItem.querySelector .classList.add otherIcon otherIcon.style.transform rotate 0deg Toggle current if !isExpanded content.classList.remove icon.style.transform 180deg Automatically open first for prominent context faqItems.length faqItems[0].querySelector .classList.remove .style.transform" }],
};
