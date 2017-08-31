import _ from 'lodash'
import printMe from './print'

function component() {
  var element = document.createElement('div'),
      btn = document.createElement('button')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
  btn.innerHTML = 'Click and check console';
  btn.onclick = printMe;

  element.appendChild(btn)

  return element;
}
  
  document.body.appendChild(component());