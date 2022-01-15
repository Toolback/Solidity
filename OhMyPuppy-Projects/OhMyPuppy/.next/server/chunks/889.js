"use strict";
exports.id = 889;
exports.ids = [889];
exports.modules = {

/***/ 889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ factory)
});

// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(508);
;// CONCATENATED MODULE: ./ethereum/build/CampaignFactory.json
const CampaignFactory_namespaceObject = JSON.parse('{"Mt":[{"inputs":[{"internalType":"uint256","name":"_minimumContribution","type":"uint256"},{"internalType":"string","name":"_campaignDescription","type":"string"}],"name":"createCampaign","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"deployedCampaigns","outputs":[{"internalType":"contract kickstarter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDeployedCampaigns","outputs":[{"internalType":"contract kickstarter[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"}]}');
;// CONCATENATED MODULE: ./ethereum/factory.js


const instance = new web3/* default.eth.Contract */.Z.eth.Contract(JSON.parse(JSON.stringify(CampaignFactory_namespaceObject.Mt)), '0x5F21Bd8ACC49C9482F51D2C1ACFF0da07137ae00');
/* harmony default export */ const factory = (instance);


/***/ })

};
;