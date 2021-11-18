function getPosition(element) {
  let clientRect = element.getBoundingClientRect();
  var html = document.documentElement;

  return {left: clientRect.left + window.pageXOffset - html.clientLeft,
          top: clientRect.top + window.pageYOffset - html.clientTop};
}


export default getPosition;
