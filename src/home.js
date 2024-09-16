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



function createHomePage(){
    createContainer();
    createTitleAndCards("Beary's Breakfast Bar");

    const card1=createCard();
    card1.setAttribute("id", "kotak");
    createText("p", "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.", card1, true);
    createText("h3", "Goldilocks", card1);

    const card2=createCard();
    createText("h3", "Hours", card2);
    createText("p", "Sunday: 8am - 8pm", card2);
    createText("p", "Monday: 6am - 6pm", card2);
    createText("p", "Tuesday: 6am - 6pm", card2);
    createText("p", "Wednesday: 6am - 6pm", card2);
    createText("p", "Thursday: 6am - 10pm", card2);
    createText("p", "Friday: 6am - 10pm", card2);
    createText("p", "Saturday: 8am - 10pm", card2);

    const card3=createCard();
    createText("h3", "Location", card3);
    createText("p", "123 Forest Drive, Forestville, Maine", card3);
    
}
export {createHomePage};