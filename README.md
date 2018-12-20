# meteor-blaze-bs4
Generic Bootstrap 4 components library for Meteor Blaze.

## Installation

You can install the package with the following line:

```bash
meteor add jkuester:blaze-bs4
```

This package comes without hard dependency to Bootstrap. You need to add Bootstrap yourself:

```bash
meteor npm install --save bootstrap jquery popper.js
```

In your client app you need to import Bootstrap and this package like the following:

```javascript
import 'meteor/jkuester:blaze-bs4'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css' // this is the default BS theme as example
import popper from 'popper.js'
global.Popper = popper // fixes some issues with Popper and Meteor
``` 

The templates are automatically added and are immediately available.

## Developmnent Progress

- [x] Alerts
- [x] Badge
- [x] Breadcrumb
- [x] Buttons
- [x] Button group
- [ ] Card
- [ ] Carousel
- [ ] Collapse
- [ ] Dropdowns
- [ ] Forms
- [ ] Input group
- [ ] Jumbotron
- [ ] List group
- [ ] Modal
- [ ] Navs
- [ ] Navbar
- [ ] Pagination
- [ ] Popovers
- [x] Progress
- [ ] Scrollspy
- [ ] Tooltips 



## API Documentation / How to use

Please read the [API Documentation](API.md) for how to use this package.