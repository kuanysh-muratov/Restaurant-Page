import Bee from "./bee.svg";
import HoneyComb from "./honeycomb.svg";
import HoneyTea from "./honey-tea.png";
import BearyTea from "./honeyTea.png";
import Toast from "./toast.png";
import Pancakes from "./pancakes.png";
import French from "./french-toast.png";
import Fruits from "./fruits.png";
import Veggie from "./veggie.png";
import BLT from "./blt.png";

class MenuPage {
  constructor(contentId) {
    this.content = document.querySelector(contentId);
    this.container = null;
  }

  createMenuPage() {
    this.createContainer();
    this.createTitle("Menu");
    this.createMenuSection("Beverages", this.getBeverages());
    this.createMenuSection("Side Dishes", this.getSideDishes());
    this.createMenuSection("Main Dishes", this.getMainDishes());
  }

  createContainer() {
    this.container = this.createElement("div", ["container"]);
    this.content.appendChild(this.container);
  }

  createTitle(text) {
    const title = this.createElement("div", ["title"], { textContent: text });
    const leftBee = this.createImage(Bee, ["left"]);
    const rightBee = this.createImage(Bee, ["right"]);
    title.append(leftBee, rightBee);
    this.container.appendChild(title);
  }

  createMenuSection(sectionTitle, items) {
    const cards = this.createElement("div", ["cards"]);
    this.createFoodType(cards, sectionTitle);
    items.forEach(item => this.createMenuItem(cards, item));
    this.container.appendChild(cards);
  }

  createFoodType(parent, text) {
    const foodType = this.createElement("div", ["foodType"], { textContent: text });
    const honeycomb = this.createImage(HoneyComb, ["honeycomb"]);
    foodType.appendChild(honeycomb);
    parent.appendChild(foodType);
  }

  createMenuItem(parent, { title, description, price, image }) {
    const card = this.createElement("div", ["card"]);
    this.createText("h3", title, card);
    this.createText("p", description, card, true);
    this.createText("p", `$${price}`, card, true);
    this.createPicture(image, card);
    parent.appendChild(card);
  }

  createText(element, text, parent, alignLeft = false) {
    const para = this.createElement(element, [], { textContent: text });
    if (text.includes("$")) para.style.fontWeight = "bold";
    if (alignLeft) para.style.textAlign = "left";
    parent.appendChild(para);
  }

  createPicture(source, parent) {
    const pictureContainer = this.createElement("div", ["pictureContainer"]);
    const pic = this.createImage(source, ["foodpic"]);
    pictureContainer.appendChild(pic);
    parent.appendChild(pictureContainer);
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

  getBeverages() {
    return [
      {
        title: "Honey Tea",
        description: "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!",
        price: 2,
        image: HoneyTea
      },
      {
        title: "Beary Tea",
        description: "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.",
        price: 3,
        image: BearyTea
      }
    ];
  }

  getSideDishes() {
    return [
      {
        title: "Toast and Jam",
        description: "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.",
        price: 1,
        image: Toast
      },
      {
        title: "Fresh Fruit",
        description: "A small bowl of fresh fruit, whatever we find at the market for the day.",
        price: 3,
        image: Fruits
      }
    ];
  }

  getMainDishes() {
    return [
      {
        title: "Pancakes",
        description: "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.",
        price: 4,
        image: Pancakes
      },
      {
        title: "French Toast",
        description: "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.",
        price: 5,
        image: French
      },
      {
        title: "Beary Veggie Sandwich",
        description: "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.",
        price: 8,
        image: Veggie
      },
      {
        title: "BLT",
        description: "Interested in the Beary Veggie Sandwich but also love bacon? Say no more.",
        price: 6,
        image: BLT
      }
    ];
  }
}

export function createMenuPage() {
  const menuPage = new MenuPage("#content");
  menuPage.createMenuPage();
}