# URL Parser

![version](https://img.shields.io/npm/v/url-params-parser.svg)
![license](https://img.shields.io/github/license/jorgegorka/url-params-parser.svg)
![Code climate](https://img.shields.io/codeclimate/maintainability/jorgegorka/url-params-parser.svg)

Handle named params and query params easily.

This package relies heavily in the native [URL object](https://developer.mozilla.org/en-US/docs/Web/API/URL) (no need to reinvent the wheel). It just adds some extra methods to handle params (both query and named params).

## Install

To install Url Parser:

with npm

```bash
npm i url-params-parser
```

with Yarn

```bash
yarn add url-params-parser
```

## Usage

Initialize the object with a route and a placeholder. Example:

```:javascript
import { UrlParser } from 'url-params-parser'

const urlParser = UrlParser(
  "https://address.com:99/employees/show/1234/developer/reports/asc/?climate=change&sea-level=rising",
  "/employees/show/:id/:title/reports/:order"
)
```

### namedParams

Returns an object with all the named params and their values

```:javascript
urlParser.namedParams
// returns { id: "1234", title: "developer", order: "asc" }
```

### namedParamsKeys

Returns an array with all the named param keys

```:javascript
urlParser.namedParamsKeys
// returns ["id", "title", "order"]
```

### namedParamsValues

Returns an array with all the named param values

```:javascript
urlParser.namedParamsValues
// returns ["1234", "developer", "asc"]
```

### queryParams

Returns an object with all query params and their values

```:javascript
urlParser.queryParams
// returns { climate: "change", "sea-level": "rising" }
```

### queryParamsKeys

Returns an array with all the query param values

```:javascript
urlParser.queryParamsKeys
// returns [ climate, "sea-level" ]
```

### queryParamsValues

Returns an array with all the query param values

```:javascript
urlParser.queryParamsValues
// returns [ "change", "rising" ]
```

### pathNames

Returns an array with all the elements of a pathname

```:javascript
urlParser.pathNames
// returns [ "employees", "show", "1234", "developer", "reports", "asc" ]
```

### host

Wrapper for URL().host

```:javascript
urlParser.host
// returns "address.com:99"
```

### hostname

Wrapper for URL().hostname

```:javascript
urlParser.hostname
// returns "address.com"
```

### port

Wrapper for URL().port

```:javascript
urlParser.port
// returns "99"
```

### pathname

Wrapper for URL().pathname

```:javascript
urlParser.pathname
// returns "/employees/show/1234/developer/reports/asc/"
```

### protocol

Wrapper for URL().protocol

```:javascript
urlParser.protocol
// returns "https:"
```

### search

Wrapper for URL().search

```:javascript
urlParser.search
// returns "?climate=change&sea-level=rising"
```

## Credits

URL Parser has been developed by [Jorge Alvarez](https://www.alvareznavarro.es).

## License

[Released under MIT license](http://www.opensource.org/licenses/MIT)
