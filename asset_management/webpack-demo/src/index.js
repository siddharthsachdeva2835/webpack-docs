import './style.css';

function component() {
    let element = document.createElement('div');
  
    element.innerHTML = 'Hello world';
    element.classList.add('hello');

    return element;
  }
  
  document.body.appendChild(component());