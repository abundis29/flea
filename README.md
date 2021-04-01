# flea
easy pure javascript xhr rest module with header injector  es5 Compatibility

## Installation

```bash
npm install flea-http
```

## or Man Installation
download and

```html
 <script src="../flea.js"></script> or

import flea from 'flea';

```


## Usage

```javascript
var myHeaders = [{ Flip: "text/xml" }, { Flop: "text/xml" }];
flea("https://httpbin.org/get", "GET", myHeaders)
  .then(function(o) {
    console.log(JSON.parse(o.response));
  })
  .catch(function(error) {
    console.error("Something went wrong", error);
  });
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
