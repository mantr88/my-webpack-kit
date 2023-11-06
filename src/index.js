import _ from "lodash";
import "./style.css";
import Icon from "./images/Avatar.jpg";
import printMe from "./print";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  //   element.innerHTML = _.join(["Hello", "webpack"], " ");
  //   element.classList.add("hello");
  const btn = document.createElement("button");

  // Add the image to our existing div.
  //   const myIcon = new Image();
  //   myIcon.src = Icon;

  //   element.appendChild(myIcon);
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
