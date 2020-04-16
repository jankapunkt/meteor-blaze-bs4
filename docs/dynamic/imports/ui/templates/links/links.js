function module(t,l,i){let o;i.link("meteor/templating",{Template(t){o=t}},0),i.link("./link.html"),o.links.onRendered((function(){const t=this;t.tooltipsInitialized||(global.$((function(){global.$('[data-toggle="tooltip"]').tooltip()})),t.tooltipsInitialized=!0)}))}

