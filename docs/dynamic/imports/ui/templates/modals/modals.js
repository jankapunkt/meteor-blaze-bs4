function module(e,l,t){let a;t.link("meteor/templating",{Template(e){a=e}},0),t.link("./modals.html"),a.modals.helpers({getEvent:e=>()=>console.log(e)}),a.modals.events({"show.bs.modal #exampleModalWhatever"(e,l){const t=l.$(e.relatedTarget),a=t.data("whatever"),o=l.$("#exampleModalWhatever");o.find(".modal-title").text("New message to "+a),o.find(".modal-body input").val(a)}})}

