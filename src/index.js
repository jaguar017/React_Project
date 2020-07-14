var React = require("react");
var React_dom = require("react-dom");

React_dom.render(<h1>"Hello"</h1>, document.getElementById("root"));

var h1 = document.createElement("h1");
h1.innerHTML = "Hello World";
document.getElementById("root").appendChild(h1);
