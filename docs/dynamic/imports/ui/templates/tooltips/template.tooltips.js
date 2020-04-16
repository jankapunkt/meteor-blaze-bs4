function module(){Template.__checkName("tooltips"),Template.tooltips=new Template("Template.tooltips",(function(){var t=this;return[HTML.Raw('<h1>Tooltips</h1>\n\n    <h2 class="my-4">Examples</h2>\n\n    <p>Default placement is "top" so no additional parameter required for top tooltips.</p>\n\n    '),Blaze._TemplateWith((function(){return{title:Spacebars.call("Tooltip on top")}}),(function(){return Spacebars.include(t.lookupTemplate("tooltip"),(function(){return["\n        ",Blaze._TemplateWith((function(){return{colorType:Spacebars.call("secondary"),label:Spacebars.call("Tooltip on top")}}),(function(){return Spacebars.include(t.lookupTemplate("button"))})),"\n    "]}))})),"\n\n    ",Blaze._TemplateWith((function(){return{title:Spacebars.call("Tooltip on left"),placement:Spacebars.call("left")}}),(function(){return Spacebars.include(t.lookupTemplate("tooltip"),(function(){return["\n        ",Blaze._TemplateWith((function(){return{colorType:Spacebars.call("secondary"),label:Spacebars.call("Tooltip on left")}}),(function(){return Spacebars.include(t.lookupTemplate("button"))})),"\n    "]}))})),"\n\n    ",Blaze._TemplateWith((function(){return{title:Spacebars.call("Tooltip on right"),placement:Spacebars.call("right")}}),(function(){return Spacebars.include(t.lookupTemplate("tooltip"),(function(){return["\n        ",Blaze._TemplateWith((function(){return{colorType:Spacebars.call("secondary"),label:Spacebars.call("Tooltip on right")}}),(function(){return Spacebars.include(t.lookupTemplate("button"))})),"\n    "]}))})),"\n\n    ",Blaze._TemplateWith((function(){return{title:Spacebars.call("Tooltip on bottom"),placement:Spacebars.call("bottom")}}),(function(){return Spacebars.include(t.lookupTemplate("tooltip"),(function(){return["\n        ",Blaze._TemplateWith((function(){return{colorType:Spacebars.call("secondary"),label:Spacebars.call("Tooltip on bottom")}}),(function(){return Spacebars.include(t.lookupTemplate("button"))})),"\n    "]}))})),"\n    \n    ",Spacebars.include(t.lookupTemplate("code"),(function(){return["\n        ","{{",'#tooltip title="Tooltip on top"}}\n            ',"{{",'>button colorType="secondary" label="Tooltip on top"}}\n        ',"{{","/tooltip}}\n\n        ","{{",'#tooltip title="Tooltip on left" placement="left"}}\n            ',"{{",'>button colorType="secondary" label="Tooltip on left"}}\n        ',"{{","/tooltip}}\n\n        ","{{",'#tooltip title="Tooltip on right" placement="right"}}\n            ',"{{",'>button colorType="secondary" label="Tooltip on right"}}\n        ',"{{","/tooltip}}\n\n        ","{{",'#tooltip title="Tooltip on bottom" placement="bottom"}}\n            ',"{{",'>button colorType="secondary" label="Tooltip on bottom"}}\n        ',"{{","/tooltip}}\n    "]})),HTML.Raw("\n\n    <p>And with custom HTML added:</p>\n\n    "),Blaze._TemplateWith((function(){return{title:Spacebars.call("<em>Tooltip</em> <u>with</u> <b>HTML</b>"),html:Spacebars.call(!0)}}),(function(){return Spacebars.include(t.lookupTemplate("tooltip"),(function(){return["\n        ",Blaze._TemplateWith((function(){return{colorType:Spacebars.call("secondary"),label:Spacebars.call("Tooltip with HTML")}}),(function(){return Spacebars.include(t.lookupTemplate("button"))})),"\n    "]}))})),"\n\n    ",Spacebars.include(t.lookupTemplate("code"),(function(){return["\n        ","{{",'#tooltip title="',HTML.CharRef({html:"&lt;",str:"<"}),"em",HTML.CharRef({html:"&gt;",str:">"}),"Tooltip",HTML.CharRef({html:"&lt;",str:"<"}),"/em",HTML.CharRef({html:"&gt;",str:">"})," ",HTML.CharRef({html:"&lt;",str:"<"}),"u",HTML.CharRef({html:"&gt;",str:">"}),"with",HTML.CharRef({html:"&lt;",str:"<"}),"/u",HTML.CharRef({html:"&gt;",str:">"})," ",HTML.CharRef({html:"&lt;",str:"<"}),"b",HTML.CharRef({html:"&gt;",str:">"}),"HTML",HTML.CharRef({html:"&lt;",str:"<"}),"/b",HTML.CharRef({html:"&gt;",str:">"}),'" html=true}}\n            ',"{{",HTML.CharRef({html:"&gt;",str:">"}),'button colorType="secondary" label="Tooltip with HTML"}}\n        ',"{{","/tooltip}}\n    "]})),HTML.Raw('\n\n    <h2 class="my-4">Disabled elements</h2>\n\n    <p>Works out-of-the-box. Add <code>tabIndex</code> if required to avoid tabbing into the button.</p>\n\n    '),Blaze._TemplateWith((function(){return{title:Spacebars.call("Disabled tooltip"),tabIndex:Spacebars.call(0)}}),(function(){return Spacebars.include(t.lookupTemplate("tooltip"),(function(){return["\n        ",Blaze._TemplateWith((function(){return{colorType:Spacebars.call("secondary"),label:Spacebars.call("Disabled button"),style:Spacebars.call("pointer-events: none;"),disabled:Spacebars.call(!0)}}),(function(){return Spacebars.include(t.lookupTemplate("button"))})),"\n    "]}))})),"\n\n    ",Spacebars.include(t.lookupTemplate("code"),(function(){return["\n        ","{{",'#tooltip title="Disabled tooltip" tabIndex=0}}\n            ',"{{",'>button colorType="secondary" label="Disabled button" style="pointer-events: none;" disabled=true}}\n        ',"{{","/tooltip}}\n    "]})),HTML.Raw('\n\n\n    <h2 class="my-4">Options</h2>\n\n    <p>Options can be provided without the <code>data-</code> prefix, as they will be wrapped inside the component.</p>\n    <p>The interal attributes are wrapped as the following:</p>\n\n    '),Spacebars.include(t.lookupTemplate("code"),(function(){return"\n    {\n        tabindex: data.tabIndex || (void 0),\n        style: data.style || (void 0),\n        title: data.title || '',\n        'data-animation': data.animation || true,\n        'data-container': data.container || false,\n        'data-delay': data.delay || 0,\n        'data-html': data.html || false,\n        'data-placement': data.placement || 'top',\n        'data-selector': data.selector || false,\n        'data-template': data.template || (void 0),\n        'data-trigger': data.trigger || 'hover focus',\n        'data-offset': data.offset || 0,\n        'data-fallbackPlacement': data.fallbackPlacement || 'flip',\n        'data-boundary': data.boundary || 'scrollParent'\n    }\n    "}))]}))}
