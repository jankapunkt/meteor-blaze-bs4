function module(t,e,l){let n;l.link("meteor/templating",{Template(t){n=t}},0),l.link("./buttons.html"),n.buttons.helpers({exampleAtts:()=>({id:"example-atts-button",class:"btn btn-primary btn-lg",title:"this is an example of dynamic atts"})}),n.buttons.events({"click #example-atts-button"(t,e){global.alert(e.$(t.currentTarget).prop("title"))}})}

