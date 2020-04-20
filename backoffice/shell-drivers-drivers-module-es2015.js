(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shell-drivers-drivers-module"],{

/***/ "./src/app/shell/drivers/driver-about/driver-about.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shell/drivers/driver-about/driver-about.component.ts ***!
  \**********************************************************************/
/*! exports provided: DriverAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverAboutComponent", function() { return DriverAboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/globals/base.directive */ "./src/app/shared/globals/base.directive.ts");
/* harmony import */ var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/overlays/confirm-modal/confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _shared_components_forms_settings_form_settings_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/forms/settings-form/settings-form.component */ "./src/app/shared/components/forms/settings-form/settings-form.component.ts");











function DriverAboutComponent_div_0_mat_spinner_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 9);
} }
function DriverAboutComponent_div_0_section_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a-settings-form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("merge", true)("id", ctx_r4.item.id)("settings", ctx_r4.item.settings);
} }
function DriverAboutComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Compiled:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DriverAboutComponent_div_0_mat_spinner_7_Template, 1, 0, "mat-spinner", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Commit:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "File Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Module Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function DriverAboutComponent_div_0_Template_button_tapped_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.reloadDriver(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Reload Modules");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "header", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DriverAboutComponent_div_0_section_29_Template, 2, 3, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.compiled || "false");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.compiled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item.commit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item.file_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item == null ? null : ctx_r0.item.module_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loading_settings)("ngIfElse", _r1);
} }
function DriverAboutComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading driver settings...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DriverAboutComponent extends _shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    constructor(_dialog, _service) {
        super();
        this._dialog = _dialog;
        this._service = _service;
    }
    /** Whether application is loading settings for item */
    get loading_settings() {
        return this._service.get('loading_settings');
    }
    ngOnInit() {
        this.subscription('item', this._service.listen('BACKOFFICE.active_item', item => {
            this.item = item;
        }));
        this.checkCompiled();
    }
    reloadDriver() {
        if (this.item) {
            const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__["CONFIRM_METADATA"]), { data: {
                    title: `Reload Driver`,
                    content: `<p>Are you sure you want reload this driver?</p><p>New driver code will be loaded and device settings will be updated.</p>`,
                    icon: { type: 'icon', class: 'backoffice-cycle' }
                } }));
            this.subscription('delete_confirm', ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'done') {
                    ref.componentInstance.loading = 'Reloading driver...';
                    this.item.reload().then(() => {
                        this._service.notifySuccess(`Successfully reloaded driver "${this.item.name}".`);
                        ref.close();
                        this.unsub('delete_confirm');
                    }, err => {
                        ref.componentInstance.loading = null;
                        this._service.notifyError(`Error reloading driver. Error: ${err}`);
                    });
                }
            }));
        }
    }
    checkCompiled() {
        this._service.Drivers.isCompiled(this.item.id)
            .then(_ => this.compiled = true, _ => {
            this.compiled = false;
            this.timeout('compiled', () => this.checkCompiled(), 1000);
        });
    }
}
DriverAboutComponent.ɵfac = function DriverAboutComponent_Factory(t) { return new (t || DriverAboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"])); };
DriverAboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DriverAboutComponent, selectors: [["driver-about"]], inputs: { item: "item" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 1, consts: [["class", "container", 4, "ngIf"], ["load_state", ""], [1, "container"], [1, "field"], [1, "value"], ["diameter", "32", 4, "ngIf"], ["mat-button", "", 3, "tapped"], [1, "settings"], [4, "ngIf", "ngIfElse"], ["diameter", "32"], [3, "merge", "id", "settings"], [1, "info-block"], [1, "icon"], ["diameter", "48"], [1, "text"]], template: function DriverAboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DriverAboutComponent_div_0_Template, 30, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DriverAboutComponent_ng_template_1_Template, 5, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_7__["ɵb"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _shared_components_forms_settings_form_settings_form_component__WEBPACK_IMPORTED_MODULE_9__["SettingsFormComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 1em;\n}\nheader[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.1em;\n  margin-bottom: 0.5em;\n}\nheader.settings[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0.75em;\n  margin: 0;\n}\n.table-row[_ngcontent-%COMP%]   .class[_ngcontent-%COMP%] {\n  width: 12em;\n  min-width: 12em;\n}\n.field[_ngcontent-%COMP%] {\n  padding: 0.5em;\n  display: flex;\n  align-items: center;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 500;\n  margin-right: 1em;\n}\n.value[_ngcontent-%COMP%] {\n  -webkit-user-select: all;\n     -moz-user-select: all;\n      -ms-user-select: all;\n          user-select: all;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 0.5em 0.25em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JhY2tvZmZpY2UvYmFja29mZmljZS9zcmMvYXBwL3NoYXJlZC9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9iYWNrb2ZmaWNlL2JhY2tvZmZpY2Uvc3JjL2FwcC9zaGVsbC9kcml2ZXJzL2RyaXZlci1hYm91dC9kcml2ZXItYWJvdXQuc3R5bGVzLnNjc3MiLCJzcmMvYXBwL3NoZWxsL2RyaXZlcnMvZHJpdmVyLWFib3V0L2RyaXZlci1hYm91dC5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFxQ0E7O2NBQUE7QUFZQTs7ZUFBQTtBQU9BOztlQUFBO0FBZ0JBOztzQkFBQTtBQ3RFQTtFQUNJLFlBQUE7QUNhSjtBRFZBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDYUo7QURYSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNhUjtBRFJJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNXUjtBRFBBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ1VKO0FEUkk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNVUjtBRE5BO0VBQ0ksd0JBQUE7S0FBQSxxQkFBQTtNQUFBLG9CQUFBO1VBQUEsZ0JBQUE7QUNTSjtBRE5BO0VBQ0kscUJBQUE7QUNTSiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2RyaXZlcnMvZHJpdmVyLWFib3V0L2RyaXZlci1hYm91dC5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0Y2FmNTA7XG4kc3VjY2Vzcy1saWdodDogIzY2YmI2YTtcbiRzdWNjZXNzLWRhcms6ICMwMDc5NmI7XG5cbiRwZW5kaW5nOiAjZmY4ZjAwO1xuJHBlbmRpbmctbGlnaHQ6ICNmZmMwNDY7XG4kcGVuZGluZy1kYXJrOiAjYzU2MDAwO1xuXG4kZXJyb3I6ICNmNDQzMzY7XG4kZXJyb3ItbGlnaHQ6ICNmZjZmNjA7XG4kZXJyb3ItZGFyazogI2FiMDAwZDtcblxuJGNvbG9yLXByaW1hcnk6ICNDOTIzNjY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogI2NkNTY4YTtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICNiNjAwNWQ7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM1QzY0RkY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiAjNzI3MmU3O1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiAjNTU1N2QxO1xuXG4kY29sb3ItZGV2ZWxvcDogI2YwZjBmMDtcbiRjb2xvci1kZXZlbG9wLWxpZ2h0OiAjZmZmO1xuJGNvbG9yLWRldmVsb3AtZGFyazogI2UwZTBlMDtcblxuJGJhY2tncm91bmQ6ICMyNjMyMzg7XG4kYmFja2dyb3VuZC1saWdodDogIzQ1NWE2NDtcbiRiYWNrZ3JvdW5kLWRhcms6ICMyMDI2MzI7XG5cbiRoZWFkZXItY29sb3I6ICMwQTBEMkU7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJSb2JvdG9cIiwgXCJWZXJkYW5hXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIllvdW5nXCIsICRmb250O1xuJG1vbm8tZm9udDogXCJGaXJhIENvZGVcIiwgbW9ub3NwYWNlO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBTaXppbmcgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcblxuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBNaXhpbnMgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkZGVwdGg6IDEsICRzcHJlYWQ6IDEpIHtcbiAgICBib3gtc2hhZG93OiAwICgxcHggKiAkc3ByZWFkKSAoM3B4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4yICogJGRlcHRoKSxcbiAgICAgICAgICAgICAgICAwICgxcHggKiAkc3ByZWFkKSAoMXB4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4xNCAqICRkZXB0aCksXG4gICAgICAgICAgICAgICAgMCAoMnB4ICogJHNwcmVhZCkgKDFweCAqICRzcHJlYWQpIC0oMXB4ICogJHNwcmVhZCkgcmdiYSgjMDAwLCAuMTIgKiAkZGVwdGgpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuaGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XG5cbiAgICAmLnNldHRpbmdzIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IC43NWVtO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxufVxuXG4udGFibGUtcm93IHtcbiAgICAuY2xhc3Mge1xuICAgICAgICB3aWR0aDogMTJlbTtcbiAgICAgICAgbWluLXdpZHRoOiAxMmVtO1xuICAgIH1cbn1cblxuLmZpZWxkIHtcbiAgICBwYWRkaW5nOiAuNWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAuOWVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICB9XG59XG5cbi52YWx1ZSB7XG4gICAgdXNlci1zZWxlY3Q6IGFsbDtcbn1cblxuc2VjdGlvbiB7XG4gICAgcGFkZGluZzogLjVlbSAuMjVlbTtcbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PSpcXFxufHwgICBTaXppbmcgICB8fFxuXFwqPT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09KlxcXG58fCAgIE1peGlucyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMWVtO1xufVxuXG5oZWFkZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5oZWFkZXIuc2V0dGluZ3Mge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMC43NWVtO1xuICBtYXJnaW46IDA7XG59XG5cbi50YWJsZS1yb3cgLmNsYXNzIHtcbiAgd2lkdGg6IDEyZW07XG4gIG1pbi13aWR0aDogMTJlbTtcbn1cblxuLmZpZWxkIHtcbiAgcGFkZGluZzogMC41ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZmllbGQgbGFiZWwge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuLnZhbHVlIHtcbiAgdXNlci1zZWxlY3Q6IGFsbDtcbn1cblxuc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDAuNWVtIDAuMjVlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DriverAboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'driver-about',
                templateUrl: './driver-about.template.html',
                styleUrls: ['./driver-about.styles.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/drivers/driver-devices/driver-devices.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shell/drivers/driver-devices/driver-devices.component.ts ***!
  \**************************************************************************/
/*! exports provided: DriverModulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverModulesComponent", function() { return DriverModulesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/globals/base.directive */ "./src/app/shared/globals/base.directive.ts");
/* harmony import */ var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/overlays/confirm-modal/confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _placeos_composer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @placeos/composer */ "./node_modules/@placeos/composer/__ivy_ngcc__/fesm2015/placeos-composer.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");


















const _c0 = function (a1) { return ["/modules", a1]; };
const _c1 = function (a1) { return ["/systems", a1]; };
function DriverModulesComponent_div_0_table_8_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function DriverModulesComponent_div_0_table_8_tr_10_Template_i_modelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; return item_r4.connected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function DriverModulesComponent_div_0_table_8_tr_10_Template_button_tapped_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r7.removeModule(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", item_r4.running && item_r4.connected)("inactive", item_r4.running && !item_r4.connected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", item_r4.connected)("sys", item_r4.system.id)("mod", item_r4.module_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, item_r4.id))("matTooltip", item_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, item_r4.control_system_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.system == null ? null : item_r4.system.name, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.control_system_id);
} }
function DriverModulesComponent_div_0_table_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "System");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DriverModulesComponent_div_0_table_8_tr_10_Template, 16, 17, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.device_list);
} }
function DriverModulesComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No modules with driver");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function () { return { class: "backoffice-magnifying-glass" }; };
function DriverModulesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DriverModulesComponent_div_0_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.search_str = $event; })("ngModelChange", function DriverModulesComponent_div_0_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.search$.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DriverModulesComponent_div_0_table_8_Template, 11, 1, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DriverModulesComponent_div_0_div_9_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.search_str);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.device_list && ctx_r0.device_list.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.device_list || ctx_r0.device_list.length <= 0);
} }
class DriverModulesComponent extends _shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"] {
    constructor(_service, _dialog) {
        super();
        this._service = _service;
        this._dialog = _dialog;
        /** List of Modules associated with the driver */
        this.device_list = [];
        /** Subject holding the value of the search */
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.subscription('item', this._service.listen('BACKOFFICE.active_item', item => {
            this.item = item;
            this.loadModules();
        }));
        this.search_results$ = this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(query => {
            this.loading = true;
            return this._service.Modules.query({
                q: query,
                driver_id: this.item.id,
                complete: true,
                offset: 0,
                limit: 500
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            console.error(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((list) => {
            this.loading = false;
            const search = this.search_str.toLowerCase();
            return list.filter((item) => item.name.toLowerCase().indexOf(search) >= 0 ||
                (item.email || '').toLowerCase().indexOf(search) >= 0);
        }));
        // Process API results
        this.subscription('search_results', this.search_results$.subscribe(list => (this.device_list = list)));
    }
    ngOnChanges(changes) {
        if (changes.item) {
            this.loadModules();
        }
    }
    loadModules(offset = 0) {
        if (!this.item) {
            return;
        }
        this._service.Modules.query({ driver_id: this.item.id, offset, limit: 500 }).then(list => (this.device_list = list), () => null);
    }
    removeModule(item) {
        if (item) {
            const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["CONFIRM_METADATA"]), { data: {
                    title: `Delete module`,
                    content: `<p>Are you sure you want delete this module?</p><p>Deleting this will module <strong>immediately</strong> remove it from any system associated with it</p>`,
                    icon: { type: 'icon', class: 'backoffice-trash' }
                } }));
            this.subscription('delete_confirm', ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'done') {
                    ref.componentInstance.loading = 'Deleting module...';
                    item.delete().then(() => {
                        this._service.notifySuccess(`Successfully deleted module "${item.name}".`);
                        this.loadModules();
                        ref.close();
                        this.unsub('delete_confirm');
                    }, err => {
                        ref.componentInstance.loading = null;
                        this._service.notifyError(`Error deleting module. Error: ${err}`);
                    });
                }
            }));
        }
    }
}
DriverModulesComponent.ɵfac = function DriverModulesComponent_Factory(t) { return new (t || DriverModulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
DriverModulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DriverModulesComponent, selectors: [["driver-devices"]], inputs: { item: "item" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "settings"], [1, "select"], ["appearance", "outline"], ["matPrefix", "", 1, "prefix"], [3, "icon"], ["matInput", "", "name", "search-filter", "placeholder", "Filter Modules", 3, "ngModel", "ngModelChange"], [1, "list"], [4, "ngIf"], ["class", "info-block", 4, "ngIf"], [1, "small"], [1, "flex"], [1, "system"], [4, "ngFor", "ngForOf"], [1, "state"], ["binding", "", "bind", "connected", 3, "model", "sys", "mod", "modelChange"], [3, "routerLink", "matTooltip"], [3, "routerLink"], [1, "id"], ["mat-icon-button", "", 3, "tapped"], [1, "backoffice-trash"], [1, "info-block"], [1, "text"]], template: function DriverModulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DriverModulesComponent_div_0_Template, 10, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatPrefix"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_9__["IconComponent"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _placeos_composer__WEBPACK_IMPORTED_MODULE_12__["BindingDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_16__["ɵb"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 1em;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmat-form-field[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  font-size: 1.25em;\n}\n.list[_ngcontent-%COMP%] {\n  margin-top: 0.5em;\n}\n.table-row[_ngcontent-%COMP%]   .system[_ngcontent-%COMP%] {\n  width: 12em;\n  min-width: 12em;\n}\n.action[_ngcontent-%COMP%] {\n  height: 1.5em;\n  width: 1.5em;\n  min-width: 1.5em;\n  border-radius: 0.65em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3em;\n}\n.action[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.state[_ngcontent-%COMP%] {\n  height: 1.5em;\n  width: 1.5em;\n  margin: 0.25em;\n  background-color: #000;\n  border-radius: 0.8em;\n  transition: margin 250ms, height 250ms, width 250ms, background-color 300ms;\n}\n.state.inactive[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.state.active[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  height: 0.75em;\n  width: 0.75em;\n  margin: 0.625em;\n}\n.select[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.select[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JhY2tvZmZpY2UvYmFja29mZmljZS9zcmMvYXBwL3NoYXJlZC9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9iYWNrb2ZmaWNlL2JhY2tvZmZpY2Uvc3JjL2FwcC9zaGVsbC9kcml2ZXJzL2RyaXZlci1kZXZpY2VzL2RyaXZlci1kZXZpY2VzLnN0eWxlcy5zY3NzIiwic3JjL2FwcC9zaGVsbC9kcml2ZXJzL2RyaXZlci1kZXZpY2VzL2RyaXZlci1kZXZpY2VzLnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQXFDQTs7Y0FBQTtBQVlBOztlQUFBO0FBT0E7O2VBQUE7QUFnQkE7O3NCQUFBO0FDdEVBO0VBQ0ksWUFBQTtBQ2FKO0FEVkE7RUFDSSxXQUFBO0FDYUo7QURYSTtFQUNJLGlCQUFBO0FDYVI7QURUQTtFQUNJLGlCQUFBO0FDWUo7QURSSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDV1I7QURQQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNVSjtBRFRJO0VBQ0ksb0NBQUE7QUNXUjtBRFBBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJFQUFBO0FDVUo7QURSSTtFQUNJLHlCRGpDQTtBRTJDUjtBRFBJO0VBQ0kseUJEN0NFO0VDOENGLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ1NSO0FESkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNPSjtBRE5JO0VBQ0ksT0FBQTtBQ1FSIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvZHJpdmVycy9kcml2ZXItZGV2aWNlcy9kcml2ZXItZGV2aWNlcy5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0Y2FmNTA7XG4kc3VjY2Vzcy1saWdodDogIzY2YmI2YTtcbiRzdWNjZXNzLWRhcms6ICMwMDc5NmI7XG5cbiRwZW5kaW5nOiAjZmY4ZjAwO1xuJHBlbmRpbmctbGlnaHQ6ICNmZmMwNDY7XG4kcGVuZGluZy1kYXJrOiAjYzU2MDAwO1xuXG4kZXJyb3I6ICNmNDQzMzY7XG4kZXJyb3ItbGlnaHQ6ICNmZjZmNjA7XG4kZXJyb3ItZGFyazogI2FiMDAwZDtcblxuJGNvbG9yLXByaW1hcnk6ICNDOTIzNjY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogI2NkNTY4YTtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICNiNjAwNWQ7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM1QzY0RkY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiAjNzI3MmU3O1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiAjNTU1N2QxO1xuXG4kY29sb3ItZGV2ZWxvcDogI2YwZjBmMDtcbiRjb2xvci1kZXZlbG9wLWxpZ2h0OiAjZmZmO1xuJGNvbG9yLWRldmVsb3AtZGFyazogI2UwZTBlMDtcblxuJGJhY2tncm91bmQ6ICMyNjMyMzg7XG4kYmFja2dyb3VuZC1saWdodDogIzQ1NWE2NDtcbiRiYWNrZ3JvdW5kLWRhcms6ICMyMDI2MzI7XG5cbiRoZWFkZXItY29sb3I6ICMwQTBEMkU7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJSb2JvdG9cIiwgXCJWZXJkYW5hXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIllvdW5nXCIsICRmb250O1xuJG1vbm8tZm9udDogXCJGaXJhIENvZGVcIiwgbW9ub3NwYWNlO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBTaXppbmcgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcblxuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBNaXhpbnMgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkZGVwdGg6IDEsICRzcHJlYWQ6IDEpIHtcbiAgICBib3gtc2hhZG93OiAwICgxcHggKiAkc3ByZWFkKSAoM3B4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4yICogJGRlcHRoKSxcbiAgICAgICAgICAgICAgICAwICgxcHggKiAkc3ByZWFkKSAoMXB4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4xNCAqICRkZXB0aCksXG4gICAgICAgICAgICAgICAgMCAoMnB4ICogJHNwcmVhZCkgKDFweCAqICRzcHJlYWQpIC0oMXB4ICogJHNwcmVhZCkgcmdiYSgjMDAwLCAuMTIgKiAkZGVwdGgpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgYXBwLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICB9XG59XG5cbi5saXN0IHtcbiAgICBtYXJnaW4tdG9wOiAuNWVtO1xufVxuXG4udGFibGUtcm93IHtcbiAgICAuc3lzdGVtIHtcbiAgICAgICAgd2lkdGg6IDEyZW07XG4gICAgICAgIG1pbi13aWR0aDogMTJlbTtcbiAgICB9XG59XG5cbi5hY3Rpb24ge1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIG1pbi13aWR0aDogMS41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogLjY1ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzAwMCwgLjEpO1xuICAgIH1cbn1cblxuLnN0YXRlIHtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIHdpZHRoOiAxLjVlbTtcbiAgICBtYXJnaW46IC4yNWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogLjhlbTtcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gMjUwbXMsIGhlaWdodCAyNTBtcywgd2lkdGggMjUwbXMsIGJhY2tncm91bmQtY29sb3IgMzAwbXM7XG5cbiAgICAmLmluYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGVycm9yO1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHN1Y2Nlc3M7XG4gICAgICAgIGhlaWdodDogLjc1ZW07XG4gICAgICAgIHdpZHRoOiAuNzVlbTtcbiAgICAgICAgbWFyZ2luOiAuNjI1ZW07XG4gICAgfVxufVxuXG5cbi5zZWxlY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAuYnRuIHtcbiAgICAgICAgZmxleDogMTtcbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgU2l6aW5nICAgfHxcblxcKj09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PSpcXFxufHwgICBNaXhpbnMgICB8fFxuXFwqPT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cbm1hdC1mb3JtLWZpZWxkIGFwcC1pY29uIHtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG59XG5cbi50YWJsZS1yb3cgLnN5c3RlbSB7XG4gIHdpZHRoOiAxMmVtO1xuICBtaW4td2lkdGg6IDEyZW07XG59XG5cbi5hY3Rpb24ge1xuICBoZWlnaHQ6IDEuNWVtO1xuICB3aWR0aDogMS41ZW07XG4gIG1pbi13aWR0aDogMS41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNjVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59XG4uYWN0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uc3RhdGUge1xuICBoZWlnaHQ6IDEuNWVtO1xuICB3aWR0aDogMS41ZW07XG4gIG1hcmdpbjogMC4yNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBib3JkZXItcmFkaXVzOiAwLjhlbTtcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDI1MG1zLCBoZWlnaHQgMjUwbXMsIHdpZHRoIDI1MG1zLCBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xufVxuLnN0YXRlLmluYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cbi5zdGF0ZS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xuICBoZWlnaHQ6IDAuNzVlbTtcbiAgd2lkdGg6IDAuNzVlbTtcbiAgbWFyZ2luOiAwLjYyNWVtO1xufVxuXG4uc2VsZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZWxlY3QgLmJ0biB7XG4gIGZsZXg6IDE7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DriverModulesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'driver-devices',
                templateUrl: './driver-devices.template.html',
                styleUrls: ['./driver-devices.styles.scss']
            }]
    }], function () { return [{ type: _services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/drivers/drivers.component.ts":
/*!****************************************************!*\
  !*** ./src/app/shell/drivers/drivers.component.ts ***!
  \****************************************************/
/*! exports provided: DriversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversComponent", function() { return DriversComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ "./node_modules/@placeos/ts-client/dist/ts-client.es5.js");
/* harmony import */ var _shared_components_base_root_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/base-root.component */ "./src/app/shared/components/base-root.component.ts");
/* harmony import */ var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/overlays/confirm-modal/confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/overlays/item-modal/item-modal.component */ "./src/app/overlays/item-modal/item-modal.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/sidebar/sidebar.component */ "./src/app/shared/components/sidebar/sidebar.component.ts");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _shared_components_item_display_item_display_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/item-display/item-display.component */ "./src/app/shared/components/item-display/item-display.component.ts");












const _c0 = function () { return { class: "backoffice-info-with-circle" }; };
const _c1 = function (a2) { return { id: "about", name: "About", icon: a2 }; };
const _c2 = function () { return { class: "backoffice-tablet" }; };
const _c3 = function (a2, a3) { return { id: "modules", name: "Modules", count: a2, icon: a3 }; };
const _c4 = function (a0, a1) { return [a0, a1]; };
class DriversComponent extends _shared_components_base_root_component__WEBPACK_IMPORTED_MODULE_2__["BaseRootComponent"] {
    constructor(_service, _route, _router, _dialog) {
        super(_service, _route, _router);
        this._service = _service;
        this._route = _route;
        this._router = _router;
        this._dialog = _dialog;
        this.service = this._service.Drivers;
    }
    ngOnInit() {
        super.ngOnInit();
        this._service.title = 'Drivers';
    }
    loadValues() {
        const query = { offset: 0, limit: 1, driver_id: this.item.id };
        this._service.Modules.query(query).then(list => {
            this.device_count = this._service.Modules.last_total || list.length || 0;
        });
    }
    /**
     * Open the modal to create a new system
     */
    newItem() {
        if (this.modal_ref) {
            return;
        }
        this.modal_ref = this._dialog.open(src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_4__["ItemCreateUpdateModalComponent"], {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                item: new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["EngineDriver"](this._service.Drivers, { name: '', module_name: '' }),
                service: this._service.Drivers
            }
        });
        this.subscription('modal_events', this.modal_ref.componentInstance.event.subscribe(event => {
            if (event.reason === 'done') {
                this._router.navigate(['/drivers', event.metadata.item.id]);
            }
        }));
        this.modal_ref.afterClosed().subscribe(() => {
            this.unsub('modal_events');
            this.modal_ref = null;
        });
    }
    /**
     * Open the modal to create a new system
     */
    editItem() {
        if (this.item && !this.modal_ref) {
            this.modal_ref = this._dialog.open(src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_4__["ItemCreateUpdateModalComponent"], {
                height: 'auto',
                width: 'auto',
                maxHeight: 'calc(100vh - 2em)',
                maxWidth: 'calc(100vw - 2em)',
                data: {
                    item: this.item,
                    service: this._service.Drivers
                }
            });
            this.modal_ref.afterClosed().subscribe(() => {
                this.unsub('modal_events');
                this.modal_ref = null;
            });
        }
    }
    deleteItem() {
        if (this.item && !this.modal_ref) {
            this.modal_ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["CONFIRM_METADATA"]), { data: {
                    title: `Delete driver`,
                    content: `<p>Are you sure you want delete this driver?</p><p>All modules that rely on this driver will be <strong>immediately</strong> removed.</p>`,
                    icon: { type: 'icon', class: 'backoffice-trash' }
                } }));
            this.subscription('modal_events', this.modal_ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'done') {
                    this.modal_ref.componentInstance.loading = 'Deleting driver...';
                    this.item.delete().then(() => {
                        this._service.notifySuccess(`Successfully deleted driver "${this.item.name}".`);
                        this._router.navigate(['/drivers']);
                        this._service.set('BACKOFFICE.removed', this.item.id);
                        this.modal_ref.close();
                    }, err => {
                        this.modal_ref.componentInstance.loading = null;
                        this._service.notifyError(`Error deleting driver. Error: ${err}`);
                    });
                }
            }));
            this.modal_ref.afterClosed().subscribe(() => {
                this.unsub('modal_events');
                this.modal_ref = null;
            });
        }
    }
}
DriversComponent.ɵfac = function DriversComponent_Factory(t) { return new (t || DriversComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
DriversComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DriversComponent, selectors: [["app-drivers"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 16, consts: [[1, "container"], [1, "sidebar"], ["heading", "Drivers", 3, "module", "close", "event"], [3, "touchrelease"], ["name", "module", "route", "drivers", 3, "item", "tabs", "event"]], template: function DriversComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("event", function DriversComponent_Template_sidebar_event_2_listener($event) { return ctx.sidebarEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchrelease", function DriversComponent_Template_main_touchrelease_3_listener() { return ctx.show_sidebar = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "item-display", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("event", function DriversComponent_Template_item_display_event_4_listener($event) { return ctx.itemEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.show_sidebar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("module", ctx.module)("close", ctx.show_sidebar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.item)("tabs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c3, ctx.device_count, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2))));
    } }, directives: [_shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_9__["ɵb"], _shared_components_item_display_item_display_component__WEBPACK_IMPORTED_MODULE_10__["ItemDisplayComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n    height: 0%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n    height: 0%;\n  }\n}\n.sidebar[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 20em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .sidebar[_ngcontent-%COMP%] {\n    height: 3em;\n    min-height: 3em;\n    width: 100%;\n    transition: height 300ms;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .sidebar[_ngcontent-%COMP%] {\n    height: 3em;\n    min-height: 3em;\n    width: 100%;\n    transition: height 300ms;\n  }\n}\nmain[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  overflow: hidden;\n  flex: 1;\n  background-color: #f0f0f0;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  main[_ngcontent-%COMP%] {\n    transition: height 300ms;\n    width: 100%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  main[_ngcontent-%COMP%] {\n    transition: height 300ms;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JhY2tvZmZpY2UvYmFja29mZmljZS9zcmMvYXBwL3NoYXJlZC9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9iYWNrb2ZmaWNlL2JhY2tvZmZpY2Uvc3JjL2FwcC9zaGVsbC9kcml2ZXJzL2RyaXZlcnMuc3R5bGVzLnNjc3MiLCJzcmMvYXBwL3NoZWxsL2RyaXZlcnMvZHJpdmVycy5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFxQ0E7O2NBQUE7QUFZQTs7ZUFBQTtBQU9BOztlQUFBO0FBZ0JBOztzQkFBQTtBQ3RFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDYUo7QUZtRVE7RUNwRlI7SUFNUSxzQkFBQTtFQ2VOO0FBQ0Y7QUZpRVE7RUN2RlI7SUFNUSxzQkFBQTtFQ29CTjtBQUNGO0FGeURRO0VDMUVBO0lBRVEsWUFBQTtFQ21CZDtBQUNGO0FGdURRO0VDN0VBO0lBRVEsWUFBQTtFQ3dCZDtBQUNGO0FGK0NRO0VDckVBO0lBRVEsVUFBQTtFQ3dCZDtBQUNGO0FGNkNRO0VDeEVBO0lBRVEsVUFBQTtFQzZCZDtBQUNGO0FEeEJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUMyQko7QUZnQ1E7RUM3RFI7SUFJUSxXQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSx3QkFBQTtFQzZCTjtBQUNGO0FGMkJRO0VDaEVSO0lBSVEsV0FBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0Esd0JBQUE7RUNxQ047QUFDRjtBRGxDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0FDcUNKO0FGUVE7RUNsRFI7SUFPUSx3QkFBQTtJQUNBLFdBQUE7RUN1Q047QUFDRjtBRktRO0VDckRSO0lBT1Esd0JBQUE7SUFDQSxXQUFBO0VDNkNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9kcml2ZXJzL2RyaXZlcnMuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNGNhZjUwO1xuJHN1Y2Nlc3MtbGlnaHQ6ICM2NmJiNmE7XG4kc3VjY2Vzcy1kYXJrOiAjMDA3OTZiO1xuXG4kcGVuZGluZzogI2ZmOGYwMDtcbiRwZW5kaW5nLWxpZ2h0OiAjZmZjMDQ2O1xuJHBlbmRpbmctZGFyazogI2M1NjAwMDtcblxuJGVycm9yOiAjZjQ0MzM2O1xuJGVycm9yLWxpZ2h0OiAjZmY2ZjYwO1xuJGVycm9yLWRhcms6ICNhYjAwMGQ7XG5cbiRjb2xvci1wcmltYXJ5OiAjQzkyMzY2O1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6ICNjZDU2OGE7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjYjYwMDVkO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjNUM2NEZGO1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogIzcyNzJlNztcbiRjb2xvci1zZWNvbmRhcnktZGFyazogIzU1NTdkMTtcblxuJGNvbG9yLWRldmVsb3A6ICNmMGYwZjA7XG4kY29sb3ItZGV2ZWxvcC1saWdodDogI2ZmZjtcbiRjb2xvci1kZXZlbG9wLWRhcms6ICNlMGUwZTA7XG5cbiRiYWNrZ3JvdW5kOiAjMjYzMjM4O1xuJGJhY2tncm91bmQtbGlnaHQ6ICM0NTVhNjQ7XG4kYmFja2dyb3VuZC1kYXJrOiAjMjAyNjMyO1xuXG4kaGVhZGVyLWNvbG9yOiAjMEEwRDJFO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiUm9ib3RvXCIsIFwiVmVyZGFuYVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJZb3VuZ1wiLCAkZm9udDtcbiRtb25vLWZvbnQ6IFwiRmlyYSBDb2RlXCIsIG1vbm9zcGFjZTtcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgU2l6aW5nICAgfHxcblxcKj09PT09PT09PT09PSovXG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG5cblxuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgTWl4aW5zICAgfHxcblxcKj09PT09PT09PT09PSovXG5cbkBtaXhpbiBoaWRlLXRleHQtb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGJveC1zaGFkb3coJGRlcHRoOiAxLCAkc3ByZWFkOiAxKSB7XG4gICAgYm94LXNoYWRvdzogMCAoMXB4ICogJHNwcmVhZCkgKDNweCAqICRzcHJlYWQpIDAgcmdiYSgjMDAwLCAuMiAqICRkZXB0aCksXG4gICAgICAgICAgICAgICAgMCAoMXB4ICogJHNwcmVhZCkgKDFweCAqICRzcHJlYWQpIDAgcmdiYSgjMDAwLCAuMTQgKiAkZGVwdGgpLFxuICAgICAgICAgICAgICAgIDAgKDJweCAqICRzcHJlYWQpICgxcHggKiAkc3ByZWFkKSAtKDFweCAqICRzcHJlYWQpIHJnYmEoIzAwMCwgLjEyICogJGRlcHRoKTtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgJi5zaG93IHtcbiAgICAgICAgLnNpZGViYXIge1xuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zaWRlYmFyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDIwZW07XG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgaGVpZ2h0OiAzZW07XG4gICAgICAgIG1pbi1oZWlnaHQ6IDNlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcztcbiAgICB9XG59XG5cbm1haW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmbGV4OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgU2l6aW5nICAgfHxcblxcKj09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PSpcXFxufHwgICBNaXhpbnMgICB8fFxuXFwqPT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmNvbnRhaW5lci5zaG93IC5zaWRlYmFyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY29udGFpbmVyLnNob3cgLnNpZGViYXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmNvbnRhaW5lci5zaG93IG1haW4ge1xuICAgIGhlaWdodDogMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY29udGFpbmVyLnNob3cgbWFpbiB7XG4gICAgaGVpZ2h0OiAwJTtcbiAgfVxufVxuXG4uc2lkZWJhciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDIwZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuc2lkZWJhciB7XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgbWluLWhlaWdodDogM2VtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICBtaW4taGVpZ2h0OiAzZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zO1xuICB9XG59XG5cbm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIG1haW4ge1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIG1haW4ge1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DriversComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-drivers',
                templateUrl: './drivers.template.html',
                styleUrls: ['./drivers.styles.scss']
            }]
    }], function () { return [{ type: _services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shell/drivers/drivers.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shell/drivers/drivers.module.ts ***!
  \*************************************************/
/*! exports provided: AppDriversModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDriversModule", function() { return AppDriversModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _drivers_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drivers.routes */ "./src/app/shell/drivers/drivers.routes.ts");
/* harmony import */ var _drivers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drivers.component */ "./src/app/shell/drivers/drivers.component.ts");
/* harmony import */ var _driver_about_driver_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./driver-about/driver-about.component */ "./src/app/shell/drivers/driver-about/driver-about.component.ts");
/* harmony import */ var _driver_devices_driver_devices_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./driver-devices/driver-devices.component */ "./src/app/shell/drivers/driver-devices/driver-devices.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");











class AppDriversModule {
}
AppDriversModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppDriversModule });
AppDriversModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppDriversModule_Factory(t) { return new (t || AppDriversModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_drivers_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedContentModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppDriversModule, { declarations: [_drivers_component__WEBPACK_IMPORTED_MODULE_5__["DriversComponent"],
        _driver_about_driver_about_component__WEBPACK_IMPORTED_MODULE_6__["DriverAboutComponent"],
        _driver_devices_driver_devices_component__WEBPACK_IMPORTED_MODULE_7__["DriverModulesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedContentModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppDriversModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _drivers_component__WEBPACK_IMPORTED_MODULE_5__["DriversComponent"],
                    _driver_about_driver_about_component__WEBPACK_IMPORTED_MODULE_6__["DriverAboutComponent"],
                    _driver_devices_driver_devices_component__WEBPACK_IMPORTED_MODULE_7__["DriverModulesComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_drivers_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]),
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedContentModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shell/drivers/drivers.routes.ts":
/*!*************************************************!*\
  !*** ./src/app/shell/drivers/drivers.routes.ts ***!
  \*************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _drivers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drivers.component */ "./src/app/shell/drivers/drivers.component.ts");
/* harmony import */ var _driver_about_driver_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./driver-about/driver-about.component */ "./src/app/shell/drivers/driver-about/driver-about.component.ts");
/* harmony import */ var _driver_devices_driver_devices_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./driver-devices/driver-devices.component */ "./src/app/shell/drivers/driver-devices/driver-devices.component.ts");



const ROUTES = [
    {
        path: ':id', component: _drivers_component__WEBPACK_IMPORTED_MODULE_0__["DriversComponent"], children: [
            { path: 'about', component: _driver_about_driver_about_component__WEBPACK_IMPORTED_MODULE_1__["DriverAboutComponent"] },
            { path: 'modules', component: _driver_devices_driver_devices_component__WEBPACK_IMPORTED_MODULE_2__["DriverModulesComponent"] },
            { path: '**', redirectTo: 'about' }
        ]
    },
    { path: '**', redirectTo: '-' }
];


/***/ })

}]);
//# sourceMappingURL=shell-drivers-drivers-module-es2015.js.map