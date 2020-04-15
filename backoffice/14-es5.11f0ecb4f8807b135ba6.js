function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _get(t,e,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=_superPropBase(t,e);if(i){var o=Object.getOwnPropertyDescriptor(i,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){return function(){var e,n=_getPrototypeOf(t);if(_isNativeReflectConstruct()){var i=_getPrototypeOf(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{wKJ7:function(t,e,n){"use strict";n.r(e);var i,o=n("ofXK"),r=n("3Pt+"),c=n("tyNb"),s=n("5+WD"),a=n("mrSG"),d=n("THE0"),l=n("OaWH"),u=n("C/ya"),m=n("g+Po"),f=n("D/9M"),g=n("fXoL"),b=n("0IaG"),p=n("BAfr"),h=n("m6yr"),v=n("47y3"),_=function(){return{class:"backoffice-info-with-circle"}},y=function(t){return{id:"about",name:"About",icon:t}},O=function(){return{class:"backoffice-documents"}},C=function(t,e){return{id:"systems",name:"Systems",count:t,icon:e}},w=function(t,e){return[t,e]},P=((i=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,i,o,r){var c;return _classCallCheck(this,n),(c=e.call(this,t,i,o))._service=t,c._route=i,c._router=o,c._dialog=r,c.service=c._service.Triggers,c}return _createClass(n,[{key:"ngOnInit",value:function(){_get(_getPrototypeOf(n.prototype),"ngOnInit",this).call(this),this._service.title="Triggers"}},{key:"loadValues",value:function(){var t=this;this._service.Systems.query({offset:0,limit:1,trigger_id:this.item.id}).then((function(e){return t.system_count=t._service.Systems.last_total||e.length||0}))}},{key:"newItem",value:function(){var t=this;this.modal_ref||(this.modal_ref=this._dialog.open(f.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:new d.o(this._service.Triggers,{}),service:this._service.Triggers}}),this.subscription("modal_events",this.modal_ref.componentInstance.event.subscribe((function(e){"done"===e.reason&&t._router.navigate(["/triggers",e.metadata.item.id])}))),this.modal_ref.afterClosed().subscribe((function(){t.unsub("modal_events"),t.modal_ref=null})))}},{key:"editItem",value:function(){var t=this;this.item&&!this.modal_ref&&(this.modal_ref=this._dialog.open(f.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:this.item,service:this._service.Triggers}}),this.modal_ref.afterClosed().subscribe((function(){t.unsub("modal_events"),t.modal_ref=null})))}},{key:"deleteItem",value:function(){var t=this;this.item&&!this.modal_ref&&(this.modal_ref=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:"Delete trigger",content:"<p>Are you sure you want delete this trigger?</p><p>Deleting this trigger will <strong>immediately</strong> remove it from all associated systems and zones</p>",icon:{type:"icon",class:"backoffice-trash"}}})),this.subscription("modal_events",this.modal_ref.componentInstance.event.subscribe((function(e){return Object(a.b)(t,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0="done"===e.reason,!t.t0){t.next=8;break}return this.modal_ref.componentInstance.loading="Deleting trigger...",t.next=5,this.item.delete().catch((function(t){throw n.modal_ref.componentInstance.loading=null,n._service.notifyError("Error deleting trigger. Error: ".concat(t.message||t)),t}));case 5:this._router.navigate(["/triggers"]),this._service.set("BACKOFFICE.removed",this.item.id),this.modal_ref.close();case 8:case"end":return t.stop()}}),t,this)})))}))),this.modal_ref.afterClosed().subscribe((function(){t.unsub("modal_events"),t.modal_ref=null})))}}]),n}(u.a)).\u0275fac=function(t){return new(t||i)(g.Rb(l.a),g.Rb(c.a),g.Rb(c.c),g.Rb(b.b))},i.\u0275cmp=g.Lb({type:i,selectors:[["app-triggers"]],features:[g.Ab],decls:5,vars:17,consts:[[1,"container"],[1,"sidebar"],["heading","Triggers",3,"module","close","event"],[3,"touchrelease"],["name","trigger","route","triggers",3,"item","loading","tabs","event"]],template:function(t,e){1&t&&(g.Xb(0,"div",0),g.Xb(1,"div",1),g.Xb(2,"sidebar",2),g.fc("event",(function(t){return e.sidebarEvent(t)})),g.Wb(),g.Wb(),g.Xb(3,"main",3),g.fc("touchrelease",(function(){return e.show_sidebar=!1})),g.Xb(4,"item-display",4),g.fc("event",(function(t){return e.itemEvent(t)})),g.Wb(),g.Wb(),g.Wb()),2&t&&(g.Hb("show",e.show_sidebar),g.Db(2),g.pc("module",e.module)("close",e.show_sidebar),g.Db(2),g.pc("item",e.item)("loading",e.loading_item)("tabs",g.sc(14,w,g.rc(8,y,g.qc(7,_)),g.sc(11,C,e.system_count,g.qc(10,O)))))},directives:[p.a,h.b,v.a],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%;width:100%}@media only screen and (orientation:portrait) and (max-width:450px){.container[_ngcontent-%COMP%]{flex-direction:column}}@media only screen and (orientation:landscape) and (max-width:800px){.container[_ngcontent-%COMP%]{flex-direction:column}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}.sidebar[_ngcontent-%COMP%]{height:100%;width:20em}@media only screen and (orientation:portrait) and (max-width:450px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;transition:height .3s}}@media only screen and (orientation:landscape) and (max-width:800px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;transition:height .3s}}main[_ngcontent-%COMP%]{position:relative;height:100%;overflow:hidden;flex:1;background-color:#f0f0f0}@media only screen and (orientation:portrait) and (max-width:450px){main[_ngcontent-%COMP%]{transition:height .3s;width:100%}}@media only screen and (orientation:landscape) and (max-width:800px){main[_ngcontent-%COMP%]{transition:height .3s;width:100%}}"]}),i),k=n("5f3J"),M=n("xQV9"),W=n("mrP1"),I=n("Qu3c"),X=n("GrRB"),x=n("bTqV"),A=n("0njA"),D=n("8r66"),S=function(){return{class:"backoffice-edit"}},j=function(){return{class:"backoffice-trash"}};function R(t,e){if(1&t){var n=g.Yb();g.Xb(0,"div",18),g.Sb(1,"div",19),g.Xb(2,"div",20),g.Kc(3),g.kc(4,"json"),g.kc(5,"json"),g.Wb(),g.Xb(6,"button",9),g.fc("tapped",(function(){g.Ac(n);var t=e.$implicit;return g.jc(3).editCondition(t)})),g.Sb(7,"app-icon",10),g.Wb(),g.Xb(8,"button",21),g.fc("tapped",(function(){g.Ac(n);var t=e.$implicit;return g.jc(3).confirmRemoveCondition(t)})),g.Sb(9,"app-icon",10),g.Wb(),g.Wb()}if(2&t){var i=e.$implicit,o=g.jc(3);g.Db(3),g.Oc(" ",g.lc(4,6,i.left)," ",i.operator," ",g.lc(5,8,i.right)," "),g.Db(3),g.pc("disabled",!o.template_system),g.Db(1),g.pc("icon",g.qc(10,S)),g.Db(2),g.pc("icon",g.qc(11,j))}}function T(t,e){if(1&t){var n=g.Yb();g.Xb(0,"div",18),g.Sb(1,"div",19),g.Xb(2,"div",20),g.Kc(3),g.Wb(),g.Xb(4,"button",9),g.fc("tapped",(function(){g.Ac(n);var t=e.$implicit;return g.jc(3).editCondition(t)})),g.Sb(5,"app-icon",10),g.Wb(),g.Xb(6,"button",21),g.fc("tapped",(function(){g.Ac(n);var t=e.$implicit;return g.jc(3).confirmRemoveCondition(t)})),g.Sb(7,"app-icon",10),g.Wb(),g.Wb()}if(2&t){var i=e.$implicit,o=g.jc(3);g.Db(3),g.Nc(" ","at"===i.type?"At time":"CRON"," ","at"===i.type?i.time:i.cron," "),g.Db(1),g.pc("disabled",!o.template_system),g.Db(1),g.pc("icon",g.qc(5,S)),g.Db(2),g.pc("icon",g.qc(6,j))}}function E(t,e){if(1&t&&(g.Xb(0,"div",13),g.Xb(1,"div",14),g.Kc(2,"Variable Comparison Condtions"),g.Wb(),g.Xb(3,"div",15),g.Ic(4,R,10,12,"div",16),g.Wb(),g.Xb(5,"div",14),g.Kc(6,"Time Dependent Conditions"),g.Wb(),g.Xb(7,"div",17),g.Ic(8,T,8,7,"div",16),g.Wb(),g.Wb()),2&t){var n=g.jc(2);g.Db(4),g.pc("ngForOf",n.comparisons)("ngForTrackBy",n.i),g.Db(4),g.pc("ngForOf",n.time_dependents)("ngForTrackBy",n.i)}}function F(t,e){1&t&&g.Sb(0,"div",28)}var K=function(){return{class:"backoffice-select-arrows"}};function N(t,e){if(1&t){var n=g.Yb();g.Xb(0,"div",25),g.Xb(1,"div",26),g.Sb(2,"app-icon",10),g.Wb(),g.Xb(3,"div",20),g.Kc(4),g.kc(5,"json"),g.Wb(),g.Xb(6,"button",9),g.fc("tapped",(function(){g.Ac(n);var t=e.$implicit;return g.jc(3).editAction(t)})),g.Sb(7,"app-icon",10),g.Wb(),g.Xb(8,"button",21),g.fc("tapped",(function(){g.Ac(n);var t=e.$implicit;return g.jc(3).confirmRemoveAction(t)})),g.Sb(9,"app-icon",10),g.Wb(),g.Ic(10,F,1,0,"div",27),g.Wb()}if(2&t){var i=e.$implicit,o=g.jc(3);g.Db(2),g.pc("icon",g.qc(9,K)),g.Db(2),g.Oc(" ",i.mod,", ",i.method,"(",g.lc(5,7,i.args),") "),g.Db(2),g.pc("disabled",!o.template_system),g.Db(1),g.pc("icon",g.qc(10,S)),g.Db(2),g.pc("icon",g.qc(11,j))}}function L(t,e){1&t&&g.Sb(0,"div",28)}function q(t,e){if(1&t){var n=g.Yb();g.Xb(0,"div",25),g.Xb(1,"div",26),g.Sb(2,"app-icon",10),g.Wb(),g.Xb(3,"div",20),g.Xb(4,"span",29),g.kc(5,"formatList"),g.Kc(6),g.Wb(),g.Kc(7),g.Wb(),g.Xb(8,"button",9),g.fc("tapped",(function(){g.Ac(n);var t=e.$implicit;return g.jc(3).editAction(t)})),g.Sb(9,"app-icon",10),g.Wb(),g.Xb(10,"button",21),g.fc("tapped",(function(){g.Ac(n);var t=e.$implicit;return g.jc(3).confirmRemoveAction(t)})),g.Sb(11,"app-icon",10),g.Wb(),g.Ic(12,L,1,0,"div",27),g.Wb()}if(2&t){var i=e.$implicit,o=g.jc(3);g.Db(2),g.pc("icon",g.qc(10,K)),g.Db(2),g.pc("matTooltip",g.lc(5,8,i.emails)),g.Db(2),g.Nc("",i.emails.length," Address",1===i.emails.length?"":"es",""),g.Db(1),g.Mc(" | Body Length: ",i.content.length," "),g.Db(1),g.pc("disabled",!o.template_system),g.Db(1),g.pc("icon",g.qc(11,S)),g.Db(2),g.pc("icon",g.qc(12,j))}}function J(t,e){if(1&t){var n=g.Yb();g.Xb(0,"div",13),g.Xb(1,"div",14),g.Kc(2,"Function Call Actions"),g.Wb(),g.Xb(3,"div",22),g.fc("cdkDropListDropped",(function(t){return g.Ac(n),g.jc(2).confirmReorder("function",t)})),g.Ic(4,N,11,12,"div",23),g.Wb(),g.Xb(5,"div",14),g.Kc(6,"Email Actions"),g.Wb(),g.Xb(7,"div",24),g.fc("cdkDropListDropped",(function(t){return g.Ac(n),g.jc(2).confirmReorder("mailer",t)})),g.Ic(8,q,13,13,"div",23),g.Wb(),g.Wb()}if(2&t){var i=g.jc(2);g.Db(4),g.pc("ngForOf",i.functions)("ngForTrackBy",i.i),g.Db(4),g.pc("ngForOf",i.mailers)("ngForTrackBy",i.i)}}var B=function(){return{class:"backoffice-plus"}};function $(t,e){if(1&t){var n=g.Yb();g.Xb(0,"div",3),g.Xb(1,"div",4),g.Xb(2,"section"),g.Xb(3,"div",5),g.Xb(4,"label",6),g.Kc(5,"Template System: "),g.Wb(),g.Xb(6,"item-search-field",7),g.fc("ngModelChange",(function(t){return g.Ac(n),g.jc().template_system=t})),g.Wb(),g.Wb(),g.Wb(),g.Xb(7,"header"),g.Xb(8,"div",8),g.Xb(9,"button",9),g.fc("tapped",(function(){return g.Ac(n),g.jc().addCondition()})),g.Sb(10,"app-icon",10),g.Wb(),g.Wb(),g.Xb(11,"div",11),g.Kc(12,"Conditions"),g.Wb(),g.Wb(),g.Xb(13,"section"),g.Ic(14,E,9,4,"div",12),g.Wb(),g.Xb(15,"header"),g.Xb(16,"div",8),g.Xb(17,"button",9),g.fc("tapped",(function(){return g.Ac(n),g.jc().addAction()})),g.Sb(18,"app-icon",10),g.Wb(),g.Wb(),g.Xb(19,"div",11),g.Kc(20,"Actions"),g.Wb(),g.Wb(),g.Xb(21,"section"),g.Ic(22,J,9,4,"div",12),g.Wb(),g.Wb(),g.Wb()}if(2&t){var i=g.jc(),o=g.xc(2),r=g.xc(4);g.Db(6),g.pc("service",i.system_service)("ngModel",i.template_system),g.Db(3),g.pc("disabled",!i.template_system),g.Db(1),g.pc("icon",g.qc(10,B)),g.Db(4),g.pc("ngIf",i.comparisons.length||i.time_dependents.length)("ngIfElse",o),g.Db(3),g.pc("disabled",!i.template_system),g.Db(1),g.pc("icon",g.qc(11,B)),g.Db(4),g.pc("ngIf",i.functions.length||i.mailers.length)("ngIfElse",r)}}function z(t,e){1&t&&(g.Xb(0,"div",30),g.Xb(1,"div",11),g.Kc(2,"No condtions for trigger"),g.Wb(),g.Wb())}function H(t,e){1&t&&(g.Xb(0,"div",30),g.Xb(1,"div",11),g.Kc(2,"No actions for trigger"),g.Wb(),g.Wb())}var Y,V=((Y=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,i){var o;return _classCallCheck(this,n),(o=e.call(this))._service=t,o._dialog=i,o.comparisons=[],o.time_dependents=[],o.functions=[],o.mailers=[],o}return _createClass(n,[{key:"ngOnInit",value:function(){var t=this;this.subscription("item",this._service.listen("BACKOFFICE.active_item",(function(e){t.item=e,t.ngOnChanges({item:new g.K(null,t.item,!1)})})))}},{key:"ngOnChanges",value:function(t){t.item&&(this.item&&this.item.conditions&&(this.comparisons=this.item.conditions.comparisons||[],this.time_dependents=this.item.conditions.time_dependents||[],this.functions=this.item.actions.functions||[],this.mailers=this.item.actions.mailers||[]),this.confirm_ref&&(this.confirm_ref.close(),this.confirm_ref=null,this.unsub("delete_confirm")))}},{key:"addCondition",value:function(){this._dialog.open(W.a,{width:"auto",height:"auto",data:{trigger:this.item,system:this.template_system}})}},{key:"editCondition",value:function(t){this._dialog.open(W.a,{width:"auto",height:"auto",data:{trigger:this.item,condition:JSON.parse(JSON.stringify(t)),system:this.template_system}})}},{key:"addAction",value:function(){this._dialog.open(M.a,{data:{trigger:this.item,system:this.template_system}})}},{key:"editAction",value:function(t){this._dialog.open(M.a,{data:{trigger:this.item,action:t,system:this.template_system}})}},{key:"confirmRemoveCondition",value:function(t){var e=this;this.confirm_ref=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:"Remove trigger condition",content:"<p>Are you sure you want remove this trigger condition?</p><p>All systems using this trigger will be updated <strong>immediately</strong>.</p>",icon:{type:"icon",class:"backoffice-trash"}}})),this.subscription("delete_confirm",this.confirm_ref.componentInstance.event.subscribe((function(n){"done"===n.reason&&(e.confirm_ref.componentInstance.loading="Removing trigger condition...",e.removeCondition(t))})))}},{key:"removeCondition",value:function(t){var e=this,n={comparisons:_toConsumableArray(this.comparisons),time_dependents:_toConsumableArray(this.time_dependents)};if(t.type){var i=this.time_dependents.findIndex((function(e){return JSON.stringify(e)===JSON.stringify(t)}));n.time_dependents.splice(i,1)}else{var o=this.comparisons.findIndex((function(e){return JSON.stringify(e)===JSON.stringify(t)}));n.comparisons.splice(o,1)}this.item.storePendingChange("conditions",n),this.item.save().then((function(){return e._service.notifySuccess("Successfully removed trigger condition.")}),(function(t){return e._service.notifyError("Error removing trigger condition. Error: ".concat(t.message||t))}))}},{key:"confirmRemoveAction",value:function(t){var e=this;this.confirm_ref=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:"Remove trigger action",content:"<p>Are you sure you want remove this trigger action?</p><p>All systems using this trigger will be updated <strong>immediately</strong>.</p>",icon:{type:"icon",class:"backoffice-trash"}}})),this.subscription("delete_confirm",this.confirm_ref.componentInstance.event.subscribe((function(n){"done"===n.reason&&(e.confirm_ref.componentInstance.loading="Removing trigger action...",e.removeAction(t))})))}},{key:"removeAction",value:function(t){var e=this,n={functions:_toConsumableArray(this.item.actions.functions),mailers:_toConsumableArray(this.item.actions.mailers)};if(t.emails){var i=this.mailers.findIndex((function(e){return JSON.stringify(e)===JSON.stringify(t)}));n.mailers.splice(i,1)}else{var o=this.functions.findIndex((function(e){return JSON.stringify(e)===JSON.stringify(t)}));n.functions.splice(o,1)}this.item.storePendingChange("actions",n),this.item.save().then((function(){return e._service.notifySuccess("Successfully removed trigger action.")}),(function(t){return e._service.notifyError("Error removing trigger action. Error: ".concat(t.message||t))}))}},{key:"confirmReorder",value:function(t,e){var n=this;this.confirm_ref=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:"Reoreder trigger ".concat(t," action"),content:"<p>Are you sure you want remove this trigger condition?</p><p>All systems using this trigger will be updated <strong>immediately</strong>.</p>",icon:{type:"icon",class:"backoffice-trash"}}})),this.subscription("delete_confirm",this.confirm_ref.componentInstance.event.subscribe((function(i){"done"===i.reason&&(n.confirm_ref.componentInstance.loading="Reordering trigger ".concat(t," action..."),n.reorderAction(t,e))})))}},{key:"reorderAction",value:function(t,e){var n=this,i=_toConsumableArray("function"===t?this.functions:this.mailers);Object(s.f)(i,e.previousIndex,e.currentIndex),this.item.storePendingChange("actions",{functions:"function"===t?i:this.functions,mailers:"function"===t?this.mailers:i}),this.item.save().then((function(){return n._service.notifySuccess("Successfully re-ordered trigger ".concat(t," action."))}),(function(e){return n._service.notifyError("Error re-ordered trigger ".concat(t," action. Error: ").concat(e.message||e))}))}},{key:"system_service",get:function(){return this._service.Systems}}]),n}(k.a)).\u0275fac=function(t){return new(t||Y)(g.Rb(l.a),g.Rb(b.b))},Y.\u0275cmp=g.Lb({type:Y,selectors:[["trigger-about"]],inputs:{item:"item"},features:[g.Ab,g.Bb],decls:5,vars:1,consts:[["class","container",4,"ngIf"],["no_conditions",""],["no_actions",""],[1,"container"],[1,"settings"],[1,"field"],["for","driver","matTooltip","System to use for available status variables and function calls"],[3,"service","ngModel","ngModelChange"],[1,"action"],["mat-icon-button","",3,"disabled","tapped"],[3,"icon"],[1,"text"],["class","list",4,"ngIf","ngIfElse"],[1,"list"],[1,"header"],[1,"group","comparisons"],["class","item",4,"ngFor","ngForOf","ngForTrackBy"],[1,"group","time-dependents"],[1,"item"],[1,"handle"],[1,"details"],["mat-icon-button","",3,"tapped"],["cdkDropList","",1,"group","functions",3,"cdkDropListDropped"],["class","item","cdkDrag","",4,"ngFor","ngForOf","ngForTrackBy"],["cdkDropList","",1,"group","emails",3,"cdkDropListDropped"],["cdkDrag","",1,"item"],["cdkDragHandle","",1,"handle"],["class","placeholder",4,"cdkDragPlaceholder"],[1,"placeholder"],[3,"matTooltip"],[1,"info-block"]],template:function(t,e){1&t&&(g.Ic(0,$,23,12,"div",0),g.Ic(1,z,3,0,"ng-template",null,1,g.Jc),g.Ic(3,H,3,0,"ng-template",null,2,g.Jc)),2&t&&g.pc("ngIf",e.item)},directives:[o.m,I.a,X.a,r.k,r.n,x.b,h.b,A.a,o.l,s.d,s.a,s.b,s.c],pipes:[o.g,D.a],styles:[".container[_ngcontent-%COMP%]{padding:1em}header[_ngcontent-%COMP%]{display:flex;align-items:center;font-weight:700;font-size:1.1em}section[_ngcontent-%COMP%]{padding:.5em .25em}.no-item[_ngcontent-%COMP%]{font-size:.75em}.group[_ngcontent-%COMP%]{flex-direction:column}.group[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.item[_ngcontent-%COMP%]{border-radius:4px;margin:2px 0}.item[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:2.5rem;width:2.5rem}.item[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{cursor:-webkit-grab;cursor:grab}.item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{flex:1;min-width:50%;white-space:nowrap;font-size:.6em;padding:0 .5rem;overflow:hidden;text-overflow:ellipsis}.item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Fira Code,monospace}.item[_ngcontent-%COMP%]:nth-child(2n){background-color:#f0f0f0}.item[_ngcontent-%COMP%]:hover{background-color:#ccc}button[_ngcontent-%COMP%]{margin:.25em}header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 .5em 0 0;border:1px solid rgba(0,0,0,.85)}header[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{border-color:#ccc}.header[_ngcontent-%COMP%]{padding:1em;font-size:1em;font-weight:500}.cdk-drag-preview[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 0 rgba(0,0,0,.12)}.cdk-drag-preview[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:none}.placeholder[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1);border:4px dashed rgba(0,0,0,.6);height:3em;width:100%;border-radius:4px}"]}),Y),G=n("Cvi9"),Q=n("oIn+"),U=function(t){return["/systems",t]};function Z(t,e){if(1&t&&(g.Xb(0,"a",12),g.Kc(1),g.Wb()),2&t){var n=g.jc().$implicit;g.pc("routerLink",g.rc(3,U,n.system_id))("matTooltip",n.system_id),g.Db(1),g.Mc(" ",n.system_name," ")}}var tt=function(){return{class:"backoffice-trash"}};function et(t,e){if(1&t){var n=g.Yb();g.Xb(0,"tr"),g.Xb(1,"td",5),g.Sb(2,"div",8),g.Wb(),g.Xb(3,"td",6),g.Ic(4,Z,2,5,"a",9),g.Wb(),g.Xb(5,"td"),g.Kc(6),g.kc(7,"dateFrom"),g.Wb(),g.Xb(8,"td",5),g.Xb(9,"button",10),g.fc("tapped",(function(){g.Ac(n);var t=e.$implicit;return g.jc(3).delete(t)})),g.Sb(10,"app-icon",11),g.Wb(),g.Wb(),g.Wb()}if(2&t){var i=e.$implicit;g.Db(2),g.Hb("active",i.enabled),g.Db(2),g.pc("ngIf",i.system_id),g.Db(2),g.Lc(g.lc(7,5,1e3*(i.created_at-0))),g.Db(4),g.pc("icon",g.qc(7,tt))}}function nt(t,e){if(1&t&&(g.Xb(0,"table"),g.Xb(1,"thead"),g.Sb(2,"td",5),g.Xb(3,"td",6),g.Kc(4,"Name"),g.Wb(),g.Xb(5,"td",6),g.Kc(6,"Added"),g.Wb(),g.Sb(7,"td",5),g.Wb(),g.Xb(8,"tbody"),g.Ic(9,et,11,8,"tr",7),g.Wb(),g.Wb()),2&t){var n=g.jc(2);g.Db(9),g.pc("ngForOf",n.system_trigger_list)}}function it(t,e){if(1&t&&(g.Xb(0,"div",2),g.Xb(1,"div",3),g.Ic(2,nt,10,1,"table",4),g.Wb(),g.Wb()),2&t){var n=g.jc(),i=g.xc(2);g.Db(2),g.pc("ngIf",n.system_trigger_list.length>0)("ngIfElse",i)}}function ot(t,e){1&t&&(g.Xb(0,"div",13),g.Xb(1,"div",14),g.Kc(2,"No systems with trigger"),g.Wb(),g.Wb())}var rt,ct=[{path:":id",component:P,children:[{path:"about",component:V},{path:"systems",component:(rt=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,i,o){var r;return _classCallCheck(this,n),(r=e.call(this))._service=t,r._dialog=i,r._composer=o,r.system_trigger_list=[],r.connected={},r}return _createClass(n,[{key:"ngOnInit",value:function(){var t=this;this.subscription("item",this._service.listen("BACKOFFICE.active_item",(function(e){t.item=e,t.ngOnChanges({item:new g.K(null,t.item,!1)})})))}},{key:"ngOnChanges",value:function(t){t.item&&this.item&&this.loadSystemTriggers()}},{key:"loadSystemTriggers",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this._service.Systems.query({trigger_id:this.item.id,offset:e}).then((function(e){return t.system_trigger_list=e||[]}),(function(){return null}))}},{key:"delete",value:function(t){var e=this;if(t){var n=this._dialog.open(m.b,Object.assign(Object.assign({},m.a),{data:{title:"Remove trigger",content:'<p>Are you sure you want remove this trigger?</p><p>Deleting this trigger will <strong>immediately</strong> remove from the system "'.concat(t.system_name||"",'"</p>'),icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",n.componentInstance.event.subscribe((function(i){return Object(a.b)(e,void 0,void 0,regeneratorRuntime.mark((function e(){var o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0="done"===i.reason,!e.t0){e.next=8;break}return n.componentInstance.loading="Removing trigger...",e.next=5,this.deleteTrigger(t).catch((function(t){throw n.componentInstance.loading=null,o._service.notifyError("Error removing trigger. Error: ".concat(t.message||t)),t}));case 5:this.loadSystemTriggers(),n.close(),this.unsub("delete_confirm");case 8:case"end":return e.stop()}}),e,this)})))})))}}},{key:"deleteTrigger",value:function(t){var e=this;return new Promise((function(n,i){e._composer.http.delete("".concat(e._composer.auth.api_endpoint,"/systems/").concat(t.system_id,"/triggers/").concat(t.id)).subscribe((function(t){return null}),(function(t){return i(t)}),(function(){return n()}))}))}}]),n}(k.a),rt.\u0275fac=function(t){return new(t||rt)(g.Rb(l.a),g.Rb(b.b),g.Rb(G.c))},rt.\u0275cmp=g.Lb({type:rt,selectors:[["trigger-systems"]],inputs:{item:"item"},features:[g.Ab,g.Bb],decls:3,vars:1,consts:[["class","container",4,"ngIf"],["empty_state",""],[1,"container"],[1,"settings"],[4,"ngIf","ngIfElse"],[1,"small"],[1,"flex"],[4,"ngFor","ngForOf"],[1,"state"],[3,"routerLink","matTooltip",4,"ngIf"],["mat-icon-button","",3,"tapped"],[3,"icon"],[3,"routerLink","matTooltip"],[1,"info-block"],[1,"text"]],template:function(t,e){1&t&&(g.Ic(0,it,3,2,"div",0),g.Ic(1,ot,3,0,"ng-template",null,1,g.Jc)),2&t&&g.pc("ngIf",e.item)},directives:[o.m,o.l,x.b,h.b,A.a,c.f,I.a],pipes:[Q.a],styles:[".container[_ngcontent-%COMP%]{padding:1em}.list[_ngcontent-%COMP%]{margin-top:.5em}tbody[_ngcontent-%COMP%]{font-size:.9em}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap}div[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{width:2em}div[_ngcontent-%COMP%]   .duo[_ngcontent-%COMP%]{width:4em}div[_ngcontent-%COMP%]   .duo[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{display:inline-flex}.action[_ngcontent-%COMP%]{height:1.5em;width:1.5em;min-width:1.5em;border-radius:.65em;display:flex;align-items:center;justify-content:center;font-size:1.3em}.action[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.1)}.state[_ngcontent-%COMP%]{height:1.5em;width:1.5em;margin:.25em;background-color:#d32f2f;border-radius:.8em;transition:margin .25s,height .25s,width .25s,background-color .3s}.state.active[_ngcontent-%COMP%]{background-color:#4caf50;height:.75em;width:.75em;margin:.625em}.select[_ngcontent-%COMP%]{display:flex;align-items:center}.select[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{flex:1}"]}),rt)},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:"-"}],st=n("PCNd");n.d(e,"AppTriggersModule",(function(){return dt}));var at,dt=((at=function t(){_classCallCheck(this,t)}).\u0275mod=g.Pb({type:at}),at.\u0275inj=g.Ob({factory:function(t){return new(t||at)},imports:[[o.c,r.g,c.g.forChild(ct),st.a,s.e]]}),at)}}]);