function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shell-repositories-repositories-module"], {
  /***/
  "./src/app/shell/repositories/about/repository-about.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shell/repositories/about/repository-about.component.ts ***!
    \************************************************************************/

  /*! exports provided: RepositoryAboutComponent */

  /***/
  function srcAppShellRepositoriesAboutRepositoryAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepositoryAboutComponent", function () {
      return RepositoryAboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/globals/base.directive */
    "./src/app/shared/globals/base.directive.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @acaprojects/ngx-pipes */
    "./node_modules/@acaprojects/ngx-pipes/__ivy_ngcc__/fesm2015/acaprojects-ngx-pipes.js");

    function RepositoryAboutComponent_div_0_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pull");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function RepositoryAboutComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Pull the latest commit for");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " this repository ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function RepositoryAboutComponent_div_0_Template_button_tapped_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.pullLatestCommit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RepositoryAboutComponent_div_0_ng_container_9_Template, 2, 0, "ng-container", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Type:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Folder name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Repository URI:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "safe");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Description:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.pulling);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.pulling)("ngIfElse", _r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.item.type ? "Interface" : "Driver", " Repository");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item.folder_name || "No folder set");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 8, ctx_r0.item.uri, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item.uri || "No URI set");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item.description || "No description");
      }
    }

    function RepositoryAboutComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var RepositoryAboutComponent =
    /*#__PURE__*/
    function (_shared_globals_base_) {
      _inherits(RepositoryAboutComponent, _shared_globals_base_);

      var _super = _createSuper(RepositoryAboutComponent);

      function RepositoryAboutComponent(_service) {
        var _this;

        _classCallCheck(this, RepositoryAboutComponent);

        _this = _super.call(this);
        _this._service = _service;
        return _this;
      }

      _createClass(RepositoryAboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.subscription('item', this._service.listen('BACKOFFICE.active_item', function (item) {
            _this2.item = item;
          }));
        }
        /**
         * Send request to server to pull the latest commit for the active repository
         */

      }, {
        key: "pullLatestCommit",
        value: function pullLatestCommit() {
          var _this3 = this;

          this.pulling = true;

          this._service.Repositories.pullCommit(this.item.id).then(function () {
            return _this3.pulling = false;
          }, function (err) {
            _this3.pulling = false;

            _this3._service.notifyError("Error pulling latest commit. Error: ".concat(err.message || err));
          });
        }
      }]);

      return RepositoryAboutComponent;
    }(_shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"]);

    RepositoryAboutComponent.ɵfac = function RepositoryAboutComponent_Factory(t) {
      return new (t || RepositoryAboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"]));
    };

    RepositoryAboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RepositoryAboutComponent,
      selectors: [["repository-about"]],
      inputs: {
        item: "item"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 1,
      consts: [["class", "container", 4, "ngIf"], ["spinner", ""], [1, "container"], [1, "actions"], ["mat-button", "", 3, "disabled", "tapped"], [4, "ngIf", "ngIfElse"], [1, "details"], [1, "field"], [1, "value"], [3, "href"], [1, "spinner"], ["diameter", "32"]],
      template: function RepositoryAboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RepositoryAboutComponent_div_0_Template, 33, 11, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RepositoryAboutComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_6__["ɵb"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"]],
      pipes: [_acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_8__["ɵa"]],
      styles: [".container[_ngcontent-%COMP%] {\n  padding: 1em;\n}\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: bold;\n  font-size: 1.1em;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 0.5em 0.25em;\n}\n.no-item[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 0.75em 0;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  font-weight: 500;\n  margin-bottom: 0.4em;\n}\n.actions[_ngcontent-%COMP%] {\n  padding: 0.5em;\n  display: flex;\n  flex-wrap: wrap;\n}\nbutton[_ngcontent-%COMP%] {\n  min-width: 10em;\n  margin: 0.25em;\n}\n.spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin: 0.25em 0;\n}\nmat-card[_ngcontent-%COMP%] {\n  margin: 0.5em;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JhY2tvZmZpY2UvYmFja29mZmljZS9zcmMvYXBwL3NoYXJlZC9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9iYWNrb2ZmaWNlL2JhY2tvZmZpY2Uvc3JjL2FwcC9zaGVsbC9yZXBvc2l0b3JpZXMvYWJvdXQvcmVwb3NpdG9yeS1hYm91dC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvcmVwb3NpdG9yaWVzL2Fib3V0L3JlcG9zaXRvcnktYWJvdXQuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBcUNBOztjQUFBO0FBWUE7O2VBQUE7QUFPQTs7ZUFBQTtBQWdCQTs7c0JBQUE7QUN0RUE7RUFDSSxZQUFBO0FDYUo7QURWQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNhSjtBRFZBO0VBQ0kscUJBQUE7QUNhSjtBRFZBO0VBQ0ksaUJBQUE7QUNhSjtBRFZBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNhSjtBRFZBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDYUo7QURWQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ2FKO0FEVkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ2FKO0FEVkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNhSjtBRFZBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FDYUoiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9yZXBvc2l0b3JpZXMvYWJvdXQvcmVwb3NpdG9yeS1hYm91dC5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0Y2FmNTA7XG4kc3VjY2Vzcy1saWdodDogIzY2YmI2YTtcbiRzdWNjZXNzLWRhcms6ICMwMDc5NmI7XG5cbiRwZW5kaW5nOiAjZmY4ZjAwO1xuJHBlbmRpbmctbGlnaHQ6ICNmZmMwNDY7XG4kcGVuZGluZy1kYXJrOiAjYzU2MDAwO1xuXG4kZXJyb3I6ICNmNDQzMzY7XG4kZXJyb3ItbGlnaHQ6ICNmZjZmNjA7XG4kZXJyb3ItZGFyazogI2FiMDAwZDtcblxuJGNvbG9yLXByaW1hcnk6ICNDOTIzNjY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogI2NkNTY4YTtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICNiNjAwNWQ7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM1QzY0RkY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiAjNzI3MmU3O1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiAjNTU1N2QxO1xuXG4kY29sb3ItZGV2ZWxvcDogI2YwZjBmMDtcbiRjb2xvci1kZXZlbG9wLWxpZ2h0OiAjZmZmO1xuJGNvbG9yLWRldmVsb3AtZGFyazogI2UwZTBlMDtcblxuJGJhY2tncm91bmQ6ICMyNjMyMzg7XG4kYmFja2dyb3VuZC1saWdodDogIzQ1NWE2NDtcbiRiYWNrZ3JvdW5kLWRhcms6ICMyMDI2MzI7XG5cbiRoZWFkZXItY29sb3I6ICMwQTBEMkU7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJSb2JvdG9cIiwgXCJWZXJkYW5hXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIllvdW5nXCIsICRmb250O1xuJG1vbm8tZm9udDogXCJGaXJhIENvZGVcIiwgbW9ub3NwYWNlO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBTaXppbmcgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcblxuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBNaXhpbnMgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkZGVwdGg6IDEsICRzcHJlYWQ6IDEpIHtcbiAgICBib3gtc2hhZG93OiAwICgxcHggKiAkc3ByZWFkKSAoM3B4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4yICogJGRlcHRoKSxcbiAgICAgICAgICAgICAgICAwICgxcHggKiAkc3ByZWFkKSAoMXB4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4xNCAqICRkZXB0aCksXG4gICAgICAgICAgICAgICAgMCAoMnB4ICogJHNwcmVhZCkgKDFweCAqICRzcHJlYWQpIC0oMXB4ICogJHNwcmVhZCkgcmdiYSgjMDAwLCAuMTIgKiAkZGVwdGgpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbn1cblxuc2VjdGlvbiB7XG4gICAgcGFkZGluZzogLjVlbSAuMjVlbTtcbn1cblxuLm5vLWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogLjc1ZW07XG59XG5cbi5maWVsZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogLjc1ZW0gMDtcbn1cblxubGFiZWwge1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1ib3R0b206IC40ZW07XG59XG5cbi5hY3Rpb25zIHtcbiAgICBwYWRkaW5nOiAuNWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5idXR0b24ge1xuICAgIG1pbi13aWR0aDogMTBlbTtcbiAgICBtYXJnaW46IC4yNWVtO1xufVxuXG4uc3Bpbm5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IC4yNWVtIDA7XG59XG5cbm1hdC1jYXJkIHtcbiAgICBtYXJnaW46IC41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgU2l6aW5nICAgfHxcblxcKj09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PSpcXFxufHwgICBNaXhpbnMgICB8fFxuXFwqPT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbnNlY3Rpb24ge1xuICBwYWRkaW5nOiAwLjVlbSAwLjI1ZW07XG59XG5cbi5uby1pdGVtIHtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG59XG5cbi5maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMC43NWVtIDA7XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC40ZW07XG59XG5cbi5hY3Rpb25zIHtcbiAgcGFkZGluZzogMC41ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAxMGVtO1xuICBtYXJnaW46IDAuMjVlbTtcbn1cblxuLnNwaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMC4yNWVtIDA7XG59XG5cbm1hdC1jYXJkIHtcbiAgbWFyZ2luOiAwLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepositoryAboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'repository-about',
          templateUrl: './repository-about.template.html',
          styleUrls: ['./repository-about.styles.scss']
        }]
      }], function () {
        return [{
          type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"]
        }];
      }, {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shell/repositories/drivers/repository-drivers.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shell/repositories/drivers/repository-drivers.component.ts ***!
    \****************************************************************************/

  /*! exports provided: RepositoryDriversComponent */

  /***/
  function srcAppShellRepositoriesDriversRepositoryDriversComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepositoryDriversComponent", function () {
      return RepositoryDriversComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @placeos/ts-client */
    "./node_modules/@placeos/ts-client/dist/ts-client.es5.js");
    /* harmony import */


    var _shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/globals/base.directive */
    "./src/app/shared/globals/base.directive.ts");
    /* harmony import */


    var src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/overlays/item-modal/item-modal.component */
    "./src/app/overlays/item-modal/item-modal.component.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
    /* harmony import */


    var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/components/icon/icon.component */
    "./src/app/shared/components/icon/icon.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _shared_pipes_driver_format_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../shared/pipes/driver-format.pipe */
    "./src/app/shared/pipes/driver-format.pipe.ts");

    var _c0 = function _c0() {
      return {
        "class": "material-icons",
        content: "add"
      };
    };

    function RepositoryDriversComponent_div_0_div_3_table_1_tr_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "td", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "driverFormat");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function RepositoryDriversComponent_div_0_div_3_table_1_tr_6_Template_button_tapped_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var item_r7 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r8.newDriver(item_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, item_r7), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
      }
    }

    function RepositoryDriversComponent_div_0_div_3_table_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RepositoryDriversComponent_div_0_div_3_table_1_tr_6_Template, 6, 5, "tr", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.driver_list);
      }
    }

    function RepositoryDriversComponent_div_0_div_3_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No drivers for repository");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RepositoryDriversComponent_div_0_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RepositoryDriversComponent_div_0_div_3_table_1_Template, 7, 1, "table", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RepositoryDriversComponent_div_0_div_3_div_2_Template, 3, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.driver_list && ctx_r3.driver_list.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.driver_list || ctx_r3.driver_list.length <= 0);
      }
    }

    function RepositoryDriversComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Available Drivers");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RepositoryDriversComponent_div_0_div_3_Template, 3, 2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loading)("ngIfElse", _r1);
      }
    }

    function RepositoryDriversComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading driver list...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var RepositoryDriversComponent =
    /*#__PURE__*/
    function (_shared_globals_base_2) {
      _inherits(RepositoryDriversComponent, _shared_globals_base_2);

      var _super2 = _createSuper(RepositoryDriversComponent);

      function RepositoryDriversComponent(_service, _dialog) {
        var _this4;

        _classCallCheck(this, RepositoryDriversComponent);

        _this4 = _super2.call(this);
        _this4._service = _service;
        _this4._dialog = _dialog;
        /** List of drivers available in the repository */

        _this4.driver_list = [];
        return _this4;
      }

      _createClass(RepositoryDriversComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.subscription('item', this._service.listen('BACKOFFICE.active_item', function (item) {
            _this5.item = item;

            _this5.load();
          }));
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.item) {
            this.load();
          }
        }
      }, {
        key: "load",
        value: function load() {
          var _this6 = this;

          var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          if (!this.item) {
            return;
          }

          this.loading = true;

          this._service.Repositories.listDrivers(this.item.id, {
            offset: offset
          }).then(function (list) {
            _this6.loading = false;
            _this6.driver_list = list || [];
          }, function () {
            return _this6.loading = false;
          });
        }
      }, {
        key: "newDriver",
        value: function newDriver(driver) {
          if (this.item.id) {
            this._dialog.open(src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_3__["ItemCreateUpdateModalComponent"], {
              height: 'auto',
              width: 'auto',
              maxHeight: 'calc(100vh - 2em)',
              maxWidth: 'calc(100vw - 2em)',
              data: {
                item: new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["EngineDriver"](this._service.Drivers, {
                  name: '',
                  module_name: '',
                  repository_id: this.item.id,
                  file_name: driver
                }),
                service: this._service.Drivers
              }
            });
          }
        }
      }]);

      return RepositoryDriversComponent;
    }(_shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]);

    RepositoryDriversComponent.ɵfac = function RepositoryDriversComponent_Factory(t) {
      return new (t || RepositoryDriversComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
    };

    RepositoryDriversComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RepositoryDriversComponent,
      selectors: [["repository-drivers"]],
      inputs: {
        item: "item"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 3,
      vars: 1,
      consts: [["class", "container", 4, "ngIf"], ["load_state", ""], [1, "container"], ["class", "settings", 4, "ngIf", "ngIfElse"], [1, "settings"], [4, "ngIf"], ["class", "info-block", 4, "ngIf"], [1, "flex"], [4, "ngFor", "ngForOf"], [3, "innerHTML"], [1, "small"], ["mat-icon-button", "", 3, "tapped"], [3, "icon"], [1, "info-block"], [1, "text"], [1, "info-block", "center"], [1, "icon"], ["diameter", "48"]],
      template: function RepositoryDriversComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RepositoryDriversComponent_div_0_Template, 4, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RepositoryDriversComponent_ng_template_1_Template, 5, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_8__["ɵb"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_9__["IconComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"]],
      pipes: [_shared_pipes_driver_format_pipe__WEBPACK_IMPORTED_MODULE_11__["DriverFormatPipe"]],
      styles: [".container[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n.list[_ngcontent-%COMP%] {\n  margin-top: 0.5em;\n}\ntbody[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.small[_ngcontent-%COMP%] {\n  width: 2em;\n}\ndiv[_ngcontent-%COMP%]   .duo[_ngcontent-%COMP%] {\n  width: 4em;\n}\ndiv[_ngcontent-%COMP%]   .duo[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.select[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.select[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JhY2tvZmZpY2UvYmFja29mZmljZS9zcmMvYXBwL3NoYXJlZC9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9iYWNrb2ZmaWNlL2JhY2tvZmZpY2Uvc3JjL2FwcC9zaGVsbC9yZXBvc2l0b3JpZXMvZHJpdmVycy9yZXBvc2l0b3J5LWRyaXZlcnMuc3R5bGVzLnNjc3MiLCJzcmMvYXBwL3NoZWxsL3JlcG9zaXRvcmllcy9kcml2ZXJzL3JlcG9zaXRvcnktZHJpdmVycy5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFxQ0E7O2NBQUE7QUFZQTs7ZUFBQTtBQU9BOztlQUFBO0FBZ0JBOztzQkFBQTtBQ3RFQTtFQUNJLFlBQUE7QUNhSjtBRFZBO0VBQ0ksaUJBQUE7QUNhSjtBRFZBO0VBQ0ksZ0JBQUE7QUNhSjtBRFpJO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtBQ2NSO0FEVkE7RUFDSSxVQUFBO0FDYUo7QURUSTtFQUNJLFVBQUE7QUNZUjtBRFhRO0VBQ0ksb0JBQUE7QUNhWjtBRFJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDV0o7QURWSTtFQUNJLE9BQUE7QUNZUiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3JlcG9zaXRvcmllcy9kcml2ZXJzL3JlcG9zaXRvcnktZHJpdmVycy5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0Y2FmNTA7XG4kc3VjY2Vzcy1saWdodDogIzY2YmI2YTtcbiRzdWNjZXNzLWRhcms6ICMwMDc5NmI7XG5cbiRwZW5kaW5nOiAjZmY4ZjAwO1xuJHBlbmRpbmctbGlnaHQ6ICNmZmMwNDY7XG4kcGVuZGluZy1kYXJrOiAjYzU2MDAwO1xuXG4kZXJyb3I6ICNmNDQzMzY7XG4kZXJyb3ItbGlnaHQ6ICNmZjZmNjA7XG4kZXJyb3ItZGFyazogI2FiMDAwZDtcblxuJGNvbG9yLXByaW1hcnk6ICNDOTIzNjY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogI2NkNTY4YTtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICNiNjAwNWQ7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM1QzY0RkY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiAjNzI3MmU3O1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiAjNTU1N2QxO1xuXG4kY29sb3ItZGV2ZWxvcDogI2YwZjBmMDtcbiRjb2xvci1kZXZlbG9wLWxpZ2h0OiAjZmZmO1xuJGNvbG9yLWRldmVsb3AtZGFyazogI2UwZTBlMDtcblxuJGJhY2tncm91bmQ6ICMyNjMyMzg7XG4kYmFja2dyb3VuZC1saWdodDogIzQ1NWE2NDtcbiRiYWNrZ3JvdW5kLWRhcms6ICMyMDI2MzI7XG5cbiRoZWFkZXItY29sb3I6ICMwQTBEMkU7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJSb2JvdG9cIiwgXCJWZXJkYW5hXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIllvdW5nXCIsICRmb250O1xuJG1vbm8tZm9udDogXCJGaXJhIENvZGVcIiwgbW9ub3NwYWNlO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBTaXppbmcgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcblxuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBNaXhpbnMgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkZGVwdGg6IDEsICRzcHJlYWQ6IDEpIHtcbiAgICBib3gtc2hhZG93OiAwICgxcHggKiAkc3ByZWFkKSAoM3B4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4yICogJGRlcHRoKSxcbiAgICAgICAgICAgICAgICAwICgxcHggKiAkc3ByZWFkKSAoMXB4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4xNCAqICRkZXB0aCksXG4gICAgICAgICAgICAgICAgMCAoMnB4ICogJHNwcmVhZCkgKDFweCAqICRzcHJlYWQpIC0oMXB4ICogJHNwcmVhZCkgcmdiYSgjMDAwLCAuMTIgKiAkZGVwdGgpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuLmxpc3Qge1xuICAgIG1hcmdpbi10b3A6IC41ZW07XG59XG5cbnRib2R5IHtcbiAgICBmb250LXNpemU6IC45ZW07XG4gICAgdGQge1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG59XG5cbi5zbWFsbCB7XG4gICAgd2lkdGg6IDJlbTtcbn1cblxuZGl2IHtcbiAgICAuZHVvIHtcbiAgICAgICAgd2lkdGg6IDRlbTtcbiAgICAgICAgKiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNlbGVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5idG4ge1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PSpcXFxufHwgICBTaXppbmcgICB8fFxuXFwqPT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09KlxcXG58fCAgIE1peGlucyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMWVtO1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuXG50Ym9keSB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG50Ym9keSB0ZCB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uc21hbGwge1xuICB3aWR0aDogMmVtO1xufVxuXG5kaXYgLmR1byB7XG4gIHdpZHRoOiA0ZW07XG59XG5kaXYgLmR1byAqIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5zZWxlY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlbGVjdCAuYnRuIHtcbiAgZmxleDogMTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepositoryDriversComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'repository-drivers',
          templateUrl: './repository-drivers.template.html',
          styleUrls: ['./repository-drivers.styles.scss']
        }]
      }], function () {
        return [{
          type: _services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      }, {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shell/repositories/repositories.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shell/repositories/repositories.component.ts ***!
    \**************************************************************/

  /*! exports provided: RepositoriesComponent */

  /***/
  function srcAppShellRepositoriesRepositoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepositoriesComponent", function () {
      return RepositoriesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @placeos/ts-client */
    "./node_modules/@placeos/ts-client/dist/ts-client.es5.js");
    /* harmony import */


    var _shared_components_base_root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/components/base-root.component */
    "./src/app/shared/components/base-root.component.ts");
    /* harmony import */


    var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/overlays/confirm-modal/confirm-modal.component */
    "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
    /* harmony import */


    var src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/overlays/item-modal/item-modal.component */
    "./src/app/overlays/item-modal/item-modal.component.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/components/sidebar/sidebar.component */
    "./src/app/shared/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
    /* harmony import */


    var _shared_components_item_display_item_display_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared/components/item-display/item-display.component */
    "./src/app/shared/components/item-display/item-display.component.ts");

    var _c0 = function _c0() {
      return {
        "class": "backoffice-info-with-circle"
      };
    };

    var _c1 = function _c1(a2) {
      return {
        id: "about",
        name: "About",
        icon: a2
      };
    };

    var _c2 = function _c2() {
      return {
        "class": "backoffice-documents"
      };
    };

    var _c3 = function _c3(a2, a3) {
      return {
        id: "drivers",
        name: "Drivers",
        count: a2,
        icon: a3
      };
    };

    var _c4 = function _c4(a0, a1) {
      return [a0, a1];
    };

    var RepositoriesComponent =
    /*#__PURE__*/
    function (_shared_components_ba) {
      _inherits(RepositoriesComponent, _shared_components_ba);

      var _super3 = _createSuper(RepositoriesComponent);

      function RepositoriesComponent(_service, _route, _router, _dialog) {
        var _this7;

        _classCallCheck(this, RepositoriesComponent);

        _this7 = _super3.call(this, _service, _route, _router);
        _this7._service = _service;
        _this7._route = _route;
        _this7._router = _router;
        _this7._dialog = _dialog;
        _this7.service = _this7._service.Repositories;
        return _this7;
      }

      _createClass(RepositoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(RepositoriesComponent.prototype), "ngOnInit", this).call(this);

          this._service.title = 'Repositories';
        }
      }, {
        key: "loadValues",
        value: function loadValues() {
          var _this8 = this;

          var query = {
            offset: 0
          }; // Get repository count

          this._service.Repositories.listDrivers(this.item.id, query).then(function (list) {
            return _this8.driver_count = list.length;
          });
        }
        /**
         * Open the modal to create a new repository
         */

      }, {
        key: "newItem",
        value: function newItem() {
          var _this9 = this;

          if (this.modal_ref) {
            return;
          }

          this.modal_ref = this._dialog.open(src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_5__["ItemCreateUpdateModalComponent"], {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
              item: new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["EngineRepository"](this._service.Repositories, {}),
              service: this._service.Repositories
            }
          });
          this.subscription('modal_event', this.modal_ref.componentInstance.event.subscribe(function (event) {
            if (event.reason === 'done') {
              _this9._router.navigate(['/repositories', event.metadata.item.id]);
            }
          }));
          this.modal_ref.afterClosed().subscribe(function () {
            _this9.unsub('modal_events');

            _this9.modal_ref = null;
          });
        }
        /**
         * Open the modal to create edit the active repository
         */

      }, {
        key: "editItem",
        value: function editItem() {
          var _this10 = this;

          if (this.item && !this.modal_ref) {
            this.modal_ref = this._dialog.open(src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_5__["ItemCreateUpdateModalComponent"], {
              height: 'auto',
              width: 'auto',
              maxHeight: 'calc(100vh - 2em)',
              maxWidth: 'calc(100vw - 2em)',
              data: {
                item: this.item,
                service: this._service.Repositories
              }
            });
            this.modal_ref.afterClosed().subscribe(function () {
              _this10.unsub('modal_events');

              _this10.modal_ref = null;
            });
          }
        }
        /**
         * Delete the active repository
         */

      }, {
        key: "deleteItem",
        value: function deleteItem() {
          var _this11 = this;

          if (this.item && !this.modal_ref) {
            this.modal_ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["CONFIRM_METADATA"]), {
              data: {
                title: "Delete repository",
                content: "<p>Are you sure you want delete this repository?</p><p>Deleting this repository will <strong>immediately</strong> remove it from all associated systems and zones</p>",
                icon: {
                  type: 'icon',
                  "class": 'backoffice-trash'
                }
              }
            }));
            this.subscription('modal_events', this.modal_ref.componentInstance.event.subscribe(function (event) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee() {
                var _this12 = this;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!(event.reason === 'done')) {
                          _context.next = 7;
                          break;
                        }

                        this.modal_ref.componentInstance.loading = 'Deleting repository...';
                        _context.next = 4;
                        return this.item["delete"]()["catch"](function (err) {
                          _this12.modal_ref.componentInstance.loading = null;

                          _this12._service.notifyError("Error deleting repository. Error: ".concat(err.message || err));

                          throw err;
                        });

                      case 4:
                        this._service.set('BACKOFFICE.removed', this.item.id);

                        this._router.navigate(['/repositories']);

                        this.modal_ref.close();

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }));
            this.modal_ref.afterClosed().subscribe(function () {
              _this11.unsub('modal_events');

              _this11.modal_ref = null;
            });
          }
        }
      }]);

      return RepositoriesComponent;
    }(_shared_components_base_root_component__WEBPACK_IMPORTED_MODULE_3__["BaseRootComponent"]);

    RepositoriesComponent.ɵfac = function RepositoriesComponent_Factory(t) {
      return new (t || RepositoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]));
    };

    RepositoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RepositoriesComponent,
      selectors: [["app-repositories"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 5,
      vars: 17,
      consts: [[1, "container"], [1, "sidebar"], ["heading", "Repositories", 3, "module", "close", "event"], [3, "touchrelease"], ["name", "repository", "route", "repositories", 3, "item", "loading", "tabs", "event"]],
      template: function RepositoriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "sidebar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("event", function RepositoriesComponent_Template_sidebar_event_2_listener($event) {
            return ctx.sidebarEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "main", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("touchrelease", function RepositoriesComponent_Template_main_touchrelease_3_listener() {
            return ctx.show_sidebar = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "item-display", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("event", function RepositoriesComponent_Template_item_display_event_4_listener($event) {
            return ctx.itemEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.show_sidebar);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("module", ctx.module)("close", ctx.show_sidebar);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", ctx.item)("loading", ctx.loading_item)("tabs", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](14, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c3, ctx.driver_count, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c2))));
        }
      },
      directives: [_shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_10__["ɵb"], _shared_components_item_display_item_display_component__WEBPACK_IMPORTED_MODULE_11__["ItemDisplayComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n    height: 0%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n    height: 0%;\n  }\n}\n.sidebar[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 20em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .sidebar[_ngcontent-%COMP%] {\n    height: 3em;\n    min-height: 3em;\n    width: 100%;\n    transition: height 300ms;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .sidebar[_ngcontent-%COMP%] {\n    height: 3em;\n    min-height: 3em;\n    width: 100%;\n    transition: height 300ms;\n  }\n}\nmain[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  overflow: hidden;\n  flex: 1;\n  background-color: #f0f0f0;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  main[_ngcontent-%COMP%] {\n    transition: height 300ms;\n    width: 100%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  main[_ngcontent-%COMP%] {\n    transition: height 300ms;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JhY2tvZmZpY2UvYmFja29mZmljZS9zcmMvYXBwL3NoYXJlZC9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9iYWNrb2ZmaWNlL2JhY2tvZmZpY2Uvc3JjL2FwcC9zaGVsbC9yZXBvc2l0b3JpZXMvcmVwb3NpdG9yaWVzLnN0eWxlcy5zY3NzIiwic3JjL2FwcC9zaGVsbC9yZXBvc2l0b3JpZXMvcmVwb3NpdG9yaWVzLnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQXFDQTs7Y0FBQTtBQVlBOztlQUFBO0FBT0E7O2VBQUE7QUFnQkE7O3NCQUFBO0FDdEVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNhSjtBRm1FUTtFQ3BGUjtJQU1RLHNCQUFBO0VDZU47QUFDRjtBRmlFUTtFQ3ZGUjtJQU1RLHNCQUFBO0VDb0JOO0FBQ0Y7QUZ5RFE7RUMxRUE7SUFFUSxZQUFBO0VDbUJkO0FBQ0Y7QUZ1RFE7RUM3RUE7SUFFUSxZQUFBO0VDd0JkO0FBQ0Y7QUYrQ1E7RUNyRUE7SUFFUSxVQUFBO0VDd0JkO0FBQ0Y7QUY2Q1E7RUN4RUE7SUFFUSxVQUFBO0VDNkJkO0FBQ0Y7QUR4QkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQzJCSjtBRmdDUTtFQzdEUjtJQUlRLFdBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLHdCQUFBO0VDNkJOO0FBQ0Y7QUYyQlE7RUNoRVI7SUFJUSxXQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSx3QkFBQTtFQ3FDTjtBQUNGO0FEbENBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7QUNxQ0o7QUZRUTtFQ2xEUjtJQU9RLHdCQUFBO0lBQ0EsV0FBQTtFQ3VDTjtBQUNGO0FGS1E7RUNyRFI7SUFPUSx3QkFBQTtJQUNBLFdBQUE7RUM2Q047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3JlcG9zaXRvcmllcy9yZXBvc2l0b3JpZXMuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNGNhZjUwO1xuJHN1Y2Nlc3MtbGlnaHQ6ICM2NmJiNmE7XG4kc3VjY2Vzcy1kYXJrOiAjMDA3OTZiO1xuXG4kcGVuZGluZzogI2ZmOGYwMDtcbiRwZW5kaW5nLWxpZ2h0OiAjZmZjMDQ2O1xuJHBlbmRpbmctZGFyazogI2M1NjAwMDtcblxuJGVycm9yOiAjZjQ0MzM2O1xuJGVycm9yLWxpZ2h0OiAjZmY2ZjYwO1xuJGVycm9yLWRhcms6ICNhYjAwMGQ7XG5cbiRjb2xvci1wcmltYXJ5OiAjQzkyMzY2O1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6ICNjZDU2OGE7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjYjYwMDVkO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjNUM2NEZGO1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogIzcyNzJlNztcbiRjb2xvci1zZWNvbmRhcnktZGFyazogIzU1NTdkMTtcblxuJGNvbG9yLWRldmVsb3A6ICNmMGYwZjA7XG4kY29sb3ItZGV2ZWxvcC1saWdodDogI2ZmZjtcbiRjb2xvci1kZXZlbG9wLWRhcms6ICNlMGUwZTA7XG5cbiRiYWNrZ3JvdW5kOiAjMjYzMjM4O1xuJGJhY2tncm91bmQtbGlnaHQ6ICM0NTVhNjQ7XG4kYmFja2dyb3VuZC1kYXJrOiAjMjAyNjMyO1xuXG4kaGVhZGVyLWNvbG9yOiAjMEEwRDJFO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiUm9ib3RvXCIsIFwiVmVyZGFuYVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJZb3VuZ1wiLCAkZm9udDtcbiRtb25vLWZvbnQ6IFwiRmlyYSBDb2RlXCIsIG1vbm9zcGFjZTtcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgU2l6aW5nICAgfHxcblxcKj09PT09PT09PT09PSovXG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG5cblxuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgTWl4aW5zICAgfHxcblxcKj09PT09PT09PT09PSovXG5cbkBtaXhpbiBoaWRlLXRleHQtb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGJveC1zaGFkb3coJGRlcHRoOiAxLCAkc3ByZWFkOiAxKSB7XG4gICAgYm94LXNoYWRvdzogMCAoMXB4ICogJHNwcmVhZCkgKDNweCAqICRzcHJlYWQpIDAgcmdiYSgjMDAwLCAuMiAqICRkZXB0aCksXG4gICAgICAgICAgICAgICAgMCAoMXB4ICogJHNwcmVhZCkgKDFweCAqICRzcHJlYWQpIDAgcmdiYSgjMDAwLCAuMTQgKiAkZGVwdGgpLFxuICAgICAgICAgICAgICAgIDAgKDJweCAqICRzcHJlYWQpICgxcHggKiAkc3ByZWFkKSAtKDFweCAqICRzcHJlYWQpIHJnYmEoIzAwMCwgLjEyICogJGRlcHRoKTtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgJi5zaG93IHtcbiAgICAgICAgLnNpZGViYXIge1xuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zaWRlYmFyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDIwZW07XG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgaGVpZ2h0OiAzZW07XG4gICAgICAgIG1pbi1oZWlnaHQ6IDNlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcztcbiAgICB9XG59XG5cbm1haW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmbGV4OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgU2l6aW5nICAgfHxcblxcKj09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PSpcXFxufHwgICBNaXhpbnMgICB8fFxuXFwqPT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmNvbnRhaW5lci5zaG93IC5zaWRlYmFyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY29udGFpbmVyLnNob3cgLnNpZGViYXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmNvbnRhaW5lci5zaG93IG1haW4ge1xuICAgIGhlaWdodDogMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY29udGFpbmVyLnNob3cgbWFpbiB7XG4gICAgaGVpZ2h0OiAwJTtcbiAgfVxufVxuXG4uc2lkZWJhciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDIwZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuc2lkZWJhciB7XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgbWluLWhlaWdodDogM2VtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICBtaW4taGVpZ2h0OiAzZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zO1xuICB9XG59XG5cbm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIG1haW4ge1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIG1haW4ge1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RepositoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-repositories',
          templateUrl: './repositories.template.html',
          styleUrls: ['./repositories.styles.scss']
        }]
      }], function () {
        return [{
          type: _services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shell/repositories/repositories.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shell/repositories/repositories.module.ts ***!
    \***********************************************************/

  /*! exports provided: AppRepositoriesModule */

  /***/
  function srcAppShellRepositoriesRepositoriesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRepositoriesModule", function () {
      return AppRepositoriesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _repositories_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./repositories.routes */
    "./src/app/shell/repositories/repositories.routes.ts");
    /* harmony import */


    var _repositories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./repositories.component */
    "./src/app/shell/repositories/repositories.component.ts");
    /* harmony import */


    var _about_repository_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./about/repository-about.component */
    "./src/app/shell/repositories/about/repository-about.component.ts");
    /* harmony import */


    var _drivers_repository_drivers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./drivers/repository-drivers.component */
    "./src/app/shell/repositories/drivers/repository-drivers.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var AppRepositoriesModule = function AppRepositoriesModule() {
      _classCallCheck(this, AppRepositoriesModule);
    };

    AppRepositoriesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRepositoriesModule
    });
    AppRepositoriesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRepositoriesModule_Factory(t) {
        return new (t || AppRepositoriesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_repositories_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedContentModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRepositoriesModule, {
        declarations: [_repositories_component__WEBPACK_IMPORTED_MODULE_5__["RepositoriesComponent"], _about_repository_about_component__WEBPACK_IMPORTED_MODULE_6__["RepositoryAboutComponent"], _drivers_repository_drivers_component__WEBPACK_IMPORTED_MODULE_7__["RepositoryDriversComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedContentModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRepositoriesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_repositories_component__WEBPACK_IMPORTED_MODULE_5__["RepositoriesComponent"], _about_repository_about_component__WEBPACK_IMPORTED_MODULE_6__["RepositoryAboutComponent"], _drivers_repository_drivers_component__WEBPACK_IMPORTED_MODULE_7__["RepositoryDriversComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_repositories_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedContentModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shell/repositories/repositories.routes.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shell/repositories/repositories.routes.ts ***!
    \***********************************************************/

  /*! exports provided: ROUTES */

  /***/
  function srcAppShellRepositoriesRepositoriesRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony import */


    var _repositories_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./repositories.component */
    "./src/app/shell/repositories/repositories.component.ts");
    /* harmony import */


    var _about_repository_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./about/repository-about.component */
    "./src/app/shell/repositories/about/repository-about.component.ts");
    /* harmony import */


    var _drivers_repository_drivers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./drivers/repository-drivers.component */
    "./src/app/shell/repositories/drivers/repository-drivers.component.ts");

    var ROUTES = [{
      path: ':id',
      component: _repositories_component__WEBPACK_IMPORTED_MODULE_0__["RepositoriesComponent"],
      children: [{
        path: 'about',
        component: _about_repository_about_component__WEBPACK_IMPORTED_MODULE_1__["RepositoryAboutComponent"]
      }, {
        path: 'drivers',
        component: _drivers_repository_drivers_component__WEBPACK_IMPORTED_MODULE_2__["RepositoryDriversComponent"]
      }, {
        path: '**',
        redirectTo: 'about'
      }]
    }, {
      path: '**',
      redirectTo: '-'
    }];
    /***/
  }
}]);
//# sourceMappingURL=shell-repositories-repositories-module-es5.js.map