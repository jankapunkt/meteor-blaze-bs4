function module(e,t,s){let i,n;s.link("meteor/templating",{Template(e){i=e}},0),s.link("meteor/reactive-dict",{ReactiveDict(e){n=e}},1),s.link("./progress.html"),i.progressbars.onCreated((function(){const e=this;this.state=new n})),i.progressbars.helpers({isAnimated:()=>i.instance().state.get("isAnimated")}),i.progressbars.events({"click .toggle-progress-bar"(e,t){e.preventDefault();const s=t.state.get("isAnimated");t.state.set("isAnimated",!s)}})}

