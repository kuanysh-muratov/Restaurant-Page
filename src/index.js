import "./style.css";
import Dripping from "./dripping.png";
import { createHomePage } from "./home.js";
import { createContactPage } from "./contact.js";
import { createMenuPage } from "./menu.js";

class RestaurantApp {
  constructor() {
    this.contentElement = document.querySelector("#content");
    this.buttons = document.querySelectorAll("button");
    this.currentPage = null;
    this.initializeEventListeners();
    this.navigateTo("Home");
    this.applyInitialHomeButtonEffect();
  }

  initializeEventListeners() {
    this.buttons.forEach(button => {
      button.addEventListener("click", () => this.handleNavigation(button));
    });
  }

  handleNavigation(button) {
    const pageId = button.getAttribute("id");
    this.clearCurrentPage();
    this.updateButtonStyles(button);
    this.navigateTo(pageId);
  }

  clearCurrentPage() {
    this.removeAllDrippingImages();
    this.removeAllPressedStyles();
    this.contentElement.innerHTML = "";
  }

  removeAllDrippingImages() {
    document.querySelectorAll(".dripping").forEach(img => img.remove());
  }

  removeAllPressedStyles() {
    document.querySelectorAll(".pressed").forEach(element => element.classList.remove("pressed"));
  }

  updateButtonStyles(button) {
    const drippingImage = new Image();
    drippingImage.src = Dripping;
    drippingImage.classList.add("dripping");
    button.classList.add("pressed");
    button.appendChild(drippingImage);
  }

  navigateTo(pageId) {
    switch(pageId) {
      case "Home":
        this.currentPage = createHomePage();
        break;
      case "Menu":
        this.currentPage = createMenuPage();
        break;
      case "Contact":
        this.currentPage = createContactPage();
        break;
      default:
        console.error(`Unknown page: ${pageId}`);
    }
  }

  applyInitialHomeButtonEffect() {
    const homeButton = document.querySelector("#Home");
    if (homeButton) {
      this.updateButtonStyles(homeButton);
    }
  }
}

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  new RestaurantApp();
});