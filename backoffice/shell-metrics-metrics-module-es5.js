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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shell-metrics-metrics-module"], {
  /***/
  "./src/app/shell/metrics/metrics.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/shell/metrics/metrics.component.ts ***!
    \****************************************************/

  /*! exports provided: MetricsComponent */

  /***/
  function srcAppShellMetricsMetricsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetricsComponent", function () {
      return MetricsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/globals/base.directive */
    "./src/app/shared/globals/base.directive.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _placeos_composer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @placeos/composer */
    "./node_modules/@placeos/composer/__ivy_ngcc__/fesm2015/placeos-composer.js");
    /* harmony import */


    var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @acaprojects/ngx-pipes */
    "./node_modules/@acaprojects/ngx-pipes/__ivy_ngcc__/fesm2015/acaprojects-ngx-pipes.js");

    var MetricsComponent =
    /*#__PURE__*/
    function (_shared_globals_base_) {
      _inherits(MetricsComponent, _shared_globals_base_);

      var _super = _createSuper(MetricsComponent);

      function MetricsComponent(_composer, _service) {
        var _this;

        _classCallCheck(this, MetricsComponent);

        _this = _super.call(this);
        _this._composer = _composer;
        _this._service = _service;
        return _this;
      }
      /** URL for the metrics interface */


      _createClass(MetricsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.updateTime();
          this.interval('time', function () {
            return _this2.updateTime();
          }, 1000);
          this._service.title = 'Metrics';
        }
      }, {
        key: "updateTime",
        value: function updateTime() {
          var now = dayjs__WEBPACK_IMPORTED_MODULE_2__();
          this.time = now.format('hh:mm A');
          this.date = now.format('ddd, MMM D');
          this.hour_angle = (now.hour() % 12 + now.minute() / 60) / 12 * 360;
          this.minute_angle = (now.minute() + now.second() / 60) / 60 * 360;
          this.second_angle = now.second() / 60 * 360;
        }
      }, {
        key: "metrics_url",
        get: function get() {
          var authority = this._composer.auth.authority;
          return authority ? authority.metrics : '';
        }
      }]);

      return MetricsComponent;
    }(_shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"]);

    MetricsComponent.ɵfac = function MetricsComponent_Factory(t) {
      return new (t || MetricsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_placeos_composer__WEBPACK_IMPORTED_MODULE_3__["ComposerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]));
    };

    MetricsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MetricsComponent,
      selectors: [["app-metrics"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 18,
      vars: 14,
      consts: [[1, "container"], [1, "header"], [1, "heading"], [1, "time-display"], [1, "clock"], [1, "hand", "hour"], [1, "hand", "minute"], [1, "hand", "second"], [1, "center"], [1, "display"], [1, "time"], [1, "day"], [1, "body"], [3, "src"]],
      template: function MetricsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Metrics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "iframe", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "safe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fullscreen", ctx.fullscreen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", "translateX(-50%) rotate(" + ctx.hour_angle + "deg)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", "translateX(-50%) rotate(" + ctx.minute_angle + "deg)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", "translateX(-50%) rotate(" + ctx.second_angle + "deg)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.time);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 11, ctx.metrics_url, "resource"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        }
      },
      pipes: [_acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_5__["ɵa"]],
      styles: [".container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.container.fullscreen[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 999;\n  top: -3.5em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .container.fullscreen[_ngcontent-%COMP%] {\n    top: -3em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .container.fullscreen[_ngcontent-%COMP%] {\n    top: -3em;\n  }\n}\n.container.fullscreen[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%], .container.fullscreen[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  display: none;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: 3.5em;\n  height: 3.5em;\n  background-color: #00796b;\n  width: 100%;\n  color: #fff;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 4px 2px -2px rgba(0, 0, 0, 0.12);\n  z-index: 100;\n}\n.header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n}\n.heading[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: 400;\n  padding: 0 0.5em;\n  flex: 1;\n  width: 50%;\n}\n.body[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  background-color: #455a64;\n  flex: 1;\n  overflow: hidden;\n  z-index: 99;\n}\n@media only screen and (orientation: portrait) and (max-width: 800px) {\n  .body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 1048px) {\n  .body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.no-item[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.54);\n}\n.time-display[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 0.5em;\n}\n.time-display[_ngcontent-%COMP%]   .display[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n}\n.system[_ngcontent-%COMP%], .device[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.5em;\n}\n.device[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  background-color: rgba(244, 67, 54, 0.87);\n  border-bottom: 1px solid #455a64;\n}\n.device[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.device.connected[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.87);\n}\n.device[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 0 0.25em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.device[_ngcontent-%COMP%]   .module-class[_ngcontent-%COMP%], .device[_ngcontent-%COMP%]   .created[_ngcontent-%COMP%] {\n  flex: 2;\n}\n.device[_ngcontent-%COMP%]   .ip[_ngcontent-%COMP%], .device[_ngcontent-%COMP%]   .state[_ngcontent-%COMP%] {\n  flex: 3;\n}\n.device[_ngcontent-%COMP%]   .ip[_ngcontent-%COMP%] {\n  font-family: \"Fira Code\", monospace;\n}\n.device[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  flex: 4;\n}\n.count[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  top: 0;\n  left: 0;\n  right: 26.666666666em;\n  height: 2em;\n  font-size: 0.75em;\n  padding: 0 0.5em;\n  background-color: #2c393f;\n  color: #fff;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 4px 2px -2px rgba(0, 0, 0, 0.12);\n}\n@media only screen and (orientation: portrait) and (max-width: 800px) {\n  .count[_ngcontent-%COMP%] {\n    right: 0;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 1048px) {\n  .count[_ngcontent-%COMP%] {\n    right: 0;\n  }\n}\n.issues[_ngcontent-%COMP%] {\n  overflow: auto;\n  padding: 2.5em 1em 1em;\n  color: #fff;\n  flex: 1;\n  height: 100%;\n  width: 16em;\n}\n@media only screen and (orientation: portrait) and (max-width: 800px) {\n  .issues[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 1048px) {\n  .issues[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.graphs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  height: 100%;\n  width: 20em;\n  border-left: 1px solid rgba(0, 0, 0, 0.54);\n}\n.graphs[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 18em;\n  padding: 0.5em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .graphs[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    min-width: 100vw;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .graphs[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    min-width: 100vw;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 800px) {\n  .graphs[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 16em;\n    border: none;\n    border-top: 1px solid rgba(0, 0, 0, 0.54);\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 1048px) {\n  .graphs[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 16em;\n    border: none;\n    border-top: 1px solid rgba(0, 0, 0, 0.54);\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .graphs[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n    flex-wrap: nowrap;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .graphs[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n    flex-wrap: nowrap;\n  }\n}\n.item[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.2);\n  margin-bottom: 1em;\n}\n.item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 4px 2px -2px rgba(0, 0, 0, 0.12);\n}\n.hover[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.options[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.5em;\n  width: 1.5em;\n  font-size: 1.2em;\n  cursor: pointer;\n  margin-left: 0.5em;\n}\n.options[_ngcontent-%COMP%]   dropdown[_ngcontent-%COMP%] {\n  padding: 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.action[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  border-radius: 100%;\n  height: 1.2em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.action[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.87);\n}\n.clock[_ngcontent-%COMP%] {\n  position: relative;\n  height: 2.5em;\n  width: 2.5em;\n  min-width: 2.5em;\n  border: 2px solid #fff;\n  border-radius: 100%;\n}\n.clock[_ngcontent-%COMP%]   .hand[_ngcontent-%COMP%] {\n  position: absolute;\n  transform-origin: 50% 100%;\n  background-color: #fff;\n  left: 50%;\n  bottom: 50%;\n}\n.clock[_ngcontent-%COMP%]   .hand.hour[_ngcontent-%COMP%] {\n  height: 0.8em;\n  width: 4px;\n  border-radius: 2px;\n}\n.clock[_ngcontent-%COMP%]   .hand.minute[_ngcontent-%COMP%] {\n  height: 1em;\n  width: 2px;\n  border-radius: 1px;\n}\n.clock[_ngcontent-%COMP%]   .hand.second[_ngcontent-%COMP%] {\n  height: 1em;\n  width: 1px;\n}\n.clock[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  height: 6px;\n  width: 6px;\n  border-radius: 100%;\n  background-color: #fff;\n}\n.mat-menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 1em;\n}\n.mat-menu-item[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n.mat-menu-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n  margin-left: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JhY2tvZmZpY2UvYmFja29mZmljZS9zcmMvYXBwL3NoYXJlZC9zdHlsZXMvc2hhcmVkLnN0eWxlcy5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvYmFja29mZmljZS9iYWNrb2ZmaWNlL3NyYy9hcHAvc2hlbGwvbWV0cmljcy9tZXRyaWNzLnN0eWxlcy5zY3NzIiwic3JjL2FwcC9zaGVsbC9tZXRyaWNzL21ldHJpY3Muc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBcUNBOztjQUFBO0FBWUE7O2VBQUE7QUFPQTs7ZUFBQTtBQWdCQTs7c0JBQUE7QUN2RUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ2NKO0FEYkk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNlUjtBRjBEUTtFQzVFSjtJQUtRLFNBQUE7RUNpQlY7QUFDRjtBRndEUTtFQy9FSjtJQUtRLFNBQUE7RUNzQlY7QUFDRjtBRHBCUTs7RUFFSSxhQUFBO0FDc0JaO0FEakJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJEckJXO0VDc0JYLFdBQUE7RUFDQSxXQUFBO0VBQ0EsK0dBQUE7RUFDQSxZQUFBO0FDb0JKO0FEbEJJO0VBQ0ksa0JBQUE7QUNvQlI7QURoQkE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQ21CSjtBRGhCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCRHRCZTtFQ3VCZixPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDbUJKO0FGOERRO0VDekZSO0lBV1Esc0JBQUE7RUNvQk47QUFDRjtBRjREUTtFQzVGUjtJQVdRLHNCQUFBO0VDeUJOO0FB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Q1I7QURwQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUN1Q0o7QURyQ0k7RUFDSSxnQkFBQTtBQ3VDUjtBRHBDSTtFQUNJLE9BQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNzQ1IiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9tZXRyaWNzL21ldHJpY3Muc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNGNhZjUwO1xuJHN1Y2Nlc3MtbGlnaHQ6ICM2NmJiNmE7XG4kc3VjY2Vzcy1kYXJrOiAjMDA3OTZiO1xuXG4kcGVuZGluZzogI2ZmOGYwMDtcbiRwZW5kaW5nLWxpZ2h0OiAjZmZjMDQ2O1xuJHBlbmRpbmctZGFyazogI2M1NjAwMDtcblxuJGVycm9yOiAjZjQ0MzM2O1xuJGVycm9yLWxpZ2h0OiAjZmY2ZjYwO1xuJGVycm9yLWRhcms6ICNhYjAwMGQ7XG5cbiRjb2xvci1wcmltYXJ5OiAjQzkyMzY2O1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6ICNjZDU2OGE7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjYjYwMDVkO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjNUM2NEZGO1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogIzcyNzJlNztcbiRjb2xvci1zZWNvbmRhcnktZGFyazogIzU1NTdkMTtcblxuJGNvbG9yLWRldmVsb3A6ICNmMGYwZjA7XG4kY29sb3ItZGV2ZWxvcC1saWdodDogI2ZmZjtcbiRjb2xvci1kZXZlbG9wLWRhcms6ICNlMGUwZTA7XG5cbiRiYWNrZ3JvdW5kOiAjMjYzMjM4O1xuJGJhY2tncm91bmQtbGlnaHQ6ICM0NTVhNjQ7XG4kYmFja2dyb3VuZC1kYXJrOiAjMjAyNjMyO1xuXG4kaGVhZGVyLWNvbG9yOiAjMEEwRDJFO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiUm9ib3RvXCIsIFwiVmVyZGFuYVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJZb3VuZ1wiLCAkZm9udDtcbiRtb25vLWZvbnQ6IFwiRmlyYSBDb2RlXCIsIG1vbm9zcGFjZTtcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgU2l6aW5nICAgfHxcblxcKj09PT09PT09PT09PSovXG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG5cblxuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgTWl4aW5zICAgfHxcblxcKj09PT09PT09PT09PSovXG5cbkBtaXhpbiBoaWRlLXRleHQtb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGJveC1zaGFkb3coJGRlcHRoOiAxLCAkc3ByZWFkOiAxKSB7XG4gICAgYm94LXNoYWRvdzogMCAoMXB4ICogJHNwcmVhZCkgKDNweCAqICRzcHJlYWQpIDAgcmdiYSgjMDAwLCAuMiAqICRkZXB0aCksXG4gICAgICAgICAgICAgICAgMCAoMXB4ICogJHNwcmVhZCkgKDFweCAqICRzcHJlYWQpIDAgcmdiYSgjMDAwLCAuMTQgKiAkZGVwdGgpLFxuICAgICAgICAgICAgICAgIDAgKDJweCAqICRzcHJlYWQpICgxcHggKiAkc3ByZWFkKSAtKDFweCAqICRzcHJlYWQpIHJnYmEoIzAwMCwgLjEyICogJGRlcHRoKTtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAmLmZ1bGxzY3JlZW4ge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgdG9wOiAtMy41ZW07XG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgICAgICB0b3A6IC0zZW07XG4gICAgICAgIH1cblxuICAgICAgICAudHlwZSxcbiAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDMuNWVtO1xuICAgIGhlaWdodDogMy41ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN1Y2Nlc3MtZGFyaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKCMwMDAsIC4yKSwgMCAycHggMnB4IDAgcmdiYSgjMDAwLCAuMTQpLCAwIDRweCAycHggLTJweCByZ2JhKCMwMDAsIC4xMik7XG4gICAgei1pbmRleDogMTAwO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC41ZW07XG4gICAgfVxufVxuXG4uaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHBhZGRpbmc6IDAgLjVlbTtcbiAgICBmbGV4OiAxO1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWxpZ2h0O1xuICAgIGZsZXg6IDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB6LWluZGV4OiA5OTtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obm90LWRlc2t0b3ApIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG59XG5cbi5uby1pdGVtIHtcbiAgICBjb2xvcjogcmdiYSgjZmZmLCAuNTQpO1xufVxuXG4udGltZS1kaXNwbGF5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMCAuNWVtO1xuXG4gICAgLmRpc3BsYXkge1xuICAgICAgICBtYXJnaW4tbGVmdDogLjVlbTtcbiAgICB9XG59XG5cbi5zeXN0ZW0sXG4uZGV2aWNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogLjVlbTtcbn1cblxuLmRldmljZSB7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGVycm9yLCAuODcpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYmFja2dyb3VuZC1saWdodDtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG5cbiAgICAmLmNvbm5lY3RlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHN1Y2Nlc3MsIC44Nyk7XG4gICAgfVxuXG4gICAgJj5kaXYge1xuICAgICAgICBwYWRkaW5nOiAwIC4yNWVtO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG5cbiAgICAubW9kdWxlLWNsYXNzLFxuICAgIC5jcmVhdGVkIHtcbiAgICAgICAgZmxleDogMjtcbiAgICB9XG5cbiAgICAuaXAsXG4gICAgLnN0YXRlIHtcbiAgICAgICAgZmxleDogMztcbiAgICB9XG5cbiAgICAuaXAge1xuICAgICAgICBmb250LWZhbWlseTogJG1vbm8tZm9udDtcbiAgICB9XG5cbiAgICAubmFtZSB7XG4gICAgICAgIGZsZXg6IDQ7XG4gICAgfVxufVxuXG4uY291bnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDI2LjY2NjY2NjY2NmVtO1xuICAgIGhlaWdodDogMmVtO1xuICAgIGZvbnQtc2l6ZTogLjc1ZW07XG4gICAgcGFkZGluZzogMCAuNWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzM5M2Y7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgjMDAwLCAuMiksIDAgMnB4IDJweCAwIHJnYmEoIzAwMCwgLjE0KSwgMCA0cHggMnB4IC0ycHggcmdiYSgjMDAwLCAuMTIpO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhub3QtZGVza3RvcCkge1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG59XG5cbi5pc3N1ZXMge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmc6IDIuNWVtIDFlbSAxZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDE2ZW07XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLmdyYXBocyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAyMGVtO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgjMDAwLCAuNTQpO1xuXG4gICAgJj5kaXYge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICB3aWR0aDogMThlbTtcbiAgICAgICAgcGFkZGluZzogLjVlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwdnc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDE2ZW07XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoIzAwMCwgLjU0KTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIH1cbn1cblxuLml0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzAwMCwgLjIpO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKCMwMDAsIC4yKSwgMCAycHggMnB4IDAgcmdiYSgjMDAwLCAuMTQpLCAwIDRweCAycHggLTJweCByZ2JhKCMwMDAsIC4xMilcbiAgICB9XG59XG5cbi5ob3ZlciB7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbn1cblxuLm9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5tZW51IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMS41ZW07XG4gICAgICAgIHdpZHRoOiAxLjVlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogLjVlbTtcbiAgICB9XG5cbiAgICBkcm9wZG93biB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGNvbG9yOiByZ2JhKCMwMDAsIC44Nyk7XG4gICAgfVxufVxuXG4uYWN0aW9uIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgaGVpZ2h0OiAxLjJlbTtcbiAgICB3aWR0aDogMS4yZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGNvbG9yOiByZ2JhKCMwMDAsIC44Nyk7XG4gICAgfVxufVxuXG4uY2xvY2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDIuNWVtO1xuICAgIHdpZHRoOiAyLjVlbTtcbiAgICBtaW4td2lkdGg6IDIuNWVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcblxuICAgIC5oYW5kIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBib3R0b206IDUwJTtcblxuICAgICAgICAmLmhvdXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAuOGVtO1xuICAgICAgICAgICAgd2lkdGg6IDRweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYubWludXRlIHtcbiAgICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuc2Vjb25kIHtcbiAgICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jZW50ZXIge1xuICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgd2lkdGg6IDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG59XG5cbi5tYXQtbWVudS1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAxZW07XG5cbiAgICBhcHAtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgfVxuXG4gICAgLnRleHQge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtaW4td2lkdGg6IDUwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC41ZW07XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09KlxcXG58fCAgIFNpemluZyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgTWl4aW5zICAgfHxcblxcKj09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb250YWluZXIuZnVsbHNjcmVlbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5O1xuICB0b3A6IC0zLjVlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5jb250YWluZXIuZnVsbHNjcmVlbiB7XG4gICAgdG9wOiAtM2VtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmNvbnRhaW5lci5mdWxsc2NyZWVuIHtcbiAgICB0b3A6IC0zZW07XG4gIH1cbn1cbi5jb250YWluZXIuZnVsbHNjcmVlbiAudHlwZSxcbi5jb250YWluZXIuZnVsbHNjcmVlbiAubWVudSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAzLjVlbTtcbiAgaGVpZ2h0OiAzLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzk2YjtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNHB4IDJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5oZWFkZXIgYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xufVxuXG4uaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDAgMC41ZW07XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NWE2NDtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogOTk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuYm9keSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDEwNDhweCkge1xuICAuYm9keSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG4ubm8taXRlbSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQpO1xufVxuXG4udGltZS1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDAuNWVtO1xufVxuLnRpbWUtZGlzcGxheSAuZGlzcGxheSB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbn1cblxuLnN5c3RlbSxcbi5kZXZpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuLmRldmljZSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIDAuODcpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ1NWE2NDtcbn1cbi5kZXZpY2U6bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kZXZpY2UuY29ubmVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC44Nyk7XG59XG4uZGV2aWNlID4gZGl2IHtcbiAgcGFkZGluZzogMCAwLjI1ZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmRldmljZSAubW9kdWxlLWNsYXNzLFxuLmRldmljZSAuY3JlYXRlZCB7XG4gIGZsZXg6IDI7XG59XG4uZGV2aWNlIC5pcCxcbi5kZXZpY2UgLnN0YXRlIHtcbiAgZmxleDogMztcbn1cbi5kZXZpY2UgLmlwIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlyYSBDb2RlXCIsIG1vbm9zcGFjZTtcbn1cbi5kZXZpY2UgLm5hbWUge1xuICBmbGV4OiA0O1xufVxuXG4uY291bnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDI2LjY2NjY2NjY2NmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIHBhZGRpbmc6IDAgMC41ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzM5M2Y7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNHB4IDJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY291bnQge1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogMTA0OHB4KSB7XG4gIC5jb3VudCB7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbn1cblxuLmlzc3VlcyB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAyLjVlbSAxZW0gMWVtO1xuICBjb2xvcjogI2ZmZjtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTZlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5pc3N1ZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogMTA0OHB4KSB7XG4gIC5pc3N1ZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5ncmFwaHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDIwZW07XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cbi5ncmFwaHMgPiBkaXYge1xuICBmbGV4OiAxO1xuICB3aWR0aDogMThlbTtcbiAgcGFkZGluZzogMC41ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmdyYXBocyA+IGRpdiB7XG4gICAgbWluLXdpZHRoOiAxMDB2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5ncmFwaHMgPiBkaXYge1xuICAgIG1pbi13aWR0aDogMTAwdnc7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5ncmFwaHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTZlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAxMDQ4cHgpIHtcbiAgLmdyYXBocyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmdyYXBocyB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmdyYXBocyB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICB9XG59XG5cbi5pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4uaXRlbTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA0cHggMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmhvdmVyOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5vcHRpb25zIC5tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMS41ZW07XG4gIHdpZHRoOiAxLjVlbTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMC41ZW07XG59XG4ub3B0aW9ucyBkcm9wZG93biB7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4uYWN0aW9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgd2lkdGg6IDEuMmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hY3Rpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLmNsb2NrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDIuNWVtO1xuICB3aWR0aDogMi41ZW07XG4gIG1pbi13aWR0aDogMi41ZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4uY2xvY2sgLmhhbmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBsZWZ0OiA1MCU7XG4gIGJvdHRvbTogNTAlO1xufVxuLmNsb2NrIC5oYW5kLmhvdXIge1xuICBoZWlnaHQ6IDAuOGVtO1xuICB3aWR0aDogNHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uY2xvY2sgLmhhbmQubWludXRlIHtcbiAgaGVpZ2h0OiAxZW07XG4gIHdpZHRoOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbn1cbi5jbG9jayAuaGFuZC5zZWNvbmQge1xuICBoZWlnaHQ6IDFlbTtcbiAgd2lkdGg6IDFweDtcbn1cbi5jbG9jayAuY2VudGVyIHtcbiAgaGVpZ2h0OiA2cHg7XG4gIHdpZHRoOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5tYXQtbWVudS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMWVtO1xufVxuLm1hdC1tZW51LWl0ZW0gYXBwLWljb24ge1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLm1hdC1tZW51LWl0ZW0gLnRleHQge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MetricsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-metrics',
          templateUrl: './metrics.template.html',
          styleUrls: ['./metrics.styles.scss']
        }]
      }], function () {
        return [{
          type: _placeos_composer__WEBPACK_IMPORTED_MODULE_3__["ComposerService"]
        }, {
          type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shell/metrics/metrics.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/shell/metrics/metrics.module.ts ***!
    \*************************************************/

  /*! exports provided: AppMetricsModule */

  /***/
  function srcAppShellMetricsMetricsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppMetricsModule", function () {
      return AppMetricsModule;
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


    var _metrics_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./metrics.routes */
    "./src/app/shell/metrics/metrics.routes.ts");
    /* harmony import */


    var _metrics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./metrics.component */
    "./src/app/shell/metrics/metrics.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var AppMetricsModule = function AppMetricsModule() {
      _classCallCheck(this, AppMetricsModule);
    };

    AppMetricsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppMetricsModule
    });
    AppMetricsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppMetricsModule_Factory(t) {
        return new (t || AppMetricsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_metrics_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedContentModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppMetricsModule, {
        declarations: [_metrics_component__WEBPACK_IMPORTED_MODULE_5__["MetricsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedContentModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppMetricsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_metrics_component__WEBPACK_IMPORTED_MODULE_5__["MetricsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_metrics_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedContentModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shell/metrics/metrics.routes.ts":
  /*!*************************************************!*\
    !*** ./src/app/shell/metrics/metrics.routes.ts ***!
    \*************************************************/

  /*! exports provided: ROUTES */

  /***/
  function srcAppShellMetricsMetricsRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony import */


    var _metrics_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./metrics.component */
    "./src/app/shell/metrics/metrics.component.ts");

    var ROUTES = [{
      path: '',
      component: _metrics_component__WEBPACK_IMPORTED_MODULE_0__["MetricsComponent"],
      children: []
    }, {
      path: 'dashboard',
      component: _metrics_component__WEBPACK_IMPORTED_MODULE_0__["MetricsComponent"],
      children: []
    }, {
      path: 'dashboard/:period',
      component: _metrics_component__WEBPACK_IMPORTED_MODULE_0__["MetricsComponent"],
      children: []
    }, {
      path: ':period',
      component: _metrics_component__WEBPACK_IMPORTED_MODULE_0__["MetricsComponent"],
      children: []
    }, {
      path: '**',
      redirectTo: ''
    }];
    /***/
  }
}]);
//# sourceMappingURL=shell-metrics-metrics-module-es5.js.map