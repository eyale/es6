import _ from 'lodash'
import { cube } from './math.js'

import './style.css'

function component() {
  var element = document.createElement('div'),
      btn = document.createElement('button'),
      codeElement = document.createElement('pre');


  element.innerHTML = _.join(['Hello', 'webpack', '<br><br>'], ' ');
  
  btn.innerHTML = 'Click and check console';

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
  module.hot.accept('./another_module.js', function() {
    console.log('Accepting the updated `another_module.js` module!');
    document.body.removeChild(element)
    element = component()
    document.body.appendChild(element)
  })
}
