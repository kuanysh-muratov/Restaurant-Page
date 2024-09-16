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
function createContainer(){
    const content=document.querySelector("#content");
    const container=document.createElement("div");
    container.classList.add("container");
    content.appendChild(container);
}

function createTitle(text){
    const container=document.querySelector(".container");

    const title=document.createElement("div");
    title.classList.add("title");
    title.textContent=text;

    const leftBee = new Image();
    leftBee.src=Bee;
    leftBee.classList.add('left');

    const rightBee = new Image();
    rightBee.src=Bee;
    rightBee.classList.add('right');

    title.appendChild(leftBee);
    title.appendChild(rightBee);
    container.appendChild(title);
}

function createCards(){
    const container=document.querySelector(".container");
    const cards=document.createElement("div");
    cards.classList.add("cards");
    container.appendChild(cards);
    return cards;
}

function createFoodType(parent, text){
    const foodType=document.createElement("div");
    foodType.classList.add("foodType");
    foodType.textContent=text;

    const honeycomb = new Image();
    honeycomb.src=HoneyComb;
    honeycomb.classList.add('honeycomb');
    foodType.appendChild(honeycomb);
    parent.appendChild(foodType);
    return foodType;
}


function createCard(parent){
    const card=document.createElement("div");
    card.classList.add("card");
    parent.appendChild(card);
    return card;
}

function createText(element, text, parent, bool=false){
    const para=document.createElement(element);
    para.textContent=text;
    if(text.includes("$"))
        para.style.fontWeight="bold";
    parent.appendChild(para);
    if(bool===true)
        para.style.textAlign="left";
}

function createPicture(source, parent){
    const pictureContainer=document.createElement("div");
    pictureContainer.classList.add("pictureContainer");
    const pic=new Image();
    pic.src=source;
    pic.classList.add("foodpic");
    pictureContainer.appendChild(pic);
    parent.appendChild(pictureContainer);
}



function createMenuPage(){
    createContainer();
    createTitle("Menu");

    const cards1=createCards();
    createFoodType(cards1, "Beverages");

    const card11=createCard(cards1);
    createText("h3", "Honey Tea", card11);
    createText("p", "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!", card11, true);
    createText("p", "$2", card11, true);
    createPicture(HoneyTea, card11);
    const card12=createCard(cards1);
    createText("h3", "Beary Tea", card12);
    createText("p", "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.", card12, true);
    createText("p", "$3", card12, true);
    createPicture(BearyTea, card12);



    const cards2=createCards();
    createFoodType(cards2, "Side Dishes");

    const card21=createCard(cards2);
    createText("h3", "Toast and Jam", card21);
    createText("p", "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.", card21, true);
    createText("p", "$1", card21, true);
    createPicture(Toast, card21);
    const card22=createCard(cards2);
    createText("h3", "Fresh Fruit", card22);
    createText("p", "A small bowl of fresh fruit, whatever we find at the market for the day.", card22, true);
    createText("p", "$3", card22, true);
    createPicture(Fruits, card22);




    const cards3=createCards();
    createFoodType(cards3, "Main Dishes");

    const card31=createCard(cards3);
    createText("h3", "Pancakes", card31);
    createText("p", "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.", card31, true);
    createText("p", "$4", card31, true);
    createPicture(Pancakes, card31);
    const card32=createCard(cards3);
    createText("h3", "French Toast", card32);
    createText("p", "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.", card32, true);
    createText("p", "$5", card32, true);
    createPicture(French, card32);
    const card33=createCard(cards3);
    createText("h3", "Beary Veggie Sandwich", card33);
    createText("p", "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.", card33, true);
    createText("p", "$8", card33, true);
    createPicture(Veggie, card33);
    const card34=createCard(cards3);
    createText("h3", "BLT", card34);
    createText("p", "Interested in the Beary Veggie Sandwich but also love bacon? Say no more.", card34, true);
    createText("p", "$6", card34, true);
    createPicture(BLT, card34);
    




    
    
}
export {createMenuPage};