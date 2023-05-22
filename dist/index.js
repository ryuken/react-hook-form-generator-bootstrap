var $aSjVs$reactjsxruntime = require("react/jsx-runtime");
var $aSjVs$react = require("react");

var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire8cf9"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire8cf9"] = parcelRequire;
}
parcelRequire.register("CkFUA", function(module, exports) {
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the size to enable large array optimizations. */ var LARGE_ARRAY_SIZE = 200;
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = "__lodash_hash_undefined__";
/** Used to detect hot functions by number of calls within a span of milliseconds. */ var HOT_COUNT = 800, HOT_SPAN = 16;
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/** `Object#toString` result references. */ var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/** Used to identify `toStringTag` values of typed arrays. */ var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/** Detect free variable `global` from Node.js. */ var freeGlobal = typeof $parcel$global == "object" && $parcel$global && $parcel$global.Object === Object && $parcel$global;
/** Detect free variable `self`. */ var freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function("return this")();
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */ var nodeUtil = function() {
    try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) return types;
        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {}
}();
/* Node.js helper references. */ var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */ function apply(func, thisArg, args) {
    switch(args.length){
        case 0:
            return func.call(thisArg);
        case 1:
            return func.call(thisArg, args[0]);
        case 2:
            return func.call(thisArg, args[0], args[1]);
        case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
}
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n)result[index] = iteratee(index);
    return result;
}
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ function baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function getValue(object, key) {
    return object == null ? undefined : object[key];
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
/** Used for built-in method references. */ var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */ var coreJsData = root["__core-js_shared__"];
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
}();
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Used to infer the `Object` constructor. */ var objectCtorString = funcToString.call(Object);
/** Used to detect if a method is native. */ var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
/** Built-in value references. */ var Buffer = moduleExports ? root.Buffer : undefined, Symbol = root.Symbol, Uint8Array = root.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, symToStringTag = Symbol ? Symbol.toStringTag : undefined;
var defineProperty = function() {
    try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
    } catch (e) {}
}();
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined, nativeMax = Math.max, nativeNow = Date.now;
/* Built-in method references that are verified to be native. */ var Map = getNative(root, "Map"), nativeCreate = getNative(Object, "create");
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */ var baseCreate = function() {
    function object() {}
    return function(proto) {
        if (!isObject(proto)) return {};
        if (objectCreate) return objectCreate(proto);
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
    };
}();
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
}
// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else splice.call(data, index, 1);
    --this.size;
    return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
        ++this.size;
        data.push([
            key,
            value
        ]);
    } else data[index][1] = value;
    return this;
}
// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        "hash": new Hash,
        "map": new (Map || ListCache),
        "string": new Hash
    };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet(key) {
    return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas(key) {
    return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
}
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */ function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
}
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
}
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function stackGet(key) {
    return this.__data__.get(key);
}
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function stackHas(key) {
    return this.__data__.has(key);
}
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */ function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            this.size = ++data.size;
            return this;
        }
        data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
}
// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for(var key in value)if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length)))) result.push(key);
    return result;
}
/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function assignMergeValue(object, key, value) {
    if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) baseAssignValue(object, key, value);
}
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) baseAssignValue(object, key, value);
}
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if (eq(array[length][0], key)) return length;
    }
    return -1;
}
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function baseAssignValue(object, key, value) {
    if (key == "__proto__" && defineProperty) defineProperty(object, key, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
    });
    else object[key] = value;
}
/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */ var baseFor = createBaseFor();
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) return value === undefined ? undefinedTag : nullTag;
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) return false;
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeysIn(object) {
    if (!isObject(object)) return nativeKeysIn(object);
    var isProto = isPrototype(object), result = [];
    for(var key in object)if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) result.push(key);
    return result;
}
/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */ function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) return;
    baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack);
        if (isObject(srcValue)) baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        else {
            var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined;
            if (newValue === undefined) newValue = srcValue;
            assignMergeValue(object, key, newValue);
        }
    }, keysIn);
}
/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */ function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
    if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined;
    var isCommon = newValue === undefined;
    if (isCommon) {
        var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
            if (isArray(objValue)) newValue = objValue;
            else if (isArrayLikeObject(objValue)) newValue = copyArray(objValue);
            else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
            } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
            } else newValue = [];
        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            newValue = objValue;
            if (isArguments(objValue)) newValue = toPlainObject(objValue);
            else if (!isObject(objValue) || isFunction(objValue)) newValue = initCloneObject(srcValue);
        } else isCommon = false;
    }
    if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack["delete"](srcValue);
    }
    assignMergeValue(object, key, newValue);
}
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */ function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + "");
}
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */ var baseSetToString = !defineProperty ? identity : function(func, string) {
    return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
    });
};
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */ function cloneBuffer(buffer, isDeep) {
    if (isDeep) return buffer.slice();
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
}
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */ function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
}
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */ function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */ function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while(++index < length)array[index] = source[index];
    return array;
}
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */ function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1, length = props.length;
    while(++index < length){
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
        if (newValue === undefined) newValue = source[key];
        if (isNew) baseAssignValue(object, key, newValue);
        else assignValue(object, key, newValue);
    }
    return object;
}
/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */ function createAssigner(assigner) {
    return baseRest(function(object, sources) {
        var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined, guard = length > 2 ? sources[2] : undefined;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined : customizer;
            length = 1;
        }
        object = Object(object);
        while(++index < length){
            var source = sources[index];
            if (source) assigner(object, source, index, customizer);
        }
        return object;
    });
}
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */ function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while(length--){
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) break;
        }
        return object;
    };
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[symToStringTag] = tag;
        else delete value[symToStringTag];
    }
    return result;
}
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */ function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */ function isIterateeCall(value, index, object) {
    if (!isObject(object)) return false;
    var type = typeof index;
    if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) return eq(object[index], value);
    return false;
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
}
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function nativeKeysIn(object) {
    var result = [];
    if (object != null) for(var key in Object(object))result.push(key);
    return result;
}
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */ function overRest(func, start, transform) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0);
    return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while(++index < length)array[index] = args[start + index];
        index = -1;
        var otherArgs = Array(start + 1);
        while(++index < start)otherArgs[index] = args[index];
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
    };
}
/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function safeGet(object, key) {
    if (key === "constructor" && typeof object[key] === "function") return;
    if (key == "__proto__") return;
    return object[key];
}
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */ var setToString = shortOut(baseSetToString);
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */ function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
            if (++count >= HOT_COUNT) return arguments[0];
        } else count = 0;
        return func.apply(undefined, arguments);
    };
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {}
        try {
            return func + "";
        } catch (e) {}
    }
    return "";
}
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function eq(value, other) {
    return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ var isArguments = baseIsArguments(function() {
    return arguments;
}()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */ function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
}
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || stubFalse;
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    if (!isObject(value)) return false;
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
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
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == "object";
}
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */ function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) return false;
    var proto = getPrototype(value);
    if (proto === null) return true;
    var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */ var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */ function toPlainObject(value) {
    return copyObject(value, keysIn(value));
}
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */ function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */ var merge = createAssigner(function(object, source, srcIndex) {
    baseMerge(object, source, srcIndex);
});
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */ function constant(value) {
    return function() {
        return value;
    };
}
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */ function identity(value) {
    return value;
}
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ function stubFalse() {
    return false;
}
module.exports = merge;

});

parcelRequire.register("2VcHj", function(module, exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $220ac117dcb01139$var$ReactIs, $220ac117dcb01139$var$throwOnDirectAccess;

// By explicitly using `prop-types` you are opting into new production behavior.
// http://fb.me/prop-types-in-prod
module.exports = (parcelRequire("kiWov"))();

});
parcelRequire.register("kiWov", function(module, exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";

var $kT4n2 = parcelRequire("kT4n2");
function $ec82c8f24bb7d0a9$var$emptyFunction() {}
function $ec82c8f24bb7d0a9$var$emptyFunctionWithReset() {}
$ec82c8f24bb7d0a9$var$emptyFunctionWithReset.resetWarningCache = $ec82c8f24bb7d0a9$var$emptyFunction;
module.exports = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === $kT4n2) // It is still safe when called from React.
        return;
        var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        err.name = "Invariant Violation";
        throw err;
    }
    shim.isRequired = shim;
    function getShim() {
        return shim;
    }
    // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
        array: shim,
        bigint: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: $ec82c8f24bb7d0a9$var$emptyFunctionWithReset,
        resetWarningCache: $ec82c8f24bb7d0a9$var$emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};

});
parcelRequire.register("kT4n2", function(module, exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
var $f34c5597ed6a0491$var$ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
module.exports = $f34c5597ed6a0491$var$ReactPropTypesSecret;

});



parcelRequire.register("24dTS", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $f94aedf83bd77a6c$export$2e2bcd8739ae039);
/*!
 * Signature Pad v2.3.2
 * https://github.com/szimek/signature_pad
 *
 * Copyright 2017 Szymon Nowak
 * Released under the MIT license
 *
 * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
 * http://corner.squareup.com/2012/07/smoother-signatures.html
 *
 * Implementation of interpolation using cubic Bézier curves is taken from:
 * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
 *
 * Algorithm for approximated length of a Bézier curve is taken from:
 * http://www.lemoda.net/maths/bezier-length/index.html
 *
 */ function $f94aedf83bd77a6c$var$Point(x, y, time) {
    this.x = x;
    this.y = y;
    this.time = time || new Date().getTime();
}
$f94aedf83bd77a6c$var$Point.prototype.velocityFrom = function(start) {
    return this.time !== start.time ? this.distanceTo(start) / (this.time - start.time) : 1;
};
$f94aedf83bd77a6c$var$Point.prototype.distanceTo = function(start) {
    return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
};
$f94aedf83bd77a6c$var$Point.prototype.equals = function(other) {
    return this.x === other.x && this.y === other.y && this.time === other.time;
};
function $f94aedf83bd77a6c$var$Bezier(startPoint, control1, control2, endPoint) {
    this.startPoint = startPoint;
    this.control1 = control1;
    this.control2 = control2;
    this.endPoint = endPoint;
}
// Returns approximated length.
$f94aedf83bd77a6c$var$Bezier.prototype.length = function() {
    var steps = 10;
    var length = 0;
    var px = void 0;
    var py = void 0;
    for(var i = 0; i <= steps; i += 1){
        var t = i / steps;
        var cx = this._point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
        var cy = this._point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
        if (i > 0) {
            var xdiff = cx - px;
            var ydiff = cy - py;
            length += Math.sqrt(xdiff * xdiff + ydiff * ydiff);
        }
        px = cx;
        py = cy;
    }
    return length;
};
/* eslint-disable no-multi-spaces, space-in-parens */ $f94aedf83bd77a6c$var$Bezier.prototype._point = function(t, start, c1, c2, end) {
    return start * (1.0 - t) * (1.0 - t) * (1.0 - t) + 3.0 * c1 * (1.0 - t) * (1.0 - t) * t + 3.0 * c2 * (1.0 - t) * t * t + end * t * t * t;
};
/* eslint-disable */ // http://stackoverflow.com/a/27078401/815507
function $f94aedf83bd77a6c$var$throttle(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function later() {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };
    return function() {
        var now = Date.now();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) timeout = setTimeout(later, remaining);
        return result;
    };
}
function $f94aedf83bd77a6c$var$SignaturePad(canvas, options) {
    var self = this;
    var opts = options || {};
    this.velocityFilterWeight = opts.velocityFilterWeight || 0.7;
    this.minWidth = opts.minWidth || 0.5;
    this.maxWidth = opts.maxWidth || 2.5;
    this.throttle = "throttle" in opts ? opts.throttle : 16; // in miliseconds
    this.minDistance = "minDistance" in opts ? opts.minDistance : 5;
    if (this.throttle) this._strokeMoveUpdate = $f94aedf83bd77a6c$var$throttle($f94aedf83bd77a6c$var$SignaturePad.prototype._strokeUpdate, this.throttle);
    else this._strokeMoveUpdate = $f94aedf83bd77a6c$var$SignaturePad.prototype._strokeUpdate;
    this.dotSize = opts.dotSize || function() {
        return (this.minWidth + this.maxWidth) / 2;
    };
    this.penColor = opts.penColor || "black";
    this.backgroundColor = opts.backgroundColor || "rgba(0,0,0,0)";
    this.onBegin = opts.onBegin;
    this.onEnd = opts.onEnd;
    this._canvas = canvas;
    this._ctx = canvas.getContext("2d");
    this.clear();
    // We need add these inline so they are available to unbind while still having
    // access to 'self' we could use _.bind but it's not worth adding a dependency.
    this._handleMouseDown = function(event) {
        if (event.which === 1) {
            self._mouseButtonDown = true;
            self._strokeBegin(event);
        }
    };
    this._handleMouseMove = function(event) {
        if (self._mouseButtonDown) self._strokeMoveUpdate(event);
    };
    this._handleMouseUp = function(event) {
        if (event.which === 1 && self._mouseButtonDown) {
            self._mouseButtonDown = false;
            self._strokeEnd(event);
        }
    };
    this._handleTouchStart = function(event) {
        if (event.targetTouches.length === 1) {
            var touch = event.changedTouches[0];
            self._strokeBegin(touch);
        }
    };
    this._handleTouchMove = function(event) {
        // Prevent scrolling.
        event.preventDefault();
        var touch = event.targetTouches[0];
        self._strokeMoveUpdate(touch);
    };
    this._handleTouchEnd = function(event) {
        var wasCanvasTouched = event.target === self._canvas;
        if (wasCanvasTouched) {
            event.preventDefault();
            self._strokeEnd(event);
        }
    };
    // Enable mouse and touch event handlers
    this.on();
}
// Public methods
$f94aedf83bd77a6c$var$SignaturePad.prototype.clear = function() {
    var ctx = this._ctx;
    var canvas = this._canvas;
    ctx.fillStyle = this.backgroundColor;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this._data = [];
    this._reset();
    this._isEmpty = true;
};
$f94aedf83bd77a6c$var$SignaturePad.prototype.fromDataURL = function(dataUrl) {
    var _this = this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var image = new Image();
    var ratio = options.ratio || window.devicePixelRatio || 1;
    var width = options.width || this._canvas.width / ratio;
    var height = options.height || this._canvas.height / ratio;
    this._reset();
    image.src = dataUrl;
    image.onload = function() {
        _this._ctx.drawImage(image, 0, 0, width, height);
    };
    this._isEmpty = false;
};
$f94aedf83bd77a6c$var$SignaturePad.prototype.toDataURL = function(type) {
    var _canvas;
    switch(type){
        case "image/svg+xml":
            return this._toSVG();
        default:
            for(var _len = arguments.length, options = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)options[_key - 1] = arguments[_key];
            return (_canvas = this._canvas).toDataURL.apply(_canvas, [
                type
            ].concat(options));
    }
};
$f94aedf83bd77a6c$var$SignaturePad.prototype.on = function() {
    this._handleMouseEvents();
    this._handleTouchEvents();
};
$f94aedf83bd77a6c$var$SignaturePad.prototype.off = function() {
    this._canvas.removeEventListener("mousedown", this._handleMouseDown);
    this._canvas.removeEventListener("mousemove", this._handleMouseMove);
    document.removeEventListener("mouseup", this._handleMouseUp);
    this._canvas.removeEventListener("touchstart", this._handleTouchStart);
    this._canvas.removeEventListener("touchmove", this._handleTouchMove);
    this._canvas.removeEventListener("touchend", this._handleTouchEnd);
};
$f94aedf83bd77a6c$var$SignaturePad.prototype.isEmpty = function() {
    return this._isEmpty;
};
// Private methods
$f94aedf83bd77a6c$var$SignaturePad.prototype._strokeBegin = function(event) {
    this._data.push([]);
    this._reset();
    this._strokeUpdate(event);
    if (typeof this.onBegin === "function") this.onBegin(event);
};
$f94aedf83bd77a6c$var$SignaturePad.prototype._strokeUpdate = function(event) {
    var x = event.clientX;
    var y = event.clientY;
    var point = this._createPoint(x, y);
    var lastPointGroup = this._data[this._data.length - 1];
    var lastPoint = lastPointGroup && lastPointGroup[lastPointGroup.length - 1];
    var isLastPointTooClose = lastPoint && point.distanceTo(lastPoint) < this.minDistance;
    // Skip this point if it's too close to the previous one
    if (!(lastPoint && isLastPointTooClose)) {
        var _addPoint = this._addPoint(point), curve = _addPoint.curve, widths = _addPoint.widths;
        if (curve && widths) this._drawCurve(curve, widths.start, widths.end);
        this._data[this._data.length - 1].push({
            x: point.x,
            y: point.y,
            time: point.time,
            color: this.penColor
        });
    }
};
$f94aedf83bd77a6c$var$SignaturePad.prototype._strokeEnd = function(event) {
    var canDrawCurve = this.points.length > 2;
    var point = this.points[0]; // Point instance
    if (!canDrawCurve && point) this._drawDot(point);
    if (point) {
        var lastPointGroup = this._data[this._data.length - 1];
        var lastPoint = lastPointGroup[lastPointGroup.length - 1]; // plain object
        // When drawing a dot, there's only one point in a group, so without this check
        // such group would end up with exactly the same 2 points.
        if (!point.equals(lastPoint)) lastPointGroup.push({
            x: point.x,
            y: point.y,
            time: point.time,
            color: this.penColor
        });
    }
    if (typeof this.onEnd === "function") this.onEnd(event);
};
$f94aedf83bd77a6c$var$SignaturePad.prototype._handleMouseEvents = function() {
    this._mouseButtonDown = false;
    this._canvas.addEventListener("mousedown", this._handleMouseDown);
    this._canvas.addEventListener("mousemove", this._handleMouseMove);
    document.addEventListener("mouseup", this._handleMouseUp);
};
$f94aedf83bd77a6c$var$SignaturePad.prototype._handleTouchEvents = function() {
    // Pass touch events to canvas element on mobile IE11 and Edge.
    this._canvas.style.msTouchAction = "none";
    this._canvas.style.touchAction = "none";
    this._canvas.addEventListener("touchstart", this._handleTouchStart);
    this._canvas.addEventListener("touchmove", this._handleTouchMove);
    this._canvas.addEventListener("touchend", this._handleTouchEnd);
};
$f94aedf83bd77a6c$var$SignaturePad.prototype._reset = function() {
    this.points = [];
    this._lastVelocity = 0;
    this._lastWidth = (this.minWidth + this.maxWidth) / 2;
    this._ctx.fillStyle = this.penColor;
};
$f94aedf83bd77a6c$var$SignaturePad.prototype._createPoint = function(x, y, time) {
    var rect = this._canvas.getBoundingClientRect();
    return new $f94aedf83bd77a6c$var$Point(x - rect.left, y - rect.top, time || new Date().getTime());
};
$f94aedf83bd77a6c$var$SignaturePad.prototype._addPoint = function(point) {
    var points = this.points;
    var tmp = void 0;
    points.push(point);
    if (points.length > 2) {
        // To reduce the initial lag make it work with 3 points
        // by copying the first point to the beginning.
        if (points.length === 3) points.unshift(points[0]);
        tmp = this._calculateCurveControlPoints(points[0], points[1], points[2]);
        var c2 = tmp.c2;
        tmp = this._calculateCurveControlPoints(points[1], points[2], points[3]);
        var c3 = tmp.c1;
        var curve = new $f94aedf83bd77a6c$var$Bezier(points[1], c2, c3, points[2]);
        var widths = this._calculateCurveWidths(curve);
        // Remove the first element from the list,
        // so that we always have no more than 4 points in points array.
        points.shift();
        return {
            curve: curve,
            widths: widths
        };
    }
    return {};
};
$f94aedf83bd77a6c$var$SignaturePad.prototype._calculateCurveControlPoints = function(s1, s2, s3) {
    var dx1 = s1.x - s2.x;
    var dy1 = s1.y - s2.y;
    var dx2 = s2.x - s3.x;
    var dy2 = s2.y - s3.y;
    var m1 = {
        x: (s1.x + s2.x) / 2.0,
        y: (s1.y + s2.y) / 2.0
    };
    var m2 = {
        x: (s2.x + s3.x) / 2.0,
        y: (s2.y + s3.y) / 2.0
    };
    var l1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
    var l2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
    var dxm = m1.x - m2.x;
    var dym = m1.y - m2.y;
    var k = l2 / (l1 + l2);
    var cm = {
        x: m2.x + dxm * k,
        y: m2.y + dym * k
    };
    var tx = s2.x - cm.x;
    var ty = s2.y - cm.y;
    return {
        c1: new $f94aedf83bd77a6c$var$Point(m1.x + tx, m1.y + ty),
        c2: new $f94aedf83bd77a6c$var$Point(m2.x + tx, m2.y + ty)
    };
};
$f94aedf83bd77a6c$var$SignaturePad.prototype._calculateCurveWidths = function(curve) {
    var startPoint = curve.startPoint;
    var endPoint = curve.endPoint;
    var widths = {
        start: null,
        end: null
    };
    var velocity = this.velocityFilterWeight * endPoint.velocityFrom(startPoint) + (1 - this.velocityFilterWeight) * this._lastVelocity;
    var newWidth = this._strokeWidth(velocity);
    widths.start = this._lastWidth;
    widths.end = newWidth;
    this._lastVelocity = velocity;
    this._lastWidth = newWidth;
    return widths;
};
$f94aedf83bd77a6c$var$SignaturePad.prototype._strokeWidth = function(velocity) {
    return Math.max(this.maxWidth / (velocity + 1), this.minWidth);
};
$f94aedf83bd77a6c$var$SignaturePad.prototype._drawPoint = function(x, y, size) {
    var ctx = this._ctx;
    ctx.moveTo(x, y);
    ctx.arc(x, y, size, 0, 2 * Math.PI, false);
    this._isEmpty = false;
};
$f94aedf83bd77a6c$var$SignaturePad.prototype._drawCurve = function(curve, startWidth, endWidth) {
    var ctx = this._ctx;
    var widthDelta = endWidth - startWidth;
    var drawSteps = Math.floor(curve.length());
    ctx.beginPath();
    for(var i = 0; i < drawSteps; i += 1){
        // Calculate the Bezier (x, y) coordinate for this step.
        var t = i / drawSteps;
        var tt = t * t;
        var ttt = tt * t;
        var u = 1 - t;
        var uu = u * u;
        var uuu = uu * u;
        var x = uuu * curve.startPoint.x;
        x += 3 * uu * t * curve.control1.x;
        x += 3 * u * tt * curve.control2.x;
        x += ttt * curve.endPoint.x;
        var y = uuu * curve.startPoint.y;
        y += 3 * uu * t * curve.control1.y;
        y += 3 * u * tt * curve.control2.y;
        y += ttt * curve.endPoint.y;
        var width = startWidth + ttt * widthDelta;
        this._drawPoint(x, y, width);
    }
    ctx.closePath();
    ctx.fill();
};
$f94aedf83bd77a6c$var$SignaturePad.prototype._drawDot = function(point) {
    var ctx = this._ctx;
    var width = typeof this.dotSize === "function" ? this.dotSize() : this.dotSize;
    ctx.beginPath();
    this._drawPoint(point.x, point.y, width);
    ctx.closePath();
    ctx.fill();
};
$f94aedf83bd77a6c$var$SignaturePad.prototype._fromData = function(pointGroups, drawCurve, drawDot) {
    for(var i = 0; i < pointGroups.length; i += 1){
        var group = pointGroups[i];
        if (group.length > 1) for(var j = 0; j < group.length; j += 1){
            var rawPoint = group[j];
            var point = new $f94aedf83bd77a6c$var$Point(rawPoint.x, rawPoint.y, rawPoint.time);
            var color = rawPoint.color;
            if (j === 0) {
                // First point in a group. Nothing to draw yet.
                // All points in the group have the same color, so it's enough to set
                // penColor just at the beginning.
                this.penColor = color;
                this._reset();
                this._addPoint(point);
            } else if (j !== group.length - 1) {
                // Middle point in a group.
                var _addPoint2 = this._addPoint(point), curve = _addPoint2.curve, widths = _addPoint2.widths;
                if (curve && widths) drawCurve(curve, widths, color);
            }
        }
        else {
            this._reset();
            var _rawPoint = group[0];
            drawDot(_rawPoint);
        }
    }
};
$f94aedf83bd77a6c$var$SignaturePad.prototype._toSVG = function() {
    var _this2 = this;
    var pointGroups = this._data;
    var canvas = this._canvas;
    var ratio = Math.max(window.devicePixelRatio || 1, 1);
    var minX = 0;
    var minY = 0;
    var maxX = canvas.width / ratio;
    var maxY = canvas.height / ratio;
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttributeNS(null, "width", canvas.width);
    svg.setAttributeNS(null, "height", canvas.height);
    this._fromData(pointGroups, function(curve, widths, color) {
        var path = document.createElement("path");
        // Need to check curve for NaN values, these pop up when drawing
        // lines on the canvas that are not continuous. E.g. Sharp corners
        // or stopping mid-stroke and than continuing without lifting mouse.
        if (!isNaN(curve.control1.x) && !isNaN(curve.control1.y) && !isNaN(curve.control2.x) && !isNaN(curve.control2.y)) {
            var attr = "M " + curve.startPoint.x.toFixed(3) + "," + curve.startPoint.y.toFixed(3) + " " + ("C " + curve.control1.x.toFixed(3) + "," + curve.control1.y.toFixed(3) + " ") + (curve.control2.x.toFixed(3) + "," + curve.control2.y.toFixed(3) + " ") + (curve.endPoint.x.toFixed(3) + "," + curve.endPoint.y.toFixed(3));
            path.setAttribute("d", attr);
            path.setAttribute("stroke-width", (widths.end * 2.25).toFixed(3));
            path.setAttribute("stroke", color);
            path.setAttribute("fill", "none");
            path.setAttribute("stroke-linecap", "round");
            svg.appendChild(path);
        }
    }, function(rawPoint) {
        var circle = document.createElement("circle");
        var dotSize = typeof _this2.dotSize === "function" ? _this2.dotSize() : _this2.dotSize;
        circle.setAttribute("r", dotSize);
        circle.setAttribute("cx", rawPoint.x);
        circle.setAttribute("cy", rawPoint.y);
        circle.setAttribute("fill", rawPoint.color);
        svg.appendChild(circle);
    });
    var prefix = "data:image/svg+xml;base64,";
    var header = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"' + (' viewBox="' + minX + " " + minY + " " + maxX + " " + maxY + '"') + (' width="' + maxX + '"') + (' height="' + maxY + '"') + ">";
    var body = svg.innerHTML;
    // IE hack for missing innerHTML property on SVGElement
    if (body === undefined) {
        var dummy = document.createElement("dummy");
        var nodes = svg.childNodes;
        dummy.innerHTML = "";
        for(var i = 0; i < nodes.length; i += 1)dummy.appendChild(nodes[i].cloneNode(true));
        body = dummy.innerHTML;
    }
    var footer = "</svg>";
    var data = header + body + footer;
    return prefix + btoa(data);
};
$f94aedf83bd77a6c$var$SignaturePad.prototype.fromData = function(pointGroups) {
    var _this3 = this;
    this.clear();
    this._fromData(pointGroups, function(curve, widths) {
        return _this3._drawCurve(curve, widths.start, widths.end);
    }, function(rawPoint) {
        return _this3._drawDot(rawPoint);
    });
    this._data = pointGroups;
};
$f94aedf83bd77a6c$var$SignaturePad.prototype.toData = function() {
    return this._data;
};
var $f94aedf83bd77a6c$export$2e2bcd8739ae039 = $f94aedf83bd77a6c$var$SignaturePad;

});

parcelRequire.register("5Zebf", function(module, exports) {
!function(e, t) {
    module.exports = t();
}(module.exports, function() {
    return function(e) {
        function t(n) {
            if (r[n]) return r[n].exports;
            var o = r[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports;
        }
        var r = {};
        return t.m = e, t.c = r, t.p = "", t(0);
    }([
        function(e, t) {
            "use strict";
            function r(e) {
                var t = e.getContext("2d"), r = e.width, n = e.height, o = t.getImageData(0, 0, r, n).data, f = a(!0, r, n, o), i = a(!1, r, n, o), c = u(!0, r, n, o), d = u(!1, r, n, o), p = d - c + 1, l = i - f + 1, s = t.getImageData(c, f, p, l);
                return e.width = p, e.height = l, t.clearRect(0, 0, p, l), t.putImageData(s, 0, 0), e;
            }
            function n(e, t, r, n) {
                return {
                    red: n[4 * (r * t + e)],
                    green: n[4 * (r * t + e) + 1],
                    blue: n[4 * (r * t + e) + 2],
                    alpha: n[4 * (r * t + e) + 3]
                };
            }
            function o(e, t, r, o) {
                return n(e, t, r, o).alpha;
            }
            function a(e, t, r, n) {
                for(var a = e ? 1 : -1, u = e ? 0 : r - 1, f = u; e ? f < r : f > -1; f += a)for(var i = 0; i < t; i++)if (o(i, f, t, n)) return f;
                return null;
            }
            function u(e, t, r, n) {
                for(var a = e ? 1 : -1, u = e ? 0 : t - 1, f = u; e ? f < t : f > -1; f += a)for(var i = 0; i < r; i++)if (o(f, i, t, n)) return f;
                return null;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = r;
        }
    ]);
});

});


$parcel$export(module.exports, "Form", () => $524470e42badd95f$export$a7fed597f4b8afd8);
$parcel$export(module.exports, "FlexForm", () => $ac39aec9f1b151df$export$cb1ad078b6c48b67);
$parcel$export(module.exports, "useStyles", () => $347d94a6b27ac6e3$export$28e6b9b82ee883c);
$parcel$export(module.exports, "useErrorMessage", () => $e045ee12a7ba0f7f$export$23759efdd2d2dae9);


var $e95984cd096ff1b8$exports = {};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ /* global define */ (function() {
    "use strict";
    var hasOwn = {}.hasOwnProperty;
    var nativeCodeString = "[native code]";
    function classNames() {
        var classes = [];
        for(var i = 0; i < arguments.length; i++){
            var arg = arguments[i];
            if (!arg) continue;
            var argType = typeof arg;
            if (argType === "string" || argType === "number") classes.push(arg);
            else if (Array.isArray(arg)) {
                if (arg.length) {
                    var inner = classNames.apply(null, arg);
                    if (inner) classes.push(inner);
                }
            } else if (argType === "object") {
                if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
                    classes.push(arg.toString());
                    continue;
                }
                for(var key in arg)if (hasOwn.call(arg, key) && arg[key]) classes.push(key);
            }
        }
        return classes.join(" ");
    }
    if (0, $e95984cd096ff1b8$exports) {
        classNames.default = classNames;
        $e95984cd096ff1b8$exports = classNames;
    } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) // register as 'classnames', consistent with npm package name
    define("classnames", [], function() {
        return classNames;
    });
    else window.classNames = classNames;
})();





const $7611d0f4a9a1be1a$var$_excluded = [
    "as",
    "disabled"
];
function $7611d0f4a9a1be1a$var$_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function $7611d0f4a9a1be1a$export$72369ab2cc99204b(href) {
    return !href || href.trim() === "#";
}
function $7611d0f4a9a1be1a$export$a0ee72f2c720a5c3({ tagName: tagName , disabled: disabled , href: href , target: target , rel: rel , role: role , onClick: onClick , tabIndex: tabIndex = 0 , type: type  }) {
    if (!tagName) {
        if (href != null || target != null || rel != null) tagName = "a";
        else tagName = "button";
    }
    const meta = {
        tagName: tagName
    };
    if (tagName === "button") return [
        {
            type: type || "button",
            disabled: disabled
        },
        meta
    ];
    const handleClick = (event)=>{
        if (disabled || tagName === "a" && $7611d0f4a9a1be1a$export$72369ab2cc99204b(href)) event.preventDefault();
        if (disabled) {
            event.stopPropagation();
            return;
        }
        onClick == null || onClick(event);
    };
    const handleKeyDown = (event)=>{
        if (event.key === " ") {
            event.preventDefault();
            handleClick(event);
        }
    };
    if (tagName === "a") {
        // Ensure there's a href so Enter can trigger anchor button.
        href || (href = "#");
        if (disabled) href = undefined;
    }
    return [
        {
            role: role != null ? role : "button",
            // explicitly undefined so that it overrides the props disabled in a spread
            // e.g. <Tag {...props} {...hookProps} />
            disabled: undefined,
            tabIndex: disabled ? undefined : tabIndex,
            href: href,
            target: tagName === "a" ? target : undefined,
            "aria-disabled": !disabled ? undefined : disabled,
            rel: tagName === "a" ? rel : undefined,
            onClick: handleClick,
            onKeyDown: handleKeyDown
        },
        meta
    ];
}
const $7611d0f4a9a1be1a$var$Button = /*#__PURE__*/ $aSjVs$react.forwardRef((_ref, ref)=>{
    let { as: asProp , disabled: disabled  } = _ref, props = $7611d0f4a9a1be1a$var$_objectWithoutPropertiesLoose(_ref, $7611d0f4a9a1be1a$var$_excluded);
    const [buttonProps, { tagName: Component  }] = $7611d0f4a9a1be1a$export$a0ee72f2c720a5c3(Object.assign({
        tagName: asProp,
        disabled: disabled
    }, props));
    return /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)(Component, Object.assign({}, props, buttonProps, {
        ref: ref
    }));
});
$7611d0f4a9a1be1a$var$Button.displayName = "Button";
var $7611d0f4a9a1be1a$export$2e2bcd8739ae039 = $7611d0f4a9a1be1a$var$Button;





const $21a37b360728f8ff$export$666ad80b5007f835 = [
    "xxl",
    "xl",
    "lg",
    "md",
    "sm",
    "xs"
];
const $21a37b360728f8ff$export$ff817e17bad2e091 = "xs";
const $21a37b360728f8ff$var$ThemeContext = /*#__PURE__*/ $aSjVs$react.createContext({
    prefixes: {},
    breakpoints: $21a37b360728f8ff$export$666ad80b5007f835,
    minBreakpoint: $21a37b360728f8ff$export$ff817e17bad2e091
});
const { Consumer: $21a37b360728f8ff$export$b631efc24e9d5e2f , Provider: $21a37b360728f8ff$var$Provider  } = $21a37b360728f8ff$var$ThemeContext;
function $21a37b360728f8ff$var$ThemeProvider({ prefixes: prefixes = {} , breakpoints: breakpoints = $21a37b360728f8ff$export$666ad80b5007f835 , minBreakpoint: minBreakpoint = $21a37b360728f8ff$export$ff817e17bad2e091 , dir: dir , children: children  }) {
    const contextValue = (0, $aSjVs$react.useMemo)(()=>({
            prefixes: {
                ...prefixes
            },
            breakpoints: breakpoints,
            minBreakpoint: minBreakpoint,
            dir: dir
        }), [
        prefixes,
        breakpoints,
        minBreakpoint,
        dir
    ]);
    return /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)($21a37b360728f8ff$var$Provider, {
        value: contextValue,
        children: children
    });
}
function $21a37b360728f8ff$export$7f387860ebffb32c(prefix, defaultPrefix) {
    const { prefixes: prefixes  } = (0, $aSjVs$react.useContext)($21a37b360728f8ff$var$ThemeContext);
    return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function $21a37b360728f8ff$export$8970c8db816a5863() {
    const { breakpoints: breakpoints  } = (0, $aSjVs$react.useContext)($21a37b360728f8ff$var$ThemeContext);
    return breakpoints;
}
function $21a37b360728f8ff$export$d926d6ef38f3fd32() {
    const { minBreakpoint: minBreakpoint  } = (0, $aSjVs$react.useContext)($21a37b360728f8ff$var$ThemeContext);
    return minBreakpoint;
}
function $21a37b360728f8ff$export$35e511eefa30ac5a() {
    const { dir: dir  } = (0, $aSjVs$react.useContext)($21a37b360728f8ff$var$ThemeContext);
    return dir === "rtl";
}
function $21a37b360728f8ff$export$ce75053c20498f85(Component, opts) {
    if (typeof opts === "string") opts = {
        prefix: opts
    };
    const isClassy = Component.prototype && Component.prototype.isReactComponent;
    // If it's a functional component make sure we don't break it with a ref
    const { prefix: prefix , forwardRefAs: forwardRefAs = isClassy ? "ref" : "innerRef"  } = opts;
    const Wrapped = /*#__PURE__*/ $aSjVs$react.forwardRef(({ ...props }, ref)=>{
        props[forwardRefAs] = ref;
        const bsPrefix = $21a37b360728f8ff$export$7f387860ebffb32c(props.bsPrefix, prefix);
        return /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)(Component, {
            ...props,
            bsPrefix: bsPrefix
        });
    });
    Wrapped.displayName = `Bootstrap(${Component.displayName || Component.name})`;
    return Wrapped;
}
var $21a37b360728f8ff$export$2e2bcd8739ae039 = $21a37b360728f8ff$var$ThemeProvider;



const $2ccf3e31000e1a43$var$Button = /*#__PURE__*/ $aSjVs$react.forwardRef(({ as: as , bsPrefix: bsPrefix , variant: variant = "primary" , size: size , active: active = false , disabled: disabled = false , className: className , ...props }, ref)=>{
    const prefix = (0, $21a37b360728f8ff$export$7f387860ebffb32c)(bsPrefix, "btn");
    const [buttonProps, { tagName: tagName  }] = (0, $7611d0f4a9a1be1a$export$a0ee72f2c720a5c3)({
        tagName: as,
        disabled: disabled,
        ...props
    });
    const Component = tagName;
    return /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)(Component, {
        ...buttonProps,
        ...props,
        ref: ref,
        disabled: disabled,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($e95984cd096ff1b8$exports)))(className, prefix, active && "active", variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && disabled && "disabled")
    });
});
$2ccf3e31000e1a43$var$Button.displayName = "Button";
var $2ccf3e31000e1a43$export$2e2bcd8739ae039 = $2ccf3e31000e1a43$var$Button;





const $e9d2bbcb60fc185c$var$ButtonGroup = /*#__PURE__*/ $aSjVs$react.forwardRef(({ bsPrefix: bsPrefix , size: size , vertical: vertical = false , className: className , role: role = "group" , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div" , ...rest }, ref)=>{
    const prefix = (0, $21a37b360728f8ff$export$7f387860ebffb32c)(bsPrefix, "btn-group");
    let baseClass = prefix;
    if (vertical) baseClass = `${prefix}-vertical`;
    return /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)(Component, {
        ...rest,
        ref: ref,
        role: role,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($e95984cd096ff1b8$exports)))(className, baseClass, size && `${prefix}-${size}`)
    });
});
$e9d2bbcb60fc185c$var$ButtonGroup.displayName = "ButtonGroup";
var $e9d2bbcb60fc185c$export$2e2bcd8739ae039 = $e9d2bbcb60fc185c$var$ButtonGroup;





const $398afc574773aea1$var$Container = /*#__PURE__*/ $aSjVs$react.forwardRef(({ bsPrefix: bsPrefix , fluid: fluid = false , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div" , className: className , ...props }, ref)=>{
    const prefix = (0, $21a37b360728f8ff$export$7f387860ebffb32c)(bsPrefix, "container");
    const suffix = typeof fluid === "string" ? `-${fluid}` : "-fluid";
    return /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)(Component, {
        ref: ref,
        ...props,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($e95984cd096ff1b8$exports)))(className, fluid ? `${prefix}${suffix}` : prefix)
    });
});
$398afc574773aea1$var$Container.displayName = "Container";
var $398afc574773aea1$export$2e2bcd8739ae039 = $398afc574773aea1$var$Container;



var $3844679bc44ad46f$var$isCheckBoxInput = (element)=>element.type === "checkbox";
var $3844679bc44ad46f$var$isDateObject = (value1)=>value1 instanceof Date;
var $3844679bc44ad46f$var$isNullOrUndefined = (value1)=>value1 == null;
const $3844679bc44ad46f$var$isObjectType = (value1)=>typeof value1 === "object";
var $3844679bc44ad46f$var$isObject = (value1)=>!$3844679bc44ad46f$var$isNullOrUndefined(value1) && !Array.isArray(value1) && $3844679bc44ad46f$var$isObjectType(value1) && !$3844679bc44ad46f$var$isDateObject(value1);
var $3844679bc44ad46f$var$getEventValue = (event)=>$3844679bc44ad46f$var$isObject(event) && event.target ? $3844679bc44ad46f$var$isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
var $3844679bc44ad46f$var$getNodeParentName = (name)=>name.substring(0, name.search(/\.\d+(\.|$)/)) || name;
var $3844679bc44ad46f$var$isNameInFieldArray = (names, name)=>names.has($3844679bc44ad46f$var$getNodeParentName(name));
var $3844679bc44ad46f$var$compact = (value1)=>Array.isArray(value1) ? value1.filter(Boolean) : [];
var $3844679bc44ad46f$var$isUndefined = (val)=>val === undefined;
var $3844679bc44ad46f$export$3988ae62b71be9a3 = (obj, path, defaultValue)=>{
    if (!path || !$3844679bc44ad46f$var$isObject(obj)) return defaultValue;
    const result = $3844679bc44ad46f$var$compact(path.split(/[,[\].]+?/)).reduce((result, key)=>$3844679bc44ad46f$var$isNullOrUndefined(result) ? result : result[key], obj);
    return $3844679bc44ad46f$var$isUndefined(result) || result === obj ? $3844679bc44ad46f$var$isUndefined(obj[path]) ? defaultValue : obj[path] : result;
};
const $3844679bc44ad46f$var$EVENTS = {
    BLUR: "blur",
    FOCUS_OUT: "focusout",
    CHANGE: "change"
};
const $3844679bc44ad46f$var$VALIDATION_MODE = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all"
};
const $3844679bc44ad46f$var$INPUT_VALIDATION_RULES = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate"
};
const $3844679bc44ad46f$var$HookFormContext = (0, ($parcel$interopDefault($aSjVs$react))).createContext(null);
/**
 * This custom hook allows you to access the form context. useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop. To be used with {@link FormProvider}.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @returns return all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */ const $3844679bc44ad46f$export$4d957a5e1be13b03 = ()=>(0, ($parcel$interopDefault($aSjVs$react))).useContext($3844679bc44ad46f$var$HookFormContext);
/**
 * A provider component that propagates the `useForm` methods to all children components via [React Context](https://reactjs.org/docs/context.html) API. To be used with {@link useFormContext}.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @param props - all useFrom methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */ const $3844679bc44ad46f$export$8ce1ff4f94d08846 = (props)=>{
    const { children: children , ...data } = props;
    return (0, ($parcel$interopDefault($aSjVs$react))).createElement($3844679bc44ad46f$var$HookFormContext.Provider, {
        value: data
    }, children);
};
var $3844679bc44ad46f$var$getProxyFormState = (formState, control, localProxyFormState, isRoot = true)=>{
    const result = {
        defaultValues: control._defaultValues
    };
    for(const key in formState)Object.defineProperty(result, key, {
        get: ()=>{
            const _key = key;
            if (control._proxyFormState[_key] !== $3844679bc44ad46f$var$VALIDATION_MODE.all) control._proxyFormState[_key] = !isRoot || $3844679bc44ad46f$var$VALIDATION_MODE.all;
            localProxyFormState && (localProxyFormState[_key] = true);
            return formState[_key];
        }
    });
    return result;
};
var $3844679bc44ad46f$var$isEmptyObject = (value1)=>$3844679bc44ad46f$var$isObject(value1) && !Object.keys(value1).length;
var $3844679bc44ad46f$var$shouldRenderFormState = (formStateData, _proxyFormState, isRoot)=>{
    const { name: name , ...formState } = formStateData;
    return $3844679bc44ad46f$var$isEmptyObject(formState) || Object.keys(formState).length >= Object.keys(_proxyFormState).length || Object.keys(formState).find((key)=>_proxyFormState[key] === (!isRoot || $3844679bc44ad46f$var$VALIDATION_MODE.all));
};
var $3844679bc44ad46f$var$convertToArrayPayload = (value1)=>Array.isArray(value1) ? value1 : [
        value1
    ];
var $3844679bc44ad46f$var$shouldSubscribeByName = (name, signalName, exact)=>exact && signalName ? name === signalName : !name || !signalName || name === signalName || $3844679bc44ad46f$var$convertToArrayPayload(name).some((currentName)=>currentName && (currentName.startsWith(signalName) || signalName.startsWith(currentName)));
function $3844679bc44ad46f$var$useSubscribe(props) {
    const _props = (0, ($parcel$interopDefault($aSjVs$react))).useRef(props);
    _props.current = props;
    (0, ($parcel$interopDefault($aSjVs$react))).useEffect(()=>{
        const subscription = !props.disabled && _props.current.subject.subscribe({
            next: _props.current.callback
        });
        return ()=>{
            subscription && subscription.unsubscribe();
        };
    }, [
        props.disabled
    ]);
}
/**
 * This custom hook allows you to subscribe to each form state, and isolate the re-render at the custom hook level. It has its scope in terms of form state subscription, so it would not affect other useFormState and useForm. Using this hook can reduce the re-render impact on large and complex form application.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/useformstate) • [Demo](https://codesandbox.io/s/useformstate-75xly)
 *
 * @param props - include options on specify fields to subscribe. {@link UseFormStateReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, control } = useForm({
 *     defaultValues: {
 *     firstName: "firstName"
 *   }});
 *   const { dirtyFields } = useFormState({
 *     control
 *   });
 *   const onSubmit = (data) => console.log(data);
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input {...register("firstName")} placeholder="First Name" />
 *       {dirtyFields.firstName && <p>Field is dirty.</p>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */ function $3844679bc44ad46f$export$606f11b2eb45ecc6(props) {
    const methods = $3844679bc44ad46f$export$4d957a5e1be13b03();
    const { control: control = methods.control , disabled: disabled , name: name , exact: exact  } = props || {};
    const [formState, updateFormState] = (0, ($parcel$interopDefault($aSjVs$react))).useState(control._formState);
    const _mounted = (0, ($parcel$interopDefault($aSjVs$react))).useRef(true);
    const _localProxyFormState = (0, ($parcel$interopDefault($aSjVs$react))).useRef({
        isDirty: false,
        dirtyFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false
    });
    const _name = (0, ($parcel$interopDefault($aSjVs$react))).useRef(name);
    _name.current = name;
    $3844679bc44ad46f$var$useSubscribe({
        disabled: disabled,
        callback: (0, ($parcel$interopDefault($aSjVs$react))).useCallback((value1)=>_mounted.current && $3844679bc44ad46f$var$shouldSubscribeByName(_name.current, value1.name, exact) && $3844679bc44ad46f$var$shouldRenderFormState(value1, _localProxyFormState.current) && updateFormState({
                ...control._formState,
                ...value1
            }), [
            control,
            exact
        ]),
        subject: control._subjects.state
    });
    (0, ($parcel$interopDefault($aSjVs$react))).useEffect(()=>{
        _mounted.current = true;
        const isDirty = control._proxyFormState.isDirty && control._getDirty();
        if (isDirty !== control._formState.isDirty) control._subjects.state.next({
            isDirty: isDirty
        });
        control._updateValid();
        return ()=>{
            _mounted.current = false;
        };
    }, [
        control
    ]);
    return $3844679bc44ad46f$var$getProxyFormState(formState, control, _localProxyFormState.current, false);
}
var $3844679bc44ad46f$var$isString = (value1)=>typeof value1 === "string";
var $3844679bc44ad46f$var$generateWatchOutput = (names, _names, formValues, isGlobal)=>{
    if ($3844679bc44ad46f$var$isString(names)) {
        isGlobal && _names.watch.add(names);
        return $3844679bc44ad46f$export$3988ae62b71be9a3(formValues, names);
    }
    if (Array.isArray(names)) return names.map((fieldName)=>(isGlobal && _names.watch.add(fieldName), $3844679bc44ad46f$export$3988ae62b71be9a3(formValues, fieldName)));
    isGlobal && (_names.watchAll = true);
    return formValues;
};
var $3844679bc44ad46f$var$isPlainObject = (tempObject)=>{
    const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
    return $3844679bc44ad46f$var$isObject(prototypeCopy) && prototypeCopy.hasOwnProperty("isPrototypeOf");
};
var $3844679bc44ad46f$var$isWeb = typeof window !== "undefined" && typeof window.HTMLElement !== "undefined" && typeof document !== "undefined";
function $3844679bc44ad46f$var$cloneObject(data) {
    let copy;
    const isArray = Array.isArray(data);
    if (data instanceof Date) copy = new Date(data);
    else if (data instanceof Set) copy = new Set(data);
    else if (!($3844679bc44ad46f$var$isWeb && (data instanceof Blob || data instanceof FileList)) && (isArray || $3844679bc44ad46f$var$isObject(data))) {
        copy = isArray ? [] : {};
        if (!Array.isArray(data) && !$3844679bc44ad46f$var$isPlainObject(data)) copy = data;
        else for(const key in data)copy[key] = $3844679bc44ad46f$var$cloneObject(data[key]);
    } else return data;
    return copy;
}
/**
 * Custom hook to subscribe to field change and isolate re-rendering at the component level.
 *
 * @remarks
 *
 * [API](https://react-hook-form.com/api/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
 *
 * @example
 * ```tsx
 * const { watch } = useForm();
 * const values = useWatch({
 *   name: "fieldName"
 *   control,
 * })
 * ```
 */ function $3844679bc44ad46f$export$3c773aa2b84f29e0(props) {
    const methods = $3844679bc44ad46f$export$4d957a5e1be13b03();
    const { control: control = methods.control , name: name , defaultValue: defaultValue , disabled: disabled , exact: exact  } = props || {};
    const _name = (0, ($parcel$interopDefault($aSjVs$react))).useRef(name);
    _name.current = name;
    $3844679bc44ad46f$var$useSubscribe({
        disabled: disabled,
        subject: control._subjects.watch,
        callback: (formState)=>{
            if ($3844679bc44ad46f$var$shouldSubscribeByName(_name.current, formState.name, exact)) {
                const fieldValues = $3844679bc44ad46f$var$generateWatchOutput(_name.current, control._names, formState.values || control._formValues);
                updateValue($3844679bc44ad46f$var$isUndefined(fieldValues) ? defaultValue : $3844679bc44ad46f$var$cloneObject(fieldValues));
            }
        }
    });
    const [value1, updateValue] = (0, ($parcel$interopDefault($aSjVs$react))).useState($3844679bc44ad46f$var$isUndefined(defaultValue) ? control._getWatch(name) : defaultValue);
    (0, ($parcel$interopDefault($aSjVs$react))).useEffect(()=>control._removeUnmounted());
    return value1;
}
/**
 * Custom hook to work with controlled component, this function provide you with both form and field level state. Re-render is isolated at the hook level.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns field properties, field and form state. {@link UseControllerReturn}
 *
 * @example
 * ```tsx
 * function Input(props) {
 *   const { field, fieldState, formState } = useController(props);
 *   return (
 *     <div>
 *       <input {...field} placeholder={props.name} />
 *       <p>{fieldState.isTouched && "Touched"}</p>
 *       <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *     </div>
 *   );
 * }
 * ```
 */ function $3844679bc44ad46f$export$e8c786024a2b0a79(props) {
    const methods = $3844679bc44ad46f$export$4d957a5e1be13b03();
    const { name: name , control: control = methods.control , shouldUnregister: shouldUnregister  } = props;
    const isArrayField = $3844679bc44ad46f$var$isNameInFieldArray(control._names.array, name);
    const value1 = $3844679bc44ad46f$export$3c773aa2b84f29e0({
        control: control,
        name: name,
        defaultValue: $3844679bc44ad46f$export$3988ae62b71be9a3(control._formValues, name, $3844679bc44ad46f$export$3988ae62b71be9a3(control._defaultValues, name, props.defaultValue)),
        exact: true
    });
    const formState = $3844679bc44ad46f$export$606f11b2eb45ecc6({
        control: control,
        name: name
    });
    const _registerProps = (0, ($parcel$interopDefault($aSjVs$react))).useRef(control.register(name, {
        ...props.rules,
        value: value1
    }));
    (0, ($parcel$interopDefault($aSjVs$react))).useEffect(()=>{
        const updateMounted = (name, value1)=>{
            const field = $3844679bc44ad46f$export$3988ae62b71be9a3(control._fields, name);
            if (field) field._f.mount = value1;
        };
        updateMounted(name, true);
        return ()=>{
            const _shouldUnregisterField = control._options.shouldUnregister || shouldUnregister;
            (isArrayField ? _shouldUnregisterField && !control._stateFlags.action : _shouldUnregisterField) ? control.unregister(name) : updateMounted(name, false);
        };
    }, [
        name,
        control,
        isArrayField,
        shouldUnregister
    ]);
    return {
        field: {
            name: name,
            value: value1,
            onChange: (0, ($parcel$interopDefault($aSjVs$react))).useCallback((event)=>_registerProps.current.onChange({
                    target: {
                        value: $3844679bc44ad46f$var$getEventValue(event),
                        name: name
                    },
                    type: $3844679bc44ad46f$var$EVENTS.CHANGE
                }), [
                name
            ]),
            onBlur: (0, ($parcel$interopDefault($aSjVs$react))).useCallback(()=>_registerProps.current.onBlur({
                    target: {
                        value: $3844679bc44ad46f$export$3988ae62b71be9a3(control._formValues, name),
                        name: name
                    },
                    type: $3844679bc44ad46f$var$EVENTS.BLUR
                }), [
                name,
                control
            ]),
            ref: (elm)=>{
                const field = $3844679bc44ad46f$export$3988ae62b71be9a3(control._fields, name);
                if (field && elm) field._f.ref = {
                    focus: ()=>elm.focus(),
                    select: ()=>elm.select(),
                    setCustomValidity: (message)=>elm.setCustomValidity(message),
                    reportValidity: ()=>elm.reportValidity()
                };
            }
        },
        formState: formState,
        fieldState: Object.defineProperties({}, {
            invalid: {
                enumerable: true,
                get: ()=>!!$3844679bc44ad46f$export$3988ae62b71be9a3(formState.errors, name)
            },
            isDirty: {
                enumerable: true,
                get: ()=>!!$3844679bc44ad46f$export$3988ae62b71be9a3(formState.dirtyFields, name)
            },
            isTouched: {
                enumerable: true,
                get: ()=>!!$3844679bc44ad46f$export$3988ae62b71be9a3(formState.touchedFields, name)
            },
            error: {
                enumerable: true,
                get: ()=>$3844679bc44ad46f$export$3988ae62b71be9a3(formState.errors, name)
            }
        })
    };
}
/**
 * Component based on `useController` hook to work with controlled component.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/usecontroller/controller) • [Demo](https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw) • [Video](https://www.youtube.com/watch?v=N2UNk_UCVyA)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns provide field handler functions, field and form state.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control } = useForm<FormValues>({
 *     defaultValues: {
 *       test: ""
 *     }
 *   });
 *
 *   return (
 *     <form>
 *       <Controller
 *         control={control}
 *         name="test"
 *         render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
 *           <>
 *             <input
 *               onChange={onChange} // send value to hook form
 *               onBlur={onBlur} // notify when input is touched
 *               value={value} // return updated value
 *               ref={ref} // set ref for focus management
 *             />
 *             <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *             <p>{fieldState.isTouched ? "touched" : ""}</p>
 *           </>
 *         )}
 *       />
 *     </form>
 *   );
 * }
 * ```
 */ const $3844679bc44ad46f$export$bd0bf19f25da8474 = (props)=>props.render($3844679bc44ad46f$export$e8c786024a2b0a79(props));
var $3844679bc44ad46f$export$b196c2a4f765bd30 = (name, validateAllFieldCriteria, errors, type, message)=>validateAllFieldCriteria ? {
        ...errors[name],
        types: {
            ...errors[name] && errors[name].types ? errors[name].types : {},
            [type]: message || true
        }
    } : {};
var $3844679bc44ad46f$var$isKey = (value1)=>/^\w*$/.test(value1);
var $3844679bc44ad46f$var$stringToPath = (input)=>$3844679bc44ad46f$var$compact(input.replace(/["|']|\]/g, "").split(/\.|\[/));
function $3844679bc44ad46f$export$adaa4cf7ef1b65be(object, path, value1) {
    let index = -1;
    const tempPath = $3844679bc44ad46f$var$isKey(path) ? [
        path
    ] : $3844679bc44ad46f$var$stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while(++index < length){
        const key = tempPath[index];
        let newValue = value1;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue = $3844679bc44ad46f$var$isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
}
const $3844679bc44ad46f$var$focusFieldBy = (fields, callback, fieldsNames)=>{
    for (const key of fieldsNames || Object.keys(fields)){
        const field = $3844679bc44ad46f$export$3988ae62b71be9a3(fields, key);
        if (field) {
            const { _f: _f , ...currentField } = field;
            if (_f && callback(_f.name)) {
                if (_f.ref.focus) {
                    _f.ref.focus();
                    break;
                } else if (_f.refs && _f.refs[0].focus) {
                    _f.refs[0].focus();
                    break;
                }
            } else if ($3844679bc44ad46f$var$isObject(currentField)) $3844679bc44ad46f$var$focusFieldBy(currentField, callback);
        }
    }
};
var $3844679bc44ad46f$var$generateId = ()=>{
    const d = typeof performance === "undefined" ? Date.now() : performance.now() * 1000;
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c)=>{
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == "x" ? r : r & 0x3 | 0x8).toString(16);
    });
};
var $3844679bc44ad46f$var$getFocusFieldName = (name, index, options = {})=>options.shouldFocus || $3844679bc44ad46f$var$isUndefined(options.shouldFocus) ? options.focusName || `${name}.${$3844679bc44ad46f$var$isUndefined(options.focusIndex) ? index : options.focusIndex}.` : "";
var $3844679bc44ad46f$var$isWatched = (name, _names, isBlurEvent)=>!isBlurEvent && (_names.watchAll || _names.watch.has(name) || [
        ..._names.watch
    ].some((watchName)=>name.startsWith(watchName) && /^\.\w+/.test(name.slice(watchName.length))));
var $3844679bc44ad46f$var$updateFieldArrayRootError = (errors, error, name)=>{
    const fieldArrayErrors = $3844679bc44ad46f$var$compact($3844679bc44ad46f$export$3988ae62b71be9a3(errors, name));
    $3844679bc44ad46f$export$adaa4cf7ef1b65be(fieldArrayErrors, "root", error[name]);
    $3844679bc44ad46f$export$adaa4cf7ef1b65be(errors, name, fieldArrayErrors);
    return errors;
};
var $3844679bc44ad46f$var$isBoolean = (value1)=>typeof value1 === "boolean";
var $3844679bc44ad46f$var$isFileInput = (element)=>element.type === "file";
var $3844679bc44ad46f$var$isFunction = (value1)=>typeof value1 === "function";
var $3844679bc44ad46f$var$isMessage = (value1)=>$3844679bc44ad46f$var$isString(value1) || (0, ($parcel$interopDefault($aSjVs$react))).isValidElement(value1);
var $3844679bc44ad46f$var$isRadioInput = (element)=>element.type === "radio";
var $3844679bc44ad46f$var$isRegex = (value1)=>value1 instanceof RegExp;
const $3844679bc44ad46f$var$defaultResult = {
    value: false,
    isValid: false
};
const $3844679bc44ad46f$var$validResult = {
    value: true,
    isValid: true
};
var $3844679bc44ad46f$var$getCheckboxValue = (options)=>{
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options.filter((option)=>option && option.checked && !option.disabled).map((option)=>option.value);
            return {
                value: values,
                isValid: !!values.length
            };
        }
        return options[0].checked && !options[0].disabled ? options[0].attributes && !$3844679bc44ad46f$var$isUndefined(options[0].attributes.value) ? $3844679bc44ad46f$var$isUndefined(options[0].value) || options[0].value === "" ? $3844679bc44ad46f$var$validResult : {
            value: options[0].value,
            isValid: true
        } : $3844679bc44ad46f$var$validResult : $3844679bc44ad46f$var$defaultResult;
    }
    return $3844679bc44ad46f$var$defaultResult;
};
const $3844679bc44ad46f$var$defaultReturn = {
    isValid: false,
    value: null
};
var $3844679bc44ad46f$var$getRadioValue = (options)=>Array.isArray(options) ? options.reduce((previous, option)=>option && option.checked && !option.disabled ? {
            isValid: true,
            value: option.value
        } : previous, $3844679bc44ad46f$var$defaultReturn) : $3844679bc44ad46f$var$defaultReturn;
function $3844679bc44ad46f$var$getValidateError(result, ref, type = "validate") {
    if ($3844679bc44ad46f$var$isMessage(result) || Array.isArray(result) && result.every($3844679bc44ad46f$var$isMessage) || $3844679bc44ad46f$var$isBoolean(result) && !result) return {
        type: type,
        message: $3844679bc44ad46f$var$isMessage(result) ? result : "",
        ref: ref
    };
}
var $3844679bc44ad46f$var$getValueAndMessage = (validationData)=>$3844679bc44ad46f$var$isObject(validationData) && !$3844679bc44ad46f$var$isRegex(validationData) ? validationData : {
        value: validationData,
        message: ""
    };
var $3844679bc44ad46f$var$validateField = async (field, inputValue, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray)=>{
    const { ref: ref , refs: refs , required: required , maxLength: maxLength , minLength: minLength , min: min , max: max , pattern: pattern , validate: validate , name: name , valueAsNumber: valueAsNumber , mount: mount , disabled: disabled  } = field._f;
    if (!mount || disabled) return {};
    const inputRef = refs ? refs[0] : ref;
    const setCustomValidity = (message)=>{
        if (shouldUseNativeValidation && inputRef.reportValidity) {
            inputRef.setCustomValidity($3844679bc44ad46f$var$isBoolean(message) ? "" : message || "");
            inputRef.reportValidity();
        }
    };
    const error = {};
    const isRadio = $3844679bc44ad46f$var$isRadioInput(ref);
    const isCheckBox = $3844679bc44ad46f$var$isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = (valueAsNumber || $3844679bc44ad46f$var$isFileInput(ref)) && !ref.value || inputValue === "" || Array.isArray(inputValue) && !inputValue.length;
    const appendErrorsCurry = $3844679bc44ad46f$export$b196c2a4f765bd30.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = $3844679bc44ad46f$var$INPUT_VALIDATION_RULES.maxLength, minType = $3844679bc44ad46f$var$INPUT_VALIDATION_RULES.minLength)=>{
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = {
            type: exceedMax ? maxType : minType,
            message: message,
            ref: ref,
            ...appendErrorsCurry(exceedMax ? maxType : minType, message)
        };
    };
    if (isFieldArray ? !Array.isArray(inputValue) || !inputValue.length : required && (!isRadioOrCheckbox && (isEmpty || $3844679bc44ad46f$var$isNullOrUndefined(inputValue)) || $3844679bc44ad46f$var$isBoolean(inputValue) && !inputValue || isCheckBox && !$3844679bc44ad46f$var$getCheckboxValue(refs).isValid || isRadio && !$3844679bc44ad46f$var$getRadioValue(refs).isValid)) {
        const { value: value1 , message: message  } = $3844679bc44ad46f$var$isMessage(required) ? {
            value: !!required,
            message: required
        } : $3844679bc44ad46f$var$getValueAndMessage(required);
        if (value1) {
            error[name] = {
                type: $3844679bc44ad46f$var$INPUT_VALIDATION_RULES.required,
                message: message,
                ref: inputRef,
                ...appendErrorsCurry($3844679bc44ad46f$var$INPUT_VALIDATION_RULES.required, message)
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (!isEmpty && (!$3844679bc44ad46f$var$isNullOrUndefined(min) || !$3844679bc44ad46f$var$isNullOrUndefined(max))) {
        let exceedMax;
        let exceedMin;
        const maxOutput = $3844679bc44ad46f$var$getValueAndMessage(max);
        const minOutput = $3844679bc44ad46f$var$getValueAndMessage(min);
        if (!$3844679bc44ad46f$var$isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
            const valueNumber = ref.valueAsNumber || (inputValue ? +inputValue : inputValue);
            if (!$3844679bc44ad46f$var$isNullOrUndefined(maxOutput.value)) exceedMax = valueNumber > maxOutput.value;
            if (!$3844679bc44ad46f$var$isNullOrUndefined(minOutput.value)) exceedMin = valueNumber < minOutput.value;
        } else {
            const valueDate = ref.valueAsDate || new Date(inputValue);
            const convertTimeToDate = (time)=>new Date(new Date().toDateString() + " " + time);
            const isTime = ref.type == "time";
            const isWeek = ref.type == "week";
            if ($3844679bc44ad46f$var$isString(maxOutput.value) && inputValue) exceedMax = isTime ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value) : isWeek ? inputValue > maxOutput.value : valueDate > new Date(maxOutput.value);
            if ($3844679bc44ad46f$var$isString(minOutput.value) && inputValue) exceedMin = isTime ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value) : isWeek ? inputValue < minOutput.value : valueDate < new Date(minOutput.value);
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, $3844679bc44ad46f$var$INPUT_VALIDATION_RULES.max, $3844679bc44ad46f$var$INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if ((maxLength || minLength) && !isEmpty && ($3844679bc44ad46f$var$isString(inputValue) || isFieldArray && Array.isArray(inputValue))) {
        const maxLengthOutput = $3844679bc44ad46f$var$getValueAndMessage(maxLength);
        const minLengthOutput = $3844679bc44ad46f$var$getValueAndMessage(minLength);
        const exceedMax = !$3844679bc44ad46f$var$isNullOrUndefined(maxLengthOutput.value) && inputValue.length > maxLengthOutput.value;
        const exceedMin = !$3844679bc44ad46f$var$isNullOrUndefined(minLengthOutput.value) && inputValue.length < minLengthOutput.value;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if (pattern && !isEmpty && $3844679bc44ad46f$var$isString(inputValue)) {
        const { value: patternValue , message: message  } = $3844679bc44ad46f$var$getValueAndMessage(pattern);
        if ($3844679bc44ad46f$var$isRegex(patternValue) && !inputValue.match(patternValue)) {
            error[name] = {
                type: $3844679bc44ad46f$var$INPUT_VALIDATION_RULES.pattern,
                message: message,
                ref: ref,
                ...appendErrorsCurry($3844679bc44ad46f$var$INPUT_VALIDATION_RULES.pattern, message)
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (validate) {
        if ($3844679bc44ad46f$var$isFunction(validate)) {
            const result = await validate(inputValue);
            const validateError = $3844679bc44ad46f$var$getValidateError(result, inputRef);
            if (validateError) {
                error[name] = {
                    ...validateError,
                    ...appendErrorsCurry($3844679bc44ad46f$var$INPUT_VALIDATION_RULES.validate, validateError.message)
                };
                if (!validateAllFieldCriteria) {
                    setCustomValidity(validateError.message);
                    return error;
                }
            }
        } else if ($3844679bc44ad46f$var$isObject(validate)) {
            let validationResult = {};
            for(const key in validate){
                if (!$3844679bc44ad46f$var$isEmptyObject(validationResult) && !validateAllFieldCriteria) break;
                const validateError = $3844679bc44ad46f$var$getValidateError(await validate[key](inputValue), inputRef, key);
                if (validateError) {
                    validationResult = {
                        ...validateError,
                        ...appendErrorsCurry(key, validateError.message)
                    };
                    setCustomValidity(validateError.message);
                    if (validateAllFieldCriteria) error[name] = validationResult;
                }
            }
            if (!$3844679bc44ad46f$var$isEmptyObject(validationResult)) {
                error[name] = {
                    ref: inputRef,
                    ...validationResult
                };
                if (!validateAllFieldCriteria) return error;
            }
        }
    }
    setCustomValidity(true);
    return error;
};
function $3844679bc44ad46f$var$append(data, value1) {
    return [
        ...data,
        ...$3844679bc44ad46f$var$convertToArrayPayload(value1)
    ];
}
var $3844679bc44ad46f$var$fillEmptyArray = (value1)=>Array.isArray(value1) ? value1.map(()=>undefined) : undefined;
var $3844679bc44ad46f$var$getValidationModes = (mode)=>({
        isOnSubmit: !mode || mode === $3844679bc44ad46f$var$VALIDATION_MODE.onSubmit,
        isOnBlur: mode === $3844679bc44ad46f$var$VALIDATION_MODE.onBlur,
        isOnChange: mode === $3844679bc44ad46f$var$VALIDATION_MODE.onChange,
        isOnAll: mode === $3844679bc44ad46f$var$VALIDATION_MODE.all,
        isOnTouch: mode === $3844679bc44ad46f$var$VALIDATION_MODE.onTouched
    });
function $3844679bc44ad46f$var$insert(data, index, value1) {
    return [
        ...data.slice(0, index),
        ...$3844679bc44ad46f$var$convertToArrayPayload(value1),
        ...data.slice(index)
    ];
}
var $3844679bc44ad46f$var$moveArrayAt = (data, from, to)=>{
    if (!Array.isArray(data)) return [];
    if ($3844679bc44ad46f$var$isUndefined(data[to])) data[to] = undefined;
    data.splice(to, 0, data.splice(from, 1)[0]);
    return data;
};
function $3844679bc44ad46f$var$prepend(data, value1) {
    return [
        ...$3844679bc44ad46f$var$convertToArrayPayload(value1),
        ...$3844679bc44ad46f$var$convertToArrayPayload(data)
    ];
}
function $3844679bc44ad46f$var$removeAtIndexes(data, indexes) {
    let i = 0;
    const temp = [
        ...data
    ];
    for (const index of indexes){
        temp.splice(index - i, 1);
        i++;
    }
    return $3844679bc44ad46f$var$compact(temp).length ? temp : [];
}
var $3844679bc44ad46f$var$removeArrayAt = (data, index)=>$3844679bc44ad46f$var$isUndefined(index) ? [] : $3844679bc44ad46f$var$removeAtIndexes(data, $3844679bc44ad46f$var$convertToArrayPayload(index).sort((a, b)=>a - b));
var $3844679bc44ad46f$var$swapArrayAt = (data, indexA, indexB)=>{
    data[indexA] = [
        data[indexB],
        data[indexB] = data[indexA]
    ][0];
};
function $3844679bc44ad46f$var$baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while(index < length)object = $3844679bc44ad46f$var$isUndefined(object) ? index++ : object[updatePath[index++]];
    return object;
}
function $3844679bc44ad46f$var$isEmptyArray(obj) {
    for(const key in obj){
        if (!$3844679bc44ad46f$var$isUndefined(obj[key])) return false;
    }
    return true;
}
function $3844679bc44ad46f$var$unset(object, path) {
    const updatePath = $3844679bc44ad46f$var$isKey(path) ? [
        path
    ] : $3844679bc44ad46f$var$stringToPath(path);
    const childObject = updatePath.length == 1 ? object : $3844679bc44ad46f$var$baseGet(object, updatePath);
    const key = updatePath[updatePath.length - 1];
    let previousObjRef;
    if (childObject) delete childObject[key];
    for(let k = 0; k < updatePath.slice(0, -1).length; k++){
        let index = -1;
        let objectRef;
        const currentPaths = updatePath.slice(0, -(k + 1));
        const currentPathsLength = currentPaths.length - 1;
        if (k > 0) previousObjRef = object;
        while(++index < currentPaths.length){
            const item = currentPaths[index];
            objectRef = objectRef ? objectRef[item] : object[item];
            if (currentPathsLength === index && ($3844679bc44ad46f$var$isObject(objectRef) && $3844679bc44ad46f$var$isEmptyObject(objectRef) || Array.isArray(objectRef) && $3844679bc44ad46f$var$isEmptyArray(objectRef))) previousObjRef ? delete previousObjRef[item] : delete object[item];
            previousObjRef = objectRef;
        }
    }
    return object;
}
var $3844679bc44ad46f$var$updateAt = (fieldValues, index, value1)=>{
    fieldValues[index] = value1;
    return fieldValues;
};
/**
 * A custom hook that exposes convenient methods to perform operations with a list of dynamic inputs that need to be appended, updated, removed etc. • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn) • [Video](https://youtu.be/4MrbfGSFY2A)
 *
 * @remarks
 * [API](https://react-hook-form.com/api/usefieldarray) • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn)
 *
 * @param props - useFieldArray props
 *
 * @returns methods - functions to manipulate with the Field Arrays (dynamic inputs) {@link UseFieldArrayReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, control, handleSubmit, reset, trigger, setError } = useForm({
 *     defaultValues: {
 *       test: []
 *     }
 *   });
 *   const { fields, append } = useFieldArray({
 *     control,
 *     name: "test"
 *   });
 *
 *   return (
 *     <form onSubmit={handleSubmit(data => console.log(data))}>
 *       {fields.map((item, index) => (
 *          <input key={item.id} {...register(`test.${index}.firstName`)}  />
 *       ))}
 *       <button type="button" onClick={() => append({ firstName: "bill" })}>
 *         append
 *       </button>
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */ function $3844679bc44ad46f$export$310131896651d559(props) {
    const methods = $3844679bc44ad46f$export$4d957a5e1be13b03();
    const { control: control = methods.control , name: name , keyName: keyName = "id" , shouldUnregister: shouldUnregister  } = props;
    const [fields, setFields] = (0, ($parcel$interopDefault($aSjVs$react))).useState(control._getFieldArray(name));
    const ids = (0, ($parcel$interopDefault($aSjVs$react))).useRef(control._getFieldArray(name).map($3844679bc44ad46f$var$generateId));
    const _fieldIds = (0, ($parcel$interopDefault($aSjVs$react))).useRef(fields);
    const _name = (0, ($parcel$interopDefault($aSjVs$react))).useRef(name);
    const _actioned = (0, ($parcel$interopDefault($aSjVs$react))).useRef(false);
    _name.current = name;
    _fieldIds.current = fields;
    control._names.array.add(name);
    props.rules && control.register(name, props.rules);
    const callback = (0, ($parcel$interopDefault($aSjVs$react))).useCallback(({ values: values , name: fieldArrayName  })=>{
        if (fieldArrayName === _name.current || !fieldArrayName) {
            const fieldValues = $3844679bc44ad46f$export$3988ae62b71be9a3(values, _name.current);
            if (Array.isArray(fieldValues)) {
                setFields(fieldValues);
                ids.current = fieldValues.map($3844679bc44ad46f$var$generateId);
            }
        }
    }, []);
    $3844679bc44ad46f$var$useSubscribe({
        callback: callback,
        subject: control._subjects.array
    });
    const updateValues = (0, ($parcel$interopDefault($aSjVs$react))).useCallback((updatedFieldArrayValues)=>{
        _actioned.current = true;
        control._updateFieldArray(name, updatedFieldArrayValues);
    }, [
        control,
        name
    ]);
    const append$1 = (value1, options)=>{
        const appendValue = $3844679bc44ad46f$var$convertToArrayPayload($3844679bc44ad46f$var$cloneObject(value1));
        const updatedFieldArrayValues = $3844679bc44ad46f$var$append(control._getFieldArray(name), appendValue);
        control._names.focus = $3844679bc44ad46f$var$getFocusFieldName(name, updatedFieldArrayValues.length - 1, options);
        ids.current = $3844679bc44ad46f$var$append(ids.current, appendValue.map($3844679bc44ad46f$var$generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, $3844679bc44ad46f$var$append, {
            argA: $3844679bc44ad46f$var$fillEmptyArray(value1)
        });
    };
    const prepend$1 = (value1, options)=>{
        const prependValue = $3844679bc44ad46f$var$convertToArrayPayload($3844679bc44ad46f$var$cloneObject(value1));
        const updatedFieldArrayValues = $3844679bc44ad46f$var$prepend(control._getFieldArray(name), prependValue);
        control._names.focus = $3844679bc44ad46f$var$getFocusFieldName(name, 0, options);
        ids.current = $3844679bc44ad46f$var$prepend(ids.current, prependValue.map($3844679bc44ad46f$var$generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, $3844679bc44ad46f$var$prepend, {
            argA: $3844679bc44ad46f$var$fillEmptyArray(value1)
        });
    };
    const remove = (index)=>{
        const updatedFieldArrayValues = $3844679bc44ad46f$var$removeArrayAt(control._getFieldArray(name), index);
        ids.current = $3844679bc44ad46f$var$removeArrayAt(ids.current, index);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, $3844679bc44ad46f$var$removeArrayAt, {
            argA: index
        });
    };
    const insert$1 = (index, value1, options)=>{
        const insertValue = $3844679bc44ad46f$var$convertToArrayPayload($3844679bc44ad46f$var$cloneObject(value1));
        const updatedFieldArrayValues = $3844679bc44ad46f$var$insert(control._getFieldArray(name), index, insertValue);
        control._names.focus = $3844679bc44ad46f$var$getFocusFieldName(name, index, options);
        ids.current = $3844679bc44ad46f$var$insert(ids.current, index, insertValue.map($3844679bc44ad46f$var$generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, $3844679bc44ad46f$var$insert, {
            argA: index,
            argB: $3844679bc44ad46f$var$fillEmptyArray(value1)
        });
    };
    const swap = (indexA, indexB)=>{
        const updatedFieldArrayValues = control._getFieldArray(name);
        $3844679bc44ad46f$var$swapArrayAt(updatedFieldArrayValues, indexA, indexB);
        $3844679bc44ad46f$var$swapArrayAt(ids.current, indexA, indexB);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, $3844679bc44ad46f$var$swapArrayAt, {
            argA: indexA,
            argB: indexB
        }, false);
    };
    const move = (from, to)=>{
        const updatedFieldArrayValues = control._getFieldArray(name);
        $3844679bc44ad46f$var$moveArrayAt(updatedFieldArrayValues, from, to);
        $3844679bc44ad46f$var$moveArrayAt(ids.current, from, to);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, $3844679bc44ad46f$var$moveArrayAt, {
            argA: from,
            argB: to
        }, false);
    };
    const update = (index, value1)=>{
        const updateValue = $3844679bc44ad46f$var$cloneObject(value1);
        const updatedFieldArrayValues = $3844679bc44ad46f$var$updateAt(control._getFieldArray(name), index, updateValue);
        ids.current = [
            ...updatedFieldArrayValues
        ].map((item, i)=>!item || i === index ? $3844679bc44ad46f$var$generateId() : ids.current[i]);
        updateValues(updatedFieldArrayValues);
        setFields([
            ...updatedFieldArrayValues
        ]);
        control._updateFieldArray(name, updatedFieldArrayValues, $3844679bc44ad46f$var$updateAt, {
            argA: index,
            argB: updateValue
        }, true, false);
    };
    const replace = (value1)=>{
        const updatedFieldArrayValues = $3844679bc44ad46f$var$convertToArrayPayload($3844679bc44ad46f$var$cloneObject(value1));
        ids.current = updatedFieldArrayValues.map($3844679bc44ad46f$var$generateId);
        updateValues([
            ...updatedFieldArrayValues
        ]);
        setFields([
            ...updatedFieldArrayValues
        ]);
        control._updateFieldArray(name, [
            ...updatedFieldArrayValues
        ], (data)=>data, {}, true, false);
    };
    (0, ($parcel$interopDefault($aSjVs$react))).useEffect(()=>{
        control._stateFlags.action = false;
        $3844679bc44ad46f$var$isWatched(name, control._names) && control._subjects.state.next({});
        if (_actioned.current && (!$3844679bc44ad46f$var$getValidationModes(control._options.mode).isOnSubmit || control._formState.isSubmitted)) {
            if (control._options.resolver) control._executeSchema([
                name
            ]).then((result)=>{
                const error = $3844679bc44ad46f$export$3988ae62b71be9a3(result.errors, name);
                const existingError = $3844679bc44ad46f$export$3988ae62b71be9a3(control._formState.errors, name);
                if (existingError ? !error && existingError.type : error && error.type) {
                    error ? $3844679bc44ad46f$export$adaa4cf7ef1b65be(control._formState.errors, name, error) : $3844679bc44ad46f$var$unset(control._formState.errors, name);
                    control._subjects.state.next({
                        errors: control._formState.errors
                    });
                }
            });
            else {
                const field = $3844679bc44ad46f$export$3988ae62b71be9a3(control._fields, name);
                if (field && field._f) $3844679bc44ad46f$var$validateField(field, $3844679bc44ad46f$export$3988ae62b71be9a3(control._formValues, name), control._options.criteriaMode === $3844679bc44ad46f$var$VALIDATION_MODE.all, control._options.shouldUseNativeValidation, true).then((error)=>!$3844679bc44ad46f$var$isEmptyObject(error) && control._subjects.state.next({
                        errors: $3844679bc44ad46f$var$updateFieldArrayRootError(control._formState.errors, error, name)
                    }));
            }
        }
        control._subjects.watch.next({
            name: name,
            values: control._formValues
        });
        control._names.focus && $3844679bc44ad46f$var$focusFieldBy(control._fields, (key)=>!!key && key.startsWith(control._names.focus || ""));
        control._names.focus = "";
        control._proxyFormState.isValid && control._updateValid();
    }, [
        fields,
        name,
        control
    ]);
    (0, ($parcel$interopDefault($aSjVs$react))).useEffect(()=>{
        !$3844679bc44ad46f$export$3988ae62b71be9a3(control._formValues, name) && control._updateFieldArray(name);
        return ()=>{
            (control._options.shouldUnregister || shouldUnregister) && control.unregister(name);
        };
    }, [
        name,
        control,
        keyName,
        shouldUnregister
    ]);
    return {
        swap: (0, ($parcel$interopDefault($aSjVs$react))).useCallback(swap, [
            updateValues,
            name,
            control
        ]),
        move: (0, ($parcel$interopDefault($aSjVs$react))).useCallback(move, [
            updateValues,
            name,
            control
        ]),
        prepend: (0, ($parcel$interopDefault($aSjVs$react))).useCallback(prepend$1, [
            updateValues,
            name,
            control
        ]),
        append: (0, ($parcel$interopDefault($aSjVs$react))).useCallback(append$1, [
            updateValues,
            name,
            control
        ]),
        remove: (0, ($parcel$interopDefault($aSjVs$react))).useCallback(remove, [
            updateValues,
            name,
            control
        ]),
        insert: (0, ($parcel$interopDefault($aSjVs$react))).useCallback(insert$1, [
            updateValues,
            name,
            control
        ]),
        update: (0, ($parcel$interopDefault($aSjVs$react))).useCallback(update, [
            updateValues,
            name,
            control
        ]),
        replace: (0, ($parcel$interopDefault($aSjVs$react))).useCallback(replace, [
            updateValues,
            name,
            control
        ]),
        fields: (0, ($parcel$interopDefault($aSjVs$react))).useMemo(()=>fields.map((field, index)=>({
                    ...field,
                    [keyName]: ids.current[index] || $3844679bc44ad46f$var$generateId()
                })), [
            fields,
            keyName
        ])
    };
}
function $3844679bc44ad46f$var$createSubject() {
    let _observers = [];
    const next = (value1)=>{
        for (const observer of _observers)observer.next(value1);
    };
    const subscribe = (observer)=>{
        _observers.push(observer);
        return {
            unsubscribe: ()=>{
                _observers = _observers.filter((o)=>o !== observer);
            }
        };
    };
    const unsubscribe = ()=>{
        _observers = [];
    };
    return {
        get observers () {
            return _observers;
        },
        next: next,
        subscribe: subscribe,
        unsubscribe: unsubscribe
    };
}
var $3844679bc44ad46f$var$isPrimitive = (value1)=>$3844679bc44ad46f$var$isNullOrUndefined(value1) || !$3844679bc44ad46f$var$isObjectType(value1);
function $3844679bc44ad46f$var$deepEqual(object1, object2) {
    if ($3844679bc44ad46f$var$isPrimitive(object1) || $3844679bc44ad46f$var$isPrimitive(object2)) return object1 === object2;
    if ($3844679bc44ad46f$var$isDateObject(object1) && $3844679bc44ad46f$var$isDateObject(object2)) return object1.getTime() === object2.getTime();
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) return false;
    for (const key of keys1){
        const val1 = object1[key];
        if (!keys2.includes(key)) return false;
        if (key !== "ref") {
            const val2 = object2[key];
            if ($3844679bc44ad46f$var$isDateObject(val1) && $3844679bc44ad46f$var$isDateObject(val2) || $3844679bc44ad46f$var$isObject(val1) && $3844679bc44ad46f$var$isObject(val2) || Array.isArray(val1) && Array.isArray(val2) ? !$3844679bc44ad46f$var$deepEqual(val1, val2) : val1 !== val2) return false;
        }
    }
    return true;
}
var $3844679bc44ad46f$var$isHTMLElement = (value1)=>{
    const owner = value1 ? value1.ownerDocument : 0;
    const ElementClass = owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement;
    return value1 instanceof ElementClass;
};
var $3844679bc44ad46f$var$isMultipleSelect = (element)=>element.type === `select-multiple`;
var $3844679bc44ad46f$var$isRadioOrCheckbox = (ref)=>$3844679bc44ad46f$var$isRadioInput(ref) || $3844679bc44ad46f$var$isCheckBoxInput(ref);
var $3844679bc44ad46f$var$live = (ref)=>$3844679bc44ad46f$var$isHTMLElement(ref) && ref.isConnected;
var $3844679bc44ad46f$var$objectHasFunction = (data)=>{
    for(const key in data){
        if ($3844679bc44ad46f$var$isFunction(data[key])) return true;
    }
    return false;
};
function $3844679bc44ad46f$var$markFieldsDirty(data, fields = {}) {
    const isParentNodeArray = Array.isArray(data);
    if ($3844679bc44ad46f$var$isObject(data) || isParentNodeArray) for(const key in data){
        if (Array.isArray(data[key]) || $3844679bc44ad46f$var$isObject(data[key]) && !$3844679bc44ad46f$var$objectHasFunction(data[key])) {
            fields[key] = Array.isArray(data[key]) ? [] : {};
            $3844679bc44ad46f$var$markFieldsDirty(data[key], fields[key]);
        } else if (!$3844679bc44ad46f$var$isNullOrUndefined(data[key])) fields[key] = true;
    }
    return fields;
}
function $3844679bc44ad46f$var$getDirtyFieldsFromDefaultValues(data, formValues, dirtyFieldsFromValues) {
    const isParentNodeArray = Array.isArray(data);
    if ($3844679bc44ad46f$var$isObject(data) || isParentNodeArray) {
        for(const key in data)if (Array.isArray(data[key]) || $3844679bc44ad46f$var$isObject(data[key]) && !$3844679bc44ad46f$var$objectHasFunction(data[key])) {
            if ($3844679bc44ad46f$var$isUndefined(formValues) || $3844679bc44ad46f$var$isPrimitive(dirtyFieldsFromValues[key])) dirtyFieldsFromValues[key] = Array.isArray(data[key]) ? $3844679bc44ad46f$var$markFieldsDirty(data[key], []) : {
                ...$3844679bc44ad46f$var$markFieldsDirty(data[key])
            };
            else $3844679bc44ad46f$var$getDirtyFieldsFromDefaultValues(data[key], $3844679bc44ad46f$var$isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
        } else $3844679bc44ad46f$var$deepEqual(data[key], formValues[key]) ? delete dirtyFieldsFromValues[key] : dirtyFieldsFromValues[key] = true;
    }
    return dirtyFieldsFromValues;
}
var $3844679bc44ad46f$var$getDirtyFields = (defaultValues, formValues)=>$3844679bc44ad46f$var$getDirtyFieldsFromDefaultValues(defaultValues, formValues, $3844679bc44ad46f$var$markFieldsDirty(formValues));
var $3844679bc44ad46f$var$getFieldValueAs = (value1, { valueAsNumber: valueAsNumber , valueAsDate: valueAsDate , setValueAs: setValueAs  })=>$3844679bc44ad46f$var$isUndefined(value1) ? value1 : valueAsNumber ? value1 === "" ? NaN : value1 ? +value1 : value1 : valueAsDate && $3844679bc44ad46f$var$isString(value1) ? new Date(value1) : setValueAs ? setValueAs(value1) : value1;
function $3844679bc44ad46f$var$getFieldValue(_f) {
    const ref = _f.ref;
    if (_f.refs ? _f.refs.every((ref)=>ref.disabled) : ref.disabled) return;
    if ($3844679bc44ad46f$var$isFileInput(ref)) return ref.files;
    if ($3844679bc44ad46f$var$isRadioInput(ref)) return $3844679bc44ad46f$var$getRadioValue(_f.refs).value;
    if ($3844679bc44ad46f$var$isMultipleSelect(ref)) return [
        ...ref.selectedOptions
    ].map(({ value: value1  })=>value1);
    if ($3844679bc44ad46f$var$isCheckBoxInput(ref)) return $3844679bc44ad46f$var$getCheckboxValue(_f.refs).value;
    return $3844679bc44ad46f$var$getFieldValueAs($3844679bc44ad46f$var$isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}
var $3844679bc44ad46f$var$getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation)=>{
    const fields = {};
    for (const name of fieldsNames){
        const field = $3844679bc44ad46f$export$3988ae62b71be9a3(_fields, name);
        field && $3844679bc44ad46f$export$adaa4cf7ef1b65be(fields, name, field._f);
    }
    return {
        criteriaMode: criteriaMode,
        names: [
            ...fieldsNames
        ],
        fields: fields,
        shouldUseNativeValidation: shouldUseNativeValidation
    };
};
var $3844679bc44ad46f$var$getRuleValue = (rule)=>$3844679bc44ad46f$var$isUndefined(rule) ? rule : $3844679bc44ad46f$var$isRegex(rule) ? rule.source : $3844679bc44ad46f$var$isObject(rule) ? $3844679bc44ad46f$var$isRegex(rule.value) ? rule.value.source : rule.value : rule;
var $3844679bc44ad46f$var$hasValidation = (options)=>options.mount && (options.required || options.min || options.max || options.maxLength || options.minLength || options.pattern || options.validate);
function $3844679bc44ad46f$var$schemaErrorLookup(errors, _fields, name) {
    const error = $3844679bc44ad46f$export$3988ae62b71be9a3(errors, name);
    if (error || $3844679bc44ad46f$var$isKey(name)) return {
        error: error,
        name: name
    };
    const names = name.split(".");
    while(names.length){
        const fieldName = names.join(".");
        const field = $3844679bc44ad46f$export$3988ae62b71be9a3(_fields, fieldName);
        const foundError = $3844679bc44ad46f$export$3988ae62b71be9a3(errors, fieldName);
        if (field && !Array.isArray(field) && name !== fieldName) return {
            name: name
        };
        if (foundError && foundError.type) return {
            name: fieldName,
            error: foundError
        };
        names.pop();
    }
    return {
        name: name
    };
}
var $3844679bc44ad46f$var$skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode)=>{
    if (mode.isOnAll) return false;
    else if (!isSubmitted && mode.isOnTouch) return !(isTouched || isBlurEvent);
    else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) return !isBlurEvent;
    else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) return isBlurEvent;
    return true;
};
var $3844679bc44ad46f$var$unsetEmptyArray = (ref, name)=>!$3844679bc44ad46f$var$compact($3844679bc44ad46f$export$3988ae62b71be9a3(ref, name)).length && $3844679bc44ad46f$var$unset(ref, name);
const $3844679bc44ad46f$var$defaultOptions = {
    mode: $3844679bc44ad46f$var$VALIDATION_MODE.onSubmit,
    reValidateMode: $3844679bc44ad46f$var$VALIDATION_MODE.onChange,
    shouldFocusError: true
};
function $3844679bc44ad46f$var$createFormControl(props = {}) {
    let _options = {
        ...$3844679bc44ad46f$var$defaultOptions,
        ...props
    };
    let _formState = {
        submitCount: 0,
        isDirty: false,
        isValidating: false,
        isSubmitted: false,
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        touchedFields: {},
        dirtyFields: {},
        errors: {}
    };
    let _fields = {};
    let _defaultValues = $3844679bc44ad46f$var$cloneObject(_options.defaultValues) || {};
    let _formValues = _options.shouldUnregister ? {} : $3844679bc44ad46f$var$cloneObject(_defaultValues);
    let _stateFlags = {
        action: false,
        mount: false,
        watch: false
    };
    let _names = {
        mount: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set()
    };
    let delayErrorCallback;
    let timer = 0;
    const _proxyFormState = {
        isDirty: false,
        dirtyFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false
    };
    const _subjects = {
        watch: $3844679bc44ad46f$var$createSubject(),
        array: $3844679bc44ad46f$var$createSubject(),
        state: $3844679bc44ad46f$var$createSubject()
    };
    const validationModeBeforeSubmit = $3844679bc44ad46f$var$getValidationModes(_options.mode);
    const validationModeAfterSubmit = $3844679bc44ad46f$var$getValidationModes(_options.reValidateMode);
    const shouldDisplayAllAssociatedErrors = _options.criteriaMode === $3844679bc44ad46f$var$VALIDATION_MODE.all;
    const debounce = (callback)=>(wait)=>{
            clearTimeout(timer);
            timer = window.setTimeout(callback, wait);
        };
    const _updateValid = async ()=>{
        if (_proxyFormState.isValid) {
            const isValid = _options.resolver ? $3844679bc44ad46f$var$isEmptyObject((await _executeSchema()).errors) : await executeBuiltInValidation(_fields, true);
            if (isValid !== _formState.isValid) {
                _formState.isValid = isValid;
                _subjects.state.next({
                    isValid: isValid
                });
            }
        }
    };
    const _updateIsValidating = (value1)=>_proxyFormState.isValidating && value1 !== _formState.isValidating && _subjects.state.next({
            isValidating: value1
        });
    const _updateFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true)=>{
        if (args && method) {
            _stateFlags.action = true;
            if (shouldUpdateFieldsAndState && Array.isArray($3844679bc44ad46f$export$3988ae62b71be9a3(_fields, name))) {
                const fieldValues = method($3844679bc44ad46f$export$3988ae62b71be9a3(_fields, name), args.argA, args.argB);
                shouldSetValues && $3844679bc44ad46f$export$adaa4cf7ef1b65be(_fields, name, fieldValues);
            }
            if (shouldUpdateFieldsAndState && Array.isArray($3844679bc44ad46f$export$3988ae62b71be9a3(_formState.errors, name))) {
                const errors = method($3844679bc44ad46f$export$3988ae62b71be9a3(_formState.errors, name), args.argA, args.argB);
                shouldSetValues && $3844679bc44ad46f$export$adaa4cf7ef1b65be(_formState.errors, name, errors);
                $3844679bc44ad46f$var$unsetEmptyArray(_formState.errors, name);
            }
            if (_proxyFormState.touchedFields && shouldUpdateFieldsAndState && Array.isArray($3844679bc44ad46f$export$3988ae62b71be9a3(_formState.touchedFields, name))) {
                const touchedFields = method($3844679bc44ad46f$export$3988ae62b71be9a3(_formState.touchedFields, name), args.argA, args.argB);
                shouldSetValues && $3844679bc44ad46f$export$adaa4cf7ef1b65be(_formState.touchedFields, name, touchedFields);
            }
            if (_proxyFormState.dirtyFields) _formState.dirtyFields = $3844679bc44ad46f$var$getDirtyFields(_defaultValues, _formValues);
            _subjects.state.next({
                name: name,
                isDirty: _getDirty(name, values),
                dirtyFields: _formState.dirtyFields,
                errors: _formState.errors,
                isValid: _formState.isValid
            });
        } else $3844679bc44ad46f$export$adaa4cf7ef1b65be(_formValues, name, values);
    };
    const updateErrors = (name, error)=>{
        $3844679bc44ad46f$export$adaa4cf7ef1b65be(_formState.errors, name, error);
        _subjects.state.next({
            errors: _formState.errors
        });
    };
    const updateValidAndValue = (name, shouldSkipSetValueAs, value1, ref)=>{
        const field = $3844679bc44ad46f$export$3988ae62b71be9a3(_fields, name);
        if (field) {
            const defaultValue = $3844679bc44ad46f$export$3988ae62b71be9a3(_formValues, name, $3844679bc44ad46f$var$isUndefined(value1) ? $3844679bc44ad46f$export$3988ae62b71be9a3(_defaultValues, name) : value1);
            $3844679bc44ad46f$var$isUndefined(defaultValue) || ref && ref.defaultChecked || shouldSkipSetValueAs ? $3844679bc44ad46f$export$adaa4cf7ef1b65be(_formValues, name, shouldSkipSetValueAs ? defaultValue : $3844679bc44ad46f$var$getFieldValue(field._f)) : setFieldValue(name, defaultValue);
            _stateFlags.mount && _updateValid();
        }
    };
    const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender)=>{
        let shouldUpdateField = false;
        let isPreviousDirty = false;
        const output = {
            name: name
        };
        if (!isBlurEvent || shouldDirty) {
            if (_proxyFormState.isDirty) {
                isPreviousDirty = _formState.isDirty;
                _formState.isDirty = output.isDirty = _getDirty();
                shouldUpdateField = isPreviousDirty !== output.isDirty;
            }
            if (_proxyFormState.dirtyFields) {
                isPreviousDirty = $3844679bc44ad46f$export$3988ae62b71be9a3(_formState.dirtyFields, name);
                const isCurrentFieldPristine = $3844679bc44ad46f$var$deepEqual($3844679bc44ad46f$export$3988ae62b71be9a3(_defaultValues, name), fieldValue);
                isCurrentFieldPristine ? $3844679bc44ad46f$var$unset(_formState.dirtyFields, name) : $3844679bc44ad46f$export$adaa4cf7ef1b65be(_formState.dirtyFields, name, true);
                output.dirtyFields = _formState.dirtyFields;
                shouldUpdateField = shouldUpdateField || isPreviousDirty !== !isCurrentFieldPristine;
            }
        }
        if (isBlurEvent) {
            const isPreviousFieldTouched = $3844679bc44ad46f$export$3988ae62b71be9a3(_formState.touchedFields, name);
            if (!isPreviousFieldTouched) {
                $3844679bc44ad46f$export$adaa4cf7ef1b65be(_formState.touchedFields, name, isBlurEvent);
                output.touchedFields = _formState.touchedFields;
                shouldUpdateField = shouldUpdateField || _proxyFormState.touchedFields && isPreviousFieldTouched !== isBlurEvent;
            }
        }
        shouldUpdateField && shouldRender && _subjects.state.next(output);
        return shouldUpdateField ? output : {};
    };
    const shouldRenderByError = (name, isValid, error, fieldState)=>{
        const previousFieldError = $3844679bc44ad46f$export$3988ae62b71be9a3(_formState.errors, name);
        const shouldUpdateValid = _proxyFormState.isValid && $3844679bc44ad46f$var$isBoolean(isValid) && _formState.isValid !== isValid;
        if (props.delayError && error) {
            delayErrorCallback = debounce(()=>updateErrors(name, error));
            delayErrorCallback(props.delayError);
        } else {
            clearTimeout(timer);
            delayErrorCallback = null;
            error ? $3844679bc44ad46f$export$adaa4cf7ef1b65be(_formState.errors, name, error) : $3844679bc44ad46f$var$unset(_formState.errors, name);
        }
        if ((error ? !$3844679bc44ad46f$var$deepEqual(previousFieldError, error) : previousFieldError) || !$3844679bc44ad46f$var$isEmptyObject(fieldState) || shouldUpdateValid) {
            const updatedFormState = {
                ...fieldState,
                ...shouldUpdateValid && $3844679bc44ad46f$var$isBoolean(isValid) ? {
                    isValid: isValid
                } : {},
                errors: _formState.errors,
                name: name
            };
            _formState = {
                ..._formState,
                ...updatedFormState
            };
            _subjects.state.next(updatedFormState);
        }
        _updateIsValidating(false);
    };
    const _executeSchema = async (name)=>await _options.resolver(_formValues, _options.context, $3844679bc44ad46f$var$getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
    const executeSchemaAndUpdateState = async (names)=>{
        const { errors: errors  } = await _executeSchema();
        if (names) for (const name of names){
            const error = $3844679bc44ad46f$export$3988ae62b71be9a3(errors, name);
            error ? $3844679bc44ad46f$export$adaa4cf7ef1b65be(_formState.errors, name, error) : $3844679bc44ad46f$var$unset(_formState.errors, name);
        }
        else _formState.errors = errors;
        return errors;
    };
    const executeBuiltInValidation = async (fields, shouldOnlyCheckValid, context = {
        valid: true
    })=>{
        for(const name in fields){
            const field = fields[name];
            if (field) {
                const { _f: _f , ...fieldValue } = field;
                if (_f) {
                    const isFieldArrayRoot = _names.array.has(_f.name);
                    const fieldError = await $3844679bc44ad46f$var$validateField(field, $3844679bc44ad46f$export$3988ae62b71be9a3(_formValues, _f.name), shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation, isFieldArrayRoot);
                    if (fieldError[_f.name]) {
                        context.valid = false;
                        if (shouldOnlyCheckValid) break;
                    }
                    !shouldOnlyCheckValid && ($3844679bc44ad46f$export$3988ae62b71be9a3(fieldError, _f.name) ? isFieldArrayRoot ? $3844679bc44ad46f$var$updateFieldArrayRootError(_formState.errors, fieldError, _f.name) : $3844679bc44ad46f$export$adaa4cf7ef1b65be(_formState.errors, _f.name, fieldError[_f.name]) : $3844679bc44ad46f$var$unset(_formState.errors, _f.name));
                }
                fieldValue && await executeBuiltInValidation(fieldValue, shouldOnlyCheckValid, context);
            }
        }
        return context.valid;
    };
    const _removeUnmounted = ()=>{
        for (const name of _names.unMount){
            const field = $3844679bc44ad46f$export$3988ae62b71be9a3(_fields, name);
            field && (field._f.refs ? field._f.refs.every((ref)=>!$3844679bc44ad46f$var$live(ref)) : !$3844679bc44ad46f$var$live(field._f.ref)) && unregister(name);
        }
        _names.unMount = new Set();
    };
    const _getDirty = (name, data)=>(name && data && $3844679bc44ad46f$export$adaa4cf7ef1b65be(_formValues, name, data), !$3844679bc44ad46f$var$deepEqual(getValues(), _defaultValues));
    const _getWatch = (names, defaultValue, isGlobal)=>$3844679bc44ad46f$var$generateWatchOutput(names, _names, {
            ..._stateFlags.mount ? _formValues : $3844679bc44ad46f$var$isUndefined(defaultValue) ? _defaultValues : $3844679bc44ad46f$var$isString(names) ? {
                [names]: defaultValue
            } : defaultValue
        }, isGlobal);
    const _getFieldArray = (name)=>$3844679bc44ad46f$var$compact($3844679bc44ad46f$export$3988ae62b71be9a3(_stateFlags.mount ? _formValues : _defaultValues, name, props.shouldUnregister ? $3844679bc44ad46f$export$3988ae62b71be9a3(_defaultValues, name, []) : []));
    const setFieldValue = (name, value1, options = {})=>{
        const field = $3844679bc44ad46f$export$3988ae62b71be9a3(_fields, name);
        let fieldValue = value1;
        if (field) {
            const fieldReference = field._f;
            if (fieldReference) {
                !fieldReference.disabled && $3844679bc44ad46f$export$adaa4cf7ef1b65be(_formValues, name, $3844679bc44ad46f$var$getFieldValueAs(value1, fieldReference));
                fieldValue = $3844679bc44ad46f$var$isWeb && $3844679bc44ad46f$var$isHTMLElement(fieldReference.ref) && $3844679bc44ad46f$var$isNullOrUndefined(value1) ? "" : value1;
                if ($3844679bc44ad46f$var$isMultipleSelect(fieldReference.ref)) [
                    ...fieldReference.ref.options
                ].forEach((optionRef)=>optionRef.selected = fieldValue.includes(optionRef.value));
                else if (fieldReference.refs) {
                    if ($3844679bc44ad46f$var$isCheckBoxInput(fieldReference.ref)) fieldReference.refs.length > 1 ? fieldReference.refs.forEach((checkboxRef)=>(!checkboxRef.defaultChecked || !checkboxRef.disabled) && (checkboxRef.checked = Array.isArray(fieldValue) ? !!fieldValue.find((data)=>data === checkboxRef.value) : fieldValue === checkboxRef.value)) : fieldReference.refs[0] && (fieldReference.refs[0].checked = !!fieldValue);
                    else fieldReference.refs.forEach((radioRef)=>radioRef.checked = radioRef.value === fieldValue);
                } else if ($3844679bc44ad46f$var$isFileInput(fieldReference.ref)) fieldReference.ref.value = "";
                else {
                    fieldReference.ref.value = fieldValue;
                    if (!fieldReference.ref.type) _subjects.watch.next({
                        name: name
                    });
                }
            }
        }
        (options.shouldDirty || options.shouldTouch) && updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
        options.shouldValidate && trigger(name);
    };
    const setValues = (name, value1, options)=>{
        for(const fieldKey in value1){
            const fieldValue = value1[fieldKey];
            const fieldName = `${name}.${fieldKey}`;
            const field = $3844679bc44ad46f$export$3988ae62b71be9a3(_fields, fieldName);
            (_names.array.has(name) || !$3844679bc44ad46f$var$isPrimitive(fieldValue) || field && !field._f) && !$3844679bc44ad46f$var$isDateObject(fieldValue) ? setValues(fieldName, fieldValue, options) : setFieldValue(fieldName, fieldValue, options);
        }
    };
    const setValue = (name, value1, options = {})=>{
        const field = $3844679bc44ad46f$export$3988ae62b71be9a3(_fields, name);
        const isFieldArray = _names.array.has(name);
        const cloneValue = $3844679bc44ad46f$var$cloneObject(value1);
        $3844679bc44ad46f$export$adaa4cf7ef1b65be(_formValues, name, cloneValue);
        if (isFieldArray) {
            _subjects.array.next({
                name: name,
                values: _formValues
            });
            if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields) && options.shouldDirty) {
                _formState.dirtyFields = $3844679bc44ad46f$var$getDirtyFields(_defaultValues, _formValues);
                _subjects.state.next({
                    name: name,
                    dirtyFields: _formState.dirtyFields,
                    isDirty: _getDirty(name, cloneValue)
                });
            }
        } else field && !field._f && !$3844679bc44ad46f$var$isNullOrUndefined(cloneValue) ? setValues(name, cloneValue, options) : setFieldValue(name, cloneValue, options);
        $3844679bc44ad46f$var$isWatched(name, _names) && _subjects.state.next({});
        _subjects.watch.next({
            name: name
        });
    };
    const onChange = async (event)=>{
        const target = event.target;
        let name = target.name;
        const field = $3844679bc44ad46f$export$3988ae62b71be9a3(_fields, name);
        const getCurrentFieldValue = ()=>target.type ? $3844679bc44ad46f$var$getFieldValue(field._f) : $3844679bc44ad46f$var$getEventValue(event);
        if (field) {
            let error;
            let isValid;
            const fieldValue = getCurrentFieldValue();
            const isBlurEvent = event.type === $3844679bc44ad46f$var$EVENTS.BLUR || event.type === $3844679bc44ad46f$var$EVENTS.FOCUS_OUT;
            const shouldSkipValidation = !$3844679bc44ad46f$var$hasValidation(field._f) && !_options.resolver && !$3844679bc44ad46f$export$3988ae62b71be9a3(_formState.errors, name) && !field._f.deps || $3844679bc44ad46f$var$skipValidation(isBlurEvent, $3844679bc44ad46f$export$3988ae62b71be9a3(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
            const watched = $3844679bc44ad46f$var$isWatched(name, _names, isBlurEvent);
            $3844679bc44ad46f$export$adaa4cf7ef1b65be(_formValues, name, fieldValue);
            if (isBlurEvent) {
                field._f.onBlur && field._f.onBlur(event);
                delayErrorCallback && delayErrorCallback(0);
            } else if (field._f.onChange) field._f.onChange(event);
            const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent, false);
            const shouldRender = !$3844679bc44ad46f$var$isEmptyObject(fieldState) || watched;
            !isBlurEvent && _subjects.watch.next({
                name: name,
                type: event.type
            });
            if (shouldSkipValidation) {
                _proxyFormState.isValid && _updateValid();
                return shouldRender && _subjects.state.next({
                    name: name,
                    ...watched ? {} : fieldState
                });
            }
            !isBlurEvent && watched && _subjects.state.next({});
            _updateIsValidating(true);
            if (_options.resolver) {
                const { errors: errors  } = await _executeSchema([
                    name
                ]);
                const previousErrorLookupResult = $3844679bc44ad46f$var$schemaErrorLookup(_formState.errors, _fields, name);
                const errorLookupResult = $3844679bc44ad46f$var$schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
                error = errorLookupResult.error;
                name = errorLookupResult.name;
                isValid = $3844679bc44ad46f$var$isEmptyObject(errors);
            } else {
                error = (await $3844679bc44ad46f$var$validateField(field, $3844679bc44ad46f$export$3988ae62b71be9a3(_formValues, name), shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
                if (error) isValid = false;
                else if (_proxyFormState.isValid) isValid = await executeBuiltInValidation(_fields, true);
            }
            if (!$3844679bc44ad46f$var$isPrimitive(fieldValue) || getCurrentFieldValue() === fieldValue) {
                field._f.deps && trigger(field._f.deps);
                shouldRenderByError(name, isValid, error, fieldState);
            } else _updateIsValidating(false);
        }
    };
    const trigger = async (name, options = {})=>{
        let isValid;
        let validationResult;
        const fieldNames = $3844679bc44ad46f$var$convertToArrayPayload(name);
        _updateIsValidating(true);
        if (_options.resolver) {
            const errors = await executeSchemaAndUpdateState($3844679bc44ad46f$var$isUndefined(name) ? name : fieldNames);
            isValid = $3844679bc44ad46f$var$isEmptyObject(errors);
            validationResult = name ? !fieldNames.some((name)=>$3844679bc44ad46f$export$3988ae62b71be9a3(errors, name)) : isValid;
        } else if (name) {
            validationResult = (await Promise.all(fieldNames.map(async (fieldName)=>{
                const field = $3844679bc44ad46f$export$3988ae62b71be9a3(_fields, fieldName);
                return await executeBuiltInValidation(field && field._f ? {
                    [fieldName]: field
                } : field);
            }))).every(Boolean);
            !(!validationResult && !_formState.isValid) && _updateValid();
        } else validationResult = isValid = await executeBuiltInValidation(_fields);
        _subjects.state.next({
            ...!$3844679bc44ad46f$var$isString(name) || _proxyFormState.isValid && isValid !== _formState.isValid ? {} : {
                name: name
            },
            ..._options.resolver || !name ? {
                isValid: isValid
            } : {},
            errors: _formState.errors,
            isValidating: false
        });
        options.shouldFocus && !validationResult && $3844679bc44ad46f$var$focusFieldBy(_fields, (key)=>key && $3844679bc44ad46f$export$3988ae62b71be9a3(_formState.errors, key), name ? fieldNames : _names.mount);
        return validationResult;
    };
    const getValues = (fieldNames)=>{
        const values = {
            ..._defaultValues,
            ..._stateFlags.mount ? _formValues : {}
        };
        return $3844679bc44ad46f$var$isUndefined(fieldNames) ? values : $3844679bc44ad46f$var$isString(fieldNames) ? $3844679bc44ad46f$export$3988ae62b71be9a3(values, fieldNames) : fieldNames.map((name)=>$3844679bc44ad46f$export$3988ae62b71be9a3(values, name));
    };
    const getFieldState = (name, formState)=>({
            invalid: !!$3844679bc44ad46f$export$3988ae62b71be9a3((formState || _formState).errors, name),
            isDirty: !!$3844679bc44ad46f$export$3988ae62b71be9a3((formState || _formState).dirtyFields, name),
            isTouched: !!$3844679bc44ad46f$export$3988ae62b71be9a3((formState || _formState).touchedFields, name),
            error: $3844679bc44ad46f$export$3988ae62b71be9a3((formState || _formState).errors, name)
        });
    const clearErrors = (name)=>{
        name ? $3844679bc44ad46f$var$convertToArrayPayload(name).forEach((inputName)=>$3844679bc44ad46f$var$unset(_formState.errors, inputName)) : _formState.errors = {};
        _subjects.state.next({
            errors: _formState.errors
        });
    };
    const setError = (name, error, options)=>{
        const ref = ($3844679bc44ad46f$export$3988ae62b71be9a3(_fields, name, {
            _f: {}
        })._f || {}).ref;
        $3844679bc44ad46f$export$adaa4cf7ef1b65be(_formState.errors, name, {
            ...error,
            ref: ref
        });
        _subjects.state.next({
            name: name,
            errors: _formState.errors,
            isValid: false
        });
        options && options.shouldFocus && ref && ref.focus && ref.focus();
    };
    const watch = (name, defaultValue)=>$3844679bc44ad46f$var$isFunction(name) ? _subjects.watch.subscribe({
            next: (payload)=>name(_getWatch(undefined, defaultValue), payload)
        }) : _getWatch(name, defaultValue, true);
    const unregister = (name, options = {})=>{
        for (const fieldName of name ? $3844679bc44ad46f$var$convertToArrayPayload(name) : _names.mount){
            _names.mount.delete(fieldName);
            _names.array.delete(fieldName);
            if ($3844679bc44ad46f$export$3988ae62b71be9a3(_fields, fieldName)) {
                if (!options.keepValue) {
                    $3844679bc44ad46f$var$unset(_fields, fieldName);
                    $3844679bc44ad46f$var$unset(_formValues, fieldName);
                }
                !options.keepError && $3844679bc44ad46f$var$unset(_formState.errors, fieldName);
                !options.keepDirty && $3844679bc44ad46f$var$unset(_formState.dirtyFields, fieldName);
                !options.keepTouched && $3844679bc44ad46f$var$unset(_formState.touchedFields, fieldName);
                !_options.shouldUnregister && !options.keepDefaultValue && $3844679bc44ad46f$var$unset(_defaultValues, fieldName);
            }
        }
        _subjects.watch.next({});
        _subjects.state.next({
            ..._formState,
            ...!options.keepDirty ? {} : {
                isDirty: _getDirty()
            }
        });
        !options.keepIsValid && _updateValid();
    };
    const register = (name, options = {})=>{
        let field = $3844679bc44ad46f$export$3988ae62b71be9a3(_fields, name);
        const disabledIsDefined = $3844679bc44ad46f$var$isBoolean(options.disabled);
        $3844679bc44ad46f$export$adaa4cf7ef1b65be(_fields, name, {
            ...field || {},
            _f: {
                ...field && field._f ? field._f : {
                    ref: {
                        name: name
                    }
                },
                name: name,
                mount: true,
                ...options
            }
        });
        _names.mount.add(name);
        field ? disabledIsDefined && $3844679bc44ad46f$export$adaa4cf7ef1b65be(_formValues, name, options.disabled ? undefined : $3844679bc44ad46f$export$3988ae62b71be9a3(_formValues, name, $3844679bc44ad46f$var$getFieldValue(field._f))) : updateValidAndValue(name, true, options.value);
        return {
            ...disabledIsDefined ? {
                disabled: options.disabled
            } : {},
            ..._options.shouldUseNativeValidation ? {
                required: !!options.required,
                min: $3844679bc44ad46f$var$getRuleValue(options.min),
                max: $3844679bc44ad46f$var$getRuleValue(options.max),
                minLength: $3844679bc44ad46f$var$getRuleValue(options.minLength),
                maxLength: $3844679bc44ad46f$var$getRuleValue(options.maxLength),
                pattern: $3844679bc44ad46f$var$getRuleValue(options.pattern)
            } : {},
            name: name,
            onChange: onChange,
            onBlur: onChange,
            ref: (ref)=>{
                if (ref) {
                    register(name, options);
                    field = $3844679bc44ad46f$export$3988ae62b71be9a3(_fields, name);
                    const fieldRef = $3844679bc44ad46f$var$isUndefined(ref.value) ? ref.querySelectorAll ? ref.querySelectorAll("input,select,textarea")[0] || ref : ref : ref;
                    const radioOrCheckbox = $3844679bc44ad46f$var$isRadioOrCheckbox(fieldRef);
                    const refs = field._f.refs || [];
                    if (radioOrCheckbox ? refs.find((option)=>option === fieldRef) : fieldRef === field._f.ref) return;
                    $3844679bc44ad46f$export$adaa4cf7ef1b65be(_fields, name, {
                        _f: {
                            ...field._f,
                            ...radioOrCheckbox ? {
                                refs: [
                                    ...refs.filter($3844679bc44ad46f$var$live),
                                    fieldRef,
                                    ...Array.isArray($3844679bc44ad46f$export$3988ae62b71be9a3(_defaultValues, name)) ? [
                                        {}
                                    ] : []
                                ],
                                ref: {
                                    type: fieldRef.type,
                                    name: name
                                }
                            } : {
                                ref: fieldRef
                            }
                        }
                    });
                    updateValidAndValue(name, false, undefined, fieldRef);
                } else {
                    field = $3844679bc44ad46f$export$3988ae62b71be9a3(_fields, name, {});
                    if (field._f) field._f.mount = false;
                    (_options.shouldUnregister || options.shouldUnregister) && !($3844679bc44ad46f$var$isNameInFieldArray(_names.array, name) && _stateFlags.action) && _names.unMount.add(name);
                }
            }
        };
    };
    const _focusError = ()=>_options.shouldFocusError && $3844679bc44ad46f$var$focusFieldBy(_fields, (key)=>key && $3844679bc44ad46f$export$3988ae62b71be9a3(_formState.errors, key), _names.mount);
    const handleSubmit = (onValid, onInvalid)=>async (e)=>{
            if (e) {
                e.preventDefault && e.preventDefault();
                e.persist && e.persist();
            }
            let hasNoPromiseError = true;
            let fieldValues = $3844679bc44ad46f$var$cloneObject(_formValues);
            _subjects.state.next({
                isSubmitting: true
            });
            try {
                if (_options.resolver) {
                    const { errors: errors , values: values  } = await _executeSchema();
                    _formState.errors = errors;
                    fieldValues = values;
                } else await executeBuiltInValidation(_fields);
                if ($3844679bc44ad46f$var$isEmptyObject(_formState.errors)) {
                    _subjects.state.next({
                        errors: {},
                        isSubmitting: true
                    });
                    await onValid(fieldValues, e);
                } else {
                    if (onInvalid) await onInvalid({
                        ..._formState.errors
                    }, e);
                    _focusError();
                }
            } catch (err) {
                hasNoPromiseError = false;
                throw err;
            } finally{
                _formState.isSubmitted = true;
                _subjects.state.next({
                    isSubmitted: true,
                    isSubmitting: false,
                    isSubmitSuccessful: $3844679bc44ad46f$var$isEmptyObject(_formState.errors) && hasNoPromiseError,
                    submitCount: _formState.submitCount + 1,
                    errors: _formState.errors
                });
            }
        };
    const resetField = (name, options = {})=>{
        if ($3844679bc44ad46f$export$3988ae62b71be9a3(_fields, name)) {
            if ($3844679bc44ad46f$var$isUndefined(options.defaultValue)) setValue(name, $3844679bc44ad46f$export$3988ae62b71be9a3(_defaultValues, name));
            else {
                setValue(name, options.defaultValue);
                $3844679bc44ad46f$export$adaa4cf7ef1b65be(_defaultValues, name, options.defaultValue);
            }
            if (!options.keepTouched) $3844679bc44ad46f$var$unset(_formState.touchedFields, name);
            if (!options.keepDirty) {
                $3844679bc44ad46f$var$unset(_formState.dirtyFields, name);
                _formState.isDirty = options.defaultValue ? _getDirty(name, $3844679bc44ad46f$export$3988ae62b71be9a3(_defaultValues, name)) : _getDirty();
            }
            if (!options.keepError) {
                $3844679bc44ad46f$var$unset(_formState.errors, name);
                _proxyFormState.isValid && _updateValid();
            }
            _subjects.state.next({
                ..._formState
            });
        }
    };
    const _reset = (formValues, keepStateOptions = {})=>{
        const updatedValues = formValues || _defaultValues;
        const cloneUpdatedValues = $3844679bc44ad46f$var$cloneObject(updatedValues);
        const values = formValues && !$3844679bc44ad46f$var$isEmptyObject(formValues) ? cloneUpdatedValues : _defaultValues;
        if (!keepStateOptions.keepDefaultValues) _defaultValues = updatedValues;
        if (!keepStateOptions.keepValues) {
            if (keepStateOptions.keepDirtyValues) for (const fieldName of _names.mount)$3844679bc44ad46f$export$3988ae62b71be9a3(_formState.dirtyFields, fieldName) ? $3844679bc44ad46f$export$adaa4cf7ef1b65be(values, fieldName, $3844679bc44ad46f$export$3988ae62b71be9a3(_formValues, fieldName)) : setValue(fieldName, $3844679bc44ad46f$export$3988ae62b71be9a3(values, fieldName));
            else {
                if ($3844679bc44ad46f$var$isWeb && $3844679bc44ad46f$var$isUndefined(formValues)) for (const name of _names.mount){
                    const field = $3844679bc44ad46f$export$3988ae62b71be9a3(_fields, name);
                    if (field && field._f) {
                        const fieldReference = Array.isArray(field._f.refs) ? field._f.refs[0] : field._f.ref;
                        if ($3844679bc44ad46f$var$isHTMLElement(fieldReference)) {
                            const form = fieldReference.closest("form");
                            if (form) {
                                form.reset();
                                break;
                            }
                        }
                    }
                }
                _fields = {};
            }
            _formValues = props.shouldUnregister ? keepStateOptions.keepDefaultValues ? $3844679bc44ad46f$var$cloneObject(_defaultValues) : {} : cloneUpdatedValues;
            _subjects.array.next({
                values: values
            });
            _subjects.watch.next({
                values: values
            });
        }
        _names = {
            mount: new Set(),
            unMount: new Set(),
            array: new Set(),
            watch: new Set(),
            watchAll: false,
            focus: ""
        };
        _stateFlags.mount = !_proxyFormState.isValid || !!keepStateOptions.keepIsValid;
        _stateFlags.watch = !!props.shouldUnregister;
        _subjects.state.next({
            submitCount: keepStateOptions.keepSubmitCount ? _formState.submitCount : 0,
            isDirty: keepStateOptions.keepDirty || keepStateOptions.keepDirtyValues ? _formState.isDirty : !!(keepStateOptions.keepDefaultValues && !$3844679bc44ad46f$var$deepEqual(formValues, _defaultValues)),
            isSubmitted: keepStateOptions.keepIsSubmitted ? _formState.isSubmitted : false,
            dirtyFields: keepStateOptions.keepDirty || keepStateOptions.keepDirtyValues ? _formState.dirtyFields : keepStateOptions.keepDefaultValues && formValues ? $3844679bc44ad46f$var$getDirtyFields(_defaultValues, formValues) : {},
            touchedFields: keepStateOptions.keepTouched ? _formState.touchedFields : {},
            errors: keepStateOptions.keepErrors ? _formState.errors : {},
            isSubmitting: false,
            isSubmitSuccessful: false
        });
    };
    const reset = (formValues, keepStateOptions)=>_reset($3844679bc44ad46f$var$isFunction(formValues) ? formValues(_formValues) : formValues, keepStateOptions);
    const setFocus = (name, options = {})=>{
        const field = $3844679bc44ad46f$export$3988ae62b71be9a3(_fields, name);
        const fieldReference = field && field._f;
        if (fieldReference) {
            const fieldRef = fieldReference.refs ? fieldReference.refs[0] : fieldReference.ref;
            if (fieldRef.focus) {
                fieldRef.focus();
                options.shouldSelect && fieldRef.select();
            }
        }
    };
    return {
        control: {
            register: register,
            unregister: unregister,
            getFieldState: getFieldState,
            _executeSchema: _executeSchema,
            _focusError: _focusError,
            _getWatch: _getWatch,
            _getDirty: _getDirty,
            _updateValid: _updateValid,
            _removeUnmounted: _removeUnmounted,
            _updateFieldArray: _updateFieldArray,
            _getFieldArray: _getFieldArray,
            _subjects: _subjects,
            _proxyFormState: _proxyFormState,
            get _fields () {
                return _fields;
            },
            get _formValues () {
                return _formValues;
            },
            get _stateFlags () {
                return _stateFlags;
            },
            set _stateFlags (value){
                _stateFlags = value;
            },
            get _defaultValues () {
                return _defaultValues;
            },
            get _names () {
                return _names;
            },
            set _names (value){
                _names = value;
            },
            get _formState () {
                return _formState;
            },
            set _formState (value){
                _formState = value;
            },
            get _options () {
                return _options;
            },
            set _options (value){
                _options = {
                    ..._options,
                    ...value
                };
            }
        },
        trigger: trigger,
        register: register,
        handleSubmit: handleSubmit,
        watch: watch,
        setValue: setValue,
        getValues: getValues,
        reset: reset,
        resetField: resetField,
        clearErrors: clearErrors,
        unregister: unregister,
        setError: setError,
        setFocus: setFocus,
        getFieldState: getFieldState
    };
}
/**
 * Custom hook to manage the entire form.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
 *
 * @param props - form configuration and validation parameters.
 *
 * @returns methods - individual functions to manage the form state. {@link UseFormReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, watch, formState: { errors } } = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   console.log(watch("example"));
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input defaultValue="test" {...register("example")} />
 *       <input {...register("exampleRequired", { required: true })} />
 *       {errors.exampleRequired && <span>This field is required</span>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */ function $3844679bc44ad46f$export$87c0cf8eb5a167e0(props = {}) {
    const _formControl = (0, ($parcel$interopDefault($aSjVs$react))).useRef();
    const [formState, updateFormState] = (0, ($parcel$interopDefault($aSjVs$react))).useState({
        isDirty: false,
        isValidating: false,
        isSubmitted: false,
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        submitCount: 0,
        dirtyFields: {},
        touchedFields: {},
        errors: {},
        defaultValues: props.defaultValues
    });
    if (!_formControl.current) _formControl.current = {
        ...$3844679bc44ad46f$var$createFormControl(props),
        formState: formState
    };
    const control = _formControl.current.control;
    control._options = props;
    $3844679bc44ad46f$var$useSubscribe({
        subject: control._subjects.state,
        callback: (0, ($parcel$interopDefault($aSjVs$react))).useCallback((value1)=>{
            if ($3844679bc44ad46f$var$shouldRenderFormState(value1, control._proxyFormState, true)) {
                control._formState = {
                    ...control._formState,
                    ...value1
                };
                updateFormState({
                    ...control._formState
                });
            }
        }, [
            control
        ])
    });
    (0, ($parcel$interopDefault($aSjVs$react))).useEffect(()=>{
        if (!control._stateFlags.mount) {
            control._proxyFormState.isValid && control._updateValid();
            control._stateFlags.mount = true;
        }
        if (control._stateFlags.watch) {
            control._stateFlags.watch = false;
            control._subjects.state.next({});
        }
        control._removeUnmounted();
    });
    (0, ($parcel$interopDefault($aSjVs$react))).useEffect(()=>{
        formState.submitCount && control._focusError();
    }, [
        control,
        formState.submitCount
    ]);
    _formControl.current.formState = $3844679bc44ad46f$var$getProxyFormState(formState, control);
    return _formControl.current;
}



var $CkFUA = parcelRequire("CkFUA");

const $347d94a6b27ac6e3$export$7dae14b1400b9486 = /*#__PURE__*/ (0, $aSjVs$react.createContext)({});
const $347d94a6b27ac6e3$export$28e6b9b82ee883c = (type, inlineStyles)=>{
    const baseStyles = (0, $aSjVs$react.useContext)($347d94a6b27ac6e3$export$7dae14b1400b9486);
    return (0, $aSjVs$react.useMemo)(()=>{
        return !!inlineStyles ? {
            ...baseStyles[type],
            ...inlineStyles
        } : baseStyles[type];
    }, [
        type,
        baseStyles,
        inlineStyles
    ]);
};






const $4cd0ab3e5f7d6cd5$export$c207a8ee394fdeab = ({ id: id , name: name , field: field  })=>{
    const { label: label , shouldDisplay: shouldDisplay , styles: styles = {}  } = field;
    const fieldStyles = (0, $347d94a6b27ac6e3$export$28e6b9b82ee883c)("titleField", styles);
    const isVisible = (0, $aSjVs$react.useMemo)(()=>{
        return shouldDisplay ? shouldDisplay() : true;
    }, [
        shouldDisplay
    ]);
    return isVisible ? /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)("h1", {
        ...fieldStyles,
        children: label
    }) : null;
};







var $2VcHj = parcelRequire("2VcHj");







var $2VcHj = parcelRequire("2VcHj");

const $b68dea7d554644fc$var$propTypes = {
    /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */ type: (0, (/*@__PURE__*/$parcel$interopDefault($2VcHj))).string,
    /** Display feedback as a tooltip. */ tooltip: (0, (/*@__PURE__*/$parcel$interopDefault($2VcHj))).bool,
    as: (0, (/*@__PURE__*/$parcel$interopDefault($2VcHj))).elementType
};
const $b68dea7d554644fc$var$Feedback = /*#__PURE__*/ $aSjVs$react.forwardRef(// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({ as: Component = "div" , className: className , type: type = "valid" , tooltip: tooltip = false , ...props }, ref)=>/*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)(Component, {
        ...props,
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($e95984cd096ff1b8$exports)))(className, `${type}-${tooltip ? "tooltip" : "feedback"}`)
    }));
$b68dea7d554644fc$var$Feedback.displayName = "Feedback";
$b68dea7d554644fc$var$Feedback.propTypes = $b68dea7d554644fc$var$propTypes;
var $b68dea7d554644fc$export$2e2bcd8739ae039 = $b68dea7d554644fc$var$Feedback;






// TODO
const $6ac77661940665c9$var$FormContext = /*#__PURE__*/ $aSjVs$react.createContext({});
var $6ac77661940665c9$export$2e2bcd8739ae039 = $6ac77661940665c9$var$FormContext;




const $b729bafae3f2b929$var$FormCheckInput = /*#__PURE__*/ $aSjVs$react.forwardRef(({ id: id , bsPrefix: bsPrefix , className: className , type: type = "checkbox" , isValid: isValid = false , isInvalid: isInvalid = false , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "input" , ...props }, ref)=>{
    const { controlId: controlId  } = (0, $aSjVs$react.useContext)((0, $6ac77661940665c9$export$2e2bcd8739ae039));
    bsPrefix = (0, $21a37b360728f8ff$export$7f387860ebffb32c)(bsPrefix, "form-check-input");
    return /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)(Component, {
        ...props,
        ref: ref,
        type: type,
        id: id || controlId,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($e95984cd096ff1b8$exports)))(className, bsPrefix, isValid && "is-valid", isInvalid && "is-invalid")
    });
});
$b729bafae3f2b929$var$FormCheckInput.displayName = "FormCheckInput";
var $b729bafae3f2b929$export$2e2bcd8739ae039 = $b729bafae3f2b929$var$FormCheckInput;








const $4b1422c67ab9bcdd$var$FormCheckLabel = /*#__PURE__*/ $aSjVs$react.forwardRef(({ bsPrefix: bsPrefix , className: className , htmlFor: htmlFor , ...props }, ref)=>{
    const { controlId: controlId  } = (0, $aSjVs$react.useContext)((0, $6ac77661940665c9$export$2e2bcd8739ae039));
    bsPrefix = (0, $21a37b360728f8ff$export$7f387860ebffb32c)(bsPrefix, "form-check-label");
    return /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)("label", {
        ...props,
        ref: ref,
        htmlFor: htmlFor || controlId,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($e95984cd096ff1b8$exports)))(className, bsPrefix)
    });
});
$4b1422c67ab9bcdd$var$FormCheckLabel.displayName = "FormCheckLabel";
var $4b1422c67ab9bcdd$export$2e2bcd8739ae039 = $4b1422c67ab9bcdd$var$FormCheckLabel;





/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */ function $d375b6ab22839a87$export$871de8747c9eaa88(children, func) {
    let index = 0;
    return $aSjVs$react.Children.map(children, (child)=>/*#__PURE__*/ $aSjVs$react.isValidElement(child) ? func(child, index++) : child);
}
/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */ function $d375b6ab22839a87$export$4b80e395e36b5a56(children, func) {
    let index = 0;
    $aSjVs$react.Children.forEach(children, (child)=>{
        if (/*#__PURE__*/ $aSjVs$react.isValidElement(child)) func(child, index++);
    });
}
/**
 * Finds whether a component's `children` prop includes a React element of the
 * specified type.
 */ function $d375b6ab22839a87$export$500fd6099226ffae(children, type) {
    return $aSjVs$react.Children.toArray(children).some((child)=>/*#__PURE__*/ $aSjVs$react.isValidElement(child) && child.type === type);
}





const $f2ecb5b0a2c6ce17$var$FormCheck = /*#__PURE__*/ $aSjVs$react.forwardRef(({ id: id , bsPrefix: bsPrefix , bsSwitchPrefix: bsSwitchPrefix , inline: inline = false , reverse: reverse = false , disabled: disabled = false , isValid: isValid = false , isInvalid: isInvalid = false , feedbackTooltip: feedbackTooltip = false , feedback: feedback , feedbackType: feedbackType , className: className , style: style , title: title = "" , type: type = "checkbox" , label: label , children: children , as: // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as = "input" , ...props }, ref)=>{
    bsPrefix = (0, $21a37b360728f8ff$export$7f387860ebffb32c)(bsPrefix, "form-check");
    bsSwitchPrefix = (0, $21a37b360728f8ff$export$7f387860ebffb32c)(bsSwitchPrefix, "form-switch");
    const { controlId: controlId  } = (0, $aSjVs$react.useContext)((0, $6ac77661940665c9$export$2e2bcd8739ae039));
    const innerFormContext = (0, $aSjVs$react.useMemo)(()=>({
            controlId: id || controlId
        }), [
        controlId,
        id
    ]);
    const hasLabel = !children && label != null && label !== false || (0, $d375b6ab22839a87$export$500fd6099226ffae)(children, (0, $4b1422c67ab9bcdd$export$2e2bcd8739ae039));
    const input = /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $b729bafae3f2b929$export$2e2bcd8739ae039), {
        ...props,
        type: type === "switch" ? "checkbox" : type,
        ref: ref,
        isValid: isValid,
        isInvalid: isInvalid,
        disabled: disabled,
        as: as
    });
    return /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $6ac77661940665c9$export$2e2bcd8739ae039).Provider, {
        value: innerFormContext,
        children: /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)("div", {
            style: style,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($e95984cd096ff1b8$exports)))(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === "switch" && bsSwitchPrefix),
            children: children || /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsxs)((0, $aSjVs$reactjsxruntime.Fragment), {
                children: [
                    input,
                    hasLabel && /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $4b1422c67ab9bcdd$export$2e2bcd8739ae039), {
                        title: title,
                        children: label
                    }),
                    feedback && /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $b68dea7d554644fc$export$2e2bcd8739ae039), {
                        type: feedbackType,
                        tooltip: feedbackTooltip,
                        children: feedback
                    })
                ]
            })
        })
    });
});
$f2ecb5b0a2c6ce17$var$FormCheck.displayName = "FormCheck";
var $f2ecb5b0a2c6ce17$export$2e2bcd8739ae039 = Object.assign($f2ecb5b0a2c6ce17$var$FormCheck, {
    Input: (0, $b729bafae3f2b929$export$2e2bcd8739ae039),
    Label: (0, $4b1422c67ab9bcdd$export$2e2bcd8739ae039)
});





var $47617f0221c4684a$exports = {};
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */ var $47617f0221c4684a$var$__DEV__ = false;
var $47617f0221c4684a$var$warning = function() {};
if ($47617f0221c4684a$var$__DEV__) {
    var $47617f0221c4684a$var$printWarning = function printWarning(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for(var key = 1; key < len; key++)args[key - 1] = arguments[key];
        var argIndex = 0;
        var message = "Warning: " + format.replace(/%s/g, function() {
            return args[argIndex++];
        });
        if (typeof console !== "undefined") console.error(message);
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
    $47617f0221c4684a$var$warning = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for(var key = 2; key < len; key++)args[key - 2] = arguments[key];
        if (format === undefined) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
        if (!condition) $47617f0221c4684a$var$printWarning.apply(null, [
            format
        ].concat(args));
    };
}
$47617f0221c4684a$exports = $47617f0221c4684a$var$warning;






const $16e53ff72a086615$var$FormControl = /*#__PURE__*/ $aSjVs$react.forwardRef(({ bsPrefix: bsPrefix , type: type , size: size , htmlSize: htmlSize , id: id , className: className , isValid: isValid = false , isInvalid: isInvalid = false , plaintext: plaintext , readOnly: readOnly , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "input" , ...props }, ref)=>{
    const { controlId: controlId  } = (0, $aSjVs$react.useContext)((0, $6ac77661940665c9$export$2e2bcd8739ae039));
    bsPrefix = (0, $21a37b360728f8ff$export$7f387860ebffb32c)(bsPrefix, "form-control");
    let classes;
    if (plaintext) classes = {
        [`${bsPrefix}-plaintext`]: true
    };
    else classes = {
        [bsPrefix]: true,
        [`${bsPrefix}-${size}`]: size
    };
    return /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)(Component, {
        ...props,
        type: type,
        size: htmlSize,
        ref: ref,
        readOnly: readOnly,
        id: id || controlId,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($e95984cd096ff1b8$exports)))(className, classes, isValid && `is-valid`, isInvalid && `is-invalid`, type === "color" && `${bsPrefix}-color`)
    });
});
$16e53ff72a086615$var$FormControl.displayName = "FormControl";
var $16e53ff72a086615$export$2e2bcd8739ae039 = Object.assign($16e53ff72a086615$var$FormControl, {
    Feedback: $b68dea7d554644fc$export$2e2bcd8739ae039
});



var $14fcfc1a9531c6c3$var$rHyphen = /-(.)/g;
function $14fcfc1a9531c6c3$export$2e2bcd8739ae039(string) {
    return string.replace($14fcfc1a9531c6c3$var$rHyphen, function(_, chr) {
        return chr.toUpperCase();
    });
}





const $ab199ea874de4c7a$var$pascalCase = (str)=>str[0].toUpperCase() + (0, $14fcfc1a9531c6c3$export$2e2bcd8739ae039)(str).slice(1);
function $ab199ea874de4c7a$export$2e2bcd8739ae039(prefix, { displayName: displayName = $ab199ea874de4c7a$var$pascalCase(prefix) , Component: Component , defaultProps: defaultProps  } = {}) {
    const BsComponent = /*#__PURE__*/ $aSjVs$react.forwardRef(({ className: className , bsPrefix: bsPrefix , as: Tag = Component || "div" , ...props }, ref)=>{
        const componentProps = {
            ...defaultProps,
            ...props
        };
        const resolvedPrefix = (0, $21a37b360728f8ff$export$7f387860ebffb32c)(bsPrefix, prefix);
        return /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)(Tag, {
            ref: ref,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($e95984cd096ff1b8$exports)))(className, resolvedPrefix),
            ...componentProps
        });
    });
    BsComponent.displayName = displayName;
    return BsComponent;
}


var $7211df975c155b3f$export$2e2bcd8739ae039 = (0, $ab199ea874de4c7a$export$2e2bcd8739ae039)("form-floating");






const $e9a841b226d6fe85$var$FormGroup = /*#__PURE__*/ $aSjVs$react.forwardRef(({ controlId: controlId , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div" , ...props }, ref)=>{
    const context = (0, $aSjVs$react.useMemo)(()=>({
            controlId: controlId
        }), [
        controlId
    ]);
    return /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $6ac77661940665c9$export$2e2bcd8739ae039).Provider, {
        value: context,
        children: /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)(Component, {
            ...props,
            ref: ref
        })
    });
});
$e9a841b226d6fe85$var$FormGroup.displayName = "FormGroup";
var $e9a841b226d6fe85$export$2e2bcd8739ae039 = $e9a841b226d6fe85$var$FormGroup;










function $cb86b2426208e454$export$2ed43d61a0a9f5a3({ as: as , bsPrefix: bsPrefix , className: className , ...props }) {
    bsPrefix = (0, $21a37b360728f8ff$export$7f387860ebffb32c)(bsPrefix, "col");
    const breakpoints = (0, $21a37b360728f8ff$export$8970c8db816a5863)();
    const minBreakpoint = (0, $21a37b360728f8ff$export$d926d6ef38f3fd32)();
    const spans = [];
    const classes = [];
    breakpoints.forEach((brkPoint)=>{
        const propValue = props[brkPoint];
        delete props[brkPoint];
        let span;
        let offset;
        let order;
        if (typeof propValue === "object" && propValue != null) ({ span: span , offset: offset , order: order  } = propValue);
        else span = propValue;
        const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : "";
        if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
        if (order != null) classes.push(`order${infix}-${order}`);
        if (offset != null) classes.push(`offset${infix}-${offset}`);
    });
    return [
        {
            ...props,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($e95984cd096ff1b8$exports)))(className, ...spans, ...classes)
        },
        {
            as: as,
            bsPrefix: bsPrefix,
            spans: spans
        }
    ];
}
const $cb86b2426208e454$var$Col = /*#__PURE__*/ $aSjVs$react.forwardRef(// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(props, ref)=>{
    const [{ className: className , ...colProps }, { as: Component = "div" , bsPrefix: bsPrefix , spans: spans  }] = $cb86b2426208e454$export$2ed43d61a0a9f5a3(props);
    return /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)(Component, {
        ...colProps,
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($e95984cd096ff1b8$exports)))(className, !spans.length && bsPrefix)
    });
});
$cb86b2426208e454$var$Col.displayName = "Col";
var $cb86b2426208e454$export$2e2bcd8739ae039 = $cb86b2426208e454$var$Col;





const $f4a859b923ac9a08$var$FormLabel = /*#__PURE__*/ $aSjVs$react.forwardRef(({ // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "label" , bsPrefix: bsPrefix , column: column = false , visuallyHidden: visuallyHidden = false , className: className , htmlFor: htmlFor , ...props }, ref)=>{
    const { controlId: controlId  } = (0, $aSjVs$react.useContext)((0, $6ac77661940665c9$export$2e2bcd8739ae039));
    bsPrefix = (0, $21a37b360728f8ff$export$7f387860ebffb32c)(bsPrefix, "form-label");
    let columnClass = "col-form-label";
    if (typeof column === "string") columnClass = `${columnClass} ${columnClass}-${column}`;
    const classes = (0, (/*@__PURE__*/$parcel$interopDefault($e95984cd096ff1b8$exports)))(className, bsPrefix, visuallyHidden && "visually-hidden", column && columnClass);
    htmlFor = htmlFor || controlId;
    if (column) return /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $cb86b2426208e454$export$2e2bcd8739ae039), {
        ref: ref,
        as: "label",
        className: classes,
        htmlFor: htmlFor,
        ...props
    });
    return(/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    (0, $aSjVs$reactjsxruntime.jsx)(Component, {
        ref: ref,
        className: classes,
        htmlFor: htmlFor,
        ...props
    }));
});
$f4a859b923ac9a08$var$FormLabel.displayName = "FormLabel";
var $f4a859b923ac9a08$export$2e2bcd8739ae039 = $f4a859b923ac9a08$var$FormLabel;








const $7fcb2c5b8be9c4af$var$FormRange = /*#__PURE__*/ $aSjVs$react.forwardRef(({ bsPrefix: bsPrefix , className: className , id: id , ...props }, ref)=>{
    const { controlId: controlId  } = (0, $aSjVs$react.useContext)((0, $6ac77661940665c9$export$2e2bcd8739ae039));
    bsPrefix = (0, $21a37b360728f8ff$export$7f387860ebffb32c)(bsPrefix, "form-range");
    return /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)("input", {
        ...props,
        type: "range",
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($e95984cd096ff1b8$exports)))(className, bsPrefix),
        id: id || controlId
    });
});
$7fcb2c5b8be9c4af$var$FormRange.displayName = "FormRange";
var $7fcb2c5b8be9c4af$export$2e2bcd8739ae039 = $7fcb2c5b8be9c4af$var$FormRange;








const $0fd98da97766fef9$var$FormSelect = /*#__PURE__*/ $aSjVs$react.forwardRef(({ bsPrefix: bsPrefix , size: size , htmlSize: htmlSize , className: className , isValid: isValid = false , isInvalid: isInvalid = false , id: id , ...props }, ref)=>{
    const { controlId: controlId  } = (0, $aSjVs$react.useContext)((0, $6ac77661940665c9$export$2e2bcd8739ae039));
    bsPrefix = (0, $21a37b360728f8ff$export$7f387860ebffb32c)(bsPrefix, "form-select");
    return /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)("select", {
        ...props,
        size: htmlSize,
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($e95984cd096ff1b8$exports)))(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
        id: id || controlId
    });
});
$0fd98da97766fef9$var$FormSelect.displayName = "FormSelect";
var $0fd98da97766fef9$export$2e2bcd8739ae039 = $0fd98da97766fef9$var$FormSelect;






const $6177c52d798915d2$var$FormText = /*#__PURE__*/ $aSjVs$react.forwardRef(// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({ bsPrefix: bsPrefix , className: className , as: Component = "small" , muted: muted , ...props }, ref)=>{
    bsPrefix = (0, $21a37b360728f8ff$export$7f387860ebffb32c)(bsPrefix, "form-text");
    return /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)(Component, {
        ...props,
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($e95984cd096ff1b8$exports)))(className, bsPrefix, muted && "text-muted")
    });
});
$6177c52d798915d2$var$FormText.displayName = "FormText";
var $6177c52d798915d2$export$2e2bcd8739ae039 = $6177c52d798915d2$var$FormText;





const $effd47fb409f7c07$var$Switch = /*#__PURE__*/ $aSjVs$react.forwardRef((props, ref)=>/*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $f2ecb5b0a2c6ce17$export$2e2bcd8739ae039), {
        ...props,
        ref: ref,
        type: "switch"
    }));
$effd47fb409f7c07$var$Switch.displayName = "Switch";
var $effd47fb409f7c07$export$2e2bcd8739ae039 = Object.assign($effd47fb409f7c07$var$Switch, {
    Input: (0, $f2ecb5b0a2c6ce17$export$2e2bcd8739ae039).Input,
    Label: (0, $f2ecb5b0a2c6ce17$export$2e2bcd8739ae039).Label
});








const $95350ef257ac8257$var$FloatingLabel = /*#__PURE__*/ $aSjVs$react.forwardRef(({ bsPrefix: bsPrefix , className: className , children: children , controlId: controlId , label: label , ...props }, ref)=>{
    bsPrefix = (0, $21a37b360728f8ff$export$7f387860ebffb32c)(bsPrefix, "form-floating");
    return /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsxs)((0, $e9a841b226d6fe85$export$2e2bcd8739ae039), {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($e95984cd096ff1b8$exports)))(className, bsPrefix),
        controlId: controlId,
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)("label", {
                htmlFor: controlId,
                children: label
            })
        ]
    });
});
$95350ef257ac8257$var$FloatingLabel.displayName = "FloatingLabel";
var $95350ef257ac8257$export$2e2bcd8739ae039 = $95350ef257ac8257$var$FloatingLabel;



const $0bdfec6b4dfc0e48$var$propTypes = {
    /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */ _ref: (0, (/*@__PURE__*/$parcel$interopDefault($2VcHj))).any,
    /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */ validated: (0, (/*@__PURE__*/$parcel$interopDefault($2VcHj))).bool,
    as: (0, (/*@__PURE__*/$parcel$interopDefault($2VcHj))).elementType
};
const $0bdfec6b4dfc0e48$var$Form = /*#__PURE__*/ $aSjVs$react.forwardRef(({ className: className , validated: validated , // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "form" , ...props }, ref)=>/*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)(Component, {
        ...props,
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($e95984cd096ff1b8$exports)))(className, validated && "was-validated")
    }));
$0bdfec6b4dfc0e48$var$Form.displayName = "Form";
$0bdfec6b4dfc0e48$var$Form.propTypes = $0bdfec6b4dfc0e48$var$propTypes;
var $0bdfec6b4dfc0e48$export$2e2bcd8739ae039 = Object.assign($0bdfec6b4dfc0e48$var$Form, {
    Group: (0, $e9a841b226d6fe85$export$2e2bcd8739ae039),
    Control: (0, $16e53ff72a086615$export$2e2bcd8739ae039),
    Floating: (0, $7211df975c155b3f$export$2e2bcd8739ae039),
    Check: (0, $f2ecb5b0a2c6ce17$export$2e2bcd8739ae039),
    Switch: $effd47fb409f7c07$export$2e2bcd8739ae039,
    Label: (0, $f4a859b923ac9a08$export$2e2bcd8739ae039),
    Text: (0, $6177c52d798915d2$export$2e2bcd8739ae039),
    Range: (0, $7fcb2c5b8be9c4af$export$2e2bcd8739ae039),
    Select: (0, $0fd98da97766fef9$export$2e2bcd8739ae039),
    FloatingLabel: $95350ef257ac8257$export$2e2bcd8739ae039
});




const $e045ee12a7ba0f7f$export$23759efdd2d2dae9 = (name, label)=>{
    const { formState: { errors: errors  }  } = (0, $3844679bc44ad46f$export$4d957a5e1be13b03)();
    return (0, $aSjVs$react.useMemo)(()=>{
        const error = errors[name];
        if (!error) return undefined;
        const message = error.message;
        if (message) return message.replace(name, label || name);
        return "Field validation failed";
    }, [
        errors,
        name,
        label
    ]);
};



const $0362f57056efa014$export$2c73285ae9390cec = ({ id: id , name: name , field: field , defaultValue: defaultValue  })=>{
    const { label: label , placeholder: placeholder , htmlInputType: htmlInputType , helperText: helperText , required: required = false , leftInputAddon: leftInputAddon , rightInputAddon: rightInputAddon , shouldDisplay: shouldDisplay , styles: styles = {}  } = field;
    const fieldStyles = (0, $347d94a6b27ac6e3$export$28e6b9b82ee883c)("textField", styles);
    const { register: register , watch: watch  } = (0, $3844679bc44ad46f$export$4d957a5e1be13b03)();
    const errorMessage = (0, $e045ee12a7ba0f7f$export$23759efdd2d2dae9)(name, label);
    const values = watch(name);
    const isVisible = (0, $aSjVs$react.useMemo)(()=>{
        return shouldDisplay ? shouldDisplay(values) : true;
    }, [
        values,
        shouldDisplay
    ]);
    return isVisible ? /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsxs)((0, $0bdfec6b4dfc0e48$export$2e2bcd8739ae039).Group, {
        controlId: id,
        className: "mb-3",
        ...fieldStyles.control,
        children: [
            !!label && /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $0bdfec6b4dfc0e48$export$2e2bcd8739ae039).Label, {
                ...fieldStyles.label,
                children: label
            }),
            /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $16e53ff72a086615$export$2e2bcd8739ae039), {
                type: htmlInputType || "text",
                id: id,
                name: name,
                "aria-label": name,
                ...register(name),
                required: required,
                placeholder: placeholder,
                defaultValue: defaultValue || "",
                ...fieldStyles.input
            }),
            !!helperText && /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $0bdfec6b4dfc0e48$export$2e2bcd8739ae039).Text, {
                ...fieldStyles.helperText,
                children: helperText
            }),
            /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $0bdfec6b4dfc0e48$export$2e2bcd8739ae039).Control.Feedback, {
                type: "invalid",
                ...fieldStyles.errorMessage,
                children: errorMessage
            })
        ]
    }, id) : null;
};








const $748070c77a9202ca$export$d55b50a564d0b931 = ({ id: id , name: name , field: field , defaultValue: defaultValue  })=>{
    const { label: label , helperText: helperText , required: required = false , multi: multi = false , shouldDisplay: shouldDisplay , styles: styles = {}  } = field;
    const { register: register , watch: watch  } = (0, $3844679bc44ad46f$export$4d957a5e1be13b03)();
    const values = watch(name);
    const fieldStyles = (0, $347d94a6b27ac6e3$export$28e6b9b82ee883c)("selectField", styles);
    const errorMessage = (0, $e045ee12a7ba0f7f$export$23759efdd2d2dae9)(name, label);
    const isVisible = (0, $aSjVs$react.useMemo)(()=>{
        return shouldDisplay ? shouldDisplay(values) : true;
    }, [
        values,
        shouldDisplay
    ]);
    return isVisible ? /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsxs)((0, $e9a841b226d6fe85$export$2e2bcd8739ae039), {
        controlId: id,
        className: "mb-3",
        ...fieldStyles.control,
        children: [
            !!label && /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $0bdfec6b4dfc0e48$export$2e2bcd8739ae039).Label, {
                ...fieldStyles.label,
                children: label
            }),
            /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $16e53ff72a086615$export$2e2bcd8739ae039), {
                as: "select",
                id: id,
                name: name,
                ...register(name),
                required: required,
                multiple: multi,
                defaultValue: defaultValue || field.options[0].value,
                ...fieldStyles.select,
                children: field.options.map((option)=>/*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)("option", {
                        value: option.value,
                        children: option.label || option.value
                    }, option.value))
            }),
            !!helperText && /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $0bdfec6b4dfc0e48$export$2e2bcd8739ae039).Text, {
                ...fieldStyles.helperText,
                children: helperText
            }),
            /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $0bdfec6b4dfc0e48$export$2e2bcd8739ae039).Control.Feedback, {
                type: "invalid",
                ...fieldStyles.errorMessage,
                children: errorMessage
            })
        ]
    }, id) : null;
};








const $5659ec88c02c308e$export$4aaf0c609b3e241e = ({ id: id , name: name , field: field , defaultValue: defaultValue  })=>{
    const { label: label , helperText: helperText , required: required = false , shouldDisplay: shouldDisplay , styles: styles = {}  } = field;
    const { register: register , watch: watch  } = (0, $3844679bc44ad46f$export$4d957a5e1be13b03)();
    const fieldStyles = (0, $347d94a6b27ac6e3$export$28e6b9b82ee883c)("radioField", styles);
    const errorMessage = (0, $e045ee12a7ba0f7f$export$23759efdd2d2dae9)(name, label);
    const values = watch(name);
    const isVisible = (0, $aSjVs$react.useMemo)(()=>{
        return shouldDisplay ? shouldDisplay(values) : true;
    }, [
        values,
        shouldDisplay
    ]);
    return isVisible ? /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsxs)((0, $e9a841b226d6fe85$export$2e2bcd8739ae039), {
        controlId: id,
        className: "mb-3",
        ...fieldStyles.control,
        children: [
            !!label && /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $0bdfec6b4dfc0e48$export$2e2bcd8739ae039).Label, {
                ...fieldStyles.label,
                children: label
            }),
            /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)("div", {
                children: field.options.map((option, i)=>/*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $0bdfec6b4dfc0e48$export$2e2bcd8739ae039).Check, {
                        type: "radio",
                        name: name,
                        ...register(name),
                        id: name + "-" + option.label,
                        label: option.label,
                        value: option.value
                    }, i))
            }),
            !!helperText && /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $0bdfec6b4dfc0e48$export$2e2bcd8739ae039).Text, {
                ...fieldStyles.helperText,
                children: helperText
            }),
            /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $0bdfec6b4dfc0e48$export$2e2bcd8739ae039).Control.Feedback, {
                type: "invalid",
                ...fieldStyles.errorMessage,
                children: errorMessage
            })
        ]
    }, id) : null;
};








const $dd3cbb45b5cf74d1$export$94195a47b94ed396 = ({ id: id , name: name , field: field , defaultValue: defaultValue  })=>{
    const { label: label , helperText: helperText , required: required = false , shouldDisplay: shouldDisplay , styles: styles = {}  } = field;
    const { register: register , watch: watch  } = (0, $3844679bc44ad46f$export$4d957a5e1be13b03)();
    const values = watch(name);
    const fieldStyles = (0, $347d94a6b27ac6e3$export$28e6b9b82ee883c)("checkboxField", styles);
    const errorMessage = (0, $e045ee12a7ba0f7f$export$23759efdd2d2dae9)(name, label);
    const isVisible = (0, $aSjVs$react.useMemo)(()=>{
        return shouldDisplay ? shouldDisplay(values) : true;
    }, [
        values,
        shouldDisplay
    ]);
    return isVisible ? /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsxs)((0, $0bdfec6b4dfc0e48$export$2e2bcd8739ae039).Group, {
        controlId: id,
        ...fieldStyles.control,
        children: [
            !!label && /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $0bdfec6b4dfc0e48$export$2e2bcd8739ae039).Label, {
                ...fieldStyles.label,
                children: label
            }),
            /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)("div", {
                children: field.options.map((option, i)=>/*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $0bdfec6b4dfc0e48$export$2e2bcd8739ae039).Check, {
                        type: "checkbox",
                        name: name,
                        ...register(name),
                        id: name + "-" + option.label,
                        label: option.label,
                        value: option.value
                    }, i))
            }),
            !!helperText && /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $0bdfec6b4dfc0e48$export$2e2bcd8739ae039).Text, {
                ...fieldStyles.helperText,
                children: helperText
            }),
            /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $0bdfec6b4dfc0e48$export$2e2bcd8739ae039).Control.Feedback, {
                type: "invalid",
                ...fieldStyles.errorMessage,
                children: errorMessage
            })
        ]
    }, id) : null;
};








const $6f54729b3e8ca99d$export$d61c19f03375c53e = ({ id: id , name: name , field: field , defaultValue: defaultValue  })=>{
    const { label: label , placeholder: placeholder , helperText: helperText , required: required = false , accept: accept = "*" , shouldDisplay: shouldDisplay , styles: styles = {}  } = field;
    const fieldStyles = (0, $347d94a6b27ac6e3$export$28e6b9b82ee883c)("uploadField", styles);
    const { register: register , watch: watch  } = (0, $3844679bc44ad46f$export$4d957a5e1be13b03)();
    const errorMessage = (0, $e045ee12a7ba0f7f$export$23759efdd2d2dae9)(name, label);
    const values = watch(name);
    const isVisible = (0, $aSjVs$react.useMemo)(()=>{
        return shouldDisplay ? shouldDisplay(values) : true;
    }, [
        values,
        shouldDisplay
    ]);
    return isVisible ? /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsxs)((0, $0bdfec6b4dfc0e48$export$2e2bcd8739ae039).Group, {
        controlId: id,
        className: "mb-3",
        ...fieldStyles.control,
        children: [
            !!label && /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $0bdfec6b4dfc0e48$export$2e2bcd8739ae039).Label, {
                ...fieldStyles.label,
                children: label
            }),
            /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $16e53ff72a086615$export$2e2bcd8739ae039), {
                type: "file",
                accept: accept,
                name: name,
                "aria-label": name,
                ...register(name),
                required: required,
                placeholder: placeholder,
                defaultValue: defaultValue || "",
                ...fieldStyles.input
            }),
            !!helperText && /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $0bdfec6b4dfc0e48$export$2e2bcd8739ae039).Text, {
                ...fieldStyles.helperText,
                children: helperText
            }),
            /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $0bdfec6b4dfc0e48$export$2e2bcd8739ae039).Control.Feedback, {
                type: "invalid",
                ...fieldStyles.errorMessage,
                children: errorMessage
            })
        ]
    }, id) : null;
};






var $c5ed35949cb449c7$exports = {};




!function(e, t) {
    $c5ed35949cb449c7$exports = t((parcelRequire("2VcHj")), $aSjVs$react, (parcelRequire("24dTS")), (parcelRequire("5Zebf")));
}($c5ed35949cb449c7$exports, function(e, t, n, r) {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0);
    }([
        function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function a(e, t) {
                var n = {};
                for(var r in e)t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n;
            }
            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }
            function u(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = Object.assign || function(e) {
                for(var t = 1; t < arguments.length; t++){
                    var n = arguments[t];
                    for(var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }, c = function() {
                function e(e, t) {
                    for(var n = 0; n < t.length; n++){
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                };
            }(), f = n(1), p = r(f), l = n(2), d = r(l), v = n(3), h = r(v), _ = n(4), g = r(_), m = function(e) {
                function t() {
                    var e, n, r, u;
                    o(this, t);
                    for(var s = arguments.length, c = Array(s), f = 0; f < s; f++)c[f] = arguments[f];
                    return n = r = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [
                        this
                    ].concat(c))), r._sigPad = null, r._excludeOurProps = function() {
                        var e = r.props, t = (e.canvasProps, e.clearOnResize, a(e, [
                            "canvasProps",
                            "clearOnResize"
                        ]));
                        return t;
                    }, r.getCanvas = function() {
                        return r._canvas;
                    }, r.getTrimmedCanvas = function() {
                        var e = document.createElement("canvas");
                        return e.width = r._canvas.width, e.height = r._canvas.height, e.getContext("2d").drawImage(r._canvas, 0, 0), (0, g.default)(e);
                    }, r.getSignaturePad = function() {
                        return r._sigPad;
                    }, r._checkClearOnResize = function() {
                        r.props.clearOnResize && r._resizeCanvas();
                    }, r._resizeCanvas = function() {
                        var e = r.props.canvasProps || {}, t = e.width, n = e.height;
                        if (!t || !n) {
                            var a = r._canvas, o = Math.max(window.devicePixelRatio || 1, 1);
                            t || (a.width = a.offsetWidth * o), n || (a.height = a.offsetHeight * o), a.getContext("2d").scale(o, o), r.clear();
                        }
                    }, r.on = function() {
                        return window.addEventListener("resize", r._checkClearOnResize), r._sigPad.on();
                    }, r.off = function() {
                        return window.removeEventListener("resize", r._checkClearOnResize), r._sigPad.off();
                    }, r.clear = function() {
                        return r._sigPad.clear();
                    }, r.isEmpty = function() {
                        return r._sigPad.isEmpty();
                    }, r.fromDataURL = function(e, t) {
                        return r._sigPad.fromDataURL(e, t);
                    }, r.toDataURL = function(e, t) {
                        return r._sigPad.toDataURL(e, t);
                    }, r.fromData = function(e) {
                        return r._sigPad.fromData(e);
                    }, r.toData = function() {
                        return r._sigPad.toData();
                    }, u = n, i(r, u);
                }
                return u(t, e), c(t, [
                    {
                        key: "componentDidMount",
                        value: function() {
                            this._sigPad = new h.default(this._canvas, this._excludeOurProps()), this._resizeCanvas(), this.on();
                        }
                    },
                    {
                        key: "componentWillUnmount",
                        value: function() {
                            this.off();
                        }
                    },
                    {
                        key: "componentDidUpdate",
                        value: function() {
                            Object.assign(this._sigPad, this._excludeOurProps());
                        }
                    },
                    {
                        key: "render",
                        value: function() {
                            var e = this, t = this.props.canvasProps;
                            return d.default.createElement("canvas", s({
                                ref: function(t) {
                                    e._canvas = t;
                                }
                            }, t));
                        }
                    }
                ]), t;
            }(l.Component);
            m.propTypes = {
                velocityFilterWeight: p.default.number,
                minWidth: p.default.number,
                maxWidth: p.default.number,
                minDistance: p.default.number,
                dotSize: p.default.oneOfType([
                    p.default.number,
                    p.default.func
                ]),
                penColor: p.default.string,
                throttle: p.default.number,
                onEnd: p.default.func,
                onBegin: p.default.func,
                canvasProps: p.default.object,
                clearOnResize: p.default.bool
            }, m.defaultProps = {
                clearOnResize: !0
            }, t.default = m;
        },
        function(t, n) {
            t.exports = e;
        },
        function(e, n) {
            e.exports = t;
        },
        function(e, t) {
            e.exports = n;
        },
        function(e, t) {
            e.exports = r;
        }
    ]);
});




const $a448922fe29b9c8a$export$737a6469d99de160 = ({ id: id , name: name , field: field , defaultValue: defaultValue  })=>{
    const { label: label , placeholder: placeholder , helperText: helperText , required: required = false , shouldDisplay: shouldDisplay , styles: styles = {}  } = field;
    const ref = (0, $aSjVs$react.useRef)(0);
    const fieldStyles = (0, $347d94a6b27ac6e3$export$28e6b9b82ee883c)("signatureField", styles);
    const { setValue: setValue , watch: watch  } = (0, $3844679bc44ad46f$export$4d957a5e1be13b03)();
    const errorMessage = (0, $e045ee12a7ba0f7f$export$23759efdd2d2dae9)(name, label);
    const values = watch(name);
    const isVisible = (0, $aSjVs$react.useMemo)(()=>{
        return shouldDisplay ? shouldDisplay(values) : true;
    }, [
        values,
        shouldDisplay
    ]);
    const save = ()=>{
        setValue(name, ref.current.getTrimmedCanvas().toDataURL("image/png"));
    };
    const clear = ()=>ref.current.clear();
    return isVisible ? /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsxs)((0, $0bdfec6b4dfc0e48$export$2e2bcd8739ae039).Group, {
        controlId: id,
        className: "mb-3",
        ...fieldStyles.control,
        children: [
            !!label && /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $0bdfec6b4dfc0e48$export$2e2bcd8739ae039).Label, {
                ...fieldStyles.label,
                children: label
            }),
            /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)("div", {
                        className: "col-10",
                        children: /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, (/*@__PURE__*/$parcel$interopDefault($c5ed35949cb449c7$exports))), {
                            canvasProps: {
                                style: {
                                    width: "100%",
                                    height: fieldStyles.height,
                                    background: "#fff"
                                }
                            },
                            ref: ref,
                            onEnd: save
                        })
                    }),
                    /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)("div", {
                        className: "col-2 d-flex align-items-center",
                        children: /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)("button", {
                            className: "btn btn-primary",
                            onClick: clear,
                            children: "↺"
                        })
                    })
                ]
            }),
            !!helperText && /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $0bdfec6b4dfc0e48$export$2e2bcd8739ae039).Text, {
                ...fieldStyles.helperText,
                children: helperText
            }),
            /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $0bdfec6b4dfc0e48$export$2e2bcd8739ae039).Control.Feedback, {
                type: "invalid",
                ...fieldStyles.errorMessage,
                children: errorMessage
            })
        ]
    }, id) : null;
};


const $9e70e6e6dfb2a281$export$65972ef3a64ea716 = ([name, field])=>{
    let Component = null;
    switch(field.type){
        case "title":
            Component = (0, $4cd0ab3e5f7d6cd5$export$c207a8ee394fdeab);
            break;
        case "text":
            Component = (0, $0362f57056efa014$export$2c73285ae9390cec);
            break;
        case "select":
            Component = (0, $748070c77a9202ca$export$d55b50a564d0b931);
            break;
        case "radio":
            Component = (0, $5659ec88c02c308e$export$4aaf0c609b3e241e);
            break;
        case "checkbox":
            Component = (0, $dd3cbb45b5cf74d1$export$94195a47b94ed396);
            break;
        case "upload":
            Component = (0, $6f54729b3e8ca99d$export$d61c19f03375c53e);
            break;
        case "signature":
            Component = (0, $a448922fe29b9c8a$export$737a6469d99de160);
            break;
        default:
            console.log(field.type, "isn't implemented yet!");
            break;
    }
    return /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)(Component, {
        name: name,
        field: field,
        ...field.props
    }, name);
};


const $524470e42badd95f$var$defaultStyles = {};
const $524470e42badd95f$export$a7fed597f4b8afd8 = (props)=>{
    const { title: title , schema: schema = {} , handleSubmit: handleSubmit , formOptions: formOptions = {} , overwriteDefaultStyles: overwriteDefaultStyles , buttons: buttons , styles: styles = {}  } = props;
    const form = (0, $3844679bc44ad46f$export$87c0cf8eb5a167e0)(formOptions);
    const baseStyles = (0, $aSjVs$react.useMemo)(()=>{
        return overwriteDefaultStyles ? styles : (0, (/*@__PURE__*/$parcel$interopDefault($CkFUA)))($524470e42badd95f$var$defaultStyles, styles);
    }, [
        styles,
        overwriteDefaultStyles
    ]);
    return /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $347d94a6b27ac6e3$export$7dae14b1400b9486).Provider, {
        value: baseStyles,
        children: /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $3844679bc44ad46f$export$8ce1ff4f94d08846), {
            ...form,
            children: /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsxs)("form", {
                onSubmit: form.handleSubmit(handleSubmit),
                ...baseStyles.form?.container,
                children: [
                    !!title && /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)("h1", {
                        ...baseStyles.form?.title,
                        children: title
                    }),
                    /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $398afc574773aea1$export$2e2bcd8739ae039), {
                        spacing: baseStyles.form?.fieldSpacing,
                        children: Object.entries(schema).map((0, $9e70e6e6dfb2a281$export$65972ef3a64ea716))
                    }),
                    /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsxs)((0, $e9d2bbcb60fc185c$export$2e2bcd8739ae039), {
                        ...baseStyles.form?.buttonGroup,
                        children: [
                            buttons?.reset?.hidden ? null : /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $2ccf3e31000e1a43$export$2e2bcd8739ae039), {
                                type: "reset",
                                ...baseStyles.form?.resetButton,
                                children: buttons?.reset?.text || "Reset"
                            }),
                            /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $2ccf3e31000e1a43$export$2e2bcd8739ae039), {
                                type: "submit",
                                ...baseStyles.form?.submitButton,
                                children: buttons?.submit?.text || "Submit"
                            })
                        ]
                    })
                ]
            })
        })
    });
};






var $CkFUA = parcelRequire("CkFUA");


const $ac39aec9f1b151df$var$defaultStyles = {};
const $ac39aec9f1b151df$export$cb1ad078b6c48b67 = (props)=>{
    const { schema: schema = {} , handleSubmit: handleSubmit , formOptions: formOptions = {} , overwriteDefaultStyles: overwriteDefaultStyles , children: children , styles: styles = {}  } = props;
    let formElements = "undefined" !== typeof props.step ? Object.entries(schema[props.step]).map((0, $9e70e6e6dfb2a281$export$65972ef3a64ea716)) : Object.entries(schema).map((0, $9e70e6e6dfb2a281$export$65972ef3a64ea716));
    let elements = children instanceof Array ? children.reduce((acc, item)=>{
        if ("function" === typeof item) item = item(formElements);
        acc.push(item);
        return acc;
    }, []) : children(formElements);
    const form = (0, $3844679bc44ad46f$export$87c0cf8eb5a167e0)(formOptions);
    const baseStyles = (0, $aSjVs$react.useMemo)(()=>{
        return overwriteDefaultStyles ? styles : (0, (/*@__PURE__*/$parcel$interopDefault($CkFUA)))($ac39aec9f1b151df$var$defaultStyles, styles);
    }, [
        styles,
        overwriteDefaultStyles
    ]);
    return /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $347d94a6b27ac6e3$export$7dae14b1400b9486).Provider, {
        value: baseStyles,
        children: /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)((0, $3844679bc44ad46f$export$8ce1ff4f94d08846), {
            ...form,
            children: /*#__PURE__*/ (0, $aSjVs$reactjsxruntime.jsx)("form", {
                onSubmit: form.handleSubmit(handleSubmit),
                ...baseStyles.form?.container,
                children: elements
            })
        })
    });
};






//# sourceMappingURL=index.js.map
