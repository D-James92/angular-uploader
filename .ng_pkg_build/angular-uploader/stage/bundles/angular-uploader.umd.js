(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('angular-uploader', ['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['angular-uploader'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-header',
                template: "<h1>\n  <ng-content></ng-content>\n</h1>",
                styles: ["h1{color:green}"]
            },] },
];
HeaderComponent.ctorParameters = function () { return []; };
var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [HeaderComponent],
                exports: [
                    HeaderComponent
                ]
            },] },
];

exports.HeaderModule = HeaderModule;
exports.ɵa = HeaderComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-uploader.umd.js.map
