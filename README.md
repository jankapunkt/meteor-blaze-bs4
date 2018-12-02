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

## Usage

### Some general info

The template are named like the respective components in the [Bootstrap documentation](https://getbootstrap.com/docs/4.1/components/alerts/) in lowercase.
Some Templates allow to insert dynamic content, while others don't. Therefore you should check the documentation for each component's example code.

Many templates are parameterized and offer optional functionality. The component's documentation should also show you, which parameter formats are required.

The github repository comes also with an example project that includes all components for demonstration purposes.
Consider to check it's code in order to get a better understanding of all the possible parameters.

There will be sometimes a reference to the "theme color names". These include the following values:

* `primary`
* `secondary`
* `success`
* `warning`
* `danger`
* `info`
* `light`
* `dark`

Wherever referenced as parameters (and not stated otherwise) these values are required as listed above and without any prefix.

### Components / Templates

The following properties are documented:

* name - the name of the template as it will be included
* dynamic - whether a template is dynamic (`{{#example}}<p>custom markup</p>{{/example}}`) or not (`{{> example}}`)
* param - description of a parameter; follows the pattern `name` - `type` - `description`
* event - description of an event callback that can be passed from another template; follows the pattern `name` - `eventName` - `description` 

#### Alert

**name:** `alert`

**dynamic:** yes

**param** type (String) - One of the theme color names.

**param** heading (String) - Text to be rendered as head (`h4`)

**param** dismissible (Boolean) - Add dismiss button to the component

**param** onClose ('close.bs.alert') - This event fires immediately when the close instance method is called.

**param** onClosed ('closed.bs.alert') - This event is fired when the alert has been closed (will wait for CSS transitions to complete).

**param**

```html
<template name="myTemplate">
{{#alert type="success" heading="Well done!" onClose=onClose onClosed=onClosed}}
    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer
        so
        that you can see how spacing within an alert works with this kind of content.</p>
    <hr>
    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
{{/alert}}
</template>

```

```javascript
const logEvent = event => console.log(event)

Template.myTemplate.helpers({
  onClose () {
    return logEvent
  },
  onClosed () {
    return logEvent
  }
})
```