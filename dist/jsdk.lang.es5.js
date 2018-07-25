/**
 * jsdk-lang v.0.0.10 - javascript sdk lang utils
 * Copyright (c) 2018 [object Object]
 * MIT
 * https://github.com/sdaiweiy/jsdk-lang
 */
/**
 * jsdk-lang v.0.0.10 - javascript sdk lang utils
 * Copyright (c) 2018 [object Object]
 * MIT
 * https://github.com/sdaiweiy/jsdk-lang
 */
this.Jsdk = this.Jsdk || {};
this.Jsdk.Lang = (function (exports) {
    'use strict';

    var IString = (function () {
        function IString() {
        }
        IString.charAt = function (str, index) {
            return str.charAt(index);
        };
        IString.contains = function (str, sbustr) {
            return this.indexOf(str, sbustr) != -1;
        };
        IString.endWith = function (source, suffix) {
            return RegExp(suffix + "$").test(source);
        };
        IString.format = function (str, context) {
            if (!context) {
                context = window;
            }
            var replacer = function (str, match) {
                var replacement, subs = match.split(/\.+/);
                for (var i = 0, len = subs.length; i < len; i++) {
                    if (i == 0) {
                        replacement = context;
                    }
                    if (replacement === undefined) {
                        break;
                    }
                    replacement = replacement[subs[i]];
                }
                if (typeof replacement == 'undefined') {
                    return 'undefined';
                }
                else {
                    return replacement;
                }
            };
            return str.replace(/\{\{([\w.]+?)\}\}/g, replacer);
        };
        IString.indexOf = function (str, substr, index) {
            if (index === void 0) { index = 0; }
            return str.indexOf(substr, index);
        };
        IString.isBlank = function (str) {
            return !str || this.trim(str) === "";
        };
        IString.isEmpty = function (str) {
            return !str || str === "";
        };
        IString.isNotBlank = function (str) {
            return !this.isBlank(str);
        };
        IString.isNotEmpty = function (str) {
            return !this.isEmpty(str);
        };
        IString.isNotNullOrEmpty = function (str) {
            return !this.isNullOrEmpty(str);
        };
        IString.isNullOrEmpty = function (str) {
            return IObject.isUndefined(str) || str == "";
        };
        IString.isString = function (str) {
            return Object.prototype.toString.call(str) === '[object String]';
        };
        IString.lastIndexOf = function (str, substr, index) {
            if (index === void 0) { index = str.length; }
            return str.lastIndexOf(substr, index);
        };
        IString.padLeft = function (str, size, padStr) {
            if (padStr === void 0) { padStr = " "; }
            if (str.length >= size) {
                return str;
            }
            if (!padStr) {
                padStr = " ";
            }
            var paddingString = new String(), len = Math.floor((size - str.length) / padStr.length), gap = size - (len * padStr.length) - str.length;
            for (var i = 0; i < len; i++) {
                paddingString += padStr;
            }
            paddingString += this.substr(padStr, 0, gap);
            return paddingString + str;
        };
        IString.padRight = function (str, size, padStr) {
            if (padStr === void 0) { padStr = ""; }
            if (str.length >= size) {
                return str;
            }
            if (!padStr) {
                padStr = " ";
            }
            var paddingString = new String(), len = Math.floor((size - str.length) / padStr.length), gap = size - (len * padStr.length) - str.length;
            for (var i = 0; i < len; i++) {
                paddingString += padStr;
            }
            paddingString += this.substr(padStr, 0, gap);
            return str + paddingString;
        };
        IString.replace = function (str, rule, replacement) {
            return str.replace(rule, replacement);
        };
        IString.replaceFirst = function (str, rule, replacement) {
            return str.replace(rule, replacement);
        };
        IString.replaceAll = function (str, findText, replaceText) {
            return str.replace(new RegExp(findText, "g"), replaceText);
        };
        IString.split = function (str, separator) {
            return str.split(separator);
        };
        IString.startWith = function (source, prefix) {
            return new RegExp("^" + prefix).test(source);
        };
        IString.stripHTML = function (source) {
            return String(source || '').replace(/<[^>]+>/g, '');
        };
        IString.substr = function (str, start, length) {
            if (length === void 0) { length = str.length; }
            if (start < 0) {
                start = str.length + start;
            }
            return str.substr(start, length);
        };
        IString.substring = function (str, start, stop) {
            if (stop === void 0) { stop = str.length; }
            return str.substring(start, stop);
        };
        IString.toCamelCase = function (source) {
            if (source.indexOf('-') < 0 && source.indexOf('_') < 0) {
                return source;
            }
            return source.replace(/[-_][^-_]/g, function (match) {
                return match.charAt(1).toUpperCase();
            });
        };
        IString.toJson = function (str) {
            return '"' + str.replace(_CharToReplace, function (a) {
                var c = _Meta[a];
                return IString.isString(c) ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"';
        };
        IString.toLowerCase = function (str) {
            return str.toLowerCase();
        };
        IString.toString = function (str) {
            return str.toString();
        };
        IString.toUpperCase = function (str) {
            return str.toUpperCase();
        };
        IString.trim = function (str) {
            return str.replace(/^(\s|\u3000|\xa0|\u00A0)+/, '').replace(/(\s||\u3000|\xa0\u00A0)+$/, '');
        };
        IString.trimLeft = function (str) {
            return str.replace(/^(\s|\u3000|\xa0\u00A0)+/, '');
        };
        IString.trimRight = function (str) {
            return str.replace(/(\s|\u3000|\xa0\u00A0)+$/, '');
        };
        IString.valueOf = function (str) {
            return str + '';
        };
        return IString;
    }());
    var _CharToReplace = /[\\\"\x00-\x1f\x7f-\uffff]/g;
    var _Meta = {
        "\b": '\\b',
        "\t": '\\t',
        "\n": '\\n',
        "\f": '\\f',
        "\r": '\\r',
        '"': '\\"',
        "\\": '\\\\',
        '\v': '\\u000b'
    };

    var INumber = (function () {
        function INumber() {
        }
        INumber.isFinite = function (num) {
            return isFinite(num) && !isNaN(parseFloat(num + ""));
        };
        INumber.isNaN = function (num) {
            return this.isNumber(num) && isNaN(num);
        };
        INumber.isNumber = function (object) {
            return Object.prototype.toString.call(object) === '[object Number]';
        };
        INumber.max = function () {
            var nums = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                nums[_i] = arguments[_i];
            }
            return Math.max.apply(Math, nums);
        };
        INumber.min = function () {
            var nums = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                nums[_i] = arguments[_i];
            }
            return Math.min.apply(Math, nums);
        };
        INumber.parseFloat = function (num) {
            return parseFloat(num);
        };
        INumber.parseFloat1 = function (num) {
            var value = parseFloat(num);
            return this.isNaN(value) ? 0.0 : value;
        };
        INumber.parseInt = function (num, radix) {
            return parseInt(num, radix ? radix : 10);
        };
        INumber.parseInt1 = function (num, radix) {
            var value = parseInt(num, radix);
            return this.isNaN(value) ? 0 : value;
        };
        INumber.randomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        INumber.toFixed = function (num, decimal) {
            decimal = decimal || 0;
            var s = this.toString(num);
            var decimalIndex = s.indexOf('.');
            if (decimalIndex < 0) {
                var fraction = '';
                for (var i = 0; i < decimal; i++) {
                    fraction += '0';
                }
                return s + '.' + fraction;
            }
            var numDigits = s.length - 1 - decimalIndex;
            if (numDigits <= decimal) {
                var fraction = '';
                for (var i = 0; i < decimal - numDigits; i++) {
                    fraction += '0';
                }
                return s + fraction;
            }
            var digits = s.split('');
            var pos = decimalIndex + decimal;
            var roundDigit = digits[pos + 1];
            if (roundDigit > 4) {
                if (pos == decimalIndex) {
                    --pos;
                }
                digits[pos] = Number(digits[pos] || 0) + 1;
                while (digits[pos] == 10) {
                    digits[pos] = 0;
                    --pos;
                    if (pos == decimalIndex) {
                        --pos;
                    }
                    digits[pos] = Number(digits[pos] || 0) + 1;
                }
            }
            if (decimal == 0) {
                decimal--;
            }
            return digits.slice(0, decimalIndex + decimal + 1).join('');
        };
        INumber.toJson = function (num) {
            return num;
        };
        INumber.toString = function (num) {
            return num + "";
        };
        INumber.valueOf = function (object) {
            return Number(object);
        };
        return INumber;
    }());

    var IDate = (function () {
        function IDate() {
        }
        IDate.after = function (date, when) {
            return this.compareTo(date, when) > 0;
        };
        IDate.before = function (date, when) {
            return this.compareTo(date, when) < 0;
        };
        IDate.between = function (date, start, end) {
            return this.after(date, start) && this.before(date, end);
        };
        IDate.compareTo = function (date1, date2) {
            return date1.getTime() - date2.getTime();
        };
        IDate.format = function (date, pattern) {
            if ('string' != typeof pattern) {
                return date.toString();
            }
            function replacer(patternPart, result) {
                pattern = pattern.replace(patternPart, result);
            }
            var year = date.getFullYear(), month = date.getMonth() + 1, date2 = date.getDate(), hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds();
            replacer(/yyyy/g, IString.padLeft(year + "", 4, "0"));
            replacer(/yy/g, IString.padLeft(parseInt(year.toString().slice(2), 10) + "", 2, "0"));
            replacer(/MM/g, IString.padLeft(month + "", 2, "0"));
            replacer(/M/g, month);
            replacer(/dd/g, IString.padLeft(date2 + "", 2, "0"));
            replacer(/d/g, date2);
            replacer(/HH/g, IString.padLeft(hours + "", 2, "0"));
            replacer(/H/g, hours);
            replacer(/hh/g, IString.padLeft(hours % 12 + "", 2, "0"));
            replacer(/h/g, hours % 12);
            replacer(/mm/g, IString.padLeft(minutes + "", 2, "0"));
            replacer(/m/g, minutes);
            replacer(/ss/g, IString.padLeft(seconds + "", 2, "0"));
            replacer(/s/g, seconds);
            return pattern;
        };
        IDate.formatToFriendly = function (date, friendlyPattern) {
            if (!friendlyPattern) {
                friendlyPattern = {
                    "刚刚": 60,
                    "一小时前": 3600,
                    "HH:mm": 86400,
                    "yyyy年MM月dd日": -1
                };
            }
            var now = new Date();
            for (var pattern in friendlyPattern) {
                var value = friendlyPattern[pattern];
                if (-1 == value) {
                    return IDate.format(date, pattern);
                }
                if ((now.getTime() - date.getTime()) < value * 1000) {
                    return IDate.format(date, pattern);
                }
            }
        };
        IDate.getDay = function (date) {
            return date.getDate();
        };
        IDate.getDayOfWeek = function (date) {
            return date.getDay();
        };
        IDate.getDayOfWeekInMonth = function (date) {
            var day = this.getDayOfWeek(date), d = date.getDate();
            return Math.ceil((d + 6 - day) / 7);
        };
        IDate.getDayOfYear = function (date) {
            var firstDay = new Date(date.getFullYear(), 0, 1);
            return Math.ceil((date.getTime() - firstDay.getTime()) / (1000 * 60 * 60 * 24));
        };
        IDate.getHours = function (date) {
            return date.getHours();
        };
        IDate.getMilliseconds = function (date) {
            return date.getMilliseconds();
        };
        IDate.getMinutes = function (date) {
            return date.getMinutes();
        };
        IDate.getMonth = function (date) {
            return date.getMonth();
        };
        IDate.getQuarter = function (date) {
            return Math.floor((date.getMonth() + 3) / 3);
        };
        IDate.getSeconds = function (date) {
            return date.getSeconds();
        };
        IDate.getTime = function (date) {
            return date.getTime();
        };
        IDate.getWeekOfMonth = function (date) {
            var year = date.getFullYear(), month = date.getMonth(), first = new Date(year, month, 1).getDate(), last = 32 - new Date(year, month, 32).getDate();
            return Math.ceil((first + last) / 7);
        };
        IDate.getWeekOfYear = function (date) {
            var year = date.getFullYear(), beginDay = new Date(year, 0, 1).getDay(), days = this.isLeapYear(year) ? 366 : 365;
            return Math.ceil((days - beginDay) / 7.0);
        };
        IDate.getYear = function (date) {
            return date.getFullYear();
        };
        IDate.isDate = function (date) {
            return Object.prototype.toString.call(date) === '[object Date]';
        };
        IDate.isLeapYear = function (value) {
            if (this.isDate(value)) {
                value = this.getYear(value);
            }
            if (INumber.isNumber(value)) {
                return value % 4 == 0 && (value % 100 != 0 || value % 400 == 0);
            }
            return false;
        };
        IDate.minus = function (startTime, endTime, diffType) {
            var diff = endTime.getTime() - startTime.getTime();
            var divisions = [24 * 3600 * 1000, 3600 * 1000, 60000, 1000, 1];
            if (diffType < 2 || diffType > 6) {
                throw new RangeError("diffType value must between 2 and 6");
            }
            return INumber.parseInt(diff / divisions[diffType - 2]);
        };
        IDate.now = function () {
            return new Date().getTime();
        };
        IDate.parse = function (str, pattern) {
            if (pattern === void 0) { pattern = "yyyy-MM-dd"; }
            var obj = { y: 0, M: 1, d: 0, H: 0, h: 0, m: 0, s: 0, S: 0 };
            pattern.replace(/([^yMdHmsS]*?)(([yMdHmsS])\3*)([^yMdHmsS]*?)/g, function (m, $1, $2, $3, $4, idx, old) {
                str = str.replace(new RegExp($1 + '(\\d{1,' + $2.length + '})' + $4), function (_m, _$1) {
                    obj[$3] = parseInt(_$1);
                    return '';
                });
                return '';
            });
            obj.M--;
            var date = new Date(obj.y, obj.M, obj.d, obj.H, obj.m, obj.s);
            if (obj.S !== 0)
                date.setMilliseconds(obj.S);
            return date;
        };
        IDate.setDay = function (date, day) {
            date.setDate(day);
        };
        IDate.setHours = function (date, hour) {
            date.setHours(hour);
        };
        IDate.setMilliseconds = function (date, millisec) {
            date.setMilliseconds(millisec);
        };
        IDate.setMinutes = function (date, min) {
            date.setMinutes(min);
        };
        IDate.setMonth = function (date, month) {
            date.setMonth(month);
        };
        IDate.setSeconds = function (date, sec) {
            date.setSeconds(sec);
        };
        IDate.setYear = function (date, year) {
            date.setFullYear(year);
        };
        IDate.setTime = function (date, millisec) {
            date.setTime(millisec);
        };
        IDate.toJson = function (date) {
            var result = date.getFullYear() +
                "-" + IString.padLeft(date.getMonth() + 1 + "", 2, "0") +
                "-" + IString.padLeft(date.getDate() + "", 2, "0") +
                "T" + IString.padLeft(date.getHours() + "", 2, "0") +
                ":" + IString.padLeft(date.getMinutes() + "", 2, "0") +
                ":" + IString.padLeft(date.getSeconds() + "", 2, "0") +
                "." + IString.padLeft(date.getMilliseconds() + "", 3, "0") + "Z";
            if (isLessIE7) {
                result = '"' + result + '"';
            }
            return result;
        };
        IDate.toString = function (date) {
            return Date.prototype.toString.call(date);
        };
        IDate.YEAR = 0;
        IDate.MONTH = 1;
        IDate.DAY = 2;
        IDate.HOUR = 3;
        IDate.MINUTE = 4;
        IDate.SECOND = 5;
        IDate.MILLISECOND = 6;
        return IDate;
    }());
    var isLessIE7 = false;
    try {
        var version = navigator.appVersion.split(";")[1].replace(/[ ]/g, "");
        isLessIE7 = (navigator.appName == "Microsoft Internet Explorer" && (version == "MSIE6.0" || version == "MSIE7.0"));
    }
    catch (e) {
        isLessIE7 = false;
    }

    var IBoolean = (function () {
        function IBoolean() {
        }
        IBoolean.isBoolean = function (object) {
            return Object.prototype.toString.call(object) === '[object Boolean]';
        };
        IBoolean.isFalse = function (object) {
            return !object;
        };
        IBoolean.isTrue = function (object) {
            return !!object;
        };
        IBoolean.valueOf = function (object) {
            return !!object;
        };
        IBoolean.toJson = function (object) {
            return this.valueOf(object);
        };
        IBoolean.toString = function (object) {
            return Boolean.prototype.toString.call(object);
        };
        return IBoolean;
    }());

    var IFunction = (function () {
        function IFunction() {
        }
        IFunction.currying = function (fn) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var slice = Array.prototype.slice;
            return function () {
                var __inargs = slice.call(arguments);
                return fn.apply(null, args.concat(__inargs));
            };
        };
        IFunction.delay = function (func, delay) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            return setTimeout(function () {
                return func.apply(null, args);
            }, delay);
        };
        IFunction.emptyFunc = function () {
            return new Function();
        };
        IFunction.isFunction = function (object) {
            return Object.prototype.toString.call(object) === '[object Function]';
        };
        IFunction.bind = function (fn, context) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            return function () {
                return fn.apply(context, args.concat(Array.prototype.slice.call(arguments)));
            };
        };
        IFunction.throttle = function (fn, interval) {
            var timer, firstTime = true;
            return function () {
                var args = arguments, _this = this;
                if (firstTime) {
                    fn.apply(_this, args);
                    return firstTime = false;
                }
                if (timer) {
                    return false;
                }
                timer = setTimeout(function () {
                    clearTimeout(timer);
                    timer = null;
                    fn.apply(_this, args);
                }, interval || 200);
            };
        };
        return IFunction;
    }());

    var IObject = (function () {
        function IObject() {
        }
        IObject.isDefined = function (object) {
            return !this.isUndefined(object);
        };
        IObject.isUndefined = function (object) {
            return object == undefined;
        };
        IObject.isObject = function (object) {
            return 'function' == typeof object || !!(object && 'object' == typeof object);
        };
        IObject.isPlain = function (object) {
            if (!IObject.isObject(object)) {
                return false;
            }
            if (object.constructor &&
                !this.hasOwn.call(object, "constructor") &&
                !this.hasOwn.call(object.constructor.prototype, "isPrototypeOf")) {
                return false;
            }
            for (var _name in object) {
                return false;
            }
            if (object.item && typeof object.length == "number") {
                return false;
            }
            return true;
        };
        IObject.equals = function (source, target) {
            return deepEquals(source, target);
        };
        IObject.extend = function (target) {
            var source = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                source[_i - 1] = arguments[_i];
            }
            target = target || {};
            for (var i = 0; i < source.length; i++) {
                var obj = source[i];
                if (!obj)
                    continue;
                for (var key in source[i]) {
                    if (source[i].hasOwnProperty(key)) {
                        target[key] = source[i][key];
                    }
                }
            }
            return target;
        };
        IObject.deepExtend = function (target) {
            var source = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                source[_i - 1] = arguments[_i];
            }
            target = target || {};
            for (var i = 0; i < source.length; i++) {
                var obj = source[i];
                if (!obj)
                    continue;
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        if (this.isObject(obj[key])) {
                            target[key] = this.deepExtend(target[key], obj[key]);
                        }
                        else {
                            target[key] = obj[key];
                        }
                    }
                }
            }
            return target;
        };
        IObject.clone = function (object) {
            return this.deepExtend({}, object);
        };
        IObject.keys = function (object) {
            if (this.hasOwn.call(Object, "keys")) {
                return Object.keys(object);
            }
            var keys = [];
            for (var key in object) {
                if (this.hasOwn.call(object, key)) {
                    keys.push(key);
                }
            }
            return keys;
        };
        IObject.values = function (object) {
            var values = [], keys = this.keys(object);
            for (var i = 0, len = keys.length; i < len; i++) {
                values.push(object[keys[i]]);
            }
            return values;
        };
        IObject.hasKey = function (object, key) {
            return object != null && this.hasOwn.call(object, key);
        };
        IObject.each = function (object, fn) {
            IArray.each(this.keys(object), function (i, key) {
                return fn.call(object, key, object[key], object);
            });
        };
        IObject.toJson = function (object) {
            if (JSON && JSON.stringify) {
                return JSON.stringify(object);
            }
            if (this.isUndefined(object) || IFunction.isFunction(object)) {
                return null;
            }
            else if (IBoolean.isBoolean(object)) {
                return IBoolean.toJson(object);
            }
            else if (IString.isString(object)) {
                return IString.toJson(object);
            }
            else if (IArray.isArray(object)) {
                return IArray.toJson(object);
            }
            else if (INumber.isNumber(object)) {
                return INumber.toJson(object);
            }
            else if (IDate.isDate(object)) {
                return IDate.toJson(object);
            }
            else if (IObject.isObject(object)) {
                var array_1 = ["{", ""];
                IObject.each(object, function (i, key, value) {
                    if (object.hasOwnProperty(key)) {
                        if (!IFunction.isFunction(value) && value !== undefined) {
                            array_1.push(IObject.toJson(i), ":", IObject.toJson(value), ',');
                        }
                    }
                });
                array_1[array_1.length - 1] = '}';
                return array_1.join("");
            }
            else if (object.toJson) {
                return object.toJson();
            }
            return '';
        };
        IObject.parseJson = function (data) {
            try {
                if (JSON && JSON.parse) {
                    return JSON.parse(data);
                }
                return (new Function("return " + data))();
            }
            catch (e) {
                return null;
            }
        };
        IObject.hasOwn = Object.prototype.hasOwnProperty;
        return IObject;
    }());
    var deepEquals = function (a, b, aStack, bStack) {
        if (aStack === void 0) { aStack = []; }
        if (bStack === void 0) { bStack = []; }
        if (a === b) {
            return true;
        }
        if (a == null || b == null) {
            return false;
        }
        if (a !== a) {
            return b !== b;
        }
        var type = typeof a;
        if (type !== 'function' && type !== 'object' && typeof b != 'object') {
            return false;
        }
        var toString = Object.prototype.toString;
        var className = toString.call(a);
        if (className !== toString.call(b)) {
            return false;
        }
        switch (className) {
            case '[object RegExp]':
            case '[object String]':
                return '' + a === '' + b;
            case '[object Number]':
                if (+a !== +a) {
                    return +b !== +b;
                }
                return +a === +b;
            case '[object Date]':
            case '[object Boolean]':
                return +a === +b;
        }
        var areArrays = className === '[object Array]';
        if (!areArrays) {
            if (typeof a != 'object' || typeof b != 'object') {
                return false;
            }
            var aCtor = a.constructor, bCtor = b.constructor;
            if (aCtor !== bCtor && !(IFunction.isFunction(aCtor) && aCtor instanceof aCtor &&
                IFunction.isFunction(bCtor) && bCtor instanceof bCtor)
                && ('constructor' in a && 'constructor' in b)) {
                return false;
            }
        }
        var length = aStack.length;
        while (length--) {
            if (aStack[length] === a) {
                return bStack[length] === b;
            }
        }
        if (areArrays) {
            length = a.length;
            if (length !== b.length) {
                return false;
            }
            while (length--) {
                if (!deepEquals(a[length], b[length], aStack, bStack)) {
                    return false;
                }
            }
        }
        else {
            var keys = IObject.keys(a), key = void 0;
            length = keys.length;
            if (IObject.keys(b).length !== length) {
                return false;
            }
            while (length--) {
                key = keys[length];
                if (!(IObject.hasKey(b, key) && deepEquals(a[key], b[key], aStack, bStack))) {
                    return false;
                }
            }
        }
        aStack.pop();
        bStack.pop();
        return true;
    };

    var IArray = (function () {
        function IArray() {
        }
        IArray.add = function (array, item, index) {
            if (index === void 0) { index = array.length; }
            array.splice(index, 0, item);
        };
        IArray.addAll = function (array) {
            var source = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                source[_i - 1] = arguments[_i];
            }
            for (var i = 0, len = source.length; i < len; i++) {
                var sub = source[i];
                for (var j = 0, len1 = sub.length; j < len1; j++) {
                    array.push(sub[j]);
                }
            }
            return array;
        };
        IArray.clear = function (array) {
            array.length = 0;
        };
        IArray.clone = function (array) {
            return array.slice(0);
        };
        IArray.contains = function (array, item) {
            return this.indexOf(array, item) !== -1;
        };
        IArray.each = function (array, iterator) {
            for (var i = 0, len = array.length; i < len; i++) {
                if (iterator(i, array[i], array) === false) {
                    break;
                }
            }
        };
        IArray.filter = function (array, fn) {
            var result = [];
            this.each(array, function (index, item) {
                if (fn(index, item, array)) {
                    result.push(item);
                }
            });
            return result;
        };
        IArray.indexOutOfBounds = function (array, index) {
            return index < 0 || index >= array.length;
        };
        IArray.isArray = function (object) {
            if (!Array.isArray) {
                return Object.prototype.toString.call(object) === '[object Array]';
            }
            return Array.isArray(object);
        };
        IArray.isNullOrEmpty = function (array) {
            return !this.isArray(array) || array.length == 0;
        };
        IArray.isNotNullOrEmpty = function (array) {
            return !this.isNullOrEmpty(array);
        };
        IArray.indexOf = function (array, item, index) {
            if (index === void 0) { index = 0; }
            for (var i = index, length_1 = array.length; i < length_1; i++) {
                if (IObject.equals(array[i], item)) {
                    return i;
                }
            }
            return -1;
        };
        IArray.join = function (array, separator) {
            return Array.prototype.join.call(array, separator);
        };
        IArray.lastIndexOf = function (array, item) {
            for (var len = array.length - 1; len >= 0; len--) {
                if (IObject.equals(array[len], item)) {
                    return len;
                }
            }
            return -1;
        };
        IArray.remove = function (array, index) {
            if (this.indexOutOfBounds(array, index)) {
                throw new RangeError("index out of bounds");
            }
            return array.splice(index, 1)[0];
        };
        IArray.removeByValue = function (array, item) {
            return this.remove(array, this.indexOf(array, item));
        };
        IArray.removeRange = function (array, startIndex, endIndex) {
            if (this.indexOutOfBounds(array, startIndex) || this.indexOutOfBounds(array, endIndex)) {
                throw new RangeError("startIndex or endIndex out of bounds");
            }
            return array.splice(startIndex, (endIndex - startIndex));
        };
        IArray.reverse = function (array) {
            return array.reverse();
        };
        IArray.sort = function (array, fn) {
            return fn ? array.sort(fn) : array.sort();
        };
        IArray.subArray = function (array, startIndex, endIndex) {
            if (endIndex === void 0) { endIndex = array.length; }
            if (this.indexOutOfBounds(array, startIndex) || this.indexOutOfBounds(array, endIndex - 1)) {
                throw new RangeError("startIndex or endIndex out of bounds");
            }
            return Array.prototype.slice.call(array, startIndex, endIndex);
        };
        IArray.toJson = function (array) {
            var result = ["[", ""], len = array.length, i;
            for (i = 0; i < len; i += 1) {
                var val = IObject.toJson(array[i]);
                if (val) {
                    result.push(val, ',');
                }
            }
            result[result.length - 1] = ']';
            return result.join("");
        };
        IArray.toString = function (array) {
            return Array.prototype.toString.call(array);
        };
        return IArray;
    }());

    var IStringEscape = (function () {
        function IStringEscape() {
        }
        IStringEscape.escapeReg = function (source) {
            return String(source).replace(new RegExp("([.*+?^=!:\x24{}()|[\\]\/\\\\])", "g"), '\\\x241');
        };
        IStringEscape.escapeHtml = function (source) {
            return String(source)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#39;");
        };
        IStringEscape.unEscapeHtml = function (source) {
            var str = String(source)
                .replace(/&quot;/g, '"')
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&amp;/g, "&");
            return str.replace(/&#([\d]+);/g, function (_0, _1) {
                return String.fromCharCode(parseInt(_1, 10));
            });
        };
        IStringEscape.escapeJavaScript = function (source) {
            return '';
        };
        IStringEscape.unEscapeJavaScript = function (source) {
            return '';
        };
        return IStringEscape;
    }());

    exports.IArray = IArray;
    exports.IBoolean = IBoolean;
    exports.IDate = IDate;
    exports.IFunction = IFunction;
    exports.INumber = INumber;
    exports.IObject = IObject;
    exports.IString = IString;
    exports.IStringEscape = IStringEscape;

    return exports;

}({}));
