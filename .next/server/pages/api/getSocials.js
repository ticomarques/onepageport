"use strict";
(() => {
var exports = {};
exports.id = 197;
exports.ids = [197];
exports.modules = {

/***/ 5879:
/***/ ((module) => {

module.exports = require("next-sanity");

/***/ }),

/***/ 4908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5879);
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9555);


const query = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`
    *[_type == "social"]
`;
async function handler(req, res) {
    const socials = await _sanity__WEBPACK_IMPORTED_MODULE_1__/* .sanityClient.fetch */ .i3.fetch(query);
    res.status(200).json({
        socials
    });
}


/***/ }),

/***/ 9555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i3": () => (/* binding */ sanityClient)
});

// UNUSED EXPORTS: config, urlFor

// EXTERNAL MODULE: external "next-sanity"
var external_next_sanity_ = __webpack_require__(5879);
;// CONCATENATED MODULE: external "@sanity/image-url"
const image_url_namespaceObject = require("@sanity/image-url");
;// CONCATENATED MODULE: ./sanity.ts


const config = {
    dataset: "production" || 0,
    projectId: "jj3dt7aq",
    apiVersion: "2021-03-25",
    useCdn: "production" === "production"
};
//Set up the client for fetching data in the getProps page function
const sanityClient = (0,external_next_sanity_.createClient)(config);
const urlFor = (source)=>createImageUrlBuilder(config).image(source);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4908));
module.exports = __webpack_exports__;

})();