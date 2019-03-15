(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/aurelia-dialog/dist/native-modules/resources/ux-dialog-header.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/aurelia-dialog/dist/native-modules/resources/ux-dialog-header.js ***!
  \***************************************************************************************/
/*! exports provided: UxDialogHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UxDialogHeader\", function() { return UxDialogHeader; });\n/* harmony import */ var _dialog_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dialog-controller */ \"./node_modules/aurelia-dialog/dist/native-modules/dialog-controller.js\");\n\nvar UxDialogHeader = /** @class */ (function () {\n    function UxDialogHeader(controller) {\n        this.controller = controller;\n    }\n    UxDialogHeader.prototype.bind = function () {\n        if (typeof this.showCloseButton !== 'boolean') {\n            this.showCloseButton = !this.controller.settings.lock;\n        }\n    };\n    /**\n     * @internal\n     */\n    // tslint:disable-next-line:member-ordering\n    UxDialogHeader.inject = [_dialog_controller__WEBPACK_IMPORTED_MODULE_0__[\"DialogController\"]];\n    /**\n     * @internal\n     */\n    // tslint:disable-next-line:member-ordering\n    UxDialogHeader.$view = \"<template>\\n    <button\\n      type=\\\"button\\\"\\n      class=\\\"dialog-close\\\"\\n      aria-label=\\\"Close\\\"\\n      if.bind=\\\"showCloseButton\\\"\\n      click.trigger=\\\"controller.cancel()\\\">\\n      <span aria-hidden=\\\"true\\\">&times;</span>\\n    </button>\\n\\n    <div class=\\\"dialog-header-content\\\">\\n      <slot></slot>\\n    </div>\\n  </template>\";\n    /**\n     * @internal\n     */\n    // tslint:disable-next-line:member-ordering\n    UxDialogHeader.$resource = {\n        name: 'ux-dialog-header',\n        bindables: ['showCloseButton']\n    };\n    return UxDialogHeader;\n}());\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYXVyZWxpYS1kaWFsb2cvZGlzdC9uYXRpdmUtbW9kdWxlcy9yZXNvdXJjZXMvdXgtZGlhbG9nLWhlYWRlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hdXJlbGlhLWRpYWxvZy9kaXN0L25hdGl2ZS1tb2R1bGVzL3Jlc291cmNlcy91eC1kaWFsb2ctaGVhZGVyLmpzPzM5NzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlhbG9nQ29udHJvbGxlciB9IGZyb20gJy4uL2RpYWxvZy1jb250cm9sbGVyJztcbnZhciBVeERpYWxvZ0hlYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBVeERpYWxvZ0hlYWRlcihjb250cm9sbGVyKSB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgfVxuICAgIFV4RGlhbG9nSGVhZGVyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuc2hvd0Nsb3NlQnV0dG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0Nsb3NlQnV0dG9uID0gIXRoaXMuY29udHJvbGxlci5zZXR0aW5ncy5sb2NrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWVtYmVyLW9yZGVyaW5nXG4gICAgVXhEaWFsb2dIZWFkZXIuaW5qZWN0ID0gW0RpYWxvZ0NvbnRyb2xsZXJdO1xuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptZW1iZXItb3JkZXJpbmdcbiAgICBVeERpYWxvZ0hlYWRlci4kdmlldyA9IFwiPHRlbXBsYXRlPlxcbiAgICA8YnV0dG9uXFxuICAgICAgdHlwZT1cXFwiYnV0dG9uXFxcIlxcbiAgICAgIGNsYXNzPVxcXCJkaWFsb2ctY2xvc2VcXFwiXFxuICAgICAgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiXFxuICAgICAgaWYuYmluZD1cXFwic2hvd0Nsb3NlQnV0dG9uXFxcIlxcbiAgICAgIGNsaWNrLnRyaWdnZXI9XFxcImNvbnRyb2xsZXIuY2FuY2VsKClcXFwiPlxcbiAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcbiAgICA8L2J1dHRvbj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZGlhbG9nLWhlYWRlci1jb250ZW50XFxcIj5cXG4gICAgICA8c2xvdD48L3Nsb3Q+XFxuICAgIDwvZGl2PlxcbiAgPC90ZW1wbGF0ZT5cIjtcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWVtYmVyLW9yZGVyaW5nXG4gICAgVXhEaWFsb2dIZWFkZXIuJHJlc291cmNlID0ge1xuICAgICAgICBuYW1lOiAndXgtZGlhbG9nLWhlYWRlcicsXG4gICAgICAgIGJpbmRhYmxlczogWydzaG93Q2xvc2VCdXR0b24nXVxuICAgIH07XG4gICAgcmV0dXJuIFV4RGlhbG9nSGVhZGVyO1xufSgpKTtcbmV4cG9ydCB7IFV4RGlhbG9nSGVhZGVyIH07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/aurelia-dialog/dist/native-modules/resources/ux-dialog-header.js\n");

/***/ })

}]);