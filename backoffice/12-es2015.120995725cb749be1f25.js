(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"9SBB":function(e,t,i){"use strict";i.r(t);var n=i("ofXK"),o=i("3Pt+"),s=i("tyNb"),r=i("mrSG"),c=i("THE0"),a=i("OaWH"),d=i("C/ya"),l=i("g+Po"),b=i("D/9M"),m=i("fXoL"),h=i("0IaG"),p=i("BAfr"),g=i("m6yr"),u=i("47y3");const f=function(){return{class:"backoffice-info-with-circle"}},v=function(e){return{id:"about",name:"About",icon:e}},_=function(){return{class:"backoffice-documents"}},w=function(e,t){return{id:"drivers",name:"Drivers",count:e,icon:t}},y=function(e,t){return[e,t]};let O=(()=>{class e extends d.a{constructor(e,t,i,n){super(e,t,i),this._service=e,this._route=t,this._router=i,this._dialog=n,this.service=this._service.Repositories}ngOnInit(){super.ngOnInit(),this._service.title="Repositories"}loadValues(){this._service.Repositories.listDrivers(this.item.id,{offset:0}).then(e=>this.driver_count=e.length)}new(){this._dialog.open(b.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:new c.j(this._service.Repositories,{}),service:this._service.Repositories}}).componentInstance.event.subscribe(e=>{"done"===e.reason&&this._router.navigate(["/repositories",e.metadata.item.id])})}edit(){this.item&&this._dialog.open(b.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:this.item,service:this._service.Repositories}})}delete(){if(this.item){const e=this._dialog.open(l.b,Object.assign(Object.assign({},l.a),{data:{title:"Delete repository",content:"<p>Are you sure you want delete this repository?</p><p>Deleting this repository will <strong>immediately</strong> remove it from all associated systems and zones</p>",icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("delete_confirm",e.componentInstance.event.subscribe(t=>Object(r.b)(this,void 0,void 0,(function*(){"done"===t.reason&&(e.componentInstance.loading="Deleting repository...",yield this.item.delete().catch(t=>{throw e.componentInstance.loading=null,this._service.notifyError(`Error deleting repository. Error: ${t.message||t}`),t}),this._service.set("BACKOFFICE.removed",this.item.id),this._router.navigate(["/repositories"]),e.close(),this.unsub("delete_confirm"))}))))}}}return e.\u0275fac=function(t){return new(t||e)(m.Rb(a.a),m.Rb(s.a),m.Rb(s.c),m.Rb(h.b))},e.\u0275cmp=m.Lb({type:e,selectors:[["app-repositories"]],features:[m.Ab],decls:5,vars:17,consts:[[1,"container"],[1,"sidebar"],["heading","Repositories",3,"module","close","event"],[3,"touchrelease"],["name","repository","route","repositories",3,"item","loading","tabs","event"]],template:function(e,t){1&e&&(m.Xb(0,"div",0),m.Xb(1,"div",1),m.Xb(2,"sidebar",2),m.fc("event",(function(e){return t.sidebarEvent(e)})),m.Wb(),m.Wb(),m.Xb(3,"main",3),m.fc("touchrelease",(function(){return t.show_sidebar=!1})),m.Xb(4,"item-display",4),m.fc("event",(function(e){return t.itemEvent(e)})),m.Wb(),m.Wb(),m.Wb()),2&e&&(m.Hb("show",t.show_sidebar),m.Db(2),m.pc("module",t.module)("close",t.show_sidebar),m.Db(2),m.pc("item",t.item)("loading",t.loading_item)("tabs",m.sc(14,y,m.rc(8,v,m.qc(7,f)),m.sc(11,w,t.driver_count,m.qc(10,_)))))},directives:[p.a,g.b,u.a],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%;width:100%}@media only screen and (orientation:portrait) and (max-width:450px){.container[_ngcontent-%COMP%]{flex-direction:column}}@media only screen and (orientation:landscape) and (max-width:800px){.container[_ngcontent-%COMP%]{flex-direction:column}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{height:100%}}@media only screen and (orientation:portrait) and (max-width:450px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}@media only screen and (orientation:landscape) and (max-width:800px){.container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{height:0%}}.sidebar[_ngcontent-%COMP%]{height:100%;width:20em}@media only screen and (orientation:portrait) and (max-width:450px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;transition:height .3s}}@media only screen and (orientation:landscape) and (max-width:800px){.sidebar[_ngcontent-%COMP%]{height:3em;min-height:3em;width:100%;transition:height .3s}}main[_ngcontent-%COMP%]{position:relative;height:100%;overflow:hidden;flex:1;background-color:#f0f0f0}@media only screen and (orientation:portrait) and (max-width:450px){main[_ngcontent-%COMP%]{transition:height .3s;width:100%}}@media only screen and (orientation:landscape) and (max-width:800px){main[_ngcontent-%COMP%]{transition:height .3s;width:100%}}"]}),e})();var C=i("5f3J"),P=i("Wp6s"),x=i("bTqV"),M=i("Xa2L"),W=i("q/DJ");function X(e,t){1&e&&(m.Vb(0),m.Jc(1,"Pull"),m.Ub())}function D(e,t){if(1&e){const e=m.Yb();m.Xb(0,"div",2),m.Xb(1,"section",3),m.Xb(2,"mat-card"),m.Xb(3,"mat-card-content"),m.Jc(4," Pull the latest commit for"),m.Sb(5,"br"),m.Jc(6," this repository "),m.Wb(),m.Xb(7,"mat-card-actions"),m.Xb(8,"button",4),m.fc("tapped",(function(){return m.zc(e),m.jc().pullLatestCommit()})),m.Hc(9,X,2,0,"ng-container",5),m.Wb(),m.Wb(),m.Wb(),m.Wb(),m.Xb(10,"section",6),m.Xb(11,"div",7),m.Xb(12,"label"),m.Jc(13,"Type:"),m.Wb(),m.Xb(14,"div",8),m.Jc(15),m.Wb(),m.Wb(),m.Xb(16,"div",7),m.Xb(17,"label"),m.Jc(18,"Folder name:"),m.Wb(),m.Xb(19,"div",8),m.Jc(20),m.Wb(),m.Wb(),m.Xb(21,"div",7),m.Xb(22,"label"),m.Jc(23,"Repository URI:"),m.Wb(),m.Xb(24,"div",8),m.Xb(25,"a",9),m.kc(26,"safe"),m.Jc(27),m.Wb(),m.Wb(),m.Wb(),m.Xb(28,"div",7),m.Xb(29,"label"),m.Jc(30,"Description:"),m.Wb(),m.Xb(31,"div",8),m.Jc(32),m.Wb(),m.Wb(),m.Wb(),m.Wb()}if(2&e){const e=m.jc(),t=m.wc(2);m.Db(8),m.pc("disabled",e.pulling),m.Db(1),m.pc("ngIf",!e.pulling)("ngIfElse",t),m.Db(6),m.Lc("",e.item.type?"Interface":"Driver"," Repository"),m.Db(5),m.Kc(e.item.folder_name||"No folder set"),m.Db(5),m.pc("href",m.mc(26,8,e.item.uri,"url"),m.Cc),m.Db(2),m.Kc(e.item.uri||"No URI set"),m.Db(5),m.Kc(e.item.description||"No description")}}function I(e,t){1&e&&(m.Xb(0,"div",10),m.Sb(1,"mat-spinner",11),m.Wb())}let R=(()=>{class e extends C.a{constructor(e){super(),this._service=e}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item",e=>{this.item=e}))}pullLatestCommit(){this.pulling=!0,this._service.Repositories.pullCommit(this.item.id).then(()=>this.pulling=!1,e=>{this.pulling=!1,this._service.notifyError(`Error pulling latest commit. Error: ${e.message||e}`)})}}return e.\u0275fac=function(t){return new(t||e)(m.Rb(a.a))},e.\u0275cmp=m.Lb({type:e,selectors:[["repository-about"]],inputs:{item:"item"},features:[m.Ab],decls:3,vars:1,consts:[["class","container",4,"ngIf"],["spinner",""],[1,"container"],[1,"actions"],["mat-button","",3,"disabled","tapped"],[4,"ngIf","ngIfElse"],[1,"details"],[1,"field"],[1,"value"],[3,"href"],[1,"spinner"],["diameter","32"]],template:function(e,t){1&e&&(m.Hc(0,D,33,11,"div",0),m.Hc(1,I,2,0,"ng-template",null,1,m.Ic)),2&e&&m.pc("ngIf",t.item)},directives:[n.m,P.a,P.c,P.b,x.b,g.b,M.b],pipes:[W.b],styles:[".container[_ngcontent-%COMP%]{padding:1em}header[_ngcontent-%COMP%]{display:flex;align-items:center;font-weight:700;font-size:1.1em}section[_ngcontent-%COMP%]{padding:.5em .25em}.no-item[_ngcontent-%COMP%]{font-size:.75em}.field[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:.75em 0}label[_ngcontent-%COMP%]{font-size:.8em;font-weight:500;margin-bottom:.4em}.actions[_ngcontent-%COMP%]{padding:.5em;display:flex;flex-wrap:wrap}button[_ngcontent-%COMP%]{min-width:10em;margin:.25em}.spinner[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;margin:.25em 0}mat-card[_ngcontent-%COMP%]{margin:.5em;text-align:center}"]}),e})();var J=i("0njA"),H=i("ARKa");const A=function(){return{class:"material-icons",content:"add"}};function E(e,t){if(1&e){const e=m.Yb();m.Xb(0,"tr"),m.Sb(1,"td",7),m.kc(2,"driverFormat"),m.Xb(3,"td",8),m.Xb(4,"button",9),m.fc("tapped",(function(){m.zc(e);const i=t.$implicit;return m.jc(3).newDriver(i)})),m.Sb(5,"app-icon",10),m.Wb(),m.Wb(),m.Wb()}if(2&e){const e=t.$implicit;m.Db(1),m.pc("innerHTML",m.lc(2,2,e),m.Ac),m.Db(4),m.pc("icon",m.qc(4,A))}}function j(e,t){if(1&e&&(m.Xb(0,"table"),m.Xb(1,"thead"),m.Xb(2,"td",5),m.Jc(3,"Name"),m.Wb(),m.Sb(4,"td"),m.Wb(),m.Xb(5,"tbody"),m.Hc(6,E,6,5,"tr",6),m.Wb(),m.Wb()),2&e){const e=m.jc(2);m.Db(6),m.pc("ngForOf",e.driver_list)}}function F(e,t){1&e&&(m.Xb(0,"div",11),m.Xb(1,"div",12),m.Jc(2,"No drivers for repository"),m.Wb(),m.Wb())}function k(e,t){if(1&e&&(m.Xb(0,"div",1),m.Xb(1,"h3"),m.Jc(2,"Available Drivers"),m.Wb(),m.Xb(3,"div",2),m.Hc(4,j,7,1,"table",3),m.Hc(5,F,3,0,"div",4),m.Wb(),m.Wb()),2&e){const e=m.jc();m.Db(4),m.pc("ngIf",e.driver_list&&e.driver_list.length>0),m.Db(1),m.pc("ngIf",!e.driver_list||e.driver_list.length<=0)}}const L=[{path:":id",component:O,children:[{path:"about",component:R},{path:"drivers",component:(()=>{class e extends C.a{constructor(e,t){super(),this._service=e,this._dialog=t,this.driver_list=[]}ngOnInit(){this.subscription("item",this._service.listen("BACKOFFICE.active_item",e=>{this.item=e,this.load()}))}ngOnChanges(e){e.item&&this.load()}load(e=0){this.item&&this._service.Repositories.listDrivers(this.item.id,{offset:e}).then(e=>{this.driver_list=e||[]},()=>null)}newDriver(e){this.item.id&&this._dialog.open(b.a,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:new c.e(this._service.Drivers,{name:"",module_name:"",repository_id:this.item.id,file_name:e}),service:this._service.Drivers}})}}return e.\u0275fac=function(t){return new(t||e)(m.Rb(a.a),m.Rb(h.b))},e.\u0275cmp=m.Lb({type:e,selectors:[["repository-drivers"]],inputs:{item:"item"},features:[m.Ab,m.Bb],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"settings"],[4,"ngIf"],["class","info-block",4,"ngIf"],[1,"flex"],[4,"ngFor","ngForOf"],[3,"innerHTML"],[1,"small"],["mat-icon-button","",3,"tapped"],[3,"icon"],[1,"info-block"],[1,"text"]],template:function(e,t){1&e&&m.Hc(0,k,6,2,"div",0),2&e&&m.pc("ngIf",t.item)},directives:[n.m,n.l,x.b,g.b,J.a],pipes:[H.a],styles:[".container[_ngcontent-%COMP%]{padding:1em}.list[_ngcontent-%COMP%]{margin-top:.5em}tbody[_ngcontent-%COMP%]{font-size:.9em}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap}.small[_ngcontent-%COMP%]{width:2em}div[_ngcontent-%COMP%]   .duo[_ngcontent-%COMP%]{width:4em}div[_ngcontent-%COMP%]   .duo[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{display:inline-flex}.select[_ngcontent-%COMP%]{display:flex;align-items:center}.select[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{flex:1}"]}),e})()},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:"-"}];var K=i("PCNd");i.d(t,"AppRepositoriesModule",(function(){return z}));let z=(()=>{class e{}return e.\u0275mod=m.Pb({type:e}),e.\u0275inj=m.Ob({factory:function(t){return new(t||e)},imports:[[n.c,o.g,s.g.forChild(L),K.a]]}),e})()}}]);