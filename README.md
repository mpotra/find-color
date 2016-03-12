# find-color
A Node.js library that finds the nearest color in a list of colors.

## Installation

```
$ npm install find-color
```

## Development

#### Compile ES6 to ES5 with Babel

```
$ npm run compile
```

#### ESLint

```
$ npm run jslint
```

## How to use

```javascript
import * as findColor from `find-color`

findColor.fromHex(hexColors).find(color)
```

### Example: Google logo colors matching

Find the nearest color, from the list of Google logo colors.

```javascript
import {fromHex} from 'find-color'

var googleColors = [
  '#4885ed', // blue
  '#f4c20d', // yellow
  '#3cba54', // green
  '#db3236'  // red
]

function findNearest(color) {
  var nearest = fromHex(googleColors).find(color)
  return (nearest >= 0 ? '#' + nearest.toString(16).toUpperCase() : false)
}

findNearest('#FF7BAC') // => "#DB3236" (red)
```

See [examples/google-colors.js](examples/google-colors.js) directory


## API

### `fromHex(colors)`

Creates a new object, with the `find(color)` method

`colors` must be an array of hex encoded string values.
For each hex value, the `hash` character is removed, and the string trimmed.

### `fromRGB(colors)`

Creates a new object, with the `find(color)` method

`colors` must be an array of RGB array tuple values *(e.g. `[[255,0,0], ...]`)*.

### `.find(color)`

Finds the nearest color to `color`, from a list of pre-compiled colors, as
  provided by `fromHex()` or `fromRGB()`

Returns a `Number`, the decimal representation of the RGB color.

## License
[MIT](LICENSE)
