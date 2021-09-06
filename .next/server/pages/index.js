"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/chains.ts":
/*!***********************!*\
  !*** ./lib/chains.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const supportedChains = [{
  name: 'Ethereum Mainnet',
  short_name: 'eth',
  chain: 'ETH',
  network: 'mainnet',
  chain_id: 1,
  network_id: 1,
  rpc_url: 'https://mainnet.infura.io/v3/%API_KEY%',
  native_currency: {
    symbol: 'ETH',
    name: 'Ethereum',
    decimals: '18',
    contractAddress: '',
    balance: ''
  }
}, {
  name: 'Ethereum Ropsten',
  short_name: 'rop',
  chain: 'ETH',
  network: 'ropsten',
  chain_id: 3,
  network_id: 3,
  rpc_url: 'https://ropsten.infura.io/v3/%API_KEY%',
  native_currency: {
    symbol: 'ETH',
    name: 'Ethereum',
    decimals: '18',
    contractAddress: '',
    balance: ''
  }
}, {
  name: 'Ethereum Rinkeby',
  short_name: 'rin',
  chain: 'ETH',
  network: 'rinkeby',
  chain_id: 4,
  network_id: 4,
  rpc_url: 'https://rinkeby.infura.io/v3/%API_KEY%',
  native_currency: {
    symbol: 'ETH',
    name: 'Ethereum',
    decimals: '18',
    contractAddress: '',
    balance: ''
  }
}, {
  name: 'Ethereum Görli',
  short_name: 'gor',
  chain: 'ETH',
  network: 'goerli',
  chain_id: 5,
  network_id: 5,
  rpc_url: 'https://goerli.infura.io/v3/%API_KEY%',
  native_currency: {
    symbol: 'ETH',
    name: 'Ethereum',
    decimals: '18',
    contractAddress: '',
    balance: ''
  }
}, {
  name: 'RSK Mainnet',
  short_name: 'rsk',
  chain: 'RSK',
  network: 'mainnet',
  chain_id: 30,
  network_id: 30,
  rpc_url: 'https://public-node.rsk.co',
  native_currency: {
    symbol: 'RSK',
    name: 'RSK',
    decimals: '18',
    contractAddress: '',
    balance: ''
  }
}, {
  name: 'Ethereum Kovan',
  short_name: 'kov',
  chain: 'ETH',
  network: 'kovan',
  chain_id: 42,
  network_id: 42,
  rpc_url: 'https://kovan.infura.io/v3/%API_KEY%',
  native_currency: {
    symbol: 'ETH',
    name: 'Ethereum',
    decimals: '18',
    contractAddress: '',
    balance: ''
  }
}, {
  name: 'Ethereum Classic Mainnet',
  short_name: 'etc',
  chain: 'ETC',
  network: 'mainnet',
  chain_id: 61,
  network_id: 1,
  rpc_url: 'https://ethereumclassic.network',
  native_currency: {
    symbol: 'ETH',
    name: 'Ethereum',
    decimals: '18',
    contractAddress: '',
    balance: ''
  }
}, {
  name: 'POA Network Sokol',
  short_name: 'poa',
  chain: 'POA',
  network: 'sokol',
  chain_id: 77,
  network_id: 77,
  rpc_url: 'https://sokol.poa.network',
  native_currency: {
    symbol: 'POA',
    name: 'POA',
    decimals: '18',
    contractAddress: '',
    balance: ''
  }
}, {
  name: 'POA Network Core',
  short_name: 'skl',
  chain: 'POA',
  network: 'core',
  chain_id: 99,
  network_id: 99,
  rpc_url: 'https://core.poa.network',
  native_currency: {
    symbol: 'POA',
    name: 'POA',
    decimals: '18',
    contractAddress: '',
    balance: ''
  }
}, {
  name: 'xDAI Chain',
  short_name: 'xdai',
  chain: 'POA',
  network: 'dai',
  chain_id: 100,
  network_id: 100,
  rpc_url: 'https://dai.poa.network',
  native_currency: {
    symbol: 'xDAI',
    name: 'xDAI',
    decimals: '18',
    contractAddress: '',
    balance: ''
  }
}, {
  name: 'Callisto Mainnet',
  short_name: 'clo',
  chain: 'callisto',
  network: 'mainnet',
  chain_id: 820,
  network_id: 1,
  rpc_url: 'https://clo-geth.0xinfra.com/',
  native_currency: {
    symbol: 'CLO',
    name: 'CLO',
    decimals: '18',
    contractAddress: '',
    balance: ''
  }
}, {
  name: 'Binance Smart Chain',
  short_name: 'bsc',
  chain: 'smartchain',
  network: 'mainnet',
  chain_id: 56,
  network_id: 56,
  rpc_url: 'https://bsc-dataseed1.defibit.io/',
  native_currency: {
    symbol: 'BNB',
    name: 'BNB',
    decimals: '18',
    contractAddress: '',
    balance: ''
  }
}, {
  name: 'Binance Smart Chain — Testnet',
  short_name: 'bsc',
  chain: 'smartchain',
  network: 'testnet',
  chain_id: 97,
  network_id: 97,
  rpc_url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  native_currency: {
    symbol: 'BNB',
    name: 'BNB',
    decimals: '18',
    contractAddress: '',
    balance: ''
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (supportedChains);

/***/ }),

/***/ "./lib/utilities.ts":
/*!**************************!*\
  !*** ./lib/utilities.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getChainData": () => (/* binding */ getChainData),
/* harmony export */   "ellipseAddress": () => (/* binding */ ellipseAddress),
/* harmony export */   "getBalance": () => (/* binding */ getBalance),
/* harmony export */   "getWeb3": () => (/* binding */ getWeb3),
/* harmony export */   "getInfuraID": () => (/* binding */ getInfuraID)
/* harmony export */ });
/* harmony import */ var _chains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chains */ "./lib/chains.ts");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function getChainData(chainId) {
  if (!chainId) {
    return null;
  }

  const chainData = _chains__WEBPACK_IMPORTED_MODULE_0__.default.filter(chain => chain.chain_id === chainId)[0];

  if (!chainData) {
    throw new Error('ChainId missing or not supported');
  }

  const API_KEY = getInfuraID();

  if (chainData.rpc_url.includes('infura.io') && chainData.rpc_url.includes('%API_KEY%') && API_KEY) {
    const rpcUrl = chainData.rpc_url.replace('%API_KEY%', API_KEY);
    return _objectSpread(_objectSpread({}, chainData), {}, {
      rpc_url: rpcUrl
    });
  }

  return chainData;
}
function ellipseAddress(address = '', width = 10) {
  if (!address) {
    return '';
  }

  return `${address.slice(0, width)}...${address.slice(-width)}`;
}
function getBalance(_address, _web3) {
  return new Promise((resolve, reject) => {
    _web3.eth.getBalance(_address).then(result => {
      const ethBalance = _web3.utils.fromWei(result, "ether");

      console.log("last result ", ethBalance);
      resolve(ethBalance);
    });
  });
}
function getWeb3(_provider) {
  return new (web3__WEBPACK_IMPORTED_MODULE_1___default())(_provider);
}
function getInfuraID() {
  return "460f40a260564ac4a4f4b3fffb032dad";
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* binding */ Home),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @walletconnect/web3-provider */ "@walletconnect/web3-provider");
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ "ethers");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var walletlink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! walletlink */ "walletlink");
/* harmony import */ var walletlink__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(walletlink__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3modal */ "web3modal");
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/utilities */ "./lib/utilities.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Am\xE9yibo B\xE9vi\\Documents\\Node.js Project\\web3modal-example\\pages\\index.tsx";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const INFURA_ID = (0,_lib_utilities__WEBPACK_IMPORTED_MODULE_7__.getInfuraID)();
const providerOptions = {
  walletconnect: {
    package: (_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_1___default()),
    // required
    options: {
      infuraId: INFURA_ID // required

    }
  },
  'custom-walletlink': {
    display: {
      logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
      name: 'Coinbase',
      description: 'Connect to Coinbase Wallet (not Coinbase App)'
    },
    options: {
      appName: 'Coinbase',
      // Your app name
      networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
      chainId: 1
    },
    package: (walletlink__WEBPACK_IMPORTED_MODULE_5___default()),
    connector: async (_, options) => {
      const {
        appName,
        networkUrl,
        chainId
      } = options;
      const walletLink = new (walletlink__WEBPACK_IMPORTED_MODULE_5___default())({
        appName
      });
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
      await provider.enable();
      return provider;
    }
  }
};
let web3Modal;

if (false) {}

const initialState = {
  provider: null,
  web3Provider: null,
  address: null,
  chainId: null,
  balance: null
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_WEB3_PROVIDER':
      return _objectSpread(_objectSpread({}, state), {}, {
        provider: action.provider,
        web3Provider: action.web3Provider,
        address: action.address,
        chainId: action.chainId,
        balance: action.balance
      });

    case 'SET_ADDRESS':
      console.log('action ', action);
      return _objectSpread(_objectSpread({}, state), {}, {
        address: action.address,
        balance: action.balance
      });

    case 'SET_CHAIN_ID':
      return _objectSpread(_objectSpread({}, state), {}, {
        chainId: action.chainId
      });

    case 'RESET_WEB3_PROVIDER':
      return initialState;

    default:
      throw new Error();
  }
}

const Home = () => {
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useReducer)(reducer, initialState);
  const {
    provider,
    web3Provider,
    address,
    chainId,
    balance
  } = state;
  const connect = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(async function () {
    // This is the initial `provider` that is returned when
    // using web3Modal to connect. Can be MetaMask or WalletConnect.
    const provider = await web3Modal.connect(); // We plug the initial `provider` into ethers.js and get back
    // a Web3Provider. This will add on methods from ethers.js and
    // event listeners such as `.on()` will be different.

    const web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.providers.Web3Provider(provider);
    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();
    const network = await web3Provider.getNetwork();
    (0,_lib_utilities__WEBPACK_IMPORTED_MODULE_7__.getBalance)(address, (0,_lib_utilities__WEBPACK_IMPORTED_MODULE_7__.getWeb3)(provider)).then(_balance => {
      const balance = _balance;
      dispatch({
        type: 'SET_WEB3_PROVIDER',
        provider,
        web3Provider,
        address,
        chainId: network.chainId,
        balance
      });
    });
  }, []);
  const disconnect = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(async function () {
    await web3Modal.clearCachedProvider();

    if (provider !== null && provider !== void 0 && provider.disconnect && typeof provider.disconnect === 'function') {
      await provider.disconnect();
    }

    dispatch({
      type: 'RESET_WEB3_PROVIDER'
    });
  }, [provider]); // Auto connect to the cached provider

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (web3Modal.cachedProvider) {
      connect().then();
    }
  }, [connect]); // A `provider` should come with EIP-1193 events. We'll listen for those events
  // here so that when a user switches accounts or networks, we can update the
  // local React state with that new information.

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (provider !== null && provider !== void 0 && provider.on) {
      const handleAccountsChanged = accounts => {
        // eslint-disable-next-line no-console
        console.log('accountsChanged', accounts);
        (0,_lib_utilities__WEBPACK_IMPORTED_MODULE_7__.getBalance)(accounts[0], (0,_lib_utilities__WEBPACK_IMPORTED_MODULE_7__.getWeb3)(provider)).then(_balance => {
          dispatch({
            type: 'SET_ADDRESS',
            address: accounts[0],
            balance: _balance
          });
        });
      };

      const handleChainChanged = accounts => {
        // eslint-disable-next-line no-console
        console.log('accountsChanged chain', accounts);
        /*dispatch({
          type: 'SET_ADDRESS',
          address: accounts[0],
        })*/

        connect().then();
      };

      const handleDisconnect = error => {
        // eslint-disable-next-line no-console
        console.log('disconnect', error);
        disconnect().then();
      };

      provider.on('accountsChanged', handleAccountsChanged);
      provider.on('chainChanged', handleChainChanged);
      provider.on('disconnect', handleDisconnect); // Subscription Cleanup

      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged);
          provider.removeListener('chainChanged', handleChainChanged);
          provider.removeListener('disconnect', handleDisconnect);
        }
      };
    }
  }, [provider, disconnect]);
  let chainData = (0,_lib_utilities__WEBPACK_IMPORTED_MODULE_7__.getChainData)(chainId);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1803337544", [web3Provider ? 'red' : 'green']]]) + " " + "container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("title", {
        className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1803337544", [web3Provider ? 'red' : 'green']]]),
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico",
        className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1803337544", [web3Provider ? 'red' : 'green']]])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("header", {
      className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1803337544", [web3Provider ? 'red' : 'green']]]),
      children: address && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1803337544", [web3Provider ? 'red' : 'green']]]) + " " + "grid",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1803337544", [web3Provider ? 'red' : 'green']]]),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
            className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1803337544", [web3Provider ? 'red' : 'green']]]) + " " + "mb-1",
            children: "Network:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
            className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1803337544", [web3Provider ? 'red' : 'green']]]),
            children: chainData === null || chainData === void 0 ? void 0 : chainData.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1803337544", [web3Provider ? 'red' : 'green']]]),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
            className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1803337544", [web3Provider ? 'red' : 'green']]]) + " " + "mb-1",
            children: "Address:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
            className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1803337544", [web3Provider ? 'red' : 'green']]]),
            children: (0,_lib_utilities__WEBPACK_IMPORTED_MODULE_7__.ellipseAddress)(address)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1803337544", [web3Provider ? 'red' : 'green']]]),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
            className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1803337544", [web3Provider ? 'red' : 'green']]]) + " " + "mb-1",
            children: "Balance:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
            className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1803337544", [web3Provider ? 'red' : 'green']]]),
            children: balance
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("main", {
      className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1803337544", [web3Provider ? 'red' : 'green']]]),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h1", {
        className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1803337544", [web3Provider ? 'red' : 'green']]]) + " " + "title",
        children: "Street Place"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 17
      }, undefined), web3Provider ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
        type: "button",
        onClick: disconnect,
        className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1803337544", [web3Provider ? 'red' : 'green']]]) + " " + "button",
        children: "Disconnect"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 21
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
        type: "button",
        onClick: connect,
        className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1803337544", [web3Provider ? 'red' : 'green']]]) + " " + "button",
        children: "Connect"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1803337544",
      dynamic: [web3Provider ? 'red' : 'green'],
      children: `main.__jsx-style-dynamic-selector{padding:5rem 0;text-align:center;}p.__jsx-style-dynamic-selector{margin-top:0;}.container.__jsx-style-dynamic-selector{padding:2rem;margin:0 auto;max-width:1200px;}.grid.__jsx-style-dynamic-selector{display:grid;grid-template-columns:auto auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.button.__jsx-style-dynamic-selector{padding:1rem 1.5rem;background:${web3Provider ? 'red' : 'green'};border:none;border-radius:0.5rem;color:#fff;font-size:1.2rem;}.mb-0.__jsx-style-dynamic-selector{Address margin-bottom:0;}.mb-1.__jsx-style-dynamic-selector{margin-bottom:0.25rem;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW3DqXlpYm8gQsOpdmlcXERvY3VtZW50c1xcTm9kZS5qcyBQcm9qZWN0XFx3ZWIzbW9kYWwtZXhhbXBsZVxccGFnZXNcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0UXdCLEFBRzBCLEFBS0YsQUFJQSxBQU1BLEFBTU8sQUFTSixBQUdNLGFBM0J4QixBQUlnQixBQU1rQixFQWZkLEtBcUJzQixFQVkxQyxFQUhBLEdBcEJtQixNQVRuQixXQVVBLENBS2dDLGVBTWxCLFlBQ1MscUJBQ1YsV0FDTSxpQkFDbkIsdUNBVEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbcOpeWlibyBCw6l2aVxcRG9jdW1lbnRzXFxOb2RlLmpzIFByb2plY3RcXHdlYjNtb2RhbC1leGFtcGxlXFxwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdhbGxldENvbm5lY3RQcm92aWRlciBmcm9tICdAd2FsbGV0Y29ubmVjdC93ZWIzLXByb3ZpZGVyJ1xyXG5pbXBvcnQge3Byb3ZpZGVyc30gZnJvbSAnZXRoZXJzJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBXYWxsZXRMaW5rIGZyb20gJ3dhbGxldGxpbmsnXHJcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSAnd2ViM21vZGFsJ1xyXG5pbXBvcnQge2VsbGlwc2VBZGRyZXNzLCBnZXRCYWxhbmNlLCBnZXRDaGFpbkRhdGEsIGdldFdlYjMsIGdldEluZnVyYUlEfSBmcm9tICcuLi9saWIvdXRpbGl0aWVzJ1xyXG5cclxuY29uc3QgSU5GVVJBX0lEID0gZ2V0SW5mdXJhSUQoKVxyXG5cclxuY29uc3QgcHJvdmlkZXJPcHRpb25zID0ge1xyXG4gICAgd2FsbGV0Y29ubmVjdDoge1xyXG4gICAgICAgIHBhY2thZ2U6IFdhbGxldENvbm5lY3RQcm92aWRlciwgLy8gcmVxdWlyZWRcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGluZnVyYUlkOiBJTkZVUkFfSUQsIC8vIHJlcXVpcmVkXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnY3VzdG9tLXdhbGxldGxpbmsnOiB7XHJcbiAgICAgICAgZGlzcGxheToge1xyXG4gICAgICAgICAgICBsb2dvOiAnaHR0cHM6Ly9wbGF5LWxoLmdvb2dsZXVzZXJjb250ZW50LmNvbS9Qam9Kb0cyN21pU2dsVkJYb1hyeEJTTHZlVjZlM0VlQlBwTlk1NWFpVVVCTTlRMVJDRVRLQ09xZE9rWDJaeWRxVmYwJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NvaW5iYXNlJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDb25uZWN0IHRvIENvaW5iYXNlIFdhbGxldCAobm90IENvaW5iYXNlIEFwcCknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBhcHBOYW1lOiAnQ29pbmJhc2UnLCAvLyBZb3VyIGFwcCBuYW1lXHJcbiAgICAgICAgICAgIG5ldHdvcmtVcmw6IGBodHRwczovL21haW5uZXQuaW5mdXJhLmlvL3YzLyR7SU5GVVJBX0lEfWAsXHJcbiAgICAgICAgICAgIGNoYWluSWQ6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYWNrYWdlOiBXYWxsZXRMaW5rLFxyXG4gICAgICAgIGNvbm5lY3RvcjogYXN5bmMgKF8sIG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qge2FwcE5hbWUsIG5ldHdvcmtVcmwsIGNoYWluSWR9ID0gb3B0aW9uc1xyXG4gICAgICAgICAgICBjb25zdCB3YWxsZXRMaW5rID0gbmV3IFdhbGxldExpbmsoe1xyXG4gICAgICAgICAgICAgICAgYXBwTmFtZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QgcHJvdmlkZXIgPSB3YWxsZXRMaW5rLm1ha2VXZWIzUHJvdmlkZXIobmV0d29ya1VybCwgY2hhaW5JZClcclxuICAgICAgICAgICAgYXdhaXQgcHJvdmlkZXIuZW5hYmxlKClcclxuICAgICAgICAgICAgcmV0dXJuIHByb3ZpZGVyXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn1cclxuXHJcbmxldCB3ZWIzTW9kYWxcclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKHtcclxuICAgICAgICBuZXR3b3JrOiAnbWFpbm5ldCcsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgY2FjaGVQcm92aWRlcjogdHJ1ZSxcclxuICAgICAgICBwcm92aWRlck9wdGlvbnMsIC8vIHJlcXVpcmVkXHJcbiAgICB9KVxyXG59XHJcblxyXG50eXBlIFN0YXRlVHlwZSA9IHtcclxuICAgIHByb3ZpZGVyPzogYW55XHJcbiAgICB3ZWIzUHJvdmlkZXI/OiBhbnlcclxuICAgIGFkZHJlc3M/OiBzdHJpbmdcclxuICAgIGNoYWluSWQ/OiBudW1iZXJcclxuICAgIGJhbGFuY2U/OiBzdHJpbmdcclxufVxyXG5cclxudHlwZSBBY3Rpb25UeXBlID1cclxuICAgIHwge1xyXG4gICAgdHlwZTogJ1NFVF9XRUIzX1BST1ZJREVSJ1xyXG4gICAgcHJvdmlkZXI/OiBTdGF0ZVR5cGVbJ3Byb3ZpZGVyJ11cclxuICAgIHdlYjNQcm92aWRlcj86IFN0YXRlVHlwZVsnd2ViM1Byb3ZpZGVyJ11cclxuICAgIGFkZHJlc3M/OiBTdGF0ZVR5cGVbJ2FkZHJlc3MnXVxyXG4gICAgY2hhaW5JZD86IFN0YXRlVHlwZVsnY2hhaW5JZCddXHJcbiAgICBiYWxhbmNlPzogU3RhdGVUeXBlWydiYWxhbmNlJ11cclxufVxyXG4gICAgfCB7XHJcbiAgICB0eXBlOiAnU0VUX0FERFJFU1MnXHJcbiAgICBhZGRyZXNzPzogU3RhdGVUeXBlWydhZGRyZXNzJ11cclxuICAgIGJhbGFuY2U/OiBTdGF0ZVR5cGVbJ2JhbGFuY2UnXVxyXG59XHJcbiAgICB8IHtcclxuICAgIHR5cGU6ICdTRVRfQ0hBSU5fSUQnXHJcbiAgICBjaGFpbklkPzogU3RhdGVUeXBlWydjaGFpbklkJ11cclxuICAgIGFkZHJlc3M/OiBTdGF0ZVR5cGVbJ2FkZHJlc3MnXVxyXG4gICAgYmFsYW5jZT86IFN0YXRlVHlwZVsnYmFsYW5jZSddXHJcbn1cclxuICAgIHwge1xyXG4gICAgdHlwZTogJ1JFU0VUX1dFQjNfUFJPVklERVInXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGVUeXBlID0ge1xyXG4gICAgcHJvdmlkZXI6IG51bGwsXHJcbiAgICB3ZWIzUHJvdmlkZXI6IG51bGwsXHJcbiAgICBhZGRyZXNzOiBudWxsLFxyXG4gICAgY2hhaW5JZDogbnVsbCxcclxuICAgIGJhbGFuY2U6IG51bGwsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGU6IFN0YXRlVHlwZSwgYWN0aW9uOiBBY3Rpb25UeXBlKTogU3RhdGVUeXBlIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdTRVRfV0VCM19QUk9WSURFUic6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHByb3ZpZGVyOiBhY3Rpb24ucHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICB3ZWIzUHJvdmlkZXI6IGFjdGlvbi53ZWIzUHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBhY3Rpb24uYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGNoYWluSWQ6IGFjdGlvbi5jaGFpbklkLFxyXG4gICAgICAgICAgICAgICAgYmFsYW5jZTogYWN0aW9uLmJhbGFuY2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdTRVRfQUREUkVTUyc6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhY3Rpb24gJywgYWN0aW9uKVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBhY3Rpb24uYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGJhbGFuY2U6IGFjdGlvbi5iYWxhbmNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnU0VUX0NIQUlOX0lEJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2hhaW5JZDogYWN0aW9uLmNoYWluSWQsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdSRVNFVF9XRUIzX1BST1ZJREVSJzpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIb21lID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpXHJcbiAgICBjb25zdCB7cHJvdmlkZXIsIHdlYjNQcm92aWRlciwgYWRkcmVzcywgY2hhaW5JZCwgYmFsYW5jZX0gPSBzdGF0ZTtcclxuXHJcblxyXG4gICAgY29uc3QgY29ubmVjdCA9IHVzZUNhbGxiYWNrKGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBpbml0aWFsIGBwcm92aWRlcmAgdGhhdCBpcyByZXR1cm5lZCB3aGVuXHJcbiAgICAgICAgLy8gdXNpbmcgd2ViM01vZGFsIHRvIGNvbm5lY3QuIENhbiBiZSBNZXRhTWFzayBvciBXYWxsZXRDb25uZWN0LlxyXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgd2ViM01vZGFsLmNvbm5lY3QoKVxyXG5cclxuICAgICAgICAvLyBXZSBwbHVnIHRoZSBpbml0aWFsIGBwcm92aWRlcmAgaW50byBldGhlcnMuanMgYW5kIGdldCBiYWNrXHJcbiAgICAgICAgLy8gYSBXZWIzUHJvdmlkZXIuIFRoaXMgd2lsbCBhZGQgb24gbWV0aG9kcyBmcm9tIGV0aGVycy5qcyBhbmRcclxuICAgICAgICAvLyBldmVudCBsaXN0ZW5lcnMgc3VjaCBhcyBgLm9uKClgIHdpbGwgYmUgZGlmZmVyZW50LlxyXG4gICAgICAgIGNvbnN0IHdlYjNQcm92aWRlciA9IG5ldyBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKVxyXG5cclxuICAgICAgICBjb25zdCBzaWduZXIgPSB3ZWIzUHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IHNpZ25lci5nZXRBZGRyZXNzKCk7XHJcbiAgICAgICAgY29uc3QgbmV0d29yayA9IGF3YWl0IHdlYjNQcm92aWRlci5nZXROZXR3b3JrKCk7XHJcblxyXG4gICAgICAgIGdldEJhbGFuY2UoYWRkcmVzcywgZ2V0V2ViMyhwcm92aWRlcikpLnRoZW4oIF9iYWxhbmNlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYmFsYW5jZSA9IF9iYWxhbmNlO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1dFQjNfUFJPVklERVInLFxyXG4gICAgICAgICAgICAgICAgcHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICB3ZWIzUHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgY2hhaW5JZDogbmV0d29yay5jaGFpbklkLFxyXG4gICAgICAgICAgICAgICAgYmFsYW5jZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBkaXNjb25uZWN0ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhd2FpdCB3ZWIzTW9kYWwuY2xlYXJDYWNoZWRQcm92aWRlcigpXHJcbiAgICAgICAgICAgIGlmIChwcm92aWRlcj8uZGlzY29ubmVjdCAmJiB0eXBlb2YgcHJvdmlkZXIuZGlzY29ubmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgcHJvdmlkZXIuZGlzY29ubmVjdCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1JFU0VUX1dFQjNfUFJPVklERVInLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3Byb3ZpZGVyXVxyXG4gICAgKVxyXG5cclxuICAgIC8vIEF1dG8gY29ubmVjdCB0byB0aGUgY2FjaGVkIHByb3ZpZGVyXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh3ZWIzTW9kYWwuY2FjaGVkUHJvdmlkZXIpIHtcclxuICAgICAgICAgICAgY29ubmVjdCgpLnRoZW4oKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtjb25uZWN0XSlcclxuXHJcbiAgICAvLyBBIGBwcm92aWRlcmAgc2hvdWxkIGNvbWUgd2l0aCBFSVAtMTE5MyBldmVudHMuIFdlJ2xsIGxpc3RlbiBmb3IgdGhvc2UgZXZlbnRzXHJcbiAgICAvLyBoZXJlIHNvIHRoYXQgd2hlbiBhIHVzZXIgc3dpdGNoZXMgYWNjb3VudHMgb3IgbmV0d29ya3MsIHdlIGNhbiB1cGRhdGUgdGhlXHJcbiAgICAvLyBsb2NhbCBSZWFjdCBzdGF0ZSB3aXRoIHRoYXQgbmV3IGluZm9ybWF0aW9uLlxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvdmlkZXI/Lm9uKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVBY2NvdW50c0NoYW5nZWQgPSAoYWNjb3VudHM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FjY291bnRzQ2hhbmdlZCcsIGFjY291bnRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBnZXRCYWxhbmNlKGFjY291bnRzWzBdLCBnZXRXZWIzKHByb3ZpZGVyKSkudGhlbiggX2JhbGFuY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9BRERSRVNTJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogYWNjb3VudHNbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2U6IF9iYWxhbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVDaGFpbkNoYW5nZWQgPSAoYWNjb3VudHM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FjY291bnRzQ2hhbmdlZCBjaGFpbicsIGFjY291bnRzKVxyXG4gICAgICAgICAgICAgICAgLypkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfQUREUkVTUycsXHJcbiAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFjY291bnRzWzBdLFxyXG4gICAgICAgICAgICAgICAgfSkqL1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdCgpLnRoZW4oKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZURpc2Nvbm5lY3QgPSAoZXJyb3I6IHsgY29kZTogbnVtYmVyOyBtZXNzYWdlOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkaXNjb25uZWN0JywgZXJyb3IpXHJcbiAgICAgICAgICAgICAgICBkaXNjb25uZWN0KCkudGhlbigpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByb3ZpZGVyLm9uKCdhY2NvdW50c0NoYW5nZWQnLCBoYW5kbGVBY2NvdW50c0NoYW5nZWQpXHJcbiAgICAgICAgICAgIHByb3ZpZGVyLm9uKCdjaGFpbkNoYW5nZWQnLCBoYW5kbGVDaGFpbkNoYW5nZWQpXHJcbiAgICAgICAgICAgIHByb3ZpZGVyLm9uKCdkaXNjb25uZWN0JywgaGFuZGxlRGlzY29ubmVjdClcclxuXHJcbiAgICAgICAgICAgIC8vIFN1YnNjcmlwdGlvbiBDbGVhbnVwXHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvdmlkZXIucmVtb3ZlTGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5yZW1vdmVMaXN0ZW5lcignYWNjb3VudHNDaGFuZ2VkJywgaGFuZGxlQWNjb3VudHNDaGFuZ2VkKVxyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLnJlbW92ZUxpc3RlbmVyKCdjaGFpbkNoYW5nZWQnLCBoYW5kbGVDaGFpbkNoYW5nZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIucmVtb3ZlTGlzdGVuZXIoJ2Rpc2Nvbm5lY3QnLCBoYW5kbGVEaXNjb25uZWN0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3ZpZGVyLCBkaXNjb25uZWN0XSlcclxuXHJcbiAgICBsZXQgY2hhaW5EYXRhID0gZ2V0Q2hhaW5EYXRhKGNoYWluSWQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAge2FkZHJlc3MgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMVwiPk5ldHdvcms6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NoYWluRGF0YT8ubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMVwiPkFkZHJlc3M6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2VsbGlwc2VBZGRyZXNzKGFkZHJlc3MpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0xXCI+QmFsYW5jZTo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57YmFsYW5jZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlN0cmVldCBQbGFjZTwvaDE+XHJcbiAgICAgICAgICAgICAgICB7d2ViM1Byb3ZpZGVyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2Rpc2Nvbm5lY3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEaXNjb25uZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2Nvbm5lY3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L21haW4+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgbWFpbiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdyaWQge1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICR7d2ViM1Byb3ZpZGVyID8gJ3JlZCcgOiAnZ3JlZW4nfTtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWItMCB7QWRkcmVzc1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1iLTEge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiJdfQ== */
/*@ sourceURL=C:\\Users\\Améyibo Bévi\\Documents\\Node.js Project\\web3modal-example\\pages\\index.tsx */`
    }, void 0, false, void 0, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "3379920139",
      children: "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW3DqXlpYm8gQsOpdmlcXERvY3VtZW50c1xcTm9kZS5qcyBQcm9qZWN0XFx3ZWIzbW9kYWwtZXhhbXBsZVxccGFnZXNcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtVCtCLEFBSXFCLEFBUVksVUFQYixTQUdHLEdBS2QsbUlBSkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbcOpeWlibyBCw6l2aVxcRG9jdW1lbnRzXFxOb2RlLmpzIFByb2plY3RcXHdlYjNtb2RhbC1leGFtcGxlXFxwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdhbGxldENvbm5lY3RQcm92aWRlciBmcm9tICdAd2FsbGV0Y29ubmVjdC93ZWIzLXByb3ZpZGVyJ1xyXG5pbXBvcnQge3Byb3ZpZGVyc30gZnJvbSAnZXRoZXJzJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBXYWxsZXRMaW5rIGZyb20gJ3dhbGxldGxpbmsnXHJcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSAnd2ViM21vZGFsJ1xyXG5pbXBvcnQge2VsbGlwc2VBZGRyZXNzLCBnZXRCYWxhbmNlLCBnZXRDaGFpbkRhdGEsIGdldFdlYjMsIGdldEluZnVyYUlEfSBmcm9tICcuLi9saWIvdXRpbGl0aWVzJ1xyXG5cclxuY29uc3QgSU5GVVJBX0lEID0gZ2V0SW5mdXJhSUQoKVxyXG5cclxuY29uc3QgcHJvdmlkZXJPcHRpb25zID0ge1xyXG4gICAgd2FsbGV0Y29ubmVjdDoge1xyXG4gICAgICAgIHBhY2thZ2U6IFdhbGxldENvbm5lY3RQcm92aWRlciwgLy8gcmVxdWlyZWRcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGluZnVyYUlkOiBJTkZVUkFfSUQsIC8vIHJlcXVpcmVkXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnY3VzdG9tLXdhbGxldGxpbmsnOiB7XHJcbiAgICAgICAgZGlzcGxheToge1xyXG4gICAgICAgICAgICBsb2dvOiAnaHR0cHM6Ly9wbGF5LWxoLmdvb2dsZXVzZXJjb250ZW50LmNvbS9Qam9Kb0cyN21pU2dsVkJYb1hyeEJTTHZlVjZlM0VlQlBwTlk1NWFpVVVCTTlRMVJDRVRLQ09xZE9rWDJaeWRxVmYwJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NvaW5iYXNlJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDb25uZWN0IHRvIENvaW5iYXNlIFdhbGxldCAobm90IENvaW5iYXNlIEFwcCknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBhcHBOYW1lOiAnQ29pbmJhc2UnLCAvLyBZb3VyIGFwcCBuYW1lXHJcbiAgICAgICAgICAgIG5ldHdvcmtVcmw6IGBodHRwczovL21haW5uZXQuaW5mdXJhLmlvL3YzLyR7SU5GVVJBX0lEfWAsXHJcbiAgICAgICAgICAgIGNoYWluSWQ6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYWNrYWdlOiBXYWxsZXRMaW5rLFxyXG4gICAgICAgIGNvbm5lY3RvcjogYXN5bmMgKF8sIG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qge2FwcE5hbWUsIG5ldHdvcmtVcmwsIGNoYWluSWR9ID0gb3B0aW9uc1xyXG4gICAgICAgICAgICBjb25zdCB3YWxsZXRMaW5rID0gbmV3IFdhbGxldExpbmsoe1xyXG4gICAgICAgICAgICAgICAgYXBwTmFtZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QgcHJvdmlkZXIgPSB3YWxsZXRMaW5rLm1ha2VXZWIzUHJvdmlkZXIobmV0d29ya1VybCwgY2hhaW5JZClcclxuICAgICAgICAgICAgYXdhaXQgcHJvdmlkZXIuZW5hYmxlKClcclxuICAgICAgICAgICAgcmV0dXJuIHByb3ZpZGVyXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn1cclxuXHJcbmxldCB3ZWIzTW9kYWxcclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKHtcclxuICAgICAgICBuZXR3b3JrOiAnbWFpbm5ldCcsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgY2FjaGVQcm92aWRlcjogdHJ1ZSxcclxuICAgICAgICBwcm92aWRlck9wdGlvbnMsIC8vIHJlcXVpcmVkXHJcbiAgICB9KVxyXG59XHJcblxyXG50eXBlIFN0YXRlVHlwZSA9IHtcclxuICAgIHByb3ZpZGVyPzogYW55XHJcbiAgICB3ZWIzUHJvdmlkZXI/OiBhbnlcclxuICAgIGFkZHJlc3M/OiBzdHJpbmdcclxuICAgIGNoYWluSWQ/OiBudW1iZXJcclxuICAgIGJhbGFuY2U/OiBzdHJpbmdcclxufVxyXG5cclxudHlwZSBBY3Rpb25UeXBlID1cclxuICAgIHwge1xyXG4gICAgdHlwZTogJ1NFVF9XRUIzX1BST1ZJREVSJ1xyXG4gICAgcHJvdmlkZXI/OiBTdGF0ZVR5cGVbJ3Byb3ZpZGVyJ11cclxuICAgIHdlYjNQcm92aWRlcj86IFN0YXRlVHlwZVsnd2ViM1Byb3ZpZGVyJ11cclxuICAgIGFkZHJlc3M/OiBTdGF0ZVR5cGVbJ2FkZHJlc3MnXVxyXG4gICAgY2hhaW5JZD86IFN0YXRlVHlwZVsnY2hhaW5JZCddXHJcbiAgICBiYWxhbmNlPzogU3RhdGVUeXBlWydiYWxhbmNlJ11cclxufVxyXG4gICAgfCB7XHJcbiAgICB0eXBlOiAnU0VUX0FERFJFU1MnXHJcbiAgICBhZGRyZXNzPzogU3RhdGVUeXBlWydhZGRyZXNzJ11cclxuICAgIGJhbGFuY2U/OiBTdGF0ZVR5cGVbJ2JhbGFuY2UnXVxyXG59XHJcbiAgICB8IHtcclxuICAgIHR5cGU6ICdTRVRfQ0hBSU5fSUQnXHJcbiAgICBjaGFpbklkPzogU3RhdGVUeXBlWydjaGFpbklkJ11cclxuICAgIGFkZHJlc3M/OiBTdGF0ZVR5cGVbJ2FkZHJlc3MnXVxyXG4gICAgYmFsYW5jZT86IFN0YXRlVHlwZVsnYmFsYW5jZSddXHJcbn1cclxuICAgIHwge1xyXG4gICAgdHlwZTogJ1JFU0VUX1dFQjNfUFJPVklERVInXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGVUeXBlID0ge1xyXG4gICAgcHJvdmlkZXI6IG51bGwsXHJcbiAgICB3ZWIzUHJvdmlkZXI6IG51bGwsXHJcbiAgICBhZGRyZXNzOiBudWxsLFxyXG4gICAgY2hhaW5JZDogbnVsbCxcclxuICAgIGJhbGFuY2U6IG51bGwsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGU6IFN0YXRlVHlwZSwgYWN0aW9uOiBBY3Rpb25UeXBlKTogU3RhdGVUeXBlIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdTRVRfV0VCM19QUk9WSURFUic6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHByb3ZpZGVyOiBhY3Rpb24ucHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICB3ZWIzUHJvdmlkZXI6IGFjdGlvbi53ZWIzUHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBhY3Rpb24uYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGNoYWluSWQ6IGFjdGlvbi5jaGFpbklkLFxyXG4gICAgICAgICAgICAgICAgYmFsYW5jZTogYWN0aW9uLmJhbGFuY2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdTRVRfQUREUkVTUyc6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhY3Rpb24gJywgYWN0aW9uKVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBhY3Rpb24uYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGJhbGFuY2U6IGFjdGlvbi5iYWxhbmNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnU0VUX0NIQUlOX0lEJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2hhaW5JZDogYWN0aW9uLmNoYWluSWQsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdSRVNFVF9XRUIzX1BST1ZJREVSJzpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIb21lID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpXHJcbiAgICBjb25zdCB7cHJvdmlkZXIsIHdlYjNQcm92aWRlciwgYWRkcmVzcywgY2hhaW5JZCwgYmFsYW5jZX0gPSBzdGF0ZTtcclxuXHJcblxyXG4gICAgY29uc3QgY29ubmVjdCA9IHVzZUNhbGxiYWNrKGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBpbml0aWFsIGBwcm92aWRlcmAgdGhhdCBpcyByZXR1cm5lZCB3aGVuXHJcbiAgICAgICAgLy8gdXNpbmcgd2ViM01vZGFsIHRvIGNvbm5lY3QuIENhbiBiZSBNZXRhTWFzayBvciBXYWxsZXRDb25uZWN0LlxyXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgd2ViM01vZGFsLmNvbm5lY3QoKVxyXG5cclxuICAgICAgICAvLyBXZSBwbHVnIHRoZSBpbml0aWFsIGBwcm92aWRlcmAgaW50byBldGhlcnMuanMgYW5kIGdldCBiYWNrXHJcbiAgICAgICAgLy8gYSBXZWIzUHJvdmlkZXIuIFRoaXMgd2lsbCBhZGQgb24gbWV0aG9kcyBmcm9tIGV0aGVycy5qcyBhbmRcclxuICAgICAgICAvLyBldmVudCBsaXN0ZW5lcnMgc3VjaCBhcyBgLm9uKClgIHdpbGwgYmUgZGlmZmVyZW50LlxyXG4gICAgICAgIGNvbnN0IHdlYjNQcm92aWRlciA9IG5ldyBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKVxyXG5cclxuICAgICAgICBjb25zdCBzaWduZXIgPSB3ZWIzUHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IHNpZ25lci5nZXRBZGRyZXNzKCk7XHJcbiAgICAgICAgY29uc3QgbmV0d29yayA9IGF3YWl0IHdlYjNQcm92aWRlci5nZXROZXR3b3JrKCk7XHJcblxyXG4gICAgICAgIGdldEJhbGFuY2UoYWRkcmVzcywgZ2V0V2ViMyhwcm92aWRlcikpLnRoZW4oIF9iYWxhbmNlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYmFsYW5jZSA9IF9iYWxhbmNlO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1dFQjNfUFJPVklERVInLFxyXG4gICAgICAgICAgICAgICAgcHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICB3ZWIzUHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgY2hhaW5JZDogbmV0d29yay5jaGFpbklkLFxyXG4gICAgICAgICAgICAgICAgYmFsYW5jZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBkaXNjb25uZWN0ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhd2FpdCB3ZWIzTW9kYWwuY2xlYXJDYWNoZWRQcm92aWRlcigpXHJcbiAgICAgICAgICAgIGlmIChwcm92aWRlcj8uZGlzY29ubmVjdCAmJiB0eXBlb2YgcHJvdmlkZXIuZGlzY29ubmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgcHJvdmlkZXIuZGlzY29ubmVjdCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1JFU0VUX1dFQjNfUFJPVklERVInLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3Byb3ZpZGVyXVxyXG4gICAgKVxyXG5cclxuICAgIC8vIEF1dG8gY29ubmVjdCB0byB0aGUgY2FjaGVkIHByb3ZpZGVyXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh3ZWIzTW9kYWwuY2FjaGVkUHJvdmlkZXIpIHtcclxuICAgICAgICAgICAgY29ubmVjdCgpLnRoZW4oKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtjb25uZWN0XSlcclxuXHJcbiAgICAvLyBBIGBwcm92aWRlcmAgc2hvdWxkIGNvbWUgd2l0aCBFSVAtMTE5MyBldmVudHMuIFdlJ2xsIGxpc3RlbiBmb3IgdGhvc2UgZXZlbnRzXHJcbiAgICAvLyBoZXJlIHNvIHRoYXQgd2hlbiBhIHVzZXIgc3dpdGNoZXMgYWNjb3VudHMgb3IgbmV0d29ya3MsIHdlIGNhbiB1cGRhdGUgdGhlXHJcbiAgICAvLyBsb2NhbCBSZWFjdCBzdGF0ZSB3aXRoIHRoYXQgbmV3IGluZm9ybWF0aW9uLlxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvdmlkZXI/Lm9uKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVBY2NvdW50c0NoYW5nZWQgPSAoYWNjb3VudHM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FjY291bnRzQ2hhbmdlZCcsIGFjY291bnRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBnZXRCYWxhbmNlKGFjY291bnRzWzBdLCBnZXRXZWIzKHByb3ZpZGVyKSkudGhlbiggX2JhbGFuY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9BRERSRVNTJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogYWNjb3VudHNbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2U6IF9iYWxhbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVDaGFpbkNoYW5nZWQgPSAoYWNjb3VudHM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FjY291bnRzQ2hhbmdlZCBjaGFpbicsIGFjY291bnRzKVxyXG4gICAgICAgICAgICAgICAgLypkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfQUREUkVTUycsXHJcbiAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFjY291bnRzWzBdLFxyXG4gICAgICAgICAgICAgICAgfSkqL1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdCgpLnRoZW4oKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZURpc2Nvbm5lY3QgPSAoZXJyb3I6IHsgY29kZTogbnVtYmVyOyBtZXNzYWdlOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkaXNjb25uZWN0JywgZXJyb3IpXHJcbiAgICAgICAgICAgICAgICBkaXNjb25uZWN0KCkudGhlbigpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByb3ZpZGVyLm9uKCdhY2NvdW50c0NoYW5nZWQnLCBoYW5kbGVBY2NvdW50c0NoYW5nZWQpXHJcbiAgICAgICAgICAgIHByb3ZpZGVyLm9uKCdjaGFpbkNoYW5nZWQnLCBoYW5kbGVDaGFpbkNoYW5nZWQpXHJcbiAgICAgICAgICAgIHByb3ZpZGVyLm9uKCdkaXNjb25uZWN0JywgaGFuZGxlRGlzY29ubmVjdClcclxuXHJcbiAgICAgICAgICAgIC8vIFN1YnNjcmlwdGlvbiBDbGVhbnVwXHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvdmlkZXIucmVtb3ZlTGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5yZW1vdmVMaXN0ZW5lcignYWNjb3VudHNDaGFuZ2VkJywgaGFuZGxlQWNjb3VudHNDaGFuZ2VkKVxyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLnJlbW92ZUxpc3RlbmVyKCdjaGFpbkNoYW5nZWQnLCBoYW5kbGVDaGFpbkNoYW5nZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIucmVtb3ZlTGlzdGVuZXIoJ2Rpc2Nvbm5lY3QnLCBoYW5kbGVEaXNjb25uZWN0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3ZpZGVyLCBkaXNjb25uZWN0XSlcclxuXHJcbiAgICBsZXQgY2hhaW5EYXRhID0gZ2V0Q2hhaW5EYXRhKGNoYWluSWQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAge2FkZHJlc3MgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMVwiPk5ldHdvcms6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NoYWluRGF0YT8ubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMVwiPkFkZHJlc3M6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2VsbGlwc2VBZGRyZXNzKGFkZHJlc3MpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0xXCI+QmFsYW5jZTo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57YmFsYW5jZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlN0cmVldCBQbGFjZTwvaDE+XHJcbiAgICAgICAgICAgICAgICB7d2ViM1Byb3ZpZGVyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2Rpc2Nvbm5lY3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEaXNjb25uZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2Nvbm5lY3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L21haW4+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgbWFpbiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdyaWQge1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICR7d2ViM1Byb3ZpZGVyID8gJ3JlZCcgOiAnZ3JlZW4nfTtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWItMCB7QWRkcmVzc1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1iLTEge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Am\xE9yibo B\xE9vi\\\\Documents\\\\Node.js Project\\\\web3modal-example\\\\pages\\\\index.tsx */"
    }, void 0, false, void 0, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 231,
    columnNumber: 9
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "@walletconnect/web3-provider":
/*!***********************************************!*\
  !*** external "@walletconnect/web3-provider" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@walletconnect/web3-provider");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "walletlink":
/*!*****************************!*\
  !*** external "walletlink" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("walletlink");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("web3");

/***/ }),

/***/ "web3modal":
/*!****************************!*\
  !*** external "web3modal" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("web3modal");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SCxDQTNNTTtBQTZNUCxpRUFBZUssSUFBZjs7Ozs7Ozs7OztBQ3JVQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY2hhaW5zLnRzIiwid2VicGFjazovLy8uL2xpYi91dGlsaXRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3YWxsZXRjb25uZWN0L3dlYjMtcHJvdmlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJldGhlcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3YWxsZXRsaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2ViM1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYjNtb2RhbFwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElDaGFpbkRhdGEgfSBmcm9tICcuL3R5cGVzJ1xyXG5cclxuY29uc3Qgc3VwcG9ydGVkQ2hhaW5zOiBJQ2hhaW5EYXRhW10gPSBbXHJcbiAge1xyXG4gICAgbmFtZTogJ0V0aGVyZXVtIE1haW5uZXQnLFxyXG4gICAgc2hvcnRfbmFtZTogJ2V0aCcsXHJcbiAgICBjaGFpbjogJ0VUSCcsXHJcbiAgICBuZXR3b3JrOiAnbWFpbm5ldCcsXHJcbiAgICBjaGFpbl9pZDogMSxcclxuICAgIG5ldHdvcmtfaWQ6IDEsXHJcbiAgICBycGNfdXJsOiAnaHR0cHM6Ly9tYWlubmV0LmluZnVyYS5pby92My8lQVBJX0tFWSUnLFxyXG4gICAgbmF0aXZlX2N1cnJlbmN5OiB7XHJcbiAgICAgIHN5bWJvbDogJ0VUSCcsXHJcbiAgICAgIG5hbWU6ICdFdGhlcmV1bScsXHJcbiAgICAgIGRlY2ltYWxzOiAnMTgnLFxyXG4gICAgICBjb250cmFjdEFkZHJlc3M6ICcnLFxyXG4gICAgICBiYWxhbmNlOiAnJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRXRoZXJldW0gUm9wc3RlbicsXHJcbiAgICBzaG9ydF9uYW1lOiAncm9wJyxcclxuICAgIGNoYWluOiAnRVRIJyxcclxuICAgIG5ldHdvcms6ICdyb3BzdGVuJyxcclxuICAgIGNoYWluX2lkOiAzLFxyXG4gICAgbmV0d29ya19pZDogMyxcclxuICAgIHJwY191cmw6ICdodHRwczovL3JvcHN0ZW4uaW5mdXJhLmlvL3YzLyVBUElfS0VZJScsXHJcbiAgICBuYXRpdmVfY3VycmVuY3k6IHtcclxuICAgICAgc3ltYm9sOiAnRVRIJyxcclxuICAgICAgbmFtZTogJ0V0aGVyZXVtJyxcclxuICAgICAgZGVjaW1hbHM6ICcxOCcsXHJcbiAgICAgIGNvbnRyYWN0QWRkcmVzczogJycsXHJcbiAgICAgIGJhbGFuY2U6ICcnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdFdGhlcmV1bSBSaW5rZWJ5JyxcclxuICAgIHNob3J0X25hbWU6ICdyaW4nLFxyXG4gICAgY2hhaW46ICdFVEgnLFxyXG4gICAgbmV0d29yazogJ3JpbmtlYnknLFxyXG4gICAgY2hhaW5faWQ6IDQsXHJcbiAgICBuZXR3b3JrX2lkOiA0LFxyXG4gICAgcnBjX3VybDogJ2h0dHBzOi8vcmlua2VieS5pbmZ1cmEuaW8vdjMvJUFQSV9LRVklJyxcclxuICAgIG5hdGl2ZV9jdXJyZW5jeToge1xyXG4gICAgICBzeW1ib2w6ICdFVEgnLFxyXG4gICAgICBuYW1lOiAnRXRoZXJldW0nLFxyXG4gICAgICBkZWNpbWFsczogJzE4JyxcclxuICAgICAgY29udHJhY3RBZGRyZXNzOiAnJyxcclxuICAgICAgYmFsYW5jZTogJycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0V0aGVyZXVtIEfDtnJsaScsXHJcbiAgICBzaG9ydF9uYW1lOiAnZ29yJyxcclxuICAgIGNoYWluOiAnRVRIJyxcclxuICAgIG5ldHdvcms6ICdnb2VybGknLFxyXG4gICAgY2hhaW5faWQ6IDUsXHJcbiAgICBuZXR3b3JrX2lkOiA1LFxyXG4gICAgcnBjX3VybDogJ2h0dHBzOi8vZ29lcmxpLmluZnVyYS5pby92My8lQVBJX0tFWSUnLFxyXG4gICAgbmF0aXZlX2N1cnJlbmN5OiB7XHJcbiAgICAgIHN5bWJvbDogJ0VUSCcsXHJcbiAgICAgIG5hbWU6ICdFdGhlcmV1bScsXHJcbiAgICAgIGRlY2ltYWxzOiAnMTgnLFxyXG4gICAgICBjb250cmFjdEFkZHJlc3M6ICcnLFxyXG4gICAgICBiYWxhbmNlOiAnJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUlNLIE1haW5uZXQnLFxyXG4gICAgc2hvcnRfbmFtZTogJ3JzaycsXHJcbiAgICBjaGFpbjogJ1JTSycsXHJcbiAgICBuZXR3b3JrOiAnbWFpbm5ldCcsXHJcbiAgICBjaGFpbl9pZDogMzAsXHJcbiAgICBuZXR3b3JrX2lkOiAzMCxcclxuICAgIHJwY191cmw6ICdodHRwczovL3B1YmxpYy1ub2RlLnJzay5jbycsXHJcbiAgICBuYXRpdmVfY3VycmVuY3k6IHtcclxuICAgICAgc3ltYm9sOiAnUlNLJyxcclxuICAgICAgbmFtZTogJ1JTSycsXHJcbiAgICAgIGRlY2ltYWxzOiAnMTgnLFxyXG4gICAgICBjb250cmFjdEFkZHJlc3M6ICcnLFxyXG4gICAgICBiYWxhbmNlOiAnJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRXRoZXJldW0gS292YW4nLFxyXG4gICAgc2hvcnRfbmFtZTogJ2tvdicsXHJcbiAgICBjaGFpbjogJ0VUSCcsXHJcbiAgICBuZXR3b3JrOiAna292YW4nLFxyXG4gICAgY2hhaW5faWQ6IDQyLFxyXG4gICAgbmV0d29ya19pZDogNDIsXHJcbiAgICBycGNfdXJsOiAnaHR0cHM6Ly9rb3Zhbi5pbmZ1cmEuaW8vdjMvJUFQSV9LRVklJyxcclxuICAgIG5hdGl2ZV9jdXJyZW5jeToge1xyXG4gICAgICBzeW1ib2w6ICdFVEgnLFxyXG4gICAgICBuYW1lOiAnRXRoZXJldW0nLFxyXG4gICAgICBkZWNpbWFsczogJzE4JyxcclxuICAgICAgY29udHJhY3RBZGRyZXNzOiAnJyxcclxuICAgICAgYmFsYW5jZTogJycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0V0aGVyZXVtIENsYXNzaWMgTWFpbm5ldCcsXHJcbiAgICBzaG9ydF9uYW1lOiAnZXRjJyxcclxuICAgIGNoYWluOiAnRVRDJyxcclxuICAgIG5ldHdvcms6ICdtYWlubmV0JyxcclxuICAgIGNoYWluX2lkOiA2MSxcclxuICAgIG5ldHdvcmtfaWQ6IDEsXHJcbiAgICBycGNfdXJsOiAnaHR0cHM6Ly9ldGhlcmV1bWNsYXNzaWMubmV0d29yaycsXHJcbiAgICBuYXRpdmVfY3VycmVuY3k6IHtcclxuICAgICAgc3ltYm9sOiAnRVRIJyxcclxuICAgICAgbmFtZTogJ0V0aGVyZXVtJyxcclxuICAgICAgZGVjaW1hbHM6ICcxOCcsXHJcbiAgICAgIGNvbnRyYWN0QWRkcmVzczogJycsXHJcbiAgICAgIGJhbGFuY2U6ICcnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQT0EgTmV0d29yayBTb2tvbCcsXHJcbiAgICBzaG9ydF9uYW1lOiAncG9hJyxcclxuICAgIGNoYWluOiAnUE9BJyxcclxuICAgIG5ldHdvcms6ICdzb2tvbCcsXHJcbiAgICBjaGFpbl9pZDogNzcsXHJcbiAgICBuZXR3b3JrX2lkOiA3NyxcclxuICAgIHJwY191cmw6ICdodHRwczovL3Nva29sLnBvYS5uZXR3b3JrJyxcclxuICAgIG5hdGl2ZV9jdXJyZW5jeToge1xyXG4gICAgICBzeW1ib2w6ICdQT0EnLFxyXG4gICAgICBuYW1lOiAnUE9BJyxcclxuICAgICAgZGVjaW1hbHM6ICcxOCcsXHJcbiAgICAgIGNvbnRyYWN0QWRkcmVzczogJycsXHJcbiAgICAgIGJhbGFuY2U6ICcnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQT0EgTmV0d29yayBDb3JlJyxcclxuICAgIHNob3J0X25hbWU6ICdza2wnLFxyXG4gICAgY2hhaW46ICdQT0EnLFxyXG4gICAgbmV0d29yazogJ2NvcmUnLFxyXG4gICAgY2hhaW5faWQ6IDk5LFxyXG4gICAgbmV0d29ya19pZDogOTksXHJcbiAgICBycGNfdXJsOiAnaHR0cHM6Ly9jb3JlLnBvYS5uZXR3b3JrJyxcclxuICAgIG5hdGl2ZV9jdXJyZW5jeToge1xyXG4gICAgICBzeW1ib2w6ICdQT0EnLFxyXG4gICAgICBuYW1lOiAnUE9BJyxcclxuICAgICAgZGVjaW1hbHM6ICcxOCcsXHJcbiAgICAgIGNvbnRyYWN0QWRkcmVzczogJycsXHJcbiAgICAgIGJhbGFuY2U6ICcnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICd4REFJIENoYWluJyxcclxuICAgIHNob3J0X25hbWU6ICd4ZGFpJyxcclxuICAgIGNoYWluOiAnUE9BJyxcclxuICAgIG5ldHdvcms6ICdkYWknLFxyXG4gICAgY2hhaW5faWQ6IDEwMCxcclxuICAgIG5ldHdvcmtfaWQ6IDEwMCxcclxuICAgIHJwY191cmw6ICdodHRwczovL2RhaS5wb2EubmV0d29yaycsXHJcbiAgICBuYXRpdmVfY3VycmVuY3k6IHtcclxuICAgICAgc3ltYm9sOiAneERBSScsXHJcbiAgICAgIG5hbWU6ICd4REFJJyxcclxuICAgICAgZGVjaW1hbHM6ICcxOCcsXHJcbiAgICAgIGNvbnRyYWN0QWRkcmVzczogJycsXHJcbiAgICAgIGJhbGFuY2U6ICcnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDYWxsaXN0byBNYWlubmV0JyxcclxuICAgIHNob3J0X25hbWU6ICdjbG8nLFxyXG4gICAgY2hhaW46ICdjYWxsaXN0bycsXHJcbiAgICBuZXR3b3JrOiAnbWFpbm5ldCcsXHJcbiAgICBjaGFpbl9pZDogODIwLFxyXG4gICAgbmV0d29ya19pZDogMSxcclxuICAgIHJwY191cmw6ICdodHRwczovL2Nsby1nZXRoLjB4aW5mcmEuY29tLycsXHJcbiAgICBuYXRpdmVfY3VycmVuY3k6IHtcclxuICAgICAgc3ltYm9sOiAnQ0xPJyxcclxuICAgICAgbmFtZTogJ0NMTycsXHJcbiAgICAgIGRlY2ltYWxzOiAnMTgnLFxyXG4gICAgICBjb250cmFjdEFkZHJlc3M6ICcnLFxyXG4gICAgICBiYWxhbmNlOiAnJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQmluYW5jZSBTbWFydCBDaGFpbicsXHJcbiAgICBzaG9ydF9uYW1lOiAnYnNjJyxcclxuICAgIGNoYWluOiAnc21hcnRjaGFpbicsXHJcbiAgICBuZXR3b3JrOiAnbWFpbm5ldCcsXHJcbiAgICBjaGFpbl9pZDogNTYsXHJcbiAgICBuZXR3b3JrX2lkOiA1NixcclxuICAgIHJwY191cmw6ICdodHRwczovL2JzYy1kYXRhc2VlZDEuZGVmaWJpdC5pby8nLFxyXG4gICAgbmF0aXZlX2N1cnJlbmN5OiB7XHJcbiAgICAgIHN5bWJvbDogJ0JOQicsXHJcbiAgICAgIG5hbWU6ICdCTkInLFxyXG4gICAgICBkZWNpbWFsczogJzE4JyxcclxuICAgICAgY29udHJhY3RBZGRyZXNzOiAnJyxcclxuICAgICAgYmFsYW5jZTogJycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0JpbmFuY2UgU21hcnQgQ2hhaW4g4oCUIFRlc3RuZXQnLFxyXG4gICAgc2hvcnRfbmFtZTogJ2JzYycsXHJcbiAgICBjaGFpbjogJ3NtYXJ0Y2hhaW4nLFxyXG4gICAgbmV0d29yazogJ3Rlc3RuZXQnLFxyXG4gICAgY2hhaW5faWQ6IDk3LFxyXG4gICAgbmV0d29ya19pZDogOTcsXHJcbiAgICBycGNfdXJsOiAnaHR0cHM6Ly9kYXRhLXNlZWQtcHJlYnNjLTEtczEuYmluYW5jZS5vcmc6ODU0NS8nLFxyXG4gICAgbmF0aXZlX2N1cnJlbmN5OiB7XHJcbiAgICAgIHN5bWJvbDogJ0JOQicsXHJcbiAgICAgIG5hbWU6ICdCTkInLFxyXG4gICAgICBkZWNpbWFsczogJzE4JyxcclxuICAgICAgY29udHJhY3RBZGRyZXNzOiAnJyxcclxuICAgICAgYmFsYW5jZTogJycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnRlZENoYWluc1xyXG4iLCJpbXBvcnQgc3VwcG9ydGVkQ2hhaW5zIGZyb20gJy4vY2hhaW5zJ1xyXG5pbXBvcnQge0lDaGFpbkRhdGF9IGZyb20gJy4vdHlwZXMnXHJcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGFpbkRhdGEoY2hhaW5JZD86IG51bWJlcik6IElDaGFpbkRhdGEge1xyXG4gICAgaWYgKCFjaGFpbklkKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYWluRGF0YSA9IHN1cHBvcnRlZENoYWlucy5maWx0ZXIoXHJcbiAgICAgICAgKGNoYWluOiBhbnkpID0+IGNoYWluLmNoYWluX2lkID09PSBjaGFpbklkXHJcbiAgICApWzBdXHJcblxyXG4gICAgaWYgKCFjaGFpbkRhdGEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NoYWluSWQgbWlzc2luZyBvciBub3Qgc3VwcG9ydGVkJylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBBUElfS0VZID0gZ2V0SW5mdXJhSUQoKTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgICAgY2hhaW5EYXRhLnJwY191cmwuaW5jbHVkZXMoJ2luZnVyYS5pbycpICYmXHJcbiAgICAgICAgY2hhaW5EYXRhLnJwY191cmwuaW5jbHVkZXMoJyVBUElfS0VZJScpICYmXHJcbiAgICAgICAgQVBJX0tFWVxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgcnBjVXJsID0gY2hhaW5EYXRhLnJwY191cmwucmVwbGFjZSgnJUFQSV9LRVklJywgQVBJX0tFWSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uY2hhaW5EYXRhLFxyXG4gICAgICAgICAgICBycGNfdXJsOiBycGNVcmwsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjaGFpbkRhdGFcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVsbGlwc2VBZGRyZXNzKGFkZHJlc3MgPSAnJywgd2lkdGggPSAxMCk6IHN0cmluZyB7XHJcbiAgICBpZiAoIWFkZHJlc3MpIHtcclxuICAgICAgICByZXR1cm4gJydcclxuICAgIH1cclxuICAgIHJldHVybiBgJHthZGRyZXNzLnNsaWNlKDAsIHdpZHRoKX0uLi4ke2FkZHJlc3Muc2xpY2UoLXdpZHRoKX1gXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFsYW5jZShfYWRkcmVzcywgX3dlYjMpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBfd2ViMy5ldGguZ2V0QmFsYW5jZShfYWRkcmVzcykudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBldGhCYWxhbmNlID0gX3dlYjMudXRpbHMuZnJvbVdlaShyZXN1bHQsIFwiZXRoZXJcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGFzdCByZXN1bHQgXCIsIGV0aEJhbGFuY2UpO1xyXG4gICAgICAgICAgICByZXNvbHZlKGV0aEJhbGFuY2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlYjMoX3Byb3ZpZGVyKTogV2ViMyB7XHJcbiAgICByZXR1cm4gbmV3IFdlYjMoX3Byb3ZpZGVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluZnVyYUlEKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gXCI0NjBmNDBhMjYwNTY0YWM0YTRmNGIzZmZmYjAzMmRhZFwiO1xyXG59XHJcbiIsImltcG9ydCBXYWxsZXRDb25uZWN0UHJvdmlkZXIgZnJvbSAnQHdhbGxldGNvbm5lY3Qvd2ViMy1wcm92aWRlcidcclxuaW1wb3J0IHtwcm92aWRlcnN9IGZyb20gJ2V0aGVycydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXJ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgV2FsbGV0TGluayBmcm9tICd3YWxsZXRsaW5rJ1xyXG5pbXBvcnQgV2ViM01vZGFsIGZyb20gJ3dlYjNtb2RhbCdcclxuaW1wb3J0IHtlbGxpcHNlQWRkcmVzcywgZ2V0QmFsYW5jZSwgZ2V0Q2hhaW5EYXRhLCBnZXRXZWIzLCBnZXRJbmZ1cmFJRH0gZnJvbSAnLi4vbGliL3V0aWxpdGllcydcclxuXHJcbmNvbnN0IElORlVSQV9JRCA9IGdldEluZnVyYUlEKClcclxuXHJcbmNvbnN0IHByb3ZpZGVyT3B0aW9ucyA9IHtcclxuICAgIHdhbGxldGNvbm5lY3Q6IHtcclxuICAgICAgICBwYWNrYWdlOiBXYWxsZXRDb25uZWN0UHJvdmlkZXIsIC8vIHJlcXVpcmVkXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBpbmZ1cmFJZDogSU5GVVJBX0lELCAvLyByZXF1aXJlZFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJ2N1c3RvbS13YWxsZXRsaW5rJzoge1xyXG4gICAgICAgIGRpc3BsYXk6IHtcclxuICAgICAgICAgICAgbG9nbzogJ2h0dHBzOi8vcGxheS1saC5nb29nbGV1c2VyY29udGVudC5jb20vUGpvSm9HMjdtaVNnbFZCWG9YcnhCU0x2ZVY2ZTNFZUJQcE5ZNTVhaVVVQk05UTFSQ0VUS0NPcWRPa1gyWnlkcVZmMCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDb2luYmFzZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29ubmVjdCB0byBDb2luYmFzZSBXYWxsZXQgKG5vdCBDb2luYmFzZSBBcHApJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgYXBwTmFtZTogJ0NvaW5iYXNlJywgLy8gWW91ciBhcHAgbmFtZVxyXG4gICAgICAgICAgICBuZXR3b3JrVXJsOiBgaHR0cHM6Ly9tYWlubmV0LmluZnVyYS5pby92My8ke0lORlVSQV9JRH1gLFxyXG4gICAgICAgICAgICBjaGFpbklkOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFja2FnZTogV2FsbGV0TGluayxcclxuICAgICAgICBjb25uZWN0b3I6IGFzeW5jIChfLCBvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHthcHBOYW1lLCBuZXR3b3JrVXJsLCBjaGFpbklkfSA9IG9wdGlvbnNcclxuICAgICAgICAgICAgY29uc3Qgd2FsbGV0TGluayA9IG5ldyBXYWxsZXRMaW5rKHtcclxuICAgICAgICAgICAgICAgIGFwcE5hbWUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpZGVyID0gd2FsbGV0TGluay5tYWtlV2ViM1Byb3ZpZGVyKG5ldHdvcmtVcmwsIGNoYWluSWQpXHJcbiAgICAgICAgICAgIGF3YWl0IHByb3ZpZGVyLmVuYWJsZSgpXHJcbiAgICAgICAgICAgIHJldHVybiBwcm92aWRlclxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59XHJcblxyXG5sZXQgd2ViM01vZGFsXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgd2ViM01vZGFsID0gbmV3IFdlYjNNb2RhbCh7XHJcbiAgICAgICAgbmV0d29yazogJ21haW5uZXQnLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIGNhY2hlUHJvdmlkZXI6IHRydWUsXHJcbiAgICAgICAgcHJvdmlkZXJPcHRpb25zLCAvLyByZXF1aXJlZFxyXG4gICAgfSlcclxufVxyXG5cclxudHlwZSBTdGF0ZVR5cGUgPSB7XHJcbiAgICBwcm92aWRlcj86IGFueVxyXG4gICAgd2ViM1Byb3ZpZGVyPzogYW55XHJcbiAgICBhZGRyZXNzPzogc3RyaW5nXHJcbiAgICBjaGFpbklkPzogbnVtYmVyXHJcbiAgICBiYWxhbmNlPzogc3RyaW5nXHJcbn1cclxuXHJcbnR5cGUgQWN0aW9uVHlwZSA9XHJcbiAgICB8IHtcclxuICAgIHR5cGU6ICdTRVRfV0VCM19QUk9WSURFUidcclxuICAgIHByb3ZpZGVyPzogU3RhdGVUeXBlWydwcm92aWRlciddXHJcbiAgICB3ZWIzUHJvdmlkZXI/OiBTdGF0ZVR5cGVbJ3dlYjNQcm92aWRlciddXHJcbiAgICBhZGRyZXNzPzogU3RhdGVUeXBlWydhZGRyZXNzJ11cclxuICAgIGNoYWluSWQ/OiBTdGF0ZVR5cGVbJ2NoYWluSWQnXVxyXG4gICAgYmFsYW5jZT86IFN0YXRlVHlwZVsnYmFsYW5jZSddXHJcbn1cclxuICAgIHwge1xyXG4gICAgdHlwZTogJ1NFVF9BRERSRVNTJ1xyXG4gICAgYWRkcmVzcz86IFN0YXRlVHlwZVsnYWRkcmVzcyddXHJcbiAgICBiYWxhbmNlPzogU3RhdGVUeXBlWydiYWxhbmNlJ11cclxufVxyXG4gICAgfCB7XHJcbiAgICB0eXBlOiAnU0VUX0NIQUlOX0lEJ1xyXG4gICAgY2hhaW5JZD86IFN0YXRlVHlwZVsnY2hhaW5JZCddXHJcbiAgICBhZGRyZXNzPzogU3RhdGVUeXBlWydhZGRyZXNzJ11cclxuICAgIGJhbGFuY2U/OiBTdGF0ZVR5cGVbJ2JhbGFuY2UnXVxyXG59XHJcbiAgICB8IHtcclxuICAgIHR5cGU6ICdSRVNFVF9XRUIzX1BST1ZJREVSJ1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlVHlwZSA9IHtcclxuICAgIHByb3ZpZGVyOiBudWxsLFxyXG4gICAgd2ViM1Byb3ZpZGVyOiBudWxsLFxyXG4gICAgYWRkcmVzczogbnVsbCxcclxuICAgIGNoYWluSWQ6IG51bGwsXHJcbiAgICBiYWxhbmNlOiBudWxsLFxyXG59XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlOiBTdGF0ZVR5cGUsIGFjdGlvbjogQWN0aW9uVHlwZSk6IFN0YXRlVHlwZSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnU0VUX1dFQjNfUFJPVklERVInOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwcm92aWRlcjogYWN0aW9uLnByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgd2ViM1Byb3ZpZGVyOiBhY3Rpb24ud2ViM1Byb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczogYWN0aW9uLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBjaGFpbklkOiBhY3Rpb24uY2hhaW5JZCxcclxuICAgICAgICAgICAgICAgIGJhbGFuY2U6IGFjdGlvbi5iYWxhbmNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnU0VUX0FERFJFU1MnOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWN0aW9uICcsIGFjdGlvbilcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczogYWN0aW9uLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlOiBhY3Rpb24uYmFsYW5jZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ1NFVF9DSEFJTl9JRCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNoYWluSWQ6IGFjdGlvbi5jaGFpbklkLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnUkVTRVRfV0VCM19QUk9WSURFUic6XHJcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGVcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSG9tZSA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKVxyXG4gICAgY29uc3Qge3Byb3ZpZGVyLCB3ZWIzUHJvdmlkZXIsIGFkZHJlc3MsIGNoYWluSWQsIGJhbGFuY2V9ID0gc3RhdGU7XHJcblxyXG5cclxuICAgIGNvbnN0IGNvbm5lY3QgPSB1c2VDYWxsYmFjayhhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgaW5pdGlhbCBgcHJvdmlkZXJgIHRoYXQgaXMgcmV0dXJuZWQgd2hlblxyXG4gICAgICAgIC8vIHVzaW5nIHdlYjNNb2RhbCB0byBjb25uZWN0LiBDYW4gYmUgTWV0YU1hc2sgb3IgV2FsbGV0Q29ubmVjdC5cclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KClcclxuXHJcbiAgICAgICAgLy8gV2UgcGx1ZyB0aGUgaW5pdGlhbCBgcHJvdmlkZXJgIGludG8gZXRoZXJzLmpzIGFuZCBnZXQgYmFja1xyXG4gICAgICAgIC8vIGEgV2ViM1Byb3ZpZGVyLiBUaGlzIHdpbGwgYWRkIG9uIG1ldGhvZHMgZnJvbSBldGhlcnMuanMgYW5kXHJcbiAgICAgICAgLy8gZXZlbnQgbGlzdGVuZXJzIHN1Y2ggYXMgYC5vbigpYCB3aWxsIGJlIGRpZmZlcmVudC5cclxuICAgICAgICBjb25zdCB3ZWIzUHJvdmlkZXIgPSBuZXcgcHJvdmlkZXJzLldlYjNQcm92aWRlcihwcm92aWRlcilcclxuXHJcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gd2ViM1Byb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBzaWduZXIuZ2V0QWRkcmVzcygpO1xyXG4gICAgICAgIGNvbnN0IG5ldHdvcmsgPSBhd2FpdCB3ZWIzUHJvdmlkZXIuZ2V0TmV0d29yaygpO1xyXG5cclxuICAgICAgICBnZXRCYWxhbmNlKGFkZHJlc3MsIGdldFdlYjMocHJvdmlkZXIpKS50aGVuKCBfYmFsYW5jZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhbGFuY2UgPSBfYmFsYW5jZTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9XRUIzX1BST1ZJREVSJyxcclxuICAgICAgICAgICAgICAgIHByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgd2ViM1Byb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGNoYWluSWQ6IG5ldHdvcmsuY2hhaW5JZCxcclxuICAgICAgICAgICAgICAgIGJhbGFuY2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgZGlzY29ubmVjdCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYXdhaXQgd2ViM01vZGFsLmNsZWFyQ2FjaGVkUHJvdmlkZXIoKVxyXG4gICAgICAgICAgICBpZiAocHJvdmlkZXI/LmRpc2Nvbm5lY3QgJiYgdHlwZW9mIHByb3ZpZGVyLmRpc2Nvbm5lY3QgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHByb3ZpZGVyLmRpc2Nvbm5lY3QoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdSRVNFVF9XRUIzX1BST1ZJREVSJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtwcm92aWRlcl1cclxuICAgIClcclxuXHJcbiAgICAvLyBBdXRvIGNvbm5lY3QgdG8gdGhlIGNhY2hlZCBwcm92aWRlclxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAod2ViM01vZGFsLmNhY2hlZFByb3ZpZGVyKSB7XHJcbiAgICAgICAgICAgIGNvbm5lY3QoKS50aGVuKClcclxuICAgICAgICB9XHJcbiAgICB9LCBbY29ubmVjdF0pXHJcblxyXG4gICAgLy8gQSBgcHJvdmlkZXJgIHNob3VsZCBjb21lIHdpdGggRUlQLTExOTMgZXZlbnRzLiBXZSdsbCBsaXN0ZW4gZm9yIHRob3NlIGV2ZW50c1xyXG4gICAgLy8gaGVyZSBzbyB0aGF0IHdoZW4gYSB1c2VyIHN3aXRjaGVzIGFjY291bnRzIG9yIG5ldHdvcmtzLCB3ZSBjYW4gdXBkYXRlIHRoZVxyXG4gICAgLy8gbG9jYWwgUmVhY3Qgc3RhdGUgd2l0aCB0aGF0IG5ldyBpbmZvcm1hdGlvbi5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3ZpZGVyPy5vbikge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlQWNjb3VudHNDaGFuZ2VkID0gKGFjY291bnRzOiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhY2NvdW50c0NoYW5nZWQnLCBhY2NvdW50cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZ2V0QmFsYW5jZShhY2NvdW50c1swXSwgZ2V0V2ViMyhwcm92aWRlcikpLnRoZW4oIF9iYWxhbmNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfQUREUkVTUycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFjY291bnRzWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlOiBfYmFsYW5jZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlQ2hhaW5DaGFuZ2VkID0gKGFjY291bnRzOiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhY2NvdW50c0NoYW5nZWQgY2hhaW4nLCBhY2NvdW50cylcclxuICAgICAgICAgICAgICAgIC8qZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX0FERFJFU1MnLFxyXG4gICAgICAgICAgICAgICAgICBhZGRyZXNzOiBhY2NvdW50c1swXSxcclxuICAgICAgICAgICAgICAgIH0pKi9cclxuICAgICAgICAgICAgICAgIGNvbm5lY3QoKS50aGVuKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVEaXNjb25uZWN0ID0gKGVycm9yOiB7IGNvZGU6IG51bWJlcjsgbWVzc2FnZTogc3RyaW5nIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGlzY29ubmVjdCcsIGVycm9yKVxyXG4gICAgICAgICAgICAgICAgZGlzY29ubmVjdCgpLnRoZW4oKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcm92aWRlci5vbignYWNjb3VudHNDaGFuZ2VkJywgaGFuZGxlQWNjb3VudHNDaGFuZ2VkKVxyXG4gICAgICAgICAgICBwcm92aWRlci5vbignY2hhaW5DaGFuZ2VkJywgaGFuZGxlQ2hhaW5DaGFuZ2VkKVxyXG4gICAgICAgICAgICBwcm92aWRlci5vbignZGlzY29ubmVjdCcsIGhhbmRsZURpc2Nvbm5lY3QpXHJcblxyXG4gICAgICAgICAgICAvLyBTdWJzY3JpcHRpb24gQ2xlYW51cFxyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3ZpZGVyLnJlbW92ZUxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIucmVtb3ZlTGlzdGVuZXIoJ2FjY291bnRzQ2hhbmdlZCcsIGhhbmRsZUFjY291bnRzQ2hhbmdlZClcclxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5yZW1vdmVMaXN0ZW5lcignY2hhaW5DaGFuZ2VkJywgaGFuZGxlQ2hhaW5DaGFuZ2VkKVxyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLnJlbW92ZUxpc3RlbmVyKCdkaXNjb25uZWN0JywgaGFuZGxlRGlzY29ubmVjdClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm92aWRlciwgZGlzY29ubmVjdF0pXHJcblxyXG4gICAgbGV0IGNoYWluRGF0YSA9IGdldENoYWluRGF0YShjaGFpbklkKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgIHthZGRyZXNzICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTFcIj5OZXR3b3JrOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjaGFpbkRhdGE/Lm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTFcIj5BZGRyZXNzOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntlbGxpcHNlQWRkcmVzcyhhZGRyZXNzKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMVwiPkJhbGFuY2U6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2JhbGFuY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5TdHJlZXQgUGxhY2U8L2gxPlxyXG4gICAgICAgICAgICAgICAge3dlYjNQcm92aWRlciA/IChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtkaXNjb25uZWN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGlzY29ubmVjdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjb25uZWN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgcGFkZGluZzogNXJlbSAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ncmlkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3dlYjNQcm92aWRlciA/ICdyZWQnIDogJ2dyZWVuJ307XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1iLTAge0FkZHJlc3NcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYi0xIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd2FsbGV0Y29ubmVjdC93ZWIzLXByb3ZpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV0aGVyc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2FsbGV0bGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjNtb2RhbFwiKTsiXSwibmFtZXMiOlsic3VwcG9ydGVkQ2hhaW5zIiwibmFtZSIsInNob3J0X25hbWUiLCJjaGFpbiIsIm5ldHdvcmsiLCJjaGFpbl9pZCIsIm5ldHdvcmtfaWQiLCJycGNfdXJsIiwibmF0aXZlX2N1cnJlbmN5Iiwic3ltYm9sIiwiZGVjaW1hbHMiLCJjb250cmFjdEFkZHJlc3MiLCJiYWxhbmNlIiwiV2ViMyIsImdldENoYWluRGF0YSIsImNoYWluSWQiLCJjaGFpbkRhdGEiLCJmaWx0ZXIiLCJFcnJvciIsIkFQSV9LRVkiLCJnZXRJbmZ1cmFJRCIsImluY2x1ZGVzIiwicnBjVXJsIiwicmVwbGFjZSIsImVsbGlwc2VBZGRyZXNzIiwiYWRkcmVzcyIsIndpZHRoIiwic2xpY2UiLCJnZXRCYWxhbmNlIiwiX2FkZHJlc3MiLCJfd2ViMyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZXRoIiwidGhlbiIsInJlc3VsdCIsImV0aEJhbGFuY2UiLCJ1dGlscyIsImZyb21XZWkiLCJjb25zb2xlIiwibG9nIiwiZ2V0V2ViMyIsIl9wcm92aWRlciIsIldhbGxldENvbm5lY3RQcm92aWRlciIsInByb3ZpZGVycyIsIkhlYWQiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVJlZHVjZXIiLCJXYWxsZXRMaW5rIiwiV2ViM01vZGFsIiwiSU5GVVJBX0lEIiwicHJvdmlkZXJPcHRpb25zIiwid2FsbGV0Y29ubmVjdCIsInBhY2thZ2UiLCJvcHRpb25zIiwiaW5mdXJhSWQiLCJkaXNwbGF5IiwibG9nbyIsImRlc2NyaXB0aW9uIiwiYXBwTmFtZSIsIm5ldHdvcmtVcmwiLCJjb25uZWN0b3IiLCJfIiwid2FsbGV0TGluayIsInByb3ZpZGVyIiwibWFrZVdlYjNQcm92aWRlciIsImVuYWJsZSIsIndlYjNNb2RhbCIsImNhY2hlUHJvdmlkZXIiLCJpbml0aWFsU3RhdGUiLCJ3ZWIzUHJvdmlkZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSG9tZSIsImRpc3BhdGNoIiwiY29ubmVjdCIsIldlYjNQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsImdldEFkZHJlc3MiLCJnZXROZXR3b3JrIiwiX2JhbGFuY2UiLCJkaXNjb25uZWN0IiwiY2xlYXJDYWNoZWRQcm92aWRlciIsImNhY2hlZFByb3ZpZGVyIiwib24iLCJoYW5kbGVBY2NvdW50c0NoYW5nZWQiLCJhY2NvdW50cyIsImhhbmRsZUNoYWluQ2hhbmdlZCIsImhhbmRsZURpc2Nvbm5lY3QiLCJlcnJvciIsInJlbW92ZUxpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==