document.querySelectorAll("code").forEach(function(element) {
  element.innerHTML = element.innerHTML.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}); // escape HTML

hljs.initHighlightingOnLoad(); // highlight.js detection