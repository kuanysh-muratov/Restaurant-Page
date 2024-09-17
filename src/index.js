import "./style.css";
import Dripping from "./dripping.png";
import {createHomePage} from "./home.js";
import {createContactPage} from "./contact.js";
import {createMenuPage} from "./menu.js";
const buttons=document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".dripping").forEach(img => img.remove());
      document.querySelectorAll(".pressed").forEach(pressed=> pressed.classList.remove("pressed"));
      document.querySelector("#content").innerHTML = "";
      const myImg = new Image();
      myImg.src = Dripping; 
      myImg.classList.add("dripping");
      button.classList.add("pressed");
      button.appendChild(myImg);
      switch(button.getAttribute("id")){
        case "Home":
            createHomePage();
            break;
        case "Menu":
            createMenuPage();
            break;
        case "Contact":
            createContactPage();
            break;
      }
    });
  });
  document.querySelector("#Home").click();