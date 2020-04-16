function module(l,e,t){let o;t.link("meteor/templating",{Template(l){o=l}},0),t.link("./alert.html"),o.alerts.helpers({onClose:()=>l=>global.alert(l.type),onClosed:()=>l=>global.alert(l.type)})}

