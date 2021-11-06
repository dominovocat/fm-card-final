"use strict";

fetch("./assets/js/data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    
  });

const cardsContainer = document.getElementById("cardsContainer");
const HTMLElements = []
  .filter(
    (actor) =>
      actor.firstName &&
      actor.lastName &&
      actor.profilePicture &&
      actor.contacts
  )
  .map((actor) => createActorCards(actor));

function createActorCards(actor) {
  return createElement("li", { classNames: ["cardWrapper"] }, [
    createElement("article", { classNames: ["cardContainer"] }, [
      createImageWrapper(actor),
      createElement("h2", { classNames: ["cardName"] }, [
        document.createTextNode(actor.firstName || "noname"),
        document.createTextNode(actor.lastName),
      ]),
      createElement("p", { classNames: ["cardDescription"] }, [
        document.createTextNode(actor.birthdate || "unknow"),
      ]),
    ]),
  ]);
}
cardsContainer.append(...HTMLElements);

function createElement(
  type,
  { attributes, classNames, typeEvent, onClick, events },
  ...children
) {
  const elem = document.createElement(type);
  for (const [attrName, attrValue] of Object.entries(attributes)) {
    elem.setAttribute(attrName, attrValue);
  }
  for (const [eventType, eventHandler] of Object.entries(events)) {
    elem.addEventListener(eventType, eventHandler);
  }
  elem.classList.add(...classNames);
  elem.addEventListener(typeEvent, onClick);
  elem.append(...children);
  return elem;
}
