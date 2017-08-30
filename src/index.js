import _ from 'lodash'
import './style.css'
import Icon from './image.png'
import DATA_XML from './data.xml'
import DATA_JSON from './data.json'

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')


  var myIcon = new Image()
  myIcon.src = Icon

  element.appendChild(myIcon)

  var paragraphJSON = document.createElement('p'),
    nodeJSON = document.createTextNode(JSON.stringify(DATA_JSON)) 
    
  paragraphJSON.appendChild(nodeJSON)

  
  
  console.log(DATA_XML)
  element.appendChild(paragraphJSON)

  return element;
}
  
  document.body.appendChild(component());