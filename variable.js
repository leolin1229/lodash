/*************************************************************global variable start*************************************************************/
/** Used as a safe reference for `undefined` in pre-ES5 environments. */
/** 在pre-ES5环境中undefined不是关键字，可以被赋值 **/
var undefined;

/** Used as the semantic version number. */
/** 版本号 **/
var VERSION = '3.10.1';

/** Used to compose bitmasks for wrapper metadata. */
/** 位掩码（？） **/
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    CURRY_BOUND_FLAG = 4,
    CURRY_FLAG = 8,
    CURRY_RIGHT_FLAG = 16,
    PARTIAL_FLAG = 32,
    PARTIAL_RIGHT_FLAG = 64,
    ARY_FLAG = 128,
    REARG_FLAG = 256;

/** Used as default options for `_.trunc`. */
/** _.trunc截断字符串函数的默认选项 **/
var DEFAULT_TRUNC_LENGTH = 30,
    DEFAULT_TRUNC_OMISSION = '...';

/** Used to detect when a function becomes hot. */
var HOT_COUNT = 150,
    HOT_SPAN = 16;

/** Used as the size to enable large array optimizations. */
/** 大数组优化（？） **/
var LARGE_ARRAY_SIZE = 200;

/** Used to indicate the type of lazy iteratees. */
/** 指明懒迭代器类型（？） **/
var LAZY_FILTER_FLAG = 1,
    LAZY_MAP_FLAG = 2;

/** Used as the `TypeError` message for "Functions" methods. */
/** 函数的'TypeError'文本信息 **/
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as the internal argument placeholder. */
/** 内部参数占位符 **/
var PLACEHOLDER = '__lodash_placeholder__';

/** `Object#toString` result references. */
/** 保存Object.prototype.toString的各种结果 **/
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match empty string literals in compiled template source. */
/** 对已编译源码进行匹配空串的正则 **/
var reEmptyStringLeading = /\b__p \+= '';/g,
    reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
    reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

/** Used to match HTML entities and HTML characters. */
/** 用于匹配HTML实体和HTML字符的正则 **/
var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
    reUnescapedHtml = /[&<>"'`]/g,
    // source 属性返回一个值为当前正则表达式对象的模式文本的字符串，该字符串不会包含正则字面量两边的斜杠以及任何的标志字符。
    reHasEscapedHtml = RegExp(reEscapedHtml.source),
    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/** Used to match template delimiters. */
/** 匹配模板定界符 **/
var reEscape = /<%-([\s\S]+?)%>/g,
    reEvaluate = /<%([\s\S]+?)%>/g,
    reInterpolate = /<%=([\s\S]+?)%>/g;

/** Used to match property names within property paths. */
/** 匹配属性路径内的属性名（？） **/
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

/**
 * Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns)
 * and those outlined by [`EscapeRegExpPattern`](http://ecma-international.org/ecma-262/6.0/#sec-escaperegexppattern).
 */
var reRegExpChars = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
    reHasRegExpChars = RegExp(reRegExpChars.source);

/** Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks). */
var reComboMark = /[\u0300-\u036f\ufe20-\ufe23]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to match [ES template delimiters](http://ecma-international.org/ecma-262/6.0/#sec-template-literal-lexical-components). */
var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect hexadecimal string values. */
var reHasHexPrefix = /^0[xX]/;

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/** Used to match latin-1 supplementary letters (excluding mathematical operators). */
var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;

/** Used to ensure capturing order of template delimiters. */
var reNoMatch = /($^)/;

/** Used to match unescaped characters in compiled string literals. */
var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

/** Used to match words to create compound words. */
var reWords = (function() {
  var upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
      lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+';

  return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
}());

/** Used to assign default `context` object properties. */
/** 默认上下文赋值 **/
var contextProps = [
  'Array', 'ArrayBuffer', 'Date', 'Error', 'Float32Array', 'Float64Array',
  'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Math', 'Number',
  'Object', 'Reflect', 'RegExp', 'Set', 'String', 'TypeError', 'Uint8Array',
  'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap', '_',
  'clearTimeout', 'isFinite', 'parseFloat', 'parseInt', 'setTimeout'
];

/** Used to make template sourceURLs easier to identify. */
var templateCounter = -1;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dateTag] = typedArrayTags[errorTag] =
typedArrayTags[funcTag] = typedArrayTags[mapTag] =
typedArrayTags[numberTag] = typedArrayTags[objectTag] =
typedArrayTags[regexpTag] = typedArrayTags[setTag] =
typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
cloneableTags[dateTag] = cloneableTags[float32Tag] =
cloneableTags[float64Tag] = cloneableTags[int8Tag] =
cloneableTags[int16Tag] = cloneableTags[int32Tag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[stringTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[mapTag] = cloneableTags[setTag] =
cloneableTags[weakMapTag] = false;

/** Used to map latin-1 supplementary letters to basic latin letters. */
var deburredLetters = {
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcC': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xeC': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss'
};

/** Used to map characters to HTML entities. */
/** HTML字符和实体映射 **/
var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '`': '&#96;'
};

/** Used to map HTML entities to characters. */
var htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&#96;': '`'
};

/** Used to determine if values are of the language type `Object`. */
var objectTypes = {
  'function': true,
  'object': true
};

/** Used to escape characters for inclusion in compiled regexes. */
var regexpEscapes = {
  '0': 'x30', '1': 'x31', '2': 'x32', '3': 'x33', '4': 'x34',
  '5': 'x35', '6': 'x36', '7': 'x37', '8': 'x38', '9': 'x39',
  'A': 'x41', 'B': 'x42', 'C': 'x43', 'D': 'x44', 'E': 'x45', 'F': 'x46',
  'a': 'x61', 'b': 'x62', 'c': 'x63', 'd': 'x64', 'e': 'x65', 'f': 'x66',
  'n': 'x6e', 'r': 'x72', 't': 'x74', 'u': 'x75', 'v': 'x76', 'x': 'x78'
};

/** Used to escape characters for inclusion in compiled string literals. */
var stringEscapes = {
  '\\': '\\',
  "'": "'",
  '\n': 'n',
  '\r': 'r',
  '\u2028': 'u2028',
  '\u2029': 'u2029'
};

/** Detect free variable `exports`. */
/** 检测自由变量'exports' **/
var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType) ? exports : null;

/** Detect free variable `module`. */
/** 检测自由变量'module' **/
var freeModule = (objectTypes[typeof module] && module && !module.nodeType) ? module : null;

/** Detect free variable `global` from Node.js. */
/** 检测Node.js的自由变量'global' **/
var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

/** Detect free variable `self`. */
/** 检测自由变量'self' **/
var freeSelf = checkGlobal(objectTypes[typeof self] && self);

/** Detect free variable `window`. */
/** 检测自由变量'window' **/
var freeWindow = checkGlobal(objectTypes[typeof window] && window);

/** Detect the popular CommonJS extension `module.exports`. */
/** 检测CommonJS格式'module.exports' **/
var moduleExports = (freeModule && freeModule.exports === freeExports) ? freeExports : null;

/** Detect `this` as the global object. */
/** 检测全局'this' **/
var thisGlobal = checkGlobal(objectTypes[typeof this] && this);

/**
 * Used as a reference to the global object.
 * 创建名为root的全局对象引用
 * 
 * The `this` value is used if it's the global object to avoid Greasemonkey's
 * restricted `window` object, otherwise the `window` object is used.
 */
var root = freeGlobal || ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) || freeSelf || thisGlobal || Function('return this')();

/*************************************************************global variable end*************************************************************/


context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;

/** Native constructor references. */
var Array = context.Array,
    Date = context.Date,
    Error = context.Error,
    Function = context.Function,
    Math = context.Math,
    Number = context.Number,
    Object = context.Object,
    RegExp = context.RegExp,
    String = context.String,
    TypeError = context.TypeError;

/** Used for native method references. */
var arrayProto = Array.prototype,
    objectProto = Object.prototype,
    stringProto = String.prototype;

/** Used to resolve the decompiled source of functions. */
/**  用来解决函数反编译 **/
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
/* 检测对象用有自身属性 */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to generate unique IDs. */
/* 生成唯一ID（？） */
var idCounter = 0;

/** Used to infer the `Object` constructor. */
var objCtorString = fnToString.call(Object);

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to restore the original `_` reference in `_.noConflict`. */
var oldDash = root._;

/** Used to detect if a method is native. */
/* 检测原生方法 */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Native value references. */
var ArrayBuffer = context.ArrayBuffer,
    Reflect = context.Reflect,
    Set = getNative(context, 'Set'),
    Uint8Array = context.Uint8Array,
    WeakMap = getNative(context, 'WeakMap'),
    clearTimeout = context.clearTimeout,
    enumerate = Reflect ? Reflect.enumerate : undefined,
    getPrototypeOf = Object.getPrototypeOf,
    parseFloat = context.parseFloat,
    pow = Math.pow,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    setTimeout = context.setTimeout,
    splice = arrayProto.splice;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeCreate = getNative(Object, 'create'),
    nativeFloor = Math.floor,
    nativeIsFinite = context.isFinite,
    nativeKeys = Object.keys,
    nativeMax = Math.max,
    nativeMin = Math.min,
    nativeParseInt = context.parseInt,
    nativeRandom = Math.random;

/** Used as references for `-Infinity` and `Infinity`. */
var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
    POSITIVE_INFINITY = Number.POSITIVE_INFINITY;

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295,
    MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
    HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap;

/** Used to lookup unminified function names. */
var realNames = {};