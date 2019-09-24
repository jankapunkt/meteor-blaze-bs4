<p align="center">
<img src="https://jankapunkt.github.io/meteor-blaze-bs4/media/logo.svg" width="30%"/>
<h1>Meteor Blaze Bootstrap 4 Components</h1>
<p>Generic Bootstrap 4 components library for Meteor Blaze. See the <a href="https://jankapunkt.github.io/meteor-blaze-bs4/">DEMO</a></p>
</p>

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![GitLicense](https://gitlicense.com/badge/jankapunkt/meteor-blaze-bs4)](https://gitlicense.com/license/jankapunkt/meteor-blaze-bs4)
[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)

Note, that we are in status WIP, which means "Initial development is in progress, but there has not yet been a stable, usable release suitable for the public."
However, there are already releases on atmosphere for trying out the latest state.

## Features

* NEW! All components are imported using dynamic import, resulting in an initial package size of about 3KB!
* All Bootstrap components as parameterized Blaze Templates (see the [project overview](https://github.com/jankapunkt/meteor-blaze-bs4/projects/1) for supported components)
* Write Template code that is easier to reason about
* Keeps the naming conventions from Bootstrap
* Abstracts base classes (like `btn`) away, so you can focus on the code that matters
* Passing arbitrary `data-` attributes to components without the need for further config
* Pass events as parameters or use the classic event mapping from Blaze
* Rich [examples DEMO](https://jankapunkt.github.io/meteor-blaze-bs4/) that runs in analogy to the Bootstrap documentation

## Getting started

This package comes with out-of-the-box [Botstrap 4](https://getbootstrap.com/) components that can be included in any Meteor Blaze project.

### Prerequisites

This package comes without a hard-wired dependency to Bootstrap. This is to make sure that you can choose the Bootstrap version to run by yourself. You need therefore to add Bootstrap yourself:

```bash
$ meteor npm install --save bootstrap jquery popper.js
```

In your client app you need to import Bootstrap and this package like the following:

```javascript
import 'meteor/jkuester:blaze-bs4'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css' // this is the default BS theme as example
import popper from 'popper.js'
global.Popper = popper // fixes some issues with Popper and Meteor
``` 

### Installing this package

You can install the package from atmosphere via:

```bash
$ meteor add jkuester:blaze-bs4
```

The templates are automatically added and are immediately available. Note, that the 

### How to use

The components are loaded using dynamic imports, so the initial bundle size is kept small.

To import the packages, you need to first import the context via

```javascript
import { BlazeBs4 } from 'meteor/jkuester:blaze-bs4'

BlazeBs4.button.load().then(loaded => console.log('button template loaded'))
```

you can also load multiple components at once using

```javascript
import { BlazeBs4 } from 'meteor/jkuester:blaze-bs4'

Promise.all([
  BlazeBs4.button.load(),
  BlazeBs4.tooltip.load(),
  BlazeBs4.modal.load()
]).then(loaded => console.log('required templates loaded'))
```

For a full documentation of each supported component, please run the [examples DEMO](https://jankapunkt.github.io/meteor-blaze-bs4/)

## Running the tests locally

The package folder `blaze-bs4/` contains all the components and also the test files.
We use `mocha` and `chai` to run the unit tests.

To run the tests `cd` into the `blaze-bs4` folder and run the following command:

```bash
$ TEST_WATCH=1 meteor test-packages ./ --driver-package meteortesting:mocha
```

## Running the examples locally

When developing components and improving this package you may also want to improve the examples project.
To run it you need clone this project to your local machine. Inside

```bash
$ git clone git@github.com:jankapunkt/meteor-blaze-bs4.git
```

The project contains a folder named `examples` which serves multiple purposes:

* Mime the code examples from the Bootstrap 4 components documentation.
* Run the code lint using [JavaScript Standard Style](https://standardjs.com/).
* Run the tests against the components. The package itself contains no Bootstrap, so we can only test the full intended behavior including events , effects, popups, modals etc. using the examples project.
* Build the client-side project to server as Github-Page environment.

In order to set up the example project you need to first install the dependencies:

```bash
$ cd meteor-blaze-bs4/examples && meteor npm install
```

From there you can then run several scripts, that 


## Testing the package components

To test the package you can run inside the example project

```bash
$ meteor npm run test
```

which will run a mocha test suite that refreshes when the example or package code changes. Suitable for development.

To run the cli-only tests you need to execute the following script:
 

```bash
$ meteor npm run test-cli
```


### Run the example project

You can also run the example project locally. To do that you need to execute


```bash
$ meteor npm run examples
```

### Build the example project for Github pages

The build script uses [`meteor-build-client`](https://github.com/frozeman/meteor-build-client) to create a client-only bundle of the example project that can be loaded via Github pages. Not, that this requires `meteor-build-client` to be installed.

To build the client app execute the following script

```bash
$ meteor npm run build
```

## Deployment

This package does not need additional deployment configuration. Atmosphere publishing will be done by Jan Küster. Merged PRs will be automatically published.

## Built With

* [Meteor](https://www.meteor.com/)
* [Blaze](http://blazejs.org/)
* [Bootstrap](https://getbootstrap.com/)

## Contributing

Please see the contribution guidelines.

### Current Progress

#### 1.0

See the [project overview](https://github.com/jankapunkt/meteor-blaze-bs4/projects/1). 

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

The conventions for versioning are:

* major - Increment, if there is a major change in Bootstrap that affects major changes in this package. This will be 0 until all components have been implemented and 1 once all components have been basically implemented.
* minor - Increment, if there are severe changes in a component or new features added.
* patch - Increment, if there are minimal changes / updates / fixes in a component.


## Authors

* **Jan Küster** - *Initial work* - [jankapunkt](https://github.com/jankapunkt)

See also the list of [contributors](https://github.com/jankapunkt/meteor-blaze-bs4/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Inspired by [React Bootstrap](https://react-bootstrap.github.io/)
