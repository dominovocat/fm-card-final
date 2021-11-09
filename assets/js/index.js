"use strict";

fetch("./assets/js/data.json")
  .then((response) => response.json())
  .then((data) => {
    const HTMLElements = data
      .filter(
        (data) =>
          data.firstName &&
          data.lastName &&
          data.profilePicture &&
          data.contacts
      )
      .map((data) => createActorCards(data));
  })
  .catch()
  .finally();

const cardsContainer = document.getElementById("cardsContainer");

function createActorCards(data) {
  return createElement("li", { classNames: ["cardWrapper"] }, [
    createElement("article", { classNames: ["cardContainer"] }, [
      createImageWrapper(data),
      createElement("h2", { classNames: ["cardName"] }, [
        document.createTextNode(data.firstName || "noname"),
        document.createTextNode(data.lastName),
      ]),
      createElement("p", { classNames: ["cardDescription"] }, [
        document.createTextNode(data.birthdate || "unknow"),
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
