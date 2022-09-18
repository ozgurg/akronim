![Downloads](https://img.shields.io/npm/dm/akronim)
![Version](https://img.shields.io/github/package-json/v/ozgurg/akronim)

# akronim

An [acronym](https://en.wikipedia.org/wiki/Acronym) generator with useful options.

## Install

```shell
npm install akronim
```

_This package is a [pure ESM package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)._

## Usage

```javascript
import akronim from "akronim";

akronim("Mustafa Kemal Atatürk");
// "MKA"

akronim("God of War");
// "GOW"

akronim("GitHub");
// "GH"

akronim("Game of Thrones", { ignoreLowercaseWords: true });
// "GT"

akronim("Grand Theft Auto", { separateWith: "." });
// "G.T.A."

akronim("Grand Theft Auto", { separateWith: ".", trimLastSeparator: true });
// "G.T.A"

akronim("To be announced", { capitalize: false });
// "Tba"
```

## API

### akronim(text, options) : string

#### text

Text to generate the acronym.

Type: <code>string | number</code>\
Required: Yes

#### options

Default: <code>{}</code>\
Type: <code>object</code>\
Required: No

#### options.ignoreLowercaseWords

Ignores lowercase words in the input.

Default: <code>false</code>\
Type: <code>boolean</code>\
Required: No

```javascript
akronim("Game of Thrones", { ignoreLowercaseWords: true });
// "GT"
```

#### options.separateWith

Separates the output with the given value.

Default: <code>""</code>\
Type: <code>string | number</code>\
Required: No

```javascript
akronim("Grand Theft Auto", { separateWith: "." });
// "G.T.A."
```

#### options.trimLastSeparator

Trims the last separator in the output when using with `options.separateWith`.

Default: <code>false</code>\
Type: <code>boolean</code>\
Required: No

```javascript
akronim("Grand Theft Auto", { separateWith: ".", trimLastSeparator: true });
// "G.T.A"
```

#### options.capitalize

Capitalizes all letters in the output.

Default: <code>true</code>\
Type: <code>boolean</code>\
Required: No

```javascript
akronim("To be announced");
akronim("To be announced", { capitalize: true });
// "TBA"

akronim("To be announced", { capitalize: false });
// "Tba"
```

## License

[![License](https://img.shields.io/github/license/ozgurg/akronim)](https://github.com/ozgurg/akronim/blob/main/LICENSE)
