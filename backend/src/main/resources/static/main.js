(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Users\fsegala\source\repos\Paper\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "0sXK":
/*!********************************************************!*\
  !*** ./src/app/eng/error-page/error-page.component.ts ***!
  \********************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bus.service */ "ktTS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-json-viewer */ "xWP1");









function ErrorPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ErrorPageComponent_div_0_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.clearError(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-expansion-panel-header", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Dettaglio errore / error detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ngx-json-viewer", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.it_messages[ctx_r0.error == null ? null : ctx_r0.error.status]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.en_messages[ctx_r0.error == null ? null : ctx_r0.error.status]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("json", ctx_r0.error);
} }
class ErrorPageComponent {
    constructor(bus, router) {
        this.bus = bus;
        this.router = router;
        this.error = null;
        this.it_messages = {
            400: "Richiesta non valida",
            404: "Entità non trovata",
            500: "Errore interno",
            504: "Il sistema sta impiegando troppo tempo a rispondere"
        };
        this.en_messages = {
            400: "Bad request",
            404: "Not found",
            500: "Internal server error",
            504: "Bad gateway"
        };
    }
    ngOnInit() {
        this.bus.subscribe(_bus_service__WEBPACK_IMPORTED_MODULE_0__["ERROR"], this.e.bind(this));
    }
    e(event, error) {
        this.error = error ? error.error : null;
        if (!error)
            return;
        this.bus.publish(_bus_service__WEBPACK_IMPORTED_MODULE_0__["PAGE_CHANGE"], "error");
    }
    clearError() {
        this.bus.publish(_bus_service__WEBPACK_IMPORTED_MODULE_0__["ERROR"], null);
        this.router.navigate(['/dashboard']);
    }
}
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bus_service__WEBPACK_IMPORTED_MODULE_0__["BusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ErrorPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-error-page"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [2, "width", "100%", "text-align", "center", "margin-top", "3em"], [2, "margin", "0"], [2, "width", "100%", "text-align", "center"], ["mat-flat-button", "", "color", "primary", "routerLink", "/", 3, "click"], [2, "width", "100%", "margin-top", "2em"], [2, "height", "48px"], [3, "json"]], template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ErrorPageComponent_div_0_Template, 18, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error && !ctx.error.server_down);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelTitle"], ngx_json_viewer__WEBPACK_IMPORTED_MODULE_7__["NgxJsonViewerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "0yay":
/*!************************************************!*\
  !*** ./src/app/requests/requests.component.ts ***!
  \************************************************/
/*! exports provided: RequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsComponent", function() { return RequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eng */ "eln0");
/* harmony import */ var _role_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../role.guard */ "GQDE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _paper_date_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../paper-date.pipe */ "f0u3");
/* harmony import */ var _requests_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../requests.service */ "B//o");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _practices_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../practices.service */ "Iy/B");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _eng_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../eng/search/search.component */ "vV1p");












class RequestsComponent {
    constructor(bus, date, r, bs, p, router) {
        this.bus = bus;
        this.date = date;
        this.r = r;
        this.bs = bs;
        this.p = p;
        this.router = router;
        this.is_authorized = _role_guard__WEBPACK_IMPORTED_MODULE_2__["is_authorized"];
        this.config = {
            search_params: [{
                    label: "request_id",
                    field: "id_like",
                    text: "request_id"
                },
                {
                    label: "practice_id",
                    field: "practice_id_like",
                    text: "practice_id"
                }, {
                    label: "created_at",
                    date: {
                        start: "created_start",
                        end: "created_end"
                    }
                }, {
                    label: "completed_at",
                    date: {
                        start: "completed_start",
                        end: "completed_end"
                    }
                }
            ],
            table_fields: [{
                    label: "request_id",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("id")
                }, {
                    label: "created_at",
                    sortable: true,
                    render: (row) => this.date.transform(row.created_at, Object(_eng__WEBPACK_IMPORTED_MODULE_1__["screen_size"])() == "xs" ? "short" : "medium")
                }, {
                    label: "created_by",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("created_by")
                }, {
                    label: "practice_id",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("practice_id")
                }, {
                    label: "address",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("address")
                }, {
                    label: "completed_at",
                    sortable: true,
                    render: (row) => this.date.transform(row.completed_at, Object(_eng__WEBPACK_IMPORTED_MODULE_1__["screen_size"])() == "xs" ? "short" : "medium")
                }, {
                    label: "completed_by",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("completed_by")
                }, {
                    label: "empty_string",
                    actions: [
                        {
                            title: "complete",
                            action: (row) => this.openBottomSheetConfirmComplete(row),
                            condition: (row) => Object(_role_guard__WEBPACK_IMPORTED_MODULE_2__["is_authorized"])('receiver', 'admin') && row.completed == "false",
                            icon: "flag",
                            classes: "icon-btn-xs",
                            color: "accent"
                        }
                    ],
                    classes: Object(_role_guard__WEBPACK_IMPORTED_MODULE_2__["is_authorized"])('receiver', 'admin') ? " action-xs-col" : " hidden"
                }
            ],
            export_fields: [{
                    label: "request_id",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("id")
                }, {
                    label: "created_at",
                    sortable: true,
                    render: (row) => this.date.transform(row.created_at, Object(_eng__WEBPACK_IMPORTED_MODULE_1__["screen_size"])() == "xs" ? "short" : "medium")
                }, {
                    label: "created_by",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("created_by")
                }, {
                    label: "practice_id",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("practice_id")
                }, {
                    label: "address",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("address")
                }, {
                    label: "completed_at",
                    sortable: true,
                    render: (row) => this.date.transform(row.completed_at, Object(_eng__WEBPACK_IMPORTED_MODULE_1__["screen_size"])() == "xs" ? "short" : "medium")
                }, {
                    label: "completed_by",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("completed_by")
                }
            ]
        };
        this.params = {
            sort: "created_at",
            direction: "desc",
        };
        this.add_config = {
            input: [
                // {
                //   type: "autocomplete",
                //   label: "practice_id",
                //   field: "practice_id",
                //   config: {
                //     placeholder: "practice_id",
                //     backend: {
                //       field: "id_like",
                //       loadFn: this.practices_load.bind( this ),
                //     },
                //     frontend: {
                //       valueFn: ( option ) => option.id,
                //       renderFn: ( option ) => option ? option.id : "",
                //       displayFn: ( value, options ) => value ? options.find( e => e.id == value )['id'] : ""
                //     }
                //   },
                // }
                {
                    type: "text",
                    label: "practice_id",
                    field: "practice_id",
                    placeholder: "practice_id"
                }, {
                    type: "text",
                    label: "address",
                    field: "address",
                    placeholder: "address"
                }
            ],
            createFn: this.create.bind(this),
            enableBtn: (params) => params.practice_id
        };
        this.confirm_complete_request = {
            title: "complete_request",
            message: "complete_request_confirm",
            confirm: {
                title: "yes",
                action: this.complete.bind(this),
                classes: "double-line-button-left"
            },
            decline: {
                action: (_) => _,
                title: "no",
                classes: "double-line-button-right"
            },
            classes: "double-line-container"
        };
    }
    ngOnInit() {
        this.bus.publish(_eng__WEBPACK_IMPORTED_MODULE_1__["PAGE_CHANGE"], "requests");
    }
    load(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.r.list(params);
        });
    }
    openBottomSheet() {
        this.bs.open(_eng__WEBPACK_IMPORTED_MODULE_1__["AddBottomsheetComponent"], { data: this.add_config });
    }
    openBottomSheetConfirmComplete(row) {
        this.bs.open(_eng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationBottomsheetComponent"], { data: { config: this.confirm_complete_request, payload: row } });
    }
    create(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.r.post(params);
            this.bus.publish(_eng__WEBPACK_IMPORTED_MODULE_1__["RELOAD_EVENT"], this.params);
        });
    }
    complete(row) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.r.put(row.id, this.params);
            this.bus.publish(_eng__WEBPACK_IMPORTED_MODULE_1__["RELOAD_EVENT"], this.params);
        });
    }
    navigate(row) {
        this.router.navigate(["practices/" + row.practice_id]);
    }
}
RequestsComponent.ɵfac = function RequestsComponent_Factory(t) { return new (t || RequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_eng__WEBPACK_IMPORTED_MODULE_1__["BusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_paper_date_pipe__WEBPACK_IMPORTED_MODULE_4__["PaperDatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_requests_service__WEBPACK_IMPORTED_MODULE_5__["RequestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_practices_service__WEBPACK_IMPORTED_MODULE_7__["PracticesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
RequestsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RequestsComponent, selectors: [["app-requests"]], decls: 2, vars: 6, consts: [["export_name", "requests", 3, "config", "params", "load", "add_item", "show_add", "navigate"]], template: function RequestsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config)("params", ctx.params)("load", ctx.load.bind(ctx))("add_item", ctx.openBottomSheet.bind(ctx))("show_add", ctx.is_authorized("admin"))("navigate", ctx.navigate.bind(ctx));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _eng_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXF1ZXN0cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1qT9":
/*!*****************************!*\
  !*** ./src/app/eng/util.ts ***!
  \*****************************/
/*! exports provided: timestamp, default_render, is_empty, is_set, clean, end_of_day, distance_from_bottom, screen_size */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestamp", function() { return timestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default_render", function() { return default_render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_empty", function() { return is_empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_set", function() { return is_set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clean", function() { return clean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end_of_day", function() { return end_of_day; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance_from_bottom", function() { return distance_from_bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screen_size", function() { return screen_size; });
function pad(x, n) {
    let result = x + '';
    while (result.length < n) {
        result = '0' + result;
    }
    return result;
}
function timestamp() {
    let d = new Date();
    return d.getFullYear()
        + pad(d.getMonth() + 1, 2)
        + pad(d.getDate(), 2)
        + '-'
        + pad(d.getHours(), 2)
        + pad(d.getMinutes(), 2);
}
function default_render(key) {
    return (row) => row[key];
}
function is_empty(x) {
    return !is_set(x);
}
function is_set(x) {
    if (x == null) {
        return false;
    }
    if (x == undefined) {
        return false;
    }
    if (Array.isArray(x) && x.length == 0) {
        return false;
    }
    if (x.toString().trim().length == 0) {
        return false;
    }
    return true;
}
function clean(o) {
    let result = {};
    Object.keys(o).forEach(e => { if (is_set(o[e]))
        result[e] = o[e].trim ? o[e].trim() : o[e]; });
    Object.keys(o).forEach(e => { if (o[e] instanceof Date)
        result[e] = o[e].toISOString(); });
    return result;
}
function end_of_day(end) {
    if (!end)
        return;
    if (!(end instanceof Date))
        end = new Date(end);
    end.setHours(23);
    end.setMinutes(59);
    end.setSeconds(59);
    return end;
}
function distance_from_bottom() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    return max - pos;
}
function screen_size() {
    return window.screen.width > 800 ? "" : "xs";
}


/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3gD/":
/*!**************************************************!*\
  !*** ./src/app/eng/spinner/spinner.component.ts ***!
  \**************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bus.service */ "ktTS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");





function SpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-spinner", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SpinnerComponent {
    constructor(bus) {
        this.bus = bus;
        this.show = 0;
    }
    ngOnInit() {
        this.bus.subscribe(_bus_service__WEBPACK_IMPORTED_MODULE_0__["LOADING"], (() => this.show++).bind(this));
        this.bus.subscribe(_bus_service__WEBPACK_IMPORTED_MODULE_0__["LOADED"], (() => this.show--).bind(this));
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bus_service__WEBPACK_IMPORTED_MODULE_0__["BusService"])); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], decls: 1, vars: 1, consts: [["class", "overlay", 4, "ngIf"], [1, "overlay"], ["color", "primary", "mode", "indeterminate", 1, "spinner"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinner"]], styles: [".overlay[_ngcontent-%COMP%] {\n    position: fixed;\n    display: block;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background-color: rgba(168, 168, 168, 0.8);\n    z-index: 99999;\n  }\n\n  .spinner[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLDBDQUEwQztJQUMxQyxjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0VBQ2xDIiwiZmlsZSI6InNwaW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY4LCAxNjgsIDE2OCwgMC44KTtcbiAgICB6LWluZGV4OiA5OTk5OTtcbiAgfVxuXG4gIC5zcGlubmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4iXX0= */"] });


/***/ }),

/***/ "8+y4":
/*!************************************************************!*\
  !*** ./src/app/eng/autocomplete/autocomplete.component.ts ***!
  \************************************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../t.pipe */ "oK4B");














function AutocompleteComponent_mat_form_field_0_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r2.config.frontend.valueFn(option_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.config.frontend.renderFn(option_r3), " ");
} }
function AutocompleteComponent_mat_form_field_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AutocompleteComponent_mat_form_field_0_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.config.field = $event; })("keyup", function AutocompleteComponent_mat_form_field_0_Template_input_keyup_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.search($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-autocomplete", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AutocompleteComponent_mat_form_field_0_mat_option_6_Template, 2, 2, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AutocompleteComponent_mat_form_field_0_Template_mat_icon_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.reset(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, ctx_r0.config.placeholder));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r1)("ngModel", ctx_r0.config.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayWith", ctx_r0.display(ctx_r0.config));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.options);
} }
class AutocompleteComponent {
    constructor() {
        this.input = "";
        this.inputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inputChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.options = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.inputChanged
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
                .subscribe((model) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.config.field = model;
                let params = { limit: 5, no_count: "true", sort: "no_sort" };
                params[this.config.backend.field] = this.config.field;
                this.options = yield this.config.backend.loadFn(params);
                this.inputChange.emit(this.config.field);
            }));
        });
    }
    search(value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.inputChanged.next(this.config.field);
        });
    }
    display(config) {
        return config ? (value) => config.frontend.displayFn(value, this.options) : (value) => value;
    }
    reset(auto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.config.field = "";
        });
    }
}
AutocompleteComponent.ɵfac = function AutocompleteComponent_Factory(t) { return new (t || AutocompleteComponent)(); };
AutocompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AutocompleteComponent, selectors: [["app-autocomplete"]], viewQuery: function AutocompleteComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocomplete"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.autocomplete = _t.first);
    } }, inputs: { input: "input", config: "config" }, outputs: { inputChange: "inputChange" }, decls: 1, vars: 1, consts: [["style", "padding-right: 1em; width: 100%;", 4, "ngIf"], [2, "padding-right", "1em", "width", "100%"], ["matInput", "", 3, "placeholder", "matAutocomplete", "ngModel", "ngModelChange", "keyup"], [3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 2, "display", "flex"], [1, "pointer", 2, "margin-right", "0.75em", 3, "click"], [3, "value"]], template: function AutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AutocompleteComponent_mat_form_field_0_Template, 10, 7, "mat-form-field", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.config);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], pipes: [_t_pipe__WEBPACK_IMPORTED_MODULE_11__["TPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRvY29tcGxldGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "81dA":
/*!*******************************************!*\
  !*** ./src/app/eng/audits/audit.const.ts ***!
  \*******************************************/
/*! exports provided: METHODS, STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "METHODS", function() { return METHODS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS", function() { return STATUS; });
const METHODS = [{
        label: "POST",
        value: "POST"
    }, {
        label: "PUT",
        value: "PUT"
    }, {
        label: "GET",
        value: "GET"
    }
];
const STATUS = [{
        label: "http_status_200",
        value: "200"
    }, {
        label: "http_status_400",
        value: "400"
    }, {
        label: "http_status_401",
        value: "401"
    },
    {
        label: "http_status_404",
        value: "404"
    },
    {
        label: "http_status_500",
        value: "500"
    }
];


/***/ }),

/***/ "8DPT":
/*!*************************************!*\
  !*** ./src/app/waybills.service.ts ***!
  \*************************************/
/*! exports provided: WaybillsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaybillsService", function() { return WaybillsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eng */ "eln0");



class WaybillsService {
    constructor(net) {
        this.net = net;
    }
    list(params) {
        return this.net.list('waybills', params);
    }
    get(id) {
        return this.net.get('waybills', id);
    }
    post(body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.net.post('waybills', body, 'true');
        });
    }
    put(id, body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.net.put('waybills', id, body);
        });
    }
}
WaybillsService.ɵfac = function WaybillsService_Factory(t) { return new (t || WaybillsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_eng__WEBPACK_IMPORTED_MODULE_2__["NetService"])); };
WaybillsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WaybillsService, factory: WaybillsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "8JiL":
/*!**************************************!*\
  !*** ./src/app/eng/audit.service.ts ***!
  \**************************************/
/*! exports provided: AuditService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditService", function() { return AuditService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _net_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./net.service */ "Ffpm");



class AuditService {
    constructor(net) {
        this.net = net;
    }
    list(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.net.list('audits', params);
        });
    }
    get(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.net.get("audits", id);
        });
    }
}
AuditService.ɵfac = function AuditService_Factory(t) { return new (t || AuditService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_net_service__WEBPACK_IMPORTED_MODULE_2__["NetService"])); };
AuditService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuditService, factory: AuditService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9+B4":
/*!****************************************!*\
  !*** ./src/app/eng/material.module.ts ***!
  \****************************************/
/*! exports provided: EngMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngMaterialModule", function() { return EngMaterialModule; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ "fXoL");






























class EngMaterialModule {
}
EngMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({ type: EngMaterialModule });
EngMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({ factory: function EngMaterialModule_Factory(t) { return new (t || EngMaterialModule)(); }, providers: [
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorIntl"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"],
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MAT_DATE_LOCALE"], useValue: navigator.language },
    ], imports: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ReactiveFormsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](EngMaterialModule, { exports: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ReactiveFormsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"]] }); })();


/***/ }),

/***/ "AThM":
/*!**********************************!*\
  !*** ./src/app/lists.service.ts ***!
  \**********************************/
/*! exports provided: ListsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsService", function() { return ListsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eng */ "eln0");



class ListsService {
    constructor(net) {
        this.net = net;
    }
    list(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.net.list('lists', params);
        });
    }
    get(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.net.get('lists', id);
        });
    }
    post(body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.net.post('lists', body);
        });
    }
    put(id, body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.net.put('lists', id, body);
        });
    }
}
ListsService.ɵfac = function ListsService_Factory(t) { return new (t || ListsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_eng__WEBPACK_IMPORTED_MODULE_2__["NetService"])); };
ListsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ListsService, factory: ListsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B//o":
/*!*************************************!*\
  !*** ./src/app/requests.service.ts ***!
  \*************************************/
/*! exports provided: RequestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsService", function() { return RequestsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eng */ "eln0");



class RequestsService {
    constructor(net) {
        this.net = net;
    }
    list(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.net.list('requests', params);
        });
    }
    get(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.net.get('requests', id);
        });
    }
    post(body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.net.post('requests', body, 'true');
        });
    }
    put(id, body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.net.put("requests", id, body);
        });
    }
}
RequestsService.ɵfac = function RequestsService_Factory(t) { return new (t || RequestsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_eng__WEBPACK_IMPORTED_MODULE_2__["NetService"])); };
RequestsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RequestsService, factory: RequestsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "DjSf":
/*!************************************!*\
  !*** ./src/app/eng/unique.pipe.ts ***!
  \************************************/
/*! exports provided: UniquePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniquePipe", function() { return UniquePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UniquePipe {
    transform(list, field) {
        if (!list)
            return null;
        return list.reduce((r, e) => {
            if (r.findIndex(x => x[field] == e[field]) == -1) {
                r = r.concat(e);
            }
            return r;
        }, []);
    }
}
UniquePipe.ɵfac = function UniquePipe_Factory(t) { return new (t || UniquePipe)(); };
UniquePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "unique", type: UniquePipe, pure: true });


/***/ }),

/***/ "ETPP":
/*!************************************************!*\
  !*** ./src/app/practice/practice.component.ts ***!
  \************************************************/
/*! exports provided: PracticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticeComponent", function() { return PracticeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eng */ "eln0");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "K8Gv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _documents_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../documents.service */ "MT9+");
/* harmony import */ var _practices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../practices.service */ "Iy/B");
/* harmony import */ var _requests_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../requests.service */ "B//o");
/* harmony import */ var _paper_date_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../paper-date.pipe */ "f0u3");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _eng_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../eng/search/search.component */ "vV1p");
/* harmony import */ var _eng_t_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../eng/t.pipe */ "oK4B");













class PracticeComponent {
    constructor(a, d, p, r, date, bus) {
        this.a = a;
        this.d = d;
        this.p = p;
        this.r = r;
        this.date = date;
        this.bus = bus;
        this.practice_id = "";
        this.practices = {};
        this.header_config = {};
        this.config = {
            search_params: [],
            table_fields: [
                {
                    label: "id",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("id")
                }, {
                    label: "type_id",
                    render: (row) => row.type_id + " - " + row.description,
                }, {
                    label: "box_id",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("box_id")
                }, {
                    label: "created_at",
                    render: (row) => this.date.transform(row.created_at, "medium")
                }, {
                    label: "action",
                    actions: [{
                            action: (row) => this.download(row.id),
                            icon: "download",
                            title: "empty_string",
                            condition: (_) => true
                        }],
                    classes: "button-small-width"
                }
            ],
            color_class: (row) => Object(_util__WEBPACK_IMPORTED_MODULE_2__["get_color"])(row)
        };
        this.params = {
            sort: "id",
            direction: "asc",
            limit: 6
        };
        this.config_requests = { search_params: [],
            table_fields: [{
                    label: "request_id",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("id")
                }, {
                    label: "created_at",
                    sortable: true,
                    render: (row) => this.date.transform(row.created_at, Object(_eng__WEBPACK_IMPORTED_MODULE_1__["screen_size"])() == "xs" ? "short" : "medium")
                }, {
                    label: "created_by",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("created_by")
                }, {
                    label: "practice_id",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("practice_id")
                }, {
                    label: "address",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("address")
                }, {
                    label: "completed_at",
                    sortable: true,
                    render: (row) => this.date.transform(row.completed_at, Object(_eng__WEBPACK_IMPORTED_MODULE_1__["screen_size"])() == "xs" ? "short" : "medium")
                }, {
                    label: "completed_by",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("completed_by")
                }
                // , {
                //   label: "empty_string",
                //   actions: [
                //     {
                //       title: "complete",
                //       action: (row) => this.openBottomSheetConfirmComplete( row ),
                //       condition: ( row ) => is_authorized( 'receiver', 'admin' ) && row.completed == "false",
                //       icon: "flag",
                //       classes : "icon-btn-xs",
                //       color : "accent"
                //     }
                //   ],
                //   classes : is_authorized( 'receiver', 'admin' ) ? " action-xs-col" : " hidden"
                // }
            ] };
        this.params_requests = { limit: 6 };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.bus.publish(_eng__WEBPACK_IMPORTED_MODULE_1__["PAGE_CHANGE"], { "label": "title_practice", "params": { "ID": this.a.snapshot.params.id } });
            this.practice_id = this.a.snapshot.params.id;
            this.practices = yield this.p.get(this.practice_id);
        });
    }
    load(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            params = Object.assign({}, params, { practice_id: this.practice_id });
            return yield this.d.list(params);
        });
    }
    load_requests(params_requests) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            params_requests = Object.assign({}, params_requests, { practice_id: this.practice_id });
            return yield this.r.list(params_requests);
        });
    }
    download(id) {
        console.log("Download", id);
    }
}
PracticeComponent.ɵfac = function PracticeComponent_Factory(t) { return new (t || PracticeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_documents_service__WEBPACK_IMPORTED_MODULE_5__["DocumentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_practices_service__WEBPACK_IMPORTED_MODULE_6__["PracticesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_requests_service__WEBPACK_IMPORTED_MODULE_7__["RequestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_paper_date_pipe__WEBPACK_IMPORTED_MODULE_8__["PaperDatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_eng__WEBPACK_IMPORTED_MODULE_1__["BusService"])); };
PracticeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PracticeComponent, selectors: [["app-practice"]], decls: 10, vars: 12, consts: [["service_name", "PRACTICES", 3, "config", "params", "load"], [2, "margin-top", "2em"], ["service_name", "REQUESTS", 3, "config", "params", "load"]], template: function PracticeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "app-search", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 8, "practice_documents"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config)("params", ctx.params)("load", ctx.load.bind(ctx));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 10, "practice_requests"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config_requests)("params", ctx.params_requests)("load", ctx.load_requests.bind(ctx));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _eng_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"]], pipes: [_eng_t_pipe__WEBPACK_IMPORTED_MODULE_11__["TPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmFjdGljZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Ffpm":
/*!************************************!*\
  !*** ./src/app/eng/net.service.ts ***!
  \************************************/
/*! exports provided: NetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetService", function() { return NetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication */ "rZ6R");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "1qT9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.service */ "Qa+r");







class NetService {
    constructor(http, configService) {
        this.http = http;
        this.configService = configService;
        this.base_url = this.configService.get("base_url");
    }
    list(url, params, handle_error = 'false') {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set("x-handle-error", handle_error)
                .set("x-authorization", Object(_authentication__WEBPACK_IMPORTED_MODULE_2__["accessToken"])());
            return yield this.http.get(this.base_url + '/' + url, { params: Object(_util__WEBPACK_IMPORTED_MODULE_3__["clean"])(params), headers: headers }).toPromise();
        });
    }
    get(url, id, handle_error = 'false') {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set("x-handle-error", handle_error)
                .set("x-authorization", Object(_authentication__WEBPACK_IMPORTED_MODULE_2__["accessToken"])());
            return yield this.http.get(this.base_url + '/' + url + '/' + id, { headers: headers }).toPromise();
        });
    }
    put(url, id, body, handle_error = 'false') {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set("x-handle-error", handle_error)
                .set("x-authorization", Object(_authentication__WEBPACK_IMPORTED_MODULE_2__["accessToken"])());
            return yield this.http.put(this.base_url + '/' + url + '/' + id, body, { headers: headers }).toPromise();
        });
    }
    post(url, body, handle_error = 'false') {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set("x-handle-error", handle_error)
                .set("x-authorization", Object(_authentication__WEBPACK_IMPORTED_MODULE_2__["accessToken"])());
            return yield this.http.post(this.base_url + '/' + url, body, { headers: headers }).toPromise();
        });
    }
}
NetService.ɵfac = function NetService_Factory(t) { return new (t || NetService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"])); };
NetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: NetService, factory: NetService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "GQDE":
/*!*******************************!*\
  !*** ./src/app/role.guard.ts ***!
  \*******************************/
/*! exports provided: RoleGuard, is_authorized */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuard", function() { return RoleGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_authorized", function() { return is_authorized; });
/* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eng */ "eln0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const mapping = {
    'dashboard': ['receiver', 'sender', 'admin', 'supervisor'],
    'waybills': ['receiver', 'sender', 'admin', 'supervisor'],
    'lists': ['receiver', 'sender', 'admin', 'supervisor'],
    'audits': ['admin'],
    'audits/:id': ['admin'],
    'audit-report': ['admin'],
    'practices/urgent': ['sender', 'admin', 'supervisor'],
    'practices': ['receiver', 'sender', 'admin', 'supervisor'],
    'practices/:id': ['receiver', 'sender', 'admin', 'supervisor'],
    'requests': ['receiver', 'sender', 'admin', 'supervisor'],
    'lists/:id': ['receiver', 'admin', 'supervisor', 'sender'],
    'waybills/urgent': ['sender', 'admin', 'supervisor']
};
class RoleGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next) {
        let route = next.routeConfig.path;
        let permissions = mapping[route];
        if (permissions.filter(e => is_authorized(e)).length > 0) {
            return true;
        }
        else {
            this.router.navigateByUrl('/unauthorized');
            return false;
        }
    }
}
RoleGuard.ɵfac = function RoleGuard_Factory(t) { return new (t || RoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RoleGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RoleGuard, factory: RoleGuard.ɵfac, providedIn: 'root' });
function is_authorized(...roles) {
    return roles.filter(e => { var _a; return (_a = Object(_eng__WEBPACK_IMPORTED_MODULE_0__["user"])()['authorizations']) === null || _a === void 0 ? void 0 : _a.includes(e); }).length > 0;
}


/***/ }),

/***/ "HUqZ":
/*!************************************************!*\
  !*** ./src/app/eng/audits/audits.component.ts ***!
  \************************************************/
/*! exports provided: AuditsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditsComponent", function() { return AuditsComponent; });
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bus.service */ "ktTS");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "1qT9");
/* harmony import */ var _audit_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audit.const */ "81dA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _audit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../audit.service */ "8JiL");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../t.pipe */ "oK4B");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../search/search.component */ "vV1p");










class AuditsComponent {
    constructor(a, t, bus, router) {
        this.a = a;
        this.t = t;
        this.bus = bus;
        this.router = router;
        this.config = {
            search_params: [
                {
                    label: "username",
                    field: "username_like",
                    text: "username"
                },
                {
                    label: "url",
                    field: "url_like",
                    text: "url"
                },
                {
                    label: "method",
                    field: "method",
                    select: _audit_const__WEBPACK_IMPORTED_MODULE_2__["METHODS"]
                },
                {
                    label: "status",
                    field: "status",
                    select: _audit_const__WEBPACK_IMPORTED_MODULE_2__["STATUS"]
                }, {
                    label: "at",
                    date: {
                        start: "at_start",
                        end: "at_end"
                    }
                }
            ],
            table_fields: [
                {
                    label: "id",
                    render: (row) => row["id"].substring(0, 6)
                },
                {
                    label: "username",
                    render: Object(_util__WEBPACK_IMPORTED_MODULE_1__["default_render"])("username")
                }, {
                    label: "url",
                    render: Object(_util__WEBPACK_IMPORTED_MODULE_1__["default_render"])("url")
                },
                {
                    label: "method",
                    render: Object(_util__WEBPACK_IMPORTED_MODULE_1__["default_render"])("method")
                }, {
                    label: "status",
                    render: (row) => this.t.transform("http_status_" + row["status"])
                }, {
                    label: "at",
                    render: Object(_util__WEBPACK_IMPORTED_MODULE_1__["default_render"])("at")
                }
            ],
            export_fields: [
                {
                    label: "id",
                    render: Object(_util__WEBPACK_IMPORTED_MODULE_1__["default_render"])("id")
                },
                {
                    label: "username",
                    render: Object(_util__WEBPACK_IMPORTED_MODULE_1__["default_render"])("username")
                }, {
                    label: "at",
                    render: Object(_util__WEBPACK_IMPORTED_MODULE_1__["default_render"])("at")
                }, {
                    label: "url",
                    render: Object(_util__WEBPACK_IMPORTED_MODULE_1__["default_render"])("url")
                },
                {
                    label: "method",
                    render: Object(_util__WEBPACK_IMPORTED_MODULE_1__["default_render"])("method")
                }, {
                    label: "status",
                    render: Object(_util__WEBPACK_IMPORTED_MODULE_1__["default_render"])("status")
                }, {
                    label: "request",
                    render: Object(_util__WEBPACK_IMPORTED_MODULE_1__["default_render"])("request")
                }, {
                    label: "response",
                    render: Object(_util__WEBPACK_IMPORTED_MODULE_1__["default_render"])("response")
                }
            ],
            color_class: (row) => this.get_color(row)
        };
        this.params = {};
    }
    ngOnInit() {
        this.bus.publish(_bus_service__WEBPACK_IMPORTED_MODULE_0__["PAGE_CHANGE"], "audits");
    }
    load(params) {
        return this.a.list(params);
    }
    navigate(row) {
        this.router.navigate(["audits/" + row.id]);
    }
    get_color(row) {
        let status = JSON.parse(row.status);
        if (status.toString().indexOf('40') > -1) {
            return 'yellow-row';
        }
        else if (status.toString().indexOf('50') > -1) {
            return 'red-row';
        }
    }
}
AuditsComponent.ɵfac = function AuditsComponent_Factory(t) { return new (t || AuditsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_audit_service__WEBPACK_IMPORTED_MODULE_4__["AuditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_t_pipe__WEBPACK_IMPORTED_MODULE_5__["TPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_bus_service__WEBPACK_IMPORTED_MODULE_0__["BusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AuditsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AuditsComponent, selectors: [["app-audit"]], decls: 2, vars: 4, consts: [["export_name", "audit", 3, "config", "params", "load", "navigate"]], template: function AuditsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config)("params", ctx.params)("load", ctx.load.bind(ctx))("navigate", ctx.navigate.bind(ctx));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdWRpdHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "HtRL":
/*!****************************!*\
  !*** ./src/app/eng/pdf.ts ***!
  \****************************/
/*! exports provided: pdf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pdf", function() { return pdf; });
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ "i680");

function pdf(template, data, name) {
    var doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__["default"]('p', 'mm', 'a4');
    data.forEach((d, i) => {
        template.forEach(e => {
            if (e.type == 'barcode')
                draw_barcode(doc, d[e.key], e.x, e.y, e.w, e.h);
            if (e.type == 'text')
                draw_text(doc, d[e.key], e.x, e.y, e.size);
            if (e.type == 'table')
                draw_table(doc, d[e.key], e.x, e.y);
        });
        if (i < data.length - 1)
            doc.addPage();
    });
    doc.save(name + '.pdf');
}
function draw_barcode(doc, text, x, y, w, h, scale = 2.5, matrix = null) {
    if (x === undefined || y === undefined || w <= 0 || h <= 0)
        return;
    scale = Math.max(2, Math.min(+scale, 3));
    const Code39Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. *$/+%";
    const Code39Bars = ["000110100", "100100001", "001100001", "101100000", "000110001", "100110000", "001110000", "000100101", "100100100",
        "001100100", "100001001", "001001001", "101001000", "000011001", "100011000", "001011000", "000001101", "100001100",
        "001001100", "000011100", "100000011", "001000011", "101000010", "000010011", "100010010", "001010010", "000000111",
        "100000110", "001000110", "000010110", "110000001", "011000001", "111000000", "010010001", "110010000", "011010000",
        "010000101", "110000100", "011000100", "010010100", "010101000", "010100010", "010001010", "000101010"]; // Symbols
    text = `*${text}*`.toUpperCase();
    const charCount = text.length, charWidth = w / charCount, lineWidth = charWidth / (7 + scale * 3);
    //console.log( `Code 39 "${text}" at [${x},${y}] height ${h} width ${w} (${charWidth} per char, ${lineWidth} per line}). Matrix ${matrix}.` );
    const spacing = [lineWidth, scale * lineWidth], d = lineWidth * (scale - 1) / 2;
    doc.setLineCap(2); // square cap
    for (let i = 0, draw = true; i < charCount; i++, draw = true) {
        let pos = Code39Chars.indexOf(text[i]), left = x + charWidth * i;
        for (let w of Code39Bars[pos].split("").map(e => +e)) {
            if (draw) {
                doc.setLineWidth(spacing[w]);
                let dw = w ? d : 0, x1 = left + dw, y1 = y + dw, x2 = left + dw, y2 = y + h - dw;
                if (matrix) {
                    [x1, y1] = applyMatrix(x1, y1);
                    [x2, y2] = applyMatrix(x2, y2);
                }
                doc.line(x1, y1, x2, y2);
            }
            left += spacing[w];
            draw = !draw;
        }
    }
    function applyMatrix(x, y) {
        return [x * matrix[0] + y * matrix[1] + matrix[2], x * matrix[3] + y * matrix[4] + matrix[5]];
    }
}
;
function draw_text(doc, text, x, y, size = 16) {
    doc.setFontSize(size);
    doc.text(text, x, y);
}
function draw_table(doc, data, x, y) {
    let k = 4;
    let header_width = Math.max(...data.map(e => e.header.length)) * doc.getFontSize() / k;
    let value_width = 190 - header_width;
    let i = 0;
    doc.setLineWidth(0.5);
    data.forEach((e) => {
        let h = 10;
        let l = e.value.length * doc.getFontSize() / k;
        while (l > value_width - 1) {
            h += 10;
            l -= value_width;
        }
        // console.log(e.value.length * doc.getFontSize()/4, h, doc.getFontSize()/4, value_width, l);
        doc.rect(x, y + i, header_width, h);
        doc.rect(x + header_width, y + i, value_width, h);
        doc.text(e.header, x + 2, y + 7 + i, { maxWidth: header_width * 0.9 });
        doc.text(e.value, x + header_width + 2, y + i + 7, { maxWidth: value_width * 0.9 });
        i += h;
    });
}


/***/ }),

/***/ "Iy/B":
/*!**************************************!*\
  !*** ./src/app/practices.service.ts ***!
  \**************************************/
/*! exports provided: PracticesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticesService", function() { return PracticesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eng */ "eln0");



class PracticesService {
    constructor(net) {
        this.net = net;
    }
    list(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.net.list('practices', params);
        });
    }
    get(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.net.get('practices', id);
        });
    }
    post(body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.net.post('practices', body, 'true');
        });
    }
    put(id, body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.net.put("practices", id, body);
        });
    }
}
PracticesService.ɵfac = function PracticesService_Factory(t) { return new (t || PracticesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_eng__WEBPACK_IMPORTED_MODULE_2__["NetService"])); };
PracticesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PracticesService, factory: PracticesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "K8Gv":
/*!*************************!*\
  !*** ./src/app/util.ts ***!
  \*************************/
/*! exports provided: get_color, get_color_digital */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_color", function() { return get_color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_color_digital", function() { return get_color_digital; });
function get_color(row) {
    return row.urgent == 'true' ? 'red-row' : '';
}
function get_color_digital(row) {
    return row.digital == 'true' ? 'green-row' : '';
}


/***/ }),

/***/ "KVg+":
/*!****************************************************************!*\
  !*** ./src/app/urgent-practices/urgent-practices.component.ts ***!
  \****************************************************************/
/*! exports provided: UrgentPracticesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrgentPracticesComponent", function() { return UrgentPracticesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eng */ "eln0");
/* harmony import */ var _eng_add_bottomsheet_add_bottomsheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eng/add-bottomsheet/add-bottomsheet.component */ "w4iH");
/* harmony import */ var _role_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../role.guard */ "GQDE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _paper_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../paper-date.pipe */ "f0u3");
/* harmony import */ var _practices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../practices.service */ "Iy/B");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _eng_search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../eng/search/search.component */ "vV1p");













class UrgentPracticesComponent {
    constructor(bus, date, p, bs, router, sb, t) {
        this.bus = bus;
        this.date = date;
        this.p = p;
        this.bs = bs;
        this.router = router;
        this.sb = sb;
        this.t = t;
        this.is_authorized = _role_guard__WEBPACK_IMPORTED_MODULE_3__["is_authorized"];
        this.config = {
            search_params: [
                {
                    label: "practice_id",
                    field: "id_like",
                    text: "practice_id"
                }, {
                    label: "created_at",
                    date: {
                        start: "created_start",
                        end: "created_end"
                    }
                }
            ],
            table_fields: [
                {
                    label: "practice_id",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("id")
                }, {
                    label: "created_at",
                    render: (row) => this.date.transform(row.created_at, Object(_eng__WEBPACK_IMPORTED_MODULE_1__["screen_size"])() == "xs" ? "short" : "medium")
                }, {
                    label: "arrived_at",
                    render: (row) => this.date.transform(row.arrived_at, Object(_eng__WEBPACK_IMPORTED_MODULE_1__["screen_size"])() == "xs" ? "short" : "medium")
                }
            ],
            export_fields: [
                {
                    label: "practice_id",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("id")
                }, {
                    label: "arrived_at",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("arrived_at")
                }, {
                    label: "created_at",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("created_at")
                }, {
                    label: "urgent",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("urgent")
                }
            ]
        };
        this.params = {
            sort: "created_at",
            direction: "desc",
            urgent: "true",
            no_count: "true"
        };
        this.add_config = {
            input: [
                {
                    type: "text",
                    label: "practice_id",
                    field: "practice_id",
                    placeholder: "practice_id"
                }
            ],
            createFn: this.create.bind(this),
            enableBtn: (params) => params.practice_id,
        };
    }
    ngOnInit() {
        this.bus.publish(_eng__WEBPACK_IMPORTED_MODULE_1__["PAGE_CHANGE"], "urgent_practices");
    }
    load(params) {
        return this.p.list(params);
    }
    openBottomSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield (this.bs.open(_eng_add_bottomsheet_add_bottomsheet_component__WEBPACK_IMPORTED_MODULE_2__["AddBottomsheetComponent"], { data: this.add_config })
                .afterDismissed().toPromise());
            this.bus.publish(_eng__WEBPACK_IMPORTED_MODULE_1__["RELOAD_EVENT"], this.params);
        });
    }
    create(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return yield this.p.post({ id: params.practice_id, urgent: "true" });
            }
            catch (error) {
                this.openSnackbarErrorMessage(params.practice_id, error.error.message);
            }
        });
    }
    openSnackbarErrorMessage(id, message) {
        this.sb.open(this.t.transform("practice") + " " + id + ": " + this.t.transform(message), "OK", { duration: 5000 });
    }
    navigate(row) {
        this.router.navigate(["practices/" + row.id]);
    }
}
UrgentPracticesComponent.ɵfac = function UrgentPracticesComponent_Factory(t) { return new (t || UrgentPracticesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_eng__WEBPACK_IMPORTED_MODULE_1__["BusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_paper_date_pipe__WEBPACK_IMPORTED_MODULE_5__["PaperDatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_practices_service__WEBPACK_IMPORTED_MODULE_6__["PracticesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_eng__WEBPACK_IMPORTED_MODULE_1__["TPipe"])); };
UrgentPracticesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UrgentPracticesComponent, selectors: [["app-urgent-practices"]], decls: 2, vars: 6, consts: [["export_name", "urgent-practices", 3, "config", "params", "load", "show_add", "add_item", "navigate"]], template: function UrgentPracticesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", ctx.config)("params", ctx.params)("load", ctx.load.bind(ctx))("show_add", ctx.is_authorized("sender", "admin"))("add_item", ctx.openBottomSheet.bind(ctx))("navigate", ctx.navigate.bind(ctx));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _eng_search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cmdlbnQtcHJhY3RpY2VzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "L3EQ":
/*!***********************************************!*\
  !*** ./src/app/eng/error-http-interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHttpInterceptor", function() { return ErrorHttpInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bus.service */ "ktTS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ErrorHttpInterceptor {
    constructor(bus) {
        this.bus = bus;
    }
    intercept(req, next) {
        if (req.headers.get('x-handle-error') == 'true') {
            return next.handle(req);
        }
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
            console.log(err);
            if (err.status == 504 || err.status == 0) {
                this.bus.publish(_bus_service__WEBPACK_IMPORTED_MODULE_2__["SERVER_ERROR"], Object.assign({}, err, { server_down: true }));
            }
            else {
                this.bus.publish(_bus_service__WEBPACK_IMPORTED_MODULE_2__["ERROR"], err);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(undefined);
        }));
    }
}
ErrorHttpInterceptor.ɵfac = function ErrorHttpInterceptor_Factory(t) { return new (t || ErrorHttpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_bus_service__WEBPACK_IMPORTED_MODULE_2__["BusService"])); };
ErrorHttpInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ErrorHttpInterceptor, factory: ErrorHttpInterceptor.ɵfac });


/***/ }),

/***/ "MGB/":
/*!***********************************!*\
  !*** ./src/app/eng/limit.pipe.ts ***!
  \***********************************/
/*! exports provided: LimitPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitPipe", function() { return LimitPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LimitPipe {
    transform(list, x) {
        if (!list) {
            return list;
        }
        return list.slice(0, x);
    }
}
LimitPipe.ɵfac = function LimitPipe_Factory(t) { return new (t || LimitPipe)(); };
LimitPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "limit", type: LimitPipe, pure: true });


/***/ }),

/***/ "MT9+":
/*!**************************************!*\
  !*** ./src/app/documents.service.ts ***!
  \**************************************/
/*! exports provided: DocumentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsService", function() { return DocumentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eng */ "eln0");



class DocumentsService {
    constructor(net) {
        this.net = net;
    }
    list(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.net.list('documents', params);
        });
    }
    get(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.net.get('documents', id);
        });
    }
}
DocumentsService.ɵfac = function DocumentsService_Factory(t) { return new (t || DocumentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_eng__WEBPACK_IMPORTED_MODULE_2__["NetService"])); };
DocumentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DocumentsService, factory: DocumentsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OHdQ":
/*!*********************************************!*\
  !*** ./src/app/eng/audit-report.service.ts ***!
  \*********************************************/
/*! exports provided: AuditReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditReportService", function() { return AuditReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _net_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./net.service */ "Ffpm");



class AuditReportService {
    constructor(net) {
        this.net = net;
    }
    list(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.net.list('audits/report', params);
        });
    }
}
AuditReportService.ɵfac = function AuditReportService_Factory(t) { return new (t || AuditReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_net_service__WEBPACK_IMPORTED_MODULE_2__["NetService"])); };
AuditReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuditReportService, factory: AuditReportService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PtTA":
/*!************************************************************!*\
  !*** ./src/app/eng/unauthorized/unauthorized.component.ts ***!
  \************************************************************/
/*! exports provided: UnauthorizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedComponent", function() { return UnauthorizedComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication */ "rZ6R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.service */ "Qa+r");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../t.pipe */ "oK4B");








class UnauthorizedComponent {
    constructor(baseHref, conf) {
        this.baseHref = baseHref;
        this.conf = conf;
    }
    ngOnInit() {
    }
    login() {
        Object(_authentication__WEBPACK_IMPORTED_MODULE_1__["logout"])(this.conf.get("logout_url"), this.baseHref);
    }
}
UnauthorizedComponent.ɵfac = function UnauthorizedComponent_Factory(t) { return new (t || UnauthorizedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["APP_BASE_HREF"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"])); };
UnauthorizedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UnauthorizedComponent, selectors: [["app-unauthorized"]], decls: 14, vars: 6, consts: [[2, "width", "100%", "text-align", "center", "margin-top", "3em"], [2, "margin", "0"], [2, "width", "100%", "text-align", "center", "margin-bottom", "3em"], ["mat-flat-button", "", "color", "primary", "routerLink", "/", 3, "click"]], template: function UnauthorizedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UnauthorizedComponent_Template_button_click_12_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 2, "unauthorized_head"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 4, "unauthorized_par"));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], pipes: [_t_pipe__WEBPACK_IMPORTED_MODULE_7__["TPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bmF1dGhvcml6ZWQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eng */ "eln0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _basechart_basechart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basechart/basechart.component */ "WYDs");
/* harmony import */ var _eng_t_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../eng/t.pipe */ "oK4B");






class DashboardComponent {
    constructor(bus) {
        this.bus = bus;
    }
    ngOnInit() {
        this.bus.publish(_eng__WEBPACK_IMPORTED_MODULE_0__["PAGE_CHANGE"], "dashboard");
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_eng__WEBPACK_IMPORTED_MODULE_0__["BusService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 21, vars: 12, consts: [[1, "dashboard-box"], [1, "mat-elevation-z5", "dashboard-card"], ["type", "bar", "section", "contracts_incompleted_by_service"], ["type", "doughnut", "section", "contracts_completed_by_service"], ["type", "pie", "section", "documents_by_service "], ["type", "line", "section", "documents_by_year"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-basechart", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-basechart", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-basechart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "app-basechart", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, "contracts_incompleted_by_service"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 6, "contracts_completed_by_service"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 8, "documents_by_service"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 10, "documents_by_year"), " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _basechart_basechart_component__WEBPACK_IMPORTED_MODULE_3__["BasechartComponent"]], pipes: [_eng_t_pipe__WEBPACK_IMPORTED_MODULE_4__["TPipe"]], styles: [".example-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: #eee;\r\n  }\r\n  \r\n  \r\n  @media screen and (min-width: 1150px){\r\n    .dashboard-card[_ngcontent-%COMP%] {\r\n      width: 40%;\r\n      margin: auto;\r\n      margin-top: 1.5em;\r\n      margin-bottom: 1.5em;\r\n    }\r\n  }\r\n  \r\n  \r\n  @media screen and (max-width: 1160px){\r\n    .dashboard-card[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      margin: auto;\r\n      margin-top: 2.5em;\r\n      margin-bottom: 1.5em;\r\n    }\r\n  }\r\n  \r\n  \r\n  .dashboard-box[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: row;\r\n    align-content: stretch;\r\n    margin: auto;\r\n    width: 90%;\r\n    text-align: center;\r\n  }\r\n  \r\n  \r\n  .p[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: row;\r\n    align-content: stretch;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixnQkFBZ0I7RUFDbEI7OztFQUdBO0lBQ0U7TUFDRSxVQUFVO01BQ1YsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixvQkFBb0I7SUFDdEI7RUFDRjs7O0VBRUE7SUFDRTtNQUNFLFdBQVc7TUFDWCxZQUFZO01BQ1osaUJBQWlCO01BQ2pCLG9CQUFvQjtJQUN0QjtFQUNGOzs7RUFJQTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjs7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEIiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTE1MHB4KXtcclxuICAgIC5kYXNoYm9hcmQtY2FyZCB7XHJcbiAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgbWFyZ2luLXRvcDogMS41ZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTYwcHgpe1xyXG4gICAgLmRhc2hib2FyZC1jYXJkIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgbWFyZ2luLXRvcDogMi41ZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAuZGFzaGJvYXJkLWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAucHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcclxuICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ "Qa+r":
/*!***************************************!*\
  !*** ./src/app/eng/config.service.ts ***!
  \***************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./t.pipe */ "oK4B");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bus.service */ "ktTS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








class ConfigService {
    constructor(http, baseHref, bus) {
        this.http = http;
        this.baseHref = baseHref;
        this.bus = bus;
        this.config = {};
    }
    setup() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.config = yield this.http.get(this.baseHref + "api/config").toPromise();
                _t_pipe__WEBPACK_IMPORTED_MODULE_2__["TPipe"].dictionary = yield this.http.get(this.baseHref + "api/translation/" + Object(_t_pipe__WEBPACK_IMPORTED_MODULE_2__["get_browser_language"])()).toPromise();
            }
            catch (error) {
                console.log(error);
                this.bus.publish(_bus_service__WEBPACK_IMPORTED_MODULE_3__["ERROR"], error);
            }
        });
    }
    get(param) {
        try {
            return this.config[param];
        }
        catch (error) {
            console.log(error);
            this.bus.publish(_bus_service__WEBPACK_IMPORTED_MODULE_3__["ERROR"], error);
        }
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["APP_BASE_HREF"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_bus_service__WEBPACK_IMPORTED_MODULE_3__["BusService"])); };
ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Qwf/":
/*!************************************************!*\
  !*** ./src/app/eng/navbar/navbar.component.ts ***!
  \************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bus.service */ "ktTS");
/* harmony import */ var _authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication */ "rZ6R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.service */ "Qa+r");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../error-page/error-page.component */ "0sXK");
/* harmony import */ var _error_page_server_errors_server_errors_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../error-page/server-errors/server-errors.component */ "dSi4");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../spinner/spinner.component */ "3gD/");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../t.pipe */ "oK4B");



















function NavbarComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NavbarComponent_button_3_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](22); return _r3.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NavbarComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NavbarComponent_button_19_Template_button_click_0_listener() { const e_r8 = ctx.$implicit; return e_r8.function(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](e_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 2, e_r8.label));
} }
function NavbarComponent_mat_nav_list_23_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NavbarComponent_mat_nav_list_23_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const e_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.navigate(e_r10.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("menu ", ctx_r11.page_menu(e_r10.label), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](e_r10.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 5, e_r10.label), "");
} }
function NavbarComponent_mat_nav_list_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NavbarComponent_mat_nav_list_23_a_1_Template, 5, 7, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", e_r10.condition);
} }
function NavbarComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class NavbarComponent {
    constructor(baseHref, configService, bus, router) {
        this.baseHref = baseHref;
        this.configService = configService;
        this.bus = bus;
        this.router = router;
        this.title = 'frontend';
        this.current_page = "dashboard";
        this.params = {};
        this.error = null;
        this.build_time = "unknown";
    }
    get name() {
        return Object(_authentication__WEBPACK_IMPORTED_MODULE_3__["user"])()["name"];
    }
    ngOnInit() {
        this.bus.subscribe(_bus_service__WEBPACK_IMPORTED_MODULE_2__["PAGE_CHANGE"], this.update.bind(this));
        this.build_time = this.configService.get("build_time");
        this.bus.subscribe(_bus_service__WEBPACK_IMPORTED_MODULE_2__["ERROR"], this.e_nav.bind(this));
        this.bus.subscribe(_bus_service__WEBPACK_IMPORTED_MODULE_2__["SERVER_ERROR"], this.e_nav.bind(this));
        this.router.events.subscribe(e => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.current_page = e.url.substring(1); //.split( "/" )[0];
            }
        });
    }
    update(e, x) {
        if (typeof (x) != 'string') {
            this.params = x.params;
            x = x.label;
        }
        x = x.split("#")[0];
        this.current_page = x;
    }
    e_nav(event, error) {
        this.error = error;
    }
    page_menu(page) {
        if (this.current_page == page) {
            return "menu-active";
        }
        return "";
    }
    navigate(link) {
        this.router.navigate([link]);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["APP_BASE_HREF"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_bus_service__WEBPACK_IMPORTED_MODULE_2__["BusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["eng-navbar"]], inputs: { sidenav_config: "sidenav_config", menu_config: "menu_config" }, ngContentSelectors: _c0, decls: 28, vars: 11, consts: [["color", "primary", 1, "fixed-toolbar", 2, "height", "auto", "color", "#fff"], ["mat-icon-button", "", 4, "ngIf"], ["routerLink", "/", 3, "title"], [1, "logo"], [2, "padding-left", "1em"], [2, "flex", "auto"], [1, "xs"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [2, "min-height", "calc( 100vh - 75px)"], [2, "width", "fit-content", 3, "click"], ["sidenav", ""], [4, "ngFor", "ngForOf"], ["class", "mobile-first", 4, "ngIf"], ["mat-icon-button", ""], [3, "click"], ["mat-menu-item", "", 3, "click"], ["mat-list-item", "", 3, "class", "click", 4, "ngIf"], ["mat-list-item", "", 3, "click"], [1, "mobile-first"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, NavbarComponent_button_3_Template, 3, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-menu", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, NavbarComponent_button_19_Template, 6, 4, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-sidenav-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-sidenav", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NavbarComponent_Template_mat_sidenav_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](22); return _r3.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, NavbarComponent_mat_nav_list_23_Template, 2, 1, "mat-nav-list", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, NavbarComponent_div_25_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "app-error-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "app-server-errors");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("title", "version: ", ctx.build_time, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 8, ctx.current_page, ctx.params));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.menu_config);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.sidenav_config);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.error);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarRow"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenav"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavContent"], _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_11__["ErrorPageComponent"], _error_page_server_errors_server_errors_component__WEBPACK_IMPORTED_MODULE_12__["ServerErrorsComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListItem"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_14__["SpinnerComponent"]], pipes: [_t_pipe__WEBPACK_IMPORTED_MODULE_15__["TPipe"]], styles: [".menu[_ngcontent-%COMP%] {\r\n  padding-left: 2em;\r\n  text-decoration: none;\r\n  filter: brightness(80%);\r\n  \r\n  \r\n}\r\n\r\n.menu[_ngcontent-%COMP%]:hover {\r\n  filter: brightness(90%);\r\n  \r\n}\r\n\r\n.menu-active[_ngcontent-%COMP%]{\r\n  font-weight: 600;\r\n  filter: brightness(100%) !important;\r\n  \r\n}\r\n\r\n.fixed-toolbar[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  position: -webkit-sticky; \r\n  top: 0; \r\n  z-index: 1000; \r\n}\r\n\r\n.mat-drawer[_ngcontent-%COMP%] {\r\n  position:fixed;top: 70px !important\r\n}\r\n\r\n@media (max-width: 800px){\r\n\r\n  .mat-drawer[_ngcontent-%COMP%] {\r\n    position:fixed;top: 50px !important\r\n  }\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUNBQW1DO0VBQ25DLG1DQUFtQztBQUNyQzs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0IsRUFBRSx5QkFBeUI7RUFDbkQsTUFBTSxFQUFFLHlDQUF5QztFQUNqRCxhQUFhLEVBQUUsK0RBQStEO0FBQ2hGOztBQUdBO0VBQ0UsY0FBYyxDQUFDO0FBQ2pCOztBQUdBOztFQUVFO0lBQ0UsY0FBYyxDQUFDO0VBQ2pCOzs7QUFHRiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcclxuICBwYWRkaW5nLWxlZnQ6IDJlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XHJcbiAgLyogY29sb3I6ICNmZmY7ICovXHJcbiAgLyogYmFja2dyb3VuZDogdmFyKC0tbGlnaHRlci1wcmltYXJ5KTsgKi9cclxufVxyXG5cclxuLm1lbnU6aG92ZXIge1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xyXG4gIC8qIGNvbG9yOiB2YXIoLS1saWdodGVyLXNlY29uZGFyeSk7ICovXHJcbn1cclxuXHJcbi5tZW51LWFjdGl2ZXtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKSAhaW1wb3J0YW50O1xyXG4gIC8qIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAqL1xyXG59XHJcblxyXG5cclxuLmZpeGVkLXRvb2xiYXIge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBGb3IgbWFjT1MvaU9TIFNhZmFyaSAqL1xyXG4gIHRvcDogMDsgLyogU2V0cyB0aGUgc3RpY2t5IHRvb2xiYXIgdG8gYmUgb24gdG9wICovXHJcbiAgei1pbmRleDogMTAwMDsgLyogRW5zdXJlIHRoYXQgeW91ciBhcHAncyBjb250ZW50IGRvZXNuJ3Qgb3ZlcmxhcCB0aGUgdG9vbGJhciAqL1xyXG59XHJcblxyXG5cclxuLm1hdC1kcmF3ZXIge1xyXG4gIHBvc2l0aW9uOmZpeGVkO3RvcDogNzBweCAhaW1wb3J0YW50XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpe1xyXG5cclxuICAubWF0LWRyYXdlciB7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDt0b3A6IDUwcHggIWltcG9ydGFudFxyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "RG15":
/*!************************************************************************************!*\
  !*** ./src/app/eng/confirmation-bottomsheet/confirmation-bottomsheet.component.ts ***!
  \************************************************************************************/
/*! exports provided: ConfirmationBottomsheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationBottomsheetComponent", function() { return ConfirmationBottomsheetComponent; });
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../t.pipe */ "oK4B");






function ConfirmationBottomsheetComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r0.config.message), " ");
} }
function ConfirmationBottomsheetComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r2.config.message), "\n  ");
} }
function ConfirmationBottomsheetComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmationBottomsheetComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.decline(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r3.config.decline.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, ctx_r3.config.decline.title), " ");
} }
class ConfirmationBottomsheetComponent {
    constructor(data, _bottomSheetRef) {
        this.data = data;
        this._bottomSheetRef = _bottomSheetRef;
        this.config = this.data.config;
        this.message_type = typeof this.data.config.message;
    }
    ngOnInit() {
    }
    decline() {
        this._bottomSheetRef.afterDismissed()
            .subscribe(res => this.config.decline.action(res));
        this._bottomSheetRef.dismiss(this.data.payload);
    }
    confirm() {
        this._bottomSheetRef.afterDismissed()
            .subscribe(res => this.config.confirm.action(res));
        this._bottomSheetRef.dismiss(this.data.payload);
    }
}
ConfirmationBottomsheetComponent.ɵfac = function ConfirmationBottomsheetComponent_Factory(t) { return new (t || ConfirmationBottomsheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__["MAT_BOTTOM_SHEET_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__["MatBottomSheetRef"])); };
ConfirmationBottomsheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfirmationBottomsheetComponent, selectors: [["app-confirmation-bottomsheet"]], decls: 11, vars: 15, consts: [[4, "ngIf", "ngIfElse"], ["object_content", ""], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-flat-button", "", "color", "accent", 3, "class", "click", 4, "ngIf"], ["mat-flat-button", "", "color", "accent", 3, "click"]], template: function ConfirmationBottomsheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ConfirmationBottomsheetComponent_div_3_Template, 4, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ConfirmationBottomsheetComponent_ng_template_4_Template, 3, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmationBottomsheetComponent_Template_button_click_7_listener() { return ctx.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ConfirmationBottomsheetComponent_button_10_Template, 3, 6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 11, ctx.config.title ? ctx.config.title : "confirm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message_type == "string")("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.config.classes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.config.confirm.classes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 13, ctx.config.confirm.title), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.config.decline);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], pipes: [_t_pipe__WEBPACK_IMPORTED_MODULE_4__["TPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtYXRpb24tYm90dG9tc2hlZXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eng */ "eln0");
/* harmony import */ var _role_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role.guard */ "GQDE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _eng_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eng/navbar/navbar.component */ "Qwf/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const DEV_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlYyUFdKTEg3Z2dGVTJwaXRnWWNreUJEY3ZQelJhS1B3UXZWQS1PWmR3TTAifQ.eyJleHAiOjI2MTM1NTE2MDgsImlhdCI6MTYxMzU1MDcwOCwiYXV0aF90aW1lIjoxNjEzNTQ5ODA3LCJqdGkiOiJjNTI2OWIyYy05ZGZkLTRiNjctOGQ1YS00MWM5MTE4ZmMxMWYiLCJpc3MiOiJodHRwOi8vMTYxLjI3LjE0Ni4xNTo4MTgwL2F1dGgvcmVhbG1zL0dlY29fUmVhbG0iLCJzdWIiOiJmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDp1MDB0ZXN0IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiR2Vjb0xvY2FsaG9zdCIsIm5vbmNlIjoiMC41NTQzMzcxODgzMzE3MjQxIiwic2Vzc2lvbl9zdGF0ZSI6ImVjNzNiODQyLTMwMjAtNGYxNC1hM2UwLTA4MDU4MzM1MGUxNCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo0MjAwIl0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiTGVvbmFyZG8gRGEgVmluY2kiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDp1MDB0ZXN0IiwiZ2l2ZW5fbmFtZSI6Ikxlb25hcmRvIiwiZmFtaWx5X25hbWUiOiJEYSBWaW5jaSIsImF1dGhvcml6YXRpb25zIjpbInJlY2VpdmVyIiwic2VuZGVyIiwiYWRtaW4iLCJzdXBlcnZpc29yIl19.NL1kbljTrgYimFMomfIc1_qrbwzRV78v3eZcAJRVrH0";
const RECEIVER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlYyUFdKTEg3Z2dGVTJwaXRnWWNreUJEY3ZQelJhS1B3UXZWQS1PWmR3TTAifQ.eyJleHAiOjI2MTM1NTE2MDgsImlhdCI6MTYxMzU1MDcwOCwiYXV0aF90aW1lIjoxNjEzNTQ5ODA3LCJqdGkiOiJjNTI2OWIyYy05ZGZkLTRiNjctOGQ1YS00MWM5MTE4ZmMxMWYiLCJpc3MiOiJodHRwOi8vMTYxLjI3LjE0Ni4xNTo4MTgwL2F1dGgvcmVhbG1zL0dlY29fUmVhbG0iLCJzdWIiOiJmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDp1MDB0ZXN0IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiR2Vjb0xvY2FsaG9zdCIsIm5vbmNlIjoiMC41NTQzMzcxODgzMzE3MjQxIiwic2Vzc2lvbl9zdGF0ZSI6ImVjNzNiODQyLTMwMjAtNGYxNC1hM2UwLTA4MDU4MzM1MGUxNCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo0MjAwIl0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiQW5uYSBSaWNldml0b3JlIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiZjowOTMzOTA0Ni0wNzNjLTRlYjItOTA3ZC03ZGY3ZWRiYjFkNjA6ZjowOTMzOTA0Ni0wNzNjLTRlYjItOTA3ZC03ZGY3ZWRiYjFkNjA6ZjowOTMzOTA0Ni0wNzNjLTRlYjItOTA3ZC03ZGY3ZWRiYjFkNjA6dTAwdGVzdCIsImdpdmVuX25hbWUiOiJBbm5hIiwiZmFtaWx5X25hbWUiOiJSaWNldml0b3JlIiwiYXV0aG9yaXphdGlvbnMiOlsicmVjZWl2ZXIiXX0.g26lNjXnORdDPXVsLZXQvr9L4SffSVN9uzxNXFMxhgI";
const SENDER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlYyUFdKTEg3Z2dGVTJwaXRnWWNreUJEY3ZQelJhS1B3UXZWQS1PWmR3TTAifQ.eyJleHAiOjI2MTM1NTE2MDgsImlhdCI6MTYxMzU1MDcwOCwiYXV0aF90aW1lIjoxNjEzNTQ5ODA3LCJqdGkiOiJjNTI2OWIyYy05ZGZkLTRiNjctOGQ1YS00MWM5MTE4ZmMxMWYiLCJpc3MiOiJodHRwOi8vMTYxLjI3LjE0Ni4xNTo4MTgwL2F1dGgvcmVhbG1zL0dlY29fUmVhbG0iLCJzdWIiOiJmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDp1MDB0ZXN0IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiR2Vjb0xvY2FsaG9zdCIsIm5vbmNlIjoiMC41NTQzMzcxODgzMzE3MjQxIiwic2Vzc2lvbl9zdGF0ZSI6ImVjNzNiODQyLTMwMjAtNGYxNC1hM2UwLTA4MDU4MzM1MGUxNCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo0MjAwIl0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiVmFsZXJpbyBNaXR0ZW50ZSIsInByZWZlcnJlZF91c2VybmFtZSI6ImY6MDkzMzkwNDYtMDczYy00ZWIyLTkwN2QtN2RmN2VkYmIxZDYwOmY6MDkzMzkwNDYtMDczYy00ZWIyLTkwN2QtN2RmN2VkYmIxZDYwOmY6MDkzMzkwNDYtMDczYy00ZWIyLTkwN2QtN2RmN2VkYmIxZDYwOnUwMHRlc3QiLCJnaXZlbl9uYW1lIjoiVmFsZXJpbyIsImZhbWlseV9uYW1lIjoiTWl0dGVudGUiLCJhdXRob3JpemF0aW9ucyI6WyJzZW5kZXIiXX0.GpVFV-oc6N_-MfmXcMkMm80rks0euzb9llCO5a1ebCc";
const ADMIN_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlYyUFdKTEg3Z2dGVTJwaXRnWWNreUJEY3ZQelJhS1B3UXZWQS1PWmR3TTAifQ.eyJleHAiOjI2MTM1NTE2MDgsImlhdCI6MTYxMzU1MDcwOCwiYXV0aF90aW1lIjoxNjEzNTQ5ODA3LCJqdGkiOiJjNTI2OWIyYy05ZGZkLTRiNjctOGQ1YS00MWM5MTE4ZmMxMWYiLCJpc3MiOiJodHRwOi8vMTYxLjI3LjE0Ni4xNTo4MTgwL2F1dGgvcmVhbG1zL0dlY29fUmVhbG0iLCJzdWIiOiJmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDp1MDB0ZXN0IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiR2Vjb0xvY2FsaG9zdCIsIm5vbmNlIjoiMC41NTQzMzcxODgzMzE3MjQxIiwic2Vzc2lvbl9zdGF0ZSI6ImVjNzNiODQyLTMwMjAtNGYxNC1hM2UwLTA4MDU4MzM1MGUxNCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo0MjAwIl0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiRWxpc2FiZXR0YSBBbW1pbmlzdHJhdHJpY2UiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDp1MDB0ZXN0IiwiZ2l2ZW5fbmFtZSI6IkVsaXNhYmV0dGEiLCJmYW1pbHlfbmFtZSI6IkFtbWluaXN0cmF0cmljZSIsImF1dGhvcml6YXRpb25zIjpbImFkbWluIl19.G4o00Hk9T011XR4r6mUSnXTd9oCGodobYVHcYxVkQDk";
const SUPERVISOR_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlYyUFdKTEg3Z2dGVTJwaXRnWWNreUJEY3ZQelJhS1B3UXZWQS1PWmR3TTAifQ.eyJleHAiOjI2MTM1NTE2MDgsImlhdCI6MTYxMzU1MDcwOCwiYXV0aF90aW1lIjoxNjEzNTQ5ODA3LCJqdGkiOiJjNTI2OWIyYy05ZGZkLTRiNjctOGQ1YS00MWM5MTE4ZmMxMWYiLCJpc3MiOiJodHRwOi8vMTYxLjI3LjE0Ni4xNTo4MTgwL2F1dGgvcmVhbG1zL0dlY29fUmVhbG0iLCJzdWIiOiJmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDp1MDB0ZXN0IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiR2Vjb0xvY2FsaG9zdCIsIm5vbmNlIjoiMC41NTQzMzcxODgzMzE3MjQxIiwic2Vzc2lvbl9zdGF0ZSI6ImVjNzNiODQyLTMwMjAtNGYxNC1hM2UwLTA4MDU4MzM1MGUxNCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo0MjAwIl0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiR2lvdmFubmkgU3VwZXJ2aXNvcmUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDp1MDB0ZXN0IiwiZ2l2ZW5fbmFtZSI6Ikdpb3Zhbm5pIiwiZmFtaWx5X25hbWUiOiJTdXBlcnZpc29yZSIsImF1dGhvcml6YXRpb25zIjpbInN1cGVydmlzb3IiXX0.yHn5E6LjufbOWK0vVARPEyVu-b2lNNkV_TpLR_xbci4";
const FAKE_TOKEN = ADMIN_TOKEN;
class AppComponent {
    constructor(baseHref, configService) {
        this.baseHref = baseHref;
        this.configService = configService;
        this.sidenav_config = [];
        this.menu_config = [
            {
                icon: "logout",
                label: "logout",
                function: () => {
                    Object(_eng__WEBPACK_IMPORTED_MODULE_1__["logout"])(this.configService.get("logout_url"), this.baseHref);
                }
            }
        ];
    }
    ngOnInit() {
        let fake_authentication = this.configService.get("fake_authentication");
        let client_id = this.configService.get("client_id");
        let ids_url = this.configService.get("ids_url");
        _eng__WEBPACK_IMPORTED_MODULE_1__["Context"].value = this.configService.get("context") + "_";
        Object(_eng__WEBPACK_IMPORTED_MODULE_1__["authenticate"])(ids_url, client_id, FAKE_TOKEN, fake_authentication);
        this.sidenav_config = [
            {
                icon: "space_dashboard",
                link: "/dashboard",
                label: "dashboard",
                condition: true
            },
            {
                icon: "format_list_numbered",
                link: "/waybills",
                label: "waybills",
                condition: Object(_role_guard__WEBPACK_IMPORTED_MODULE_2__["is_authorized"])('receiver', 'admin', 'supervisor', 'sender')
            },
            {
                icon: "assignment_late",
                link: "/waybills/urgent",
                label: "urgent-waybills",
                condition: Object(_role_guard__WEBPACK_IMPORTED_MODULE_2__["is_authorized"])('sender', 'admin', 'supervisor')
            },
            {
                icon: "receipt",
                link: "/lists",
                label: "lists",
                condition: Object(_role_guard__WEBPACK_IMPORTED_MODULE_2__["is_authorized"])('receiver', 'admin', 'supervisor', 'sender')
            },
            {
                icon: "receipt_long",
                link: "/practices",
                label: "practices",
                condition: Object(_role_guard__WEBPACK_IMPORTED_MODULE_2__["is_authorized"])('receiver', 'admin', 'supervisor', 'sender')
            },
            {
                icon: "gpp_maybe",
                link: "/practices/urgent",
                label: "urgent_practices",
                condition: Object(_role_guard__WEBPACK_IMPORTED_MODULE_2__["is_authorized"])('admin', 'supervisor', 'sender')
            },
            {
                icon: "assignment_returned",
                link: "/requests",
                label: "requests",
                condition: Object(_role_guard__WEBPACK_IMPORTED_MODULE_2__["is_authorized"])('receiver', 'admin', 'supervisor', 'sender')
            },
            {
                icon: "summarize",
                link: "/audits",
                label: "audit",
                condition: Object(_role_guard__WEBPACK_IMPORTED_MODULE_2__["is_authorized"])('admin')
            },
            {
                icon: "analytics",
                link: "/audit-report",
                label: "audit-report",
                condition: Object(_role_guard__WEBPACK_IMPORTED_MODULE_2__["is_authorized"])('admin')
            }
        ];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["APP_BASE_HREF"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_eng__WEBPACK_IMPORTED_MODULE_1__["ConfigService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [[3, "sidenav_config", "menu_config"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "eng-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("sidenav_config", ctx.sidenav_config)("menu_config", ctx.menu_config);
    } }, directives: [_eng_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "V1L6":
/*!*****************************************************!*\
  !*** ./src/app/eng/audits/audit/audit.component.ts ***!
  \*****************************************************/
/*! exports provided: AuditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditComponent", function() { return AuditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bus.service */ "ktTS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _audit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../audit.service */ "8JiL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-json-viewer */ "xWP1");









function AuditComponent_ngx_json_viewer_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-json-viewer", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("json", ctx_r0.info);
} }
function AuditComponent_ngx_json_viewer_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-json-viewer", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("json", ctx_r1.message.request);
} }
function AuditComponent_ngx_json_viewer_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-json-viewer", 5);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("json", ctx_r2.message.response);
} }
function partial_object(object, fields) {
    return fields.reduce((acc, curr) => { acc[curr] = object[curr]; return acc; }, {});
}
function remove_arrays(object, fields) {
    let res = Object.assign({}, object);
    fields.forEach(k => { var _a; return ((_a = object[k]) === null || _a === void 0 ? void 0 : _a.length) == 1 ? res[k] = object[k][0] : null; });
    return res;
}
class AuditComponent {
    constructor(a, audit, bus) {
        this.a = a;
        this.audit = audit;
        this.bus = bus;
        this.message = {};
        this.info = {};
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.bus.publish(_bus_service__WEBPACK_IMPORTED_MODULE_1__["PAGE_CHANGE"], "audit");
            this.message = yield this.audit.get(this.a.snapshot.params.id);
            this.message['request'] = JSON.parse(this.message['request']);
            this.message['response'] = JSON.parse(this.message['response']);
            this.info = partial_object(this.message, ["id", "username", "url", "at", "method", "status"]);
            this.message["request"] = remove_arrays(this.message["request"], ["offset", "limit", "sort", "direction", "urgent", "arrived_is_not_null", "arrived_start", "arrived_end", "created_start", "created_end"]);
        });
    }
}
AuditComponent.ɵfac = function AuditComponent_Factory(t) { return new (t || AuditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_audit_service__WEBPACK_IMPORTED_MODULE_4__["AuditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_bus_service__WEBPACK_IMPORTED_MODULE_1__["BusService"])); };
AuditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AuditComponent, selectors: [["app-audit"]], decls: 9, vars: 3, consts: [[2, "margin-bottom", "2em"], [3, "json", 4, "ngIf"], ["label", "Request"], [1, "xs-padding"], ["label", "Response"], [3, "json"]], template: function AuditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AuditComponent_ngx_json_viewer_1_Template, 1, 1, "ngx-json-viewer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AuditComponent_ngx_json_viewer_5_Template, 1, 1, "ngx-json-viewer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AuditComponent_ngx_json_viewer_8_Template, 1, 1, "ngx-json-viewer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.info["id"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.message["request"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.message["response"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], ngx_json_viewer__WEBPACK_IMPORTED_MODULE_7__["NgxJsonViewerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdWRpdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "WYDs":
/*!************************************************************!*\
  !*** ./src/app/dashboard/basechart/basechart.component.ts ***!
  \************************************************************/
/*! exports provided: BasechartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasechartComponent", function() { return BasechartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BasechartComponent {
    constructor() { }
    ngOnInit() {
    }
}
BasechartComponent.ɵfac = function BasechartComponent_Factory(t) { return new (t || BasechartComponent)(); };
BasechartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasechartComponent, selectors: [["app-basechart"]], decls: 2, vars: 0, template: function BasechartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "basechart works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNlY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "X6hl":
/*!******************************************************!*\
  !*** ./src/app/eng/add-input/add-input.component.ts ***!
  \******************************************************/
/*! exports provided: AddInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInputComponent", function() { return AddInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../t.pipe */ "oK4B");







const _c0 = ["input_id"];
function AddInputComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.title));
} }
class AddInputComponent {
    constructor() {
        this.field = "";
    }
    ngOnInit() {
    }
    submit() {
        this.create(this.field);
        this.field = "";
        this.input_id.nativeElement.focus();
    }
}
AddInputComponent.ɵfac = function AddInputComponent_Factory(t) { return new (t || AddInputComponent)(); };
AddInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddInputComponent, selectors: [["app-add-input"]], viewQuery: function AddInputComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input_id = _t.first);
    } }, inputs: { create: "create", placeholder: "placeholder", title: "title" }, decls: 12, vars: 9, consts: [[4, "ngIf"], ["appearance", "legacy", 2, "width", "100%"], ["matInput", "", 3, "ngModel", "ngModelChange", "keyup.enter"], ["input_id", ""], [1, "double-line-container"], ["mat-raised-button", "", "color", "primary", 1, "single-line-button", 3, "disabled", "click"]], template: function AddInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddInputComponent_h2_1_Template, 3, 3, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInputComponent_Template_input_ngModelChange_6_listener($event) { return ctx.field = $event; })("keyup.enter", function AddInputComponent_Template_input_keyup_enter_6_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddInputComponent_Template_button_click_9_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, ctx.placeholder));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.field);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("disabled", ctx.field.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, "submit"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], pipes: [_t_pipe__WEBPACK_IMPORTED_MODULE_6__["TPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtaW5wdXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "YO7S":
/*!*****************************************************************!*\
  !*** ./src/app/eng/search/search-form/search-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return SearchFormComponent; });
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../bus.service */ "ktTS");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "1qT9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../autocomplete/autocomplete.component */ "8+y4");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../t.pipe */ "oK4B");
















const _c0 = ["picker"];
function SearchFormComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchFormComponent_div_0_div_1_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const e_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r10.params[e_r3.field] = $event); })("keyup.enter", function SearchFormComponent_div_0_div_1_Template_input_keyup_enter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r13.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, e_r3.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 6, e_r3.text));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r4.params[e_r3.field])("type", e_r3.type);
} }
function SearchFormComponent_div_0_div_2_mat_checkbox_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-checkbox", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function SearchFormComponent_div_0_div_2_mat_checkbox_1_Template_mat_checkbox_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const c_r16 = ctx.$implicit; const e_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.set_value($event, c_r16.value, e_r3.field); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, c_r16.label), "");
} }
function SearchFormComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchFormComponent_div_0_div_2_mat_checkbox_1_Template, 3, 3, "mat-checkbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", e_r3.checkbox);
} }
function SearchFormComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-autocomplete", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("inputChange", function SearchFormComponent_div_0_div_3_Template_app_autocomplete_inputChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const e_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r21.params[e_r3.autocomplete.field] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", e_r3.autocomplete.config)("input", ctx_r6.params[e_r3.autocomplete.field]);
} }
function SearchFormComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchFormComponent_div_0_div_4_Template_mat_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const e_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r25.params[e_r3.field] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r7.params[e_r3.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, e_r3.single_checkbox.label));
} }
function SearchFormComponent_div_0_div_5_mat_option_6_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 18);
} if (rf & 2) {
    const s_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", s_r30.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function SearchFormComponent_div_0_div_5_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchFormComponent_div_0_div_5_mat_option_6_img_1_Template, 1, 1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", s_r30.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", s_r30.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, s_r30.label), " ");
} }
function SearchFormComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchFormComponent_div_0_div_5_Template_mat_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const e_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r33.params[e_r3.field] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SearchFormComponent_div_0_div_5_mat_option_6_Template, 6, 5, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 3, e_r3.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r8.params[e_r3.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", e_r3.select);
} }
function SearchFormComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-date-range-input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFormComponent_div_0_div_6_Template_input_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15); return _r37.open(); })("ngModelChange", function SearchFormComponent_div_0_div_6_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39); const e_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r40.params[e_r3.date.start] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFormComponent_div_0_div_6_Template_input_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15); return _r37.open(); })("ngModelChange", function SearchFormComponent_div_0_div_6_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39); const e_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r43.params[e_r3.date.end] = $event); })("ngModelChange", function SearchFormComponent_div_0_div_6_Template_input_ngModelChange_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39); const e_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r45.format_date(e_r3.date.end); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "mat-datepicker-toggle", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFormComponent_div_0_div_6_Template_mat_icon_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39); const e_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r47.reset_date(e_r3.date); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "mat-date-range-picker", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
    const e_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 7, e_r3.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rangePicker", _r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 9, "start_date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r9.params[e_r3.date.start]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 11, "end_date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r9.params[e_r3.date.end]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r37);
} }
function SearchFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchFormComponent_div_0_div_1_Template, 7, 8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SearchFormComponent_div_0_div_2_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SearchFormComponent_div_0_div_3_Template, 2, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SearchFormComponent_div_0_div_4_Template, 4, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SearchFormComponent_div_0_div_5_Template, 7, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SearchFormComponent_div_0_div_6_Template, 16, 13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", e_r3.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", e_r3.checkbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", e_r3.autocomplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", e_r3.single_checkbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", e_r3.select);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", e_r3.date);
} }
function SearchFormComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFormComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r50.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r1.do_export ? "double-line-button-left" : "single-line-button", " darker-primary-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, "search"), "\u00A0\u00A0 ");
} }
function SearchFormComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFormComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r52.export(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "save_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r2.config.length > 0 ? "double-line-button-right" : "single-line-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, "export"), "\u00A0\u00A0 ");
} }
class SearchFormComponent {
    constructor(bus) {
        this.bus = bus;
    }
    ngOnInit() {
        // console.log(this.do_export);
        // console.log(this.config);
        this.params = JSON.parse(sessionStorage.getItem(window.location.href) || JSON.stringify(this.params));
    }
    ngAfterViewInit() {
        this.search();
    }
    search() {
        var _a;
        this.params.offset = 0;
        this.params.limit = (_a = this.params.limit) !== null && _a !== void 0 ? _a : 20;
        sessionStorage.setItem(window.location.href, JSON.stringify(this.params));
        this.bus.publish(this.service_name ? this.service_name + "_" + _bus_service__WEBPACK_IMPORTED_MODULE_0__["DO_SEARCH_EVENT"] : _bus_service__WEBPACK_IMPORTED_MODULE_0__["DO_SEARCH_EVENT"], this.params);
    }
    export() {
        this.bus.publish(_bus_service__WEBPACK_IMPORTED_MODULE_0__["DO_EXPORT_EVENT"]);
    }
    reset_date(date) {
        this.params[date.start] = "";
        this.params[date.end] = "";
    }
    format_date(label) {
        this.params[label] = Object(_util__WEBPACK_IMPORTED_MODULE_1__["end_of_day"])(this.params[label]);
    }
    set_value(event, value, name) {
        this.params[name] = this.params[name] || [];
        if (event.checked) {
            this.params[name].push(value);
        }
        else {
            this.params[name] = this.params[name].filter(e => e != value);
        }
    }
}
SearchFormComponent.ɵfac = function SearchFormComponent_Factory(t) { return new (t || SearchFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_bus_service__WEBPACK_IMPORTED_MODULE_0__["BusService"])); };
SearchFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchFormComponent, selectors: [["app-search-form"]], viewQuery: function SearchFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.picker = _t.first);
    } }, inputs: { params: "params", config: "config", do_export: "do_export", service_name: "service_name" }, decls: 4, vars: 3, consts: [["class", "margin", 4, "ngFor", "ngForOf"], [1, "double-line-container", "margin", 2, "margin-bottom", "1em"], ["mat-flat-button", "", "color", "primary", 3, "class", "click", 4, "ngIf"], ["mat-flat-button", "", "color", "accent", 3, "class", "click", 4, "ngIf"], [1, "margin"], [4, "ngIf"], [2, "width", "100%"], ["matInput", "", 3, "ngModel", "type", "placeholder", "ngModelChange", "keyup.enter"], ["class", "format checkbox", 3, "change", 4, "ngFor", "ngForOf"], [1, "format", "checkbox", 3, "change"], [3, "config", "input", "inputChange"], [1, "format", "checkbox", 3, "ngModel", "ngModelChange"], ["appearance", "fill", 2, "width", "100%"], ["multiple", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["alt", "logo", "style", "height: 2em;margin: auto;position: absolute;top:10%;transform: translateY (-50%);", 3, "src", 4, "ngIf"], [2, "margin-left", "3em"], ["alt", "logo", 2, "height", "2em", "margin", "auto", "position", "absolute", "top", "10%", "transform", "translateY (-50%)", 3, "src"], ["color", "primary", "appearance", "fill", 2, "width", "100%"], [3, "rangePicker"], ["matStartDate", "", 3, "ngModel", "placeholder", "click", "ngModelChange"], ["matEndDate", "", 3, "ngModel", "placeholder", "click", "ngModelChange"], ["matSuffix", "", 2, "display", "flex"], [3, "for"], [1, "pointer", 2, "margin", "auto", "margin-left", "1em", 3, "click"], ["touchUi", ""], ["picker", ""], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-flat-button", "", "color", "accent", 3, "click"]], template: function SearchFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SearchFormComponent_div_0_Template, 7, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SearchFormComponent_button_2_Template, 5, 6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SearchFormComponent_button_3_Template, 5, 6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.config.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.do_export);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckbox"], _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_8__["AutocompleteComponent"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatStartDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatEndDate"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerToggle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDateRangePicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"]], pipes: [_t_pipe__WEBPACK_IMPORTED_MODULE_14__["TPipe"]], styles: [".checkbox[_ngcontent-%COMP%]{\r\n  padding: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic2VhcmNoLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja2JveHtcclxuICBwYWRkaW5nOiAxZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_common_locales_it__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/it */ "1IWC");
/* harmony import */ var _angular_common_locales_it__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_it__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _eng_eng_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./eng/eng.module */ "eln0");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _dashboard_basechart_basechart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/basechart/basechart.component */ "WYDs");
/* harmony import */ var _waybills_waybills_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./waybills/waybills.component */ "ugWN");
/* harmony import */ var _paper_date_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./paper-date.pipe */ "f0u3");
/* harmony import */ var _eng_material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./eng/material.module */ "9+B4");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lists/lists.component */ "hnRM");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./list/list.component */ "uMRu");
/* harmony import */ var _urgent_waybills_urgent_waybills_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./urgent-waybills/urgent-waybills.component */ "rSYq");
/* harmony import */ var _practices_practices_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./practices/practices.component */ "g/oH");
/* harmony import */ var _urgent_practices_urgent_practices_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./urgent-practices/urgent-practices.component */ "KVg+");
/* harmony import */ var _practice_practice_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./practice/practice.component */ "ETPP");
/* harmony import */ var _requests_requests_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./requests/requests.component */ "0yay");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "fXoL");























Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_it__WEBPACK_IMPORTED_MODULE_4___default.a);
Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _paper_date_pipe__WEBPACK_IMPORTED_MODULE_13__["PaperDatePipe"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
            _eng_eng_module__WEBPACK_IMPORTED_MODULE_9__["EngModule"],
            _eng_material_module__WEBPACK_IMPORTED_MODULE_14__["EngMaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
        _dashboard_basechart_basechart_component__WEBPACK_IMPORTED_MODULE_11__["BasechartComponent"],
        _waybills_waybills_component__WEBPACK_IMPORTED_MODULE_12__["WaybillsComponent"],
        _paper_date_pipe__WEBPACK_IMPORTED_MODULE_13__["PaperDatePipe"],
        _lists_lists_component__WEBPACK_IMPORTED_MODULE_15__["ListsComponent"],
        _list_list_component__WEBPACK_IMPORTED_MODULE_16__["ListComponent"],
        _urgent_waybills_urgent_waybills_component__WEBPACK_IMPORTED_MODULE_17__["UrgentWaybillsComponent"],
        _practices_practices_component__WEBPACK_IMPORTED_MODULE_18__["PracticesComponent"],
        _urgent_practices_urgent_practices_component__WEBPACK_IMPORTED_MODULE_19__["UrgentPracticesComponent"],
        _practice_practice_component__WEBPACK_IMPORTED_MODULE_20__["PracticeComponent"],
        _requests_requests_component__WEBPACK_IMPORTED_MODULE_21__["RequestsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
        _eng_eng_module__WEBPACK_IMPORTED_MODULE_9__["EngModule"],
        _eng_material_module__WEBPACK_IMPORTED_MODULE_14__["EngMaterialModule"]] }); })();


/***/ }),

/***/ "cxbm":
/*!************************************!*\
  !*** ./src/app/eng/filter.pipe.ts ***!
  \************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FilterPipe {
    transform(list, x, fields) {
        if (x == null || x.length == 0) {
            return list;
        }
        return list.filter(e => this.match(e, x, fields));
    }
    match(e, x, fields) {
        return fields.filter(f => e[f].toLowerCase().indexOf(x.toLowerCase()) != -1).length > 0;
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });


/***/ }),

/***/ "cy5W":
/*!************************************************************!*\
  !*** ./src/app/eng/audit-report/audit-report.component.ts ***!
  \************************************************************/
/*! exports provided: AuditReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditReportComponent", function() { return AuditReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _audits_audit_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../audits/audit.const */ "81dA");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bus.service */ "ktTS");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "1qT9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _audit_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../audit-report.service */ "OHdQ");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../t.pipe */ "oK4B");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../search/search.component */ "vV1p");
















function AuditReportComponent_mat_grid_tile_21_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "canvas", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tile_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("datasets", tile_r5.graph.datasets)("labels", tile_r5.graph.labels)("options", tile_r5.graph.options)("legend", false)("chartType", tile_r5.graph.type);
} }
function AuditReportComponent_mat_grid_tile_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-grid-tile", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AuditReportComponent_mat_grid_tile_21_div_2_Template, 2, 5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tile_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background", tile_r5.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("colspan", tile_r5.cols)("rowspan", tile_r5.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", tile_r5.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tile_r5.graph);
} }
function AuditReportComponent_mat_grid_tile_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tile_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", tile_r8.text, " ");
} }
function AuditReportComponent_mat_grid_tile_37_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "canvas", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tile_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("datasets", tile_r8.graph.datasets)("labels", tile_r8.graph.labels)("options", tile_r8.graph.options)("legend", false)("chartType", tile_r8.graph.type);
} }
function AuditReportComponent_mat_grid_tile_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-grid-tile", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AuditReportComponent_mat_grid_tile_37_div_1_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AuditReportComponent_mat_grid_tile_37_div_2_Template, 2, 5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tile_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background", tile_r8.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("colspan", tile_r8.cols)("rowspan", tile_r8.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tile_r8.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tile_r8.graph);
} }
const ISO_8601 = 'yyyy-MM-ddTHH:mm:ssZ';
class AuditReportComponent {
    constructor(ar, bus, t, date) {
        this.ar = ar;
        this.bus = bus;
        this.t = t;
        this.date = date;
        this.last_week_data = [];
        this.yesterday_data = [];
        this.last_month_data = [];
        this.today = this.date.transform(new Date(), ISO_8601);
        this.yesterday = this.date.transform(new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate() - 1), ISO_8601);
        this.last_week = this.date.transform(new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate() - 7), ISO_8601);
        this.last_month = this.date.transform(new Date((new Date()).getFullYear(), (new Date()).getMonth() - 1, (new Date()).getDate()), ISO_8601);
        this.config = {
            search_params: [
                {
                    label: "url",
                    field: "url_like",
                    text: "url"
                },
                {
                    label: "method",
                    field: "method",
                    select: _audits_audit_const__WEBPACK_IMPORTED_MODULE_1__["METHODS"]
                },
                {
                    label: "status",
                    field: "status",
                    select: _audits_audit_const__WEBPACK_IMPORTED_MODULE_1__["STATUS"]
                }, {
                    label: "at",
                    date: {
                        start: "at_start",
                        end: "at_end"
                    }
                }
            ],
            table_fields: [
                {
                    label: "url",
                    render: Object(_util__WEBPACK_IMPORTED_MODULE_3__["default_render"])("url")
                },
                {
                    label: "method",
                    render: Object(_util__WEBPACK_IMPORTED_MODULE_3__["default_render"])("method")
                }, {
                    label: "status",
                    render: (row) => this.t.transform("http_status_" + row["status"])
                }, {
                    label: "at",
                    render: Object(_util__WEBPACK_IMPORTED_MODULE_3__["default_render"])("at")
                },
                {
                    label: "qty",
                    render: Object(_util__WEBPACK_IMPORTED_MODULE_3__["default_render"])("qty")
                }
            ],
            export_fields: [
                {
                    label: "at",
                    render: Object(_util__WEBPACK_IMPORTED_MODULE_3__["default_render"])("at")
                }, {
                    label: "url",
                    render: Object(_util__WEBPACK_IMPORTED_MODULE_3__["default_render"])("url")
                },
                {
                    label: "method",
                    render: Object(_util__WEBPACK_IMPORTED_MODULE_3__["default_render"])("method")
                }, {
                    label: "status",
                    render: Object(_util__WEBPACK_IMPORTED_MODULE_3__["default_render"])("status")
                }, {
                    label: "qty",
                    render: Object(_util__WEBPACK_IMPORTED_MODULE_3__["default_render"])("qty")
                }
            ]
        };
        this.params = { limit: 10 };
        this.chart = {};
        this.pieChartData = [
            { data: [65, 59, 80, 81], label: 'Function Calls' },
        ];
        this.pieChartLabels = ['Waybills', 'Audit', 'List', 'Practices'];
        this.pieChartOptions = {
            responsive: true
        };
        this.pieChartLegend = true;
        this.pieChartType = 'pie';
        this.pieChartPlugins = [];
        this.methods_tiles = [
            { text: 'Tot', cols: 2, rows: 2, color: 'lightblue' },
            { cols: 2, rows: 2, color: '#FFFFFF', graph: {
                    datasets: this.pieChartData,
                    labels: this.pieChartLabels,
                    options: this.pieChartOptions,
                    type: "doughnut"
                } },
            { text: 'Get', cols: 1, rows: 1, color: '#AAB3FF' },
            { text: 'Post', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Put', cols: 1, rows: 1, color: '#DDBDF1' },
            { text: 'Delete', cols: 1, rows: 1, color: '#DDB3FF' },
        ];
        this.status_tiles = [
            { text: '200', cols: 1, rows: 1, color: 'lightgreen' },
            //{text: '500', cols: 1, rows: 1, color: 'lightblue'},
            { cols: 3, rows: 2, color: '#FFFFFF',
                graph: {
                    datasets: this.pieChartData,
                    labels: this.pieChartLabels,
                    options: this.pieChartOptions,
                    type: "pie"
                } },
            { text: '500', cols: 1, rows: 1, color: 'red' },
            { text: '400', cols: 1, rows: 1, color: 'lightpink' },
            { text: '404', cols: 1, rows: 1, color: '#DDBDF1' },
            { text: '401', cols: 1, rows: 1, color: '#DDBDF1' },
            { text: '409', cols: 1, rows: 1, color: '#DDB3FF' },
        ];
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                borderColor: 'black',
                backgroundColor: 'rgba(255,0,0,0.3)',
            },
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartPlugins = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.last_week_data = yield this.load({ limit: 10000, at_start: this.last_week, at_end: this.today });
            this.last_month_data = yield this.load({ limit: 10000, at_start: this.last_month, at_end: this.today });
            this.yesterday_data = yield this.load({ limit: 10000, at_start: this.yesterday, at_end: this.today });
            this.bus.publish(_bus_service__WEBPACK_IMPORTED_MODULE_2__["PAGE_CHANGE"], "audit-report");
        });
    }
    load(params) {
        return this.ar.list(params);
    }
}
AuditReportComponent.ɵfac = function AuditReportComponent_Factory(t) { return new (t || AuditReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_audit_report_service__WEBPACK_IMPORTED_MODULE_5__["AuditReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_bus_service__WEBPACK_IMPORTED_MODULE_2__["BusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_t_pipe__WEBPACK_IMPORTED_MODULE_6__["TPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"])); };
AuditReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AuditReportComponent, selectors: [["app-audit-report"]], decls: 56, vars: 21, consts: [[1, "card-box"], [1, "card"], ["baseChart", "", "width", "100", "height", "70", 3, "datasets", "labels", "options", "legend", "chartType", "plugins"], [1, "card-title"], [1, "title"], ["mat-button", "", 1, "menu-btn", 3, "matMenuTriggerFor"], [1, "menu-btn"], ["menu", "matMenu"], ["mat-menu-item", ""], ["cols", "4", "rowHeight", "100px"], [3, "colspan", "rowspan", "background", 4, "ngFor", "ngForOf"], [2, "width", "100%", "margin", "2em"], ["baseChart", "", "width", "400", "height", "150", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "plugins"], [2, "margin", "2em"], ["export_name", "audit-report", 3, "config", "params", "load"], [3, "colspan", "rowspan"], [4, "ngIf"], ["baseChart", "", "width", "250", "height", "200", 3, "datasets", "labels", "options", "legend", "chartType"]], template: function AuditReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " yesterday activity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "canvas", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "selected ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-menu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-grid-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, AuditReportComponent_mat_grid_tile_21_Template, 3, 6, "mat-grid-tile", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Response status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "selected ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-menu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-grid-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, AuditReportComponent_mat_grid_tile_37_Template, 3, 6, "mat-grid-tile", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Function calls");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "selected ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-menu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "canvas", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "mat-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "app-search", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("datasets", ctx.pieChartData)("labels", ctx.pieChartLabels)("options", ctx.pieChartOptions)("legend", ctx.pieChartLegend)("chartType", ctx.pieChartType)("plugins", ctx.pieChartPlugins);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.methods_tiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.status_tiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType)("plugins", ctx.lineChartPlugins);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", ctx.config)("params", ctx.params)("load", ctx.load.bind(ctx));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], ng2_charts__WEBPACK_IMPORTED_MODULE_9__["BaseChartDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuItem"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridTile"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".card-box[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  align-content: stretch;\r\n  margin: auto;\r\n  width: 90%;\r\n  text-align: center;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n  margin: auto;\r\n  margin-top: 1.5em;\r\n  margin-bottom: 1.5em;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  width: 100%;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\r\n  float: left;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%] {\r\n  float: right;\r\n}\r\n\r\n@media screen and (max-width: 1160px){\r\n  .dashboard-card[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: auto;\r\n    margin-top: 2.5em;\r\n    margin-bottom: 1.5em;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGl0LXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUdBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFJQTtFQUNFLFdBQVc7QUFDYjs7QUFHQTtFQUNFLFlBQVk7QUFDZDs7QUFHQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCO0FBQ0YiLCJmaWxlIjoiYXVkaXQtcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDkwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcclxufVxyXG5cclxuXHJcbi5jYXJkLXRpdGxle1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG4uY2FyZC10aXRsZSAudGl0bGV7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcblxyXG4uY2FyZC10aXRsZSAubWVudS1idG4ge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNjBweCl7XHJcbiAgLmRhc2hib2FyZC1jYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMi41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "dSi4":
/*!*************************************************************************!*\
  !*** ./src/app/eng/error-page/server-errors/server-errors.component.ts ***!
  \*************************************************************************/
/*! exports provided: ServerErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorsComponent", function() { return ServerErrorsComponent; });
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../bus.service */ "ktTS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-json-viewer */ "xWP1");







function ServerErrorsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "INTERNAL SERVER ERROR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-expansion-panel-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Dettaglio errore / error detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ngx-json-viewer", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("json", ctx_r0.error);
} }
class ServerErrorsComponent {
    constructor(bus) {
        this.bus = bus;
        this.error = null;
    }
    ngOnInit() {
        this.bus.subscribe(_bus_service__WEBPACK_IMPORTED_MODULE_0__["SERVER_ERROR"], this.e_se.bind(this));
    }
    e_se(event, error) {
        this.error = error;
        if (!error)
            return;
        this.bus.publish(_bus_service__WEBPACK_IMPORTED_MODULE_0__["PAGE_CHANGE"], "server_error");
    }
}
ServerErrorsComponent.ɵfac = function ServerErrorsComponent_Factory(t) { return new (t || ServerErrorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bus_service__WEBPACK_IMPORTED_MODULE_0__["BusService"])); };
ServerErrorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ServerErrorsComponent, selectors: [["app-server-errors"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [2, "width", "100%", "text-align", "center", "margin-top", "3em"], [2, "width", "100%", "margin-top", "2em"], [2, "height", "48px"], [3, "json"]], template: function ServerErrorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ServerErrorsComponent_div_0_Template, 13, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error && ctx.error.server_down);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], ngx_json_viewer__WEBPACK_IMPORTED_MODULE_5__["NgxJsonViewerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2ZXItZXJyb3JzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "eln0":
/*!***********************************!*\
  !*** ./src/app/eng/eng.module.ts ***!
  \***********************************/
/*! exports provided: RELOAD_EVENT, PAGE_CHANGE, ERROR, LOADING, LOADED, ERROR_504, SERVER_ERROR, DO_SEARCH_EVENT, DO_EXPORT_EVENT, BusService, FilterPipe, pdf, get_browser_language, TPipe, timestamp, default_render, is_empty, is_set, clean, end_of_day, distance_from_bottom, screen_size, NetService, ConfigService, Context, accessToken, user, logout, authenticate, ConfirmationBottomsheetComponent, AddBottomsheetComponent, AuditsComponent, AuditReportComponent, EngModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngModule", function() { return EngModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./t.pipe */ "oK4B");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bus.service */ "ktTS");
/* harmony import */ var _limit_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./limit.pipe */ "MGB/");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filter.pipe */ "cxbm");
/* harmony import */ var _spinner_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./spinner-interceptor */ "iLVj");
/* harmony import */ var _error_http_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error-http-interceptor */ "L3EQ");
/* harmony import */ var _net_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./net.service */ "Ffpm");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./config.service */ "Qa+r");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./spinner/spinner.component */ "3gD/");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./material.module */ "9+B4");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./error-page/error-page.component */ "0sXK");
/* harmony import */ var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./autocomplete/autocomplete.component */ "8+y4");
/* harmony import */ var _add_bottomsheet_add_bottomsheet_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-bottomsheet/add-bottomsheet.component */ "w4iH");
/* harmony import */ var _add_input_add_input_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./add-input/add-input.component */ "X6hl");
/* harmony import */ var _confirmation_bottomsheet_confirmation_bottomsheet_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./confirmation-bottomsheet/confirmation-bottomsheet.component */ "RG15");
/* harmony import */ var _audits_audits_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./audits/audits.component */ "HUqZ");
/* harmony import */ var _audits_audit_audit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./audits/audit/audit.component */ "V1L6");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-json-viewer */ "xWP1");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./navbar/navbar.component */ "Qwf/");
/* harmony import */ var _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./unauthorized/unauthorized.component */ "PtTA");
/* harmony import */ var _error_page_server_errors_server_errors_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./error-page/server-errors/server-errors.component */ "dSi4");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _search_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./search/search-form/search-form.component */ "YO7S");
/* harmony import */ var _search_search_list_search_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./search/search-list/search-list.component */ "pDqz");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./search/search.component */ "vV1p");
/* harmony import */ var _unique_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./unique.pipe */ "DjSf");
/* harmony import */ var _audit_report_audit_report_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./audit-report/audit-report.component */ "cy5W");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RELOAD_EVENT", function() { return _bus_service__WEBPACK_IMPORTED_MODULE_6__["RELOAD_EVENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PAGE_CHANGE", function() { return _bus_service__WEBPACK_IMPORTED_MODULE_6__["PAGE_CHANGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR", function() { return _bus_service__WEBPACK_IMPORTED_MODULE_6__["ERROR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOADING", function() { return _bus_service__WEBPACK_IMPORTED_MODULE_6__["LOADING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOADED", function() { return _bus_service__WEBPACK_IMPORTED_MODULE_6__["LOADED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_504", function() { return _bus_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_504"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SERVER_ERROR", function() { return _bus_service__WEBPACK_IMPORTED_MODULE_6__["SERVER_ERROR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DO_SEARCH_EVENT", function() { return _bus_service__WEBPACK_IMPORTED_MODULE_6__["DO_SEARCH_EVENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DO_EXPORT_EVENT", function() { return _bus_service__WEBPACK_IMPORTED_MODULE_6__["DO_EXPORT_EVENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BusService", function() { return _bus_service__WEBPACK_IMPORTED_MODULE_6__["BusService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return _filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"]; });

/* harmony import */ var _pdf__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pdf */ "HtRL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pdf", function() { return _pdf__WEBPACK_IMPORTED_MODULE_33__["pdf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get_browser_language", function() { return _t_pipe__WEBPACK_IMPORTED_MODULE_3__["get_browser_language"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TPipe", function() { return _t_pipe__WEBPACK_IMPORTED_MODULE_3__["TPipe"]; });

/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./util */ "1qT9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timestamp", function() { return _util__WEBPACK_IMPORTED_MODULE_34__["timestamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default_render", function() { return _util__WEBPACK_IMPORTED_MODULE_34__["default_render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "is_empty", function() { return _util__WEBPACK_IMPORTED_MODULE_34__["is_empty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "is_set", function() { return _util__WEBPACK_IMPORTED_MODULE_34__["is_set"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clean", function() { return _util__WEBPACK_IMPORTED_MODULE_34__["clean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "end_of_day", function() { return _util__WEBPACK_IMPORTED_MODULE_34__["end_of_day"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distance_from_bottom", function() { return _util__WEBPACK_IMPORTED_MODULE_34__["distance_from_bottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "screen_size", function() { return _util__WEBPACK_IMPORTED_MODULE_34__["screen_size"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetService", function() { return _net_service__WEBPACK_IMPORTED_MODULE_11__["NetService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return _config_service__WEBPACK_IMPORTED_MODULE_12__["ConfigService"]; });

/* harmony import */ var _authentication__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./authentication */ "rZ6R");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _authentication__WEBPACK_IMPORTED_MODULE_35__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accessToken", function() { return _authentication__WEBPACK_IMPORTED_MODULE_35__["accessToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "user", function() { return _authentication__WEBPACK_IMPORTED_MODULE_35__["user"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return _authentication__WEBPACK_IMPORTED_MODULE_35__["logout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authenticate", function() { return _authentication__WEBPACK_IMPORTED_MODULE_35__["authenticate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmationBottomsheetComponent", function() { return _confirmation_bottomsheet_confirmation_bottomsheet_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmationBottomsheetComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddBottomsheetComponent", function() { return _add_bottomsheet_add_bottomsheet_component__WEBPACK_IMPORTED_MODULE_18__["AddBottomsheetComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuditsComponent", function() { return _audits_audits_component__WEBPACK_IMPORTED_MODULE_21__["AuditsComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuditReportComponent", function() { return _audit_report_audit_report_component__WEBPACK_IMPORTED_MODULE_32__["AuditReportComponent"]; });















































class EngModule {
}
EngModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EngModule });
EngModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function EngModule_Factory(t) { return new (t || EngModule)(); }, providers: [
        _limit_pipe__WEBPACK_IMPORTED_MODULE_7__["LimitPipe"],
        _filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"],
        _bus_service__WEBPACK_IMPORTED_MODULE_6__["BusService"],
        _net_service__WEBPACK_IMPORTED_MODULE_11__["NetService"],
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
            deps: [_config_service__WEBPACK_IMPORTED_MODULE_12__["ConfigService"]],
            useFactory: (configService) => () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () { yield configService.setup(); }),
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
            useClass: _error_http_interceptor__WEBPACK_IMPORTED_MODULE_10__["ErrorHttpInterceptor"],
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
            useClass: _spinner_interceptor__WEBPACK_IMPORTED_MODULE_9__["SpinnerInterceptor"],
            multi: true
        },
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"],
            useFactory: (s) => s.getBaseHrefFromDOM(),
            deps: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["PlatformLocation"]]
        },
        _t_pipe__WEBPACK_IMPORTED_MODULE_3__["TPipe"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ngx_json_viewer__WEBPACK_IMPORTED_MODULE_23__["NgxJsonViewerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__["ScrollingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_15__["EngMaterialModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EngModule, { declarations: [_search_search_component__WEBPACK_IMPORTED_MODULE_30__["SearchComponent"],
        _t_pipe__WEBPACK_IMPORTED_MODULE_3__["TPipe"],
        _limit_pipe__WEBPACK_IMPORTED_MODULE_7__["LimitPipe"],
        _filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"],
        _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_14__["SpinnerComponent"],
        _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_16__["ErrorPageComponent"],
        _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_17__["AutocompleteComponent"],
        _add_bottomsheet_add_bottomsheet_component__WEBPACK_IMPORTED_MODULE_18__["AddBottomsheetComponent"],
        _add_input_add_input_component__WEBPACK_IMPORTED_MODULE_19__["AddInputComponent"],
        _confirmation_bottomsheet_confirmation_bottomsheet_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmationBottomsheetComponent"],
        _audits_audits_component__WEBPACK_IMPORTED_MODULE_21__["AuditsComponent"],
        _audits_audit_audit_component__WEBPACK_IMPORTED_MODULE_22__["AuditComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_24__["NavbarComponent"],
        _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_25__["UnauthorizedComponent"],
        _error_page_server_errors_server_errors_component__WEBPACK_IMPORTED_MODULE_26__["ServerErrorsComponent"],
        _search_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_28__["SearchFormComponent"],
        _search_search_list_search_list_component__WEBPACK_IMPORTED_MODULE_29__["SearchListComponent"],
        _unique_pipe__WEBPACK_IMPORTED_MODULE_31__["UniquePipe"],
        _audit_report_audit_report_component__WEBPACK_IMPORTED_MODULE_32__["AuditReportComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ngx_json_viewer__WEBPACK_IMPORTED_MODULE_23__["NgxJsonViewerModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__["ScrollingModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_15__["EngMaterialModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"]], exports: [_search_search_component__WEBPACK_IMPORTED_MODULE_30__["SearchComponent"],
        _t_pipe__WEBPACK_IMPORTED_MODULE_3__["TPipe"],
        _limit_pipe__WEBPACK_IMPORTED_MODULE_7__["LimitPipe"],
        _filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"],
        _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_14__["SpinnerComponent"],
        _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_16__["ErrorPageComponent"],
        _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_17__["AutocompleteComponent"],
        _add_input_add_input_component__WEBPACK_IMPORTED_MODULE_19__["AddInputComponent"],
        _audits_audits_component__WEBPACK_IMPORTED_MODULE_21__["AuditsComponent"],
        _audit_report_audit_report_component__WEBPACK_IMPORTED_MODULE_32__["AuditReportComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_24__["NavbarComponent"]] }); })();


/***/ }),

/***/ "f0u3":
/*!************************************!*\
  !*** ./src/app/paper-date.pipe.ts ***!
  \************************************/
/*! exports provided: PaperDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperDatePipe", function() { return PaperDatePipe; });
/* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eng */ "eln0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



class PaperDatePipe {
    constructor(date) {
        this.date = date;
    }
    transform(value, format) {
        return this.date.transform(value, format, undefined, Object(_eng__WEBPACK_IMPORTED_MODULE_0__["get_browser_language"])());
    }
}
PaperDatePipe.ɵfac = function PaperDatePipe_Factory(t) { return new (t || PaperDatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"])); };
PaperDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "date", type: PaperDatePipe, pure: true });


/***/ }),

/***/ "fsky":
/*!************************************!*\
  !*** ./src/app/dealers.service.ts ***!
  \************************************/
/*! exports provided: DealersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealersService", function() { return DealersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eng */ "eln0");



class DealersService {
    constructor(net) {
        this.net = net;
    }
    list(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.net.list('dealers', params);
        });
    }
}
DealersService.ɵfac = function DealersService_Factory(t) { return new (t || DealersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_eng__WEBPACK_IMPORTED_MODULE_2__["NetService"])); };
DealersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DealersService, factory: DealersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "g/oH":
/*!**************************************************!*\
  !*** ./src/app/practices/practices.component.ts ***!
  \**************************************************/
/*! exports provided: PracticesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticesComponent", function() { return PracticesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eng */ "eln0");
/* harmony import */ var _eng_confirmation_bottomsheet_confirmation_bottomsheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eng/confirmation-bottomsheet/confirmation-bottomsheet.component */ "RG15");
/* harmony import */ var _role_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../role.guard */ "GQDE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _paper_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../paper-date.pipe */ "f0u3");
/* harmony import */ var _practices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../practices.service */ "Iy/B");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _eng_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../eng/search/search.component */ "vV1p");












class PracticesComponent {
    constructor(bus, date, p, bs, router) {
        this.bus = bus;
        this.date = date;
        this.p = p;
        this.bs = bs;
        this.router = router;
        this.exportName = "practices";
        this.config = {
            search_params: [
                {
                    label: "practice_id",
                    field: "id_like",
                    text: "practice_id"
                }, {
                    label: "arrived_at",
                    date: {
                        start: "arrived_start",
                        end: "arrived_end"
                    }
                }, {
                    label: "urgent",
                    field: "urgent",
                    single_checkbox: {
                        label: "urgent_only"
                    }
                }
            ],
            table_fields: [
                {
                    label: "practice_id",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("id")
                }, {
                    label: "arrived_at",
                    sortable: true,
                    render: (row) => this.date.transform(row.arrived_at, Object(_eng__WEBPACK_IMPORTED_MODULE_1__["screen_size"])() == "xs" ? "short" : "medium")
                }, {
                    label: "created_at",
                    sortable: true,
                    render: (row) => this.date.transform(row.created_at, Object(_eng__WEBPACK_IMPORTED_MODULE_1__["screen_size"])() == "xs" ? "short" : "medium")
                },
                {
                    label: "urgent",
                    actions: [
                        {
                            title: "set_urgent",
                            action: (row) => this.openBottomSheet(row),
                            condition: (row) => Object(_role_guard__WEBPACK_IMPORTED_MODULE_3__["is_authorized"])('receiver', 'admin') && row.urgent == "false",
                            icon: "flag",
                            classes: "icon-btn-xs",
                            color: "accent"
                        }
                    ],
                    classes: Object(_role_guard__WEBPACK_IMPORTED_MODULE_3__["is_authorized"])('receiver', 'admin') ? " action-xs-col" : " hidden"
                }
            ],
            export_fields: [
                {
                    label: "practice_id",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("id")
                }, {
                    label: "arrived_at",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("arrived_at")
                }, {
                    label: "created_at",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("created_at")
                }, {
                    label: "urgent",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("urgent")
                }
            ],
            color_class: (row) => this.get_color(row)
        };
        this.params = {
            sort: "arrived_at",
            direction: "desc",
            arrived_is_not_null: Object(_role_guard__WEBPACK_IMPORTED_MODULE_3__["is_authorized"])('receiver') ? 'true' : null,
            no_count: "true"
        };
        this.confirm_config = {
            title: "set_practice_urgent",
            message: "practices_urgent_confirm",
            confirm: {
                title: "yes",
                action: this.update.bind(this),
                classes: "double-line-button-left"
            },
            decline: {
                action: () => { },
                title: "no",
                classes: "double-line-button-right"
            },
            classes: "double-line-container"
        };
    }
    ngOnInit() {
        this.bus.publish(_eng__WEBPACK_IMPORTED_MODULE_1__["PAGE_CHANGE"], "practices");
    }
    openBottomSheet(row) {
        this.bs.open(_eng_confirmation_bottomsheet_confirmation_bottomsheet_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationBottomsheetComponent"], { data: { config: this.confirm_config, payload: row } });
    }
    update(row) {
        this.p.put(row.id, { urgent: row.urgent == 'true' ? 'false' : 'true' });
        this.bus.publish(_eng__WEBPACK_IMPORTED_MODULE_1__["RELOAD_EVENT"]);
    }
    get_color(row) {
        return row.urgent == 'true' ? 'red-row' : '';
    }
    load(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!params.urgent) {
                delete params.urgent;
            }
            let list = yield this.p.list(params);
            list.forEach(e => e.selected = e.urgent == 'true');
            return list;
        });
    }
    navigate(row) {
        this.router.navigate(["practices/" + row.id]);
    }
}
PracticesComponent.ɵfac = function PracticesComponent_Factory(t) { return new (t || PracticesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_eng__WEBPACK_IMPORTED_MODULE_1__["BusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_paper_date_pipe__WEBPACK_IMPORTED_MODULE_5__["PaperDatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_practices_service__WEBPACK_IMPORTED_MODULE_6__["PracticesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
PracticesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PracticesComponent, selectors: [["app-practices"]], decls: 2, vars: 4, consts: [["export_name", "practices", 3, "config", "params", "load", "navigate"]], template: function PracticesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", ctx.config)("params", ctx.params)("load", ctx.load.bind(ctx))("navigate", ctx.navigate.bind(ctx));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _eng_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmFjdGljZXMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "hnRM":
/*!******************************************!*\
  !*** ./src/app/lists/lists.component.ts ***!
  \******************************************/
/*! exports provided: ListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsComponent", function() { return ListsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eng */ "eln0");
/* harmony import */ var _role_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../role.guard */ "GQDE");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "K8Gv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _lists_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lists.service */ "AThM");
/* harmony import */ var _dealers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dealers.service */ "fsky");
/* harmony import */ var _waybills_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../waybills.service */ "8DPT");
/* harmony import */ var _paper_date_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../paper-date.pipe */ "f0u3");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _eng_search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../eng/search/search.component */ "vV1p");














class ListsComponent {
    constructor(l, d, w, bus, date, bs, router) {
        this.l = l;
        this.d = d;
        this.w = w;
        this.bus = bus;
        this.date = date;
        this.bs = bs;
        this.router = router;
        this.is_authorized = _role_guard__WEBPACK_IMPORTED_MODULE_2__["is_authorized"];
        this.config = {
            search_params: [
                // {
                //   autocomplete: {
                //     label: "waybill",
                //     field: "waybill_id",
                //     config: {
                //       placeholder: "select_waybill",
                //       backend: {
                //         field: "id_like",
                //         loadFn: this.waybill_load.bind( this ),
                //       },
                //       frontend: {
                //         valueFn: ( option ) => option.id,
                //         renderFn: ( option ) => option ? option.id : "",
                //         displayFn: ( value ) => value ? value : ""
                //       }
                //     }
                //   }
                // },
                {
                    label: "waybill",
                    field: "waybill_id_like",
                    text: "id"
                },
                {
                    autocomplete: {
                        label: "dealer",
                        field: "dealer_id",
                        config: {
                            placeholder: "select_dealer",
                            backend: {
                                field: "dealer_like",
                                loadFn: this.dealers_load.bind(this),
                            },
                            frontend: {
                                //TODO valueFn deve essere lo stesso di displayFn->e=>e.value e conseguente cambio a backend del criterio di ricerca
                                valueFn: (option) => option.description,
                                renderFn: (option) => option ? option.dealer : "",
                                displayFn: (value, options) => value ? options.find(e => e.description == value)['dealer'] : ""
                            }
                        }
                    }
                }, {
                    label: "created_at",
                    date: {
                        start: "created_start",
                        end: "created_end"
                    }
                }
            ],
            table_fields: [
                {
                    label: "waybill_id",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("waybill_id")
                }, {
                    label: "dealer_id",
                    small_icon: "assignment",
                    render: (row) => row.dealer_id + " - " + row.description
                }, {
                    label: "created_at",
                    render: (row) => this.date.transform(row.created_at, Object(_eng__WEBPACK_IMPORTED_MODULE_1__["screen_size"])() == "xs" ? "short" : "medium")
                },
                {
                    label: "digital",
                    icon: (row) => row.digital == "true" ? "done" : ""
                }
            ],
            export_fields: [
                {
                    label: "list_id",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("id")
                }, {
                    label: "waybill_id",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("waybill_id")
                }, {
                    label: "dealer_id",
                    render: (row) => row.dealer_id + " - " + row.description
                }, {
                    label: "digital",
                    render: (row) => row.digital
                }, {
                    label: "created_at",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("created_at")
                }, {
                    label: "urgent",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("urgent")
                }
            ],
            color_class: (row) => Object(_util__WEBPACK_IMPORTED_MODULE_3__["get_color_digital"])(row)
        };
        this.params = {
            sort: "created_at",
            direction: "desc",
            no_count: "true"
        };
        this.add_config = {
            input: [
                {
                    type: "autocomplete",
                    label: "dealer",
                    field: "dealer_id",
                    config: {
                        placeholder: "select_dealer",
                        backend: {
                            field: "dealer_like",
                            loadFn: this.dealers_load.bind(this),
                        },
                        frontend: {
                            valueFn: (option) => option.id,
                            renderFn: (option) => option ? option.dealer : "",
                            displayFn: (value, options) => value ? options.find(e => e.id == value)['dealer'] : ""
                        }
                    },
                },
                {
                    type: "autocomplete",
                    label: "waybill",
                    field: "waybill_id",
                    config: {
                        placeholder: "select_waybill",
                        backend: {
                            field: "id_like",
                            loadFn: this.waybill_load.bind(this),
                        },
                        frontend: {
                            valueFn: (option) => option.id,
                            renderFn: (option) => option ? option.id : "",
                            displayFn: (value) => value ? value : ""
                        }
                    },
                }
            ],
            createFn: this.create.bind(this),
            enableBtn: (params) => params.dealer_id && params.waybill_id
        };
    }
    ngOnInit() {
        this.bus.publish(_eng__WEBPACK_IMPORTED_MODULE_1__["PAGE_CHANGE"], "lists");
    }
    load(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!params.urgent) {
                delete params.urgent;
            }
            let list = yield this.l.list(params);
            list.forEach(e => e.selected = e.urgent == 'true');
            return list;
        });
    }
    navigate(row) {
        this.router.navigate(["lists/" + row.id]);
    }
    openBottomSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield (this.bs.open(_eng__WEBPACK_IMPORTED_MODULE_1__["AddBottomsheetComponent"], { data: this.add_config }).afterDismissed().toPromise());
            this.bus.publish(_eng__WEBPACK_IMPORTED_MODULE_1__["RELOAD_EVENT"], this.params);
        });
    }
    dealers_load(params) {
        return this.d.list(params);
    }
    waybill_load(params) {
        return this.w.list(Object.assign({}, params, { sort: "no_sort" }));
    }
    create(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            params = Object.assign({}, params, { urgent: (yield this.waybill_load({ id: params.waybill_id }))[0].urgent });
            this.l.post(params);
        });
    }
}
ListsComponent.ɵfac = function ListsComponent_Factory(t) { return new (t || ListsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_lists_service__WEBPACK_IMPORTED_MODULE_5__["ListsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_dealers_service__WEBPACK_IMPORTED_MODULE_6__["DealersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_waybills_service__WEBPACK_IMPORTED_MODULE_7__["WaybillsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_eng__WEBPACK_IMPORTED_MODULE_1__["BusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_paper_date_pipe__WEBPACK_IMPORTED_MODULE_8__["PaperDatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"])); };
ListsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ListsComponent, selectors: [["app-lists"]], decls: 2, vars: 6, consts: [["export_name", "lists", 3, "config", "params", "load", "add_item", "show_add", "navigate"]], template: function ListsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", ctx.config)("params", ctx.params)("load", ctx.load.bind(ctx))("add_item", ctx.openBottomSheet.bind(ctx))("show_add", ctx.is_authorized("receiver", "admin"))("navigate", ctx.navigate.bind(ctx));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _eng_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "iLVj":
/*!********************************************!*\
  !*** ./src/app/eng/spinner-interceptor.ts ***!
  \********************************************/
/*! exports provided: SpinnerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerInterceptor", function() { return SpinnerInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bus.service */ "ktTS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SpinnerInterceptor {
    constructor(bus) {
        this.bus = bus;
    }
    intercept(req, next) {
        this.bus.publish(_bus_service__WEBPACK_IMPORTED_MODULE_1__["LOADING"]);
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(() => this.bus.publish(_bus_service__WEBPACK_IMPORTED_MODULE_1__["LOADED"])));
    }
}
SpinnerInterceptor.ɵfac = function SpinnerInterceptor_Factory(t) { return new (t || SpinnerInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_bus_service__WEBPACK_IMPORTED_MODULE_1__["BusService"])); };
SpinnerInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SpinnerInterceptor, factory: SpinnerInterceptor.ɵfac });


/***/ }),

/***/ "ktTS":
/*!************************************!*\
  !*** ./src/app/eng/bus.service.ts ***!
  \************************************/
/*! exports provided: RELOAD_EVENT, PAGE_CHANGE, ERROR, LOADING, LOADED, ERROR_504, SERVER_ERROR, DO_SEARCH_EVENT, DO_EXPORT_EVENT, BusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELOAD_EVENT", function() { return RELOAD_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_CHANGE", function() { return PAGE_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR", function() { return ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADED", function() { return LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_504", function() { return ERROR_504; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_ERROR", function() { return SERVER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DO_SEARCH_EVENT", function() { return DO_SEARCH_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DO_EXPORT_EVENT", function() { return DO_EXPORT_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusService", function() { return BusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


const RELOAD_EVENT = "reloadEvent";
const PAGE_CHANGE = "pageChange";
const ERROR = "ERROR";
const LOADING = "LOADING";
const LOADED = "LOADED";
const ERROR_504 = "ERROR_504";
const SERVER_ERROR = "SERVER_ERROR";
const DO_SEARCH_EVENT = "DO_SEARCH_EVENT";
const DO_EXPORT_EVENT = "DO_EXPORT_EVENT";
class BusService {
    constructor() {
        // evento: lista callback
        //map -> eventString , list[callback1, callback2, ... callbackN]
        this.map = new Map();
    }
    publish(event, params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let list = this.map.get(event) || [];
            //console.log("evento pubblicato", event , " da applicare a ", list.length , " elementi " )
            list.forEach((callback) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return callback(event, params); }), 100);
            }));
        });
    }
    subscribe(event, callback) {
        //console.log("evento sottoscritto ", event, " callback name ", callback  )
        let list = this.map.get(event) || [];
        list.push(callback);
        this.map.set(event, list);
    }
    unsubscribe(event) {
        this.map.set(event, []);
    }
}
BusService.ɵfac = function BusService_Factory(t) { return new (t || BusService)(); };
BusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BusService, factory: BusService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "oK4B":
/*!*******************************!*\
  !*** ./src/app/eng/t.pipe.ts ***!
  \*******************************/
/*! exports provided: get_browser_language, TPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_browser_language", function() { return get_browser_language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TPipe", function() { return TPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

function get_browser_language() {
    let localFormats = [
        'en-US',
        'en',
        'it-IT'
    ];
    return localFormats.filter(k => k == navigator.language)[0] || 'it-IT';
}
class TPipe {
    transform(value, params = {}) {
        return Object.keys(params).reduce((r, e) => r.replace(e, params[e]), TPipe.dictionary[value] || "***" + value + "***");
    }
}
TPipe.dictionary = {};
TPipe.ɵfac = function TPipe_Factory(t) { return new (t || TPipe)(); };
TPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "t", type: TPipe, pure: true });


/***/ }),

/***/ "pDqz":
/*!*****************************************************************!*\
  !*** ./src/app/eng/search/search-list/search-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchListComponent", function() { return SearchListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bus.service */ "ktTS");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util */ "1qT9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../t.pipe */ "oK4B");
/* harmony import */ var _unique_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../unique.pipe */ "DjSf");















function SearchListComponent_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](e_r6.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !e_r6.sortable);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 5, e_r6.label), " ");
} }
function SearchListComponent_ng_container_1_td_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const e_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](e_r6.render ? e_r6.render(element_r10) : element_r10[e_r6.field]);
} }
function SearchListComponent_ng_container_1_td_2_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const e_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", e_r6.image(element_r10), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function SearchListComponent_ng_container_1_td_2_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const e_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](e_r6.icon(element_r10));
} }
function SearchListComponent_ng_container_1_td_2_mat_checkbox_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-checkbox", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function SearchListComponent_ng_container_1_td_2_mat_checkbox_5_Template_mat_checkbox_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const e_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return e_r6.checkbox(element_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", element_r10.selected);
} }
function SearchListComponent_ng_container_1_td_2_mat_slide_toggle_6_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-slide-toggle", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function SearchListComponent_ng_container_1_td_2_mat_slide_toggle_6_Template_mat_slide_toggle_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const e_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return e_r6.toggle(element_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", element_r10.selected);
} }
function SearchListComponent_ng_container_1_td_2_div_7_button_1_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](action_r33.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", action_r33.icon, " ");
} }
function SearchListComponent_ng_container_1_td_2_div_7_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SearchListComponent_ng_container_1_td_2_div_7_button_1_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39); const action_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; action_r33.action(element_r10); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SearchListComponent_ng_container_1_td_2_div_7_button_1_mat_icon_1_Template, 2, 4, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](action_r33.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", action_r33.color)("disabled", action_r33.disable);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", action_r33.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](action_r33.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 10, action_r33.title));
} }
function SearchListComponent_ng_container_1_td_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SearchListComponent_ng_container_1_td_2_div_7_button_1_Template, 5, 12, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r33 = ctx.$implicit;
    const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", action_r33.condition && action_r33.condition(element_r10));
} }
function SearchListComponent_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SearchListComponent_ng_container_1_td_2_span_1_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SearchListComponent_ng_container_1_td_2_img_2_Template, 1, 1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SearchListComponent_ng_container_1_td_2_mat_icon_3_Template, 2, 1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SearchListComponent_ng_container_1_td_2_Template_div_click_4_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SearchListComponent_ng_container_1_td_2_mat_checkbox_5_Template, 1, 1, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SearchListComponent_ng_container_1_td_2_mat_slide_toggle_6_Template, 1, 1, "mat-slide-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SearchListComponent_ng_container_1_td_2_div_7_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    const e_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate2"]("", e_r6.classes, " ", ctx_r8.color_class ? ctx_r8.color_class(element_r10) : e_r6.classes, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !e_r6.actions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", e_r6.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", e_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", e_r6.checkbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", e_r6.toggle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", e_r6.actions);
} }
function SearchListComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SearchListComponent_ng_container_1_th_1_Template, 3, 7, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SearchListComponent_ng_container_1_td_2_Template, 8, 10, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const e_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matColumnDef", e_r6.label);
} }
function SearchListComponent_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 22);
} }
function SearchListComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SearchListComponent_tr_3_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r47); const row_r45 = ctx.$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r46.do_navigate(row_r45); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("pointer", ctx_r2.navigate);
} }
function SearchListComponent_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "no_data_found"));
} }
function SearchListComponent_mat_paginator_5_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-paginator", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("page", function SearchListComponent_mat_paginator_5_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r48.page_changed($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("length", ctx_r4.list[0].record_count)("pageSize", ctx_r4.params.limit)("hidePageSize", true)("pageIndex", ctx_r4.params.offset / ctx_r4.params.limit);
} }
function SearchListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "unique");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r5.list.length, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 2, ctx_r5.list, "id").length, "");
} }
class SearchListComponent {
    constructor(bus) {
        this.bus = bus;
        this.debug = false;
        this.list = [];
        this.params = { offset: 0, limit: 20 };
    }
    ngOnDestroy() {
        window.removeEventListener("scroll", this.scrollEventListener);
        this.bus.unsubscribe(this.service_name ? this.service_name + "_" + _bus_service__WEBPACK_IMPORTED_MODULE_1__["DO_SEARCH_EVENT"] : _bus_service__WEBPACK_IMPORTED_MODULE_1__["DO_SEARCH_EVENT"]);
        this.bus.unsubscribe(_bus_service__WEBPACK_IMPORTED_MODULE_1__["RELOAD_EVENT"]);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.scrollEventListener = (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return Object(_util__WEBPACK_IMPORTED_MODULE_2__["distance_from_bottom"])() == 0 && (yield this.incrementList()); })).bind(this);
            //window.addEventListener( "scroll", this.scrollEventListener )
            this.bus.subscribe(this.service_name ? this.service_name + "_" + _bus_service__WEBPACK_IMPORTED_MODULE_1__["DO_SEARCH_EVENT"] : _bus_service__WEBPACK_IMPORTED_MODULE_1__["DO_SEARCH_EVENT"], this.search.bind(this));
            this.bus.subscribe(_bus_service__WEBPACK_IMPORTED_MODULE_1__["RELOAD_EVENT"], this.search.bind(this));
        });
    }
    incrementList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.params.offset += this.params.limit;
            let aux = yield this.load(this.params);
            this.list = this.list.concat(aux);
            if (aux.length < this.params.limit) {
                window.removeEventListener("scroll", this.scrollEventListener);
            }
        });
    }
    search(event, params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.params = params;
            this.reset_params();
            this.list = yield this.load(params);
            if (!this.is_paginated()) {
                window.addEventListener("scroll", this.scrollEventListener);
            }
        });
    }
    sort(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.params.sort = e.active;
            this.params.direction = e.direction;
            this.search(e, this.params);
        });
    }
    table_fields() {
        return this.config.map(e => e.label);
    }
    do_navigate(row) {
        this.navigate && this.navigate(row);
    }
    reset_params() {
        var _a;
        this.params.offset = 0;
        this.params.limit = (_a = this.params.limit) !== null && _a !== void 0 ? _a : 20;
    }
    is_paginated() {
        return this.list && this.list[0] && this.params && this.list[0]["record_count"] > 0;
    }
    page_changed(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.params.offset = e.pageIndex * e.pageSize;
            this.params.limit = e.pageSize;
            this.list = yield this.load(this.params);
        });
    }
}
SearchListComponent.ɵfac = function SearchListComponent_Factory(t) { return new (t || SearchListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_bus_service__WEBPACK_IMPORTED_MODULE_1__["BusService"])); };
SearchListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SearchListComponent, selectors: [["app-search-list"]], inputs: { debug: "debug", load: "load", config: "config", navigate: "navigate", color_class: "color_class", service_name: "service_name" }, decls: 7, vars: 6, consts: [["mat-table", "", "aria-describedby", "table", "matSort", "", 2, "width", "100%", 3, "dataSource", "matSortChange"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "pointer", "click", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [3, "length", "pageSize", "hidePageSize", "pageIndex", "page", 4, "ngIf"], ["style", "position: fixed;bottom:20px;left:20px", 4, "ngIf"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 3, "disabled", "class", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "class", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 3, "disabled"], ["mat-cell", ""], [4, "ngIf"], ["alt", "logo", "style", "height: 48px;margin-top: 0.5em;", 3, "src", 4, "ngIf"], [3, "click"], [3, "checked", "change", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["alt", "logo", 2, "height", "48px", "margin-top", "0.5em", 3, "src"], [3, "checked", "change"], ["mat-flat-button", "", 3, "color", "class", "disabled", "click", 4, "ngIf"], ["mat-flat-button", "", 3, "color", "disabled", "click"], [3, "class", 4, "ngIf"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], [1, "mat-row"], ["colspan", "20", 1, "mat-cell", 2, "text-align", "center"], [3, "length", "pageSize", "hidePageSize", "pageIndex", "page"], [2, "position", "fixed", "bottom", "20px", "left", "20px"]], template: function SearchListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("matSortChange", function SearchListComponent_Template_table_matSortChange_0_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SearchListComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SearchListComponent_tr_2_Template, 1, 0, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SearchListComponent_tr_3_Template, 1, 2, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SearchListComponent_tr_4_Template, 4, 3, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SearchListComponent_mat_paginator_5_Template, 1, 4, "mat-paginator", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SearchListComponent_div_6_Template, 3, 5, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.list);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.table_fields());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.table_fields());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.is_paginated());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.debug);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatNoDataRow"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"]], pipes: [_t_pipe__WEBPACK_IMPORTED_MODULE_12__["TPipe"], _unique_pipe__WEBPACK_IMPORTED_MODULE_13__["UniquePipe"]], styles: [".red[_ngcontent-%COMP%] {\r\n  color: red !important;\r\n}\r\n\r\n.yellow[_ngcontent-%COMP%] {\r\n  color: yellow;\r\n}\r\n\r\n.green[_ngcontent-%COMP%] {\r\n  color: green;\r\n}\r\n\r\n.orange[_ngcontent-%COMP%] {\r\n  color: orange;\r\n}\r\n\r\n.checkbox[_ngcontent-%COMP%] {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.format[_ngcontent-%COMP%] {\r\n  padding-right: 5em;\r\n}\r\n\r\n.margin[_ngcontent-%COMP%] {\r\n  margin: 0em;\r\n}\r\n\r\n.red-row[_ngcontent-%COMP%] {\r\n  background-color: #ffbbbb;\r\n}\r\n\r\n.green-row[_ngcontent-%COMP%] {\r\n  background-color: #ddffdd;\r\n}\r\n\r\n.yellow-row[_ngcontent-%COMP%] {\r\n  background-color: #ffffdd;\r\n}\r\n\r\n.button-small-width[_ngcontent-%COMP%] {\r\n  width: 1%;\r\n}\r\n\r\n.mat-paginator[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-start !important;\r\n  padding-top: 0.5em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzZWFyY2gtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZCB7XHJcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ueWVsbG93IHtcclxuICBjb2xvcjogeWVsbG93O1xyXG59XHJcblxyXG4uZ3JlZW4ge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLm9yYW5nZSB7XHJcbiAgY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuLmNoZWNrYm94IHtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi5mb3JtYXQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVlbTtcclxufVxyXG5cclxuLm1hcmdpbiB7XHJcbiAgbWFyZ2luOiAwZW07XHJcbn1cclxuXHJcbi5yZWQtcm93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiYmJiO1xyXG59XHJcblxyXG4uZ3JlZW4tcm93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRmZmRkO1xyXG59XHJcblxyXG4ueWVsbG93LXJvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZkZDtcclxufVxyXG5cclxuLmJ1dHRvbi1zbWFsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDElO1xyXG59XHJcblxyXG4ubWF0LXBhZ2luYXRvciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogMC41ZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "rSYq":
/*!**************************************************************!*\
  !*** ./src/app/urgent-waybills/urgent-waybills.component.ts ***!
  \**************************************************************/
/*! exports provided: UrgentWaybillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrgentWaybillsComponent", function() { return UrgentWaybillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eng */ "eln0");
/* harmony import */ var _eng_add_bottomsheet_add_bottomsheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eng/add-bottomsheet/add-bottomsheet.component */ "w4iH");
/* harmony import */ var _role_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../role.guard */ "GQDE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _waybills_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../waybills.service */ "8DPT");
/* harmony import */ var _paper_date_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../paper-date.pipe */ "f0u3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _eng_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../eng/search/search.component */ "vV1p");












const _c0 = ["input_id"];
class UrgentWaybillsComponent {
    constructor(w, bus, date, sb, bs, t) {
        this.w = w;
        this.bus = bus;
        this.date = date;
        this.sb = sb;
        this.bs = bs;
        this.t = t;
        this.is_authorized = _role_guard__WEBPACK_IMPORTED_MODULE_3__["is_authorized"];
        this.config = {
            search_params: [
                {
                    label: "waybill",
                    field: "id_like",
                    text: "waybill_id"
                }, {
                    label: "created_at",
                    date: {
                        start: "created_start",
                        end: "created_end"
                    }
                }
            ],
            table_fields: [
                {
                    label: "waybill_id",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("id")
                }, {
                    label: "created_at",
                    render: (row) => this.date.transform(row.created_at, Object(_eng__WEBPACK_IMPORTED_MODULE_1__["screen_size"])() == "xs" ? "short" : "medium")
                }, {
                    label: "arrived_at",
                    render: (row) => this.date.transform(row.arrived_at, Object(_eng__WEBPACK_IMPORTED_MODULE_1__["screen_size"])() == "xs" ? "short" : "medium")
                }
            ],
            export_fields: [
                {
                    label: "waybill_id",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("id")
                }, {
                    label: "arrived_at",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("arrived_at")
                }, {
                    label: "created_at",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("created_at")
                }, {
                    label: "urgent",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("urgent")
                }
            ]
        };
        this.add_config = {
            input: [
                {
                    type: "text",
                    label: "waybill",
                    field: "waybill_id",
                    placeholder: "waybill_id"
                }
            ],
            createFn: this.create_waybill.bind(this),
            enableBtn: (params) => params.waybill_id
        };
        this.params = {
            sort: "created_at",
            direction: "desc",
            urgent: 'true',
            no_count: "true"
        };
    }
    ngOnInit() {
        this.bus.publish(_eng__WEBPACK_IMPORTED_MODULE_1__["PAGE_CHANGE"], "urgent-waybills");
    }
    load(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.w.list(params);
        });
    }
    create_waybill(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.w.post({ id: params.waybill_id, urgent: "true" });
            }
            catch (e) {
                this.openSnackbarDuplicateWaybill(params.waybill_id);
                console.log(e);
            }
        });
    }
    openBottomSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield (this.bs.open(_eng_add_bottomsheet_add_bottomsheet_component__WEBPACK_IMPORTED_MODULE_2__["AddBottomsheetComponent"], { data: this.add_config }).afterDismissed().toPromise());
            this.bus.publish(_eng__WEBPACK_IMPORTED_MODULE_1__["RELOAD_EVENT"], this.params);
        });
    }
    openSnackbarDuplicateWaybill(id) {
        this.sb.open(" LdV " + id + ": " + this.t.transform("duplicate_urgent_waybill"), "OK", { duration: 5000 });
    }
}
UrgentWaybillsComponent.ɵfac = function UrgentWaybillsComponent_Factory(t) { return new (t || UrgentWaybillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_waybills_service__WEBPACK_IMPORTED_MODULE_5__["WaybillsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_eng__WEBPACK_IMPORTED_MODULE_1__["BusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_paper_date_pipe__WEBPACK_IMPORTED_MODULE_6__["PaperDatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_eng__WEBPACK_IMPORTED_MODULE_1__["TPipe"])); };
UrgentWaybillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UrgentWaybillsComponent, selectors: [["app-urgent-waybills"]], viewQuery: function UrgentWaybillsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.input_id = _t.first);
    } }, decls: 2, vars: 5, consts: [["export_name", "urgent-waybills", 3, "config", "params", "load", "add_item", "show_add"]], template: function UrgentWaybillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", ctx.config)("params", ctx.params)("load", ctx.load.bind(ctx))("add_item", ctx.openBottomSheet.bind(ctx))("show_add", ctx.is_authorized("sender", "admin"));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _eng_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cmdlbnQtd2F5YmlsbHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "rZ6R":
/*!***************************************!*\
  !*** ./src/app/eng/authentication.ts ***!
  \***************************************/
/*! exports provided: Context, accessToken, user, logout, authenticate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accessToken", function() { return accessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticate", function() { return authenticate; });
class Context {
}
Context.value = "";
function accessToken(value = null) {
    if (value)
        localStorage.setItem(Context.value + "access_token", value);
    return localStorage.getItem(Context.value + 'access_token');
}
function user() {
    let access_token = accessToken();
    access_token = access_token.substring(access_token.indexOf('.') + 1, access_token.lastIndexOf('.'));
    access_token = atob(access_token);
    access_token = JSON.parse(access_token);
    return access_token;
}
function save_access_token(ids_url, client_id) {
    let url = window.location.href
        .substring(window.location.href.indexOf("#") + 1)
        .split("&")
        .reduce((r, e) => {
        r[e.split("=")[0]] = e.split("=")[1];
        return r;
    }, {});
    localStorage.setItem(Context.value + "id_token", url["id_token"]);
    accessToken(url["access_token"]);
    set_next_clear_time(ids_url, client_id);
}
function redirect_to_identity_server(ids_url, client_id) {
    let redirect = window.location.href.includes("#") ? window.location.href.substring(0, window.location.href.indexOf("#")) : window.location.href;
    window.location.href = ids_url + "?redirect_uri=" + redirect + "&client_id=" + client_id + "&response_type=token%20id_token&nonce=" + Math.random();
    //window.location.href = ids_url + "?redirect_uri=" + window.location.origin + baseHref + "&client_id=" + client_id + "&response_type=token%20id_token&nonce=" + Math.random()
}
function is_current_access_token_valid(ids_url, client_id, fake_token) {
    let access_token = accessToken();
    if (access_token == fake_token) {
        access_token = null;
        localStorage.removeItem(Context.value + "access_token");
    }
    if (!access_token) {
        return false;
    }
    set_next_clear_time(ids_url, client_id);
    return true;
}
function is_access_token_available_in_url() {
    return window.location.href.indexOf("access_token") != -1;
}
function set_next_clear_time(ids_url, client_id) {
    let access_token = user();
    let now = new Date().getTime() / 1000;
    let next_clear_time = access_token['exp'] - now;
    setTimeout(() => {
        localStorage.removeItem(Context.value + "id_token");
        localStorage.removeItem(Context.value + "access_token");
        redirect_to_identity_server(ids_url, client_id);
    }, next_clear_time * 1000);
}
function logout(logout_url, baseHref) {
    localStorage.removeItem(Context.value + "id_token");
    localStorage.removeItem(Context.value + "access_token");
    window.location.href = logout_url + "?redirect_uri=" + window.location.origin + baseHref;
}
function authenticate(ids_url, client_id, FAKE_TOKEN, fake_authentication = false) {
    if (fake_authentication == true) {
        console.warn("fake_authentication active");
        accessToken(FAKE_TOKEN);
        return;
    }
    if (!is_current_access_token_valid(ids_url, client_id, FAKE_TOKEN)) {
        if (is_access_token_available_in_url())
            save_access_token(ids_url, client_id);
        else
            redirect_to_identity_server(ids_url, client_id);
    }
}


/***/ }),

/***/ "tGw5":
/*!******************************!*\
  !*** ./src/app/eng/excel.ts ***!
  \******************************/
/*! exports provided: excel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "excel", function() { return excel; });
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_0__);

const EXCEL_EXTENSION = '.xlsx';
function excel(json, excelFileName, worksheetName, headers) {
    const worksheet = headers ? xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].json_to_sheet(json, { header: headers }) : xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].json_to_sheet(json);
    worksheet["!cols"] = calcColWidth(json);
    var wb = xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].book_new();
    xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].book_append_sheet(wb, worksheet, worksheetName);
    xlsx__WEBPACK_IMPORTED_MODULE_0__["writeFile"](wb, excelFileName + "." + timestamp() + EXCEL_EXTENSION);
}
function timestamp() {
    return new Date().toISOString();
}
function calcColWidth(json) {
    let width = [];
    let maxWidthPerKey = {};
    Object.keys(json[0]).forEach(k => maxWidthPerKey[k] = k.length);
    json.forEach(entry => {
        Object.keys(entry).forEach(k => {
            if (entry[k]) {
                entry[k].length > maxWidthPerKey[k] ? maxWidthPerKey[k] = entry[k].length : null;
            }
        });
    });
    Object.keys(maxWidthPerKey).forEach(k => width.push({ wch: maxWidthPerKey[k] }));
    return width;
}


/***/ }),

/***/ "uMRu":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eng */ "eln0");
/* harmony import */ var _role_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../role.guard */ "GQDE");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "K8Gv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _practices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../practices.service */ "Iy/B");
/* harmony import */ var _lists_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lists.service */ "AThM");
/* harmony import */ var _paper_date_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../paper-date.pipe */ "f0u3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _eng_search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../eng/search/search.component */ "vV1p");
/* harmony import */ var _eng_add_input_add_input_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../eng/add-input/add-input.component */ "X6hl");
/* harmony import */ var _eng_t_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../eng/t.pipe */ "oK4B");
















function ListComponent_div_0_mat_card_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-add-input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", "practice_id")("create", ctx_r1.create.bind(ctx_r1));
} }
function ListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ListComponent_div_0_mat_card_5_Template, 2, 2, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-search", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate5"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 10, "list_of_practices_for_list"), " ", " " + ctx_r0.list.id, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 12, "waybill"), " ", ctx_r0.list.waybill_id, " - Dealer ", ctx_r0.list.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.is_authorized("receiver", "admin"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", ctx_r0.config)("params", ctx_r0.params)("load", ctx_r0.load.bind(ctx_r0))("navigate", ctx_r0.navigate.bind(ctx_r0));
} }
class ListComponent {
    constructor(a, p, l, date, bus, router, sb, t) {
        this.a = a;
        this.p = p;
        this.l = l;
        this.date = date;
        this.bus = bus;
        this.router = router;
        this.sb = sb;
        this.t = t;
        this.is_authorized = _role_guard__WEBPACK_IMPORTED_MODULE_2__["is_authorized"];
        this.list = {};
        this.config = {
            search_params: [
                {
                    label: "practice_id",
                    field: "id_like",
                    text: "id"
                }, {
                    label: "created_at",
                    date: {
                        start: "created_start",
                        end: "created_end"
                    }
                }
            ],
            table_fields: [
                {
                    label: "practice_id",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("id")
                }, {
                    label: "created_at",
                    render: (row) => this.date.transform(row.created_at, Object(_eng__WEBPACK_IMPORTED_MODULE_1__["screen_size"])() == "xs" ? "short" : "medium")
                }, {
                    label: "arrived_at",
                    render: (row) => this.date.transform(row.arrived_at, Object(_eng__WEBPACK_IMPORTED_MODULE_1__["screen_size"])() == "xs" ? "short" : "medium")
                }
            ],
            export_fields: [
                {
                    label: "practice_id",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("id")
                }, {
                    label: "arrived_at",
                    render: (row) => this.date.transform(row.arrived_at, "medium")
                }, {
                    label: "created_at",
                    render: (row) => this.date.transform(row.created_at, "medium")
                }, {
                    label: "urgent",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("urgent")
                }
            ],
            color_class: (row) => Object(_util__WEBPACK_IMPORTED_MODULE_3__["get_color"])(row)
        };
        this.params = {
            sort: "arrived_at",
            direction: "desc",
            id_like: "",
            no_count: "true"
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.bus.publish(_eng__WEBPACK_IMPORTED_MODULE_1__["PAGE_CHANGE"], "list");
            this.list = yield this.l.get(this.a.snapshot.params.id);
        });
    }
    load(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let list = yield this.l.get(this.a.snapshot.params.id);
            params = Object.assign({}, params, { id_in: list["practice_id"] });
            return Object(_eng__WEBPACK_IMPORTED_MODULE_1__["is_empty"])(list["practice_id"]) ? [] : yield this.p.list(params);
        });
    }
    create(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let put = true;
            try {
                yield this.p.post({ id: id, arrived_at: true, urgent: this.list.urgent });
            }
            catch (error) {
                if (error.error.status == 409) {
                    yield this.p.put(id, { id: id, list_id: this.a.snapshot.params.id, arrived_at: true });
                    put = false;
                }
                if (error.error.status == 400) {
                    this.openSnackbarErrorMessage(id, error.error.message);
                    put = false;
                }
            }
            if (put) {
                yield this.p.put(id, { id: id, list_id: this.a.snapshot.params.id, arrived_at: true });
            }
            this.bus.publish(_eng__WEBPACK_IMPORTED_MODULE_1__["RELOAD_EVENT"], this.params);
        });
    }
    openSnackbarErrorMessage(id, message) {
        this.sb.open(this.t.transform("practice") + " " + id + ": " + this.t.transform(message), "OK", { duration: 5000 });
    }
    navigate(row) {
        this.router.navigate(["practices/" + row.id]);
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_practices_service__WEBPACK_IMPORTED_MODULE_6__["PracticesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_lists_service__WEBPACK_IMPORTED_MODULE_7__["ListsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_paper_date_pipe__WEBPACK_IMPORTED_MODULE_8__["PaperDatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_eng__WEBPACK_IMPORTED_MODULE_1__["BusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_eng__WEBPACK_IMPORTED_MODULE_1__["TPipe"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 1, vars: 1, consts: [["class", "xs-padding", 4, "ngIf"], [1, "xs-padding"], ["style", "margin-bottom: 1.5em;", 4, "ngIf"], ["export_name", "list", 3, "config", "params", "load", "navigate"], [2, "margin-bottom", "1.5em"], ["title", "add_practice", 2, "width", "100%", 3, "placeholder", "create"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ListComponent_div_0_Template, 8, 14, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _eng_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"], _eng_add_input_add_input_component__WEBPACK_IMPORTED_MODULE_13__["AddInputComponent"]], pipes: [_eng_t_pipe__WEBPACK_IMPORTED_MODULE_14__["TPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "ugWN":
/*!************************************************!*\
  !*** ./src/app/waybills/waybills.component.ts ***!
  \************************************************/
/*! exports provided: WaybillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaybillsComponent", function() { return WaybillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eng */ "eln0");
/* harmony import */ var _eng_confirmation_bottomsheet_confirmation_bottomsheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eng/confirmation-bottomsheet/confirmation-bottomsheet.component */ "RG15");
/* harmony import */ var _role_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../role.guard */ "GQDE");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util */ "K8Gv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _waybills_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../waybills.service */ "8DPT");
/* harmony import */ var _paper_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../paper-date.pipe */ "f0u3");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _eng_search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../eng/search/search.component */ "vV1p");
/* harmony import */ var _eng_add_input_add_input_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../eng/add-input/add-input.component */ "X6hl");















function WaybillsComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-add-input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("create", ctx_r0.create.bind(ctx_r0))("placeholder", "waybill");
} }
class WaybillsComponent {
    constructor(w, bus, date, bs, sb, t) {
        this.w = w;
        this.bus = bus;
        this.date = date;
        this.bs = bs;
        this.sb = sb;
        this.t = t;
        this.is_authorized = _role_guard__WEBPACK_IMPORTED_MODULE_3__["is_authorized"];
        this.config = {
            search_params: [
                {
                    label: "waybill",
                    field: "id_like",
                    text: "waybill_id"
                },
                {
                    label: "arrived_at",
                    date: {
                        start: "arrived_start",
                        end: "arrived_end"
                    }
                }, {
                    label: "urgent",
                    field: "urgent",
                    single_checkbox: {
                        label: "urgent_only"
                    }
                },
            ],
            table_fields: [
                {
                    label: "waybill_id",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("id")
                },
                {
                    label: "arrived_at",
                    render: (row) => this.date.transform(row.arrived_at, Object(_eng__WEBPACK_IMPORTED_MODULE_1__["screen_size"])() == "xs" ? "short" : "medium"),
                    sortable: true
                },
                {
                    label: "created_at",
                    render: (row) => this.date.transform(row.created_at, Object(_eng__WEBPACK_IMPORTED_MODULE_1__["screen_size"])() == "xs" ? "short" : "medium")
                },
                {
                    label: "urgent",
                    actions: [
                        {
                            title: "set_urgent",
                            action: (row) => this.openBottomSheetUrgentWaybill(row),
                            condition: (row) => Object(_role_guard__WEBPACK_IMPORTED_MODULE_3__["is_authorized"])('receiver', 'admin') && row.urgent == "false",
                            icon: "flag",
                            classes: "icon-btn-xs",
                            color: "accent"
                        }
                    ],
                    classes: Object(_role_guard__WEBPACK_IMPORTED_MODULE_3__["is_authorized"])('receiver', 'admin') ? " action-xs-col" : " hidden "
                }
            ],
            export_fields: [
                {
                    label: "waybill_id",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("id")
                }, {
                    label: "arrived_at",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("arrived_at")
                }, {
                    label: "created_at",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("created_at")
                }, {
                    label: "urgent",
                    render: Object(_eng__WEBPACK_IMPORTED_MODULE_1__["default_render"])("urgent")
                }
            ],
            color_class: (row) => Object(_util__WEBPACK_IMPORTED_MODULE_4__["get_color"])(row)
        };
        this.params = {
            sort: "arrived_at",
            direction: "desc",
            no_count: "true",
            arrived_is_not_null: Object(_role_guard__WEBPACK_IMPORTED_MODULE_3__["is_authorized"])('receiver', 'sender', 'admin', 'supervisor') ? 'true' : null
        };
        this.confirm_config_urgent = {
            title: "set_waybill_urgent",
            message: "waybill_urgent_confirm",
            confirm: {
                title: "yes",
                action: this.update.bind(this),
                classes: "double-line-button-left"
            },
            decline: {
                action: (_) => _,
                title: "no",
                classes: "double-line-button-right"
            },
            classes: "double-line-container"
        };
    }
    ngOnInit() {
        this.bus.publish(_eng__WEBPACK_IMPORTED_MODULE_1__["PAGE_CHANGE"], "waybills");
    }
    load(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!params.urgent) {
                delete params.urgent;
            }
            let list = yield this.w.list(params);
            list.forEach(e => e.selected = e.urgent == 'true');
            return list;
        });
    }
    create(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let put = true;
            try {
                yield this.w.post({ "id": id, arrived_at: true });
            }
            catch (error) {
                if (error.error.status == 409) {
                    yield this.w.put(id, { arrived_at: true });
                    put = false;
                }
                if (error.error.status == 400) {
                    this.openSnackbarErrorMessage(id, error.error.message);
                    put = false;
                }
            }
            if (put) {
                yield this.w.put(id, { arrived_at: true });
            }
            this.bus.publish(_eng__WEBPACK_IMPORTED_MODULE_1__["RELOAD_EVENT"], this.params);
        });
    }
    update(row) {
        this.w.put(row.id, { urgent: row.urgent == 'true' ? false : true });
        this.bus.publish(_eng__WEBPACK_IMPORTED_MODULE_1__["RELOAD_EVENT"], this.params);
    }
    openBottomSheetUrgentWaybill(row) {
        this.bs.open(_eng_confirmation_bottomsheet_confirmation_bottomsheet_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationBottomsheetComponent"], { data: { config: this.confirm_config_urgent, payload: row } });
    }
    openSnackbarErrorMessage(id, message) {
        this.sb.open(this.t.transform("waybill_id") + " " + id + ": " + this.t.transform(message), "OK", { duration: 5000 });
    }
    waybill_load(params) {
        return this.w.list(params);
    }
}
WaybillsComponent.ɵfac = function WaybillsComponent_Factory(t) { return new (t || WaybillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_waybills_service__WEBPACK_IMPORTED_MODULE_6__["WaybillsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_eng__WEBPACK_IMPORTED_MODULE_1__["BusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_paper_date_pipe__WEBPACK_IMPORTED_MODULE_7__["PaperDatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_eng__WEBPACK_IMPORTED_MODULE_1__["TPipe"])); };
WaybillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: WaybillsComponent, selectors: [["app-waybills"]], decls: 3, vars: 4, consts: [["style", "margin-bottom: 1.5em;", 4, "ngIf"], [2, "margin-top", "2em"], ["export_name", "waybills", 3, "config", "params", "load"], [2, "margin-bottom", "1.5em"], ["title", "add_waybill", 2, "width", "100%", 3, "create", "placeholder"]], template: function WaybillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, WaybillsComponent_mat_card_0_Template, 2, 2, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-search", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.is_authorized("receiver", "admin"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("config", ctx.config)("params", ctx.params)("load", ctx.load.bind(ctx));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _eng_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"], _eng_add_input_add_input_component__WEBPACK_IMPORTED_MODULE_13__["AddInputComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXliaWxscy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "vV1p":
/*!************************************************!*\
  !*** ./src/app/eng/search/search.component.ts ***!
  \************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bus.service */ "ktTS");
/* harmony import */ var _excel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../excel */ "tGw5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../t.pipe */ "oK4B");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config.service */ "Qa+r");
/* harmony import */ var _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-form/search-form.component */ "YO7S");
/* harmony import */ var _search_list_search_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-list/search-list.component */ "pDqz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













function SearchComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SearchComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.add_item(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class SearchComponent {
    constructor(bus, sb, t, configService) {
        this.bus = bus;
        this.sb = sb;
        this.t = t;
        this.configService = configService;
        this.export_name = "report";
        this.do_export = null;
    }
    ngOnDestroy() {
        this.bus.unsubscribe(_bus_service__WEBPACK_IMPORTED_MODULE_1__["DO_EXPORT_EVENT"]);
    }
    ngOnInit() {
        this.config.export_fields ? this.do_export = "true" : null;
        this.do_export ? this.bus.subscribe(_bus_service__WEBPACK_IMPORTED_MODULE_1__["DO_EXPORT_EVENT"], this.export.bind(this)) : null;
    }
    export() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sb.open(this.t.transform("export_limit", { LIMIT: this.configService.get("export_limit") }), "OK", { duration: 5000 });
            let aux = yield this.load(Object.assign({}, this.params, { limit: this.configService.get("export_limit"), offset: 0 }));
            aux = aux
                .map(e => this.renderObject(e))
                .map(e => this.exportObject(e))
                .map(e => this.translateObject(e));
            let headers = this.config.export_fields.map(e => this.t.transform(e.label));
            Object(_excel__WEBPACK_IMPORTED_MODULE_2__["excel"])(aux, this.export_name, this.export_name, headers);
        });
    }
    renameField(o, oldName, newName) {
        if (oldName == newName) {
            return o;
        }
        let result = Object.assign({}, o);
        result[newName] = result[oldName];
        delete result[oldName];
        return result;
    }
    translateObject(o) {
        let result = Object.assign({}, o);
        Object.keys(result).forEach(e => {
            result = this.renameField(result, e, this.t.transform(e));
        });
        return result;
    }
    exportObject(o) {
        return this.config.export_fields.reduce((r, e) => {
            r[e.label] = o[e.label];
            return r;
        }, {});
    }
    renderObject(o) {
        let result = Object.assign({}, o);
        this.config.export_fields.forEach(e => result[e.label] = e.render(result));
        return result;
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_bus_service__WEBPACK_IMPORTED_MODULE_1__["BusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_t_pipe__WEBPACK_IMPORTED_MODULE_5__["TPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], inputs: { config: "config", params: "params", load: "load", navigate: "navigate", add_item: "add_item", show_add: "show_add", export_name: "export_name", service_name: "service_name" }, decls: 3, vars: 10, consts: [[3, "config", "params", "do_export", "service_name"], [3, "load", "config", "navigate", "color_class", "service_name"], ["mat-fab", "", "style", "position: fixed; right: 1em; bottom: 1em;", "color", "accent", 3, "click", 4, "ngIf"], ["mat-fab", "", "color", "accent", 2, "position", "fixed", "right", "1em", "bottom", "1em", 3, "click"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-search-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-search-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SearchComponent_button_2_Template, 3, 0, "button", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config.search_params)("params", ctx.params)("do_export", ctx.do_export)("service_name", ctx.service_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("load", ctx.load)("config", ctx.config.table_fields)("navigate", ctx.navigate)("color_class", ctx.config.color_class)("service_name", ctx.service_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show_add);
    } }, directives: [_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_7__["SearchFormComponent"], _search_list_search_list_component__WEBPACK_IMPORTED_MODULE_8__["SearchListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eng */ "eln0");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "uMRu");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lists/lists.component */ "hnRM");
/* harmony import */ var _practice_practice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./practice/practice.component */ "ETPP");
/* harmony import */ var _practices_practices_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./practices/practices.component */ "g/oH");
/* harmony import */ var _role_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./role.guard */ "GQDE");
/* harmony import */ var _urgent_practices_urgent_practices_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./urgent-practices/urgent-practices.component */ "KVg+");
/* harmony import */ var _urgent_waybills_urgent_waybills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./urgent-waybills/urgent-waybills.component */ "rSYq");
/* harmony import */ var _waybills_waybills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./waybills/waybills.component */ "ugWN");
/* harmony import */ var _eng_audits_audit_audit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./eng/audits/audit/audit.component */ "V1L6");
/* harmony import */ var _eng_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./eng/unauthorized/unauthorized.component */ "PtTA");
/* harmony import */ var _eng_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./eng/error-page/error-page.component */ "0sXK");
/* harmony import */ var _requests_requests_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./requests/requests.component */ "0yay");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");

















const routes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"], canActivate: [_role_guard__WEBPACK_IMPORTED_MODULE_7__["RoleGuard"]] },
    { path: 'waybills', component: _waybills_waybills_component__WEBPACK_IMPORTED_MODULE_10__["WaybillsComponent"], canActivate: [_role_guard__WEBPACK_IMPORTED_MODULE_7__["RoleGuard"]] },
    { path: 'lists', component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_4__["ListsComponent"], canActivate: [_role_guard__WEBPACK_IMPORTED_MODULE_7__["RoleGuard"]] },
    { path: 'audits', component: _eng__WEBPACK_IMPORTED_MODULE_2__["AuditsComponent"], canActivate: [_role_guard__WEBPACK_IMPORTED_MODULE_7__["RoleGuard"]] },
    { path: 'audits/:id', component: _eng_audits_audit_audit_component__WEBPACK_IMPORTED_MODULE_11__["AuditComponent"], canActivate: [_role_guard__WEBPACK_IMPORTED_MODULE_7__["RoleGuard"]] },
    { path: 'audit-report', component: _eng__WEBPACK_IMPORTED_MODULE_2__["AuditReportComponent"], canActivate: [_role_guard__WEBPACK_IMPORTED_MODULE_7__["RoleGuard"]] },
    { path: 'practices/urgent', component: _urgent_practices_urgent_practices_component__WEBPACK_IMPORTED_MODULE_8__["UrgentPracticesComponent"], canActivate: [_role_guard__WEBPACK_IMPORTED_MODULE_7__["RoleGuard"]] },
    { path: 'practices', component: _practices_practices_component__WEBPACK_IMPORTED_MODULE_6__["PracticesComponent"], canActivate: [_role_guard__WEBPACK_IMPORTED_MODULE_7__["RoleGuard"]] },
    { path: 'practices/:id', component: _practice_practice_component__WEBPACK_IMPORTED_MODULE_5__["PracticeComponent"], canActivate: [_role_guard__WEBPACK_IMPORTED_MODULE_7__["RoleGuard"]] },
    { path: 'requests', component: _requests_requests_component__WEBPACK_IMPORTED_MODULE_14__["RequestsComponent"], canActivate: [_role_guard__WEBPACK_IMPORTED_MODULE_7__["RoleGuard"]] },
    { path: 'lists/:id', component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], canActivate: [_role_guard__WEBPACK_IMPORTED_MODULE_7__["RoleGuard"]] },
    { path: 'waybills/urgent', component: _urgent_waybills_urgent_waybills_component__WEBPACK_IMPORTED_MODULE_9__["UrgentWaybillsComponent"], canActivate: [_role_guard__WEBPACK_IMPORTED_MODULE_7__["RoleGuard"]] },
    { path: 'unauthorized', component: _eng_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_12__["UnauthorizedComponent"] },
    { path: 'server-error', component: _eng_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_13__["ErrorPageComponent"] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "w4iH":
/*!******************************************************************!*\
  !*** ./src/app/eng/add-bottomsheet/add-bottomsheet.component.ts ***!
  \******************************************************************/
/*! exports provided: AddBottomsheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBottomsheetComponent", function() { return AddBottomsheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../autocomplete/autocomplete.component */ "8+y4");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../t.pipe */ "oK4B");














const _c0 = ["input_ref"];
function AddBottomsheetComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r0.config.title));
} }
function AddBottomsheetComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddBottomsheetComponent_div_1_div_1_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const input_field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r8.params[input_field_r2.field] = $event); })("keyup.enter", function AddBottomsheetComponent_div_1_div_1_Template_input_keyup_enter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.create(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 3, input_field_r2.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 5, input_field_r2.placeholder));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.params[input_field_r2.field]);
} }
function AddBottomsheetComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-autocomplete", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("inputChange", function AddBottomsheetComponent_div_1_div_2_Template_app_autocomplete_inputChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const input_field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r13.params[input_field_r2.field] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", input_field_r2.config)("input", ctx_r4.params[input_field_r2.field]);
} }
function AddBottomsheetComponent_div_1_div_3_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", e_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, e_r18), " ");
} }
function AddBottomsheetComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddBottomsheetComponent_div_1_div_3_Template_mat_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const input_field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r19.params[input_field_r2.field] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " . . . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AddBottomsheetComponent_div_1_div_3_mat_option_6_Template, 3, 4, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, input_field_r2.placeholder));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r5.params[input_field_r2.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", input_field_r2.options);
} }
function AddBottomsheetComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-slide-toggle", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AddBottomsheetComponent_div_1_div_4_Template_mat_slide_toggle_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const input_field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.toggle(input_field_r2.field); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r6.params[input_field_r2.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, input_field_r2.label), "");
} }
function AddBottomsheetComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddBottomsheetComponent_div_1_div_1_Template, 8, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AddBottomsheetComponent_div_1_div_2_Template, 2, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AddBottomsheetComponent_div_1_div_3_Template, 7, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AddBottomsheetComponent_div_1_div_4_Template, 4, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_field_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", input_field_r2.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", input_field_r2.type == "autocomplete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", input_field_r2.type == "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", input_field_r2.type == "toggle");
} }
class AddBottomsheetComponent {
    constructor(config, _bottomSheetRef) {
        this.config = config;
        this._bottomSheetRef = _bottomSheetRef;
        this.params = {};
    }
    ngOnInit() {
    }
    isDisabled(params) {
        return this.config.enableBtn ? !this.config.enableBtn(params) : false;
    }
    create() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.config.createFn(this.params);
            if (this.config.focus) {
                this.input_field.nativeElement.focus();
            }
            else {
                this._bottomSheetRef.dismiss();
            }
        });
    }
    toggle(k) {
        this.params[k] = !this.params[k];
    }
}
AddBottomsheetComponent.ɵfac = function AddBottomsheetComponent_Factory(t) { return new (t || AddBottomsheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"])); };
AddBottomsheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddBottomsheetComponent, selectors: [["app-add-bottomsheet"]], viewQuery: function AddBottomsheetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.input_field = _t.first);
    } }, decls: 6, vars: 6, consts: [["style", "display: inline; margin-bottom: 3em;", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "double-line-container"], ["mat-raised-button", "", "color", "primary", 1, "single-line-button", 3, "disabled", "click"], [2, "display", "inline", "margin-bottom", "3em"], [4, "ngIf"], ["appearance", "legacy", 2, "width", "100%"], ["matInput", "", 3, "ngModel", "placeholder", "ngModelChange", "keyup.enter"], ["input_ref", ""], [3, "config", "input", "inputChange"], [2, "padding-right", "1em", "width", "100%"], [3, "ngModel", "placeholder", "ngModelChange"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [2, "padding-right", "1em", "width", "100%", 3, "checked", "change"]], template: function AddBottomsheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AddBottomsheetComponent_h2_0_Template, 3, 3, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddBottomsheetComponent_div_1_Template, 5, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddBottomsheetComponent_Template_button_click_3_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.config.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.config.input);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("disabled", ctx.isDisabled(ctx.params));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 4, "submit"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_8__["AutocompleteComponent"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggle"]], pipes: [_t_pipe__WEBPACK_IMPORTED_MODULE_12__["TPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYm90dG9tc2hlZXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map