import _ from 'lodash'
import printMe from './print'
import { cube } from './math.js'

if (process.env.NODE_ENV !== 'production') {
  console.log('DEVELOPMENT MODE')
}

import './style.css'

function component() {
  var element = document.createElement('div'),
      btn = document.createElement('button'),
      codeElement = document.createElement('pre');


  element.innerHTML = _.join(['Hello', 'webpack', '<br><br>'], ' ');
  
  btn.innerHTML = 'Click and check console';
  btn.onclick = printMe;

  codeElement.innerHTML = [
    'Hello WebPack!',
    '5 cubed is equal to: ' + cube(5)
  ].join('\n\n')

  element.appendChild(btn)
  element.appendChild(codeElement)

  return element;
}
  var element = component()
  document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element)
    element = component()
    document.body.appendChild(element)
  })
}
