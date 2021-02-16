webpackHotUpdate_N_E("pages/budget",{

/***/ "./components/Chart.jsx":
/*!******************************!*\
  !*** ./components/Chart.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var anychart_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! anychart-react */ \"./node_modules/anychart-react/dist/anychart-react.min.js\");\n/* harmony import */ var anychart_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(anychart_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/brian/Desktop/HRR50/REALMVP/components/Chart.jsx\",\n    _this = undefined;\n\n // import axios from 'axios';\n// import ChartItem from './ChartItem';\n\n\n\nvar Chart = function Chart(props) {\n  console.log(props);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: [props.budget.name, \"'s Budget\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: [\"Total Monthly Income: $\", props.budget.income]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(anychart_react__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      width: 800,\n      height: 700,\n      type: \"pie\",\n      data: [{\n        x: \"Rent/ Morgage: $\".concat(props.budget.rent),\n        value: props.budget.rent\n      }, {\n        x: \"Utilities: $\".concat(props.budget.util),\n        value: props.budget.util\n      }, {\n        x: \"Car Payment: $\".concat(props.budget.car),\n        value: props.budget.car\n      }, {\n        x: \"Other: $\".concat(props.budget.other),\n        value: props.budget.other\n      } // {x: `Unspent: $${this.state.income - this.state.rent - this.state.utils - this.state.car - this.state.other}`, value: unspent}\n      ]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Chart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart); // export default function Chart() {\n//   const [budgets, setBudget] = useState([]);\n//   useEffect(() => {\n//     axios.get('/api/budget')\n//       .then(res => {\n//         setBudget(res.data);\n//       })\n//       .catch((err) => console.log(err));\n//   });\n//   return (\n//     <ul>{budgets.map(budget => \n//       <ChartItem budget={budget} />\n//     )}</ul>\n//   );\n// }\n// export default class Chart extends React.Component {\n//   constructor(props) {\n//     super(props);\n//     this.state = {};\n//   }\n//   componentDidMount() {\n//     axios.get('/api/budget')\n//       .then(resp => {\n//         console.log(resp.data[0]);\n//         this.setState(resp.data[0]);\n//       });\n//   }\n//   render() {\n//     let rent = (this.state.rent / this.state.income) * 100;\n//     let util = (this.state.utils / this.state.income) * 100;\n//     let car = (this.state.car / this.state.income) * 100;\n//     let other = (this.state.other / this.state.income) * 100;\n//     let unspent = ((this.state.income - this.state.rent - this.state.utils - this.state.car - this.state.other) / this.state.income) * 100;\n//     console.log('PERCENT', unspent);\n//     return (\n//       <div>\n//         <h2>{this.state.name}'s Budget</h2>\n//         <h3>Total Monthly Income: ${this.state.income}</h3>\n//         <AnyChart \n//           width={800}\n//           height={600}\n//           type=\"pie\"\n//           data={[\n//             {x: `Rent/ Morgage: $${this.state.rent}`, value: rent},\n//             {x: `Utilities: $${this.state.utils}`, value: util},\n//             {x: `Car Payment: $${this.state.car}`, value: car},\n//             {x: `Other: $${this.state.other}`, value: other},\n//             {x: `Unspent: $${this.state.income - this.state.rent - this.state.utils - this.state.car - this.state.other}`, value: unspent}\n//           ]}\n//         />\n//       </div>\n//     );\n//   }\n// }\n\nvar _c;\n\n$RefreshReg$(_c, \"Chart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFydC5qc3g/YzFjNiJdLCJuYW1lcyI6WyJDaGFydCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImJ1ZGdldCIsIm5hbWUiLCJpbmNvbWUiLCJ4IiwicmVudCIsInZhbHVlIiwidXRpbCIsImNhciIsIm90aGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Q0FDQTtBQUVBOztBQUNBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUN2QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsaUJBQUtBLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUEsNENBQTRCSixLQUFLLENBQUNHLE1BQU4sQ0FBYUUsTUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSxxRUFBQyxxREFBRDtBQUNFLFdBQUssRUFBRSxHQURUO0FBRUUsWUFBTSxFQUFFLEdBRlY7QUFHRSxVQUFJLEVBQUMsS0FIUDtBQUlFLFVBQUksRUFBRSxDQUNKO0FBQUNDLFNBQUMsNEJBQXFCTixLQUFLLENBQUNHLE1BQU4sQ0FBYUksSUFBbEMsQ0FBRjtBQUE0Q0MsYUFBSyxFQUFFUixLQUFLLENBQUNHLE1BQU4sQ0FBYUk7QUFBaEUsT0FESSxFQUVKO0FBQUNELFNBQUMsd0JBQWlCTixLQUFLLENBQUNHLE1BQU4sQ0FBYU0sSUFBOUIsQ0FBRjtBQUF3Q0QsYUFBSyxFQUFFUixLQUFLLENBQUNHLE1BQU4sQ0FBYU07QUFBNUQsT0FGSSxFQUdKO0FBQUNILFNBQUMsMEJBQW1CTixLQUFLLENBQUNHLE1BQU4sQ0FBYU8sR0FBaEMsQ0FBRjtBQUF5Q0YsYUFBSyxFQUFFUixLQUFLLENBQUNHLE1BQU4sQ0FBYU87QUFBN0QsT0FISSxFQUlKO0FBQUNKLFNBQUMsb0JBQWFOLEtBQUssQ0FBQ0csTUFBTixDQUFhUSxLQUExQixDQUFGO0FBQXFDSCxhQUFLLEVBQUVSLEtBQUssQ0FBQ0csTUFBTixDQUFhUTtBQUF6RCxPQUpJLENBS0o7QUFMSTtBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtCRCxDQXBCRDs7S0FBTVosSztBQXFCU0Esb0VBQWYsRSxDQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2hhcnQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vLyBpbXBvcnQgQ2hhcnRJdGVtIGZyb20gJy4vQ2hhcnRJdGVtJztcbmltcG9ydCBBbnlDaGFydCBmcm9tICdhbnljaGFydC1yZWFjdCc7XG5jb25zdCBDaGFydCA9IChwcm9wcykgPT4ge1xuICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gIHJldHVybiAoXG4gICAgPGxpPlxuICAgICAgPGgxPntwcm9wcy5idWRnZXQubmFtZX0ncyBCdWRnZXQ8L2gxPlxuICAgICAgPGgzPlRvdGFsIE1vbnRobHkgSW5jb21lOiAke3Byb3BzLmJ1ZGdldC5pbmNvbWV9PC9oMz5cbiAgICAgIDxBbnlDaGFydCBcbiAgICAgICAgd2lkdGg9ezgwMH1cbiAgICAgICAgaGVpZ2h0PXs3MDB9XG4gICAgICAgIHR5cGU9XCJwaWVcIlxuICAgICAgICBkYXRhPXtbXG4gICAgICAgICAge3g6IGBSZW50LyBNb3JnYWdlOiAkJHtwcm9wcy5idWRnZXQucmVudH1gLCB2YWx1ZTogcHJvcHMuYnVkZ2V0LnJlbnR9LFxuICAgICAgICAgIHt4OiBgVXRpbGl0aWVzOiAkJHtwcm9wcy5idWRnZXQudXRpbH1gLCB2YWx1ZTogcHJvcHMuYnVkZ2V0LnV0aWx9LFxuICAgICAgICAgIHt4OiBgQ2FyIFBheW1lbnQ6ICQke3Byb3BzLmJ1ZGdldC5jYXJ9YCwgdmFsdWU6IHByb3BzLmJ1ZGdldC5jYXJ9LFxuICAgICAgICAgIHt4OiBgT3RoZXI6ICQke3Byb3BzLmJ1ZGdldC5vdGhlcn1gLCB2YWx1ZTogcHJvcHMuYnVkZ2V0Lm90aGVyfSxcbiAgICAgICAgICAvLyB7eDogYFVuc3BlbnQ6ICQke3RoaXMuc3RhdGUuaW5jb21lIC0gdGhpcy5zdGF0ZS5yZW50IC0gdGhpcy5zdGF0ZS51dGlscyAtIHRoaXMuc3RhdGUuY2FyIC0gdGhpcy5zdGF0ZS5vdGhlcn1gLCB2YWx1ZTogdW5zcGVudH1cbiAgICAgICAgXX1cbiAgICAgIC8+XG4gICAgPC9saT5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDaGFydDtcbiAgICAgIFxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGFydCgpIHtcbi8vICAgY29uc3QgW2J1ZGdldHMsIHNldEJ1ZGdldF0gPSB1c2VTdGF0ZShbXSk7XG5cbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICBheGlvcy5nZXQoJy9hcGkvYnVkZ2V0Jylcbi8vICAgICAgIC50aGVuKHJlcyA9PiB7XG4vLyAgICAgICAgIHNldEJ1ZGdldChyZXMuZGF0YSk7XG4vLyAgICAgICB9KVxuLy8gICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuLy8gICB9KTtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8dWw+e2J1ZGdldHMubWFwKGJ1ZGdldCA9PiBcbi8vICAgICAgIDxDaGFydEl0ZW0gYnVkZ2V0PXtidWRnZXR9IC8+XG4vLyAgICAgKX08L3VsPlxuLy8gICApO1xuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyAgICAgc3VwZXIocHJvcHMpO1xuLy8gICAgIHRoaXMuc3RhdGUgPSB7fTtcbi8vICAgfVxuLy8gICBjb21wb25lbnREaWRNb3VudCgpIHtcbi8vICAgICBheGlvcy5nZXQoJy9hcGkvYnVkZ2V0Jylcbi8vICAgICAgIC50aGVuKHJlc3AgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXNwLmRhdGFbMF0pO1xuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHJlc3AuZGF0YVswXSk7XG4vLyAgICAgICB9KTtcbi8vICAgfVxuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgbGV0IHJlbnQgPSAodGhpcy5zdGF0ZS5yZW50IC8gdGhpcy5zdGF0ZS5pbmNvbWUpICogMTAwO1xuLy8gICAgIGxldCB1dGlsID0gKHRoaXMuc3RhdGUudXRpbHMgLyB0aGlzLnN0YXRlLmluY29tZSkgKiAxMDA7XG4vLyAgICAgbGV0IGNhciA9ICh0aGlzLnN0YXRlLmNhciAvIHRoaXMuc3RhdGUuaW5jb21lKSAqIDEwMDtcbi8vICAgICBsZXQgb3RoZXIgPSAodGhpcy5zdGF0ZS5vdGhlciAvIHRoaXMuc3RhdGUuaW5jb21lKSAqIDEwMDtcbi8vICAgICBsZXQgdW5zcGVudCA9ICgodGhpcy5zdGF0ZS5pbmNvbWUgLSB0aGlzLnN0YXRlLnJlbnQgLSB0aGlzLnN0YXRlLnV0aWxzIC0gdGhpcy5zdGF0ZS5jYXIgLSB0aGlzLnN0YXRlLm90aGVyKSAvIHRoaXMuc3RhdGUuaW5jb21lKSAqIDEwMDtcbi8vICAgICBjb25zb2xlLmxvZygnUEVSQ0VOVCcsIHVuc3BlbnQpO1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2PlxuXG4vLyAgICAgICAgIDxoMj57dGhpcy5zdGF0ZS5uYW1lfSdzIEJ1ZGdldDwvaDI+XG4vLyAgICAgICAgIDxoMz5Ub3RhbCBNb250aGx5IEluY29tZTogJHt0aGlzLnN0YXRlLmluY29tZX08L2gzPlxuLy8gICAgICAgICA8QW55Q2hhcnQgXG4vLyAgICAgICAgICAgd2lkdGg9ezgwMH1cbi8vICAgICAgICAgICBoZWlnaHQ9ezYwMH1cbi8vICAgICAgICAgICB0eXBlPVwicGllXCJcbi8vICAgICAgICAgICBkYXRhPXtbXG4vLyAgICAgICAgICAgICB7eDogYFJlbnQvIE1vcmdhZ2U6ICQke3RoaXMuc3RhdGUucmVudH1gLCB2YWx1ZTogcmVudH0sXG4vLyAgICAgICAgICAgICB7eDogYFV0aWxpdGllczogJCR7dGhpcy5zdGF0ZS51dGlsc31gLCB2YWx1ZTogdXRpbH0sXG4vLyAgICAgICAgICAgICB7eDogYENhciBQYXltZW50OiAkJHt0aGlzLnN0YXRlLmNhcn1gLCB2YWx1ZTogY2FyfSxcbi8vICAgICAgICAgICAgIHt4OiBgT3RoZXI6ICQke3RoaXMuc3RhdGUub3RoZXJ9YCwgdmFsdWU6IG90aGVyfSxcbi8vICAgICAgICAgICAgIHt4OiBgVW5zcGVudDogJCR7dGhpcy5zdGF0ZS5pbmNvbWUgLSB0aGlzLnN0YXRlLnJlbnQgLSB0aGlzLnN0YXRlLnV0aWxzIC0gdGhpcy5zdGF0ZS5jYXIgLSB0aGlzLnN0YXRlLm90aGVyfWAsIHZhbHVlOiB1bnNwZW50fVxuLy8gICAgICAgICAgIF19XG4vLyAgICAgICAgIC8+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gICB9XG4vLyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Chart.jsx\n");

/***/ }),

/***/ "./components/ChartItem.jsx":
false,

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false

})