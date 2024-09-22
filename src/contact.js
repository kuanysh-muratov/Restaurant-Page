import Bee from "./bee.svg";

class ContactPage {
  constructor(contentId) {
    this.content = document.querySelector(contentId);
    this.container = null;
  }

  createContactPage() {
    this.createContainer();
    this.createTitleAndCards("Contact Us");
    this.createContactCards(this.getContactInfo());
  }

  createContainer() {
    this.container = this.createElement("div", ["container"]);
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

  createContactCards(contactInfo) {
    const cards = this.container.querySelector(".cards");
    contactInfo.forEach(info => this.createContactCard(cards, info));
  }

  createContactCard(parent, { name, role, phone, email }) {
    const card = this.createElement("div", ["card"]);
    this.createText("h3", name, card);
    this.createText("p", role, card, true);
    this.createText("p", phone, card, true);
    this.createText("p", email, card, true);
    parent.appendChild(card);
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

  getContactInfo() {
    return [
      {
        name: "Mama Bear",
        role: "Chef",
        phone: "555-555-555",
        email: "totallyRealEmail@notFake.com"
      },
      {
        name: "Papa Bear",
        role: "Manager",
        phone: "444-444-444",
        email: "perfectlyRealEmail@notFake.com"
      },
      {
        name: "Baby Bear",
        role: "Waiter",
        phone: "333-333-333",
        email: "utterlyRealEmail@notFake.com"
      }
    ];
  }
}

export function createContactPage() {
  const contactPage = new ContactPage("#content");
  contactPage.createContactPage();
}