import _ from 'lodash'
import printMe from './print'
import './style.css'

function component() {
  var element = document.createElement('div'),
      btn = document.createElement('button')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
  btn.innerHTML = 'Click and check console';
  btn.onclick = printMe;

  element.appendChild(btn)

  return element;
}
  let element = component()
  document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element)
    element = component()
    document.body.appendChild(element)
  })
}
