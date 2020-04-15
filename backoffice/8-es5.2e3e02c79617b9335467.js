function _createForOfIteratorHelper(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=_unsupportedIterableToArray(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o,a=!0,c=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==i.return||i.return()}finally{if(c)throw o}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _get(t,e,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=_superPropBase(t,e);if(i){var o=Object.getOwnPropertyDescriptor(i,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){return function(){var e,n=_getPrototypeOf(t);if(_isNativeReflectConstruct()){var i=_getPrototypeOf(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{aCzL:function(t,e,n){"use strict";n.r(e);var i,o=n("ofXK"),a=n("3Pt+"),c=n("tyNb"),r=n("THE0"),s=n("OaWH"),l=n("C/ya"),u=n("D/9M"),d=n("g+Po"),f=n("fXoL"),h=n("0IaG"),p=n("BAfr"),m=n("m6yr"),b=n("47y3"),g=function(){return{class:"backoffice-publish"}},_=function(t,e){return{id:"applications",name:"Applications",count:t,icon:e}},v=function(){return{class:"backoffice-lock-open"}},y=function(t,e){return{id:"authentication",name:"Authentication",count:t,icon:e}},O=function(){return{class:"backoffice-users"}},w=function(t,e){return{id:"users",name:"Users",count:t,icon:e}},C=function(t,e,n){return[t,e,n]},P=((i=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,i,o,a){var c;return _classCallCheck(this,n),(c=e.call(this,t,i,o))._service=t,c._route=i,c._router=o,c._dialog=a,c.service=c._service.Domains,c}return _createClass(n,[{key:"ngOnInit",value:function(){_get(_getPrototypeOf(n.prototype),"ngOnInit",this).call(this),this._service.title="Domains"}},{key:"loadValues",value:function(){var t=this,e={offset:0,limit:1,owner:this.item.id};this._service.Applications.query(e).then((function(e){return t.applications=t._service.Applications.last_total||e.length||0})),e={offset:0,limit:1,authority_id:this.item.id},this._service.Users.query(e).then((function(e){return t.user_count=t._service.Users.last_total||e.length||0}))}},{key:"newItem",value:function(){var t=this;this.modal_ref||(this.modal_ref=this._dialog.open(u.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:new r.d(this._service.Domains,{}),service:this._service.Domains}}),this.subscription("modal_events",this.modal_ref.componentInstance.event.subscribe((function(e){"done"===e.reason&&t._router.navigate(["/domains",e.metadata.item.id])}))),this.modal_ref.afterClosed().subscribe((function(){t.unsub("modal_events"),t.modal_ref=null})))}},{key:"editItem",value:function(){var t=this;this.item&&!this.modal_ref&&(this.modal_ref=this._dialog.open(u.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:this.item,service:this._service.Domains}}),this.modal_ref.afterClosed().subscribe((function(){t.unsub("modal_events"),t.modal_ref=null})))}},{key:"deleteItem",value:function(){var t=this;this.item&&!this.modal_ref&&(this.modal_ref=this._dialog.open(d.b,Object.assign(Object.assign({},d.a),{data:{title:"Delete domain",content:"<p>Are you sure you want delete this domain?</p><p>The domain will be deleted <strong>immediately.</strong></p>",icon:{type:"icon",class:"backoffice-trash"}}})),this.subscription("delete_confirm",this.modal_ref.componentInstance.event.subscribe((function(e){"done"===e.reason&&(t.modal_ref.componentInstance.loading="Deleting domain...",t.item.delete().then((function(){t._service.notifySuccess('Successfully deleted domain "'.concat(t.item.name,'".')),t._router.navigate(["/users"]),t._service.set("BACKOFFICE.removed",t.item.id),t.modal_ref.close()}),(function(e){t.modal_ref.componentInstance.loading=null,t._service.notifyError("Error deleting domain. Error: ".concat(e))})))}))),this.modal_ref.afterClosed().subscribe((function(){t.unsub("modal_events"),t.modal_ref=null})))}}]),n}(l.a)).\u0275fac=function(t){return new(t||i)(f.Rb(s.a),f.Rb(c.a),f.Rb(c.c),f.Rb(h.b))},i.\u0275cmp=f.Lb({type:i,selectors:[["app-domains"]],features:[f.Ab],decls:5,vars:22,consts:[[1,"container"],[1,"sidebar"],["heading","Domains",3,"module","close","event"],[3,"touchrelease"],["name","domain","route","domains",3,"item","tabs","event"]],template:function(t,e){1&t&&(f.Xb(0,"div",0),f.Xb(1,"div",1),f.Xb(2,"sidebar",2),f.fc("event",(function(t){return e.sidebarEvent(t)})),f.Wb(),f.Wb(),f.Xb(3,"main",3),f.fc("touchrelease",(function(){return e.show_sidebar=!1})),f.Xb(4,"item-display",4),f.fc("event",(function(t){return e.itemEvent(t)})),f.Wb(),f.Wb(),f.Wb()),2&t&&(f.Hb("show",e.show_sidebar),f.Db(2),f.pc("module",e.module)("close",e.show_sidebar),f.Db(2),f.pc("item",e.item)("tabs",f.tc(18,C,f.sc(7,_,e.applications||0,f.qc(6,g)),f.sc(11,y,e.auth_sources||0,f.qc(10,v)),f.sc(15,w,e.user_count||0,f.qc(14,O)))))},directives:[p.a,m.b,b.a],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%;width:100%}@media only screen and (orientation:portrait) and (max-width:450px){.container[_ngcontent-%COMP%]{flex-direction:column}}@media only screen and (orientation:landscape) and (max-width:800px){.container[_ngcontent-%COMP%]{flex-direction:column}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}.sidebar[_ngcontent-%COMP%]{height:100%;width:20em}@media only screen and (orientation:portrait) and (max-width:450px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;transition:height .3s}}@media only screen and (orientation:landscape) and (max-width:800px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;transition:height .3s}}main[_ngcontent-%COMP%]{position:relative;height:100%;overflow:hidden;flex:1;background-color:#f0f0f0}@media only screen and (orientation:portrait) and (max-width:450px){main[_ngcontent-%COMP%]{transition:height .3s;width:100%}}@media only screen and (orientation:landscape) and (max-width:800px){main[_ngcontent-%COMP%]{transition:height .3s;width:100%}}"]}),i),A=n("5f3J"),W=n("bTqV"),k=n("Qu3c"),I=n("0njA"),X=function(){return{class:"backoffice-edit"}},x=function(){return{class:"backoffice-trash"}};function M(t,e){if(1&t){var n=f.Yb();f.Xb(0,"tr"),f.Xb(1,"td",12),f.Kc(2),f.Wb(),f.Xb(3,"td",8),f.Xb(4,"a",13),f.Kc(5),f.Wb(),f.Wb(),f.Xb(6,"td",9),f.Kc(7),f.Wb(),f.Xb(8,"td",10),f.Xb(9,"button",14),f.fc("tapped",(function(){f.Ac(n);var t=e.$implicit;return f.jc(3).editApplication(t)})),f.Sb(10,"app-icon",15),f.Wb(),f.Xb(11,"button",14),f.fc("tapped",(function(){f.Ac(n);var t=e.$implicit;return f.jc(3).deleteApplication(t)})),f.Sb(12,"app-icon",15),f.Wb(),f.Wb(),f.Wb()}if(2&t){var i=e.$implicit;f.Db(1),f.pc("matTooltip",i.id),f.Db(1),f.Lc(i.name),f.Db(2),f.pc("href",i.redirect_uri,f.Dc),f.Db(1),f.Lc(i.redirect_uri),f.Db(2),f.Lc(i.scopes),f.Db(3),f.pc("icon",f.qc(7,X)),f.Db(2),f.pc("icon",f.qc(8,x))}}function D(t,e){if(1&t&&(f.Xb(0,"div",6),f.Xb(1,"table"),f.Xb(2,"thead"),f.Xb(3,"td",7),f.Kc(4,"Name"),f.Wb(),f.Xb(5,"td",8),f.Kc(6,"Redirect"),f.Wb(),f.Xb(7,"td",9),f.Kc(8,"Scope"),f.Wb(),f.Sb(9,"td",10),f.Wb(),f.Xb(10,"tbody"),f.Ic(11,M,13,9,"tr",11),f.Wb(),f.Wb(),f.Wb()),2&t){var n=f.jc(2);f.Db(11),f.pc("ngForOf",n.application_list)}}function S(t,e){1&t&&(f.Xb(0,"div",16),f.Xb(1,"div",17),f.Kc(2,"No applications found"),f.Wb(),f.Wb())}function j(t,e){if(1&t){var n=f.Yb();f.Xb(0,"div",1),f.Xb(1,"section",2),f.Xb(2,"button",3),f.fc("tapped",(function(){return f.Ac(n),f.jc().newApplication()})),f.Kc(3,"Add new"),f.Wb(),f.Wb(),f.Xb(4,"section"),f.Ic(5,D,12,1,"div",4),f.Ic(6,S,3,0,"div",5),f.Wb(),f.Wb()}if(2&t){var i=f.jc();f.Db(5),f.pc("ngIf",i.application_list&&i.application_list.length>0),f.Db(1),f.pc("ngIf",!i.application_list||i.application_list.length<=0)}}var K,E=((K=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,i){var o;return _classCallCheck(this,n),(o=e.call(this))._service=t,o._dialog=i,o}return _createClass(n,[{key:"ngOnInit",value:function(){var t=this;this.subscription("item",this._service.listen("BACKOFFICE.active_item",(function(e){t.item=e,t.loadApplications()})))}},{key:"ngOnChanges",value:function(t){t.item&&this.loadApplications()}},{key:"loadApplications",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.item&&this._service.Applications.query({authority:this.item.id,offset:e}).then((function(n){e||(t.application_list=[]);var i,o=_createForOfIteratorHelper(n||[]);try{for(o.s();!(i=o.n()).done;){var a,c=i.value,r=!1,s=_createForOfIteratorHelper(t.application_list);try{for(s.s();!(a=s.n()).done;)if(a.value.id===c.id){r=!0;break}}catch(l){s.e(l)}finally{s.f()}r||t.application_list.push(c)}}catch(l){o.e(l)}finally{o.f()}}),(function(){return null}))}},{key:"newApplication",value:function(){this._dialog.open(u.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:new r.b(this._service.Applications,{}),service:this._service.Applications}})}},{key:"editApplication",value:function(t){this.item&&this._dialog.open(u.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:t,service:this._service.Applications}})}},{key:"deleteApplication",value:function(t){var e=this;if(t){var n=this._dialog.open(d.b,Object.assign(Object.assign({},d.a),{data:{title:"Delete application",content:"<p>Are you sure you want delete the application ".concat(t.name,"?</p><p>Configuration will be <strong>immediately</strong> updated</p>"),icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",n.componentInstance.event.subscribe((function(i){"done"===i.reason&&(n.componentInstance.loading="Deleting application...",t.delete().then((function(){e._service.notifySuccess('Successfully deleted application "'.concat(t.name,'".')),e.loadApplications(),n.close(),e.unsub("delete_confirm")}),(function(t){n.componentInstance.loading=null,e._service.notifyError("Error deleting application. Error: ".concat(t))})))})))}}}]),n}(A.a)).\u0275fac=function(t){return new(t||K)(f.Rb(s.a),f.Rb(h.b))},K.\u0275cmp=f.Lb({type:K,selectors:[["domain-applications"]],inputs:{item:"item"},features:[f.Ab,f.Bb],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"select"],["mat-button","",3,"tapped"],["class","list",4,"ngIf"],["class","info-block",4,"ngIf"],[1,"list"],[1,"name"],[1,"flex"],[1,"scope"],[1,"duo"],[4,"ngFor","ngForOf"],[1,"name",3,"matTooltip"],[3,"href"],["mat-icon-button","",3,"tapped"],[3,"icon"],[1,"info-block"],[1,"text"]],template:function(t,e){1&t&&f.Ic(0,j,7,2,"div",0),2&t&&f.pc("ngIf",e.item)},directives:[o.m,W.b,m.b,o.l,k.a,I.a],styles:[".container[_ngcontent-%COMP%]{padding:1em}.options[_ngcontent-%COMP%]{display:flex;font-size:1.2em;max-width:5em;margin:0}.state[_ngcontent-%COMP%]{height:1.5em;width:1.5em;margin:.25em;background-color:#d32f2f;border-radius:.8em;transition:margin .25s,height .25s,width .25s,background-color .3s}.state.active[_ngcontent-%COMP%]{background-color:#4caf50;height:.75em;width:.75em;margin:.625em}.duo[_ngcontent-%COMP%]{width:6.75em;display:flex}.table-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .table-row[_ngcontent-%COMP%]   .scope[_ngcontent-%COMP%]{width:8em;min-width:8em}.select[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}section[_ngcontent-%COMP%]{padding:.5em .25em}"]}),K),R=n("dQMc"),T=function(){return{class:"backoffice-edit"}},F=function(){return{class:"backoffice-trash"}};function L(t,e){if(1&t){var n=f.Yb();f.Xb(0,"tr"),f.Xb(1,"td",10),f.Kc(2),f.Wb(),f.Xb(3,"td",7),f.Kc(4),f.Wb(),f.Xb(5,"td",8),f.Xb(6,"button",11),f.fc("tapped",(function(){f.Ac(n);var t=e.$implicit;return f.jc(2).editAuthSource(t)})),f.Sb(7,"app-icon",12),f.Wb(),f.Xb(8,"button",11),f.fc("tapped",(function(){f.Ac(n);var t=e.$implicit;return f.jc(2).deleteAuthSource(t)})),f.Sb(9,"app-icon",12),f.Wb(),f.Wb(),f.Wb()}if(2&t){var i=e.$implicit,o=f.jc(2);f.Db(1),f.pc("matTooltip",i.id),f.Db(1),f.Lc(i.name),f.Db(2),f.Lc(o.source_types[i.id]),f.Db(3),f.pc("icon",f.qc(5,T)),f.Db(2),f.pc("icon",f.qc(6,F))}}function q(t,e){if(1&t&&(f.Xb(0,"div",5),f.Xb(1,"table"),f.Xb(2,"thead"),f.Xb(3,"td",6),f.Kc(4,"Name"),f.Wb(),f.Xb(5,"td",7),f.Kc(6,"Type"),f.Wb(),f.Sb(7,"td",8),f.Wb(),f.Xb(8,"tbody"),f.Ic(9,L,10,7,"tr",9),f.Wb(),f.Wb(),f.Wb()),2&t){var n=f.jc();f.Db(9),f.pc("ngForOf",n.auth_sources)}}function H(t,e){1&t&&(f.Xb(0,"div",13),f.Xb(1,"div",14),f.Kc(2,"No authentication sources found"),f.Wb(),f.Wb())}function B(t,e){if(1&t&&(f.Xb(0,"tr"),f.Xb(1,"td",8),f.Kc(2),f.Wb(),f.Xb(3,"td",5),f.Kc(4),f.Wb(),f.Xb(5,"td",6),f.Kc(6),f.Wb(),f.Wb()),2&t){var n=e.$implicit;f.Db(1),f.pc("matTooltip",n.id),f.Db(1),f.Lc(n.name),f.Db(2),f.Lc(n.email),f.Db(2),f.Lc(n.role)}}function N(t,e){if(1&t&&(f.Xb(0,"div",3),f.Xb(1,"table"),f.Xb(2,"thead"),f.Xb(3,"td",4),f.Kc(4,"Name"),f.Wb(),f.Xb(5,"td",5),f.Kc(6,"Email"),f.Wb(),f.Xb(7,"td",6),f.Kc(8,"Role"),f.Wb(),f.Wb(),f.Xb(9,"tbody"),f.Ic(10,B,7,4,"tr",7),f.Wb(),f.Wb(),f.Wb()),2&t){var n=f.jc();f.Db(10),f.pc("ngForOf",n.model.list)}}function U(t,e){1&t&&(f.Xb(0,"div",9),f.Xb(1,"div",10),f.Kc(2,"No users found"),f.Wb(),f.Wb())}var z,$,J=[{path:":id",component:P,children:[{path:"applications",component:E},{path:"authentication",component:($=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,i){var o;return _classCallCheck(this,n),(o=e.call(this))._service=t,o._dialog=i,o.auth_sources=[],o.source_types={},o}return _createClass(n,[{key:"ngOnInit",value:function(){var t=this;this.subscription("item",this._service.listen("BACKOFFICE.active_item",(function(e){t.item=e,t.loadAuthSources()})))}},{key:"ngOnChanges",value:function(t){t.item&&this.loadAuthSources()}},{key:"loadAuthSources",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.item&&Promise.all([this._service.OAuthSources.query({authority_id:this.item.id,offset:e}),this._service.SAMLAuthSources.query({authority_id:this.item.id,offset:e}),this._service.LDAPAuthSources.query({authority_id:this.item.id,offset:e})]).then((function(n){e||(t.auth_sources=[]);var i,o=_createForOfIteratorHelper(n);try{for(o.s();!(i=o.n()).done;)i.value.forEach((function(e){return t.addAuthSourceToList(e)}))}catch(a){o.e(a)}finally{o.f()}}),(function(){return null}))}},{key:"newAuthSource",value:function(){var t=this;this._dialog.open(R.a,{width:"auto",height:"auto",data:{domain:this.item}}).afterClosed().subscribe((function(){return t.loadAuthSources()}))}},{key:"editAuthSource",value:function(t){var e=this;this._dialog.open(R.a,{width:"auto",height:"auto",data:{domain:this.item,auth_source:t}}).afterClosed().subscribe((function(){return e.loadAuthSources()}))}},{key:"deleteAuthSource",value:function(t){var e=this;if(t){var n=this._dialog.open(d.b,Object.assign(Object.assign({},d.a),{data:{title:"Delete auth source",content:"<p>Are you sure you want delete this auth source?</p><p>Deleting this will remove this auth source <strong>immediately</strong></p>",icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",n.componentInstance.event.subscribe((function(i){"done"===i.reason&&(n.componentInstance.loading="Deleting auth source...",t.delete().then((function(){e._service.notifySuccess("Successfully deleted auth source."),n.close(),e.unsub("delete_confirm"),e.loadAuthSources()}),(function(t){e._service.notifyError("Error deleting auth source. Error ".concat(t.message||t)),n.componentInstance.loading=null})))})))}}},{key:"addAuthSourceToList",value:function(t){this.source_types[t.id]=t instanceof r.l?"saml":t instanceof r.g?"ldap":"oauth";var e=this.auth_sources.findIndex((function(e){return e.id===t.id}));e<0?this.auth_sources.push(t):this.auth_sources.splice(e,1,t)}}]),n}(A.a),$.\u0275fac=function(t){return new(t||$)(f.Rb(s.a),f.Rb(h.b))},$.\u0275cmp=f.Lb({type:$,selectors:[["domain-authentication"]],inputs:{item:"item"},features:[f.Ab,f.Bb],decls:8,vars:2,consts:[[1,"container"],[1,"select"],["mat-button","",3,"tapped"],["class","list",4,"ngIf","ngIfElse"],["no_auth_sources",""],[1,"list"],[1,"name"],[1,"flex"],[1,"duo"],[4,"ngFor","ngForOf"],[1,"name",3,"matTooltip"],["mat-icon-button","",3,"tapped"],[3,"icon"],[1,"info-block"],[1,"text"]],template:function(t,e){if(1&t&&(f.Xb(0,"div",0),f.Xb(1,"section",1),f.Xb(2,"button",2),f.fc("tapped",(function(){return e.newAuthSource()})),f.Kc(3,"Add new"),f.Wb(),f.Wb(),f.Xb(4,"section"),f.Ic(5,q,10,1,"div",3),f.Wb(),f.Wb(),f.Ic(6,H,3,0,"ng-template",null,4,f.Jc)),2&t){var n=f.xc(7);f.Db(5),f.pc("ngIf",e.auth_sources&&e.auth_sources.length>0)("ngIfElse",n)}},directives:[W.b,m.b,o.m,o.l,k.a,I.a],styles:[".container[_ngcontent-%COMP%]{padding:1em}.options[_ngcontent-%COMP%]{display:flex;font-size:1.2em;max-width:5em;margin:0}.action[_ngcontent-%COMP%]{height:1.5em;width:1.5em;min-width:1.5em;border-radius:.65em;display:flex;align-items:center;justify-content:center;font-size:1.3em}.action[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.1)}.table-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{width:8em;min-width:8em}.state[_ngcontent-%COMP%]{height:1.5em;width:1.5em;margin:.25em;background-color:#d32f2f;border-radius:.8em;transition:margin .25s,height .25s,width .25s,background-color .3s}.state.active[_ngcontent-%COMP%]{background-color:#4caf50;height:.75em;width:.75em;margin:.625em}.select[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}section[_ngcontent-%COMP%]{padding:.5em .25em}.duo[_ngcontent-%COMP%]{width:6em;text-align:right}"]}),$)},{path:"users",component:(z=function(t){_inherits(n,t);var e=_createSuper(n);function n(t){var i;return _classCallCheck(this,n),(i=e.call(this))._service=t,i.model={},i}return _createClass(n,[{key:"ngOnInit",value:function(){var t=this;this.subscription("item",this._service.listen("BACKOFFICE.active_item",(function(e){t.item=e,t.loadUsers()}))),this.loadUsers()}},{key:"ngOnChanges",value:function(t){t.item&&this.loadUsers()}},{key:"loadUsers",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.item&&this._service.Users.query({authority_id:this.item.id,offset:e}).then((function(n){e||(t.model.list=[]);var i,o=_createForOfIteratorHelper(n||[]);try{for(o.s();!(i=o.n()).done;){var a,c=i.value,r=!1,s=_createForOfIteratorHelper(t.model.list);try{for(s.s();!(a=s.n()).done;)if(a.value.id===c.id){r=!0;break}}catch(l){s.e(l)}finally{s.f()}r||t.model.list.push(c)}}catch(l){o.e(l)}finally{o.f()}}),(function(){return null}))}}]),n}(A.a),z.\u0275fac=function(t){return new(t||z)(f.Rb(s.a))},z.\u0275cmp=f.Lb({type:z,selectors:[["domain-users"]],inputs:{item:"item"},features:[f.Ab,f.Bb],decls:4,vars:2,consts:[[1,"container"],["class","list",4,"ngIf"],["class","info-block",4,"ngIf"],[1,"list"],[1,"name"],[1,"flex"],[1,"role"],[4,"ngFor","ngForOf"],[1,"name",3,"matTooltip"],[1,"info-block"],[1,"text"]],template:function(t,e){1&t&&(f.Xb(0,"div",0),f.Xb(1,"section"),f.Ic(2,N,11,1,"div",1),f.Ic(3,U,3,0,"div",2),f.Wb(),f.Wb()),2&t&&(f.Db(2),f.pc("ngIf",e.model.list&&e.model.list.length>0),f.Db(1),f.pc("ngIf",!e.model.list||e.model.list.length<=0))},directives:[o.m,o.l,k.a],styles:[".container[_ngcontent-%COMP%]{padding:1em}.options[_ngcontent-%COMP%]{display:flex;font-size:1.2em;max-width:5em;margin:0}.action[_ngcontent-%COMP%]{height:1.5em;width:1.5em;min-width:1.5em;border-radius:.65em;display:flex;align-items:center;justify-content:center;font-size:1.3em}.action[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.1)}.table-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{width:12em;min-width:12em}.table-row[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]{width:8em;min-width:8em}.state[_ngcontent-%COMP%]{height:1.5em;width:1.5em;margin:.25em;background-color:#d32f2f;border-radius:.8em;transition:margin .25s,height .25s,width .25s,background-color .3s}.state.active[_ngcontent-%COMP%]{background-color:#4caf50;height:.75em;width:.75em;margin:.625em}.select[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}section[_ngcontent-%COMP%]{padding:.5em .25em}"]}),z)},{path:"**",redirectTo:"applications"}]},{path:"**",redirectTo:"-"}],Y=n("PCNd");n.d(e,"AppDomainsModule",(function(){return V}));var Q,V=((Q=function t(){_classCallCheck(this,t)}).\u0275mod=f.Pb({type:Q}),Q.\u0275inj=f.Ob({factory:function(t){return new(t||Q)},imports:[[o.c,a.g,c.g.forChild(J),Y.a]]}),Q)}}]);