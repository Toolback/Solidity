(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[432],{12889:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var i=t(1508),s=JSON.parse('{"Mt":[{"inputs":[{"internalType":"uint256","name":"_minimumContribution","type":"uint256"},{"internalType":"string","name":"_campaignDescription","type":"string"}],"name":"createCampaign","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"deployedCampaigns","outputs":[{"internalType":"contract kickstarter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDeployedCampaigns","outputs":[{"internalType":"contract kickstarter[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"}]}'),a=new i.Z.eth.Contract(JSON.parse(JSON.stringify(s.Mt)),"0x5F21Bd8ACC49C9482F51D2C1ACFF0da07137ae00")},1508:function(e,n,t){"use strict";var i,s=t(3283),a=t.n(s);if("undefined"!==typeof window.ethereum)window.ethereum.request({method:"eth_requestAccounts"}),i=new(a())(window.ethereum);else{var r=new(a().providers.HttpProvider)("https://eth-rinkeby.alchemyapi.io/v2/60PeFVesMLNQUG-F8sWt-xpTBNi_u9f-");i=new(a())(r)}n.Z=i},96215:function(e,n,t){"use strict";var i=t(37018)();i.add("/campaigns/new","/campaigns/new").add("/campaigns/:kickstarter","/campaigns/show").add("/campaigns/:kickstarter/requests","/campaigns/requests/index").add("/campaigns/:kickstarter/requests/new","campaigns/requests/new"),e.exports=i},55923:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var i=t(85893),s=(t(67294),t(95712)),a=t(63272),r=t(96215),u=function(e){return(0,i.jsxs)(a.Z,{style:{marginTop:"10px"},children:[(0,i.jsx)(r.Link,{route:"/",children:(0,i.jsxs)("a",{className:"item",children:[(0,i.jsx)("img",{href:""}),"OhMyPuppy-DAO"]})}),(0,i.jsxs)(a.Z.Menu,{position:"right",children:[(0,i.jsx)(r.Link,{route:"/",children:(0,i.jsx)("a",{className:"item",children:"Campaigns"})}),(0,i.jsx)(r.Link,{route:"/campaigns/new",children:(0,i.jsx)("a",{className:"item",children:"+"})})]})]})},c=(t(73014),function(e){return(0,i.jsx)("div",{children:(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(u,{}),e.children]})})})},46601:function(){},89214:function(){},71922:function(){},2363:function(){},27790:function(){},52361:function(){},94616:function(){},6567:function(){}}]);