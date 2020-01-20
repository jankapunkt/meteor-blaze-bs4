import { Template } from 'meteor/templating'
import { Random } from 'meteor/random';
import { BlazeBs4 } from 'meteor/jkuester:blaze-bs4';

import './toast.html';

BlazeBs4.toast.add = function({ label = "test", body = "Toast Body", autohide = true, delay = 5000, headerBg = "warning", headerFg = "light", transparent = true, small = '', showId = false, width = 'inherit', animation = true }) {
  const self = this;
  var id = Random.id();
  if (showId) small = id;
  const toast = {
    id: id,
    active: true,
    rendered: false,
    label: label,
    bg: headerBg,
    fg: headerFg,
    autohide: autohide,
    delay: delay,
    body: body,
    small: small,
    transparent: transparent,
    width: width,
    animation: animation,
  };
  if (self.parentNode) {
    const view = Blaze.renderWithData(Template.toast_entry, toast, self.parentNode);
    if (BlazeBs4.toast.debug) console.log(`created toast ${toast.id}`, view);
  } else {
    console.error(`BlazeBs4.toast: no parentNode`, self);
  }
};

Template.toast.onRendered(function () {
  const instance = this;
  instance.toasts = instance.find('div.toasts');
  // Toast.parentNode = instance.find('#toasts');
  BlazeBs4.toast.parentNode = instance.find('#toasts');
  if (instance.data) {
    if (instance.data.width != undefined) {
      // console.log(`set width to ${instance.data.width}`);
      instance.toasts.style.width = instance.data.width;
      instance.toasts.style.maxWidth = instance.data.width;
    }
  }
});

Template.toast_entry.onRendered(function () {
  const instance = this;
  instance.element = instance.$('div.toast');
  if (BlazeBs4.toast.debug) console.log(`${instance.view.name}`, instance.data);
  instance.element
    .toast({
      autohide: instance.data.autohide === true,
      animation: instance.data.animation === true,
      delay: instance.data.delay ? parseInt(instance.data.delay) : 2000,
    })
    .toast('show')
    .css('minWidth', instance.data.width)
    ;
});
Template.toast_entry.onDestroyed(function () {
  const instance = this;
  if (BlazeBs4.toast.debug) console.info(`${instance.view.name}.onDestroyed ${instance.data.id}`);
});
Template.toast_entry.helpers({
  transparent() {
    const instance = Template.instance();
    return instance.data.transparent === true ? 'bg-transparent' : '';
  },
});
Template.toast_entry.events({
  'shown.bs.toast div.toast'(event, instance) {
    const toast = event.currentTarget;
    if (BlazeBs4.toast.debug) console.log(`shown ${toast.id}`);
  },

  'hidden.bs.toast div.toast'(event, instance) {
    const toast = event.currentTarget;
    if (BlazeBs4.toast.debug) console.log(`hidden ${toast.id}`);
    // since we Blaze.renderWithData we need to Blaze.remove
    Blaze.remove(instance.view);
  },
});
