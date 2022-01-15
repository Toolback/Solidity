"use strict";
(() => {
var exports = {};
exports.id = 73;
exports.ids = [73];
exports.modules = {

/***/ 800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ requests)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/components/Layout.js + 1 modules
var Layout = __webpack_require__(923);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(831);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(215);
// EXTERNAL MODULE: ./ethereum/campaign.js + 1 modules
var ethereum_campaign = __webpack_require__(777);
// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(508);
;// CONCATENATED MODULE: ./src/components/RequestRow.js






class RequestRow extends external_react_.Component {
    onApprove = async ()=>{
        const campaign = (0,ethereum_campaign/* default */.Z)(this.props.address);
        const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
        await campaign.methods.approveRequest(this.props.id).send({
            from: accounts[0]
        });
        routes.Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    };
    onFinalize = async ()=>{
        const campaign = (0,ethereum_campaign/* default */.Z)(this.props.address);
        const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
        await campaign.methods.finalizeRequest(this.props.id).send({
            from: accounts[0]
        });
        routes.Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    };
    render() {
        console.log('result from this props id');
        console.log(this.props.id);
        console.log('result from this props address');
        console.log(this.props.address);
        console.log('result from this props kickstarter');
        console.log(this.props.kickstarter);
        const { Row , Cell  } = external_semantic_ui_react_.Table;
        const { id , request , voicesCount  } = this.props;
        const readyToFinalize = request.approvalCount > voicesCount / 3;
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
            disabled: request.complete,
            positive: readyToFinalize && !request.complete,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Label, {
                        ribbon: true,
                        children: id
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                    children: request.description
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                    children: web3/* default.utils.fromWei */.Z.utils.fromWei(request.value, 'ether')
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                    children: request.recipient
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Cell, {
                    children: [
                        request.approvalCount,
                        "/",
                        request.disapprovalCount,
                        "/",
                        voicesCount
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                    children: request.complete ? null : /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                        color: "green",
                        basic: true,
                        onClick: this.onApprove,
                        children: "Approve"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                    children: request.complete ? null : /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                        color: "teal",
                        basic: true,
                        onClick: this.onFinalize,
                        children: "Finalize"
                    })
                })
            ]
        }));
    }
}
/* harmony default export */ const components_RequestRow = (RequestRow);

;// CONCATENATED MODULE: ./src/pages/campaigns/requests/index.js







class RequestIndex extends external_react_.Component {
    static async getInitialProps(props) {
        const { kickstarter  } = props.query;
        const campaign = (0,ethereum_campaign/* default */.Z)(kickstarter);
        const requestCount = await campaign.methods.getAllRequests().call();
        const voicesCount = await campaign.methods.voicesCount().call();
        // Fetch from mapping instead of array
        const requests = await Promise.all(Array(parseInt(requestCount)).fill().map((element, index)=>{
            return campaign.methods.requests(index).call();
        }));
        console.log("Result of requests:");
        console.log(requests);
        console.log("From requests>index.js:");
        console.log(props);
        return {
            kickstarter,
            requests,
            requestCount,
            voicesCount
        };
    }
    renderRows() {
        return this.props.requests.map((request, index)=>{
            return(/*#__PURE__*/ jsx_runtime_.jsx(components_RequestRow, {
                id: index,
                request: request,
                address: this.props.kickstarter,
                voicesCount: this.props.voicesCount
            }, index));
        });
    }
    render() {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: "Request"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                    route: `/campaigns/${this.props.kickstarter}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                            primary: true,
                            children: "Back"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                    route: `/campaigns/${this.props.kickstarter}/requests/new`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                            primary: true,
                            floated: "right",
                            style: {
                                marginBottom: 10
                            },
                            children: "Add Request"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Table, {
                    celled: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Table.Header, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Table.Row, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Table.HeaderCell, {
                                        children: "ID"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Table.HeaderCell, {
                                        children: "Description"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Table.HeaderCell, {
                                        children: "Amount"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Table.HeaderCell, {
                                        children: "Recipient"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Table.HeaderCell, {
                                        children: "Voting Count"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Table.HeaderCell, {
                                        children: "Approve"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Table.HeaderCell, {
                                        children: "Finalize"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Table.Body, {
                            children: this.renderRows()
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        "found ",
                        this.props.requestCount,
                        " requests."
                    ]
                })
            ]
        }));
    }
}
/* harmony default export */ const requests = (RequestIndex);


/***/ }),

/***/ 662:
/***/ ((module) => {

module.exports = require("next-routes");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 831:
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ 519:
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [654,777], () => (__webpack_exec__(800)));
module.exports = __webpack_exports__;

})();