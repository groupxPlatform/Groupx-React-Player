(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

},{"react":"react"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHtml5video = require('react-html5video');

var _reactHtml5video2 = _interopRequireDefault(_reactHtml5video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_React$Component) {
  _inherits(Player, _React$Component);

  function Player() {
    _classCallCheck(this, Player);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Player).apply(this, arguments));
  }

  _createClass(Player, [{
    key: 'componetWillMount',
    value: function componetWillMount() {
      var screenHeight = screen.height;
      console.log(screenHeight);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactHtml5video2.default,
        { controls: true, autoPlay: true, muted: true, fullscreen: true, height: '100%', width: '100%' },
        _react2.default.createElement('source', { src: '/videos/Introduction.mp4', type: 'video/mp4' })
      );
    }
  }]);

  return Player;
}(_react2.default.Component);

exports.default = Player;

},{"react":"react","react-html5video":23}],3:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter2.default,
  { history: history },
  _routes2.default
), document.getElementById('app'));

},{"./routes":4,"history/lib/createBrowserHistory":13,"react":"react","react-dom":"react-dom","react-router":"react-router"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./App.js');

var _App2 = _interopRequireDefault(_App);

var _Player = require('./Player.js');

var _Player2 = _interopRequireDefault(_Player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { component: _App2.default },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Player2.default })
);

},{"./App.js":1,"./Player.js":2,"react":"react","react-router":"react-router"}],5:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":6,"./lib/keys.js":7}],6:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],7:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],8:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],9:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],10:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))

},{"_process":22,"warning":24}],11:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  // FIXME: Work around our browser history not working correctly on Chrome
  // iOS: https://github.com/rackt/react-router/issues/2565
  if (ua.indexOf('CriOS') !== -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],12:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],13:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    var location = _parsePath2['default'](path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":8,"./DOMStateStorage":10,"./DOMUtils":11,"./ExecutionEnvironment":12,"./createDOMHistory":14,"./parsePath":19,"_process":22,"invariant":21}],14:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./DOMUtils":11,"./ExecutionEnvironment":12,"./createHistory":15,"_process":22,"invariant":21}],15:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

    if (typeof action === 'object') {
      //warning(
      //  false,
      //  'The state (2nd) argument to history.createLocation is deprecated; use a ' +
      //  'location descriptor instead'
      //)

      if (typeof location === 'string') location = _parsePath2['default'](location);

      location = _extends({}, location, { state: action });

      action = key;
      key = arguments[3] || createKey();
    }

    return _createLocation3['default'](location, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":8,"./AsyncUtils":9,"./createLocation":16,"./deprecate":17,"./parsePath":19,"./runTransitionHook":20,"deep-equal":5}],16:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _parsePath2['default'](location);

  if (typeof action === 'object') {
    //warning(
    //  false,
    //  'The state (2nd) argument to createLocation is deprecated; use a ' +
    //  'location descriptor instead'
    //)

    location = _extends({}, location, { state: action });

    action = key || _Actions.POP;
    key = _fourthArg;
  }

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';
  var state = location.state || null;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":8,"./parsePath":19}],17:[function(require,module,exports){
//import warning from 'warning'

"use strict";

exports.__esModule = true;
function deprecate(fn) {
  return fn;
  //return function () {
  //  warning(false, '[history] ' + message)
  //  return fn.apply(this, arguments)
  //}
}

exports["default"] = deprecate;
module.exports = exports["default"];
},{}],18:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],19:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./extractPath":18,"_process":22,"warning":24}],20:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":22,"warning":24}],21:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":22}],22:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],23:[function(require,module,exports){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactHtml5Video"] = factory(require("react"));
	else
		root["ReactHtml5Video"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_63__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(20);


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _objectWithoutProperties = __webpack_require__(21)['default'];

	var _extends = __webpack_require__(23)['default'];

	var _Object$assign = __webpack_require__(24)['default'];

	var _interopRequireDefault = __webpack_require__(61)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(63);

	var _react2 = _interopRequireDefault(_react);

	var _overlayOverlay = __webpack_require__(64);

	var _overlayOverlay2 = _interopRequireDefault(_overlayOverlay);

	var _controlsControls = __webpack_require__(67);

	var _controlsControls2 = _interopRequireDefault(_controlsControls);

	var _controlsSeekSeek = __webpack_require__(69);

	var _controlsSeekSeek2 = _interopRequireDefault(_controlsSeekSeek);

	var _controlsPlayPlay = __webpack_require__(68);

	var _controlsPlayPlay2 = _interopRequireDefault(_controlsPlayPlay);

	var _controlsMuteMute = __webpack_require__(76);

	var _controlsMuteMute2 = _interopRequireDefault(_controlsMuteMute);

	var _controlsFullscreenFullscreen = __webpack_require__(78);

	var _controlsFullscreenFullscreen2 = _interopRequireDefault(_controlsFullscreenFullscreen);

	var _controlsTimeTime = __webpack_require__(77);

	var _controlsTimeTime2 = _interopRequireDefault(_controlsTimeTime);

	var _lodashThrottle = __webpack_require__(79);

	var _lodashThrottle2 = _interopRequireDefault(_lodashThrottle);

	var _assetsCopy = __webpack_require__(82);

	var _assetsCopy2 = _interopRequireDefault(_assetsCopy);

	var EVENTS = ['onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting'];

	var Video = _react2['default'].createClass({
	    displayName: 'Video',

	    propTypes: {
	        // Non-standard props
	        copyKeys: _react2['default'].PropTypes.object,
	        children: _react2['default'].PropTypes.node,

	        // HTML5 Video standard attributes
	        autoPlay: _react2['default'].PropTypes.bool,
	        muted: _react2['default'].PropTypes.bool,
	        controls: _react2['default'].PropTypes.bool
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            copyKeys: _assetsCopy2['default']
	        };
	    },

	    getInitialState: function getInitialState() {
	        // Set state from props and always use these
	        // to check state of video as they will update
	        // on the video events. Changing this state however will not
	        // change the video. The API methods must be used.
	        return {
	            networkState: 0,
	            paused: !this.props.autoPlay,
	            muted: !!this.props.muted,
	            volume: 1,
	            error: false,
	            loading: false
	        };
	    },

	    /**
	     * Creates a throttle update method.
	     * @return {undefined}
	     */
	    componentWillMount: function componentWillMount() {
	        var _this = this;

	        // Also bind 'this' as we call _updateStateFromVideo outside
	        // of Reacts synthetic events as well.
	        this._updateStateFromVideo = (0, _lodashThrottle2['default'])(this.updateStateFromVideo, 100).bind(this);
	        // Set up all React media events and call method
	        // on props if provided.
	        this.mediaEventProps = EVENTS.reduce(function (p, c) {
	            p[c] = function () {
	                if (c in _this.props && typeof _this.props[c] === 'function') {
	                    // A prop exists for this mediaEvent, call it.
	                    _this.props[c]();
	                }
	                _this._updateStateFromVideo();
	            };
	            return p;
	        }, {});
	    },

	    /**
	     * Bind eventlisteners not supported by React's synthetic events
	     * https://facebook.github.io/react/docs/events.html
	     * @return {undefined}
	     */
	    componentDidMount: function componentDidMount() {
	        // Listen to error of last source.
	        this.videoEl.children[this.videoEl.children.length - 1].addEventListener('error', this._updateStateFromVideo);
	    },

	    /**
	     * Removes event listeners bound outside of React's synthetic events
	     * @return {undefined}
	     */
	    componentWillUnmount: function componentWillUnmount() {
	        // Remove event listener from video.
	        this.videoEl.children[this.videoEl.children.length - 1].removeEventListener('error', this._updateStateFromVideo);
	    },

	    /**
	     * Toggles the video to play and pause.
	     * @return {undefined}
	     */
	    togglePlay: function togglePlay() {
	        if (this.state.paused) {
	            this.play();
	        } else {
	            this.pause();
	        }
	    },

	    /**
	     * Toggles the video to mute and unmute.
	     * @return {undefined}
	     */
	    toggleMute: function toggleMute() {
	        if (this.state.muted) {
	            this.unmute();
	        } else {
	            this.mute();
	        }
	    },

	    /**
	     * Loads video.
	     * @return {undefined}
	     */
	    load: function load() {
	        this.videoEl.load();
	    },

	    /**
	     * Sets the video to fullscreen.
	     * @return {undefined}
	     */
	    fullscreen: function fullscreen() {
	        if (this.videoEl.requestFullscreen) {
	            this.videoEl.requestFullscreen();
	        } else if (this.videoEl.msRequestFullscreen) {
	            this.videoEl.msRequestFullscreen();
	        } else if (this.videoEl.mozRequestFullScreen) {
	            this.videoEl.mozRequestFullScreen();
	        } else if (this.videoEl.webkitRequestFullscreen) {
	            this.videoEl.webkitRequestFullscreen();
	        }
	    },

	    /**
	     * Plays the video.
	     * @return {undefined}
	     */
	    play: function play() {
	        this.videoEl.play();
	    },

	    /**
	     * Pauses the video.
	     * @return {undefined}
	     */
	    pause: function pause() {
	        this.videoEl.pause();
	    },

	    /**
	     * Unmutes video.
	     * @return {undefined}
	     */
	    unmute: function unmute() {
	        this.videoEl.muted = false;
	    },

	    /**
	     * Mutes the video.
	     * @return {undefined}
	     */
	    mute: function mute() {
	        this.videoEl.muted = true;
	    },

	    /**
	     * Seeks the video timeline.
	     * @param  {number} time The value in seconds to seek to
	     * @return {undefined}
	     */
	    seek: function seek(time) {
	        this.videoEl.currentTime = time;
	    },

	    /**
	     * Sets the video volume.
	     * @param  {number} volume The volume level between 0 and 1.
	     * @return {undefined}
	     */
	    setVolume: function setVolume(volume) {
	        this.videoEl.volume = volume;
	    },

	    /**
	     * Updates the React component state from the DOM video properties.
	     * This is where the magic happens.
	     * @return {undefined}
	     */
	    updateStateFromVideo: function updateStateFromVideo() {
	        this.setState({
	            // Standard video properties
	            duration: this.videoEl.duration,
	            currentTime: this.videoEl.currentTime,
	            buffered: this.videoEl.buffered,
	            paused: this.videoEl.paused,
	            muted: this.videoEl.muted,
	            volume: this.videoEl.volume,
	            readyState: this.videoEl.readyState,

	            // Non-standard state computed from properties
	            percentageBuffered: this.videoEl.buffered.length && this.videoEl.buffered.end(this.videoEl.buffered.length - 1) / this.videoEl.duration * 100,
	            percentagePlayed: this.videoEl.currentTime / this.videoEl.duration * 100,
	            error: this.videoEl.networkState === this.videoEl.NETWORK_NO_SOURCE,
	            loading: this.videoEl.readyState < this.videoEl.HAVE_ENOUGH_DATA
	        });
	    },

	    /**
	     * Returns everything but 'source' nodes from children
	     * and extends props so all children have access to Video API and state.
	     * If there are no controls provided, returns default Controls.
	     * @return {Array.<ReactElement>} An array of components.
	     */
	    renderControls: function renderControls() {
	        var extendedProps = _Object$assign({
	            // The public methods that all controls should be able to
	            // use.
	            togglePlay: this.togglePlay,
	            toggleMute: this.toggleMute,
	            play: this.play,
	            pause: this.pause,
	            mute: this.mute,
	            unmute: this.unmute,
	            seek: this.seek,
	            fullscreen: this.fullscreen,
	            setVolume: this.setVolume
	        }, this.state, { copyKeys: this.props.copyKeys });

	        var controls = _react2['default'].Children.map(this.props.children, function (child) {
	            if (child.type === 'source') {
	                return void 0;
	            }
	            return _react2['default'].cloneElement(child, extendedProps);
	        });

	        if (!controls.length) {
	            controls = _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(_overlayOverlay2['default'], extendedProps),
	                _react2['default'].createElement(_controlsControls2['default'], extendedProps)
	            );
	        }
	        return controls;
	    },

	    /**
	     * Returns video 'source' nodes from children.
	     * @return {Array.<ReactElement>} An array of components.
	     */
	    renderSources: function renderSources() {
	        return _react2['default'].Children.map(this.props.children, function (child) {
	            if (child.type !== 'source') {
	                return void 0;
	            }
	            return child;
	        });
	    },

	    /**
	     * Gets the video class name based on its state
	     * @return {string} Class string
	     */
	    getVideoClassName: function getVideoClassName() {
	        var classString = 'video';

	        if (this.state.error) {
	            classString += ' video--error';
	        } else if (this.state.loading) {
	            classString += ' video--loading';
	        } else if (this.state.paused) {
	            classString += ' video--paused';
	        } else {
	            classString += ' video--playing';
	        }

	        if (this.state.focused) {
	            classString += ' video--focused';
	        }
	        return classString;
	    },

	    /**
	     * Sets state to show focused class on video player.
	     * @return {undefined}
	     */
	    onFocus: function onFocus() {
	        this.setState({
	            focused: true
	        });
	    },

	    /**
	     * Sets state to not be focused to remove class form video
	     * player.
	     * @return {undefined}
	     */
	    onBlur: function onBlur() {
	        this.setState({
	            focused: false
	        });
	    },

	    render: function render() {
	        var _this2 = this;

	        // If controls prop is provided remove it
	        // and use our own controls.
	        var _props = this.props;
	        var controls = _props.controls;

	        var otherProps = _objectWithoutProperties(_props, ['controls']);

	        return _react2['default'].createElement(
	            'div',
	            { className: this.getVideoClassName(),
	                tabIndex: '0',
	                onFocus: this.onFocus,
	                onBlur: this.onBlur },
	            _react2['default'].createElement(
	                'video',
	                _extends({}, otherProps, {
	                    className: 'video__el',
	                    ref: function (el) {
	                        _this2.videoEl = el;
	                    }
	                    //  We have throttled `_updateStateFromVideo` so listen to
	                    //  every available Media event that React allows and
	                    //  infer the Video state in that method from the Video properties.
	                }, this.mediaEventProps),
	                this.renderSources()
	            ),
	            controls ? this.renderControls() : ''
	        );
	    }
	});

	exports['default'] = Video;
	exports.Controls = _controlsControls2['default'];
	exports.Seek = _controlsSeekSeek2['default'];
	exports.Play = _controlsPlayPlay2['default'];
	exports.Mute = _controlsMuteMute2['default'];
	exports.Fullscreen = _controlsFullscreenFullscreen2['default'];
	exports.Time = _controlsTimeTime2['default'];
	exports.Overlay = _overlayOverlay2['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(22);

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(24);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(25), __esModule: true };

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(26);
	module.exports = __webpack_require__(29).Object.assign;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(27);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(42)});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(28)
	  , core      = __webpack_require__(29)
	  , ctx       = __webpack_require__(30)
	  , hide      = __webpack_require__(32)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 28 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 29 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.2.2'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(31);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(33)
	  , createDesc = __webpack_require__(41);
	module.exports = __webpack_require__(37) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(34)
	  , IE8_DOM_DEFINE = __webpack_require__(36)
	  , toPrimitive    = __webpack_require__(40)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(37) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(35);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(37) && !__webpack_require__(38)(function(){
	  return Object.defineProperty(__webpack_require__(39)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(38)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(35)
	  , document = __webpack_require__(28).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(35);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(43)
	  , gOPS     = __webpack_require__(58)
	  , pIE      = __webpack_require__(59)
	  , toObject = __webpack_require__(60)
	  , IObject  = __webpack_require__(47)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(38)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(44)
	  , enumBugKeys = __webpack_require__(57);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(45)
	  , toIObject    = __webpack_require__(46)
	  , arrayIndexOf = __webpack_require__(50)(false)
	  , IE_PROTO     = __webpack_require__(54)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(47)
	  , defined = __webpack_require__(49);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(48);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(46)
	  , toLength  = __webpack_require__(51)
	  , toIndex   = __webpack_require__(53);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(52)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(52)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(55)('keys')
	  , uid    = __webpack_require__(56);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(28)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 58 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 59 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(49);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(62);

/***/ },
/* 62 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_63__;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(61)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(63);

	var _react2 = _interopRequireDefault(_react);

	var _iconIcon = __webpack_require__(65);

	var _iconIcon2 = _interopRequireDefault(_iconIcon);

	var _spinnerSpinner = __webpack_require__(66);

	var _spinnerSpinner2 = _interopRequireDefault(_spinnerSpinner);

	var Overlay = _react2['default'].createClass({
	    displayName: 'Overlay',

	    propTypes: {
	        error: _react2['default'].PropTypes.bool,
	        togglePlay: _react2['default'].PropTypes.func,
	        paused: _react2['default'].PropTypes.bool,
	        copyKeys: _react2['default'].PropTypes.object,
	        loading: _react2['default'].PropTypes.bool
	    },

	    renderContent: function renderContent() {
	        var content;
	        if (this.props.error) {
	            content = _react2['default'].createElement(
	                'div',
	                { className: 'video-overlay__error' },
	                _react2['default'].createElement(
	                    'p',
	                    { className: 'video-overlay__error-text' },
	                    this.props.copyKeys.sourceError
	                )
	            );
	        } else if (this.props.loading) {
	            content = _react2['default'].createElement(
	                'div',
	                { className: 'video-overlay__loader' },
	                _react2['default'].createElement(_spinnerSpinner2['default'], null)
	            );
	        } else {
	            content = _react2['default'].createElement(
	                'div',
	                { className: 'video-overlay__play', onClick: this.props.togglePlay },
	                this.props.paused ? _react2['default'].createElement(_iconIcon2['default'], { name: 'play-1' }) : ''
	            );
	        }
	        return content;
	    },

	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'video-overlay' },
	            this.renderContent()
	        );
	    }

	});

	exports['default'] = Overlay;
	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/*eslint-disable */
	/*
	 * Generated by the 'fontello-react' Grunt task.
	 */
	'use strict';

	var _interopRequireDefault = __webpack_require__(61)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(63);

	var _react2 = _interopRequireDefault(_react);

	var Icon = _react2['default'].createClass({
	    displayName: 'Icon',

	    propTypes: {
	        name: _react2['default'].PropTypes.oneOf(['play-1', 'volume-off', 'volume-down', 'volume-up', 'resize-full', 'resize-small', 'pause-1'])
	    },

	    /**
	     * Default the icon to the first one just to show something
	     * @return {Object} The default props
	     */
	    getDefaultProps: function getDefaultProps() {
	        return {
	            name: 'play-1'
	        };
	    },

	    render: function render() {
	        return _react2['default'].createElement('span', { className: 'video-icon video-icon--' + this.props.name });
	    }

	});

	exports['default'] = Icon;
	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(61)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(63);

	var _react2 = _interopRequireDefault(_react);

	var Spinner = _react2["default"].createClass({
	    displayName: "Spinner",

	    render: function render() {
	        return _react2["default"].createElement(
	            "div",
	            { className: "video-spinner" },
	            _react2["default"].createElement("div", { className: "video-spinner__rect1" }),
	            _react2["default"].createElement("div", { className: "video-spinner__rect2" }),
	            _react2["default"].createElement("div", { className: "video-spinner__rect3" }),
	            _react2["default"].createElement("div", { className: "video-spinner__rect4" }),
	            _react2["default"].createElement("div", { className: "video-spinner__rect5" })
	        );
	    }

	});

	exports["default"] = Spinner;
	module.exports = exports["default"];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(61)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(63);

	var _react2 = _interopRequireDefault(_react);

	var _playPlay = __webpack_require__(68);

	var _playPlay2 = _interopRequireDefault(_playPlay);

	var _seekSeek = __webpack_require__(69);

	var _seekSeek2 = _interopRequireDefault(_seekSeek);

	var _muteMute = __webpack_require__(76);

	var _muteMute2 = _interopRequireDefault(_muteMute);

	var _timeTime = __webpack_require__(77);

	var _timeTime2 = _interopRequireDefault(_timeTime);

	var _fullscreenFullscreen = __webpack_require__(78);

	var _fullscreenFullscreen2 = _interopRequireDefault(_fullscreenFullscreen);

	var Controls = _react2['default'].createClass({
	    displayName: 'Controls',

	    propTypes: {
	        error: _react2['default'].PropTypes.bool,
	        children: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.node), _react2['default'].PropTypes.node])
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            children: [_react2['default'].createElement(_playPlay2['default'], null), _react2['default'].createElement(_seekSeek2['default'], null), _react2['default'].createElement(_timeTime2['default'], null), _react2['default'].createElement(_muteMute2['default'], null), _react2['default'].createElement(_fullscreenFullscreen2['default'], null)]
	        };
	    },

	    /**
	     * Returns children components with props
	     * from the parent Video component. Needed
	     * for when custom React components are used.
	     * @return {Array.<ReactElement>} An array of components.
	     */
	    renderChildren: function renderChildren() {
	        var _this = this;

	        return _react2['default'].Children.map(this.props.children, function (child) {
	            return _react2['default'].cloneElement(child, _this.props);
	        });
	    },

	    render: function render() {
	        return !this.props.error ? _react2['default'].createElement(
	            'div',
	            { className: 'video-controls video__controls' },
	            this.renderChildren()
	        ) : null;
	    }
	});

	exports['default'] = Controls;
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(61)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(63);

	var _react2 = _interopRequireDefault(_react);

	var _iconIcon = __webpack_require__(65);

	var _iconIcon2 = _interopRequireDefault(_iconIcon);

	var Play = _react2['default'].createClass({
	    displayName: 'Play',

	    propTypes: {
	        copyKeys: _react2['default'].PropTypes.object,
	        togglePlay: _react2['default'].PropTypes.func,
	        paused: _react2['default'].PropTypes.bool
	    },

	    /**
	     * As controls receive all props for extensibility, we do a quick
	     * check and make sure only the props we care about have changed.
	     * @param  {object} nextProps The next props from parent
	     * @return {boolean}          Whether we re-render or not
	     */
	    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	        return this.props.paused !== nextProps.paused || this.props.togglePlay !== nextProps.togglePlay;
	    },

	    render: function render() {
	        return _react2['default'].createElement(
	            'button',
	            {
	                className: 'video-play video__control',
	                onClick: this.props.togglePlay,
	                'aria-label': this.props.paused ? this.props.copyKeys.play : this.props.copyKeys.pause },
	            this.props.paused ? _react2['default'].createElement(_iconIcon2['default'], { name: 'play-1' }) : _react2['default'].createElement(_iconIcon2['default'], { name: 'pause-1' })
	        );
	    }
	});

	exports['default'] = Play;
	module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(61)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(63);

	var _react2 = _interopRequireDefault(_react);

	var _progressbarProgressbar = __webpack_require__(70);

	var _progressbarProgressbar2 = _interopRequireDefault(_progressbarProgressbar);

	var Seek = _react2['default'].createClass({
	    displayName: 'Seek',

	    propTypes: {
	        copyKeys: _react2['default'].PropTypes.object,
	        seek: _react2['default'].PropTypes.func,
	        percentageBuffered: _react2['default'].PropTypes.number,
	        percentagePlayed: _react2['default'].PropTypes.number,
	        duration: _react2['default'].PropTypes.number
	    },

	    getInitialState: function getInitialState() {
	        return {
	            // When the child range input becomes focused,
	            // we need to set this custom seek bar to look
	            // 'focused' with the correct styles. Need to
	            // do this via a class.
	            focused: false
	        };
	    },

	    /**
	     * As controls receive all props for extensibility, we do a quick
	     * check and make sure only the props we care about have changed.
	     * @param  {object} nextProps The next props from parent
	     * @return {boolean}          Whether we re-render or not
	     */
	    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	        return this.props.seek !== nextProps.seek || this.props.percentageBuffered !== nextProps.percentageBuffered || this.props.percentagePlayed !== nextProps.percentagePlayed || this.props.duration !== nextProps.duration;
	    },

	    /**
	     * Calculates the seek time based on change of input.
	     * @param  {object} e Event object
	     * @return {undefined}
	     */
	    seek: function seek(e) {
	        this.props.seek(e.target.value * this.props.duration / 100);
	    },

	    onFocus: function onFocus() {
	        this.setState({
	            focused: true
	        });
	    },

	    onBlur: function onBlur() {
	        this.setState({
	            focused: false
	        });
	    },

	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            {
	                className: 'video-seek video__control' + (this.state.focused ? ' video__control--focused' : ''),
	                'aria-label': this.props.copyKeys.seek },
	            _react2['default'].createElement(
	                'div',
	                { className: 'video-seek__container' },
	                _react2['default'].createElement('div', { style: {
	                        width: this.props.percentageBuffered + '%'
	                    }, className: 'video-seek__buffer-bar' }),
	                _react2['default'].createElement(_progressbarProgressbar2['default'], {
	                    onBlur: this.onBlur,
	                    onFocus: this.onFocus,
	                    onChange: this.seek,
	                    progress: this.props.percentagePlayed })
	            )
	        );
	    }
	});

	exports['default'] = Seek;
	module.exports = exports['default'];

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _defineProperty = __webpack_require__(71)['default'];

	var _interopRequireDefault = __webpack_require__(61)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(63);

	var _react2 = _interopRequireDefault(_react);

	var ProgressBar = _react2['default'].createClass({
	    displayName: 'ProgressBar',

	    propTypes: {
	        orientation: _react2['default'].PropTypes.string,
	        step: _react2['default'].PropTypes.number,
	        progress: _react2['default'].PropTypes.number,
	        onChange: _react2['default'].PropTypes.func,
	        onFocus: _react2['default'].PropTypes.func,
	        onBlur: _react2['default'].PropTypes.func
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            orientation: 'horizontal',
	            step: 0.1,
	            progress: 0,
	            onChange: this.onChange,
	            onFocus: this.onFocus,
	            onBlur: this.onBlur
	        };
	    },

	    componentDidMount: function componentDidMount() {
	        // 'orient' is not supported by React but
	        // is required for Firefox. Setting manually.
	        // https://github.com/facebook/react/issues/2453
	        this.refs.input.setAttribute('orient', this.props.orientation);
	    },

	    onChange: function onChange() {
	        // Placeholder
	    },

	    onFocus: function onFocus() {
	        // Placeholder
	    },

	    onBlur: function onBlur() {
	        // Placeholder
	    },

	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'video-progress-bar ' + (this.props.orientation === 'horizontal' ? 'video-progress-bar--horizontal' : 'video-progress-bar--vertical') },
	            _react2['default'].createElement('div', { className: 'video-progress-bar__fill', style: _defineProperty({}, this.props.orientation === 'horizontal' ? 'width' : 'height', this.props.progress + '%') }),
	            _react2['default'].createElement('input', { className: 'video-progress-bar__input',
	                onBlur: this.props.onBlur,
	                onFocus: this.props.onFocus,
	                ref: 'input',
	                onChange: this.props.onChange,
	                type: 'range',
	                min: '0',
	                max: '100',
	                value: this.props.progress,
	                step: this.props.step })
	        );
	    }
	});

	exports['default'] = ProgressBar;
	module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(72);

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(73);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(74), __esModule: true };

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(75);
	var $Object = __webpack_require__(29).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(27);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(37), 'Object', {defineProperty: __webpack_require__(33).f});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(61)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(63);

	var _react2 = _interopRequireDefault(_react);

	var _iconIcon = __webpack_require__(65);

	var _iconIcon2 = _interopRequireDefault(_iconIcon);

	var _progressbarProgressbar = __webpack_require__(70);

	var _progressbarProgressbar2 = _interopRequireDefault(_progressbarProgressbar);

	var Mute = _react2['default'].createClass({
	    displayName: 'Mute',

	    propTypes: {
	        copyKeys: _react2['default'].PropTypes.object,
	        volume: _react2['default'].PropTypes.number,
	        unmute: _react2['default'].PropTypes.func,
	        setVolume: _react2['default'].PropTypes.func,
	        toggleMute: _react2['default'].PropTypes.func,
	        muted: _react2['default'].PropTypes.bool
	    },

	    /**
	     * As controls receive all props for extensibility, we do a quick
	     * check and make sure only the props we care about have changed.
	     * @param  {object} nextProps The next props from parent
	     * @return {boolean}          Whether we re-render or not
	     */
	    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	        return this.props.muted !== nextProps.muted || this.props.toggleMute !== nextProps.toggleMute || this.props.volume !== nextProps.volume || this.props.setVolume !== nextProps.setVolume || this.props.unmute !== nextProps.unmute;
	    },

	    /**
	     * Calculates the seek time based on click position and element offset.
	     * @param  {object} e Event object
	     * @return {undefined}
	     */
	    changeVolume: function changeVolume(e) {
	        this.props.setVolume(e.target.value / 100);
	        this.props.unmute();
	    },

	    toggleMute: function toggleMute() {
	        // If we volume has been dragged to 0, assume it is in
	        // a muted state and then toggle to full volume.
	        if (this.props.volume <= 0) {
	            this.props.setVolume(1);
	        } else {
	            this.props.toggleMute();
	        }
	    },

	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'video-mute video__control' },
	            _react2['default'].createElement(
	                'button',
	                {
	                    className: 'video-mute__inner',
	                    onClick: this.toggleMute,
	                    'aria-label': this.props.muted || this.props.volume <= 0 ? this.props.copyKeys.unmute : this.props.copyKeys.mute },
	                this.props.muted || this.props.volume <= 0 ? _react2['default'].createElement(_iconIcon2['default'], { name: 'volume-off' }) : _react2['default'].createElement(_iconIcon2['default'], { name: 'volume-up' })
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'video-mute__volume' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'video-mute__track' },
	                    _react2['default'].createElement(_progressbarProgressbar2['default'], {
	                        orientation: 'vertical',
	                        onChange: this.changeVolume,
	                        progress: this.props.muted ? 0 : this.props.volume * 100
	                    })
	                )
	            )
	        );
	    }
	});

	exports['default'] = Mute;
	module.exports = exports['default'];

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(61)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(63);

	var _react2 = _interopRequireDefault(_react);

	var _iconIcon = __webpack_require__(65);

	var _iconIcon2 = _interopRequireDefault(_iconIcon);

	var Time = _react2['default'].createClass({
	    displayName: 'Time',

	    propTypes: {
	        currentTime: _react2['default'].PropTypes.number,
	        duration: _react2['default'].PropTypes.number
	    },

	    /**
	     * As controls receive all props for extensibility, we do a quick
	     * check and make sure only the props we care about have changed.
	     * @param  {object} nextProps The next props from parent
	     * @return {boolean}          Whether we re-render or not
	     */
	    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	        return this.props.currentTime !== nextProps.currentTime || this.props.duration !== nextProps.duration;
	    },

	    /**
	     * Formats time into a friendlier format
	     * @param  {number} seconds Time in seconds
	     * @return {string}         Timestamp in the format of HH:MM:SS
	     */
	    formatTime: function formatTime(seconds) {
	        var date = new Date(null);
	        seconds = isNaN(seconds) ? 0 : Math.floor(seconds);
	        date.setSeconds(seconds);
	        return date.toISOString().substr(11, 8);
	    },

	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'video-time video__control' },
	            _react2['default'].createElement(
	                'span',
	                { className: 'video-time__current' },
	                this.formatTime(this.props.currentTime)
	            ),
	            '/',
	            _react2['default'].createElement(
	                'span',
	                { className: 'video-time__duration' },
	                this.formatTime(this.props.duration)
	            )
	        );
	    }
	});

	exports['default'] = Time;
	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(61)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(63);

	var _react2 = _interopRequireDefault(_react);

	var _iconIcon = __webpack_require__(65);

	var _iconIcon2 = _interopRequireDefault(_iconIcon);

	var Fullscreen = _react2['default'].createClass({
	    displayName: 'Fullscreen',

	    propTypes: {
	        copyKeys: _react2['default'].PropTypes.object,
	        fullscreen: _react2['default'].PropTypes.func
	    },

	    /**
	     * As controls receive all props for extensibility, we do a quick
	     * check and make sure only the props we care about have changed.
	     * @param  {object} nextProps The next props from parent
	     * @return {boolean}          Whether we re-render or not
	     */
	    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	        return this.props.fullscreen !== nextProps.fullscreen;
	    },

	    render: function render() {
	        return _react2['default'].createElement(
	            'button',
	            {
	                onClick: this.props.fullscreen,
	                className: 'video-fullscreen video__control',
	                'aria-label': this.props.copyKeys.fullscreen },
	            _react2['default'].createElement(_iconIcon2['default'], { name: 'resize-full' })
	        );
	    }
	});

	exports['default'] = Fullscreen;
	module.exports = exports['default'];

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var debounce = __webpack_require__(80);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed invocations. Provide an options object to indicate
	 * that `func` should be invoked on the leading and/or trailing edge of the
	 * `wait` timeout. Subsequent calls to the throttled function return the
	 * result of the last `func` call.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the the throttled function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=true] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // avoid excessively updating the position while scrolling
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
	 * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
	 *   'trailing': false
	 * }));
	 *
	 * // cancel a trailing throttled call
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (options === false) {
	    leading = false;
	  } else if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, { 'leading': leading, 'maxWait': +wait, 'trailing': trailing });
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = throttle;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(81);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeNow = getNative(Date, 'now');

	/**
	 * Gets the number of milliseconds that have elapsed since the Unix epoch
	 * (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @category Date
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => logs the number of milliseconds it took for the deferred function to be invoked
	 */
	var now = nativeNow || function() {
	  return new Date().getTime();
	};

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed invocations. Provide an options object to indicate that `func`
	 * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	 * Subsequent calls to the debounced function return the result of the last
	 * `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=false] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	 *  delayed before it is invoked.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // avoid costly calculations while the window size is in flux
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	 * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // ensure `batchLog` is invoked once after 1 second of debounced calls
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', _.debounce(batchLog, 250, {
	 *   'maxWait': 1000
	 * }));
	 *
	 * // cancel a debounced call
	 * var todoChanges = _.debounce(batchLog, 1000);
	 * Object.observe(models.todo, todoChanges);
	 *
	 * Object.observe(models, function(changes) {
	 *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	 *     todoChanges.cancel();
	 *   }
	 * }, ['delete']);
	 *
	 * // ...at some point `models.todo` is changed
	 * models.todo.completed = true;
	 *
	 * // ...before 1 second has passed `models.todo` is deleted
	 * // which cancels the debounced `todoChanges` call
	 * delete models.todo;
	 */
	function debounce(func, wait, options) {
	  var args,
	      maxTimeoutId,
	      result,
	      stamp,
	      thisArg,
	      timeoutId,
	      trailingCall,
	      lastCalled = 0,
	      maxWait = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = wait < 0 ? 0 : (+wait || 0);
	  if (options === true) {
	    var leading = true;
	    trailing = false;
	  } else if (isObject(options)) {
	    leading = !!options.leading;
	    maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function cancel() {
	    if (timeoutId) {
	      clearTimeout(timeoutId);
	    }
	    if (maxTimeoutId) {
	      clearTimeout(maxTimeoutId);
	    }
	    lastCalled = 0;
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	  }

	  function complete(isCalled, id) {
	    if (id) {
	      clearTimeout(id);
	    }
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	    if (isCalled) {
	      lastCalled = now();
	      result = func.apply(thisArg, args);
	      if (!timeoutId && !maxTimeoutId) {
	        args = thisArg = undefined;
	      }
	    }
	  }

	  function delayed() {
	    var remaining = wait - (now() - stamp);
	    if (remaining <= 0 || remaining > wait) {
	      complete(trailingCall, maxTimeoutId);
	    } else {
	      timeoutId = setTimeout(delayed, remaining);
	    }
	  }

	  function maxDelayed() {
	    complete(trailing, timeoutId);
	  }

	  function debounced() {
	    args = arguments;
	    stamp = now();
	    thisArg = this;
	    trailingCall = trailing && (timeoutId || !leading);

	    if (maxWait === false) {
	      var leadingCall = leading && !timeoutId;
	    } else {
	      if (!maxTimeoutId && !leading) {
	        lastCalled = stamp;
	      }
	      var remaining = maxWait - (stamp - lastCalled),
	          isCalled = remaining <= 0 || remaining > maxWait;

	      if (isCalled) {
	        if (maxTimeoutId) {
	          maxTimeoutId = clearTimeout(maxTimeoutId);
	        }
	        lastCalled = stamp;
	        result = func.apply(thisArg, args);
	      }
	      else if (!maxTimeoutId) {
	        maxTimeoutId = setTimeout(maxDelayed, remaining);
	      }
	    }
	    if (isCalled && timeoutId) {
	      timeoutId = clearTimeout(timeoutId);
	    }
	    else if (!timeoutId && wait !== maxWait) {
	      timeoutId = setTimeout(delayed, wait);
	    }
	    if (leadingCall) {
	      isCalled = true;
	      result = func.apply(thisArg, args);
	    }
	    if (isCalled && !timeoutId && !maxTimeoutId) {
	      args = thisArg = undefined;
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  return debounced;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = debounce;


/***/ },
/* 81 */
/***/ function(module, exports) {

	/**
	 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = getNative;


/***/ },
/* 82 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var copy = {
	    sourceError: 'Video cannot be played in this browser.',
	    play: 'Play video',
	    pause: 'Pause video',
	    mute: 'Mute video',
	    unmute: 'Unmute video',
	    fullscreen: 'View video fullscreen',
	    seek: 'Seek video'
	};
	exports['default'] = copy;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
},{"react":"react"}],24:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":22}]},{},[3])


//# sourceMappingURL=bundle.js.map
