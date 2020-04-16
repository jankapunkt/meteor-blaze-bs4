function module(t,o,l){let i;l.link("meteor/templating",{Template(t){i=t}},0),l.link("./tooltips.html"),i.tooltips.onRendered((function(){const t=this;t.tooltipsInitialized||(global.$((function(){global.$('[data-toggle="tooltip"]').tooltip()})),t.tooltipsInitialized=!0)}))}

