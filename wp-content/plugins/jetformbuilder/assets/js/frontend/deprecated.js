/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/deprecated/main.js":
/*!*************************************!*\
  !*** ./frontend/deprecated/main.js ***!
  \*************************************/
/***/ (() => {

eval("window.JetFormBuilderMain = {\n  filters: function () {\n    var callbacks = {};\n    return {\n      addFilter: function addFilter(name, callback) {\n        if (Boolean(window.JetFormBuilderSettings.devmode)) {\n          console.warn(\"This method is deprecated since JetFormBuilder 3.0.0. \\nUse JetPlugins.hooks.addFilter instead.\");\n        }\n        if (!callbacks.hasOwnProperty(name)) {\n          callbacks[name] = [];\n        }\n        callbacks[name].push(callback);\n      },\n      applyFilters: function applyFilters(name, value, args) {\n        if (!callbacks.hasOwnProperty(name)) {\n          return value;\n        }\n        if (args === undefined) {\n          args = [];\n        }\n        var container = callbacks[name];\n        var cbLen = container.length;\n        for (var i = 0; i < cbLen; i++) {\n          if (typeof container[i] === 'function') {\n            value = container[i](value, args);\n          }\n        }\n        return value;\n      }\n    };\n  }()\n};\nwindow.JetFormBuilder = {\n  getFieldValue: function getFieldValue($field) {\n    var value = $field.val();\n    return JetFormBuilderMain.filters.applyFilters('forms/calculated-field-value', value, $field);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9kZXByZWNhdGVkL21haW4uanMuanMiLCJuYW1lcyI6WyJ3aW5kb3ciLCJKZXRGb3JtQnVpbGRlck1haW4iLCJmaWx0ZXJzIiwiY2FsbGJhY2tzIiwiYWRkRmlsdGVyIiwibmFtZSIsImNhbGxiYWNrIiwiQm9vbGVhbiIsIkpldEZvcm1CdWlsZGVyU2V0dGluZ3MiLCJkZXZtb2RlIiwiY29uc29sZSIsIndhcm4iLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJhcHBseUZpbHRlcnMiLCJ2YWx1ZSIsImFyZ3MiLCJ1bmRlZmluZWQiLCJjb250YWluZXIiLCJjYkxlbiIsImxlbmd0aCIsImkiLCJKZXRGb3JtQnVpbGRlciIsImdldEZpZWxkVmFsdWUiLCIkZmllbGQiLCJ2YWwiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Zyb250ZW5kL2RlcHJlY2F0ZWQvbWFpbi5qcz9hODQ5Il0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5KZXRGb3JtQnVpbGRlck1haW4gPSB7XHJcblxyXG5cdGZpbHRlcnM6IChcclxuXHRcdGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdHZhciBjYWxsYmFja3MgPSB7fTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblxyXG5cdFx0XHRcdGFkZEZpbHRlcjogZnVuY3Rpb24gKCBuYW1lLCBjYWxsYmFjayApIHtcclxuXHRcdFx0XHRcdGlmICggQm9vbGVhbiggd2luZG93LkpldEZvcm1CdWlsZGVyU2V0dGluZ3MuZGV2bW9kZSApICkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oXHJcblx0XHRcdFx0XHRcdFx0YFRoaXMgbWV0aG9kIGlzIGRlcHJlY2F0ZWQgc2luY2UgSmV0Rm9ybUJ1aWxkZXIgMy4wLjAuIFxyXG5Vc2UgSmV0UGx1Z2lucy5ob29rcy5hZGRGaWx0ZXIgaW5zdGVhZC5gLFxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmICggIWNhbGxiYWNrcy5oYXNPd25Qcm9wZXJ0eSggbmFtZSApICkge1xyXG5cdFx0XHRcdFx0XHRjYWxsYmFja3NbIG5hbWUgXSA9IFtdO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGNhbGxiYWNrc1sgbmFtZSBdLnB1c2goIGNhbGxiYWNrICk7XHJcblxyXG5cdFx0XHRcdH0sXHJcblxyXG5cdFx0XHRcdGFwcGx5RmlsdGVyczogZnVuY3Rpb24gKCBuYW1lLCB2YWx1ZSwgYXJncyApIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoICFjYWxsYmFja3MuaGFzT3duUHJvcGVydHkoIG5hbWUgKSApIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmICggYXJncyA9PT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRcdFx0XHRhcmdzID0gW107XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dmFyIGNvbnRhaW5lciA9IGNhbGxiYWNrc1sgbmFtZSBdO1xyXG5cdFx0XHRcdFx0dmFyIGNiTGVuICAgICA9IGNvbnRhaW5lci5sZW5ndGg7XHJcblxyXG5cdFx0XHRcdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgY2JMZW47IGkrKyApIHtcclxuXHRcdFx0XHRcdFx0aWYgKCB0eXBlb2YgY29udGFpbmVyWyBpIF0gPT09ICdmdW5jdGlvbicgKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFsdWUgPSBjb250YWluZXJbIGkgXSggdmFsdWUsIGFyZ3MgKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcclxuXHRcdFx0XHR9LFxyXG5cclxuXHRcdFx0fTtcclxuXHJcblx0XHR9XHJcblx0KSgpLFxyXG5cclxufTtcclxuXHJcbndpbmRvdy5KZXRGb3JtQnVpbGRlciA9IHtcclxuXHRnZXRGaWVsZFZhbHVlKCAkZmllbGQgKSB7XHJcblx0XHRjb25zdCB2YWx1ZSA9ICRmaWVsZC52YWwoKTtcclxuXHJcblx0XHRyZXR1cm4gSmV0Rm9ybUJ1aWxkZXJNYWluLmZpbHRlcnMuYXBwbHlGaWx0ZXJzKFxyXG5cdFx0XHQnZm9ybXMvY2FsY3VsYXRlZC1maWVsZC12YWx1ZScsXHJcblx0XHRcdHZhbHVlLFxyXG5cdFx0XHQkZmllbGQsXHJcblx0XHQpO1xyXG5cdH0sXHJcbn07Il0sIm1hcHBpbmdzIjoiQUFBQUEsTUFBTSxDQUFDQyxrQkFBa0IsR0FBRztFQUUzQkMsT0FBTyxFQUNOLFlBQVk7SUFFWCxJQUFJQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBRWxCLE9BQU87TUFFTkMsU0FBUyxFQUFFLG1CQUFXQyxJQUFJLEVBQUVDLFFBQVEsRUFBRztRQUN0QyxJQUFLQyxPQUFPLENBQUVQLE1BQU0sQ0FBQ1Esc0JBQXNCLENBQUNDLE9BQU8sQ0FBRSxFQUFHO1VBQ3ZEQyxPQUFPLENBQUNDLElBQUksbUdBR1g7UUFDRjtRQUVBLElBQUssQ0FBQ1IsU0FBUyxDQUFDUyxjQUFjLENBQUVQLElBQUksQ0FBRSxFQUFHO1VBQ3hDRixTQUFTLENBQUVFLElBQUksQ0FBRSxHQUFHLEVBQUU7UUFDdkI7UUFFQUYsU0FBUyxDQUFFRSxJQUFJLENBQUUsQ0FBQ1EsSUFBSSxDQUFFUCxRQUFRLENBQUU7TUFFbkMsQ0FBQztNQUVEUSxZQUFZLEVBQUUsc0JBQVdULElBQUksRUFBRVUsS0FBSyxFQUFFQyxJQUFJLEVBQUc7UUFFNUMsSUFBSyxDQUFDYixTQUFTLENBQUNTLGNBQWMsQ0FBRVAsSUFBSSxDQUFFLEVBQUc7VUFDeEMsT0FBT1UsS0FBSztRQUNiO1FBRUEsSUFBS0MsSUFBSSxLQUFLQyxTQUFTLEVBQUc7VUFDekJELElBQUksR0FBRyxFQUFFO1FBQ1Y7UUFFQSxJQUFJRSxTQUFTLEdBQUdmLFNBQVMsQ0FBRUUsSUFBSSxDQUFFO1FBQ2pDLElBQUljLEtBQUssR0FBT0QsU0FBUyxDQUFDRSxNQUFNO1FBRWhDLEtBQU0sSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRixLQUFLLEVBQUVFLENBQUMsRUFBRSxFQUFHO1VBQ2pDLElBQUssT0FBT0gsU0FBUyxDQUFFRyxDQUFDLENBQUUsS0FBSyxVQUFVLEVBQUc7WUFDM0NOLEtBQUssR0FBR0csU0FBUyxDQUFFRyxDQUFDLENBQUUsQ0FBRU4sS0FBSyxFQUFFQyxJQUFJLENBQUU7VUFDdEM7UUFDRDtRQUVBLE9BQU9ELEtBQUs7TUFDYjtJQUVELENBQUM7RUFFRixDQUFDO0FBR0gsQ0FBQztBQUVEZixNQUFNLENBQUNzQixjQUFjLEdBQUc7RUFDdkJDLGFBQWEseUJBQUVDLE1BQU0sRUFBRztJQUN2QixJQUFNVCxLQUFLLEdBQUdTLE1BQU0sQ0FBQ0MsR0FBRyxFQUFFO0lBRTFCLE9BQU94QixrQkFBa0IsQ0FBQ0MsT0FBTyxDQUFDWSxZQUFZLENBQzdDLDhCQUE4QixFQUM5QkMsS0FBSyxFQUNMUyxNQUFNLENBQ047RUFDRjtBQUNELENBQUMifQ==\n//# sourceURL=webpack-internal:///./frontend/deprecated/main.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./frontend/deprecated/main.js"]();
/******/ 	
/******/ })()
;