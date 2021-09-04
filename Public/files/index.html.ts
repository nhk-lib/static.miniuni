
import { DA }  from "../../../node_modules/da/dist/src/DA";
import { JSDOM } from "jsdom";

const HTML5 = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body></body>
</html>
`;
const DOM = new JSDOM(HTML5);
const H = new DA.HTML(DOM.window);
H.title("miniUNI");
H.link({rel: "text/css", href: "index.css"});
H.body(function () {
  H.p("Hello");
  H.script({type: "module", src: "/apps/homepage/index.mjs"});
});

let html = DOM.serialize();
console.log(html);
/* export { html }; */

