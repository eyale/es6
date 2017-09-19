function getComponent() {
  return import('lodash').then(function(_) {
    var element = document.createElement('div')

    element.innerHTML = _.join(['Hello', 'webpack'], '')

    return element
  }).catch(function(error) {return 'An error accured while loading the component'})
}

getComponent().then(function(component) {
  document.body.appendChild(component)
})
