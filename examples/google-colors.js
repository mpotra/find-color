import {fromHex} from 'find-color'

var googleColors = [
  '4885ed', // blue
  'f4c20d', // yellow
  '3cba54', // green
  'db3236'  // red
]

function findNearest(color) {
  var nearest = fromHex(googleColors).find(color)
  return (nearest >= 0 ? '#' + nearest.toString(16).toUpperCase() : false)
}

console.log(findNearest('#FF7BAC'))