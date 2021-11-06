

function createElement(type,{classNames,typeEvent,onClick}, ...children){
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.addEventListener(typeEvent,onClick);
  elem.append(...children);
  return elem;
}