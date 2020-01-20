import './toasts.html';
import { BlazeBs4 } from 'meteor/jkuester:blaze-bs4'

const englishCount = function(n){
  var r =`${n}th`;
  if(n == 1) r='1st';
  else if(n == 2) r='2nd';
  else if(n == 3) r=`${n}rd`;
  return r;
}

Template.toasts.onCreated(function(){
  const instance = this;
  instance.counter = 1;
});

Template.toasts.events({
  'click button'(event, instance) {
    const color = event.currentTarget.dataset.color;
    BlazeBs4.toast.add({
      label: `Hello World ${color}`,
      body:`<p>This is my ${englishCount(instance.counter++)} toast</p><p>${new Date()}</p>`,
      headerBg: color,
      headerFg: color == 'light' ? 'dark' : 'light',
      width:'30em',
      transparent: false,
      autohide: false,
      animation: true,
      showId: true,
    });
  },
});