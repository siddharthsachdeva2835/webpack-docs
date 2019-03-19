import printMe from './print.js'

function component() {
    let element = document.createElement('div')
    let printBtn = document.createElement('button')

    element.innerHTML = 'Hello world'
    printBtn.innerHTML = 'Click me and check the console';
    printBtn.onclick = printMe;  

    element.append(printBtn)
    return element
  }
  
  document.body.appendChild(component())