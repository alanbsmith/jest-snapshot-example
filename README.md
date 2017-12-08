# Jest Snapshot Example
_with [styled-components](https://github.com/styled-components/styled-components) 💅_

## Overview
This is a companion repo for my Medium article.

## Up & Running
To install dependencies with Yarn, run:
```sh
$ yarn install
```

or to install with npm, run:

```sh
$ npm install
```

## File Structure
This component library borrows its structure from [BEM](http://getbem.com/introduction/) and is set
 up to use Blocks, Elements, and Modifiers. Below is a description of each.

### Blocks
Blocks are the highest level of abstraction in the Blocks, Elements, Modifiers concept.
 They are responsible for providing the context for Elements, handling UI logic, and rendering the
 Elements within the Block. They are not connected to application state, nor do they handle any
 business logic.

### Elements
Elements are the smallest, indivisible parts of UI. They are responsible for actually rendering the
 UI. They do not handle application logic or UI logic, but they do handle their own modifiers which
 modify the element’s style. Elements generally exist within the context of a Block (as their own
 file in the Block’s directory) allowing the reuse of that set of Elements, but they are not
 exclusively bound to blocks. An example of a stand-alone Element would be an A, Link, H3, or P.
 These common elements live in `lib/elements`.

### Modifiers
This library utilizes
 [`styled-components-modifiers`](https://github.com/Decisiv/styled-components-modifiers) to build
 modifiers. Modifiers are small functions that allow us to alter the properties of an Element.
 They primarily live in the Element's file and are solely responsible for modifying styles.
 Some modifiers are common to multiple Elements. An example would be `fontWeights`.
 These common modifiers live in `lib/modifiers`

## Local Development

### Module Development Workflow
Helpful information on development workflow in this library lives
 [here](https://gist.github.com/alanbsmith/6c581e5042b8e5e558b0b4454192eb69).

### Linting
_**NOTE:** The linter will run against everything in the `lib` directory. I've added an initial
 `.eslintrc` file for some basic configuration. Feel free to edit or replace it as needed. The
 intent is to help give you a guide for syntax as you build your application. However, if the
 linters are too distracting and / or confusing, feel free to ignore them._

### JavaScript Linting
_This assumes you have eslint and eslint-watch installed. If you don't, run the following:_
```
$ npm i -g eslint eslint-watch
```
or if you need permissions:
```
$ sudo npm i -g eslint eslint-watch
```

To run the linter once:
```
$ yarn lint:js
```

To run the watch task:
```
$ yarn lint:js:watch
```

#### Style Linting
I've also added a style linter for Sass / SCSS.

To run the style linter:
```
$ yarn lint:style
```

#### Linting JavaScript & Styles
To run both linters:
```
$ yarn lint
```

### Testing
To run the tests once:
```
$ npm test
```

To run the watch script (for only relevant test files)
```
$ npm run test:watch
```

To run the watch script (for all test files)
```
$ npm run test:watchAll
```

To view the coverage report:
```
$ npm run test:coverage:report
```

### Review
If you'd like to run the linters and tests at once (this is a nice check before pushing to
Github or deploys), you can run:

```
$ npm run review
```

### Build
_**NOTE:** When you run `build`, Babel will create a `build` directory. This is what your users
will interact with when they use your library. Nothing in `lib` gets shipped with your
published module._

Run once:
```
$ npm run build
```

Run the watch script:
```
$ npm run build:watch
```

## Contributing
I am thankful for any contributions made by the community. By contributing you agree to abide by
the Code of Conduct in the [Contributing Guidelines](https://github.com/alanbsmith/component-library-starter/blob/master/.github/CONTRIBUTING.md).

## License
[MIT](https://github.com/alanbsmith/component-library-starter/blob/master/LICENSE)
