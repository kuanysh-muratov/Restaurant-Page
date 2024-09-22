import Bee from "./bee.svg";

class RestaurantPage {
  constructor(contentId) {
    this.content = document.querySelector(contentId);
    this.container = null;
  }

  createHomePage() {
    this.createContainer();
    this.createTitleAndCards("Beary's Breakfast Bar");
    this.createTestimonialCard();
    this.createHoursCard();
    this.createLocationCard();
  }

  createContainer() {
    this.container = document.createElement("div");
    this.container.classList.add("container");
    this.content.appendChild(this.container);
  }

  createTitleAndCards(text) {
    const title = this.createElement("div", ["title"], { textContent: text });
    const leftBee = this.createImage(Bee, ["left"]);
    const rightBee = this.createImage(Bee, ["right"]);

    title.append(leftBee, rightBee);
    this.container.appendChild(title);

    const cards = this.createElement("div", ["cards"]);
    this.container.appendChild(cards);
  }

  createTestimonialCard() {
    const card = this.createCard();
    card.id = "testimonial";
    this.createText("p", "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.", card, true);
    this.createText("h3", "Goldilocks", card);
  }

  createHoursCard() {
    const card = this.createCard();
    this.createText("h3", "Hours", card);
    const hours = [
      "Sunday: 8am - 8pm",
      "Monday: 6am - 6pm",
      "Tuesday: 6am - 6pm",
      "Wednesday: 6am - 6pm",
      "Thursday: 6am - 10pm",
      "Friday: 6am - 10pm",
      "Saturday: 8am - 10pm"
    ];
    hours.forEach(hour => this.createText("p", hour, card));
  }

  createLocationCard() {
    const card = this.createCard();
    this.createText("h3", "Location", card);
    this.createText("p", "123 Forest Drive, Forestville, Maine", card);
  }

  createCard() {
    const cards = this.container.querySelector(".cards");
    const card = this.createElement("div", ["card"]);
    cards.appendChild(card);
    return card;
  }

  createText(element, text, parent, alignLeft = false) {
    const para = this.createElement(element, [], { textContent: text });
    if (alignLeft) para.style.textAlign = "left";
    parent.appendChild(para);
  }

  createElement(tag, classes = [], props = {}) {
    const element = document.createElement(tag);
    element.classList.add(...classes);
    Object.assign(element, props);
    return element;
  }

  createImage(src, classes = []) {
    return this.createElement("img", classes, { src });
  }
}

export function createHomePage() {
  const page = new RestaurantPage("#content");
  page.createHomePage();
}