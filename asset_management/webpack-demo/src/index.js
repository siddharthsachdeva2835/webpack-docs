import './style.css';
import MyImage from './Webpack.png';

function component() {
  let element = document.createElement('div');

  element.innerHTML = 'Hello world';
  element.classList.add('hello');
  
  const newImage = new Image();
  newImage.src = MyImage;
  element.append(newImage);

  return element;
}
  
document.body.appendChild(component());