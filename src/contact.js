import Bee from "./bee.svg";

function createContainer(){
    const content=document.querySelector("#content");
    const container=document.createElement("div");
    container.classList.add("container");
    content.appendChild(container);
}

function createTitleAndCards(text){
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

    const cards=document.createElement("div");
    cards.classList.add("cards");
    container.appendChild(cards);
}

function createCard(){
    const cards=document.querySelector(".cards");

    const card=document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);
    return card;
}

function createText(element, text, parent, bool=false){
    const para=document.createElement(element);
    para.textContent=text;
    parent.appendChild(para);
    if(bool===true)
        para.style.textAlign="left";
}



function createContactPage(){
    createContainer();
    createTitleAndCards("Contact us");

    const card1=createCard();
    createText("h3", "Mama Bear", card1);
    createText("p", "Chef", card1, true);
    createText("p", "555-555-555", card1, true);
    createText("p", "totallyRealEmail@notFake.com", card1, true);
    
    const card2=createCard();
    createText("h3", "Papa Bear", card2);
    createText("p", "Manager", card2, true);
    createText("p", "444-444-444", card2, true);
    createText("p", "perfectlyRealEmail@notFake.com", card2, true);

    const card3=createCard();
    createText("h3", "Baby Bear", card3);
    createText("p", "Waiter", card3, true);
    createText("p", "333-333-333", card3, true);
    createText("p", "utterlyRealEmail@notFake.com", card3, true);
    
}
export {createContactPage};