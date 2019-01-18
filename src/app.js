function component() {
  let element = document.createElement('div');
  element.setAttribute('class', 'center');
  return element;
}

let container = document.getElementsByClassName('container')[0];
container.appendChild(component());