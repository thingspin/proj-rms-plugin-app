define(["app/plugins/sdk","jquery"], function(__WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__, __WEBPACK_EXTERNAL_MODULE_jquery__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./panel/asset-man-company/module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../node_modules/css-loader/lib/css-base.js":
/*!**********************************************************************************************************!*\
  !*** C:/Users/lonycell/works/src/github.com/thingspin/thingspin/node_modules/css-loader/lib/css-base.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../node_modules/style-loader/lib/addStyles.js":
/*!*************************************************************************************************************!*\
  !*** C:/Users/lonycell/works/src/github.com/thingspin/thingspin/node_modules/style-loader/lib/addStyles.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../../../../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../../../../node_modules/style-loader/lib/urls.js":
/*!********************************************************************************************************!*\
  !*** C:/Users/lonycell/works/src/github.com/thingspin/thingspin/node_modules/style-loader/lib/urls.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "../node_modules/jquery-ui/ui/version.js":
/*!***********************************************!*\
  !*** ../node_modules/jquery-ui/ui/version.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ "jquery") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
} ( function( $ ) {

$.ui = $.ui || {};

return $.ui.version = "1.12.1";

} ) );


/***/ }),

/***/ "../node_modules/jquery-ui/ui/widget.js":
/*!**********************************************!*\
  !*** ../node_modules/jquery-ui/ui/widget.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Widget
//>>group: Core
//>>description: Provides a factory for creating stateful widgets with a common API.
//>>docs: http://api.jqueryui.com/jQuery.widget/
//>>demos: http://jqueryui.com/widget/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ "jquery"), __webpack_require__(/*! ./version */ "../node_modules/jquery-ui/ui/version.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}( function( $ ) {

var widgetUuid = 0;
var widgetSlice = Array.prototype.slice;

$.cleanData = ( function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// Http://bugs.jquery.com/ticket/8235
			} catch ( e ) {}
		}
		orig( elems );
	};
} )( $.cleanData );

$.widget = function( name, base, prototype ) {
	var existingConstructor, constructor, basePrototype;

	// ProxiedPrototype allows the provided prototype to remain unmodified
	// so that it can be used as a mixin for multiple widgets (#8876)
	var proxiedPrototype = {};

	var namespace = name.split( "." )[ 0 ];
	name = name.split( "." )[ 1 ];
	var fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	if ( $.isArray( prototype ) ) {
		prototype = $.extend.apply( null, [ {} ].concat( prototype ) );
	}

	// Create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {

		// Allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// Allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};

	// Extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,

		// Copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),

		// Track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	} );

	basePrototype = new base();

	// We need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = ( function() {
			function _super() {
				return base.prototype[ prop ].apply( this, arguments );
			}

			function _superApply( args ) {
				return base.prototype[ prop ].apply( this, args );
			}

			return function() {
				var __super = this._super;
				var __superApply = this._superApply;
				var returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		} )();
	} );
	constructor.prototype = $.widget.extend( basePrototype, {

		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	} );

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// Redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor,
				child._proto );
		} );

		// Remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widgetSlice.call( arguments, 1 );
	var inputIndex = 0;
	var inputLength = input.length;
	var key;
	var value;

	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {

				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :

						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );

				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string";
		var args = widgetSlice.call( arguments, 1 );
		var returnValue = this;

		if ( isMethodCall ) {

			// If this is an empty collection, we need to have the instance method
			// return undefined instead of the jQuery instance
			if ( !this.length && options === "instance" ) {
				returnValue = undefined;
			} else {
				this.each( function() {
					var methodValue;
					var instance = $.data( this, fullName );

					if ( options === "instance" ) {
						returnValue = instance;
						return false;
					}

					if ( !instance ) {
						return $.error( "cannot call methods on " + name +
							" prior to initialization; " +
							"attempted to call method '" + options + "'" );
					}

					if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
						return $.error( "no such method '" + options + "' for " + name +
							" widget instance" );
					}

					methodValue = instance[ options ].apply( instance, args );

					if ( methodValue !== instance && methodValue !== undefined ) {
						returnValue = methodValue && methodValue.jquery ?
							returnValue.pushStack( methodValue.get() ) :
							methodValue;
						return false;
					}
				} );
			}
		} else {

			// Allow multiple hashes to be passed on init
			if ( args.length ) {
				options = $.widget.extend.apply( null, [ options ].concat( args ) );
			}

			this.each( function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			} );
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",

	options: {
		classes: {},
		disabled: false,

		// Callbacks
		create: null
	},

	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widgetUuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();
		this.classesElementLookup = {};

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			} );
			this.document = $( element.style ?

				// Element within the document
				element.ownerDocument :

				// Element is window or document
				element.document || element );
			this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
		}

		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this._create();

		if ( this.options.disabled ) {
			this._setOptionDisabled( this.options.disabled );
		}

		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},

	_getCreateOptions: function() {
		return {};
	},

	_getCreateEventData: $.noop,

	_create: $.noop,

	_init: $.noop,

	destroy: function() {
		var that = this;

		this._destroy();
		$.each( this.classesElementLookup, function( key, value ) {
			that._removeClass( value, key );
		} );

		// We can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.off( this.eventNamespace )
			.removeData( this.widgetFullName );
		this.widget()
			.off( this.eventNamespace )
			.removeAttr( "aria-disabled" );

		// Clean up events and states
		this.bindings.off( this.eventNamespace );
	},

	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key;
		var parts;
		var curOption;
		var i;

		if ( arguments.length === 0 ) {

			// Don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {

			// Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},

	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},

	_setOption: function( key, value ) {
		if ( key === "classes" ) {
			this._setOptionClasses( value );
		}

		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this._setOptionDisabled( value );
		}

		return this;
	},

	_setOptionClasses: function( value ) {
		var classKey, elements, currentElements;

		for ( classKey in value ) {
			currentElements = this.classesElementLookup[ classKey ];
			if ( value[ classKey ] === this.options.classes[ classKey ] ||
					!currentElements ||
					!currentElements.length ) {
				continue;
			}

			// We are doing this to create a new jQuery object because the _removeClass() call
			// on the next line is going to destroy the reference to the current elements being
			// tracked. We need to save a copy of this collection so that we can add the new classes
			// below.
			elements = $( currentElements.get() );
			this._removeClass( currentElements, classKey );

			// We don't use _addClass() here, because that uses this.options.classes
			// for generating the string of classes. We want to use the value passed in from
			// _setOption(), this is the new value of the classes option which was passed to
			// _setOption(). We pass this value directly to _classes().
			elements.addClass( this._classes( {
				element: elements,
				keys: classKey,
				classes: value,
				add: true
			} ) );
		}
	},

	_setOptionDisabled: function( value ) {
		this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );

		// If the widget is becoming disabled, then nothing is interactive
		if ( value ) {
			this._removeClass( this.hoverable, null, "ui-state-hover" );
			this._removeClass( this.focusable, null, "ui-state-focus" );
		}
	},

	enable: function() {
		return this._setOptions( { disabled: false } );
	},

	disable: function() {
		return this._setOptions( { disabled: true } );
	},

	_classes: function( options ) {
		var full = [];
		var that = this;

		options = $.extend( {
			element: this.element,
			classes: this.options.classes || {}
		}, options );

		function processClassString( classes, checkOption ) {
			var current, i;
			for ( i = 0; i < classes.length; i++ ) {
				current = that.classesElementLookup[ classes[ i ] ] || $();
				if ( options.add ) {
					current = $( $.unique( current.get().concat( options.element.get() ) ) );
				} else {
					current = $( current.not( options.element ).get() );
				}
				that.classesElementLookup[ classes[ i ] ] = current;
				full.push( classes[ i ] );
				if ( checkOption && options.classes[ classes[ i ] ] ) {
					full.push( options.classes[ classes[ i ] ] );
				}
			}
		}

		this._on( options.element, {
			"remove": "_untrackClassesElement"
		} );

		if ( options.keys ) {
			processClassString( options.keys.match( /\S+/g ) || [], true );
		}
		if ( options.extra ) {
			processClassString( options.extra.match( /\S+/g ) || [] );
		}

		return full.join( " " );
	},

	_untrackClassesElement: function( event ) {
		var that = this;
		$.each( that.classesElementLookup, function( key, value ) {
			if ( $.inArray( event.target, value ) !== -1 ) {
				that.classesElementLookup[ key ] = $( value.not( event.target ).get() );
			}
		} );
	},

	_removeClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, false );
	},

	_addClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, true );
	},

	_toggleClass: function( element, keys, extra, add ) {
		add = ( typeof add === "boolean" ) ? add : extra;
		var shift = ( typeof element === "string" || element === null ),
			options = {
				extra: shift ? keys : extra,
				keys: shift ? element : keys,
				element: shift ? this.element : element,
				add: add
			};
		options.element.toggleClass( this._classes( options ), add );
		return this;
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement;
		var instance = this;

		// No suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// No element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {

				// Allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
						$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// Copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ );
			var eventName = match[ 1 ] + instance.eventNamespace;
			var selector = match[ 2 ];

			if ( selector ) {
				delegateElement.on( eventName, selector, handlerProxy );
			} else {
				element.on( eventName, handlerProxy );
			}
		} );
	},

	_off: function( element, eventName ) {
		eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
			this.eventNamespace;
		element.off( eventName ).off( eventName );

		// Clear the stack to avoid memory leaks (#10056)
		this.bindings = $( this.bindings.not( element ).get() );
		this.focusable = $( this.focusable.not( element ).get() );
		this.hoverable = $( this.hoverable.not( element ).get() );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
			},
			mouseleave: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
			}
		} );
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
			},
			focusout: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
			}
		} );
	},

	_trigger: function( type, event, data ) {
		var prop, orig;
		var callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();

		// The original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// Copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}

		var hasOptions;
		var effectName = !options ?
			method :
			options === true || typeof options === "number" ?
				defaultEffect :
				options.effect || defaultEffect;

		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}

		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;

		if ( options.delay ) {
			element.delay( options.delay );
		}

		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue( function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			} );
		}
	};
} );

return $.widget;

} ) );


/***/ }),

/***/ "../node_modules/jquery.tabulator/dist/css/tabulator.min.css":
/*!*******************************************************************!*\
  !*** ../node_modules/jquery.tabulator/dist/css/tabulator.min.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../typings-for-css-modules-loader/lib??ref--6-1!./tabulator.min.css */ "../node_modules/typings-for-css-modules-loader/lib/index.js??ref--6-1!../node_modules/jquery.tabulator/dist/css/tabulator.min.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "../../../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/jquery.tabulator/dist/js/tabulator.min.js":
/*!*****************************************************************!*\
  !*** ../node_modules/jquery.tabulator/dist/js/tabulator.min.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* Tabulator v3.5.1 (c) Oliver Folkerd */
var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(function(t,o){!function(){Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(t){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),o=e.length>>>0;if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var i=arguments[1],n=0;n<o;){var s=e[n];if(t.call(i,s,n,e))return n;n++}return-1}}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(t){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),i=e.length>>>0;if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var n=arguments[1],s=0;s<i;){var a=e[s];if(t.call(n,a,s,e))return a;s++}return o}});var i=function(e){this.table=e,this.headersElement=t("<div class='tabulator-headers'></div>"),this.element=t("<div class='tabulator-header'></div>"),this.rowManager=null,this.columns=[],this.columnsByIndex=[],this.columnsByField=[],this.scrollLeft=0,this.element.prepend(this.headersElement)};i.prototype.setRowManager=function(t){this.rowManager=t},i.prototype.getElement=function(){return this.element},i.prototype.getHeadersElement=function(){return this.headersElement},i.prototype.scrollHorizontal=function(t){var e=0,o=this.element[0].scrollWidth-this.table.element.innerWidth();this.element.scrollLeft(t),t>o?(e=t-o,this.element.css("margin-left",-e)):this.element.css("margin-left",0),this.scrollLeft=t,this.table.extExists("frozenColumns")&&this.table.extensions.frozenColumns.layout()},i.prototype.setColumns=function(t,e){var o=this;o.headersElement.empty(),o.columns=[],o.columnsByIndex=[],o.columnsByField=[],o.table.extExists("frozenColumns")&&o.table.extensions.frozenColumns.reset(),t.forEach(function(t,e){o._addColumn(t)}),o._reIndexColumns(),o.table.options.responsiveLayout&&o.table.extExists("responsiveLayout",!0)&&o.table.extensions.responsiveLayout.initialize(),o.redraw(!0)},i.prototype._addColumn=function(t,e,o){var i=new s(t,this),n=o?this.findColumnIndex(o):o;if(o&&n>-1){var a=this.columns.indexOf(o.getTopColumn());e?(this.columns.splice(a,0,i),o.getElement().before(i.getElement())):(this.columns.splice(a+1,0,i),o.getElement().after(i.getElement()))}else e?(this.columns.unshift(i),this.headersElement.prepend(i.getElement())):(this.columns.push(i),this.headersElement.append(i.getElement()));return i},i.prototype.registerColumnField=function(t){t.definition.field&&(this.columnsByField[t.definition.field]=t)},i.prototype.registerColumnPosition=function(t){this.columnsByIndex.push(t)},i.prototype._reIndexColumns=function(){this.columnsByIndex=[],this.columns.forEach(function(t){t.reRegisterPosition()})},i.prototype._verticalAlignHeaders=function(){var t=this;t.columns.forEach(function(t){t.clearVerticalAlign()}),t.columns.forEach(function(e){e.verticalAlign(t.table.options.columnVertAlign)}),t.rowManager.adjustTableSize()},i.prototype.findColumn=function(t){var e=this;if("object"!=(void 0===t?"undefined":_typeof(t)))return this.columnsByField[t]||!1;if(t instanceof s)return t;if(t instanceof n)return t._getSelf()||!1;if(t instanceof jQuery){return e.columns.find(function(e){return e.element===t})||!1}return!1},i.prototype.getColumnByField=function(t){return this.columnsByField[t]},i.prototype.getColumnByIndex=function(t){return this.columnsByIndex[t]},i.prototype.getColumns=function(){return this.columns},i.prototype.findColumnIndex=function(t){return this.columnsByIndex.findIndex(function(e){return t===e})},i.prototype.getRealColumns=function(){return this.columnsByIndex},i.prototype.traverse=function(t){this.columnsByIndex.forEach(function(e,o){t(e,o)})},i.prototype.getDefinitions=function(t){var e=this,o=[];return e.columnsByIndex.forEach(function(e){(!t||t&&e.visible)&&o.push(e.getDefinition())}),o},i.prototype.getDefinitionTree=function(){var t=this,e=[];return t.columns.forEach(function(t){e.push(t.getDefinition(!0))}),e},i.prototype.getComponents=function(t){var e=this,o=[];return(t?e.columns:e.columnsByIndex).forEach(function(t){o.push(t.getComponent())}),o},i.prototype.getWidth=function(){var t=0;return this.columnsByIndex.forEach(function(e){e.visible&&(t+=e.getWidth())}),t},i.prototype.moveColumn=function(t,e,o){this._moveColumnInArray(this.columns,t,e,o),this._moveColumnInArray(this.columnsByIndex,t,e,o,!0),this.table.options.responsiveLayout&&this.table.extExists("responsiveLayout",!0)&&this.table.extensions.responsiveLayout.initialize(),this.table.options.columnMoved&&this.table.options.columnMoved(t.getComponent(),this.table.columnManager.getComponents()),this.table.options.persistentLayout&&this.table.extExists("persistence",!0)&&this.table.extensions.persistence.save("columns")},i.prototype._moveColumnInArray=function(t,e,o,i,n){var s,a=t.indexOf(e);a>-1&&(t.splice(a,1),s=t.indexOf(o),s>-1?i&&(s+=1):s=a,t.splice(s,0,e),n&&this.table.rowManager.rows.forEach(function(t){if(t.cells.length){var e=t.cells.splice(a,1)[0];t.cells.splice(s,0,e)}}))},i.prototype.scrollToColumn=function(t,e,o){var i=0,n=0,s=0;if(void 0===e&&(e=this.table.options.scrollToColumnPosition),void 0===o&&(o=this.table.options.scrollToColumnIfVisible),t.visible){switch(e){case"middle":case"center":s=-this.element[0].clientWidth/2;break;case"right":s=t.element.innerWidth()-this.headersElement.innerWidth()}return!(!o&&(n=t.element.position().left)>0&&n+t.element.outerWidth()<this.element[0].clientWidth)&&(i=t.element.position().left+this.element.scrollLeft()+s,i=Math.max(Math.min(i,this.table.rowManager.element[0].scrollWidth-this.table.rowManager.element[0].clientWidth),0),this.table.rowManager.scrollHorizontal(i),this.scrollHorizontal(i),!0)}return console.warn("Scroll Error - Column not visible"),!1},i.prototype.generateCells=function(t){var e=this,o=[];return e.columnsByIndex.forEach(function(e){o.push(e.generateCell(t))}),o},i.prototype.getFlexBaseWidth=function(){var t=this,e=t.table.element.innerWidth(),o=0;return t.rowManager.element[0].scrollHeight>t.rowManager.element.innerHeight()&&(e-=t.rowManager.element[0].offsetWidth-t.rowManager.element[0].clientWidth),this.columnsByIndex.forEach(function(i){var n,s,a;i.visible&&(n=i.definition.width||0,s=void 0===i.minWidth?t.table.options.columnMinWidth:parseInt(i.minWidth),a="string"==typeof n?n.indexOf("%")>-1?e/100*parseInt(n):parseInt(n):n,o+=a>s?a:s)}),o},i.prototype.addColumn=function(t,e,o){var i=this._addColumn(t,e,o);this._reIndexColumns(),this.table.options.responsiveLayout&&this.table.extExists("responsiveLayout",!0)&&this.table.extensions.responsiveLayout.initialize(),this.table.extExists("columnCalcs")&&this.table.extensions.columnCalcs.recalc(this.table.rowManager.activeRows),this.redraw(),"fitColumns"!=this.table.extensions.layout.getMode()&&i.reinitializeWidth(),this._verticalAlignHeaders(),this.table.rowManager.reinitialize()},i.prototype.deregisterColumn=function(t){var e,o=t.getField();o&&delete this.columnsByField[o],e=this.columnsByIndex.indexOf(t),e>-1&&this.columnsByIndex.splice(e,1),e=this.columns.indexOf(t),e>-1&&this.columns.splice(e,1),this.table.options.responsiveLayout&&this.table.extExists("responsiveLayout",!0)&&this.table.extensions.responsiveLayout.initialize(),this.redraw()},i.prototype.redraw=function(t){t&&(this.element.is(":visible")&&this._verticalAlignHeaders(),this.table.rowManager.resetScroll(),this.table.rowManager.reinitialize()),"fitColumns"==this.table.extensions.layout.getMode()?this.table.extensions.layout.layout():t?this.table.extensions.layout.layout():this.table.options.responsiveLayout&&this.table.extExists("responsiveLayout",!0)&&this.table.extensions.responsiveLayout.update(),this.table.extExists("frozenColumns")&&this.table.extensions.frozenColumns.layout(),this.table.extExists("columnCalcs")&&this.table.extensions.columnCalcs.recalc(this.table.rowManager.activeRows),t&&(this.table.options.persistentLayout&&this.table.extExists("persistence",!0)&&this.table.extensions.persistence.save("columns"),this.table.extExists("columnCalcs")&&this.table.extensions.columnCalcs.redraw()),this.table.footerManager.redraw()};var n=function(t){this.column=t,this.type="ColumnComponent"};n.prototype.getElement=function(){return this.column.getElement()},n.prototype.getDefinition=function(){return this.column.getDefinition()},n.prototype.getField=function(){return this.column.getField()},n.prototype.getCells=function(){var t=[];return this.column.cells.forEach(function(e){t.push(e.getComponent())}),t},n.prototype.getVisibility=function(){return this.column.visible},n.prototype.show=function(){this.column.isGroup?this.column.columns.forEach(function(t){t.show()}):this.column.show()},n.prototype.hide=function(){this.column.isGroup?this.column.columns.forEach(function(t){t.hide()}):this.column.hide()},n.prototype.toggle=function(){this.column.visible?this.hide():this.show()},n.prototype.delete=function(){this.column.delete()},n.prototype.getSubColumns=function(){var t=[];return this.column.columns.length&&this.column.columns.forEach(function(e){t.push(e.getComponent())}),t},n.prototype.getParentColumn=function(){return this.column.parent instanceof s&&this.column.parent.getComponent()},n.prototype._getSelf=function(){return this.column},n.prototype.scrollTo=function(){this.column.table.columManager.scrollToColumn(this.column)};var s=function e(o,i){var n=this;this.table=i.table,this.definition=o,this.parent=i,this.type="column",this.columns=[],this.cells=[],this.element=t("<div class='tabulator-col' role='columnheader' aria-sort='none'></div>"),this.contentElement=!1,this.groupElement=t("<div class='tabulator-col-group-cols'></div>"),this.isGroup=!1,this.tooltip=!1,this.hozAlign="",this.field="",this.fieldStructure="",this.getFieldValue="",this.setFieldValue="",this.setField(this.definition.field),this.extensions={},this.cellEvents={cellClick:!1,cellDblClick:!1,cellContext:!1,cellTap:!1,cellDblTap:!1,cellTapHold:!1},this.width=null,this.minWidth=null,this.widthFixed=!1,this.visible=!0,o.columns?(this.isGroup=!0,o.columns.forEach(function(t,o){var i=new e(t,n);n.attachColumn(i)}),n.checkColumnVisibility()):i.registerColumnField(this),o.rowHandle&&!1!==this.table.options.movableRows&&this.table.extExists("moveRow")&&this.table.extensions.moveRow.setHandle(!0),this._mapDepricatedFunctionality(),this._buildHeader()};s.prototype._mapDepricatedFunctionality=function(t){this.definition.tooltipHeader&&(console.warn("The%c tooltipHeader%c column definition property has been depricated and will be removed in version 4.0, use %c headerTooltip%c instead.","font-weight:bold;","font-weight:regular;","font-weight:bold;","font-weight:regular;"),void 0===this.definition.headerTooltip&&(this.definition.headerTooltip=this.definition.tooltipHeader))},s.prototype.setField=function(t){this.field=t,this.fieldStructure=t?t.split("."):[],this.getFieldValue=this.fieldStructure.length>1?this._getNestedData:this._getFlatData,this.setFieldValue=this.fieldStructure.length>1?this._setNesteData:this._setFlatData},s.prototype.registerColumnPosition=function(t){this.parent.registerColumnPosition(t)},s.prototype.registerColumnField=function(t){this.parent.registerColumnField(t)},s.prototype.reRegisterPosition=function(){this.isGroup?this.columns.forEach(function(t){t.reRegisterPosition()}):this.registerColumnPosition(this)},s.prototype.setTooltip=function(){var t=this,e=t.definition,o=e.headerTooltip||!1===e.tooltip?e.headerTooltip:t.table.options.tooltipsHeader;o?!0===o?e.field?t.table.extensions.localize.bind("columns|"+e.field,function(o){t.element.attr("title",o||e.title)}):t.element.attr("title",e.title):("function"==typeof o&&!1===(o=o(t.getComponent()))&&(o=""),t.element.attr("title",o)):t.element.attr("title","")},s.prototype._buildHeader=function(){var t,e,o,i=this,n=i.definition;i.element.empty(),i.contentElement=i._buildColumnHeaderContent(),i.element.append(i.contentElement),i.isGroup?i._buildGroupHeader():i._buildColumnHeader(),i.setTooltip(),i.table.options.resizableColumns&&i.table.extExists("resizeColumns")&&i.table.extensions.resizeColumns.initializeColumn("header",i,i.element),n.headerFilter&&i.table.extExists("filter")&&i.table.extExists("edit")&&(void 0!==n.headerFilterPlaceholder&&n.field&&i.table.extensions.localize.setHeaderFilterColumnPlaceholder(n.field,n.headerFilterPlaceholder),i.table.extensions.filter.initializeColumn(i)),i.table.extExists("frozenColumns")&&i.table.extensions.frozenColumns.initializeColumn(i),i.table.options.movableColumns&&!i.isGroup&&i.table.extExists("moveColumn")&&i.table.extensions.moveColumn.initializeColumn(i),(n.topCalc||n.bottomCalc)&&i.table.extExists("columnCalcs")&&i.table.extensions.columnCalcs.initializeColumn(i),i.element.on("mouseenter",function(t){i.setTooltip()}),"function"==typeof n.headerClick&&i.element.on("click",function(t){n.headerClick(t,i.getComponent())}),"function"==typeof n.headerDblClick&&i.element.on("dblclick",function(t){n.headerDblClick(t,i.getComponent())}),"function"==typeof n.headerContext&&i.element.on("contextmenu",function(t){n.headerContext(t,i.getComponent())}),"function"==typeof n.headerTap&&(o=!1,i.element.on("touchstart",function(t){o=!0}),i.element.on("touchend",function(t){o&&n.headerTap(t,i.getComponent()),o=!1})),"function"==typeof n.headerDblTap&&(t=null,i.element.on("touchend",function(e){t?(clearTimeout(t),t=null,n.headerDblTap(e,i.getComponent())):t=setTimeout(function(){clearTimeout(t),t=null},300)})),"function"==typeof n.headerTapHold&&(e=null,i.element.on("touchstart",function(t){clearTimeout(e),e=setTimeout(function(){clearTimeout(e),e=null,o=!1,n.headerTapHold(t,i.getComponent())},1e3)}),i.element.on("touchend",function(t){clearTimeout(e),e=null})),"function"==typeof n.cellClick&&(i.cellEvents.cellClick=n.cellClick),"function"==typeof n.cellDblClick&&(i.cellEvents.cellDblClick=n.cellDblClick),"function"==typeof n.cellContext&&(i.cellEvents.cellContext=n.cellContext),"function"==typeof n.cellTap&&(i.cellEvents.cellTap=n.cellTap),"function"==typeof n.cellDblTap&&(i.cellEvents.cellDblTap=n.cellDblTap),"function"==typeof n.cellTapHold&&(i.cellEvents.cellTapHold=n.cellTapHold),"function"==typeof n.cellEdited&&(i.cellEvents.cellEdited=n.cellEdited),"function"==typeof n.cellEditing&&(i.cellEvents.cellEditing=n.cellEditing),"function"==typeof n.cellEditCancelled&&(i.cellEvents.cellEditCancelled=n.cellEditCancelled)},s.prototype._buildColumnHeader=function(){var t=this,e=t.definition,o=t.table;o.extExists("sort")&&o.extensions.sort.initializeColumn(t,t.contentElement),o.extExists("format")&&o.extensions.format.initializeColumn(t),void 0!==e.editor&&o.extExists("edit")&&o.extensions.edit.initializeColumn(t),void 0!==e.validator&&o.extExists("validate")&&o.extensions.validate.initializeColumn(t),o.extExists("mutator")&&o.extensions.mutator.initializeColumn(t),o.extExists("accessor")&&o.extensions.accessor.initializeColumn(t),_typeof(o.options.responsiveLayout)&&o.extExists("responsiveLayout")&&o.extensions.responsiveLayout.initializeColumn(t),void 0!==e.visible&&(e.visible?t.show(!0):t.hide(!0)),e.cssClass&&t.element.addClass(e.cssClass),e.field&&this.element.attr("tabulator-field",e.field),t.setMinWidth(void 0===e.minWidth?t.table.options.columnMinWidth:e.minWidth),t.reinitializeWidth(),t.tooltip=t.definition.tooltip||!1===t.definition.tooltip?t.definition.tooltip:t.table.options.tooltips,t.hozAlign=void 0===t.definition.align?"":t.definition.align},s.prototype._buildColumnHeaderContent=function(){var e=this,o=(e.definition,e.table,t("<div class='tabulator-col-content'></div>"));return o.append(e._buildColumnHeaderTitle()),o},s.prototype._buildColumnHeaderTitle=function(){var e=this,o=e.definition,i=e.table,n=t("<div class='tabulator-col-title'></div>");if(o.editableTitle){var s=t("<input class='tabulator-title-editor'>");s.on("click",function(e){e.stopPropagation(),t(this).focus()}),s.on("change",function(){var n=t(this).val();o.title=n,i.options.columnTitleChanged(e.getComponent())}),n.append(s),o.field?i.extensions.localize.bind("columns|"+o.field,function(t){s.val(t||o.title||"&nbsp")}):s.val(o.title||"&nbsp")}else o.field?i.extensions.localize.bind("columns|"+o.field,function(t){e._formatColumnHeaderTitle(n,t||o.title||"&nbsp")}):e._formatColumnHeaderTitle(n,o.title||"&nbsp");return n},s.prototype._formatColumnHeaderTitle=function(t,e){var o,i;this.definition.titleFormatter&&this.table.extExists("format")?(o=this.table.extensions.format.getFormatter(this.definition.titleFormatter),i=o.call(this.table.extensions.format,{getValue:function(){return e},getElement:function(){return t}},this.definition.titleFormatterParams||{}),t.append(i)):t.html(e)},s.prototype._buildGroupHeader=function(){var t=this,e=t.definition;t.table;t.element.addClass("tabulator-col-group").attr("role","columngroup").attr("aria-title",e.title),t.element.append(t.groupElement)},s.prototype._getFlatData=function(t){return t[this.field]},s.prototype._getNestedData=function(t){for(var e,o=t,i=this.fieldStructure,n=i.length,s=0;s<n&&(o=o[i[s]],e=o,o);s++);return e},s.prototype._setFlatData=function(t,e){t[this.field]=e},s.prototype._setNesteData=function(t,e){for(var o=t,i=this.fieldStructure,n=i.length,s=0;s<n;s++)s==n-1?o[i[s]]=e:(o[i[s]]||(o[i[s]]={}),o=o[i[s]])},s.prototype.attachColumn=function(t){var e=this;e.groupElement?(e.columns.push(t),e.groupElement.append(t.getElement())):console.warn("Column Warning - Column being attached to another column instead of column group")},s.prototype.verticalAlign=function(t){var e=this.parent.isGroup?this.parent.getGroupElement().innerHeight():this.parent.getHeadersElement().innerHeight();this.element.css("height",e),this.isGroup&&this.groupElement.css("min-height",e-this.contentElement.outerHeight()),this.isGroup||"top"===t||("bottom"===t?this.element.css({"padding-top":this.element.innerHeight()-this.contentElement.outerHeight()}):this.element.css({"padding-top":(this.element.innerHeight()-this.contentElement.outerHeight())/2})),this.columns.forEach(function(e){e.verticalAlign(t)})},s.prototype.clearVerticalAlign=function(){this.element.css("padding-top",""),this.element.css("height",""),this.element.css("min-height",""),this.columns.forEach(function(t){t.clearVerticalAlign()})},s.prototype.getElement=function(){return this.element},s.prototype.getGroupElement=function(){return this.groupElement},s.prototype.getField=function(){return this.field},s.prototype.getFirstColumn=function(){return this.isGroup?!!this.columns.length&&this.columns[0].getFirstColumn():this},s.prototype.getLastColumn=function(){return this.isGroup?!!this.columns.length&&this.columns[this.columns.length-1].getLastColumn():this},s.prototype.getColumns=function(){return this.columns},s.prototype.getCells=function(){return this.cells},s.prototype.getTopColumn=function(){return this.parent.isGroup?this.parent.getTopColumn():this},s.prototype.getDefinition=function(t){var e=[];return this.isGroup&&t&&(this.columns.forEach(function(t){e.push(t.getDefinition(!0))}),this.definition.columns=e),this.definition},s.prototype.checkColumnVisibility=function(){var t=!1;this.columns.forEach(function(e){e.visible&&(t=!0)}),t?(this.show(),this.parent.table.options.columnVisibilityChanged(this.getComponent(),!1)):this.hide()},s.prototype.show=function(t,e){this.visible||(this.visible=!0,this.element.css({display:""}),this.table.columnManager._verticalAlignHeaders(),this.parent.isGroup&&this.parent.checkColumnVisibility(),this.cells.forEach(function(t){t.show()}),this.table.options.persistentLayout&&this.table.extExists("responsiveLayout",!0)&&this.table.extensions.persistence.save("columns"),!e&&this.table.options.responsiveLayout&&this.table.extExists("responsiveLayout",!0)&&this.table.extensions.responsiveLayout.updateColumnVisibility(this,this.visible),t||this.table.options.columnVisibilityChanged(this.getComponent(),!0))},s.prototype.hide=function(t,e){this.visible&&(this.visible=!1,this.element.css({display:"none"}),this.table.columnManager._verticalAlignHeaders(),this.parent.isGroup&&this.parent.checkColumnVisibility(),this.cells.forEach(function(t){t.hide()}),this.table.options.persistentLayout&&this.table.extExists("persistence",!0)&&this.table.extensions.persistence.save("columns"),!e&&this.table.options.responsiveLayout&&this.table.extExists("responsiveLayout",!0)&&this.table.extensions.responsiveLayout.updateColumnVisibility(this,this.visible),t||this.table.options.columnVisibilityChanged(this.getComponent(),!1))},s.prototype.matchChildWidths=function(){var t=0;this.contentElement&&this.columns.length&&(this.columns.forEach(function(e){t+=e.getWidth()}),this.contentElement.css("max-width",t-1))},s.prototype.setWidth=function(t){this.widthFixed=!0,this.setWidthActual(t)},s.prototype.setWidthActual=function(t){isNaN(t)&&(t=Math.floor(this.table.element.innerWidth()/100*parseInt(t))),console.log,t=Math.max(this.minWidth,t),this.width=t,this.element.css("width",t||""),this.isGroup||this.cells.forEach(function(e){e.setWidth(t)}),this.parent.isGroup&&this.parent.matchChildWidths(),this.table.extExists("frozenColumns")&&this.table.extensions.frozenColumns.layout()},s.prototype.checkCellHeights=function(){var t=[];this.cells.forEach(function(e){e.row.heightInitialized&&(null!==e.row.element[0].offsetParent?(t.push(e.row),e.row.clearCellHeight()):e.row.heightInitialized=!1)}),t.forEach(function(t){t.calcHeight()}),t.forEach(function(t){t.setCellHeight()})},s.prototype.getWidth=function(){return this.element.outerWidth()},s.prototype.getHeight=function(){return this.element.outerHeight()},s.prototype.setMinWidth=function(t){this.minWidth=t,this.element.css("min-width",t||""),this.cells.forEach(function(e){e.setMinWidth(t)})},s.prototype.delete=function(){this.isGroup&&this.columns.forEach(function(t){t.delete()});for(var t=this.cells.length,e=0;e<t;e++)this.cells[0].delete();this.element.detach(),this.table.columnManager.deregisterColumn(this)},s.prototype.generateCell=function(t){var e=this,o=new u(e,t);return this.cells.push(o),o},s.prototype.reinitializeWidth=function(t){this.widthFixed=!1,void 0===this.definition.width||t||this.setWidth(this.definition.width),this.table.extExists("filter")&&this.table.extensions.filter.hideHeaderFilterElements(),this.fitToData(),this.table.extExists("filter")&&this.table.extensions.filter.showHeaderFilterElements()},s.prototype.fitToData=function(){var t=this;this.widthFixed||(this.element.css("width",""),t.cells.forEach(function(t){t.setWidth("")}));var e=this.element.outerWidth();t.width&&this.widthFixed||(t.cells.forEach(function(t){var o=t.getWidth();o>e&&(e=o)}),e&&t.setWidthActual(e+1))},s.prototype.deleteCell=function(t){var e=this.cells.indexOf(t);e>-1&&this.cells.splice(e,1)},s.prototype.getComponent=function(){return new n(this)};var a=function(e){this.table=e,this.element=t("<div class='tabulator-tableHolder' tabindex='0'></div>"),this.tableElement=t("<div class='tabulator-table'></div>"),this.columnManager=null,this.height=0,this.firstRender=!1,this.renderMode="classic",this.rows=[],this.activeRows=[],this.activeRowsCount=0,this.displayRows=[],this.displayRowsCount=0,this.scrollTop=0,this.scrollLeft=0,this.vDomRowHeight=20,this.vDomTop=0,this.vDomBottom=0,this.vDomScrollPosTop=0,this.vDomScrollPosBottom=0,this.vDomTopPad=0,this.vDomBottomPad=0,this.vDomMaxRenderChain=90,this.vDomWindowBuffer=0,this.vDomWindowMinTotalRows=20,this.vDomWindowMinMarginRows=5,this.vDomTopNewRows=[],this.vDomBottomNewRows=[]};a.prototype.getElement=function(){return this.element},a.prototype.getTableElement=function(){return this.tableElement},a.prototype.getRowPosition=function(t,e){return e?this.activeRows.indexOf(t):this.rows.indexOf(t)},a.prototype.setColumnManager=function(t){this.columnManager=t},a.prototype.initialize=function(){var t=this;t.setRenderMode(),t.element.append(t.tableElement),t.firstRender=!0,t.element.scroll(function(){var e=t.element[0].scrollLeft;t.scrollLeft!=e&&(t.columnManager.scrollHorizontal(e),t.table.options.groupBy&&t.table.extensions.groupRows.scrollHeaders(e),t.table.extExists("columnCalcs")&&t.table.extensions.columnCalcs.scrollHorizontal(e)),t.scrollLeft=e}),"virtual"===this.renderMode&&t.element.scroll(function(){var e=t.element[0].scrollTop,o=t.scrollTop>e;t.scrollTop!=e?(t.scrollTop=e,t.scrollVertical(o),"scroll"==t.table.options.ajaxProgressiveLoad&&t.table.extensions.ajax.nextPage(t.element[0].scrollHeight-t.element[0].clientHeight-e)):t.scrollTop=e})},a.prototype.findRow=function(t){var e=this;if("object"!=(void 0===t?"undefined":_typeof(t))){if(void 0===t||null===t)return!1;return e.rows.find(function(o){return o.data[e.table.options.index]==t})||!1}if(t instanceof l)return t;if(t instanceof r)return t._getSelf()||!1;if(t instanceof jQuery){return e.rows.find(function(e){return e.element===t})||!1}return!1},a.prototype.getRowFromPosition=function(t,e){return e?this.activeRows[t]:this.rows[t]},a.prototype.scrollToRow=function(t,e,o){var i=this.getDisplayRows().indexOf(t),n=0;if(i>-1){if(void 0===e&&(e=this.table.options.scrollToRowPosition),void 0===o&&(o=this.table.options.scrollToRowIfVisible),"nearest"===e)switch(this.renderMode){case"classic":e=Math.abs(this.element.scrollTop()-t.element.position().top)>Math.abs(this.element.scrollTop()+this.element[0].clientHeight-t.element.position().top)?"bottom":"top";break;case"virtual":e=Math.abs(this.vDomTop-i)>Math.abs(this.vDomBottom-i)?"bottom":"top"}if(!o&&t.element.is(":visible")&&(n=t.element.offset().top-this.element.offset().top)>0&&n<this.element[0].clientHeight-t.element.outerHeight())return!1;switch(this.renderMode){case"classic":this.element.scrollTop(t.element.offset().top-this.element.offset().top+this.element.scrollTop());break;case"virtual":this._virtualRenderFill(i,!0)}switch(e){case"middle":case"center":this.element.scrollTop(this.element.scrollTop()-this.element[0].clientHeight/2);break;case"bottom":this.element.scrollTop(this.element.scrollTop()-this.element[0].clientHeight+t.getElement().outerHeight())}return!0}return console.warn("Scroll Error - Row not visible"),!1},a.prototype.setData=function(t,e){var o=this;e&&this.getDisplayRows().length?o.table.options.pagination?o._setDataActual(t,!0):this.reRenderInPosition(function(){o._setDataActual(t)}):(this.resetScroll(),this._setDataActual(t))},a.prototype._setDataActual=function(t,e){var o=this;o.table.options.dataLoading(t),o.rows.forEach(function(t){t.wipe()}),o.rows=[],this.table.options.history&&this.table.extExists("history")&&this.table.extensions.history.clear(),Array.isArray(t)?(this.table.extExists("selectRow")&&this.table.extensions.selectRow.clearSelectionData(),t.forEach(function(t,e){if(t&&"object"===(void 0===t?"undefined":_typeof(t))){var i=new l(t,o);o.rows.push(i)}else console.warn("Data Loading Warning - Invalid row data detected and ignored, expecting object but receved:",t)}),o.table.options.dataLoaded(t),o.refreshActiveData(!1,!1,e)):console.error("Data Loading Error - Unable to process data due to invalid data type \nExpecting: array \nReceived: ",void 0===t?"undefined":_typeof(t),"\nData:     ",t)},a.prototype.deleteRow=function(t){var e=this.rows.indexOf(t),o=this.activeRows.indexOf(t);o>-1&&this.activeRows.splice(o,1),e>-1&&this.rows.splice(e,1),this.setActiveRows(this.activeRows),this.displayRowIterator(function(e){var o=e.indexOf(t);o>-1&&e.splice(o,1)}),this.reRenderInPosition(),this.table.options.rowDeleted(t.getComponent()),this.table.options.dataEdited(this.getData()),this.table.options.groupBy&&this.table.extExists("groupRows")?this.table.extensions.groupRows.updateGroupRows(!0):this.table.options.pagination&&this.table.extExists("page")?this.refreshActiveData(!1,!1,!0):this.table.options.pagination&&this.table.extExists("page")&&this.refreshActiveData("page")},a.prototype.addRow=function(t,e,o,i){var n=this.addRowActual(t,e,o,i);return this.table.options.history&&this.table.extExists("history")&&this.table.extensions.history.action("rowAdd",n,{data:t,pos:e,index:o}),n},a.prototype.addRows=function(t,e,o){var i=this,n=[];return e=this.findAddRowPos(e),Array.isArray(t)||(t=[t]),t.length-1,(void 0===o&&e||void 0!==o&&!e)&&t.reverse(),t.forEach(function(t,s){var a=i.addRow(t,e,o,!0);n.push(a)}),this.table.options.groupBy&&this.table.extExists("groupRows")?this.table.extensions.groupRows.updateGroupRows(!0):this.table.options.pagination&&this.table.extExists("page")?this.refreshActiveData(!1,!1,!0):this.reRenderInPosition(),this.table.extExists("columnCalcs")&&this.table.extensions.columnCalcs.recalc(this.table.rowManager.activeRows),n},a.prototype.findAddRowPos=function(t){return void 0===t&&(t=this.table.options.addRowPos),"pos"===t&&(t=!0),"bottom"===t&&(t=!1),t},a.prototype.addRowActual=function(t,e,o,i){var n,s=new l(t||{},this),a=this.findAddRowPos(e);if(!o&&this.table.options.pagination&&"page"==this.table.options.paginationAddRow&&(n=this.getDisplayRows(),a?n.length?o=n[0]:activeRows.length&&(o=activeRows[activeRows.length-1],a=!1):n.length&&(o=n[n.length-1],a=!0)),o&&(o=this.findRow(o)),this.table.options.groupBy&&this.table.extExists("groupRows")){this.table.extensions.groupRows.assignRowToGroup(s);var r=s.getGroup().rows;r.length>1&&(!o||o&&-1==r.indexOf(o)?a?r[0]!==s&&(o=r[0],this._moveRowInArray(s.getGroup().rows,s,o,a)):r[r.length-1]!==s&&(o=r[r.length-1],this._moveRowInArray(s.getGroup().rows,s,o,a)):this._moveRowInArray(s.getGroup().rows,s,o,a))}if(o){var c=this.rows.indexOf(o),u=this.activeRows.indexOf(o);this.displayRowIterator(function(t){var e=t.indexOf(o);e>-1&&t.splice(a?e:e+1,0,s)}),u>-1&&this.activeRows.splice(a?u:u+1,0,s),c>-1&&this.rows.splice(a?c:c+1,0,s)}else a?(this.displayRowIterator(function(t){t.unshift(s)}),this.activeRows.unshift(s),this.rows.unshift(s)):(this.displayRowIterator(function(t){t.push(s)}),this.activeRows.push(s),this.rows.push(s));return this.setActiveRows(this.activeRows),this.table.options.rowAdded(s.getComponent()),this.table.options.dataEdited(this.getData()),i||this.reRenderInPosition(),s},a.prototype.moveRow=function(t,e,o){this.table.options.history&&this.table.extExists("history")&&this.table.extensions.history.action("rowMove",t,{pos:this.getRowPosition(t),to:e,after:o}),this.moveRowActual(t,e,o),this.table.options.rowMoved(t.getComponent())},a.prototype.moveRowActual=function(t,e,o){var i=this;if(this._moveRowInArray(this.rows,t,e,o),this._moveRowInArray(this.activeRows,t,e,o),this.displayRowIterator(function(n){i._moveRowInArray(n,t,e,o)}),this.table.options.groupBy&&this.table.extExists("groupRows")){var n=e.getGroup(),s=t.getGroup();n===s?this._moveRowInArray(n.rows,t,e,o):(s&&s.removeRow(t),n.insertRow(t,e,o))}},a.prototype._moveRowInArray=function(t,e,o,i){var n,s,a,r;if(e!==o&&(n=t.indexOf(e),n>-1&&(t.splice(n,1),s=t.indexOf(o),s>-1?i?t.splice(s+1,0,e):t.splice(s,0,e):t.splice(n,0,e)),t===this.getDisplayRows())){a=n<s?n:s,r=s>n?s:n+1;for(var l=a;l<=r;l++)t[l]&&this.styleRow(t[l],l)}},a.prototype.clearData=function(){this.setData([])},a.prototype.getRowIndex=function(t){return this.findRowIndex(t,this.rows)},a.prototype.getDisplayRowIndex=function(t){var e=this.getDisplayRows().indexOf(t);return e>-1&&e},a.prototype.nextDisplayRow=function(t,e){var o=this.getDisplayRowIndex(t),i=!1;return!1!==o&&o<this.displayRowsCount-1&&(i=this.getDisplayRows()[o+1]),!i||i instanceof l&&"row"==i.type?i:this.nextDisplayRow(i,e)},a.prototype.prevDisplayRow=function(t,e){var o=this.getDisplayRowIndex(t),i=!1;return o&&(i=this.getDisplayRows()[o-1]),!i||i instanceof l&&"row"==i.type?i:this.prevDisplayRow(i,e)},a.prototype.findRowIndex=function(t,e){var o;return!!((t=this.findRow(t))&&(o=e.indexOf(t))>-1)&&o},
a.prototype.getData=function(t,e){var o=this,i=[];return(t?o.activeRows:o.rows).forEach(function(t){i.push(t.getData(e||"data"))}),i},a.prototype.getHtml=function(t){var e=this.getData(t),o=[],i="",n="";return this.table.columnManager.getComponents().forEach(function(t){var e=t.getDefinition();t.getVisibility()&&!e.hideInHtml&&(i+="<th>"+(e.title||"")+"</th>",o.push(t))}),e.forEach(function(t){var e="";o.forEach(function(o){var i=void 0===t[o.getField()]?"":t[o.getField()];o.getVisibility()&&(e+="<td>"+i+"</td>")}),n+="<tr>"+e+"</tr>"}),"<table>\n\n \t\t\t\t<thead>\n\n \t\t\t\t<tr>"+i+"</tr>\n\n \t\t\t\t</thead>\n\n \t\t\t\t<tbody>"+n+"</tbody>\n\n \t\t\t\t</table>"},a.prototype.getComponents=function(t){var e=this,o=[];return(t?e.activeRows:e.rows).forEach(function(t){o.push(t.getComponent())}),o},a.prototype.getDataCount=function(t){return t?this.rows.length:this.activeRows.length},a.prototype._genRemoteRequest=function(){var t=this,e=t.table,o=e.options,i={};if(e.extExists("page")){if(o.ajaxSorting){var n=t.table.extensions.sort.getSort();n.forEach(function(t){delete t.column}),i[t.table.extensions.page.paginationDataSentNames.sorters]=n}if(o.ajaxFiltering){var s=t.table.extensions.filter.getFilters(!0,!0);i[t.table.extensions.page.paginationDataSentNames.filters]=s}t.table.extensions.ajax.setParams(i,!0)}e.extensions.ajax.sendRequest(function(e){t.setData(e)})},a.prototype.filterRefresh=function(){var t=this.table,e=t.options,o=this.scrollLeft;e.ajaxFiltering?"remote"==e.pagination&&t.extExists("page")?(t.extensions.page.reset(!0),t.extensions.page.setPage(1)):this._genRemoteRequest():this.refreshActiveData("filter"),this.scrollHorizontal(o)},a.prototype.sorterRefresh=function(){var t=this.table,e=this.table.options,o=this.scrollLeft;e.ajaxSorting?"remote"==e.pagination&&t.extExists("page")?(t.extensions.page.reset(!0),t.extensions.page.setPage(1)):this._genRemoteRequest():this.refreshActiveData("sort"),this.scrollHorizontal(o)},a.prototype.scrollHorizontal=function(t){this.scrollLeft=t,this.element.scrollLeft(t),this.table.options.groupBy&&this.table.extensions.groupRows.scrollHeaders(t),this.table.extExists("columnCalcs")&&this.table.extensions.columnCalcs.scrollHorizontal(t)},a.prototype.refreshActiveData=function(t,e,o){var i,n=this,s=this.table;switch(t||(t="all"),s.options.selectable&&!s.options.selectablePersistence&&s.extExists("selectRow")&&s.extensions.selectRow.deselectRows(),t){case"all":case"filter":e?e=!1:s.extExists("filter")?n.setActiveRows(s.extensions.filter.filter(n.rows)):n.setActiveRows(n.rows.slice(0));case"sort":e?e=!1:s.extExists("sort")&&s.extensions.sort.sort();case"display":this.resetDisplayRows();case"freeze":e?e=!1:this.table.extExists("frozenRows")&&s.extensions.frozenRows.isFrozen()&&(s.extensions.frozenRows.getDisplayIndex()||s.extensions.frozenRows.setDisplayIndex(this.getNextDisplayIndex()),i=s.extensions.frozenRows.getDisplayIndex(),!0!==(i=n.setDisplayRows(s.extensions.frozenRows.getRows(this.getDisplayRows(i-1)),i))&&s.extensions.frozenRows.setDisplayIndex(i));case"group":e?e=!1:s.options.groupBy&&s.extExists("groupRows")&&(s.extensions.groupRows.getDisplayIndex()||s.extensions.groupRows.setDisplayIndex(this.getNextDisplayIndex()),i=s.extensions.groupRows.getDisplayIndex(),!0!==(i=n.setDisplayRows(s.extensions.groupRows.getRows(this.getDisplayRows(i-1)),i))&&s.extensions.groupRows.setDisplayIndex(i)),s.options.pagination&&s.extExists("page")&&!o&&"local"==s.extensions.page.getMode()&&s.extensions.page.reset();case"page":e?e=!1:s.options.pagination&&s.extExists("page")&&(s.extensions.page.getDisplayIndex()||s.extensions.page.setDisplayIndex(this.getNextDisplayIndex()),i=s.extensions.page.getDisplayIndex(),"local"==s.extensions.page.getMode()&&s.extensions.page.setMaxRows(this.getDisplayRows(i-1).length),!0!==(i=n.setDisplayRows(s.extensions.page.getRows(this.getDisplayRows(i-1)),i))&&s.extensions.page.setDisplayIndex(i))}n.element.is(":visible")&&(o?n.reRenderInPosition():(n.renderTable(),s.options.layoutColumnsOnNewData&&n.table.columnManager.redraw(!0))),s.extExists("columnCalcs")&&s.extensions.columnCalcs.recalc(this.activeRows)},a.prototype.setActiveRows=function(t){this.activeRows=t,this.activeRowsCount=this.activeRows.length},a.prototype.resetDisplayRows=function(){this.displayRows=[],this.displayRows.push(this.activeRows.slice(0)),this.displayRowsCount=this.displayRows[0].length,this.table.extExists("frozenRows")&&this.table.extensions.frozenRows.setDisplayIndex(0),this.table.options.groupBy&&this.table.extExists("groupRows")&&this.table.extensions.groupRows.setDisplayIndex(0),this.table.options.pagination&&this.table.extExists("page")&&this.table.extensions.page.setDisplayIndex(0)},a.prototype.getNextDisplayIndex=function(){return this.displayRows.length},a.prototype.setDisplayRows=function(t,e){var o=!0;return e&&void 0!==this.displayRows[e]?(this.displayRows[e]=t,o=!0):(this.displayRows.push(t),o=e=this.displayRows.length-1),e==this.displayRows.length-1&&(this.displayRowsCount=this.displayRows[this.displayRows.length-1].length),o},a.prototype.getDisplayRows=function(t){return void 0===t?this.displayRows.length?this.displayRows[this.displayRows.length-1]:[]:this.displayRows[t]||[]},a.prototype.displayRowIterator=function(t){this.displayRows.forEach(t),this.displayRowsCount=this.displayRows[this.displayRows.length-1].length},a.prototype.getRows=function(){return this.rows},a.prototype.reRenderInPosition=function(t){if("virtual"==this.getRenderMode()){for(var e=this.element.scrollTop(),o=!1,i=!1,n=this.scrollLeft,s=this.getDisplayRows(),a=this.vDomTop;a<=this.vDomBottom;a++)if(s[a]){var r=e-s[a].getElement().position().top;if(!(!1===i||Math.abs(r)<i))break;i=r,o=a}t&&t(),this._virtualRenderFill(!1===o?this.displayRowsCount-1:o,!0,i||0),this.scrollHorizontal(n)}else this.renderTable()},a.prototype.setRenderMode=function(){(this.table.element.innerHeight()||this.table.options.height)&&this.table.options.virtualDom?this.renderMode="virtual":this.renderMode="classic"},a.prototype.getRenderMode=function(){return this.renderMode},a.prototype.renderTable=function(){var t=this;switch(t.table.options.renderStarted(),t.element.scrollTop(0),t.renderMode){case"classic":t._simpleRender();break;case"virtual":t._virtualRenderFill()}t.firstRender&&(t.displayRowsCount?(t.firstRender=!1,t.table.extensions.layout.layout()):t.renderEmptyScroll()),t.table.extExists("frozenColumns")&&t.table.extensions.frozenColumns.layout(),t.displayRowsCount||t.table.options.placeholder&&t.getElement().append(t.table.options.placeholder),t.table.options.renderComplete()},a.prototype._simpleRender=function(){var t=this,e=this.tableElement;t._clearVirtualDom(),t.displayRowsCount?t.getDisplayRows().forEach(function(o,i){t.styleRow(o,i),e.append(o.getElement()),o.initialize(!0)}):t.renderEmptyScroll()},a.prototype.renderEmptyScroll=function(){var t=this;t.tableElement.css({"min-width":t.table.columnManager.getWidth(),"min-height":"1px",visibility:"hidden"})},a.prototype._clearVirtualDom=function(){var t=this.tableElement;this.table.options.placeholder&&this.table.options.placeholder.detach(),t.children().detach(),t.css({"padding-top":"","padding-bottom":"","min-width":"","min-height":"",visibility:""}),this.scrollTop=0,this.scrollLeft=0,this.vDomTop=0,this.vDomBottom=0,this.vDomTopPad=0,this.vDomBottomPad=0},a.prototype.styleRow=function(t,e){e%2?t.element.addClass("tabulator-row-even").removeClass("tabulator-row-odd"):t.element.addClass("tabulator-row-odd").removeClass("tabulator-row-even")},a.prototype._virtualRenderFill=function(t,e,o){var i=this,n=i.tableElement,s=i.element,a=0,r=0,l=0,c=0,u=i.getDisplayRows();if(t=t||0,o=o||0,t){n.children().detach();var h=(i.displayRowsCount-t+1)*i.vDomRowHeight;h<i.height&&(t-=Math.ceil((i.height-h)/i.vDomRowHeight))<0&&(t=0),a=Math.min(Math.max(Math.floor(i.vDomWindowBuffer/i.vDomRowHeight),i.vDomWindowMinMarginRows),t),t-=a}else i._clearVirtualDom();if(i.displayRowsCount&&i.element.is(":visible")){for(i.vDomTop=t,i.vDomBottom=t-1;(r<=i.height+i.vDomWindowBuffer||c<i.vDomWindowMinTotalRows)&&i.vDomBottom<i.displayRowsCount-1;){var p=i.vDomBottom+1,d=u[p];i.styleRow(d,p),n.append(d.getElement()),d.initialized?d.heightInitialized||d.normalizeHeight(!0):d.initialize(!0),c<a?l+=d.getHeight():r+=d.getHeight(),i.vDomBottom++,c++}t?(i.vDomTopPad=e?i.vDomRowHeight*this.vDomTop+o:i.scrollTop-l,i.vDomBottomPad=i.vDomBottom==i.displayRowsCount-1?0:Math.max(i.vDomScrollHeight-i.vDomTopPad-r-l,0)):(this.vDomTopPad=0,i.vDomRowHeight=Math.floor((r+l)/c),i.vDomBottomPad=i.vDomRowHeight*(i.displayRowsCount-i.vDomBottom-1),i.vDomScrollHeight=l+r+i.vDomBottomPad-i.height),n[0].style.paddingTop=i.vDomTopPad+"px",n[0].style.paddingBottom=i.vDomBottomPad+"px",e&&(this.scrollTop=i.vDomTopPad+l+o),this.scrollTop=Math.min(this.scrollTop,this.element[0].scrollHeight-this.height),this.element[0].scrollWidth>this.element[0].offsetWidt&&(this.scrollTop+=this.element[0].offsetHeight-this.element[0].clientHeight),this.vDomScrollPosTop=this.scrollTop,this.vDomScrollPosBottom=this.scrollTop,s.scrollTop(this.scrollTop),i.table.options.groupBy&&"fitDataFill"!=i.table.extensions.layout.getMode()&&i.displayRowsCount==i.table.extensions.groupRows.countGroups()&&i.tableElement.css({"min-width":i.table.columnManager.getWidth()})}else this.renderEmptyScroll()},a.prototype.scrollVertical=function(t){var e=this.scrollTop-this.vDomScrollPosTop,o=this.scrollTop-this.vDomScrollPosBottom,i=2*this.vDomWindowBuffer;-e>i||o>i?this._virtualRenderFill(Math.floor(this.element[0].scrollTop/this.element[0].scrollHeight*this.displayRowsCount)):t?(e<0&&this._addTopRow(-e),e<0&&this.vDomScrollHeight-this.scrollTop>this.vDomWindowBuffer&&this._removeBottomRow(-o)):(e>=0&&this.scrollTop>this.vDomWindowBuffer&&this._removeTopRow(e),o>=0&&this._addBottomRow(o))},a.prototype._addTopRow=function(t){var e=arguments.length>1&&arguments[1]!==o?arguments[1]:0,i=this.tableElement,n=this.getDisplayRows();if(this.vDomTop){var s=this.vDomTop-1,a=n[s],r=a.getHeight()||this.vDomRowHeight;t>=r&&(this.styleRow(a,s),i.prepend(a.getElement()),a.initialized&&a.heightInitialized||(this.vDomTopNewRows.push(a),a.heightInitialized||a.clearCellHeight()),a.initialize(),this.vDomTopPad-=r,this.vDomTopPad<0&&(this.vDomTopPad=s*this.vDomRowHeight),s||(this.vDomTopPad=0),i[0].style.paddingTop=this.vDomTopPad+"px",this.vDomScrollPosTop-=r,this.vDomTop--),t=-(this.scrollTop-this.vDomScrollPosTop),e<this.vDomMaxRenderChain&&this.vDomTop&&t>=(n[this.vDomTop-1].getHeight()||this.vDomRowHeight)?this._addTopRow(t,e+1):this._quickNormalizeRowHeight(this.vDomTopNewRows)}},a.prototype._removeTopRow=function(t){var e=this.tableElement,o=this.getDisplayRows()[this.vDomTop],i=o.getHeight()||this.vDomRowHeight;t>=i&&(o.element.detach(),this.vDomTopPad+=i,e[0].style.paddingTop=this.vDomTopPad+"px",this.vDomScrollPosTop+=this.vDomTop?i:i+this.vDomWindowBuffer,this.vDomTop++,t=this.scrollTop-this.vDomScrollPosTop,this._removeTopRow(t))},a.prototype._addBottomRow=function(t){var e=arguments.length>1&&arguments[1]!==o?arguments[1]:0,i=this.tableElement,n=this.getDisplayRows();if(this.vDomBottom<this.displayRowsCount-1){var s=this.vDomBottom+1,a=n[s],r=a.getHeight()||this.vDomRowHeight;t>=r&&(this.styleRow(a,s),i.append(a.getElement()),a.initialized&&a.heightInitialized||(this.vDomBottomNewRows.push(a),a.heightInitialized||a.clearCellHeight()),a.initialize(),this.vDomBottomPad-=r,(this.vDomBottomPad<0||s==this.displayRowsCount-1)&&(this.vDomBottomPad=0),i[0].style.paddingBottom=this.vDomBottomPad+"px",this.vDomScrollPosBottom+=r,this.vDomBottom++),t=this.scrollTop-this.vDomScrollPosBottom,e<this.vDomMaxRenderChain&&this.vDomBottom<this.displayRowsCount-1&&t>=(n[this.vDomBottom+1].getHeight()||this.vDomRowHeight)?this._addBottomRow(t,e+1):this._quickNormalizeRowHeight(this.vDomBottomNewRows)}},a.prototype._removeBottomRow=function(t){var e=this.tableElement,o=this.getDisplayRows()[this.vDomBottom],i=o.getHeight()||this.vDomRowHeight;t>=i&&(o.element.detach(),this.vDomBottomPad+=i,this.vDomBottomPad<0&&this.vDomBottomPad,e[0].style.paddingBottom=this.vDomBottomPad+"px",this.vDomScrollPosBottom-=i,this.vDomBottom--,t=-(this.scrollTop-this.vDomScrollPosBottom),this._removeBottomRow(t))},a.prototype._quickNormalizeRowHeight=function(t){t.forEach(function(t){t.calcHeight()}),t.forEach(function(t){t.setCellHeight()}),t.length=0},a.prototype.normalizeHeight=function(){this.activeRows.forEach(function(t){t.normalizeHeight()})},a.prototype.adjustTableSize=function(){var t=this;if("virtual"===this.renderMode){t.height=t.element.innerHeight(),t.vDomWindowBuffer=t.table.options.virtualDomBuffer||t.height;var e=t.columnManager.getElement().outerHeight()+(t.table.footerManager?t.table.footerManager.getElement().outerHeight():0);t.element.css({"min-height":"calc(100% - "+e+"px)",height:"calc(100% - "+e+"px)","max-height":"calc(100% - "+e+"px)"})}},a.prototype.reinitialize=function(){this.rows.forEach(function(t){t.reinitialize()})},a.prototype.redraw=function(t){var e=this.scrollLeft;this.adjustTableSize(),t?this.renderTable():("simple"==self.renderMode?this._simpleRender():(this.reRenderInPosition(),this.scrollHorizontal(e)),this.displayRowsCount||this.table.options.placeholder&&this.getElement().append(this.table.options.placeholder))},a.prototype.resetScroll=function(){this.element.scrollLeft(0),this.element.scrollTop(0),this.element.scroll()};var r=function(t){this.row=t};r.prototype.getData=function(t){return this.row.getData(t)},r.prototype.getElement=function(){return this.row.getElement()},r.prototype.getCells=function(){var t=[];return this.row.getCells().forEach(function(e){t.push(e.getComponent())}),t},r.prototype.getCell=function(t){return this.row.getCell(t).getComponent()},r.prototype.getIndex=function(){return this.row.getData("data")[this.row.table.options.index]},r.prototype.getPosition=function(t){return this.row.table.rowManager.getRowPosition(this.row,t)},r.prototype.delete=function(){this.row.delete()},r.prototype.scrollTo=function(){this.row.table.rowManager.scrollToRow(this.row)},r.prototype.update=function(t){this.row.updateData(t)},r.prototype.normalizeHeight=function(){this.row.normalizeHeight(!0)},r.prototype.select=function(){this.row.table.extensions.selectRow.selectRows(this.row)},r.prototype.deselect=function(){this.row.table.extensions.selectRow.deselectRows(this.row)},r.prototype.toggleSelect=function(){this.row.table.extensions.selectRow.toggleRow(this.row)},r.prototype._getSelf=function(){return this.row},r.prototype.freeze=function(){this.row.table.extExists("frozenRows",!0)&&this.row.table.extensions.frozenRows.freezeRow(this.row)},r.prototype.unfreeze=function(){this.row.table.extExists("frozenRows",!0)&&this.row.table.extensions.frozenRows.unfreezeRow(this.row)},r.prototype.reformat=function(){return this.row.reinitialize()},r.prototype.getGroup=function(){return this.row.getGroup().getComponent()};var l=function(e,o){this.table=o.table,this.parent=o,this.data={},this.type="row",this.element=t("<div class='tabulator-row' role='row'></div>"),this.extensions={},this.cells=[],this.height=0,this.outerHeight=0,this.initialized=!1,this.heightInitialized=!1,this.setData(e),this.generateElement()};l.prototype.getElement=function(){return this.element},l.prototype.generateElement=function(){var t,e,o,i=this;!1!==i.table.options.selectable&&i.table.extExists("selectRow")&&i.table.extensions.selectRow.initializeRow(this),!1!==i.table.options.movableRows&&i.table.extExists("moveRow")&&i.table.extensions.moveRow.initializeRow(this),i.table.options.rowClick&&i.element.on("click",function(t){i.table.options.rowClick(t,i.getComponent())}),i.table.options.rowDblClick&&i.element.on("dblclick",function(t){i.table.options.rowDblClick(t,i.getComponent())}),i.table.options.rowContext&&i.element.on("contextmenu",function(t){i.table.options.rowContext(t,i.getComponent())}),i.table.options.rowTap&&(o=!1,i.element.on("touchstart",function(t){o=!0}),i.element.on("touchend",function(t){o&&i.table.options.rowTap(t,i.getComponent()),o=!1})),i.table.options.rowDblTap&&(t=null,i.element.on("touchend",function(e){t?(clearTimeout(t),t=null,i.table.options.rowDblTap(e,i.getComponent())):t=setTimeout(function(){clearTimeout(t),t=null},300)})),i.table.options.rowTapHold&&(e=null,i.element.on("touchstart",function(t){clearTimeout(e),e=setTimeout(function(){clearTimeout(e),e=null,o=!1,i.table.options.rowTapHold(t,i.getComponent())},1e3)}),i.element.on("touchend",function(t){clearTimeout(e),e=null}))},l.prototype.generateCells=function(){this.cells=this.table.columnManager.generateCells(this)},l.prototype.initialize=function(t){var e=this;e.initialized&&!t||(e.deleteCells(),e.element.empty(),this.table.extExists("frozenColumns")&&this.table.extensions.frozenColumns.layoutRow(this),this.generateCells(),e.cells.forEach(function(t){e.element.append(t.getElement())}),t&&e.normalizeHeight(),"collapse"===e.table.options.responsiveLayout&&e.table.extExists("responsiveLayout")&&e.table.extensions.responsiveLayout.layoutRow(this),e.table.options.rowFormatter&&e.table.options.rowFormatter(e.getComponent()),e.table.options.resizableRows&&e.table.extExists("resizeRows")&&e.table.extensions.resizeRows.initializeRow(e),e.initialized=!0)},l.prototype.reinitializeHeight=function(){this.heightInitialized=!1,null!==this.element[0].offsetParent&&this.normalizeHeight(!0)},l.prototype.reinitialize=function(){this.initialized=!1,this.heightInitialized=!1,this.height=0,null!==this.element[0].offsetParent&&this.initialize(!0)},l.prototype.calcHeight=function(){var t=0,e=this.element[0].clientHeight;this.cells.forEach(function(e){var o=e.getHeight();o>t&&(t=o)}),this.height=Math.max(t,e),this.outerHeight=this.element[0].offsetHeight},l.prototype.setCellHeight=function(){var t=this.height;this.cells.forEach(function(e){e.setHeight(t)}),this.heightInitialized=!0},l.prototype.clearCellHeight=function(){this.cells.forEach(function(t){t.clearHeight()})},l.prototype.normalizeHeight=function(t){t&&this.clearCellHeight(),this.calcHeight(),this.setCellHeight()},l.prototype.setHeight=function(t){this.height=t,this.setCellHeight()},l.prototype.setHeight=function(t,e){(this.height!=t||e)&&(this.height=t,this.setCellHeight(),this.outerHeight=this.element[0].offsetHeight)},l.prototype.getHeight=function(){return this.outerHeight},l.prototype.getWidth=function(){return this.element.outerWidth()},l.prototype.deleteCell=function(t){var e=this.cells.indexOf(t);e>-1&&this.cells.splice(e,1)},l.prototype.setData=function(t){var e=this;e.table.extExists("mutator")?e.data=e.table.extensions.mutator.transformRow(t,"data"):e.data=t},l.prototype.updateData=function(t){var e=this;"string"==typeof t&&(t=JSON.parse(t)),e.table.extExists("mutator")&&(t=e.table.extensions.mutator.transformRow(t,"data"));for(var o in t)e.data[o]=t[o];for(var o in t){var i=this.getCell(o);i&&i.getValue()!=t[o]&&i.setValueProcessData(t[o])}this.element.is(":visible")?(e.normalizeHeight(),e.table.options.rowFormatter&&e.table.options.rowFormatter(e.getComponent())):(this.initialized=!1,this.height=0),e.table.options.rowUpdated(e.getComponent())},l.prototype.getData=function(t){var e=this;return t?e.table.extExists("accessor")?e.table.extensions.accessor.transformRow(e.data,t):void 0:this.data},l.prototype.getCell=function(t){var t=this.table.columnManager.findColumn(t);return this.cells.find(function(e){return e.column===t})},l.prototype.getCellIndex=function(t){return this.cells.findIndex(function(e){return e===t})},l.prototype.findNextEditableCell=function(t){var e=!1;if(t<this.cells.length-1)for(var o=t+1;o<this.cells.length;o++){var i=this.cells[o];if(i.column.extensions.edit&&i.getElement().is(":visible")){var n=!0;if("function"==typeof i.column.extensions.edit.check&&(n=i.column.extensions.edit.check(i.getComponent())),n){e=i;break}}}return e},l.prototype.findPrevEditableCell=function(t){var e=!1;if(t>0)for(var o=t-1;o>=0;o--){var i=this.cells[o],n=!0;if(i.column.extensions.edit&&i.getElement().is(":visible")&&("function"==typeof i.column.extensions.edit.check&&(n=i.column.extensions.edit.check(i.getComponent())),n)){e=i;break}}return e},l.prototype.getCells=function(){return this.cells},l.prototype.delete=function(){var t=this.table.rowManager.getRowIndex(this);this.deleteActual(),this.table.options.history&&this.table.extExists("history")&&(t&&(t=this.table.rowManager.rows[t-1]),this.table.extensions.history.action("rowDelete",this,{data:this.getData(),pos:!t,index:t}))},l.prototype.deleteActual=function(){this.table.rowManager.getRowIndex(this);this.table.extExists("selectRow")&&this.table.extensions.selectRow._deselectRow(this.row,!0),this.table.rowManager.deleteRow(this),this.deleteCells(),this.extensions.group&&this.extensions.group.removeRow(this),this.table.extExists("columnCalcs")&&(this.table.options.groupBy&&this.table.extExists("groupRows")?this.table.extensions.columnCalcs.recalcRowGroup(this):this.table.extensions.columnCalcs.recalc(this.table.rowManager.activeRows))},l.prototype.deleteCells=function(){for(var t=this.cells.length,e=0;e<t;e++)this.cells[0].delete()},l.prototype.wipe=function(){this.deleteCells(),this.element.children().each(function(){t(this).remove()}),this.element.empty(),this.element.remove()},l.prototype.getGroup=function(){return this.extensions.group||!1},l.prototype.getComponent=function(){return new r(this)};var c=function(t){this.cell=t};c.prototype.getValue=function(){return this.cell.getValue()},c.prototype.getOldValue=function(){return this.cell.getOldValue()},c.prototype.getElement=function(){return t(this.cell.getElement())},c.prototype.getRow=function(){return this.cell.row.getComponent()},c.prototype.getData=function(){return this.cell.row.getData()},c.prototype.getField=function(){return this.cell.column.getField()},c.prototype.getColumn=function(){return this.cell.column.getComponent()},c.prototype.setValue=function(t,e){void 0===e&&(e=!0),this.cell.setValue(t,e)},c.prototype.restoreOldValue=function(){this.cell.setValueActual(this.cell.getOldValue())},c.prototype.edit=function(t){return this.cell.edit(t)},c.prototype.cancelEdit=function(){this.cell.cancelEdit(force)},c.prototype.nav=function(){return this.cell.nav()},c.prototype.checkHeight=function(){this.cell.checkHeight()},c.prototype._getSelf=function(){return this.cell};var u=function(t,e){this.table=t.table,this.column=t,this.row=e,this.element=null,this.value=null,this.oldValue=null,this.height=null,this.width=null,this.minWidth=null,this.build()};u.prototype.build=function(){this.generateElement(),this.setWidth(this.column.width),this._configureCell(),this.setValueActual(this.column.getFieldValue(this.row.data))},u.prototype.generateElement=function(){this.element=document.createElement("div"),this.element.className="tabulator-cell",this.element.setAttribute("role","gridcell"),this.element=t(this.element)},u.prototype._configureCell=function(){var t,e,o,i=this,n=i.column.cellEvents,s=i.element,a=this.column.getField();s[0].style.textAlign=i.column.hozAlign,a&&s.attr("tabulator-field",a),i.column.definition.cssClass&&s.addClass(i.column.definition.cssClass),(n.cellClick||i.table.options.cellClick)&&i.element.on("click",function(t){var e=i.getComponent();n.cellClick&&n.cellClick(t,e),i.table.options.cellClick&&i.table.options.cellClick(t,e)}),(n.cellDblClick||this.table.options.cellDblClick)&&i.element.on("dblclick",function(t){var e=i.getComponent();n.cellDblClick&&n.cellDblClick(t,e),i.table.options.cellDblClick&&i.table.options.cellDblClick(t,e)}),(n.cellContext||this.table.options.cellContext)&&i.element.on("contextmenu",function(t){var e=i.getComponent();n.cellContext&&n.cellContext(t,e),i.table.options.cellContext&&i.table.options.cellContext(t,e)}),"hover"===this.table.options.tooltipGenerationMode&&i.element.on("mouseenter",function(t){i._generateTooltip()}),(n.cellTap||this.table.options.cellTap)&&(o=!1,i.element.on("touchstart",function(t){o=!0}),i.element.on("touchend",function(t){if(o){var e=i.getComponent();n.cellTap&&n.cellTap(t,e),i.table.options.cellTap&&i.table.options.cellTap(t,e)}o=!1})),(n.cellDblTap||this.table.options.cellDblTap)&&(t=null,i.element.on("touchend",function(e){if(t){clearTimeout(t),t=null;var o=i.getComponent();n.cellDblTap&&n.cellDblTap(e,o),i.table.options.cellDblTap&&i.table.options.cellDblTap(e,o)}else t=setTimeout(function(){clearTimeout(t),t=null},300)})),(n.cellTapHold||this.table.options.cellTapHold)&&(e=null,i.element.on("touchstart",function(t){clearTimeout(e),e=setTimeout(function(){clearTimeout(e),e=null,o=!1;var s=i.getComponent();n.cellTapHold&&n.cellTapHold(t,s),i.table.options.cellTapHold&&i.table.options.cellTapHold(t,s)},1e3)}),i.element.on("touchend",function(t){clearTimeout(e),e=null})),i.column.extensions.edit&&i.table.extensions.edit.bindEditor(i),i.column.definition.rowHandle&&!1!==i.table.options.movableRows&&i.table.extExists("moveRow")&&i.table.extensions.moveRow.initializeCell(i),i.column.visible||i.hide()},u.prototype._generateContents=function(){var t=this;t.table.extExists("format")?t.element.html(t.table.extensions.format.formatValue(t)):t.element.html(t.value)},u.prototype._generateTooltip=function(){var t=this,e=t.column.tooltip;e?(!0===e?e=t.value:"function"==typeof e&&!1===(e=e(t.getComponent()))&&(e=""),t.element[0].setAttribute("title",e)):t.element[0].setAttribute("title","")},u.prototype.getElement=function(){return this.element},u.prototype.getValue=function(){return this.value},u.prototype.getOldValue=function(){return this.oldValue},u.prototype.setValue=function(t,e){var o,i=this.setValueProcessData(t,e);i&&(this.table.options.history&&this.table.extExists("history")&&this.table.extensions.history.action("cellEdit",this,{oldValue:this.oldValue,newValue:this.value}),o=this.getComponent(),this.column.cellEvents.cellEdited&&this.column.cellEvents.cellEdited(o),this.table.options.cellEdited(o),this.table.options.dataEdited(this.table.rowManager.getData())),this.table.extExists("columnCalcs")&&(this.column.definition.topCalc||this.column.definition.bottomCalc)&&(this.table.options.groupBy&&this.table.extExists("groupRows")?this.table.extensions.columnCalcs.recalcRowGroup(this.row):this.table.extensions.columnCalcs.recalc(this.table.rowManager.activeRows))},u.prototype.setValueProcessData=function(t,e){var o=!1;return this.value!=t&&(o=!0,e&&this.column.extensions.mutate&&(t=this.table.extensions.mutator.transformCell(this,t))),this.setValueActual(t),o},u.prototype.setValueActual=function(t){this.oldValue=this.value,this.value=t,this.column.setFieldValue(this.row.data,t),this._generateContents(),this._generateTooltip(),this.table.options.resizableColumns&&this.table.extExists("resizeColumns")&&this.table.extensions.resizeColumns.initializeColumn("cell",this.column,this.element),this.table.extExists("frozenColumns")&&this.table.extensions.frozenColumns.layoutElement(this.element,this.column)},u.prototype.setWidth=function(t){this.width=t,this.element[0].style.width=t?t+"px":""},u.prototype.getWidth=function(){return this.width||this.element.outerWidth()},u.prototype.setMinWidth=function(t){this.minWidth=t,this.element[0].style.minWidth=t?t+"px":""},u.prototype.checkHeight=function(){this.element.css("height");this.row.reinitializeHeight()},u.prototype.clearHeight=function(){this.element[0].style.height=""},u.prototype.setHeight=function(t){this.height=t,this.element[0].style.height=t?t+"px":""},u.prototype.getHeight=function(){return this.height||this.element.outerHeight()},u.prototype.show=function(){this.element[0].style.display=""},u.prototype.hide=function(){this.element[0].style.display="none"},u.prototype.edit=function(t){if(this.table.extExists("edit",!0))return this.table.extensions.edit.editCell(this,!1,t)},u.prototype.cancelEdit=function(){if(this.table.extExists("edit",!0)){var t=this.table.extensions.edit.getCurrentCell();t&&t._getSelf()===this?this.table.extensions.edit.cancelEdit():console.warn("Cancel Editor Error - This cell is not currently being edited ")}},u.prototype.delete=function(){this.element.detach(),this.column.deleteCell(this),this.row.deleteCell(this)},u.prototype.nav=function(){var t=this,e=!1,o=this.row.getCellIndex(this);return{next:function(){var e,o=this.right();return!!o||!(!(e=t.table.rowManager.nextDisplayRow(t.row,!0))||!(o=e.findNextEditableCell(-1)))&&(o.edit(),!0)},prev:function(){var e,o=this.left();return!!o||!(!(e=t.table.rowManager.prevDisplayRow(t.row,!0))||!(o=e.findPrevEditableCell(e.cells.length)))&&(o.edit(),!0)},left:function(){return!!(e=t.row.findPrevEditableCell(o))&&(e.edit(),!0)},right:function(){return!!(e=t.row.findNextEditableCell(o))&&(e.edit(),!0)},up:function(){var e=t.table.rowManager.prevDisplayRow(t.row,!0);e&&e.cells[o].edit()},down:function(){var e=t.table.rowManager.nextDisplayRow(t.row,!0);e&&e.cells[o].edit()}}},u.prototype.getIndex=function(){this.row.getCellIndex(this)},u.prototype.getComponent=function(){return new c(this)};var h=function(e){this.table=e,this.active=!1,this.element=t("<div class='tabulator-footer'></div>"),this.links=[],this._initialize()};h.prototype._initialize=function(t){this.table.options.footerElement&&(this.element=this.table.options.footerElement)},h.prototype.getElement=function(){return this.element},h.prototype.append=function(t,e){this.activate(e),this.element.append(t),this.table.rowManager.adjustTableSize()},h.prototype.prepend=function(t,e){this.activate(e),this.element.prepend(t),this.table.rowManager.adjustTableSize()},h.prototype.remove=function(t){t.remove(),this.deactivate()},h.prototype.deactivate=function(t){(this.element.is(":empty")||t)&&(this.element.remove(),this.active=!1)},h.prototype.activate=function(t){this.active||(this.active=!0,this.table.element.append(this.getElement()),this.table.element.show()),t&&this.links.push(t)},h.prototype.redraw=function(){this.links.forEach(function(t){t.footerRedraw()})},window.Tabulator={columnManager:null,rowManager:null,footerManager:null,browser:"",browserSlow:!1,options:{height:!1,layout:"fitData",layoutColumnsOnNewData:!1,fitColumns:!1,columnMinWidth:40,columnVertAlign:"top",resizableColumns:!0,resizableRows:!1,autoResize:!0,columns:[],data:[],tooltips:!1,tooltipsHeader:!1,tooltipGenerationMode:"load",initialSort:!1,footerElement:!1,index:"id",keybindings:[],clipboard:!1,clipboardCopySelector:"active",clipboardCopyFormatter:"table",clipboardCopyHeader:!0,clipboardPasteParser:"table",clipboardPasteAction:"insert",clipboardCopied:function(){},clipboardPasted:function(){},clipboardPasteError:function(){},downloadDataFormatter:!1,downloadReady:function(t,e){return e},downloadComplete:!1,addRowPos:"bottom",selectable:"highlight",selectableRollingSelection:!0,selectablePersistence:!0,selectableCheck:function(t,e){return!0},headerFilterPlaceholder:!1,history:!1,locale:!1,langs:{},virtualDom:!0,persistentLayout:!1,persistentSort:!1,persistentFilter:!1,persistenceID:"",persistenceMode:!0,persistentLayoutID:"",responsiveLayout:!1,responsiveLayoutCollapseStartOpen:!0,responsiveLayoutCollapseUseFormatters:!0,responsiveLayoutCollapseFormatter:!1,pagination:!1,paginationSize:!1,paginationButtonCount:5,paginationElement:!1,paginationDataSent:{},paginationDataReceived:{},paginator:!1,paginationAddRow:"page",ajaxURL:!1,ajaxParams:{},ajaxConfig:"get",ajaxLoader:!0,ajaxLoaderLoading:!1,ajaxLoaderError:!1,ajaxFiltering:!1,ajaxSorting:!1,ajaxProgressiveLoad:!1,ajaxProgressiveLoadDelay:0,ajaxProgressiveLoadScrollMargin:0,groupBy:!1,groupStartOpen:!0,groupHeader:!1,movableColumns:!1,movableRows:!1,movableRowsConnectedTables:!1,movableRowsSender:!1,movableRowsReceiver:"insert",movableRowsSendingStart:function(){},movableRowsSent:function(){},movableRowsSentFailed:function(){},movableRowsSendingStop:function(){},movableRowsReceivingStart:function(){},movableRowsReceived:function(){},movableRowsReceivedFailed:function(){},movableRowsReceivingStop:function(){},scrollToRowPosition:"top",scrollToRowIfVisible:!0,
scrollToColumnPosition:"left",scrollToColumnIfVisible:!0,rowFormatter:!1,placeholder:!1,tableBuilding:function(){},tableBuilt:function(){},renderStarted:function(){},renderComplete:function(){},rowClick:!1,rowDblClick:!1,rowContext:!1,rowTap:!1,rowDblTap:!1,rowTapHold:!1,rowAdded:function(){},rowDeleted:function(){},rowMoved:function(){},rowUpdated:function(){},rowSelectionChanged:function(){},rowSelected:function(){},rowDeselected:function(){},rowResized:function(){},cellClick:!1,cellDblClick:!1,cellContext:!1,cellTap:!1,cellDblTap:!1,cellTapHold:!1,cellEditing:function(){},cellEdited:function(){},cellEditCancelled:function(){},columnMoved:!1,columnResized:function(){},columnTitleChanged:function(){},columnVisibilityChanged:function(){},htmlImporting:function(){},htmlImported:function(){},dataLoading:function(){},dataLoaded:function(){},dataEdited:function(){},ajaxRequesting:function(){},ajaxResponse:!1,ajaxError:function(){},dataFiltering:!1,dataFiltered:!1,dataSorting:function(){},dataSorted:function(){},groupToggleElement:"arrow",groupClosedShowCalcs:!1,dataGrouping:function(){},dataGrouped:!1,groupVisibilityChanged:function(){},groupClick:!1,groupDblClick:!1,groupContext:!1,groupTap:!1,groupDblTap:!1,groupTapHold:!1,columnCalcs:!0,pageLoaded:function(){},localized:function(){},validationFailed:function(){},historyUndo:function(){},historyRedo:function(){}},_mapDepricatedFunctionality:function(){this.options.fitColumns&&(this.options.layout="fitColumns",console.warn("The%c fitColumns:true%c option has been depricated and will be removed in version 4.0, use %c layout:'fitColumns'%c instead.","font-weight:bold;","font-weight:regular;","font-weight:bold;","font-weight:regular;")),this.options.persistentLayoutID&&(this.options.persistenceID=this.options.persistentLayoutID,console.warn("The%c persistentLayoutID%c option has been depricated and will be removed in version 4.0, use %c persistenceID%c instead.","font-weight:bold;","font-weight:regular;","font-weight:bold;","font-weight:regular;")),"cookie"!==this.options.persistentLayout&&"local"!==this.options.persistentLayout||(this.options.persistenceMode=this.options.persistentLayout,this.options.persistentLayout=!0,console.warn("Setting the persistent storage mode on the%c persistentLayout%c option has been depricated and will be removed in version 4.0, use %c persistenceMode%c instead.","font-weight:bold;","font-weight:regular;","font-weight:bold;","font-weight:regular;")),this.options.downloadDataMutator&&(this.options.downloadDataFormatter=this.options.downloadDataMutator,console.warn("The%c downloadDataMutator%c option has been depricated and will be removed in version 4.0, use %cdownloadDataFormatter%c instead.","font-weight:bold;","font-weight:regular;","font-weight:bold;","font-weight:regular;"))},_create:function(){var t=this,e=this.element;t._clearObjectPointers(),t._mapDepricatedFunctionality(),t.bindExtensions(),e.is("table")?this.extExists("htmlTableImport",!0)&&t.extensions.htmlTableImport.parseTable():(t.columnManager=new i(t),t.rowManager=new a(t),t.footerManager=new h(t),t.columnManager.setRowManager(t.rowManager),t.rowManager.setColumnManager(t.columnManager),t._buildElement(),this._loadInitialData())},_clearObjectPointers:function(){this.options.columns=this.options.columns.slice(0),this.options.data=this.options.data.slice(0)},_buildElement:function(){var e=this.element,o=this.extensions,i=this.options;i.tableBuilding(),e.addClass("tabulator").attr("role","grid").empty(),i.height&&(i.height=isNaN(i.height)?i.height:i.height+"px",this.element.css({height:i.height})),this.rowManager.initialize(),this._detectBrowser(),this.extExists("layout",!0)&&o.layout.initialize(i.layout),!1!==i.headerFilterPlaceholder&&o.localize.setHeaderFilterPlaceholder(i.headerFilterPlaceholder);for(var n in i.langs)o.localize.installLang(n,i.langs[n]);if(o.localize.setLocale(i.locale),"string"==typeof i.placeholder&&(i.placeholder=t("<div class='tabulator-placeholder'><span>"+i.placeholder+"</span></div>")),e.append(this.columnManager.getElement()),e.append(this.rowManager.getElement()),i.footerElement&&this.footerManager.activate(),(i.persistentLayout||i.persistentSort||i.persistentFilter)&&this.extExists("persistence",!0)&&o.persistence.initialize(i.persistenceMode,i.persistenceID),i.persistentLayout&&this.extExists("persistence",!0)&&(i.columns=o.persistence.load("columns",i.columns)),i.movableRows&&this.extExists("moveRow")&&o.moveRow.initialize(),this.extExists("columnCalcs")&&o.columnCalcs.initialize(),this.columnManager.setColumns(i.columns),this.extExists("frozenRows")&&this.extensions.frozenRows.initialize(),(i.persistentSort||i.initialSort)&&this.extExists("sort",!0)){var s=[];i.persistentSort&&this.extExists("persistence",!0)?!1===(s=o.persistence.load("sort"))&&i.initialSort&&(s=i.initialSort):i.initialSort&&(s=i.initialSort),o.sort.setSort(s)}if(i.persistentFilter&&this.extExists("persistence",!0)){var a=o.persistence.load("filter");!1!==a&&this.setFilter(a)}this.extExists("ajax")&&o.ajax.initialize(),i.pagination&&this.extExists("page",!0)&&o.page.initialize(),i.groupBy&&this.extExists("groupRows",!0)&&o.groupRows.initialize(),this.extExists("keybindings")&&o.keybindings.initialize(),this.extExists("selectRow")&&o.selectRow.clearSelectionData(!0),i.autoResize&&this.extExists("resizeTable")&&o.resizeTable.initialize(),this.extExists("clipboard")&&o.clipboard.initialize(),i.tableBuilt()},_loadInitialData:function(){var t=this;t.options.pagination&&t.extExists("page")?(t.extensions.page.reset(!0),"local"==t.options.pagination?t.options.data.length?t.rowManager.setData(t.options.data):t.options.ajaxURL&&t.extExists("ajax")?t.extensions.ajax.loadData():t.rowManager.setData(t.options.data):t.extensions.page.setPage(1)):t.options.data.length?t.rowManager.setData(t.options.data):t.options.ajaxURL&&t.extExists("ajax")?t.extensions.ajax.loadData():t.rowManager.setData(t.options.data)},_setOption:function(t,e){console.error("Options Error - Tabulator does not allow options to be set after initialization unless there is a function defined for that purpose")},_destroy:function(){var t=this.element;this.rowManager.rows.forEach(function(t){t.wipe()}),this.rowManager.rows=[],this.rowManager.activeRows=[],this.rowManager.displayRows=[],this.options.autoResize&&this.extExists("resizeTable")&&this.extensions.resizeTable.clearBindings(),this.extExists("keybindings")&&this.extensions.keybindings.clearBindings(),t.empty(),t.removeClass("tabulator")},_detectBrowser:function(){var t=navigator.userAgent;t.indexOf("Trident")>-1?(this.browser="ie",this.browserSlow=!0):t.indexOf("Edge")>-1?(this.browser="edge",this.browserSlow=!0):t.indexOf("Firefox")>-1?(this.browser="firefox",this.browserSlow=!1):(this.browser="other",this.browserSlow=!1)},setData:function(t,e,o){this.extExists("ajax")&&this.extensions.ajax.blockActiveRequest(),this._setData(t,e,o)},_setData:function(t,e,o,i){var n=this;"string"==typeof t?0==t.indexOf("{")||0==t.indexOf("[")?n.rowManager.setData(JSON.parse(t),i):n.extExists("ajax",!0)&&(e&&n.extensions.ajax.setParams(e),o&&n.extensions.ajax.setConfig(o),n.extensions.ajax.setUrl(t),"remote"==n.options.pagination&&n.extExists("page",!0)?(n.extensions.page.reset(!0),n.extensions.page.setPage(1)):n.extensions.ajax.loadData(i)):t?n.rowManager.setData(t,i):n.extExists("ajax")&&n.extensions.ajax.getUrl?"remote"==n.options.pagination&&n.extExists("page",!0)?(n.extensions.page.reset(!0),n.extensions.page.setPage(1)):n.extensions.ajax.loadData(i):n.rowManager.setData([],i)},clearData:function(){this.extExists("ajax")&&this.extensions.ajax.blockActiveRequest(),this.rowManager.clearData()},getData:function(t){return this.rowManager.getData(t)},getDataCount:function(t){return this.rowManager.getDataCount(t)},getHtml:function(t){return this.rowManager.getHtml(t)},getAjaxUrl:function(){if(this.extExists("ajax",!0))return this.extensions.ajax.getUrl()},replaceData:function(t,e,o){this.extExists("ajax")&&this.extensions.ajax.blockActiveRequest(),this._setData(t,e,o,!0)},updateData:function(t){var e=this;this.extExists("ajax")&&this.extensions.ajax.blockActiveRequest(),"string"==typeof t&&(t=JSON.parse(t)),t?t.forEach(function(t){var o=e.rowManager.findRow(t[e.options.index]);o&&o.updateData(t)}):console.warn("Update Error - No data provided")},addData:function(t,e,o){var i=[],n=[];if(this.extExists("ajax")&&this.extensions.ajax.blockActiveRequest(),"string"==typeof t&&(t=JSON.parse(t)),t)return i=this.rowManager.addRows(t,e,o),i.forEach(function(t){n.push(t.getComponent())}),n;console.warn("Update Error - No data provided")},updateOrAddData:function(t){var e=this,o=[];if(this.extExists("ajax")&&this.extensions.ajax.blockActiveRequest(),"string"==typeof t&&(t=JSON.parse(t)),t)return t.forEach(function(t){var i=e.rowManager.findRow(t[e.options.index]);i?(i.updateData(t),o.push(i.getComponent())):o.push(e.rowManager.addRows(t)[0].getComponent())}),o;console.warn("Update Error - No data provided")},getRow:function(t){var e=this.rowManager.findRow(t);return e?e.getComponent():(console.warn("Find Error - No matching row found:",t),!1)},getRowFromPosition:function(t,e){var o=this.rowManager.getRowFromPosition(t,e);return o?o.getComponent():(console.warn("Find Error - No matching row found:",t),!1)},deleteRow:function(t){var e=this.rowManager.findRow(t);return e?(e.delete(),!0):(console.warn("Delete Error - No matching row found:",t),!1)},addRow:function(t,e,o){var i;return"string"==typeof t&&(t=JSON.parse(t)),i=this.rowManager.addRows(t,e,o)[0],this.extExists("columnCalcs")&&this.extensions.columnCalcs.recalc(this.rowManager.activeRows),i.getComponent()},updateOrAddRow:function(t,e){var o=this.rowManager.findRow(t);return"string"==typeof e&&(e=JSON.parse(e)),o?o.updateData(e):(o=this.rowManager.addRows(e)[0],this.extExists("columnCalcs")&&this.extensions.columnCalcs.recalc(this.rowManager.activeRows)),o.getComponent()},updateRow:function(t,e){var o=this.rowManager.findRow(t);return"string"==typeof e&&(e=JSON.parse(e)),o?(o.updateData(e),o.getComponent()):(console.warn("Update Error - No matching row found:",t),!1)},scrollToRow:function(t,e,o){var i=this.rowManager.findRow(t);return i?this.rowManager.scrollToRow(i,e,o):(console.warn("Scroll Error - No matching row found:",t),!1)},getRows:function(t){return this.rowManager.getComponents(t)},getRowPosition:function(t,e){var o=this.rowManager.findRow(t);return o?this.rowManager.getRowPosition(o,e):(console.warn("Position Error - No matching row found:",t),!1)},copyToClipboard:function(t,e,o,i){this.extExists("clipboard",!0)&&this.extensions.clipboard.copy(t,e,o,i)},setColumns:function(t){this.columnManager.setColumns(t)},getColumns:function(t){return this.columnManager.getComponents(t)},getColumnDefinitions:function(){return this.columnManager.getDefinitionTree()},getColumnLayout:function(){if(this.extExists("persistence",!0))return this.extensions.persistence.parseColumns(this.columnManager.getColumns())},setColumnLayout:function(t){return!!this.extExists("persistence",!0)&&(this.columnManager.setColumns(this.extensions.persistence.mergeDefinition(this.options.columns,t)),!0)},showColumn:function(t){var e=this.columnManager.findColumn(t);if(!e)return console.warn("Column Show Error - No matching column found:",t),!1;e.show(),this.options.responsiveLayout&&this.extExists("responsiveLayout",!0)&&this.extensions.responsiveLayout.update()},hideColumn:function(t){var e=this.columnManager.findColumn(t);if(!e)return console.warn("Column Hide Error - No matching column found:",t),!1;e.hide(),this.options.responsiveLayout&&this.extExists("responsiveLayout",!0)&&this.extensions.responsiveLayout.update()},toggleColumn:function(t){var e=this.columnManager.findColumn(t);if(!e)return console.warn("Column Visibility Toggle Error - No matching column found:",t),!1;e.visible?e.hide():e.show()},addColumn:function(t,e,o){var i=this.columnManager.findColumn(o);this.columnManager.addColumn(t,e,i)},deleteColumn:function(t){var e=this.columnManager.findColumn(t);if(!e)return console.warn("Column Delete Error - No matching column found:",t),!1;e.delete()},scrollToColumn:function(t,e,o){var i=this.columnManager.findColumn(t);return i?this.columnManager.scrollToColumn(i,e,o):(console.warn("Scroll Error - No matching column found:",t),!1)},setLocale:function(t){this.extensions.localize.setLocale(t)},getLocale:function(){return this.extensions.localize.getLocale()},getLang:function(t){return this.extensions.localize.getLang(t)},redraw:function(t){this.columnManager.redraw(t),this.rowManager.redraw(t)},setHeight:function(t){this.options.height=isNaN(t)?t:t+"px",this.element.css({height:this.options.height}),this.rowManager.redraw()},setSort:function(t,e){this.extExists("sort",!0)&&(this.extensions.sort.setSort(t,e),this.rowManager.sorterRefresh())},getSort:function(){if(this.extExists("sort",!0))return console.warn("The%c getSort%c function has been depricated and will be removed in version 4.0, use %c getSorters%c instead.","font-weight:bold;","font-weight:regular;","font-weight:bold;","font-weight:regular;"),this.getSorters()},getSorters:function(){if(this.extExists("sort",!0))return this.extensions.sort.getSort()},clearSort:function(){this.extExists("sort",!0)&&(this.extensions.sort.clear(),this.rowManager.sorterRefresh())},setFilter:function(t,e,o){this.extExists("filter",!0)&&(this.extensions.filter.setFilter(t,e,o),this.rowManager.filterRefresh())},addFilter:function(t,e,o){this.extExists("filter",!0)&&(this.extensions.filter.addFilter(t,e,o),this.rowManager.filterRefresh())},getFilter:function(t){console.warn("The%c getFilter%c function has been depricated and will be removed in version 4.0, use %c getFilters%c instead.","font-weight:bold;","font-weight:regular;","font-weight:bold;","font-weight:regular;"),this.getFilters(t)},getFilters:function(t){if(this.extExists("filter",!0))return this.extensions.filter.getFilters(t)},setHeaderFilterFocus:function(t){if(this.extExists("filter",!0)){var e=this.columnManager.findColumn(t);if(!e)return console.warn("Column Filter Focus Error - No matching column found:",t),!1;this.extensions.filter.setHeaderFilterFocus(e)}},setHeaderFilterValue:function(t,e){if(this.extExists("filter",!0)){var o=this.columnManager.findColumn(t);if(!o)return console.warn("Column Filter Error - No matching column found:",t),!1;this.extensions.filter.setHeaderFilterValue(o,e)}},getHeaderFilters:function(){if(this.extExists("filter",!0))return this.extensions.filter.getHeaderFilters()},removeFilter:function(t,e,o){this.extExists("filter",!0)&&(this.extensions.filter.removeFilter(t,e,o),this.rowManager.filterRefresh())},clearFilter:function(t){this.extExists("filter",!0)&&(this.extensions.filter.clearFilter(t),this.rowManager.filterRefresh())},clearHeaderFilter:function(){this.extExists("filter",!0)&&(this.extensions.filter.clearHeaderFilter(),this.rowManager.filterRefresh())},selectRow:function(t){this.extExists("selectRow",!0)&&this.extensions.selectRow.selectRows(t)},deselectRow:function(t){this.extExists("selectRow",!0)&&this.extensions.selectRow.deselectRows(t)},toggleSelectRow:function(t){this.extExists("selectRow",!0)&&this.extensions.selectRow.toggleRow(t)},getSelectedRows:function(){if(this.extExists("selectRow",!0))return this.extensions.selectRow.getSelectedRows()},getSelectedData:function(){if(this.extExists("selectRow",!0))return this.extensions.selectRow.getSelectedData()},setMaxPage:function(t){if(!this.options.pagination||!this.extExists("page"))return!1;this.extensions.page.setMaxPage(t)},setPage:function(t){if(!this.options.pagination||!this.extExists("page"))return!1;this.extensions.page.setPage(t)},setPageSize:function(t){if(!this.options.pagination||!this.extExists("page"))return!1;this.extensions.page.setPageSize(t),this.extensions.page.setPage(1)},getPageSize:function(){if(this.options.pagination&&this.extExists("page",!0))return this.extensions.page.getPageSize()},previousPage:function(){if(!this.options.pagination||!this.extExists("page"))return!1;this.extensions.page.previousPage()},nextPage:function(){if(!this.options.pagination||!this.extExists("page"))return!1;this.extensions.page.nextPage()},getPage:function(){return!(!this.options.pagination||!this.extExists("page"))&&this.extensions.page.getPage()},getPageMax:function(){return!(!this.options.pagination||!this.extExists("page"))&&this.extensions.page.getPageMax()},setGroupBy:function(t){if(!this.extExists("groupRows",!0))return!1;this.options.groupBy=t,this.extensions.groupRows.initialize(),this.rowManager.refreshActiveData("display")},setGroupStartOpen:function(t){if(!this.extExists("groupRows",!0))return!1;this.options.groupStartOpen=t,this.extensions.groupRows.initialize(),this.options.groupBy?this.rowManager.refreshActiveData("group"):console.warn("Grouping Update - cant refresh view, no groups have been set")},setGroupHeader:function(t){if(!this.extExists("groupRows",!0))return!1;this.options.groupHeader=t,this.extensions.groupRows.initialize(),this.options.groupBy?this.rowManager.refreshActiveData("group"):console.warn("Grouping Update - cant refresh view, no groups have been set")},getGroups:function(t){return!!this.extExists("groupRows",!0)&&this.extensions.groupRows.getGroups()},getCalcResults:function(){return!!this.extExists("columnCalcs",!0)&&this.extensions.columnCalcs.getResults()},navigatePrev:function(){var t=!1;return!(!this.table.extExists("edit",!0)||!(t=this.table.extensions.edit.currentCell))&&(e.preventDefault(),t.nav().prev())},navigateNext:function(){var t=!1;return!(!this.table.extExists("edit",!0)||!(t=this.table.extensions.edit.currentCell))&&(e.preventDefault(),t.nav().next())},navigateLeft:function(){var t=!1;return!(!this.table.extExists("edit",!0)||!(t=this.table.extensions.edit.currentCell))&&(e.preventDefault(),t.nav().left())},navigateRight:function(){var t=!1;return!(!this.table.extExists("edit",!0)||!(t=this.table.extensions.edit.currentCell))&&(e.preventDefault(),t.nav().right())},navigateUp:function(){var t=!1;return!(!this.table.extExists("edit",!0)||!(t=this.table.extensions.edit.currentCell))&&(e.preventDefault(),t.nav().up())},navigateDown:function(){var t=!1;return!(!this.table.extExists("edit",!0)||!(t=this.table.extensions.edit.currentCell))&&(e.preventDefault(),t.nav().dpwn())},undo:function(){return!(!this.options.history||!this.extExists("history",!0))&&this.extensions.history.undo()},redo:function(){return!(!this.options.history||!this.extExists("history",!0))&&this.extensions.history.redo()},download:function(t,e,o){this.extExists("download",!0)&&this.extensions.download.download(t,e,o)},tableComms:function(t,e,o,i){this.extensions.comms.receive(t,e,o,i)},extensions:{},extensionBindings:{},extendExtension:function(t,e,o){if(this.extensionBindings[t]){var i=this.extensionBindings[t].prototype[e];if(i)if("object"==(void 0===o?"undefined":_typeof(o)))for(var n in o)i[n]=o[n];else console.warn("Extension Error - Invalid value type, it must be an object");else console.warn("Extension Error - property does not exist:",e)}else console.warn("Extension Error - extension does not exist:",t)},registerExtension:function(t,e){this.extensionBindings[t]=e},bindExtensions:function(){var t=this;this.extensions={};for(var e in t.extensionBindings)t.extensions[e]=new t.extensionBindings[e](t)},extExists:function(t,e){return!!this.extensions[t]||(e&&console.error("Tabulator Plugin Not Installed: "+t),!1)}};var p=function(t){this.table=t,this.mode=null};p.prototype.initialize=function(t){this.modes[t]?this.mode=t:(console.warn("Layout Error - invalid mode set, defaulting to 'fitData' : "+t),this.mode="fitData"),this.table.element.attr("tabulator-layout",this.mode)},p.prototype.getMode=function(){return this.mode},p.prototype.layout=function(){this.modes[this.mode].call(this,this.table.columnManager.columnsByIndex)},p.prototype.modes={fitData:function(t){t.forEach(function(t){t.reinitializeWidth()}),this.table.options.responsiveLayout&&this.table.extExists("responsiveLayout",!0)&&this.table.extensions.responsiveLayout.update()},fitDataFill:function(t){t.forEach(function(t){t.reinitializeWidth()}),this.table.options.responsiveLayout&&this.table.extExists("responsiveLayout",!0)&&this.table.extensions.responsiveLayout.update()},fitColumns:function(t){function e(t){return"string"==typeof t?t.indexOf("%")>-1?n/100*parseInt(t):parseInt(t):t}function o(t,i,n,s){function a(t){return n*(t.column.definition.widthGrow||1)}function r(t){return e(t.width)-n*(t.column.definition.widthShrink||0)}var l=[],c=0,u=0,h=0,p=0,d=0,f=[];return t.forEach(function(t,e){var o=s?r(t):a(t);t.column.minWidth>=o?l.push(t):(f.push(t),d+=s?t.column.definition.widthShrink||1:t.column.definition.widthGrow||1)}),l.length?(l.forEach(function(t){c+=s?t.width-t.column.minWidth:t.column.minWidth,t.width=t.column.minWidth}),u=i-c,h=d?Math.floor(u/d):u,p=u-h*d,p+=o(f,u,h,s)):(p=d?i-Math.floor(i/d)*d:i,f.forEach(function(t){t.width=s?r(t):a(t)})),p}var i=this,n=i.table.element.innerWidth(),s=0,a=0,r=0,l=0,c=[],u=[],h=0,p=0,d=0;this.table.options.responsiveLayout&&this.table.extExists("responsiveLayout",!0)&&this.table.extensions.responsiveLayout.update(),this.table.rowManager.element[0].scrollHeight>this.table.rowManager.element.innerHeight()&&(n-=this.table.rowManager.element[0].offsetWidth-this.table.rowManager.element[0].clientWidth),t.forEach(function(t){var o,i,n;t.visible&&(o=t.definition.width,i=parseInt(t.minWidth),o?(n=e(o),s+=n>i?n:i,t.definition.widthShrink&&(u.push({column:t,width:n>i?n:i}),h+=t.definition.widthShrink)):(c.push({column:t,width:0}),r+=t.definition.widthGrow||1))}),a=n-s,l=Math.floor(a/r);var d=o(c,a,l,!1);c.length&&d>0&&(c[c.length-1].width+=+d),c.forEach(function(t){a-=t.width}),p=Math.abs(d)+a,p>0&&h&&(d=o(u,p,Math.floor(p/h),!0)),u.length&&(u[u.length-1].width-=d),c.forEach(function(t){t.column.setWidth(t.width)}),u.forEach(function(t){t.column.setWidth(t.width)})}},Tabulator.registerExtension("layout",p);var d=function(t){this.table=t,this.locale="default",this.lang=!1,this.bindings={}};d.prototype.setHeaderFilterPlaceholder=function(t){this.langs.default.headerFilters.default=t},d.prototype.setHeaderFilterColumnPlaceholder=function(t,e){this.langs.default.headerFilters.columns[t]=e,this.lang&&!this.lang.headerFilters.columns[t]&&(this.lang.headerFilters.columns[t]=e)},d.prototype.installLang=function(t,e){this.langs[t]?this._setLangProp(this.langs[t],e):this.langs[t]=e},d.prototype._setLangProp=function(t,e){for(var o in e)t[o]&&"object"==_typeof(t[o])?this._setLangProp(t[o],e[o]):t[o]=e[o]},d.prototype.setLocale=function(e){function o(t,e){for(var i in t)"object"==_typeof(t[i])?(e[i]||(e[i]={}),o(t[i],e[i])):e[i]=t[i]}var i=this;if(e=e||"default",!0===e&&navigator.language&&(e=navigator.language.toLowerCase()),e&&!i.langs[e]){var n=e.split("-")[0];i.langs[n]?(console.warn("Localization Error - Exact matching locale not found, using closest match: ",e,n),e=n):(console.warn("Localization Error - Matching locale not found, using default: ",e),e="default")}i.locale=e,i.lang=t.extend(!0,{},i.langs.default),"default"!=e&&o(i.langs[e],i.lang),i.table.options.localized(i.locale,i.lang),i._executeBindings()},d.prototype.getLocale=function(t){return self.locale},d.prototype.getLang=function(t){return t?this.langs[t]:this.lang},d.prototype.getText=function(t,e){var t=e?t+"|"+e:t,o=t.split("|");return this._getLangElement(o,this.locale)||""},d.prototype._getLangElement=function(t,e){var o=this,i=o.lang;return t.forEach(function(t){var e;i&&(e=i[t],i=void 0!==e&&e)}),i},d.prototype.bind=function(t,e){this.bindings[t]||(this.bindings[t]=[]),this.bindings[t].push(e),e(this.getText(t),this.lang)},d.prototype._executeBindings=function(){var t=this;for(var e in t.bindings)!function(e){t.bindings[e].forEach(function(o){o(t.getText(e),t.lang)})}(e)},d.prototype.langs={default:{groups:{item:"item",items:"items"},columns:{},ajax:{loading:"Loading",error:"Error"},pagination:{first:"First",first_title:"First Page",last:"Last",last_title:"Last Page",prev:"Prev",prev_title:"Prev Page",next:"Next",next_title:"Next Page"},headerFilters:{default:"filter column...",columns:{}}}},Tabulator.registerExtension("localize",d);var f=function(t){this.table=t};f.prototype.getConnections=function(e){var o,i=this,n=[];return Array.isArray(e)?n=e:(o="string"==typeof e?t(e):e,o.each(function(){i.table.element[0]!==this&&n.push(t(this))})),n},f.prototype.send=function(t,e,o,i){var n=this,s=this.getConnections(t);s.forEach(function(t){t.tabulator("tableComms",n.table.element,e,o,i)}),!s.length&&t&&console.warn("Table Connection Error - No tables matching selector found",t)},f.prototype.receive=function(t,e,o,i){if(this.table.extExists(e))return this.table.extensions[e].commsReceived(t,o,i);console.warn("Inter-table Comms Error - no such extension:",e)},Tabulator.registerExtension("comms",f);var g=function(t){this.table=t,this.allowedTypes=["","data","download","clipboard"]};g.prototype.initializeColumn=function(t){var e=this,o=!1,i={};this.allowedTypes.forEach(function(n){var s,a="accessor"+(n.charAt(0).toUpperCase()+n.slice(1));t.definition[a]&&(s=e.lookupAccessor(t.definition[a]))&&(o=!0,i[a]={accessor:s,params:t.definition[a+"Params"]||{}})}),o&&(t.extensions.accessor=i)},g.prototype.lookupAccessor=function(t){var e=!1;switch(void 0===t?"undefined":_typeof(t)){case"string":this.accessors[t]?e=this.accessors[t]:console.warn("Accessor Error - No such accessor found, ignoring: ",t);break;case"function":e=t}return e},g.prototype.transformRow=function(e,o){var i=this,n="accessor"+(o.charAt(0).toUpperCase()+o.slice(1)),s=t.extend(!0,{},e||{});return i.table.columnManager.traverse(function(t){var e,i;t.extensions.accessor&&(i=t.extensions.accessor[n]||t.extensions.accessor.accessor||!1)&&"undefined"!=(e=t.getFieldValue(s))&&t.setFieldValue(s,i.accessor(e,s,o,i.params,t.getComponent()))}),s},g.prototype.accessors={},Tabulator.registerExtension("accessor",g);var m=function(e){this.table=e,this.config=!1,this.url="",this.params=!1,this.loaderElement=t("<div class='tablulator-loader'></div>"),this.msgElement=t("<div class='tabulator-loader-msg' role='alert'></div>"),this.loadingElement=!1,this.errorElement=!1,this.progressiveLoad=!1,this.loading=!1,this.requestOrder=0};m.prototype.initialize=function(){this.loaderElement.append(this.msgElement),this.table.options.ajaxLoaderLoading&&(this.loadingElement=this.table.options.ajaxLoaderLoading),this.table.options.ajaxLoaderError&&(this.errorElement=this.table.options.ajaxLoaderError),this.table.options.ajaxParams&&this.setParams(this.table.options.ajaxParams),this.table.options.ajaxConfig&&this.setConfig(this.table.options.ajaxConfig),this.table.options.ajaxURL&&this.setUrl(this.table.options.ajaxURL),this.table.options.ajaxProgressiveLoad&&(this.table.options.pagination?(this.progressiveLoad=!1,console.error("Progressive Load Error - Pagination and progressive load cannot be used at the same time")):this.table.extExists("page")?(this.progressiveLoad=this.table.options.ajaxProgressiveLoad,this.table.extensions.page.initializeProgressive(this.progressiveLoad)):console.error("Pagination plugin is required for progressive ajax loading"))},m.prototype.setParams=function(t,e){if(e){this.params=this.params||{};for(var o in t)this.params[o]=t[o]}else this.params=t},m.prototype.getParams=function(){return this.params||{}},m.prototype.setConfig=function(t){if(this._loadDefaultConfig(),"string"==typeof t)this.config.type=t;else for(var e in t)this.config[e]=t[e]},m.prototype._loadDefaultConfig=function(t){var e=this;if(!e.config||t){e.config={};for(var o in e.defaultConfig)e.config[o]=e.defaultConfig[o]}},m.prototype.setUrl=function(t){this.url=t},m.prototype.getUrl=function(){return this.url},m.prototype.loadData=function(t){this.progressiveLoad?this._loadDataProgressive():this._loadDataStandard(t)},m.prototype.nextPage=function(t){var e;this.loading||(e=this.table.options.ajaxProgressiveLoadScrollMargin||2*this.table.rowManager.element[0].clientHeight,t<e&&this.table.extensions.page.nextPage())},m.prototype.blockActiveRequest=function(){this.requestOrder++},m.prototype._loadDataProgressive=function(){this.table.rowManager.setData([]),this.table.extensions.page.setPage(1)},m.prototype._loadDataStandard=function(t){var e=this;this.sendRequest(function(o){e.table.rowManager.setData(o,t)},t)},m.prototype.sendRequest=function(e,o){var i,n=this;if(!n.url)return console.warn("Ajax Load Error - No URL Set"),!1;n.requestOrder++,i=n.requestOrder,n._loadDefaultConfig(),n.config.url=n.url,n.params&&(n.config.data=n.params),!1!==n.table.options.ajaxRequesting(n.url,n.params)&&(n.loading=!0,o||n.showLoader(),t.ajax(n.config).done(function(t){i===n.requestOrder?(n.table.options.ajaxResponse&&(t=n.table.options.ajaxResponse(n.url,n.params,t)),e(t)):console.warn("Ajax Response Blocked - An active ajax request was blocked by an attempt to change table data while the request was being made"),n.hideLoader(),n.loading=!1}).fail(function(t,e,o){console.error("Ajax Load Error - Connection Error: "+t.status,o),n.table.options.ajaxError(t,e,o),n.showError(),setTimeout(function(){n.hideLoader()},3e3),n.loading=!1}))},m.prototype.showLoader=function(){("function"==typeof this.table.options.ajaxLoader?this.table.options.ajaxLoader():this.table.options.ajaxLoader)&&(this.loaderElement.detach(),this.msgElement.empty().removeClass("tabulator-error").addClass("tabulator-loading"),this.loadingElement?this.msgElement.append(this.loadingElement):this.msgElement.append(this.table.extensions.localize.getText("ajax|loading")),this.table.element.append(this.loaderElement))},m.prototype.showError=function(){this.loaderElement.detach(),this.msgElement.empty().removeClass("tabulator-loading").addClass("tabulator-error"),this.errorElement?this.msgElement.append(this.errorElement):this.msgElement.append(this.table.extensions.localize.getText("ajax|error")),this.table.element.append(this.loaderElement)},m.prototype.hideLoader=function(){this.loaderElement.detach()},m.prototype.defaultConfig={url:"",type:"GET",async:!0,dataType:"json",success:function(t){}},Tabulator.registerExtension("ajax",m);var b=function(e){this.table=e,this.topCalcs=[],this.botCalcs=[],this.genColumn=!1,this.topElement=t("<div class='tabulator-calcs-holder'></div>"),this.botElement=t("<div class='tabulator-calcs-holder'></div>"),this.topRow=!1,this.botRow=!1,this.topInitialized=!1,this.botInitialized=!1,this.initialize()};b.prototype.initialize=function(){this.genColumn=new s({field:"value"},this)},b.prototype.registerColumnField=function(){},b.prototype.initializeColumn=function(t){var e=t.definition,o={topCalcParams:e.topCalcParams||{},botCalcParams:e.bottomCalcParams||{}};if(e.topCalc){switch(_typeof(e.topCalc)){case"string":this.calculations[e.topCalc]?o.topCalc=this.calculations[e.topCalc]:console.warn("Column Calc Error - No such calculation found, ignoring: ",e.topCalc);break;case"function":o.topCalc=e.topCalc}o.topCalc&&(t.extensions.columnCalcs=o,this.topCalcs.push(t),"group"!=this.table.options.columnCalcs&&this.initializeTopRow())}if(e.bottomCalc){switch(_typeof(e.bottomCalc)){case"string":this.calculations[e.bottomCalc]?o.botCalc=this.calculations[e.bottomCalc]:console.warn("Column Calc Error - No such calculation found, ignoring: ",e.bottomCalc);break;case"function":o.botCalc=e.bottomCalc}o.botCalc&&(t.extensions.columnCalcs=o,this.botCalcs.push(t),"group"!=this.table.options.columnCalcs&&this.initializeBottomRow())}},b.prototype.removeCalcs=function(){var t=!1;this.topInitialized&&(this.topInitialized=!1,this.topElement.remove(),t=!0),this.botInitialized&&(this.botInitialized=!1,this.table.footerManager.remove(this.botElement),t=!0),t&&this.table.rowManager.adjustTableSize()},b.prototype.initializeTopRow=function(){this.topInitialized||(this.table.columnManager.headersElement.after(this.topElement),this.topInitialized=!0)},b.prototype.initializeBottomRow=function(){
this.botInitialized||(this.table.footerManager.prepend(this.botElement),this.botInitialized=!0)},b.prototype.scrollHorizontal=function(t){this.table.columnManager.element[0].scrollWidth,this.table.element.innerWidth();this.botInitialized&&this.botRow.getElement().css("margin-left",-t)},b.prototype.recalc=function(t){var e;(this.topInitialized||this.botInitialized)&&(this.rowsToData(t),this.topInitialized&&(e=this.generateRow("top",this.rowsToData(t)),this.topRow=e,this.topElement.empty(),this.topElement.append(e.getElement()),e.initialize(!0)),this.botInitialized&&(e=this.generateRow("bottom",this.rowsToData(t)),this.botRow=e,this.botElement.empty(),this.botElement.append(e.getElement()),e.initialize(!0)),this.table.rowManager.adjustTableSize(),this.table.extExists("frozenColumns")&&this.table.extensions.frozenColumns.layout())},b.prototype.recalcRowGroup=function(t){this.recalcGroup(this.table.extensions.groupRows.getRowGroup(t))},b.prototype.recalcGroup=function(t){var e,o;t&&t.calcs&&(t.calcs.bottom&&(e=this.rowsToData(t.rows),o=this.generateRowData("bottom",e),t.calcs.bottom.updateData(o),t.calcs.bottom.reinitialize()),t.calcs.top&&(e=this.rowsToData(t.rows),o=this.generateRowData("top",e),t.calcs.top.updateData(o),t.calcs.top.reinitialize()))},b.prototype.generateTopRow=function(t){return this.generateRow("top",this.rowsToData(t))},b.prototype.generateBottomRow=function(t){return this.generateRow("bottom",this.rowsToData(t))},b.prototype.rowsToData=function(t){var e=[];return t.forEach(function(t){e.push(t.getData())}),e},b.prototype.generateRow=function(t,e){var o=this,i=this.generateRowData(t,e),n=new l(i,this);return n.getElement().addClass("tabulator-calcs").addClass("tabulator-calcs-"+t),n.type="calc",n.generateCells=function(){var e=[];o.table.columnManager.columnsByIndex.forEach(function(i){if(i.visible){o.genColumn.setField(i.getField()),o.genColumn.hozAlign=i.hozAlign,i.definition[t+"CalcFormatter"]&&o.table.extExists("format")?o.genColumn.extensions.format={formatter:o.table.extensions.format.getFormatter(i.definition[t+"CalcFormatter"]),params:i.definition[t+"CalcFormatterParams"]}:o.genColumn.extensions.format={formatter:o.table.extensions.format.getFormatter("plaintext"),params:{}};var s=new u(o.genColumn,n);s.column=i,s.setWidth(i.getWidth()),i.cells.push(s),e.push(s)}}),this.cells=e},n},b.prototype.generateRowData=function(t,e){var o={},i="top"==t?this.topCalcs:this.botCalcs,n="top"==t?"topCalc":"botCalc";return i.forEach(function(t){var i=[];t.extensions.columnCalcs&&t.extensions.columnCalcs[n]&&(e.forEach(function(e){i.push(t.getFieldValue(e))}),t.setFieldValue(o,t.extensions.columnCalcs[n](i,e,t.extensions.columnCalcs[n+"Params"])))}),o},b.prototype.hasTopCalcs=function(){return!!this.topCalcs.length},b.prototype.hasBottomCalcs=function(){return!!this.botCalcs.length},b.prototype.redraw=function(){this.topRow&&this.topRow.normalizeHeight(!0),this.botRow&&this.botRow.normalizeHeight(!0)},b.prototype.getResults=function(){var t,e=this,o={};return this.table.options.groupBy&&this.table.extExists("groupRows")?(t=this.table.extensions.groupRows.getGroups(),t.forEach(function(t){o[t.getKey()]=e.getGroupResults(t)})):o={top:this.topRow?this.topRow.getData():{},bottom:this.botRow?this.botRow.getData():{}},o},b.prototype.getGroupResults=function(t){var e=this,o=t._getSelf(),i=t.getSubGroups(),n={};return i.forEach(function(t){n[t.getKey()]=e.getGroupResults(t)}),{top:o.calcs.top?o.calcs.top.getData():{},bottom:o.calcs.bottom?o.calcs.bottom.getData():{},groups:n}},b.prototype.calculations={avg:function(t,e,o){var i=0,n=void 0!==o.precision?o.precision:2;return t.length&&(i=t.reduce(function(t,e){return e=Number(e),t+e}),i/=t.length,i=!1!==n?i.toFixed(n):i),parseFloat(i).toString()},max:function(t,e,o){var i=null,n=void 0!==o.precision&&o.precision;return t.forEach(function(t){((t=Number(t))>i||null===i)&&(i=t)}),null!==i?!1!==n?i.toFixed(n):i:""},min:function(t,e,o){var i=null,n=void 0!==o.precision&&o.precision;return t.forEach(function(t){((t=Number(t))<i||null===i)&&(i=t)}),null!==i?!1!==n?i.toFixed(n):i:""},sum:function(t,e,o){var i=0,n=void 0!==o.precision&&o.precision;return t.length&&t.forEach(function(t){t=Number(t),i+=isNaN(t)?0:Number(t)}),!1!==n?i.toFixed(n):i},concat:function(t,e,o){var i=0;return t.length&&(i=t.reduce(function(t,e){return String(t)+String(e)})),i},count:function(t,e,o){var i=0;return t.length&&t.forEach(function(t){t&&i++}),i}},Tabulator.registerExtension("columnCalcs",b);var v=function(t){this.table=t,this.mode=!0,this.copySelector=!1,this.copySelectorParams={},this.copyFormatter=!1,this.copyFormatterParams={},this.pasteParser=function(){},this.pasteAction=function(){},this.blocked=!0};v.prototype.initialize=function(){var t=this;this.mode=this.table.options.clipboard,!0!==this.mode&&"copy"!==this.mode||this.table.element.on("copy",function(e){var o;t.blocked||(e.preventDefault(),o=t.generateContent(),e.originalEvent.clipboardData.setData("text/plain",o),t.table.options.clipboardCopied(o),t.reset())}),!0!==this.mode&&"paste"!==this.mode||this.table.element.on("paste",function(e){t.paste(e)}),this.setPasteParser(this.table.options.clipboardPasteParser),this.setPasteAction(this.table.options.clipboardPasteAction)},v.prototype.reset=function(){this.blocked=!1,this.originalSelectionText=""},v.prototype.setPasteAction=function(t){switch(void 0===t?"undefined":_typeof(t)){case"string":this.pasteAction=this.pasteActions[t],this.pasteAction||console.warn("Clipboard Error - No such paste action found:",t);break;case"function":this.pasteAction=t}},v.prototype.setPasteParser=function(t){switch(void 0===t?"undefined":_typeof(t)){case"string":this.pasteParser=this.pasteParsers[t],this.pasteParser||console.warn("Clipboard Error - No such paste parser found:",t);break;case"function":this.pasteParser=t}},v.prototype.paste=function(t){var e,o,i;this.checkPaseOrigin(t)&&(e=this.getPasteData(t),o=this.pasteParser.call(this,e),o?(t.preventDefault(),this.table.extExists("mutator")&&(o=this.mutateData(o)),i=this.pasteAction.call(this,o),this.table.options.clipboardPasted(e,o,i)):this.table.options.clipboardPasteError(e))},v.prototype.mutateData=function(t){var e=this,o=[];return Array.isArray(t)?t.forEach(function(t){o.push(e.table.extensions.mutator.transformRow(t,"clipboard"))}):o=t,o},v.prototype.checkPaseOrigin=function(t){var e=!0;return("DIV"!=t.target.tagName||this.table.extensions.edit.currentCell)&&(e=!1),e},v.prototype.getPasteData=function(t){var e=o;return window.clipboardData&&window.clipboardData.getData?e=window.clipboardData.getData("Text"):t.clipboardData&&t.clipboardData.getData?e=t.clipboardData.getData("text/plain"):t.originalEvent&&t.originalEvent.clipboardData.getData&&(e=t.originalEvent.clipboardData.getData("text/plain")),e},v.prototype.copy=function(t,e,o,i,n){var s,a;this.blocked=!1,!0!==this.mode&&"copy"!==this.mode||(void 0!==window.getSelection&&void 0!==document.createRange?(s=document.createRange(),s.selectNodeContents(this.table.element[0]),a=window.getSelection(),a.toString()&&n&&(t="userSelection",o="raw",this.copySelectorParams=a.toString()),a.removeAllRanges(),a.addRange(s)):void 0!==document.selection&&void 0!==document.body.createTextRange&&(textRange=document.body.createTextRange(),textRange.moveToElementText(this.table.element[0]),textRange.select()),this.setSelector(t),this.copySelectorParams=void 0!==e&&null!=e?e:this.table.options.clipboardCopyHeader,this.setFormatter(o),this.copyFormatterParams=void 0!==i&&null!=i?i:{},document.execCommand("copy"),a&&a.removeAllRanges())},v.prototype.setSelector=function(t){switch(t=t||this.table.options.clipboardCopySelector,void 0===t?"undefined":_typeof(t)){case"string":this.copySelectors[t]?this.copySelector=this.copySelectors[t]:console.warn("Clipboard Error - No such selector found:",t);break;case"function":this.copySelector=t}},v.prototype.setFormatter=function(t){switch(t=t||this.table.options.clipboardCopyFormatter,void 0===t?"undefined":_typeof(t)){case"string":this.copyFormatters[t]?this.copyFormatter=this.copyFormatters[t]:console.warn("Clipboard Error - No such formatter found:",t);break;case"function":this.copyFormatter=t}},v.prototype.generateContent=function(){var t=this.copySelector.call(this,this.copySelectorParams);return this.copyFormatter.call(this,t,this.copyFormatterParams)},v.prototype.rowsToData=function(t,e){var o=this.table.columnManager.columnsByIndex,i=[],n=[];return e&&(o.forEach(function(t){i.push(t.definition.title)}),n.push(i)),t.forEach(function(t){var e=[],i=t.getData("clipboard");o.forEach(function(t){var o=t.getFieldValue(i);e.push(o)}),n.push(e)}),n},v.prototype.copySelectors={userSelection:function(t){return t},selected:function(t){var e=[];return this.table.extExists("selectRow",!0)&&(e=this.table.extensions.selectRow.getSelectedRows()),this.rowsToData(e,t)},table:function(t){return this.rowsToData(this.table.rowManager.getComponents(),t)},active:function(t){return this.rowsToData(this.table.rowManager.getComponents(!0),t)}},v.prototype.copyFormatters={raw:function(t,e){return t},table:function(t,e){var o=[];return t.forEach(function(t){t.forEach(function(t){void 0===t&&(t=""),t=void 0===t?"":t.toString(),t.match(/\r|\n/)&&(t=t.split('"').join('""'),t='"'+t+'"')}),o.push(t.join("\t"))}),o.join("\n")}},v.prototype.pasteParsers={table:function(t){var e=[],o=!0,i=this.table.columnManager.columns,n=[],s=[];return t=t.split("\n"),t.forEach(function(t){e.push(t.split("\t"))}),!(!e.length||1===e.length&&e[0].length<2)&&(!0,e[0].forEach(function(t){var e=i.find(function(e){return t.trim()&&e.definition.title.trim()===t.trim()});e?n.push(e):o=!1}),o||(o=!0,n=[],e[0].forEach(function(t){var e=i.find(function(e){return t.trim()&&e.field.trim()===t.trim()});e?n.push(e):o=!1}),o||(n=this.table.columnManager.columnsByIndex)),o&&e.shift(),e.forEach(function(t){var e={};t.forEach(function(t,o){n[o]&&(e[n[o].field]=t)}),s.push(e)}),s)}},v.prototype.pasteActions={replace:function(t){return this.table.setData(t)},update:function(t){return this.table.updateOrAddData(t)},insert:function(t){return this.table.addData(t)}},Tabulator.registerExtension("clipboard",v);var w=function(t){this.table=t,this.fields={},this.columnsByIndex=[],this.columnsByField={}};w.prototype.download=function(t,e,o,i){function n(o,n){i?i(o):s.triggerDownload(o,n,t,e)}var s=this,a=!1;"function"==typeof t?a=t:s.downloaders[t]?a=s.downloaders[t]:console.warn("Download Error - No such download type found: ",t),this.processColumns(),a&&a.call(this,s.processDefinitions(),s.processData(),o||{},n)},w.prototype.processColumns=function(){var t=this;t.columnsByIndex=[],t.columnsByField={},t.table.columnManager.columnsByIndex.forEach(function(e){e.field&&e.visible&&!1!==e.definition.download&&(t.columnsByIndex.push(e),t.columnsByField[e.field]=e)})},w.prototype.processDefinitions=function(){var t=this,e=[];return t.columnsByIndex.forEach(function(t){var o=t.definition;if(!1!==t.download){var i={};for(var n in o)i[n]=o[n];void 0!==o.downloadTitle&&(i.title=o.downloadTitle),e.push(i)}}),e},w.prototype.processData=function(){var t=this,e=t.table.rowManager.getData(!0,"download");return"function"==typeof t.table.options.downloadDataFormatter&&(e=t.table.options.downloadDataFormatter(e)),e},w.prototype.triggerDownload=function(t,e,o,i){var n=document.createElement("a"),s=new Blob([t],{type:e}),i=i||"Tabulator."+("function"==typeof o?"txt":o);(s=this.table.options.downloadReady(t,s))&&(navigator.msSaveOrOpenBlob?navigator.msSaveOrOpenBlob(s,i):(n.setAttribute("href",window.URL.createObjectURL(s)),n.setAttribute("download",i),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)),this.table.options.downloadComplete&&this.table.options.downloadComplete())},w.prototype.getFieldValue=function(t,e){var o=this.columnsByField[t];return!!o&&o.getFieldValue(e)},w.prototype.commsReceived=function(t,e,o){switch(e){case"intercept":this.download(o.type,"",o.options,o.intercept)}},w.prototype.downloaders={csv:function(t,e,o,i){var n,s=this,a=[],r=[],l=o&&o.delimiter?o.delimiter:",";t.forEach(function(t){t.field&&(a.push('"'+String(t.title).split('"').join('""')+'"'),r.push(t.field))}),n=[a.join(l)],e.forEach(function(t){var e=[];r.forEach(function(o){var i=s.getFieldValue(o,t);switch(void 0===i?"undefined":_typeof(i)){case"object":i=JSON.stringify(i);break;case"undefined":case"null":i="";break;default:i=i}e.push('"'+String(i).split('"').join('""')+'"')}),n.push(e.join(l))}),i(n.join("\n"),"text/csv")},json:function(t,e,o,i){i(JSON.stringify(e,null,"\t"),"application/json")},pdf:function(t,e,o,i){var n=this,s=[],a=[],r=[],l=o&&o.autoTable?o.autoTable:{},c=o&&o.title?o.title:"",u=o&&"portrait"==o.orientation?"p":"l";t.forEach(function(t){t.field&&(a.push(t.title||""),s.push(t.field))}),e.forEach(function(t){var e=[];s.forEach(function(o){var i=n.getFieldValue(o,t);switch(void 0===i?"undefined":_typeof(i)){case"object":i=JSON.stringify(i);break;case"undefined":case"null":i="";break;default:i=i}e.push(i)}),r.push(e)});var h=new jsPDF(u,"pt");c&&(l.addPageContent=function(t){h.text(c,40,30)}),h.autoTable(a,r,l),i(h.output("arraybuffer"),"application/pdf")},xlsx:function(t,e,o,i){function n(){var o=[],i=[],n=[];return t.forEach(function(t){t.field&&(o.push(t.title),i.push(t.field))}),n.push(o),e.forEach(function(t){var e=[];i.forEach(function(o){e.push(a.getFieldValue(o,t))}),n.push(e)}),function(){var t={},e={s:{c:0,r:0},e:{c:i.length,r:n.length}};return n.forEach(function(e,o){e.forEach(function(e,i){var n={v:void 0===e||null===e?"":e};if(null!=n){switch(_typeof(n.v)){case"number":n.t="n";break;case"boolean":n.t="b";break;default:n.t="s"}t[XLSX.utils.encode_cell({c:i,r:o})]=n}})}),t["!ref"]=XLSX.utils.encode_range(e),t}()}var s,a=this,r=o.sheetName||"Sheet1",l={SheetNames:[],Sheets:{}};if(o.sheetOnly)return void i(n());if(o.sheets)for(var c in o.sheets)!0===o.sheets[c]?(l.SheetNames.push(c),l.Sheets[c]=n()):(l.SheetNames.push(c),this.table.extensions.comms.send(o.sheets[c],"download","intercept",{type:"xlsx",options:{sheetOnly:!0},intercept:function(t){l.Sheets[c]=t}}));else l.SheetNames.push(r),l.Sheets[r]=n();s=XLSX.write(l,{bookType:"xlsx",bookSST:!0,type:"binary"}),i(function(t){for(var e=new ArrayBuffer(t.length),o=new Uint8Array(e),i=0;i!=t.length;++i)o[i]=255&t.charCodeAt(i);return e}(s),"application/octet-stream")}},Tabulator.registerExtension("download",w);var y=function(t){this.table=t,this.currentCell=!1,this.mouseClick=!1,this.recursionBlock=!1,this.invalidEdit=!1};y.prototype.initializeColumn=function(t){var e=this,o={editor:!1,blocked:!1,check:t.definition.editable,params:t.definition.editorParams||{}};switch(_typeof(t.definition.editor)){case"string":e.editors[t.definition.editor]?o.editor=e.editors[t.definition.editor]:console.warn("Editor Error - No such editor found: ",t.definition.editor);break;case"function":o.editor=t.definition.editor;break;case"boolean":!0===t.definition.editor&&("function"!=typeof t.definition.formatter?e.editors[t.definition.formatter]?o.editor=e.editors[t.definition.formatter]:o.editor=e.editors.input:console.warn("Editor Error - Cannot auto lookup editor for a custom formatter: ",t.definition.formatter))}o.editor&&(t.extensions.edit=o)},y.prototype.getCurrentCell=function(){return!!this.currentCell&&this.currentCell.getComponent()},y.prototype.clearEditor=function(){var t=this.currentCell;this.invalidEdit=!1,t&&(this.currentCell=!1,t.getElement().removeClass("tabulator-validation-fail"),t.getElement().removeClass("tabulator-editing").empty(),t.row.getElement().removeClass("tabulator-row-editing"))},y.prototype.cancelEdit=function(){if(this.currentCell){var t=this.currentCell,e=this.currentCell.getComponent();this.clearEditor(),t.setValueActual(t.getValue()),t.column.cellEvents.cellEditCancelled&&t.column.cellEvents.cellEditCancelled(e),this.table.options.cellEditCancelled(e)}},y.prototype.bindEditor=function(e){var o=this,i=e.getElement();i.attr("tabindex",0),i.on("click",function(e){t(this).hasClass("tabulator-editing")||t(this).focus()}),i.on("mousedown",function(t){o.mouseClick=!0}),i.on("focus",function(t){o.recursionBlock||o.edit(e,t,!1)})},y.prototype.focusCellNoEvent=function(t){this.recursionBlock=!0,t.getElement().focus(),this.recursionBlock=!1},y.prototype.editCell=function(t,e){this.focusCellNoEvent(t),this.edit(t,!1,e)},y.prototype.edit=function(t,e,o){function i(e){if(l.currentCell===t){var o=!0;t.column.extensions.validate&&l.table.extExists("validate")&&(o=l.table.extensions.validate.validate(t.column.extensions.validate,t.getComponent(),e)),!0===o?(l.clearEditor(),t.setValue(e,!0)):(l.invalidEdit=!0,t.getElement().addClass("tabulator-validation-fail"),l.focusCellNoEvent(t),u(),l.table.options.validationFailed(t.getComponent(),e,o))}else console.warn("Edit Success Error - cannot call success on a cell that is no longer being edited")}function n(){l.currentCell===t?l.cancelEdit():console.warn("Edit Success Error - cannot call cancel on a cell that is no longer being edited")}function s(t){u=t}var a,r,l=this,c=!0,u=function(){},h=t.getElement();if(this.currentCell){if(this.invalidEdit)return;return void this.cancelEdit()}if(t.column.extensions.edit.blocked)return this.mouseClick=!1,h.blur(),!1;switch(e&&e.stopPropagation(),_typeof(t.column.extensions.edit.check)){case"function":c=t.column.extensions.edit.check(t.getComponent());break;case"boolean":c=t.column.extensions.edit.check}return c||o?(l.cancelEdit(),l.currentCell=t,r=t.getComponent(),this.mouseClick&&(this.mouseClick=!1,t.column.cellEvents.cellClick&&t.column.cellEvents.cellClick(r)),t.column.cellEvents.cellEditing&&t.column.cellEvents.cellEditing(r),l.table.options.cellEditing(r),!1===(a=t.column.extensions.edit.editor.call(l,r,s,i,n,t.column.extensions.edit.params))?(h.blur(),!1):(h.addClass("tabulator-editing"),t.row.getElement().addClass("tabulator-row-editing"),h.empty(),h.append(a),u(),h.children().click(function(t){t.stopPropagation()}),!0)):(this.mouseClick=!1,h.blur(),!1)},y.prototype.editors={input:function(e,o,i,n,s){var a=t("<input type='text'/>");return a.css({padding:"4px",width:"100%","box-sizing":"border-box"}).val(e.getValue()),o(function(){a.focus(),a.css("height","100%")}),a.on("change blur",function(t){a.val()!=e.getValue()?i(a.val()):n()}),a.on("keydown",function(t){13==t.keyCode&&i(a.val()),27==t.keyCode&&n()}),a},textarea:function(e,o,i,n,s){var a=e.getValue(),r=String("null"==typeof a||void 0===a?"":a),l=(r.match(/(?:\r\n|\r|\n)/g),t("<textarea></textarea>")),c=0;return l.css({display:"block",height:"100%",width:"100%",padding:"2px","box-sizing":"border-box","white-space":"pre-wrap",resize:"none"}).val(r),o(function(){l.focus(),l.css("height","100%")}),l.on("change blur",function(t){l.val()!=e.getValue()?(i(l.val()),setTimeout(function(){e.getRow().normalizeHeight()},300)):n()}),l.on("keyup",function(){l.css({height:""});var t=l[0].scrollHeight;l.css({height:t}),t!=c&&(c=t,e.getRow().normalizeHeight())}),l.on("keydown",function(t){27==t.keyCode&&n()}),l},number:function(e,o,i,n,s){var a=void 0!==s.max?"max='"+s.max+"'":"",r=void 0!==s.min?"min='"+s.min+"'":"",l="step='"+(void 0!==s.step?s.step:1)+"'",c=t("<input type='number' "+a+" "+r+" "+l+"/>");return c.css({padding:"4px",width:"100%","box-sizing":"border-box"}).val(e.getValue()),o(function(){c.css("height","100%"),setTimeout(function(){c.focus()},10)}),c.on("blur",function(t){var o=c.val();isNaN(o)||(o=Number(o)),o!=e.getValue()?i(o):n()}),c.on("keydown",function(t){var e;13==t.keyCode&&(e=c.val(),isNaN(e)||(e=Number(e)),i(e)),27==t.keyCode&&n()}),c},range:function(e,o,i,n,s){var a="max='"+(void 0!==s.max?s.max:10)+"'",r="min='"+(void 0!==s.min?s.min:0)+"'",l="step='"+(void 0!==s.step?s.step:1)+"'",c=t("<input type='range' "+a+" "+r+" "+l+"/>");return c.css({padding:"4px",width:"100%","box-sizing":"border-box"}).val(e.getValue()),o(function(){c.css("height","100%"),setTimeout(function(){c.focus()},10)}),c.on("blur",function(t){var o=c.val();isNaN(o)||(o=Number(o)),o!=e.getValue()?i(o):n()}),c.on("keydown",function(t){var e;13==t.keyCode&&(e=c.val(),isNaN(e)||(e=Number(e)),i(e)),27==t.keyCode&&n()}),c},select:function(e,o,i,n,s){function a(e,o,i,n){var s=t("<option></option>").attr("value",i).text(o);n&&s.prop("disabled",!0),e.append(s)}function r(e,o){var i;o.options?(i=t("<optgroup></optgroup>").attr("label",o.label),o.options.forEach(function(t){r(i,t)}),e.append(i)):a(e,void 0===o.label?o.value:o.label,void 0===o.value?o.label:o.value,o.disabled)}var l=t("<select><select/>"),c=Array.isArray(s);if("function"==typeof s&&(s=s(e),c=Array.isArray(s)),c||"object"!==(void 0===s?"undefined":_typeof(s)))c&&s.forEach(function(t){r(l,t)});else for(var u in s)a(l,s[u],u);return l.css({padding:"4px",width:"100%","box-sizing":"border-box","font-family":""}).val(e.getValue()),o(function(){l.focus().click()}),l.on("change blur",function(t){i(l.val())}),l.on("keydown",function(t){13===t.keyCode&&i(l.val())}),l},star:function(e,o,i,n,s){var a=e.getElement(),r=e.getValue(),l=t("svg",a).length||5,c=t("svg:first",a).attr("width")||14,u=t("<div style='vertical-align:middle; padding:4px; display:inline-block; vertical-align:middle;'></div>"),h=t('<svg width="'+c+'" height="'+c+'" class="tabulator-star-active" viewBox="0 0 512 512" xml:space="preserve" style="padding:0 1px;"><polygon fill="#488CE9" stroke="#014AAE" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/></svg>'),p=t('<svg width="'+c+'" height="'+c+'" class="tabulator-star-inactive" viewBox="0 0 512 512" xml:space="preserve" style="padding:0 1px;"><polygon fill="#010155" stroke="#686868" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/></svg>'),d=function(e){t(".tabulator-star-active",e.closest("div")).length!=e.prevAll("svg").length+1&&(e.prevAll("svg").replaceWith(h.clone()),e.nextAll("svg").replaceWith(p.clone()),e.replaceWith(h.clone()))};r=parseInt(r)<l?parseInt(r):l;for(var f=1;f<=l;f++){var g=f<=r?h:p;u.append(g.clone())}return u.on("mouseover","svg",function(e){e.stopPropagation(),d(t(this))}),u.on("mouseover",function(e){t("svg",t(this)).replaceWith(p.clone())}),u.on("click",function(t){i(0)}),u.on("click","svg",function(e){e.stopPropagation(),i(t(this).prevAll("svg").length+1)}),a.css({"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}),a.on("blur",function(){n()}),a.on("keydown",function(e){switch(e.keyCode){case 39:d(t(".tabulator-star-inactive:first",u));break;case 37:var o=t(".tabulator-star-active:last",u).prev("svg");o.length?d(o):t("svg",u).replaceWith(p.clone());break;case 13:i(t(".tabulator-star-active",u).length);break;case 27:n()}}),u},progress:function(e,o,i,n,s){var a,r=e.getElement(),l=t("div",r).data("max"),c=t("div",r).data("min"),u=(l-c)/100,h=e.getValue()||0,p=t("<div class='tabulator-progress-handle' style='position:absolute; right:0; top:0; bottom:0; width:5px;'></div>"),d=function(){var t=u*Math.round(a.outerWidth()/(r.width()/100))+c;i(t),r.attr("aria-valuenow",t).attr("aria-label",h)};return h=parseFloat(h)<=l?parseFloat(h):l,h=parseFloat(h)>=c?parseFloat(h):c,h=100-Math.round((h-c)/u),a=t("<div style='position:absolute; top:8px; bottom:8px; left:4px; right:"+h+"%; margin-right:4px; background-color:#488CE9; display:inline-block; max-width:100%; min-width:0%;' data-max='"+l+"' data-min='"+c+"'></div>"),r.css({padding:"0 4px"}),r.attr("aria-valuemin",c).attr("aria-valuemax",l),a.append(p),p.on("mousedown",function(t){a.data("mouseDrag",t.screenX),a.data("mouseDragWidth",a.outerWidth())}),p.on("mouseover",function(){t(this).css({cursor:"ew-resize"})}),r.on("mousemove",function(t){a.data("mouseDrag")&&a.css({width:a.data("mouseDragWidth")+(t.screenX-a.data("mouseDrag"))})}),r.on("mouseup",function(t){a.data("mouseDrag")&&(t.stopPropagation(),t.stopImmediatePropagation(),a.data("mouseDragOut",!0),a.data("mouseDrag",!1),a.data("mouseDragWidth",!1),d())}),r.on("keydown",function(t){switch(t.keyCode){case 39:a.css({width:a.width()+r.width()/100});break;case 37:a.css({width:a.width()-r.width()/100});break;case 13:d();break;case 27:n()}}),r.on("blur",function(){n()}),a},tickCross:function(e,o,i,n,s){var a=e.getValue(),r=t("<input type='checkbox'/>");return r.css({"margin-top":"5px","box-sizing":"border-box"}).val(a),"firefox"!=this.table.browser&&o(function(){r.focus()}),!0===a||"true"===a||"True"===a||1===a?r.prop("checked",!0):r.prop("checked",!1),r.on("change blur",function(t){i(r.is(":checked"))}),r.on("keydown",function(t){13==t.keyCode&&i(r.is(":checked")),27==t.keyCode&&n()}),r},tick:function(e,o,i,n,s){var a=e.getValue(),r=t("<input type='checkbox'/>");return r.css({"margin-top":"5px","box-sizing":"border-box"}).val(a),"firefox"!=this.table.browser&&o(function(){r.focus()}),!0===a||"true"===a||"True"===a||1===a?r.prop("checked",!0):r.prop("checked",!1),r.on("change blur",function(t){i(r.is(":checked"))}),r.on("keydown",function(t){13==t.keyCode&&i(r.is(":checked")),27==t.keyCode&&n()}),r}},Tabulator.registerExtension("edit",y);var x=function(t){this.table=t,this.filterList=[],this.headerFilters={},this.headerFilterElements=[],this.changed=!1};x.prototype.initializeColumn=function(e){function o(t){var o,i="input"==c&&"text"==u||"textarea"==c?"partial":"match",n="";if(t){switch(_typeof(e.definition.headerFilterFunc)){case"string":h.filters[e.definition.headerFilterFunc]?(n=e.definition.headerFilterFunc,o=function(o){return h.filters[e.definition.headerFilterFunc](t,e.getFieldValue(o))}):console.warn("Header Filter Error - Matching filter function not found: ",e.definition.headerFilterFunc);break;case"function":o=function(o){return e.definition.headerFilterFunc(t,e.getFieldValue(o),o,e.definition.headerFilterFuncParams||{})},n=o}if(!o)switch(i){case"partial":o=function(o){return String(e.getFieldValue(o)).toLowerCase().indexOf(String(t).toLowerCase())>-1},n="like";break;default:o=function(o){return e.getFieldValue(o)==t},n="="}h.headerFilters[p]={value:t,func:o,type:n}}else delete h.headerFilters[p];h.changed=!0,h.table.rowManager.filterRefresh()}function i(){}var n,s,a,r,l,c,u,h=this,p=e.getField();if(e.extensions.filter={success:o},p){switch(n=t("<div class='tabulator-header-filter'></div>"),_typeof(e.definition.headerFilter)){case"string":h.table.extensions.edit.editors[e.definition.headerFilter]?s=h.table.extensions.edit.editors[e.definition.headerFilter]:console.warn("Filter Error - Cannot build header filter, No such editor found: ",e.definition.editor);break;case"function":s=e.definition.headerFilter;break;case"boolean":s=e.extensions.edit&&e.extensions.edit.editor?e.extensions.edit.editor:e.definition.formatter&&h.table.extensions.edit.editors[e.definition.formatter]?h.table.extensions.edit.editors[e.definition.formatter]:h.table.extensions.edit.editors.input}s&&(r={getValue:function(){return""},getField:function(){return e.definition.field},getElement:function(){return n},getRow:function(){return{normalizeHeight:function(){}}}},a=s.call(h,r,function(){},o,i,e.definition.headerFilterParams||{}),p?h.table.extensions.localize.bind("headerFilters|columns|"+e.definition.field,function(t){a.attr("placeholder",void 0!==t&&t?t:h.table.extensions.localize.getText("headerFilters|default"))}):h.table.extensions.localize.bind("headerFilters|default",function(t){a.attr("placeholdder",void 0!==h.column.definition.headerFilterPlaceholder&&h.column.definition.headerFilterPlaceholder?h.column.definition.headerFilterPlaceholder:t)}),a.on("click",function(e){e.stopPropagation(),t(this).focus()}),l=!1,a.on("keyup search",function(e){var i=t(this);l&&clearTimeout(l),l=setTimeout(function(){o(i.val())},300)}),e.extensions.filter.headerElement=a,u=a.attr("type")?a.attr("type").toLowerCase():"","number"==u&&a.on("change",function(e){o(t(this).val())}),"text"==u&&(a.attr("type","search"),a.off("change blur")),c=a.prop("tagName").toLowerCase(),"input"!=c&&"select"!=c&&"textarea"!=c||a.on("mousedown",function(t){t.stopPropagation()}),n.append(a),e.contentElement.append(n),h.headerFilterElements.push(a))}else console.warn("Filter Error - Cannot add header filter, column has no field set:",e.definition.title)},x.prototype.hideHeaderFilterElements=function(){this.headerFilterElements.forEach(function(t){t.hide()})},x.prototype.showHeaderFilterElements=function(){this.headerFilterElements.forEach(function(t){t.show()})},x.prototype.setHeaderFilterFocus=function(t){t.extensions.filter&&t.extensions.filter.headerElement?t.extensions.filter.headerElement.focus():console.warn("Column Filter Focus Error - No header filter set on column:",t.getField())},x.prototype.setHeaderFilterValue=function(t,e){t&&(t.extensions.filter&&t.extensions.filter.headerElement?(t.extensions.filter.headerElement.val(e),t.extensions.filter.success(e)):console.warn("Column Filter Error - No header filter set on column:",t.getField()))},x.prototype.hasChanged=function(){var t=this.changed;return this.changed=!1,t},x.prototype.setFilter=function(t,e,o){var i=this;i.filterList=[],Array.isArray(t)||(t=[{field:t,type:e,value:o}]),i.addFilter(t)},x.prototype.addFilter=function(t,e,o){var i=this;Array.isArray(t)||(t=[{field:t,type:e,value:o}]),t.forEach(function(t){(t=i.findFilter(t))&&(i.filterList.push(t),i.changed=!0)}),this.table.options.persistentFilter&&this.table.extExists("persistence",!0)&&this.table.extensions.persistence.save("filter")},x.prototype.findFilter=function(t){var e,o=this;if(Array.isArray(t))return this.findSubFilters(t);var i=!1;return"function"==typeof t.field?i=function(e){return t.field(e,t.type||{})}:o.filters[t.type]?(e=o.table.columnManager.getColumnByField(t.field),i=e?function(i){return o.filters[t.type](t.value,e.getFieldValue(i))}:function(e){return o.filters[t.type](t.value,e[t.field])}):console.warn("Filter Error - No such filter type found, ignoring: ",t.type),t.func=i,!!t.func&&t},x.prototype.findSubFilters=function(t){var e=this,o=[];return t.forEach(function(t){(t=e.findFilter(t))&&o.push(t)}),!!o.length&&o},x.prototype.getFilters=function(t,e){var o=this,i=[];return t&&(i=o.getHeaderFilters()),o.filterList.forEach(function(t){i.push({field:t.field,type:t.type,value:t.value})}),e&&i.forEach(function(t){"function"==typeof t.type&&(t.type="function")}),i},x.prototype.getHeaderFilters=function(){var t=[];for(var e in this.headerFilters)t.push({field:e,type:this.headerFilters[e].type,value:this.headerFilters[e].value});return t},x.prototype.removeFilter=function(t,e,o){var i=this;Array.isArray(t)||(t=[{field:t,type:e,value:o}]),t.forEach(function(t){var e=-1;e="object"==_typeof(t.field)?i.filterList.findIndex(function(e){return t===e}):i.filterList.findIndex(function(e){return t.field===e.field&&t.type===e.type&&t.value===e.value}),e>-1?(i.filterList.splice(e,1),i.changed=!0):console.warn("Filter Error - No matching filter type found, ignoring: ",t.type)}),this.table.options.persistentFilter&&this.table.extExists("persistence",!0)&&this.table.extensions.persistence.save("filter")},x.prototype.clearFilter=function(t){this.filterList=[],t&&this.clearHeaderFilter(),this.changed=!0,this.table.options.persistentFilter&&this.table.extExists("persistence",!0)&&this.table.extensions.persistence.save("filter")},x.prototype.clearHeaderFilter=function(){this.headerFilters={},this.headerFilterElements.forEach(function(t){t.val("")}),this.changed=!0},x.prototype.filter=function(t){var e=this,o=[],i=[];return e.table.options.dataFiltering&&e.table.options.dataFiltering(e.getFilters()),e.table.options.ajaxFiltering||!e.filterList.length&&!Object.keys(e.headerFilters).length?o=t.slice(0):t.forEach(function(t){e.filterRow(t)&&o.push(t)}),
e.table.options.dataFiltered&&(o.forEach(function(t){i.push(t.getComponent())}),e.table.options.dataFiltered(e.getFilters(),i)),o},x.prototype.filterRow=function(t){var e=this,o=!0,i=t.getData();e.filterList.forEach(function(t){e.filterRecurse(t,i)||(o=!1)});for(var n in e.headerFilters)e.headerFilters[n].func(i)||(o=!1);return o},x.prototype.filterRecurse=function(t,e){var o=this,i=!1;return Array.isArray(t)?t.forEach(function(t){o.filterRecurse(t,e)&&(i=!0)}):i=t.func(e),i},x.prototype.filters={"=":function(t,e){return e==t},"<":function(t,e){return e<t},"<=":function(t,e){return e<=t},">":function(t,e){return e>t},">=":function(t,e){return e>=t},"!=":function(t,e){return e!=t},like:function(t,e){return null===t||void 0===t?e===t:e.toLowerCase().indexOf(t.toLowerCase())>-1},in:function(t,e){return Array.isArray(t)?t.indexOf(e)>-1:(console.warn("Filter Error - filter value is not an array:",t),!1)}},Tabulator.registerExtension("filter",x);var C=function(t){this.table=t};C.prototype.initializeColumn=function(t){var e=this,o={params:t.definition.formatterParams||{}};switch(_typeof(t.definition.formatter)){case"string":e.formatters[t.definition.formatter]?(o.formatter=e.formatters[t.definition.formatter],"email"===t.definition.formatter&&console.warn("The%c email%c formatter has been depricated and will be removed in version 4.0, use the %clink %cformatter with %cformatterParams:{urlPrefix:'mailto:'} %cinstead.","font-weight:bold;","font-weight:regular;","font-weight:bold;","font-weight:regular;","font-weight:bold;","font-weight:regular;")):(console.warn("Formatter Error - No such formatter found: ",t.definition.formatter),o.formatter=e.formatters.plaintext);break;case"function":o.formatter=t.definition.formatter;break;default:o.formatter=e.formatters.plaintext}t.extensions.format=o},C.prototype.formatValue=function(t){return t.column.extensions.format.formatter.call(this,t.getComponent(),t.column.extensions.format.params)},C.prototype.sanitizeHTML=function(t){if(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}return t},C.prototype.emptyToSpace=function(t){return null===t?"&nbsp":t},C.prototype.getFormatter=function(t){var t;switch(void 0===t?"undefined":_typeof(t)){case"string":this.formatters[t]?t=this.formatters[t]:(console.warn("Formatter Error - No such formatter found: ",t),t=this.formatters.plaintext);break;case"function":t=t;break;default:t=this.formatters.plaintext}return t},C.prototype.formatters={plaintext:function(t,e){return this.emptyToSpace(this.sanitizeHTML(t.getValue()))},html:function(t,e){return t.getValue()},textarea:function(t,e){return t.getElement().css({"white-space":"pre-wrap"}),this.emptyToSpace(this.sanitizeHTML(t.getValue()))},money:function(t,e){var o,i,n,s,a=parseFloat(t.getValue()),r=e.decimal||".",l=e.thousand||",",c=e.symbol||"",u=!!e.symbolAfter,h=void 0!==e.precision?e.precision:2;if(isNaN(a))return this.emptyToSpace(this.sanitizeHTML(t.getValue()));for(o=!1!==h?a.toFixed(h):a,o=o.split("."),i=o[0],n=o.length>1?r+o[1]:"",s=/(\d+)(\d{3})/;s.test(i);)i=i.replace(s,"$1"+l+"$2");return u?i+n+c:c+i+n},email:function(t,e){var o=this.sanitizeHTML(t.getValue());return"<a href='mailto:"+o+"'>"+this.emptyToSpace(o)+"</a>"},link:function(t,e){var o,i=this.sanitizeHTML(t.getValue()),n=e.urlPrefix||"",s=this.emptyToSpace(i);if(e.labelField&&(o=t.getData(),s=o[e.labelField]),e.label)switch(_typeof(e.label)){case"string":s=e.label;break;case"function":s=e.label(t)}if(e.urlField&&(o=t.getData(),i=o[e.urlField]),e.url)switch(_typeof(e.url)){case"string":i=e.url;break;case"function":i=e.url(t)}return"<a href='"+n+i+"'>"+s+"</a>"},image:function(e,o){var i=this.sanitizeHTML(e.getValue()),n=t("<img src='"+i+"'/>");return n.on("load",function(){e.getRow().normalizeHeight()}),n},tick:function(t,e){var o=t.getValue(),i=t.getElement();return!0===o||"true"===o||"True"===o||1===o||"1"===o?(i.attr("aria-checked",!0),'<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>'):(i.attr("aria-checked",!1),"")},tickCross:function(t,e){var o=t.getValue(),i=t.getElement();return!0===o||"true"===o||"True"===o||1===o||"1"===o?(i.attr("aria-checked",!0),'<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>'):(i.attr("aria-checked",!1),'<svg enable-background="new 0 0 24 24" height="14" width="14"  viewBox="0 0 24 24" xml:space="preserve" ><path fill="#CE1515" d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>')},lookup:function(t,e){var o=t.getValue();return void 0===e[o]?(console.warn("Missing display value for "+o),o):e[o]},star:function(e,o){var i=e.getValue(),n=e.getElement(),s=o&&o.stars?o.stars:5,a=t("<span style='vertical-align:middle;'></span>"),r=t('<svg width="14" height="14" viewBox="0 0 512 512" xml:space="preserve" style="margin:0 1px;"><polygon fill="#FFEA00" stroke="#C1AB60" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/></svg>'),l=t('<svg width="14" height="14" viewBox="0 0 512 512" xml:space="preserve" style="margin:0 1px;"><polygon fill="#D2D2D2" stroke="#686868" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/></svg>');i=parseInt(i)<s?parseInt(i):s;for(var c=1;c<=s;c++){var u=c<=i?r:l;a.append(u.clone())}return n.css({"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}),n.attr("aria-label",i),a.html()},progress:function(t,e){var o,i,n,s,a,r=this.sanitizeHTML(t.getValue())||0,l=t.getElement(),c=e&&e.max?e.max:100,u=e&&e.min?e.min:0,h=e&&e.legendAlign?e.legendAlign:"center";switch(i=parseFloat(r)<=c?parseFloat(r):c,i=parseFloat(i)>=u?parseFloat(i):u,o=(c-u)/100,i=Math.round((i-u)/o),_typeof(e.color)){case"string":n=e.color;break;case"function":n=e.color(r);break;case"object":if(Array.isArray(e.color)){var p=100/e.color.length,d=Math.floor(i/p);d=Math.min(d,e.color.length-1),d=Math.max(d,0),n=e.color[d];break}default:n="#2DC214"}switch(_typeof(e.legend)){case"string":s=e.legend;break;case"function":s=e.legend(r);break;case"boolean":s=r;break;default:s=!1}switch(_typeof(e.legendColor)){case"string":a=e.legendColor;break;case"function":a=e.legendColor(r);break;case"object":if(Array.isArray(e.legendColor)){var p=100/e.legendColor.length,d=Math.floor(i/p);d=Math.min(d,e.legendColor.length-1),d=Math.max(d,0),a=e.legendColor[d];break}default:a="#000"}return l.css({"min-width":"30px",position:"relative"}),l.attr("aria-label",i),"<div style='position:absolute; top:8px; bottom:8px; left:4px; right:4px;'  data-max='"+c+"' data-min='"+u+"'><div style='position:relative; height:100%; width:calc("+i+"%); background-color:"+n+"; display:inline-block;'></div></div>"+(s?"<div style='position:absolute; top:4px; left:0; text-align:"+h+"; width:100%; color:"+a+";'>"+s+"</div>":"")},color:function(t,e){return t.getElement().css({"background-color":this.sanitizeHTML(t.getValue())}),""},buttonTick:function(t,e){return'<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>'},buttonCross:function(t,e){return'<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#CE1515" d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>'},rownum:function(t,e){return this.table.rowManager.activeRows.indexOf(t.getRow()._getSelf())+1},handle:function(t,e){return t.getElement().addClass("tabulator-row-handle"),"<div class='tabulator-row-handle-box'><div class='tabulator-row-handle-bar'></div><div class='tabulator-row-handle-bar'></div><div class='tabulator-row-handle-bar'></div></div>"},responsiveCollapse:function(e,o){var i=this,n=t("<div class='tabulator-responsive-collapse-toggle'><span class='tabulator-responsive-collapse-toggle-open'>+</span><span class='tabulator-responsive-collapse-toggle-close'>-</span></div>");return e.getElement().addClass("tabulator-row-handle"),i.table.options.responsiveLayoutCollapseStartOpen&&n.addClass("open"),n.click(function(){t(this).toggleClass("open"),t(this).closest(".tabulator-row").find(".tabulator-responsive-collapse").toggle()}),n}},Tabulator.registerExtension("format",C);var E=function(t){this.table=t,this.leftColumns=[],this.rightColumns=[],this.leftMargin=0,this.rightMargin=0,this.initializationMode="left",this.active=!1};E.prototype.reset=function(){this.initializationMode="left",this.leftColumns=[],this.rightColumns=[],this.active=!1},E.prototype.initializeColumn=function(t){var e={margin:0,edge:!1};t.definition.frozen?t.parent.isGroup?console.warn("Frozen Column Error - Grouped columns cannot be frozen"):t.isGroup?console.warn("Frozen Column Error - Column Groups cannot be frozen"):(e.position=this.initializationMode,"left"==this.initializationMode?this.leftColumns.push(t):this.rightColumns.unshift(t),this.active=!0,t.extensions.frozen=e):this.initializationMode="right"},E.prototype.layout=function(){var t=this,e=this.table.rowManager.element,o=0;t.active&&(t.leftMargin=t._calcSpace(t.leftColumns,t.leftColumns.length),t.table.columnManager.headersElement.css("margin-left",t.leftMargin),t.rightMargin=t._calcSpace(t.rightColumns,t.rightColumns.length),t.table.columnManager.element.css("padding-right",t.rightMargin),t.table.rowManager.activeRows.forEach(function(e){t.layoutRow(e)}),t.table.extExists("columnCalcs")&&(t.table.extensions.columnCalcs.topInitialized&&t.table.extensions.columnCalcs.topRow&&t.layoutRow(t.table.extensions.columnCalcs.topRow),t.table.extensions.columnCalcs.botInitialized&&t.table.extensions.columnCalcs.botRow&&t.layoutRow(t.table.extensions.columnCalcs.botRow)),t.leftColumns.forEach(function(e,o){e.extensions.frozen.margin=t._calcSpace(t.leftColumns,o)+t.table.columnManager.scrollLeft,o==t.leftColumns.length-1?e.extensions.frozen.edge=!0:e.extensions.frozen.edge=!1,t.layoutColumn(e)}),o=t.table.rowManager.element.innerWidth()+t.table.columnManager.scrollLeft,e[0].scrollHeight>e.innerHeight()&&(o-=e[0].offsetWidth-e[0].clientWidth),t.rightColumns.forEach(function(e,i){e.extensions.frozen.margin=o-t._calcSpace(t.rightColumns,i+1),i==t.rightColumns.length-1?e.extensions.frozen.edge=!0:e.extensions.frozen.edge=!1,t.layoutColumn(e)}))},E.prototype.layoutColumn=function(t){var e=this;e.layoutElement(t.element,t),t.cells.forEach(function(o){e.layoutElement(o.element,t)})},E.prototype.layoutRow=function(t){t.getElement().css({"padding-left":this.leftMargin,"padding-right":this.rightMargin})},E.prototype.layoutElement=function(t,e){if(e.extensions.frozen){var o={position:"absolute",left:e.extensions.frozen.margin};t.css(o),t.addClass("tabulator-frozen"),e.extensions.frozen.edge&&t.addClass("tabulator-frozen-"+e.extensions.frozen.position)}},E.prototype._calcSpace=function(t,e){for(var o=0,i=0;i<e;i++)t[i].visible&&(o+=t[i].getWidth());return o},Tabulator.registerExtension("frozenColumns",E);var R=function(e){this.table=e,this.topElement=t("<div class='tabulator-frozen-rows-holder'></div>"),this.rows=[],this.displayIndex=0};R.prototype.initialize=function(){this.rows=[],this.table.columnManager.element.append(this.topElement)},R.prototype.setDisplayIndex=function(t){this.displayIndex=t},R.prototype.getDisplayIndex=function(){return this.displayIndex},R.prototype.isFrozen=function(){return!!this.rows.length},R.prototype.getRows=function(t){var e=t.slice(0);return this.rows.forEach(function(t){var o=e.indexOf(t);o>-1&&e.splice(o,1)}),e},R.prototype.freezeRow=function(t){t.extensions.frozen?console.warn("Freeze Error - Row is already frozen"):(t.extensions.frozen=!0,this.topElement.append(t.getElement()),t.initialize(),t.normalizeHeight(),this.table.rowManager.adjustTableSize(),this.rows.push(t),this.table.rowManager.refreshActiveData("display"),this.styleRows())},R.prototype.unfreezeRow=function(t){var e=this.rows.indexOf(t);t.extensions.frozen?(t.extensions.frozen=!1,t.getElement().detach(),this.table.rowManager.adjustTableSize(),this.rows.splice(e,1),this.table.rowManager.refreshActiveData("display"),this.rows.length&&this.styleRows()):console.warn("Freeze Error - Row is already unfrozen")},R.prototype.styleRows=function(t){var e=this;this.rows.forEach(function(t,o){e.table.rowManager.styleRow(t,o)})},Tabulator.registerExtension("frozenRows",R);var D=function(t){this.group=t,this.type="GroupComponent"};D.prototype.getKey=function(){return this.group.key},D.prototype.getElement=function(){return this.group.element},D.prototype.getRows=function(){var t=[];return this.group.rows.forEach(function(e){t.push(e.getComponent())}),t},D.prototype.getSubGroups=function(){var t=[];return this.group.groupList.forEach(function(e){t.push(e.getComponent())}),t},D.prototype.getParentGroup=function(){return!!this.group.parent&&this.group.parent.getComponent()},D.prototype.getVisibility=function(){return this.group.visible},D.prototype.show=function(){this.group.show()},D.prototype.hide=function(){this.group.hide()},D.prototype.toggle=function(){this.group.toggleVisibility()},D.prototype._getSelf=function(){return this.group};var M=function(e,o,i,n,s,a,r){this.groupManager=e,this.parent=o,this.key=n,this.level=i,this.field=s,this.hasSubGroups=i<e.groupIDLookups.length-1,this.addRow=this.hasSubGroups?this._addRowToGroup:this._addRow,this.type="group",this.old=r,this.rows=[],this.groups=[],this.groupList=[],this.generator=a,this.element=t("<div class='tabulator-row tabulator-group tabulator-group-level-"+i+"' role='rowgroup'></div>"),this.elementContents=t(""),this.arrowElement=t("<div class='tabulator-arrow'></div>"),this.height=0,this.outerHeight=0,this.initialized=!1,this.calcs={},this.initialized=!1,this.extensions={},this.visible=r?r.visible:void 0!==e.startOpen[i]?e.startOpen[i]:e.startOpen[0],this.addBindings()};M.prototype.addBindings=function(){var t,e,o,i,n=this;n.groupManager.table.options.groupClick&&n.element.on("click",function(t){n.groupManager.table.options.groupClick(t,n.getComponent())}),n.groupManager.table.options.groupDblClick&&n.element.on("dblclick",function(t){n.groupManager.table.options.groupDblClick(t,n.getComponent())}),n.groupManager.table.options.groupContext&&n.element.on("contextmenu",function(t){n.groupManager.table.options.groupContext(t,n.getComponent())}),n.groupManager.table.options.groupTap&&(o=!1,n.element.on("touchstart",function(t){o=!0}),n.element.on("touchend",function(t){o&&n.groupManager.table.options.groupTap(t,n.getComponent()),o=!1})),n.groupManager.table.options.groupDblTap&&(t=null,n.element.on("touchend",function(e){t?(clearTimeout(t),t=null,n.groupManager.table.options.groupDblTap(e,n.getComponent())):t=setTimeout(function(){clearTimeout(t),t=null},300)})),n.groupManager.table.options.groupTapHold&&(e=null,n.element.on("touchstart",function(t){clearTimeout(e),e=setTimeout(function(){clearTimeout(e),e=null,o=!1,n.groupManager.table.options.groupTapHold(t,n.getComponent())},1e3)}),n.element.on("touchend",function(t){clearTimeout(e),e=null})),n.groupManager.table.options.groupToggleElement&&(i="arrow"==n.groupManager.table.options.groupToggleElement?n.arrowElement:n.element,i.on("click",function(t){t.stopPropagation(),t.stopImmediatePropagation(),n.toggleVisibility()}))},M.prototype._addRowToGroup=function(t){var e=this.level+1;if(this.hasSubGroups){var o=this.groupManager.groupIDLookups[e].func(t.getData());if(!this.groups[o]){var i=new M(this.groupManager,this,e,o,this.groupManager.groupIDLookups[e].field,this.groupManager.headerGenerator[e]||this.groupManager.headerGenerator[0],!!this.old&&this.old.groups[o]);this.groups[o]=i,this.groupList.push(i)}this.groups[o].addRow(t)}},M.prototype._addRow=function(t){this.rows.push(t),t.extensions.group=this},M.prototype.insertRow=function(t,e,o){var i=this.conformRowData({});t.updateData(i);var n=this.rows.indexOf(e);n>-1?o?this.rows.splice(n+1,0,t):this.rows.splice(n,0,t):o?this.rows.push(t):this.rows.unshift(t),t.extensions.group=this,this.generateGroupHeaderContents(),this.groupManager.table.extExists("columnCalcs")&&"table"!=this.groupManager.table.options.columnCalcs&&this.groupManager.table.extensions.columnCalcs.recalcGroup(this)},M.prototype.getRowIndex=function(t){},M.prototype.conformRowData=function(t){return this.field?t[this.field]=this.key:console.warn("Data Conforming Error - Cannot conform row data to match new group as groupBy is a function"),this.parent&&(t=this.parent.conformRowData(t)),t},M.prototype.removeRow=function(t){var e=this.rows.indexOf(t);e>-1&&this.rows.splice(e,1),this.rows.length?(this.generateGroupHeaderContents(),this.groupManager.table.extExists("columnCalcs")&&"table"!=this.groupManager.table.options.columnCalcs&&this.groupManager.table.extensions.columnCalcs.recalcGroup(this)):(this.parent?this.parent.removeGroup(this):this.groupManager.removeGroup(this),this.groupManager.updateGroupRows(!0))},M.prototype.removeGroup=function(t){var e;this.groups[t.key]&&(delete this.groups[t.key],e=this.groupList.indexOf(t),e>-1&&this.groupList.splice(e,1),this.groupList.length||this.parent.removeGroup())},M.prototype.getHeadersAndRows=function(){var t=[];return t.push(this),this._visSet(),this.visible?this.groupList.length?this.groupList.forEach(function(e){t=t.concat(e.getHeadersAndRows())}):("table"!=this.groupManager.table.options.columnCalcs&&this.groupManager.table.extExists("columnCalcs")&&this.groupManager.table.extensions.columnCalcs.hasTopCalcs()&&(this.calcs.top=this.groupManager.table.extensions.columnCalcs.generateTopRow(this.rows),t.push(this.calcs.top)),t=t.concat(this.rows),"table"!=this.groupManager.table.options.columnCalcs&&this.groupManager.table.extExists("columnCalcs")&&this.groupManager.table.extensions.columnCalcs.hasBottomCalcs()&&(this.calcs.bottom=this.groupManager.table.extensions.columnCalcs.generateBottomRow(this.rows),t.push(this.calcs.bottom))):!this.groupList.length&&"table"!=this.groupManager.table.options.columnCalcs&&this.groupManager.table.options.groupClosedShowCalcs&&this.groupManager.table.extExists("columnCalcs")&&(this.groupManager.table.extensions.columnCalcs.hasTopCalcs()&&(this.calcs.top=this.groupManager.table.extensions.columnCalcs.generateTopRow(this.rows),t.push(this.calcs.top)),this.groupManager.table.extensions.columnCalcs.hasBottomCalcs()&&(this.calcs.bottom=this.groupManager.table.extensions.columnCalcs.generateBottomRow(this.rows),t.push(this.calcs.bottom))),t},M.prototype.getRows=function(){return this._visSet(),this.visible?this.rows:[]},M.prototype.getRowCount=function(){var t=0;return this.groupList.length?this.groupList.forEach(function(e){t+=e.getRowCount()}):t=this.rows.length,t},M.prototype.toggleVisibility=function(){this.visible?this.hide():this.show()},M.prototype.hide=function(){this.visible=!1,"classic"!=this.groupManager.table.rowManager.getRenderMode()||this.groupManager.table.options.pagination?this.groupManager.updateGroupRows(!0):(this.element.removeClass("tabulator-group-visible"),this.rows.forEach(function(t){t.getElement().detach()})),this.groupManager.table.options.groupVisibilityChanged(this.getComponent(),!1)},M.prototype.show=function(){var t=this;t.visible=!0,"classic"!=this.groupManager.table.rowManager.getRenderMode()||this.groupManager.table.options.pagination?this.groupManager.updateGroupRows(!0):(this.element.addClass("tabulator-group-visible"),t.rows.forEach(function(e){t.getElement().after(e.getElement()),e.initialize()})),this.groupManager.table.options.groupVisibilityChanged(this.getComponent(),!0)},M.prototype._visSet=function(){var t=[];"function"==typeof this.visible&&(this.rows.forEach(function(e){t.push(e.getData())}),this.visible=this.visible(this.key,this.getRowCount(),t,this.getRowCount()))},M.prototype.getRowGroup=function(t){var e=!1;return this.groupList.length?this.groupList.forEach(function(o){var i=o.getRowGroup(t);i&&(e=i)}):this.rows.find(function(e){return e===t})&&(e=this),e},M.prototype.generateGroupHeaderContents=function(){var t=[];this.rows.forEach(function(e){t.push(e.getData())}),this.elementContents=this.generator(this.key,this.getRowCount(),t,this.getComponent()),this.element.empty().append(this.elementContents).prepend(this.arrowElement)},M.prototype.getElement=function(){return this.addBindingsd=!1,this._visSet(),this.visible?this.element.addClass("tabulator-group-visible"):this.element.removeClass("tabulator-group-visible"),this.element.children().detach(),this.generateGroupHeaderContents(),this.element},M.prototype.normalizeHeight=function(){this.setHeight(this.element.innerHeight())},M.prototype.initialize=function(t){this.initialized&&!t||(this.normalizeHeight(),this.initialized=!0)},M.prototype.reinitialize=function(){this.initialized=!1,this.height=0,this.element.is(":visible")&&this.initialize(!0)},M.prototype.setHeight=function(t){this.height!=t&&(this.height=t,this.outerHeight=this.element.outerHeight())},M.prototype.getHeight=function(){return this.outerHeight},M.prototype.getGroup=function(){return this},M.prototype.reinitializeHeight=function(){},M.prototype.calcHeight=function(){},M.prototype.setCellHeight=function(){},M.prototype.clearCellHeight=function(){},M.prototype.getComponent=function(){return new D(this)};var T=function(t){this.table=t,this.groupIDLookups=!1,this.startOpen=[function(){return!1}],this.headerGenerator=[function(){return""}],this.groupList=[],this.groups={},this.displayIndex=0};T.prototype.initialize=function(){var t=this,e=t.table.options.groupBy,o=t.table.options.groupStartOpen,i=t.table.options.groupHeader;if(t.headerGenerator=[function(){return""}],this.startOpen=[function(){return!1}],t.table.extensions.localize.bind("groups|item",function(e,o){t.headerGenerator[0]=function(t,i,n){return(void 0===t?"":t)+"<span>("+i+" "+(1===i?e:o.groups.items)+")</span>"}}),this.groupIDLookups=[],Array.isArray(e)||e)this.table.extExists("columnCalcs")&&"table"!=this.table.options.columnCalcs&&"both"!=this.table.options.columnCalcs&&this.table.extensions.columnCalcs.removeCalcs();else if(this.table.extExists("columnCalcs")&&"group"!=this.table.options.columnCalcs){var n=this.table.columnManager.getRealColumns();n.forEach(function(e){e.definition.topCalc&&t.table.extensions.columnCalcs.initializeTopRow(),e.definition.bottomCalc&&t.table.extensions.columnCalcs.initializeBottomRow()})}Array.isArray(e)||(e=[e]),e.forEach(function(e){var o,i;"function"==typeof e?o=e:(i=t.table.columnManager.getColumnByField(e),o=i?function(t){return i.getFieldValue(t)}:function(t){return t[e]}),t.groupIDLookups.push({field:"function"!=typeof e&&e,func:o})}),o&&(Array.isArray(o)||(o=[o]),o.forEach(function(t){t="function"==typeof t?t:function(){return!0}}),t.startOpen=o),i&&(t.headerGenerator=Array.isArray(i)?i:[i]),this.initialized=!0},T.prototype.setDisplayIndex=function(t){this.displayIndex=t},T.prototype.getDisplayIndex=function(){return this.displayIndex},T.prototype.getRows=function(t){return this.groupIDLookups.length?(this.table.options.dataGrouping(),this.generateGroups(t),this.table.options.dataGrouped&&this.table.options.dataGrouped(this.getGroups()),this.updateGroupRows()):t.slice(0)},T.prototype.getGroups=function(){var t=[];return this.groupList.forEach(function(e){t.push(e.getComponent())}),t},T.prototype.getRowGroup=function(t){var e=!1;return this.groupList.forEach(function(o){var i=o.getRowGroup(t);i&&(e=i)}),e},T.prototype.countGroups=function(){return this.groupList.length},T.prototype.generateGroups=function(t){var e=this,o=e.groups;e.groups={},e.groupList=[],t.forEach(function(t){e.assignRowToGroup(t,o)})},T.prototype.assignRowToGroup=function(t,e){var o=this.groupIDLookups[0].func(t.getData()),e=e||[],i=!this.groups[o];if(i){var n=new M(this,!1,0,o,this.groupIDLookups[0].field,this.headerGenerator[0],e[o]);this.groups[o]=n,this.groupList.push(n)}return this.groups[o].addRow(t),!i},T.prototype.updateGroupRows=function(t){var e=this,o=[];if(e.groupList.forEach(function(t){o=o.concat(t.getHeadersAndRows())}),t){var i=e.table.rowManager.setDisplayRows(o,this.getDisplayIndex());!0!==i&&this.setDisplayIndex(i),e.table.rowManager.refreshActiveData("group",!0,!0)}return o},T.prototype.scrollHeaders=function(t){this.groupList.forEach(function(e){e.arrowElement.css("margin-left",t)})},T.prototype.removeGroup=function(t){var e;this.groups[t.key]&&(delete this.groups[t.key],(e=this.groupList.indexOf(t))>-1&&this.groupList.splice(e,1))},Tabulator.registerExtension("groupRows",T);var z=function(t){this.table=t,this.history=[],this.index=-1};z.prototype.clear=function(){this.history=[],this.index=-1},z.prototype.action=function(t,e,o){this.history=this.history.slice(0,this.index+1),this.history.push({type:t,component:e,data:o}),this.index++},z.prototype.undo=function(){if(this.index>-1){var t=this.history[this.index];return this.undoers[t.type].call(this,t),this.index--,this.table.options.historyUndo(t.type,t.component.getComponent(),t.data),!0}return console.warn("History Undo Error - No more history to undo"),!1},z.prototype.redo=function(){if(this.history.length-1>this.index){this.index++;var t=this.history[this.index];return this.redoers[t.type].call(this,t),this.table.options.historyRedo(t.type,t.component.getComponent(),t.data),!0}return console.warn("History Redo Error - No more history to redo"),!1},z.prototype.undoers={cellEdit:function(t){t.component.setValueProcessData(t.data.oldValue)},rowAdd:function(t){t.component.deleteActual()},rowDelete:function(t){var e=this.table.rowManager.addRowActual(t.data.data,t.data.pos,t.data.index);this._rebindRow(t.component,e)},rowMove:function(t){this.table.rowManager.moveRowActual(t.component,this.table.rowManager.rows[t.data.pos],!1),this.table.rowManager.redraw()}},z.prototype.redoers={cellEdit:function(t){t.component.setValueProcessData(t.data.newValue)},rowAdd:function(t){var e=this.table.rowManager.addRowActual(t.data.data,t.data.pos,t.data.index);this._rebindRow(t.component,e)},rowDelete:function(t){t.component.deleteActual()},rowMove:function(t){this.table.rowManager.moveRowActual(t.component,this.table.rowManager.rows[t.data.pos],!1),this.table.rowManager.redraw()}},z.prototype._rebindRow=function(t,e){this.history.forEach(function(o){if(o.component instanceof l)o.component===t&&(o.component=e);else if(o.component instanceof u&&o.component.row===t){var i=o.component.column.getField();i&&(o.component=e.getCell(i))}})},Tabulator.registerExtension("history",z);var k=function(t){this.table=t,this.hasIndex=!1};k.prototype.parseTable=function(){var e=this,o=e.table.element,i=e.table.options,n=(i.columns,t("th",o)),s=t("tbody tr",o),a=[];e.hasIndex=!1,e.table.options.htmlImporting(),e._extractOptions(o,i),n.length?e._extractHeaders(o):e._generateBlankHeaders(o),s.each(function(o){var n={};e.hasIndex||(n[i.index]=o),t("td",t(this)).each(function(e){n[t(this).data("field")]=t(this).html()}),a.push(n)});var r=t("<div></div>"),l=o.prop("attributes");t.each(l,function(){r.attr(this.name,this.value)}),o.replaceWith(r),i.data=a,e.table.options.htmlImported(),r.tabulator(i)},k.prototype._extractOptions=function(t,e){var o=this,i=t[0].attributes;for(var n in i){var s,a=i[n];if(a&&a.name&&0===a.name.indexOf("tabulator-")){s=a.name.replace("tabulator-","");for(var r in e)r.toLowerCase()==s&&(e[r]=o._attribValue(a.value))}}},k.prototype._attribValue=function(t){return"true"===t||"false"!==t&&t},k.prototype._findCol=function(t){return this.table.options.columns.find(function(e){return e.title===t})||!1},k.prototype._extractHeaders=function(e){var o=this,i=t("th",e),n=t("tbody tr",e);i.each(function(e){var i,s,a=t(this),r=!1,l=o._findCol(a.text());l?r=!0:l={title:a.text().trim()},l.field||(l.field=a.text().trim().toLowerCase().replace(" ","_")),i=a.attr("width"),i&&!l.width&&(l.width=i),s=a[0].attributes,o._extractOptions(a,l);for(var c in s){var u,h=s[c];h&&h.name&&0===h.name.indexOf("tabulator-")&&(u=h.name.replace("tabulator-",""),l[u]=o._attribValue(h.value))}t("td:eq("+e+")",n).data("field",l.field),l.field==o.table.options.index&&(o.hasIndex=!0),r||o.table.options.columns.push(l)})},k.prototype._generateBlankHeaders=function(e){var o=this,i=t("tr:first td",e),n=t("tbody tr",e);i.each(function(e){var i={title:"",field:"col"+e};t("td:eq("+e+")",n).data("field",i.field);var s=t(this).attr("width");s&&(i.width=s),o.table.options.columns.push(i)})},Tabulator.registerExtension("htmlTableImport",k);var S=function(t){this.table=t,this.watchKeys=null,this.pressedKeys=null,this.keyupBinding=!1,this.keydownBinding=!1};S.prototype.initialize=function(){var t=this.table.options.keybindings,e={};if(this.watchKeys={},this.pressedKeys=[],!1!==t){for(var o in this.bindings)e[o]=this.bindings[o];if(Object.keys(t).length)for(var i in t)e[i]=t[i];this.mapBindings(e),this.bindEvents()}},S.prototype.mapBindings=function(t){var e=this,o=this;for(var i in t)!function(i){e.actions[i]?t[i]&&("object"!==_typeof(t[i])&&(t[i]=[t[i]]),t[i].forEach(function(t){o.mapBinding(i,t)})):console.warn("Key Binding Error - no such action:",i)}(i)},S.prototype.mapBinding=function(t,e){var o=this,i={action:this.actions[t],keys:[],ctrl:!1,shift:!1};e.toString().toLowerCase().split(" ").join("").split("+").forEach(function(t){switch(t){case"ctrl":i.ctrl=!0;break
;case"shift":i.shift=!0;break;default:t=parseInt(t),i.keys.push(t),o.watchKeys[t]||(o.watchKeys[t]=[]),o.watchKeys[t].push(i)}})},S.prototype.bindEvents=function(){var t=this;this.keyupBinding=function(e){var o=e.keyCode,i=t.watchKeys[o];i&&(t.pressedKeys.push(o),i.forEach(function(o){t.checkBinding(e,o)}))},this.keydownBinding=function(e){var o=e.keyCode;if(t.watchKeys[o]){var i=t.pressedKeys.indexOf(o);i>-1&&t.pressedKeys.splice(i,1)}},this.table.element.on("keydown",this.keyupBinding),this.table.element.on("keyup",this.keydownBinding)},S.prototype.clearBindings=function(){this.keyupBinding&&this.table.element.off("keydown",this.keyupBinding),this.keydownBinding&&this.table.element.off("keyup",this.keydownBinding)},S.prototype.checkBinding=function(t,e){var o=this,i=!0;return t.ctrlKey==e.ctrl&&t.shiftKey==e.shift&&(e.keys.forEach(function(t){-1==o.pressedKeys.indexOf(t)&&(i=!1)}),i&&e.action.call(o,t),!0)},S.prototype.bindings={navPrev:"shift + 9",navNext:9,navUp:38,navDown:40,scrollPageUp:33,scrollPageDown:34,scrollToStart:36,scrollToEnd:35,undo:"ctrl + 90",redo:"ctrl + 89",copyToClipboard:"ctrl + 67"},S.prototype.actions={keyBlock:function(t){t.stopPropagation(),t.preventDefault()},scrollPageUp:function(t){var e=this.table.rowManager,o=e.scrollTop-e.height;e.element[0].scrollHeight;t.preventDefault(),e.displayRowsCount&&(o>=0?e.element.scrollTop(o):e.scrollToRow(e.getDisplayRows()[0])),this.table.element.focus()},scrollPageDown:function(t){var e=this.table.rowManager,o=e.scrollTop+e.height,i=e.element[0].scrollHeight;t.preventDefault(),e.displayRowsCount&&(o<=i?e.element.scrollTop(o):e.scrollToRow(e.getDisplayRows()[e.displayRowsCount-1])),this.table.element.focus()},scrollToStart:function(t){var e=this.table.rowManager;t.preventDefault(),e.displayRowsCount&&e.scrollToRow(e.getDisplayRows()[0]),this.table.element.focus()},scrollToEnd:function(t){var e=this.table.rowManager;t.preventDefault(),e.displayRowsCount&&e.scrollToRow(e.getDisplayRows()[e.displayRowsCount-1]),this.table.element.focus()},navPrev:function(t){var e=!1;this.table.extExists("edit")&&(e=this.table.extensions.edit.currentCell)&&(t.preventDefault(),e.nav().prev())},navNext:function(t){var e=!1;this.table.extExists("edit")&&(e=this.table.extensions.edit.currentCell)&&(t.preventDefault(),e.nav().next())},navLeft:function(t){var e=!1;this.table.extExists("edit")&&(e=this.table.extensions.edit.currentCell)&&(t.preventDefault(),e.nav().left())},navRight:function(t){var e=!1;this.table.extExists("edit")&&(e=this.table.extensions.edit.currentCell)&&(t.preventDefault(),e.nav().right())},navUp:function(t){var e=!1;this.table.extExists("edit")&&(e=this.table.extensions.edit.currentCell)&&(t.preventDefault(),e.nav().up())},navDown:function(t){var e=!1;this.table.extExists("edit")&&(e=this.table.extensions.edit.currentCell)&&(t.preventDefault(),e.nav().down())},undo:function(t){this.table.options.history&&this.table.extExists("history")&&this.table.extExists("edit")&&(this.table.extensions.edit.currentCell||(t.preventDefault(),this.table.extensions.history.undo()))},redo:function(t){this.table.options.history&&this.table.extExists("history")&&this.table.extExists("edit")&&(this.table.extensions.edit.currentCell||(t.preventDefault(),this.table.extensions.history.redo()))},copyToClipboard:function(t){this.table.extensions.edit.currentCell||this.table.extExists("clipboard",!0)&&this.table.extensions.clipboard.copy(this.table.options.selectable&&"highlight"!=this.table.options.selectable?"selected":"active",null,null,null,!0)}},Tabulator.registerExtension("keybindings",S);var F=function(e){this.table=e,this.placeholderElement=t("<div class='tabulator-col tabulator-col-placeholder'></div>"),this.hoverElement=t(),this.checkTimeout=!1,this.checkPeriod=250,this.moving=!1,this.toCol=!1,this.toColAfter=!1,this.startX=0,this.autoScrollMargin=40,this.autoScrollStep=5,this.autoScrollTimeout=!1,this.moveHover=this.moveHover.bind(this),this.endMove=this.endMove.bind(this)};F.prototype.initializeColumn=function(t){var e=this,o={};t.extensions.frozen||(o.mousemove=function(o){t.parent===e.moving.parent&&(o.pageX-t.element.offset().left+e.table.columnManager.element.scrollLeft()>t.getWidth()/2?e.toCol===t&&e.toColAfter||(t.element.after(e.placeholderElement),e.moveColumn(t,!0)):(e.toCol!==t||e.toColAfter)&&(t.element.before(e.placeholderElement),e.moveColumn(t,!1)))}.bind(e),t.getElement().on("mousedown",function(o){e.checkTimeout=setTimeout(function(){e.startMove(o,t)},e.checkPeriod)}),t.getElement().on("mouseup",function(t){e.checkTimeout&&clearTimeout(e.checkTimeout)})),t.extensions.moveColumn=o},F.prototype.startMove=function(e,o){var i=this,n=o.getElement();i.moving=o,i.startX=e.pageX-n.offset().left,i.table.element.addClass("tabulator-block-select"),i.placeholderElement.css({width:o.getWidth(),height:o.getHeight()}),n.before(i.placeholderElement),n.detach(),i.hoverElement=n.clone(),i.hoverElement.addClass("tabulator-moving"),i.table.columnManager.getElement().append(i.hoverElement),i.hoverElement.css({left:0,bottom:0}),i._bindMouseMove(),t("body").on("mousemove",i.moveHover),t("body").on("mouseup",i.endMove),i.moveHover(e)},F.prototype._bindMouseMove=function(){this.table.columnManager.columnsByIndex.forEach(function(t){t.extensions.moveColumn.mousemove&&t.element.on("mousemove",t.extensions.moveColumn.mousemove)})},F.prototype._unbindMouseMove=function(){this.table.columnManager.columnsByIndex.forEach(function(t){t.extensions.moveColumn.mousemove&&t.element.off("mousemove",t.extensions.moveColumn.mousemove)})},F.prototype.moveColumn=function(t,e){var o=this,i=this.moving.getCells();o.toCol=t,o.toColAfter=e,e?t.getCells().forEach(function(t,e){t.getElement().after(i[e].getElement())}):t.getCells().forEach(function(t,e){t.getElement().before(i[e].getElement())})},F.prototype.endMove=function(e){var o=this;o._unbindMouseMove(),o.placeholderElement.after(o.moving.getElement()),o.placeholderElement.detach(),o.hoverElement.detach(),o.table.element.removeClass("tabulator-block-select"),o.toCol&&o.table.columnManager.moveColumn(o.moving,o.toCol,o.toColAfter),o.moving=!1,o.toCol=!1,o.toColAfter=!1,t("body").off("mousemove",o.moveHover),t("body").off("mouseup",o.endMove)},F.prototype.moveHover=function(t){var e,o=this,i=o.table.columnManager.getElement(),n=i.scrollLeft(),s=t.pageX-i.offset().left+n;o.hoverElement.css({left:s-o.startX}),s-n<o.autoScrollMargin&&(o.autoScrollTimeout||(o.autoScrollTimeout=setTimeout(function(){e=Math.max(0,n-5),o.table.rowManager.getElement().scrollLeft(e),o.autoScrollTimeout=!1},1))),n+i.innerWidth()-s<o.autoScrollMargin&&(o.autoScrollTimeout||(o.autoScrollTimeout=setTimeout(function(){e=Math.min(i.innerWidth(),n+5),o.table.rowManager.getElement().scrollLeft(e),o.autoScrollTimeout=!1},1)))},Tabulator.registerExtension("moveColumn",F);var P=function(e){this.table=e,this.placeholderElement=t("<div class='tabulator-row tabulator-row-placeholder'></div>"),this.hoverElement=t(),this.checkTimeout=!1,this.checkPeriod=150,this.moving=!1,this.toRow=!1,this.toRowAfter=!1,this.hasHandle=!1,this.startY=0,this.startX=0,this.moveHover=this.moveHover.bind(this),this.endMove=this.endMove.bind(this),this.tableRowDropEvent=!1,this.connection=!1,this.connections=[],this.connectedTable=!1,this.connectedRow=!1};P.prototype.initialize=function(t){this.connection=this.table.options.movableRowsConnectedTables},P.prototype.setHandle=function(t){this.hasHandle=t},P.prototype.initializeRow=function(t){var e=this,o={};o.mouseup=function(o){e.tableRowDrop(o,t)}.bind(e),o.mousemove=function(o){o.pageY-t.element.offset().top+e.table.rowManager.element.scrollTop()>t.getHeight()/2?e.toRow===t&&e.toRowAfter||(t.element.after(e.placeholderElement),e.moveRow(t,!0)):(e.toRow!==t||e.toRowAfter)&&(t.element.before(e.placeholderElement),e.moveRow(t,!1))}.bind(e),this.hasHandle||(t.getElement().on("mousedown",function(o){e.checkTimeout=setTimeout(function(){e.startMove(o,t)},e.checkPeriod)}),t.getElement().on("mouseup",function(t){e.checkTimeout&&clearTimeout(e.checkTimeout)})),t.extensions.moveRow=o},P.prototype.initializeCell=function(t){var e=this;t.getElement().on("mousedown",function(o){e.checkTimeout=setTimeout(function(){e.startMove(o,t.row)},e.checkPeriod)}),t.getElement().on("mouseup",function(t){e.checkTimeout&&clearTimeout(e.checkTimeout)})},P.prototype._bindMouseMove=function(){this.table.rowManager.getDisplayRows().forEach(function(t){"row"===t.type&&t.extensions.moveRow.mousemove&&t.element.on("mousemove",t.extensions.moveRow.mousemove)})},P.prototype._unbindMouseMove=function(){this.table.rowManager.getDisplayRows().forEach(function(t){"row"===t.type&&t.extensions.moveRow.mousemove&&t.element.off("mousemove",t.extensions.moveRow.mousemove)})},P.prototype.startMove=function(e,o){var i=o.getElement();this.setStartPosition(e,o),this.moving=o,this.table.element.addClass("tabulator-block-select"),this.placeholderElement.css({width:o.getWidth(),height:o.getHeight()}),this.connection?(this.table.element.addClass("tabulator-movingrow-sending"),this.connectToTables(o)):(i.before(this.placeholderElement),i.detach()),this.hoverElement=i.clone(),this.hoverElement.addClass("tabulator-moving"),this.connection?(t("body").append(this.hoverElement),this.hoverElement.css({left:0,top:0,width:this.table.element.innerWidth(),"white-space":"nowrap",overflow:"hidden","pointer-events":"none"})):(this.table.rowManager.getTableElement().append(this.hoverElement),this.hoverElement.css({left:0,top:0}),this._bindMouseMove()),t("body").on("mousemove",this.moveHover),t("body").on("mouseup",this.endMove),this.moveHover(e)},P.prototype.setStartPosition=function(t,e){var o,i;o=e.getElement(),this.connection?(i=o[0].getBoundingClientRect(),this.startX=i.left-t.pageX+window.scrollX,this.startY=i.top-t.pageY+window.scrollY):this.startY=t.pageY-o.offset().top},P.prototype.endMove=function(e){this._unbindMouseMove(),this.connection||(this.placeholderElement.after(this.moving.getElement()),this.placeholderElement.detach()),this.hoverElement.detach(),this.table.element.removeClass("tabulator-block-select"),this.toRow&&this.table.rowManager.moveRow(this.moving,this.toRow,this.toRowAfter),this.moving=!1,this.toRow=!1,this.toRowAfter=!1,t("body").off("mousemove",this.moveHover),t("body").off("mouseup",this.endMove),this.connection&&(this.table.element.removeClass("tabulator-movingrow-sending"),this.disconnectFromTables())},P.prototype.moveRow=function(t,e){this.toRow=t,this.toRowAfter=e},P.prototype.moveHover=function(t){this.connection?this.moveHoverConnections.call(this,t):this.moveHoverTable.call(this,t)},P.prototype.moveHoverTable=function(t){var e=this.table.rowManager.getElement(),o=e.scrollTop(),i=t.pageY-e.offset().top+o;this.hoverElement.css({top:i-this.startY})},P.prototype.moveHoverConnections=function(t){this.hoverElement.css({left:this.startX+t.pageX,top:this.startY+t.pageY})},P.prototype.connectToTables=function(t){var e=this.table.extensions.comms.getConnections(this.connection);this.table.options.movableRowsSendingStart(e),this.table.extensions.comms.send(this.connection,"moveRow","connect",{row:t})},P.prototype.disconnectFromTables=function(){var t=this.table.extensions.comms.getConnections(this.connection);this.table.options.movableRowsSendingStop(t),this.table.extensions.comms.send(this.connection,"moveRow","disconnect")},P.prototype.connect=function(t,e){var o=this;return this.connectedTable?(console.warn("Move Row Error - Table cannot accept connection, already connected to table:",this.connectedTable),!1):(this.connectedTable=t,this.connectedRow=e,this.table.element.addClass("tabulator-movingrow-receiving"),o.table.rowManager.getDisplayRows().forEach(function(t){"row"===t.type&&t.extensions.moveRow&&t.extensions.moveRow.mouseup&&t.element.on("mouseup",t.extensions.moveRow.mouseup)}),o.tableRowDropEvent=o.tableRowDrop.bind(o),o.table.element.on("mouseup",o.tableRowDropEvent),this.table.options.movableRowsReceivingStart(e,t),!0)},P.prototype.disconnect=function(t){var e=this;t===this.connectedTable?(this.connectedTable=!1,this.connectedRow=!1,this.table.element.removeClass("tabulator-movingrow-receiving"),e.table.rowManager.getDisplayRows().forEach(function(t){"row"===t.type&&t.extensions.moveRow&&t.extensions.moveRow.mouseup&&t.element.off("mouseup",t.extensions.moveRow.mouseup)}),e.table.element.off("mouseup",e.tableRowDropEvent),this.table.options.movableRowsReceivingStop(t)):console.warn("Move Row Error - trying to disconnect from non connected table")},P.prototype.dropComplete=function(t,e,i){var n=!1;if(i){switch(_typeof(this.table.options.movableRowsSender)){case"string":n=this.senders[this.table.options.movableRowsSender];break;case"function":n=this.table.options.movableRowsSender}n?n.call(this,this.moving.getComponent(),e?e.getComponent():o,t):this.table.options.movableRowsSender&&console.warn("Mover Row Error - no matching sender found:",this.table.options.movableRowsSender),this.table.options.movableRowsSent(this.moving.getComponent(),e?e.getComponent():o,t)}else this.table.options.movableRowsSentFailed(this.moving.getComponent(),e?e.getComponent():o,t);this.endMove()},P.prototype.tableRowDrop=function(t,e){var i=!1,n=!1;switch(t.stopImmediatePropagation(),_typeof(this.table.options.movableRowsReceiver)){case"string":i=this.receivers[this.table.options.movableRowsReceiver];break;case"function":i=this.table.options.movableRowsReceiver}i?n=i.call(this,this.connectedRow.getComponent(),e?e.getComponent():o,this.connectedTable):console.warn("Mover Row Error - no matching receiver found:",this.table.options.movableRowsReceiver),n?this.table.options.movableRowsReceived(this.connectedRow.getComponent(),e?e.getComponent():o,this.connectedTable):this.table.options.movableRowsReceivedFailed(this.connectedRow.getComponent(),e?e.getComponent():o,this.connectedTable),this.table.extensions.comms.send(this.connectedTable,"moveRow","dropcomplete",{row:e,success:n})},P.prototype.receivers={insert:function(t,e,i){return this.table.addRow(t.getData(),o,e),!0},add:function(t,e,o){return this.table.addRow(t.getData()),!0},update:function(t,e,o){return!!e&&(e.update(t.getData()),!0)},replace:function(t,e,i){return!!e&&(this.table.addRow(t.getData(),o,e),e.delete(),!0)}},P.prototype.senders={delete:function(t,e,o){t.delete()}},P.prototype.commsReceived=function(t,e,o){switch(e){case"connect":return this.connect(t,o.row);case"disconnect":return this.disconnect(t);case"dropcomplete":return this.dropComplete(t,o.row,o.success)}},Tabulator.registerExtension("moveRow",P);var H=function(t){this.table=t,this.allowedTypes=["","data","edit","clipboard"]};H.prototype.initializeColumn=function(t){var e=this,o=!1,i={};this.mapDepricatedFunctionality(t),this.allowedTypes.forEach(function(n){var s,a="mutator"+(n.charAt(0).toUpperCase()+n.slice(1));t.definition[a]&&(s=e.lookupMutator(t.definition[a]))&&(o=!0,i[a]={mutator:s,params:t.definition[a+"Params"]||{}})}),o&&(t.extensions.mutate=i)},H.prototype.mapDepricatedFunctionality=function(t){var e="";t.definition.mutateType&&("all"!=t.definition.mutateType?(e="mutator"+(type.charAt(0).toUpperCase()+type.slice(1)),t.defintion[e]=t.definition.mutator,delete t.definition.mutator,console.warn("The %cmutateType='"+t.definition.mutateType+"'' %coption has been depricated and will be removed in version 4.0, use the %c "+e+"%c option instead","font-weight:bold;","font-weight:regular;","font-weight:bold;","font-weight:regular;")):console.warn("The %cmutateType='all'' %coption has been depricated and will be removed in version 4.0, it is no longer needed","font-weight:bold;","font-weight:regular;"))},H.prototype.lookupMutator=function(t){var e=!1;switch(void 0===t?"undefined":_typeof(t)){case"string":this.mutators[t]?e=this.mutators[t]:console.warn("Mutator Error - No such mutator found, ignoring: ",t);break;case"function":e=t}return e},H.prototype.transformRow=function(t,e){var o=this,i="mutator"+(e.charAt(0).toUpperCase()+e.slice(1));return o.table.columnManager.traverse(function(o){var n;o.extensions.mutate&&(n=o.extensions.mutate[i]||o.extensions.mutate.mutator||!1)&&o.setFieldValue(t,n.mutator(o.getFieldValue(t),t,e,n.params,o.getComponent()))}),t},H.prototype.transformCell=function(t,e){var o=t.column.extensions.mutate.mutatorEdit||t.column.extensions.mutate.mutator||!1;return o?o.mutator(e,t.row.getData(),"edit",o.params,t.getComponent()):e},H.prototype.mutators={},Tabulator.registerExtension("mutator",H);var _=function(e){this.table=e,this.element=t("<span class='tabulator-paginator'></span>"),this.pagesElement=t("<span class='tabulator-pages'></span>"),this.firstBut=t("<button class='tabulator-page' data-page='first' role='button' aria-label='' title='' type='button'></button>"),this.prevBut=t("<button class='tabulator-page' data-page='prev' role='button' aria-label='' title='' type='button'></button>"),this.nextBut=t("<button class='tabulator-page' data-page='next' role='button' aria-label='' title='' type='button'></button>"),this.lastBut=t("<button class='tabulator-page' data-page='last' role='button' aria-label='' title='' type='button'></button>"),this.mode="local",this.progressiveLoad=!1,this.size=0,this.page=1,this.count=5,this.max=1,this.paginator=!1,this.displayIndex=0};_.prototype.initialize=function(t){var e=this;for(var o in e.table.options.paginationDataSent)e.paginationDataSentNames[o]=e.table.options.paginationDataSent[o];for(var i in e.table.options.paginationDataReceived)e.paginationDataReceivedNames[i]=e.table.options.paginationDataReceived[i];e.table.options.paginator&&(e.paginator=e.table.options.paginator),e.table.extensions.localize.bind("pagination|first",function(t){e.firstBut.html(t)}),e.table.extensions.localize.bind("pagination|first_title",function(t){e.firstBut.attr("aria-label",t).attr("title",t)}),e.table.extensions.localize.bind("pagination|prev",function(t){e.prevBut.html(t)}),e.table.extensions.localize.bind("pagination|prev_title",function(t){e.prevBut.attr("aria-label",t).attr("title",t)}),e.table.extensions.localize.bind("pagination|next",function(t){e.nextBut.html(t)}),e.table.extensions.localize.bind("pagination|next_title",function(t){e.nextBut.attr("aria-label",t).attr("title",t)}),e.table.extensions.localize.bind("pagination|last",function(t){e.lastBut.html(t)}),e.table.extensions.localize.bind("pagination|last_title",function(t){e.lastBut.attr("aria-label",t).attr("title",t)}),e.firstBut.on("click",function(){e.setPage(1)}),e.prevBut.on("click",function(){e.previousPage()}),e.nextBut.on("click",function(){e.nextPage()}),e.lastBut.on("click",function(){e.setPage(e.max)}),e.table.options.paginationElement&&(e.element=e.table.options.paginationElement),e.element.append(e.firstBut),e.element.append(e.prevBut),e.element.append(e.pagesElement),e.element.append(e.nextBut),e.element.append(e.lastBut),e.table.options.paginationElement||t||e.table.footerManager.append(e.element,e),e.mode=e.table.options.pagination,e.size=e.table.options.paginationSize||Math.floor(e.table.rowManager.getElement().innerHeight()/24),e.count=e.table.options.paginationButtonCount},_.prototype.initializeProgressive=function(t){this.initialize(!0),this.mode="progressive_"+t,this.progressiveLoad=!0},_.prototype.setDisplayIndex=function(t){this.displayIndex=t},_.prototype.getDisplayIndex=function(){return this.displayIndex},_.prototype.setMaxRows=function(t){this.max=t?Math.ceil(t/this.size):1,this.page>this.max&&(this.page=this.max)},_.prototype.reset=function(t){return("local"==this.mode||t)&&(this.page=1),!0},_.prototype.setMaxPage=function(t){this.max=t||1,this.page>this.max&&(this.page=this.max,this.trigger())},_.prototype.setPage=function(t){return t>0&&t<=this.max?(this.page=t,this.trigger(),!0):(console.warn("Pagination Error - Requested page is out of range of 1 - "+this.max+":",t),!1)},_.prototype.setPageSize=function(t){t>0&&(this.size=t)},_.prototype._setPageButtons=function(){var t=this,e=Math.floor((this.count-1)/2),o=Math.ceil((this.count-1)/2),i=this.max-this.page+e+1<this.count?this.max-this.count+1:Math.max(this.page-e,1),n=this.page<=o?Math.min(this.count,this.max):Math.min(this.page+o,this.max);t.pagesElement.empty(),1==t.page?(t.firstBut.prop("disabled",!0),t.prevBut.prop("disabled",!0)):(t.firstBut.prop("disabled",!1),t.prevBut.prop("disabled",!1)),t.page==t.max?(t.lastBut.prop("disabled",!0),t.nextBut.prop("disabled",!0)):(t.lastBut.prop("disabled",!1),t.nextBut.prop("disabled",!1));for(var s=i;s<=n;s++)s>0&&s<=t.max&&t.pagesElement.append(t._generatePageButton(s));this.footerRedraw()},_.prototype._generatePageButton=function(e){var o=this,i=t("<button class='tabulator-page "+(e==o.page?"active":"")+"' data-page='"+e+"' role='button' arpagea-label='Show Page "+e+"'>"+e+"</button>");return i.on("click",function(t){o.setPage(e)}),i},_.prototype.previousPage=function(){return this.page>1?(this.page--,this.trigger(),!0):(console.warn("Pagination Error - Previous page would be less than page 1:",0),!1)},_.prototype.nextPage=function(){return this.page<this.max?(this.page++,this.trigger(),!0):(this.progressiveLoad||console.warn("Pagination Error - Next page would be greater than maximum page of "+this.max+":",this.max+1),!1)},_.prototype.getPage=function(){return this.page},_.prototype.getPageMax=function(){return this.max},_.prototype.getPageSize=function(t){return this.size},_.prototype.getMode=function(){return this.mode},_.prototype.getRows=function(t){var e,o,i;if("local"==this.mode){e=[],o=this.size*(this.page-1),i=o+parseInt(this.size),this._setPageButtons();for(var n=o;n<i;n++)t[n]&&e.push(t[n]);return e}return this._setPageButtons(),t.slice(0)},_.prototype.trigger=function(){var t;switch(this.mode){case"local":t=this.table.rowManager.scrollLeft,this.table.rowManager.refreshActiveData("page"),this.table.rowManager.scrollHorizontal(t),this.table.options.pageLoaded(this.getPage());break;case"remote":case"progressive_load":case"progressive_scroll":this.table.extensions.ajax.blockActiveRequest(),this._getRemotePage();break;default:console.warn("Pagination Error - no such pagination mode:",this.mode)}},_.prototype._getRemotePage=function(){this.table.extExists("ajax",!0)&&(this.paginator?this._getRemotePagePaginator():this._getRemotePageAuto())},_.prototype._getRemotePagePaginator=function(){var t=this,e=t.table.extensions.ajax,o=e.getUrl();e.setUrl(t.paginator(e.getUrl(),t.page,t.size,e.getParams())),e.sendRequest(function(e){t._parseRemoteData(e)}),e.setUrl(o)},_.prototype._getRemotePageAuto=function(){var e,o,i=this;if(e=t.extend(!0,{},i.table.extensions.ajax.getParams()),o=i.table.extensions.ajax.getParams(),o[this.paginationDataSentNames.page]=i.page,this.size&&(o[this.paginationDataSentNames.size]=this.size),this.table.extExists("sort")){var n=i.table.extensions.sort.getSort();n.forEach(function(t){delete t.column}),o[this.paginationDataSentNames.sorters]=n}if(this.table.extExists("filter")){var s=i.table.extensions.filter.getFilters(!0,!0);o[this.paginationDataSentNames.filters]=s}i.table.extensions.ajax.setParams(o),i.table.extensions.ajax.sendRequest(function(t){i._parseRemoteData(t)},this.progressiveLoad),i.table.extensions.ajax.setParams(e)},_.prototype._parseRemoteData=function(t){var e,t,o,i=this;if(t[this.paginationDataReceivedNames.last_page])if(t[this.paginationDataReceivedNames.data])if(this.max=parseInt(t[this.paginationDataReceivedNames.last_page]),this.progressiveLoad)switch(this.mode){case"progressive_load":this.table.rowManager.addRows(t[this.paginationDataReceivedNames.data]),this.page<this.max&&setTimeout(function(){i.nextPage()},i.table.options.ajaxProgressiveLoadDelay);break;case"progressive_scroll":t=this.table.rowManager.getData().concat(t[this.paginationDataReceivedNames.data]),this.table.rowManager.setData(t,!0),o=this.table.options.ajaxProgressiveLoadScrollMargin||2*this.table.rowManager.element[0].clientHeight,i.table.rowManager.element[0].scrollHeight<=i.table.rowManager.element[0].clientHeight+o&&i.nextPage()}else e=this.table.rowManager.scrollLeft,this.table.rowManager.setData(t[this.paginationDataReceivedNames.data]),this.table.rowManager.scrollHorizontal(e),this.table.options.pageLoaded(this.getPage());else console.warn("Remote Pagination Error - Server response missing '"+this.paginationDataReceivedNames.data+"' property");else console.warn("Remote Pagination Error - Server response missing '"+this.paginationDataReceivedNames.last_page+"' property")},_.prototype.footerRedraw=function(){var t=this.table.footerManager.element;Math.ceil(t.innerWidth())-t[0].scrollWidth<0?this.pagesElement.hide():(this.pagesElement.show(),Math.ceil(t.innerWidth())-t[0].scrollWidth<0&&this.pagesElement.hide())},_.prototype.paginationDataSentNames={page:"page",size:"size",sorters:"sorters",filters:"filters"},_.prototype.paginationDataReceivedNames={current_page:"current_page",last_page:"last_page",data:"data"},Tabulator.registerExtension("page",_);var L=function(t){this.table=t,this.mode="",this.id="",this.persistProps=["field","width","visible"]};L.prototype.initialize=function(t,e){this.mode=!0!==t?t:void 0!==window.localStorage?"local":"cookie",this.id="tabulator-"+(e||this.table.element.attr("id")||"")},L.prototype.load=function(t,e){var o=this.retreiveData(t);return e&&(o=o?this.mergeDefinition(e,o):e),o},L.prototype.retreiveData=function(t){var e="",o=this.id+("columns"===t?"":"-"+t);switch(this.mode){case"local":e=localStorage.getItem(o);break;case"cookie":var i=document.cookie,n=i.indexOf(o+"="),s=void 0;n>-1&&(i=i.substr(n),s=i.indexOf(";"),s>-1&&(i=i.substr(0,s)),e=i.replace(o+"=",""));break;default:console.warn("Persistance Load Error - invalid mode selected",this.mode)}return!!e&&JSON.parse(e)},L.prototype.mergeDefinition=function(t,e){var o=this,i=[];return e=e||[],e.forEach(function(e,n){var s=o._findColumn(t,e);s&&(s.width=e.width,s.visible=e.visible,s.columns&&(s.columns=o.mergeDefinition(s.columns,e.columns)),i.push(s))}),t.forEach(function(t,n){o._findColumn(e,t)||(i.length>n?i.splice(n,0,t):i.push(t))}),i},L.prototype._findColumn=function(t,e){var o=e.columns?"group":e.field?"field":"object";return t.find(function(t){switch(o){case"group":return t.title===e.title&&t.columns.length===e.columns.length;case"field":return t.field===e.field;case"object":return t===e}})},L.prototype.save=function(t){var e={};switch(t){case"columns":e=this.parseColumns(this.table.columnManager.getColumns());break;case"filter":e=this.table.extensions.filter.getFilters();break;case"sort":e=this.validateSorters(this.table.extensions.sort.getSort())}var o=this.id+("columns"===t?"":"-"+t);this.saveData(o,e)},L.prototype.validateSorters=function(t){return t.forEach(function(t){t.column=t.field,delete t.field}),t},L.prototype.saveData=function(t,e){switch(e=JSON.stringify(e),this.mode){case"local":localStorage.setItem(t,e);break;case"cookie":var o=new Date;o.setDate(o.getDate()+1e4),document.cookie=t+"="+e+"; expires="+o.toUTCString();break;default:console.warn("Persistance Save Error - invalid mode selected",this.mode)}},L.prototype.parseColumns=function(t){var e=this,o=[];return t.forEach(function(t){var i={};t.isGroup?(i.title=t.getDefinition().title,i.columns=e.parseColumns(t.getColumns())):(i.title=t.getDefinition().title,i.field=t.getField(),i.width=t.getWidth(),i.visible=t.visible),o.push(i)}),o},Tabulator.registerExtension("persistence",L);var B=function(t){this.table=t,this.startColumn=!1,this.startX=!1,this.startWidth=!1,this.handle=null,this.prevHandle=null};B.prototype.initializeColumn=function(t,e,o){var i=this,n=!1,s=this.table.options.resizableColumns;if("header"===t&&(n="textarea"==e.definition.formatter||e.definition.variableHeight,e.extensions.resize={variableHeight:n}),!0===s||s==t){var a=document.createElement("div");a.className="tabulator-col-resize-handle";var r=document.createElement("div");r.className="tabulator-col-resize-handle prev",a.addEventListener("click",function(t){t.stopPropagation()}),a.addEventListener("mousedown",function(t){var o=e.getLastColumn();o&&i._checkResizability(o)&&(i.startColumn=e,i._mouseDown(t,o))}),a.addEventListener("dblclick",function(t){i._checkResizability(e)&&e.reinitializeWidth(!0)}),r.addEventListener("click",function(t){t.stopPropagation()}),r.addEventListener("mousedown",function(t){var o,n,s;(o=e.getFirstColumn())&&(n=i.table.columnManager.findColumnIndex(o),(s=n>0&&i.table.columnManager.getColumnByIndex(n-1))&&i._checkResizability(s)&&(i.startColumn=e,i._mouseDown(t,s)))}),r.addEventListener("dblclick",function(t){var o,n,s;(o=e.getFirstColumn())&&(n=i.table.columnManager.findColumnIndex(o),(s=n>0&&i.table.columnManager.getColumnByIndex(n-1))&&i._checkResizability(s)&&s.reinitializeWidth(!0))}),o.append(a).append(r)}},B.prototype._checkResizability=function(t){return void 0!==t.definition.resizable?t.definition.resizable:this.table.options.resizableColumns},B.prototype._mouseDown=function(e,o){function i(t){o.setWidth(s.startWidth+(t.screenX-s.startX)),!s.table.browserSlow&&o.extensions.resize&&o.extensions.resize.variableHeight&&o.checkCellHeights()}function n(e){s.startColumn.extensions.edit&&(s.startColumn.extensions.edit.blocked=!1),s.table.browserSlow&&o.extensions.resize&&o.extensions.resize.variableHeight&&o.checkCellHeights(),t("body").off("mouseup",i),t("body").off("mousemove",i),s.table.element.removeClass("tabulator-block-select"),s.table.options.persistentLayout&&s.table.extExists("persistence",!0)&&s.table.extensions.persistence.save("columns"),s.table.options.columnResized(s.startColumn.getComponent())}var s=this;s.table.element.addClass("tabulator-block-select"),e.stopPropagation(),s.startColumn.extensions.edit&&(s.startColumn.extensions.edit.blocked=!0),s.startX=e.screenX,s.startWidth=o.getWidth(),t("body").on("mousemove",i),t("body").on("mouseup",n)},Tabulator.registerExtension("resizeColumns",B);var A=function(t){this.table=t,this.startColumn=!1,this.startY=!1,this.startHeight=!1,this.handle=null,this.prevHandle=null};A.prototype.initializeRow=function(t){var e=this,o=document.createElement("div");o.className="tabulator-row-resize-handle";var i=document.createElement("div");i.className="tabulator-row-resize-handle prev",o.addEventListener("click",function(t){t.stopPropagation()}),o.addEventListener("mousedown",function(o){e.startRow=t,e._mouseDown(o,t)}),i.addEventListener("click",function(t){t.stopPropagation()}),i.addEventListener("mousedown",function(o){var i=e.table.rowManager.prevDisplayRow(t);i&&(e.startRow=i,e._mouseDown(o,i))}),t.getElement().append(o).append(i)},A.prototype._mouseDown=function(e,o){function i(t){o.setHeight(s.startHeight+(t.screenY-s.startY))}function n(e){t("body").off("mouseup",i),t("body").off("mousemove",i),s.table.element.removeClass("tabulator-block-select"),s.table.options.rowResized(o.getComponent())}var s=this;s.table.element.addClass("tabulator-block-select"),e.stopPropagation(),s.startY=e.screenY,s.startHeight=o.getHeight(),t("body").on("mousemove",i),t("body").on("mouseup",n)},Tabulator.registerExtension("resizeRows",A);var I=function(t){this.table=t,this.binding=!1,this.observer=!1};I.prototype.initialize=function(e){var o=this.table;"undefined"!=typeof ResizeObserver&&"virtual"===o.rowManager.getRenderMode()?(this.observer=new ResizeObserver(function(t){o.redraw()}),this.observer.observe(o.element[0])):(this.binding=function(){o.element.tabulator("redraw")},t(window).resize(this.binding))},I.prototype.clearBindings=function(e){this.binding&&t(window).off("resize",this.binding),this.observer&&this.observer.unobserve(this.table.element[0])},Tabulator.registerExtension("resizeTable",I);var N=function(t){this.table=t,this.columns=[],this.hiddenColumns=[],this.mode="",this.index=0,this.collapseFormatter=[],this.collapseStartOpen=!0};N.prototype.initialize=function(){var t=[];this.mode=this.table.options.responsiveLayout,this.collapseFormatter=this.table.options.responsiveLayoutCollapseFormatter||this.formatCollapsedData,this.collapseStartOpen=this.table.options.responsiveLayoutCollapseStartOpen,
this.hiddenColumns=[],this.table.columnManager.columnsByIndex.forEach(function(e,o){e.extensions.responsive&&e.extensions.responsive.order&&e.extensions.responsive.visible&&(e.extensions.responsive.index=o,t.push(e),e.visible||"collapse"!==this.mode||this.hiddenColumns.push(e))}),t=t.reverse(),t=t.sort(function(t,e){return e.extensions.responsive.order-t.extensions.responsive.order||e.extensions.responsive.index-t.extensions.responsive.index}),this.columns=t,"collapse"===this.mode&&this.generateCollapsedContent()},N.prototype.initializeColumn=function(t){var e=t.getDefinition();t.extensions.responsive={order:void 0===e.responsive?1:e.responsive,visible:!1!==e.visible}},N.prototype.layoutRow=function(e){var o=e.getElement(),i=t("<div class='tabulator-responsive-collapse'></div>");o.hasClass("tabulator-calcs")||(e.extensions.responsiveLayout={element:i},this.collapseStartOpen||i.hide(),e.getElement().append(i),this.generateCollapsedRowContent(e))},N.prototype.updateColumnVisibility=function(t,e){t.extensions.responsive&&(t.extensions.responsive.visible=e,this.initialize())},N.prototype.hideColumn=function(t){t.hide(!1,!0),"collapse"===this.mode&&(this.hiddenColumns.unshift(t),this.generateCollapsedContent())},N.prototype.showColumn=function(t){var e;t.show(!1,!0),t.setWidth(t.getWidth()),"collapse"===this.mode&&(e=this.hiddenColumns.indexOf(t),e>-1&&this.hiddenColumns.splice(e,1),this.generateCollapsedContent())},N.prototype.update=function(){for(var t=this,e=!0;e;){var o="fitColumns"==t.table.extensions.layout.getMode()?t.table.columnManager.getFlexBaseWidth():t.table.columnManager.getWidth(),i=t.table.columnManager.element.innerWidth()-o;if(i<0){var n=t.columns[t.index];n?(t.hideColumn(n),t.index++):e=!1}else{var s=t.columns[t.index-1];s&&i>0&&i>=s.getWidth()?(t.showColumn(s),t.index--):e=!1}t.table.rowManager.activeRowsCount||t.table.rowManager.renderEmptyScroll()}},N.prototype.generateCollapsedContent=function(){var t=this;this.table.rowManager.getDisplayRows().forEach(function(e){t.generateCollapsedRowContent(e)})},N.prototype.generateCollapsedRowContent=function(t){var e;t.extensions.responsiveLayout&&(e=t.extensions.responsiveLayout.element,e.empty(),e.append(this.collapseFormatter(this.generateCollapsedRowData(t))))},N.prototype.generateCollapsedRowData=function(e){var o,i=this,n=e.getData(),s={};return this.hiddenColumns.forEach(function(a){var r=a.getFieldValue(n);a.definition.title&&a.field&&(a.extensions.format&&i.table.options.responsiveLayoutCollapseUseFormatters?(o={value:!1,data:{},getValue:function(){return r},getData:function(){return n},getElement:function(){return t()},getRow:function(){return e.getComponent()},getColumn:function(){return a.getComponent()}},s[a.definition.title]=a.extensions.format.formatter.call(i.table.extensions.format,o,a.extensions.format.params)):s[a.definition.title]=r)}),s},N.prototype.formatCollapsedData=function(e){var o=t("<table></table>");for(var i in e)o.append("<tr><td><strong>"+i+"</strong></td><td>"+e[i]+"</td></tr>");return Object.keys(e).length?o:""},Tabulator.registerExtension("responsiveLayout",N);var V=function(t){this.table=t,this.selecting=!1,this.selectPrev=[],this.selectedRows=[]};V.prototype.clearSelectionData=function(t){this.selecting=!1,this.selectPrev=[],this.selectedRows=[],t||this._rowSelectionChanged()},V.prototype.initializeRow=function(e){var o=this,i=e.getElement(),n=function e(){setTimeout(function(){o.selecting=!1},50),t("body").off("mouseup",e)};e.extensions.select={selected:!1},o.table.options.selectableCheck(e.getComponent())?(i.addClass("tabulator-selectable").removeClass("tabulator-unselectable"),o.table.options.selectable&&"highlight"!=o.table.options.selectable&&(i.on("click",function(t){o.selecting||o.toggleRow(e)}),i.on("mousedown",function(i){if(i.shiftKey)return o.selecting=!0,o.selectPrev=[],t("body").on("mouseup",n),t("body").on("keyup",n),o.toggleRow(e),!1}),i.on("mouseenter",function(t){o.selecting&&(o.toggleRow(e),o.selectPrev[1]==e&&o.toggleRow(o.selectPrev[0]))}),i.on("mouseout",function(t){o.selecting&&o.selectPrev.unshift(e)}))):e.getElement().addClass("tabulator-unselectable").removeClass("tabulator-selectable")},V.prototype.toggleRow=function(t){this.table.options.selectableCheck(t.getComponent())&&(t.extensions.select.selected?this._deselectRow(t):this._selectRow(t))},V.prototype.selectRows=function(t){var e=this;switch(void 0===t?"undefined":_typeof(t)){case"undefined":e.table.rowManager.rows.forEach(function(t){e._selectRow(t,!1,!0)}),e._rowSelectionChanged();break;case"boolean":!0===t&&(e.table.rowManager.activeRows.forEach(function(t){e._selectRow(t,!1,!0)}),e._rowSelectionChanged());break;default:Array.isArray(t)?(t.forEach(function(t){e._selectRow(t)}),e._rowSelectionChanged()):e._selectRow(t)}},V.prototype._selectRow=function(t,e,o){var i=this;if(!isNaN(i.table.options.selectable)&&!0!==i.table.options.selectable&&!o&&i.selectedRows.length>=i.table.options.selectable){if(!i.table.options.selectableRollingSelection)return!1;i._deselectRow(i.selectedRows[0])}var n=i.table.rowManager.findRow(t);if(n){if(-1==i.selectedRows.indexOf(n)){var i=this;n.extensions.select.selected=!0,n.getElement().addClass("tabulator-selected"),i.selectedRows.push(n),e||(i.table.options.rowSelected(n.getComponent()),i._rowSelectionChanged())}}else e||console.warn("Selection Error - No such row found, ignoring selection:"+t)},V.prototype.deselectRows=function(t){var e=this;if(void 0===t){for(var o=e.selectedRows.length,i=0;i<o;i++)e._deselectRow(e.selectedRows[0],!0);e._rowSelectionChanged()}else Array.isArray(t)?(t.forEach(function(t){e._deselectRow(t)}),e._rowSelectionChanged()):e._deselectRow(t)},V.prototype._deselectRow=function(t,e){var o,i=this,n=i.table.rowManager.findRow(t);n?(o=i.selectedRows.findIndex(function(t){return t==n}))>-1&&(n.extensions.select.selected=!1,n.getElement().removeClass("tabulator-selected"),i.selectedRows.splice(o,1),e||(i.table.options.rowDeselected(n.getComponent()),i._rowSelectionChanged())):e||console.warn("Deselection Error - No such row found, ignoring selection:"+t)},V.prototype.getSelectedData=function(){var t=[];return this.selectedRows.forEach(function(e){t.push(e.getData())}),t},V.prototype.getSelectedRows=function(){var t=[];return this.selectedRows.forEach(function(e){t.push(e.getComponent())}),t},V.prototype._rowSelectionChanged=function(){this.table.options.rowSelectionChanged(this.getSelectedData(),this.getSelectedRows())},Tabulator.registerExtension("selectRow",V);var j=function(t){this.table=t,this.sortList=[],this.changed=!1};j.prototype.initializeColumn=function(e,o){var i=this,n=!1;switch(_typeof(e.definition.sorter)){case"string":i.sorters[e.definition.sorter]?n=i.sorters[e.definition.sorter]:console.warn("Sort Error - No such sorter found: ",e.definition.sorter);break;case"function":n=e.definition.sorter}e.extensions.sort={sorter:n,dir:"none",params:e.definition.sorterParams||{},startingDir:e.definition.headerSortStartingDir||"asc"},!1!==e.definition.headerSort&&(e.element.addClass("tabulator-sortable"),o.append(t("<div class='tabulator-arrow'></div>")),e.element.on("click",function(t){var o="",n=[],s=!1;e.extensions.sort&&(o="asc"==e.extensions.sort.dir?"desc":"desc"==e.extensions.sort.dir?"asc":e.extensions.sort.startingDir,t.shiftKey||t.ctrlKey?(n=i.getSort(),s=n.findIndex(function(t){return t.field===e.getField()}),s>-1?(n[s].dir="asc"==n[s].dir?"desc":"asc",s!=n.length-1&&n.push(n.splice(s,1)[0])):n.push({column:e,dir:o}),i.setSort(n)):i.setSort(e,o),i.table.rowManager.sorterRefresh())}))},j.prototype.hasChanged=function(){var t=this.changed;return this.changed=!1,t},j.prototype.getSort=function(){var t=this,e=[];return t.sortList.forEach(function(t){t.column&&e.push({column:t.column.getComponent(),field:t.column.getField(),dir:t.dir})}),e},j.prototype.setSort=function(t,e){var o=this,i=[];Array.isArray(t)||(t=[{column:t,dir:e}]),t.forEach(function(t){var e;e=o.table.columnManager.findColumn(t.column),e?(t.column=e,i.push(t),o.changed=!0):console.warn("Sort Warning - Sort field does not exist and is being ignored: ",t.column)}),o.sortList=i,this.table.options.persistentSort&&this.table.extExists("persistence",!0)&&this.table.extensions.persistence.save("sort")},j.prototype.clear=function(){this.setSort([])},j.prototype.findSorter=function(t){var e,o=this.table.rowManager.activeRows[0],i="string";if(o&&(o=o.getData(),t.getField()))switch(e=t.getFieldValue(o),void 0===e?"undefined":_typeof(e)){case"undefined":i="string";break;case"boolean":i="boolean";break;default:isNaN(e)||""===e?e.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+$/i)&&(i="alphanum"):i="number"}return this.sorters[i]},j.prototype.sort=function(){var t=this;t.table.options.dataSorting&&t.table.options.dataSorting(t.getSort()),t.clearColumnHeaders(),t.table.options.ajaxSorting?t.sortList.forEach(function(e,o){t.setColumnHeader(e.column,e.dir)}):t.sortList.forEach(function(e,o){e.column&&e.column.extensions.sort&&(e.column.extensions.sort.sorter||(e.column.extensions.sort.sorter=t.findSorter(e.column)),t._sortItem(e.column,e.dir,t.sortList,o)),t.setColumnHeader(e.column,e.dir)}),t.table.options.dataSorted&&t.table.options.dataSorted(t.getSort(),t.table.rowManager.getComponents(!0))},j.prototype.clearColumnHeaders=function(){this.table.columnManager.getRealColumns().forEach(function(t){t.extensions.sort&&(t.extensions.sort.dir="none",t.element.attr("aria-sort","none"))})},j.prototype.setColumnHeader=function(t,e){t.extensions.sort.dir=e,t.element.attr("aria-sort",e)},j.prototype._sortItem=function(t,e,o,i){var n=this;n.table.rowManager.activeRows.sort(function(s,a){var r=n._sortRow(s,a,t,e);if(0==r&&i)for(var l=i-1;l>=0&&0==(r=n._sortRow(s,a,o[l].column,o[l].dir));l--);return r})},j.prototype._sortRow=function(t,e,o,i){var n=this,s="asc"==i?t:e,a="asc"==i?e:t;return t=o.getFieldValue(s.getData()),e=o.getFieldValue(a.getData()),t=void 0!==t?t:"",e=void 0!==e?e:"",o.extensions.sort.sorter.call(n,t,e,s.getComponent(),a.getComponent(),o.getComponent(),i,o.extensions.sort.params)},j.prototype.sorters={number:function(t,e,o,i,n,s,a){var r=a.alignEmptyValues,l=0,t=parseFloat(String(t).replace(",","")),e=parseFloat(String(e).replace(",",""));if(isNaN(t))l=isNaN(e)?0:-1;else{if(!isNaN(e))return t-e;l=1}return("top"===r&&"desc"===s||"bottom"===r&&"asc"===s)&&(l*=-1),l},string:function(t,e,o,i,n,s,a){var r,l=a.alignEmptyValues,c=0;if(t){if(e){switch(_typeof(a.locale)){case"boolean":a.locale&&(r=this.table.extensions.localize.getLocale());break;case"string":r=a.locale}return String(t).toLowerCase().localeCompare(String(e).toLowerCase(),r)}c=1}else c=e?-1:0;return("top"===l&&"desc"===s||"bottom"===l&&"asc"===s)&&(c*=-1),c},date:function(t,e,o,i,n,s,a){var r=a.format||"DD/MM/YYYY",l=a.alignEmptyValues,c=0;if("undefined"!=typeof moment){if(t=moment(t,r),e=moment(e,r),t.isValid()){if(e.isValid())return t-e;c=1}else c=e.isValid()?-1:0;return("top"===l&&"desc"===s||"bottom"===l&&"asc"===s)&&(c*=-1),c}console.error("Sort Error - 'date' sorter is dependant on moment.js")},time:function(t,e,o,i,n,s,a){var r=a.format||"hh:mm",l=a.alignEmptyValues,c=0;if("undefined"!=typeof moment){if(t=moment(t,r),e=moment(e,r),t.isValid()){if(e.isValid())return t-e;c=1}else c=e.isValid()?-1:0;return("top"===l&&"desc"===s||"bottom"===l&&"asc"===s)&&(c*=-1),c}console.error("Sort Error - 'date' sorter is dependant on moment.js")},datetime:function(t,e,o,i,n,s,a){var r=a.format||"DD/MM/YYYY hh:mm:ss",l=a.alignEmptyValues,c=0;if("undefined"!=typeof moment){if(t=moment(t,r),e=moment(e,r),t.isValid()){if(e.isValid())return t-e;c=1}else c=e.isValid()?-1:0;return("top"===l&&"desc"===s||"bottom"===l&&"asc"===s)&&(c*=-1),c}console.error("Sort Error - 'date' sorter is dependant on moment.js")},boolean:function(t,e,o,i,n,s,a){return(!0===t||"true"===t||"True"===t||1===t?1:0)-(!0===e||"true"===e||"True"===e||1===e?1:0)},array:function(t,e,o,i,n,s,a){function r(t){switch(u){case"length":return t.length;case"sum":return t.reduce(function(t,e){return t+e});case"max":return Math.max.apply(null,t);case"min":return Math.min.apply(null,t);case"avg":return t.reduce(function(t,e){return t+e})/t.length}}var l=0,c=0,u=a.type||"length",h=a.alignEmptyValues,p=0;if(Array.isArray(t)){if(Array.isArray(e))return l=t?r(t):0,c=e?r(e):0,l-c;h=1}else h=Array.isArray(e)?-1:0;return("top"===h&&"desc"===s||"bottom"===h&&"asc"===s)&&(p*=-1),p},exists:function(t,e,o,i,n,s,a){return(void 0===t?0:1)-(void 0===e?0:1)},alphanum:function(t,e,o,i,n,s,a){var r,l,c,u,h,p=0,d=/(\d+)|(\D+)/g,f=/\d/,g=a.alignEmptyValues,m=0;if(t||0===t){if(e||0===e){if(isFinite(t)&&isFinite(e))return t-e;if(r=String(t).toLowerCase(),l=String(e).toLowerCase(),r===l)return 0;if(!f.test(r)||!f.test(l))return r>l?1:-1;for(r=r.match(d),l=l.match(d),h=r.length>l.length?l.length:r.length;p<h;)if(c=r[p],u=l[p++],c!==u)return isFinite(c)&&isFinite(u)?("0"===c.charAt(0)&&(c="."+c),"0"===u.charAt(0)&&(u="."+u),c-u):c>u?1:-1;return r.length>l.length}m=1}else m=e||0===e?-1:0;return("top"===g&&"desc"===s||"bottom"===g&&"asc"===s)&&(m*=-1),m}},Tabulator.registerExtension("sort",j);var W=function(t){this.table=t};W.prototype.initializeColumn=function(t){var e,o=this,i=[];t.definition.validator&&(Array.isArray(t.definition.validator)?t.definition.validator.forEach(function(t){(e=o._extractValidator(t))&&i.push(e)}):(e=this._extractValidator(t.definition.validator))&&i.push(e),t.extensions.validate=!!i.length&&i)},W.prototype._extractValidator=function(t){switch(void 0===t?"undefined":_typeof(t)){case"string":var e=t.split(":"),o=e.shift(),i=e.join();return this._buildValidator(o,i);case"function":return this._buildValidator(t);case"object":return this._buildValidator(t.type,t.parameters)}},W.prototype._buildValidator=function(t,e){var o="function"==typeof t?t:this.validators[t];return o?{type:"function"==typeof t?"function":t,func:o,params:e}:(console.warn("Validator Setup Error - No matching validator found:",t),!1)},W.prototype.validate=function(t,e,o){var i=this,n=[];return t&&t.forEach(function(t){t.func.call(i,e,o,t.params)||n.push({type:t.type,parameters:t.params})}),!n.length||n},W.prototype.validators={integer:function(t,e,o){return""===e||null===e||void 0===e||"number"==typeof(e=Number(e))&&isFinite(e)&&Math.floor(e)===e},float:function(t,e,o){return""===e||null===e||void 0===e||"number"==typeof(e=Number(e))&&isFinite(e)&&e%1!=0},numeric:function(t,e,o){return""===e||null===e||void 0===e||!isNaN(e)},string:function(t,e,o){return""===e||null===e||void 0===e||isNaN(e)},max:function(t,e,o){return""===e||null===e||void 0===e||parseFloat(e)<=o},min:function(t,e,o){return""===e||null===e||void 0===e||parseFloat(e)>=o},minLength:function(t,e,o){return""===e||null===e||void 0===e||String(e).length>=o},maxLength:function(t,e,o){return""===e||null===e||void 0===e||String(e).length<=o},in:function(t,e,o){return""===e||null===e||void 0===e||("string"==typeof o&&(o=o.split("|")),""===e||o.indexOf(e)>-1)},regex:function(t,e,o){return""===e||null===e||void 0===e||new RegExp(o).test(e)},unique:function(t,e,o){if(""===e||null===e||void 0===e)return!0;var i=!0,n=t.getData(),s=t.getColumn()._getSelf();return this.table.rowManager.rows.forEach(function(t){var o=t.getData();o!==n&&e==s.getFieldValue(o)&&(i=!1)}),i},required:function(t,e,o){return""!==e&null!==e&&void 0!==e}},Tabulator.registerExtension("validate",W)}(),t.widget("ui.tabulator",Tabulator)});

/***/ }),

/***/ "../node_modules/typings-for-css-modules-loader/lib/index.js??ref--6-1!../node_modules/jquery.tabulator/dist/css/tabulator.min.css":
/*!********************************************************************************************************************************!*\
  !*** ../node_modules/typings-for-css-modules-loader/lib??ref--6-1!../node_modules/jquery.tabulator/dist/css/tabulator.min.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "../../../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Tabulator v3.5.1 (c) Oliver Folkerd */\n._23A3sdaWti9Ol9m7dL9O2w{position:relative;border:1px solid #999;background-color:#888;font-size:14px;text-align:left;overflow:hidden;transform:translatez(0)}._23A3sdaWti9Ol9m7dL9O2w[tabulator-layout=fitDataFill] .GBzrAVkiQXaBkDE2uQ8Xg ._2_izzybMx8aorM_ZbFo11j{min-width:100%}._23A3sdaWti9Ol9m7dL9O2w._1aQk6_LSUhCYFiE2dPRIQS{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE{position:relative;box-sizing:border-box;width:100%;border-bottom:1px solid #999;background-color:#e6e6e6;color:#555;font-weight:700;white-space:nowrap;overflow:hidden;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._1mBAQcrY_qeReg6RBAzQ8W{display:inline-block;position:relative;box-sizing:border-box;border-right:1px solid #aaa;background:#e6e6e6;text-align:left;vertical-align:bottom;overflow:hidden}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._1mBAQcrY_qeReg6RBAzQ8W.F6TS0epUJdy-qSwKH6Kg-{position:absolute;border:1px solid #999;background:#cdcdcd;pointer-events:none}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._1mBAQcrY_qeReg6RBAzQ8W ._23GLIqEC19vw19rMJL4xHE{box-sizing:border-box;position:relative;padding:4px}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._1mBAQcrY_qeReg6RBAzQ8W ._23GLIqEC19vw19rMJL4xHE ._1YGyFWFRaoTTjhIrFb3fzl{box-sizing:border-box;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;vertical-align:bottom}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._1mBAQcrY_qeReg6RBAzQ8W ._23GLIqEC19vw19rMJL4xHE ._1YGyFWFRaoTTjhIrFb3fzl ._33Gc8EbH3e0JbkahvSiAp0{box-sizing:border-box;width:100%;border:1px solid #999;padding:1px;background:#fff}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._1mBAQcrY_qeReg6RBAzQ8W ._23GLIqEC19vw19rMJL4xHE ._3R6vqupQkifYTk1J8lIlu_{display:inline-block;position:absolute;top:9px;right:8px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #bbb}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._1mBAQcrY_qeReg6RBAzQ8W._25CS9WXre-QNaCVaKEFa1o ._1jHPe84-P1u3GwTYEe6XcE{position:relative;display:-ms-flexbox;display:flex;border-top:1px solid #aaa;overflow:hidden}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._1mBAQcrY_qeReg6RBAzQ8W._25CS9WXre-QNaCVaKEFa1o ._1jHPe84-P1u3GwTYEe6XcE ._1mBAQcrY_qeReg6RBAzQ8W:last-child{margin-right:-1px}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._1mBAQcrY_qeReg6RBAzQ8W:first-child ._1ojFqidpFkrj3My_wA0zxt._3wHo6u4_Y0p7904XuoRbkK{display:none}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._1mBAQcrY_qeReg6RBAzQ8W._2KP788JTKOoZwTIxu4xNkb{position:absolute;background-color:#e6e6e6!important;border:1px solid #aaa}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._1mBAQcrY_qeReg6RBAzQ8W ._3YEchhjqhiVWar-ONzOs37{position:relative;box-sizing:border-box;margin-top:2px;width:100%;text-align:center}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._1mBAQcrY_qeReg6RBAzQ8W ._3YEchhjqhiVWar-ONzOs37 textarea{height:auto!important}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._1mBAQcrY_qeReg6RBAzQ8W ._3YEchhjqhiVWar-ONzOs37 svg{margin-top:3px}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._1mBAQcrY_qeReg6RBAzQ8W._1ArP0ynFbN-z9JukWtoinv ._1YGyFWFRaoTTjhIrFb3fzl{padding-right:25px}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._1mBAQcrY_qeReg6RBAzQ8W._1ArP0ynFbN-z9JukWtoinv:hover{cursor:pointer;background-color:#cdcdcd}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._1mBAQcrY_qeReg6RBAzQ8W._1ArP0ynFbN-z9JukWtoinv[aria-sort=none] ._23GLIqEC19vw19rMJL4xHE ._3R6vqupQkifYTk1J8lIlu_{border-top:none;border-bottom:6px solid #bbb}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._1mBAQcrY_qeReg6RBAzQ8W._1ArP0ynFbN-z9JukWtoinv[aria-sort=asc] ._23GLIqEC19vw19rMJL4xHE ._3R6vqupQkifYTk1J8lIlu_{border-top:none;border-bottom:6px solid #666}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._1mBAQcrY_qeReg6RBAzQ8W._1ArP0ynFbN-z9JukWtoinv[aria-sort=desc] ._23GLIqEC19vw19rMJL4xHE ._3R6vqupQkifYTk1J8lIlu_{border-top:6px solid #666;border-bottom:none}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._2VwCVyUqe3k19zXWfIA3J7{display:inline-block;position:absolute;z-index:1}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._2VwCVyUqe3k19zXWfIA3J7._2HY3bh5oi1jgxQaAKN7GN6{border-right:2px solid #aaa}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._2VwCVyUqe3k19zXWfIA3J7._2bLXyI3vZvpFluyT8VlFq4{border-left:2px solid #aaa}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._3cmi0L9nQKktQGhueJdcet{box-sizing:border-box;min-width:200%;background:#f3f3f3!important;border-top:1px solid #aaa;border-bottom:1px solid #aaa;overflow:hidden}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._3cmi0L9nQKktQGhueJdcet ._2v7LTNNL3WXZMY-HCrh1c-{background:#f3f3f3!important}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._3cmi0L9nQKktQGhueJdcet ._2v7LTNNL3WXZMY-HCrh1c- ._1ojFqidpFkrj3My_wA0zxt{display:none}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._2j1stoaHXf4s5aGDlI3hHA{min-width:200%}._23A3sdaWti9Ol9m7dL9O2w ._2Y9oOGaM602IF1Qlz8SwJE ._2j1stoaHXf4s5aGDlI3hHA:empty{display:none}._23A3sdaWti9Ol9m7dL9O2w .GBzrAVkiQXaBkDE2uQ8Xg{position:relative;width:100%;white-space:nowrap;overflow:auto;-webkit-overflow-scrolling:touch}._23A3sdaWti9Ol9m7dL9O2w .GBzrAVkiQXaBkDE2uQ8Xg:focus{outline:none}._23A3sdaWti9Ol9m7dL9O2w .GBzrAVkiQXaBkDE2uQ8Xg ._1PPPe2yaNFYMAEHkvW5144{position:absolute;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;top:0;left:0;height:100%;width:100%}._23A3sdaWti9Ol9m7dL9O2w .GBzrAVkiQXaBkDE2uQ8Xg ._1PPPe2yaNFYMAEHkvW5144 span{display:inline-block;margin:0 auto;padding:10px;color:#ccc;font-weight:700;font-size:20px}._23A3sdaWti9Ol9m7dL9O2w .GBzrAVkiQXaBkDE2uQ8Xg ._2_izzybMx8aorM_ZbFo11j{position:relative;display:inline-block;background-color:#fff;white-space:nowrap;overflow:visible;color:#333}._23A3sdaWti9Ol9m7dL9O2w .GBzrAVkiQXaBkDE2uQ8Xg ._2_izzybMx8aorM_ZbFo11j ._2v7LTNNL3WXZMY-HCrh1c-._1ML75w3VWlWFT6gp0mPy-I{font-weight:700;background:#e2e2e2!important}._23A3sdaWti9Ol9m7dL9O2w .GBzrAVkiQXaBkDE2uQ8Xg ._2_izzybMx8aorM_ZbFo11j ._2v7LTNNL3WXZMY-HCrh1c-._1ML75w3VWlWFT6gp0mPy-I._35GAJixm6g6bl71l46O0UG{border-bottom:2px solid #aaa}._23A3sdaWti9Ol9m7dL9O2w .GBzrAVkiQXaBkDE2uQ8Xg ._2_izzybMx8aorM_ZbFo11j ._2v7LTNNL3WXZMY-HCrh1c-._1ML75w3VWlWFT6gp0mPy-I._2ld6mbT1VM0pQyUMJhdwAe{border-top:2px solid #aaa}._23A3sdaWti9Ol9m7dL9O2w ._12imnjZgUDcLCaDbedTfY3{padding:5px 10px;border-top:1px solid #999;background-color:#e6e6e6;text-align:right;color:#555;font-weight:700;white-space:nowrap;-ms-user-select:none;user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}._23A3sdaWti9Ol9m7dL9O2w ._12imnjZgUDcLCaDbedTfY3 ._3cmi0L9nQKktQGhueJdcet{box-sizing:border-box;width:calc(\"100% + 20px\");margin:-5px -10px 5px;text-align:left;background:#f3f3f3!important;border-bottom:1px solid #aaa;border-top:1px solid #aaa;overflow:hidden}._23A3sdaWti9Ol9m7dL9O2w ._12imnjZgUDcLCaDbedTfY3 ._3cmi0L9nQKktQGhueJdcet ._2v7LTNNL3WXZMY-HCrh1c-{background:#f3f3f3!important}._23A3sdaWti9Ol9m7dL9O2w ._12imnjZgUDcLCaDbedTfY3 ._3cmi0L9nQKktQGhueJdcet ._2v7LTNNL3WXZMY-HCrh1c- ._1ojFqidpFkrj3My_wA0zxt{display:none}._23A3sdaWti9Ol9m7dL9O2w ._12imnjZgUDcLCaDbedTfY3 ._3cmi0L9nQKktQGhueJdcet:only-child{margin-bottom:-5px;border-bottom:none}._23A3sdaWti9Ol9m7dL9O2w ._12imnjZgUDcLCaDbedTfY3 ._3WG1GVfImkWPKFaByFEhaS{margin:0 7px}._23A3sdaWti9Ol9m7dL9O2w ._12imnjZgUDcLCaDbedTfY3 ._2piaosnvHmqUAcuvCXHlSN{display:inline-block;margin:0 2px;padding:2px 5px;border:1px solid #aaa;border-radius:3px;background:hsla(0,0%,100%,.2);color:#555;font-family:inherit;font-weight:inherit;font-size:inherit}._23A3sdaWti9Ol9m7dL9O2w ._12imnjZgUDcLCaDbedTfY3 ._2piaosnvHmqUAcuvCXHlSN._33dsM2Pn_Sa15GQ6WCn34T{color:#d00}._23A3sdaWti9Ol9m7dL9O2w ._12imnjZgUDcLCaDbedTfY3 ._2piaosnvHmqUAcuvCXHlSN:disabled{opacity:.5}._23A3sdaWti9Ol9m7dL9O2w ._12imnjZgUDcLCaDbedTfY3 ._2piaosnvHmqUAcuvCXHlSN:not(._1D593Qb2jjBxdoLXYhvZvh):hover{cursor:pointer;background:rgba(0,0,0,.2);color:#fff}._23A3sdaWti9Ol9m7dL9O2w ._1ojFqidpFkrj3My_wA0zxt{position:absolute;right:0;top:0;bottom:0;width:5px}._23A3sdaWti9Ol9m7dL9O2w ._1ojFqidpFkrj3My_wA0zxt._3wHo6u4_Y0p7904XuoRbkK{left:0;right:auto}._23A3sdaWti9Ol9m7dL9O2w ._1ojFqidpFkrj3My_wA0zxt:hover{cursor:ew-resize}._23A3sdaWti9Ol9m7dL9O2w ._3VaEe1NDOxAhRnrB3mQz40{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;top:0;left:0;z-index:3;height:100%;width:100%;background:rgba(0,0,0,.4);text-align:center}._23A3sdaWti9Ol9m7dL9O2w ._3VaEe1NDOxAhRnrB3mQz40 ._1ZAobCGkJsO0sLv9PQfzW6{display:inline-block;margin:0 auto;padding:10px 20px;border-radius:10px;background:#fff;font-weight:700;font-size:16px}._23A3sdaWti9Ol9m7dL9O2w ._3VaEe1NDOxAhRnrB3mQz40 ._1ZAobCGkJsO0sLv9PQfzW6._6y4wzTvly_MwN1hQi3flo{border:4px solid #333;color:#000}._23A3sdaWti9Ol9m7dL9O2w ._3VaEe1NDOxAhRnrB3mQz40 ._1ZAobCGkJsO0sLv9PQfzW6._1nCY03KrGjHXtBIlGPjsfR{border:4px solid #d00;color:#590000}._2v7LTNNL3WXZMY-HCrh1c-{position:relative;box-sizing:border-box;min-height:22px;background-color:#fff}._2v7LTNNL3WXZMY-HCrh1c-.IqZOqnNCZaedmERsADVIw{background-color:#efefef}._2v7LTNNL3WXZMY-HCrh1c-._2hQCaEzosZ_xjbNhsLVFUE:hover{background-color:#bbb;cursor:pointer}._2v7LTNNL3WXZMY-HCrh1c-._3PsmGjk7IMEHuu9Jg_upBp{background-color:#9abcea}._2v7LTNNL3WXZMY-HCrh1c-._3PsmGjk7IMEHuu9Jg_upBp:hover{background-color:#769bcc;cursor:pointer}._2v7LTNNL3WXZMY-HCrh1c-._2r33c4RS9ZufQJTfw8QRjO{border:1px solid #000;background:#fff}._2v7LTNNL3WXZMY-HCrh1c-.F6TS0epUJdy-qSwKH6Kg-{position:absolute;border-top:1px solid #aaa;border-bottom:1px solid #aaa;pointer-events:none;z-index:2}._2v7LTNNL3WXZMY-HCrh1c- .pUn1FxHomUwQCdYs9CoOE{position:absolute;right:0;bottom:0;left:0;height:5px}._2v7LTNNL3WXZMY-HCrh1c- .pUn1FxHomUwQCdYs9CoOE._3wHo6u4_Y0p7904XuoRbkK{top:0;bottom:auto}._2v7LTNNL3WXZMY-HCrh1c- .pUn1FxHomUwQCdYs9CoOE:hover{cursor:ns-resize}._2v7LTNNL3WXZMY-HCrh1c- ._2VwCVyUqe3k19zXWfIA3J7{display:inline-block;position:absolute;background-color:inherit;z-index:1}._2v7LTNNL3WXZMY-HCrh1c- ._2VwCVyUqe3k19zXWfIA3J7._2HY3bh5oi1jgxQaAKN7GN6{border-right:2px solid #aaa}._2v7LTNNL3WXZMY-HCrh1c- ._2VwCVyUqe3k19zXWfIA3J7._2bLXyI3vZvpFluyT8VlFq4{border-left:2px solid #aaa}._2v7LTNNL3WXZMY-HCrh1c- .vj-_8EiF_8Aq-Fiz96Alh{box-sizing:border-box;padding:5px;border-top:1px solid #aaa;border-bottom:1px solid #aaa}._2v7LTNNL3WXZMY-HCrh1c- .vj-_8EiF_8Aq-Fiz96Alh:empty{display:none}._2v7LTNNL3WXZMY-HCrh1c- .vj-_8EiF_8Aq-Fiz96Alh table{font-size:14px}._2v7LTNNL3WXZMY-HCrh1c- .vj-_8EiF_8Aq-Fiz96Alh table tr td{position:relative}._2v7LTNNL3WXZMY-HCrh1c- .vj-_8EiF_8Aq-Fiz96Alh table tr td:first-of-type{padding-right:10px}._2v7LTNNL3WXZMY-HCrh1c- ._2O6AjZq5O0BG__NTOoB-N5{display:inline-block;position:relative;box-sizing:border-box;padding:4px;border-right:1px solid #aaa;vertical-align:middle;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}._2v7LTNNL3WXZMY-HCrh1c- ._2O6AjZq5O0BG__NTOoB-N5._2FIv9UJ5QDLMIhq2X_hzwn{border:1px solid #1d68cd;padding:0}._2v7LTNNL3WXZMY-HCrh1c- ._2O6AjZq5O0BG__NTOoB-N5._2FIv9UJ5QDLMIhq2X_hzwn input,._2v7LTNNL3WXZMY-HCrh1c- ._2O6AjZq5O0BG__NTOoB-N5._2FIv9UJ5QDLMIhq2X_hzwn select{border:1px;background:transparent}._2v7LTNNL3WXZMY-HCrh1c- ._2O6AjZq5O0BG__NTOoB-N5._3frif-sqX4uZco4Ajyq2W9{border:1px solid #d00}._2v7LTNNL3WXZMY-HCrh1c- ._2O6AjZq5O0BG__NTOoB-N5._3frif-sqX4uZco4Ajyq2W9 input,._2v7LTNNL3WXZMY-HCrh1c- ._2O6AjZq5O0BG__NTOoB-N5._3frif-sqX4uZco4Ajyq2W9 select{border:1px;background:transparent;color:#d00}._2v7LTNNL3WXZMY-HCrh1c- ._2O6AjZq5O0BG__NTOoB-N5:first-child ._1ojFqidpFkrj3My_wA0zxt._3wHo6u4_Y0p7904XuoRbkK{display:none}._2v7LTNNL3WXZMY-HCrh1c- ._2O6AjZq5O0BG__NTOoB-N5._2NVx0q-HwqrM9EfFiwzdA-{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}._2v7LTNNL3WXZMY-HCrh1c- ._2O6AjZq5O0BG__NTOoB-N5._2NVx0q-HwqrM9EfFiwzdA- ._2VdeEm6uJ880pUUwPk3HsT{width:80%}._2v7LTNNL3WXZMY-HCrh1c- ._2O6AjZq5O0BG__NTOoB-N5._2NVx0q-HwqrM9EfFiwzdA- ._2VdeEm6uJ880pUUwPk3HsT ._3RGrtzAhE-R-qOTL3-LmkB{width:100%;height:3px;margin-top:2px;background:#666}._2v7LTNNL3WXZMY-HCrh1c- ._2O6AjZq5O0BG__NTOoB-N5 ._3FOcgbBjQinIgHq-REZZAg{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none;height:15px;width:15px;border-radius:20px;background:#666;color:#fff;font-weight:700;font-size:1.1em}._2v7LTNNL3WXZMY-HCrh1c- ._2O6AjZq5O0BG__NTOoB-N5 ._3FOcgbBjQinIgHq-REZZAg:hover{opacity:.7}._2v7LTNNL3WXZMY-HCrh1c- ._2O6AjZq5O0BG__NTOoB-N5 ._3FOcgbBjQinIgHq-REZZAg._1IJ7xnjgXK-uNjqTb36C7g ._2zONRq0TnC2XOPZSD3frv_{display:initial}._2v7LTNNL3WXZMY-HCrh1c- ._2O6AjZq5O0BG__NTOoB-N5 ._3FOcgbBjQinIgHq-REZZAg._1IJ7xnjgXK-uNjqTb36C7g ._10da_84RZM4WuoUGbNWpxu,._2v7LTNNL3WXZMY-HCrh1c- ._2O6AjZq5O0BG__NTOoB-N5 ._3FOcgbBjQinIgHq-REZZAg ._2zONRq0TnC2XOPZSD3frv_{display:none}._2v7LTNNL3WXZMY-HCrh1c-._1N8e0-ZYyMWmLEXDTWw8yZ{box-sizing:border-box;border-bottom:1px solid #999;border-right:1px solid #aaa;border-top:1px solid #999;padding:5px;padding-left:10px;background:#ccc;font-weight:700;min-width:100%}._2v7LTNNL3WXZMY-HCrh1c-._1N8e0-ZYyMWmLEXDTWw8yZ:hover{cursor:pointer;background-color:rgba(0,0,0,.1)}._2v7LTNNL3WXZMY-HCrh1c-._1N8e0-ZYyMWmLEXDTWw8yZ._25dKsR8xKyA55AispS_uL7 ._3R6vqupQkifYTk1J8lIlu_{margin-right:10px;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid #666;border-bottom:0}._2v7LTNNL3WXZMY-HCrh1c-._1N8e0-ZYyMWmLEXDTWw8yZ._275vbxa1U3u1Ii50JNFCf5 ._3R6vqupQkifYTk1J8lIlu_{margin-left:20px}._2v7LTNNL3WXZMY-HCrh1c-._1N8e0-ZYyMWmLEXDTWw8yZ._1cxqTXEpdKYV7HKJ_cA5e2 ._3R6vqupQkifYTk1J8lIlu_{margin-left:40px}._2v7LTNNL3WXZMY-HCrh1c-._1N8e0-ZYyMWmLEXDTWw8yZ.dgDgS3eAfJDKbliHXNUTm ._3R6vqupQkifYTk1J8lIlu_{margin-left:60px}._2v7LTNNL3WXZMY-HCrh1c-._1N8e0-ZYyMWmLEXDTWw8yZ._2z4JhDr-v7OfIAYFaTw1hg ._3R6vqupQkifYTk1J8lIlu_{margin-left:80px}._2v7LTNNL3WXZMY-HCrh1c-._1N8e0-ZYyMWmLEXDTWw8yZ.d2CFN6DNYqcWA9t9c1KGD ._3R6vqupQkifYTk1J8lIlu_{margin-left:100px}._2v7LTNNL3WXZMY-HCrh1c-._1N8e0-ZYyMWmLEXDTWw8yZ ._3R6vqupQkifYTk1J8lIlu_{display:inline-block;width:0;height:0;margin-right:16px;border-top:6px solid transparent;border-bottom:6px solid transparent;border-right:0;border-left:6px solid #666;vertical-align:middle}._2v7LTNNL3WXZMY-HCrh1c-._1N8e0-ZYyMWmLEXDTWw8yZ span{margin-left:10px;color:#d00}\n", ""]);

// exports
exports.locals = {
	"tabulator": "_23A3sdaWti9Ol9m7dL9O2w",
	"tabulator-tableHolder": "GBzrAVkiQXaBkDE2uQ8Xg",
	"tabulator-table": "_2_izzybMx8aorM_ZbFo11j",
	"tabulator-block-select": "_1aQk6_LSUhCYFiE2dPRIQS",
	"tabulator-header": "_2Y9oOGaM602IF1Qlz8SwJE",
	"tabulator-col": "_1mBAQcrY_qeReg6RBAzQ8W",
	"tabulator-moving": "F6TS0epUJdy-qSwKH6Kg-",
	"tabulator-col-content": "_23GLIqEC19vw19rMJL4xHE",
	"tabulator-col-title": "_1YGyFWFRaoTTjhIrFb3fzl",
	"tabulator-title-editor": "_33Gc8EbH3e0JbkahvSiAp0",
	"tabulator-arrow": "_3R6vqupQkifYTk1J8lIlu_",
	"tabulator-col-group": "_25CS9WXre-QNaCVaKEFa1o",
	"tabulator-col-group-cols": "_1jHPe84-P1u3GwTYEe6XcE",
	"tabulator-col-resize-handle": "_1ojFqidpFkrj3My_wA0zxt",
	"prev": "_3wHo6u4_Y0p7904XuoRbkK",
	"ui-sortable-helper": "_2KP788JTKOoZwTIxu4xNkb",
	"tabulator-header-filter": "_3YEchhjqhiVWar-ONzOs37",
	"tabulator-sortable": "_1ArP0ynFbN-z9JukWtoinv",
	"tabulator-frozen": "_2VwCVyUqe3k19zXWfIA3J7",
	"tabulator-frozen-left": "_2HY3bh5oi1jgxQaAKN7GN6",
	"tabulator-frozen-right": "_2bLXyI3vZvpFluyT8VlFq4",
	"tabulator-calcs-holder": "_3cmi0L9nQKktQGhueJdcet",
	"tabulator-row": "_2v7LTNNL3WXZMY-HCrh1c-",
	"tabulator-frozen-rows-holder": "_2j1stoaHXf4s5aGDlI3hHA",
	"tabulator-placeholder": "_1PPPe2yaNFYMAEHkvW5144",
	"tabulator-calcs": "_1ML75w3VWlWFT6gp0mPy-I",
	"tabulator-calcs-top": "_35GAJixm6g6bl71l46O0UG",
	"tabulator-calcs-bottom": "_2ld6mbT1VM0pQyUMJhdwAe",
	"tabulator-footer": "_12imnjZgUDcLCaDbedTfY3",
	"tabulator-pages": "_3WG1GVfImkWPKFaByFEhaS",
	"tabulator-page": "_2piaosnvHmqUAcuvCXHlSN",
	"active": "_33dsM2Pn_Sa15GQ6WCn34T",
	"disabled": "_1D593Qb2jjBxdoLXYhvZvh",
	"tablulator-loader": "_3VaEe1NDOxAhRnrB3mQz40",
	"tabulator-loader-msg": "_1ZAobCGkJsO0sLv9PQfzW6",
	"tabulator-loading": "_6y4wzTvly_MwN1hQi3flo",
	"tabulator-error": "_1nCY03KrGjHXtBIlGPjsfR",
	"tabulator-row-even": "IqZOqnNCZaedmERsADVIw",
	"tabulator-selectable": "_2hQCaEzosZ_xjbNhsLVFUE",
	"tabulator-selected": "_3PsmGjk7IMEHuu9Jg_upBp",
	"tabulator-row-moving": "_2r33c4RS9ZufQJTfw8QRjO",
	"tabulator-row-resize-handle": "pUn1FxHomUwQCdYs9CoOE",
	"tabulator-responsive-collapse": "vj-_8EiF_8Aq-Fiz96Alh",
	"tabulator-cell": "_2O6AjZq5O0BG__NTOoB-N5",
	"tabulator-editing": "_2FIv9UJ5QDLMIhq2X_hzwn",
	"tabulator-validation-fail": "_3frif-sqX4uZco4Ajyq2W9",
	"tabulator-row-handle": "_2NVx0q-HwqrM9EfFiwzdA-",
	"tabulator-row-handle-box": "_2VdeEm6uJ880pUUwPk3HsT",
	"tabulator-row-handle-bar": "_3RGrtzAhE-R-qOTL3-LmkB",
	"tabulator-responsive-collapse-toggle": "_3FOcgbBjQinIgHq-REZZAg",
	"open": "_1IJ7xnjgXK-uNjqTb36C7g",
	"tabulator-responsive-collapse-toggle-close": "_2zONRq0TnC2XOPZSD3frv_",
	"tabulator-responsive-collapse-toggle-open": "_10da_84RZM4WuoUGbNWpxu",
	"tabulator-group": "_1N8e0-ZYyMWmLEXDTWw8yZ",
	"tabulator-group-visible": "_25dKsR8xKyA55AispS_uL7",
	"tabulator-group-level-1": "_275vbxa1U3u1Ii50JNFCf5",
	"tabulator-group-level-2": "_1cxqTXEpdKYV7HKJ_cA5e2",
	"tabulator-group-level-3": "dgDgS3eAfJDKbliHXNUTm",
	"tabulator-group-level-4": "_2z4JhDr-v7OfIAYFaTw1hg",
	"tabulator-group-level-5": "d2CFN6DNYqcWA9t9c1KGD"
};

/***/ }),

/***/ "./panel/asset-man-company/module.ts":
/*!*******************************************!*\
  !*** ./panel/asset-man-company/module.ts ***!
  \*******************************************/
/*! exports provided: PanelCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelCtrl", function() { return RmsAlarmRulePanelCtrl; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-ui */ "../node_modules/jquery-ui/ui/widget.js");
/* harmony import */ var jquery_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_tabulator_dist_js_tabulator_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery.tabulator/dist/js/tabulator.min */ "../node_modules/jquery.tabulator/dist/js/tabulator.min.js");
/* harmony import */ var jquery_tabulator_dist_js_tabulator_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_tabulator_dist_js_tabulator_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grafana/app/plugins/sdk */ "grafana/app/plugins/sdk");
/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



//import style from 'jquery.tabulator/dist/css/tabulator.min.css';

Object(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_3__["loadPluginCss"])({
    dark: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.dark.css',
    light: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.light.css'
});
Object(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_3__["loadPluginCss"])({
    dark: 'plugins/proj-rms-plugin-app/panel/tabulator-table/css/tabulator.min.css',
    light: 'plugins/proj-rms-plugin-app/panel/tabulator-table/css/tabulator.min.css'
});
var template = __webpack_require__(/*! ./templet.html */ "./panel/asset-man-company/templet.html");
var style = __webpack_require__(/*! jquery.tabulator/dist/css/tabulator.min.css */ "../node_modules/jquery.tabulator/dist/css/tabulator.min.css");
var RmsAlarmRulePanelCtrl = /** @class */ (function (_super) {
    __extends(RmsAlarmRulePanelCtrl, _super);
    function RmsAlarmRulePanelCtrl($scope, $injector, $http, $location, uiSegmentSrv, annotationsSrv) {
        var _this = _super.call(this, $scope, $injector) || this;
        _this.divID = 'table-rms-' + _this.panel.id;
        _this.events.on('init-edit-mode', _this.onInitEditMode.bind(_this));
        _this.events.on('render', _this.onRender.bind(_this));
        _this.events.on('panel-initialized', _this.onRender.bind(_this));
        return _this;
    }
    RmsAlarmRulePanelCtrl.prototype.OnInitialized = function () {
        console.log("panel initialized!");
        return Promise.apply(this.createTable());
    };
    RmsAlarmRulePanelCtrl.prototype.onInitEditMode = function () {
    };
    RmsAlarmRulePanelCtrl.prototype.createTable = function () {
        console.log("create table ...");
        var tabledata = [
            { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "" },
            { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
            { id: 3, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982" },
            { id: 4, name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980" },
            { id: 5, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
        ];
        this.container.tabulator("setData", tabledata);
        this.initalized = true;
    };
    RmsAlarmRulePanelCtrl.prototype.OnDraw = function () {
        console.log("raw table ...; skip!");
        //$("#example-table").tabulator("refresh");
        this.createTable();
    };
    RmsAlarmRulePanelCtrl.prototype.onRender = function () {
        console.log("render table ...");
        if (!this.container) {
            console.log("container not found!");
            return Promise.reject({});
        }
        if (!this.initalized) {
            console.log("table is not initialized, yet!");
            return Promise.resolve(this.createTable());
        }
        if (this.container && this.initalized) {
            console.log("draw the table for render data.");
            return Promise.resolve(this.OnDraw());
        }
        return Promise.resolve({});
    };
    RmsAlarmRulePanelCtrl.prototype.link = function (scope, elem, attrs, ctrl) {
        console.log("find container ...");
        var t = elem.find('.thingspin-table')[0];
        t.id = this.divID;
        this.container = jquery__WEBPACK_IMPORTED_MODULE_0___default()(t);
        this.dataTable = this.container.tabulator({
            height: 205,
            layout: "fitColumns",
            columns: [
                { title: "Name", field: "name", width: 150 },
                { title: "Age", field: "age", align: "left", formatter: "progress" },
                { title: "Favourite Color", field: "col" },
                { title: "Date Of Birth", field: "dob", sorter: "date", align: "center" },
            ],
            rowClick: function (e, row) {
                alert("Row " + row.getData().id + " Clicked!!!!");
            },
        });
    };
    RmsAlarmRulePanelCtrl.template = template;
    return RmsAlarmRulePanelCtrl;
}(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_3__["MetricsPanelCtrl"]));



/***/ }),

/***/ "./panel/asset-man-company/templet.html":
/*!**********************************************!*\
  !*** ./panel/asset-man-company/templet.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n    <div class=\"gf-form-group\" style=\"margin-top:2%;\">\r\n        <div class=\"gf-form\">\r\n            <span class=\"gf-form-label\">검사 항목</span>\r\n            <div class=\"gf-form--grow\">\r\n                <input class=\"gf-form-input\" type=\"text\" ng-model=\"inspectionName\" />\r\n            </div>\r\n            &nbsp;&nbsp;&nbsp;&nbsp;\r\n            <div class=\"gf-form--grow\">\r\n                <input class=\"gf-form-input\" type=\"text\" ng-model=\"inspectionField\" />\r\n            </div>\r\n            &nbsp;&nbsp;&nbsp;&nbsp;\r\n            <div class=\"gf-form--grow\" style='.gf-form-button-row = 0;'>\r\n                    <button type=\"submit\" class=\"btn btn-success\" ng-click=\"ctrl.addInspectionItem(inspectionName, inspectionField)\">등록</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n    </div>\r\n    <div class=\"thingspin-table\"></div>\r\n</div>\r\n\r\n";

/***/ }),

/***/ "grafana/app/plugins/sdk":
/*!**********************************!*\
  !*** external "app/plugins/sdk" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map