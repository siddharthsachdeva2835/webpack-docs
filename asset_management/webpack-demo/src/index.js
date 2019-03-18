import './style.css';
import MyImage from './Webpack.png';
import Data from './data.xml';

function component() {
  let element = document.createElement('div');

  element.innerHTML = 'Hello world';
  element.classList.add('hello');
  
  const newImage = new Image();
  newImage.src = MyImage;
  element.append(newImage);
  
  console.log(Data);

  return element;
}
  
document.body.appendChild(component());