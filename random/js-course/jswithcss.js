// https://dev.to/karataev/set-css-styles-with-javascript-3nl5
// https://developers.google.com/web/updates/2019/02/constructable-stylesheets
// making wheel scroll fast
https://developers.google.com/web/updates/2019/02/scrolling-intervention
// 1. Inline styles

// document.getElementById('target').style.color = 'green';

// 2. Global styles:
// Another option is to create <style> tag, fill it with CSS rules and append the tag to the DOM.

// var style = document.createElement("style");
// style.innerHTML = `
//   #target {
//   color: blueviolet;
//   }
//   `;
// document.head.appendChild(style);

// 3. CSSOM insertRule:
// Third option is less known. We gonna use CSSStyleSheet insertRule method.

// var style = document.createElement('style');
//   document.head.appendChild(style);
//   style.sheet.insertRule('#target {color: gray}');

// 4. Constructable Stylesheets (July 2019 update)
// It's now possible to create CSSStyleSheet object from JavaScript.

// Create our shared stylesheet:
const sheet = new CSSStyleSheet();
sheet.replaceSync('#target {color: blue}');

// Apply the stylesheet to a document:
document.adoptedStyleSheets = [sheet];
// This option is only valid for Chrome, so use with caution.