define(["app/plugins/sdk"], function(__WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./panel/tabulator-table/module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../node_modules/jquery/dist/jquery.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/thingspin/2018/thingspin/v2/branch/thingspin/src/github.com/thingspin/thingspin/node_modules/jquery/dist/jquery.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


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
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ "../../../../node_modules/jquery/dist/jquery.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ "../../../../node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "../node_modules/jquery-ui/ui/version.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ "../node_modules/jquery.tabulator/dist/js/tabulator.min.js":
/*!*****************************************************************!*\
  !*** ../node_modules/jquery.tabulator/dist/js/tabulator.min.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* Tabulator v3.5.1 (c) Oliver Folkerd */
var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "../../../../node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
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

/***/ "./panel/tabulator-table/module.ts":
/*!*****************************************!*\
  !*** ./panel/tabulator-table/module.ts ***!
  \*****************************************/
/*! exports provided: PanelCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelCtrl", function() { return RmsAlarmRulePanelCtrl; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../../../../node_modules/jquery/dist/jquery.js");
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
var template = __webpack_require__(/*! ./templet.html */ "./panel/tabulator-table/templet.html");
// const style = require("jquery.tabulator/dist/css/tabulator.min.css");
var RmsAlarmRulePanelCtrl = /** @class */ (function (_super) {
    __extends(RmsAlarmRulePanelCtrl, _super);
    function RmsAlarmRulePanelCtrl($scope, $injector) {
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

/***/ "./panel/tabulator-table/templet.html":
/*!********************************************!*\
  !*** ./panel/tabulator-table/templet.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"thingspin-table\"></div>";

/***/ }),

/***/ "grafana/app/plugins/sdk":
/*!**********************************!*\
  !*** external "app/plugins/sdk" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map