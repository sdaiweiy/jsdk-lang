'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class IString {
    static charAt(str, index) {
        return str.charAt(index);
    }
    static contains(str, sbustr) {
        return this.indexOf(str, sbustr) != -1;
    }
    static endWith(source, suffix) {
        return RegExp(suffix + "$").test(source);
    }
    static format(str, context) {
        if (!context) {
            context = window;
        }
        let replacer = function (str, match) {
            let replacement, subs = match.split(/\.+/);
            for (let i = 0, len = subs.length; i < len; i++) {
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
    }
    static indexOf(str, substr, index = 0) {
        return str.indexOf(substr, index);
    }
    static isBlank(str) {
        return !str || this.trim(str) === "";
    }
    static isEmpty(str) {
        return !str || str === "";
    }
    static isNotBlank(str) {
        return !this.isBlank(str);
    }
    static isNotEmpty(str) {
        return !this.isEmpty(str);
    }
    static isNotNullOrEmpty(str) {
        return !this.isNullOrEmpty(str);
    }
    static isNullOrEmpty(str) {
        return IObject.isUndefined(str) || str == "";
    }
    static isString(str) {
        return Object.prototype.toString.call(str) === '[object String]';
    }
    static lastIndexOf(str, substr, index = str.length) {
        return str.lastIndexOf(substr, index);
    }
    static padLeft(str, size, padStr = " ") {
        if (str.length >= size) {
            return str;
        }
        if (!padStr) {
            padStr = " ";
        }
        let paddingString = new String(), len = Math.floor((size - str.length) / padStr.length), gap = size - (len * padStr.length) - str.length;
        for (let i = 0; i < len; i++) {
            paddingString += padStr;
        }
        paddingString += this.substr(padStr, 0, gap);
        return paddingString + str;
    }
    static padRight(str, size, padStr = "") {
        if (str.length >= size) {
            return str;
        }
        if (!padStr) {
            padStr = " ";
        }
        let paddingString = new String(), len = Math.floor((size - str.length) / padStr.length), gap = size - (len * padStr.length) - str.length;
        for (let i = 0; i < len; i++) {
            paddingString += padStr;
        }
        paddingString += this.substr(padStr, 0, gap);
        return str + paddingString;
    }
    static replace(str, rule, replacement) {
        return str.replace(rule, replacement);
    }
    static replaceFirst(str, rule, replacement) {
        return str.replace(rule, replacement);
    }
    static replaceAll(str, findText, replaceText) {
        return str.replace(new RegExp(findText, "g"), replaceText);
    }
    static split(str, separator) {
        return str.split(separator);
    }
    static startWith(source, prefix) {
        return new RegExp("^" + prefix).test(source);
    }
    static stripHTML(source) {
        return String(source || '').replace(/<[^>]+>/g, '');
    }
    static substr(str, start, length = str.length) {
        if (start < 0) {
            start = str.length + start;
        }
        return str.substr(start, length);
    }
    static substring(str, start, stop = str.length) {
        return str.substring(start, stop);
    }
    static toCamelCase(source) {
        if (source.indexOf('-') < 0 && source.indexOf('_') < 0) {
            return source;
        }
        return source.replace(/[-_][^-_]/g, function (match) {
            return match.charAt(1).toUpperCase();
        });
    }
    static toJson(str) {
        return '"' + str.replace(_CharToReplace, function (a) {
            let c = _Meta[a];
            return IString.isString(c) ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"';
    }
    static toLowerCase(str) {
        return str.toLowerCase();
    }
    static toString(str) {
        return str.toString();
    }
    static toUpperCase(str) {
        return str.toUpperCase();
    }
    static trim(str) {
        return str.replace(/^(\s|\u3000|\xa0|\u00A0)+/, '').replace(/(\s||\u3000|\xa0\u00A0)+$/, '');
    }
    static trimLeft(str) {
        return str.replace(/^(\s|\u3000|\xa0\u00A0)+/, '');
    }
    static trimRight(str) {
        return str.replace(/(\s|\u3000|\xa0\u00A0)+$/, '');
    }
    static valueOf(str) {
        return str + '';
    }
}
const _CharToReplace = /[\\\"\x00-\x1f\x7f-\uffff]/g;
const _Meta = {
    "\b": '\\b',
    "\t": '\\t',
    "\n": '\\n',
    "\f": '\\f',
    "\r": '\\r',
    '"': '\\"',
    "\\": '\\\\',
    '\v': '\\u000b'
};

class INumber {
    static isFinite(num) {
        return isFinite(num) && !isNaN(parseFloat(num + ""));
    }
    static isNaN(num) {
        return this.isNumber(num) && isNaN(num);
    }
    static isNumber(object) {
        return Object.prototype.toString.call(object) === '[object Number]';
    }
    static max(...nums) {
        return Math.max.apply(Math, nums);
    }
    static min(...nums) {
        return Math.min.apply(Math, nums);
    }
    static parseFloat(num) {
        return parseFloat(num);
    }
    static parseFloat1(num) {
        let value = parseFloat(num);
        return this.isNaN(value) ? 0.0 : value;
    }
    static parseInt(num, radix) {
        return parseInt(num, radix ? radix : 10);
    }
    static parseInt1(num, radix) {
        let value = parseInt(num, radix);
        return this.isNaN(value) ? 0 : value;
    }
    static randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    static toFixed(num, decimal) {
        decimal = decimal || 0;
        let s = this.toString(num);
        let decimalIndex = s.indexOf('.');
        if (decimalIndex < 0) {
            let fraction = '';
            for (let i = 0; i < decimal; i++) {
                fraction += '0';
            }
            return s + '.' + fraction;
        }
        let numDigits = s.length - 1 - decimalIndex;
        if (numDigits <= decimal) {
            let fraction = '';
            for (let i = 0; i < decimal - numDigits; i++) {
                fraction += '0';
            }
            return s + fraction;
        }
        let digits = s.split('');
        let pos = decimalIndex + decimal;
        let roundDigit = digits[pos + 1];
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
    }
    static toJson(num) {
        return num;
    }
    static toString(num) {
        return num + "";
    }
    static valueOf(object) {
        return Number(object);
    }
}

class IDate {
    static after(date, when) {
        return this.compareTo(date, when) > 0;
    }
    static before(date, when) {
        return this.compareTo(date, when) < 0;
    }
    static between(date, start, end) {
        return this.after(date, start) && this.before(date, end);
    }
    static compareTo(date1, date2) {
        return date1.getTime() - date2.getTime();
    }
    static format(date, pattern) {
        if ('string' != typeof pattern) {
            return date.toString();
        }
        function replacer(patternPart, result) {
            pattern = pattern.replace(patternPart, result);
        }
        let year = date.getFullYear(), month = date.getMonth() + 1, date2 = date.getDate(), hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds();
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
    }
    static formatToFriendly(date, friendlyPattern) {
        if (!friendlyPattern) {
            friendlyPattern = {
                "刚刚": 60,
                "一小时前": 3600,
                "HH:mm": 86400,
                "yyyy年MM月dd日": -1
            };
        }
        let now = new Date();
        for (let pattern in friendlyPattern) {
            let value = friendlyPattern[pattern];
            if (-1 == value) {
                return IDate.format(date, pattern);
            }
            if ((now.getTime() - date.getTime()) < value * 1000) {
                return IDate.format(date, pattern);
            }
        }
    }
    static getDay(date) {
        return date.getDate();
    }
    static getDayOfWeek(date) {
        return date.getDay();
    }
    static getDayOfWeekInMonth(date) {
        let day = this.getDayOfWeek(date), d = date.getDate();
        return Math.ceil((d + 6 - day) / 7);
    }
    static getDayOfYear(date) {
        let firstDay = new Date(date.getFullYear(), 0, 1);
        return Math.ceil((date.getTime() - firstDay.getTime()) / (1000 * 60 * 60 * 24));
    }
    static getHours(date) {
        return date.getHours();
    }
    static getMilliseconds(date) {
        return date.getMilliseconds();
    }
    static getMinutes(date) {
        return date.getMinutes();
    }
    static getMonth(date) {
        return date.getMonth();
    }
    static getQuarter(date) {
        return Math.floor((date.getMonth() + 3) / 3);
    }
    static getSeconds(date) {
        return date.getSeconds();
    }
    static getTime(date) {
        return date.getTime();
    }
    static getWeekOfMonth(date) {
        let year = date.getFullYear(), month = date.getMonth(), first = new Date(year, month, 1).getDate(), last = 32 - new Date(year, month, 32).getDate();
        return Math.ceil((first + last) / 7);
    }
    static getWeekOfYear(date) {
        let year = date.getFullYear(), beginDay = new Date(year, 0, 1).getDay(), days = this.isLeapYear(year) ? 366 : 365;
        return Math.ceil((days - beginDay) / 7.0);
    }
    static getYear(date) {
        return date.getFullYear();
    }
    static isDate(date) {
        return Object.prototype.toString.call(date) === '[object Date]';
    }
    static isLeapYear(value) {
        if (this.isDate(value)) {
            value = this.getYear(value);
        }
        if (INumber.isNumber(value)) {
            return value % 4 == 0 && (value % 100 != 0 || value % 400 == 0);
        }
        return false;
    }
    static minus(startTime, endTime, diffType) {
        let diff = endTime.getTime() - startTime.getTime();
        let divisions = [24 * 3600 * 1000, 3600 * 1000, 60000, 1000, 1];
        if (diffType < 2 || diffType > 6) {
            throw new RangeError("diffType value must between 2 and 6");
        }
        return INumber.parseInt(diff / divisions[diffType - 2]);
    }
    static now() {
        return new Date().getTime();
    }
    static parse(str, pattern = "yyyy-MM-dd") {
        let obj = { y: 0, M: 1, d: 0, H: 0, h: 0, m: 0, s: 0, S: 0 };
        pattern.replace(/([^yMdHmsS]*?)(([yMdHmsS])\3*)([^yMdHmsS]*?)/g, function (m, $1, $2, $3, $4, idx, old) {
            str = str.replace(new RegExp($1 + '(\\d{1,' + $2.length + '})' + $4), function (_m, _$1) {
                obj[$3] = parseInt(_$1);
                return '';
            });
            return '';
        });
        obj.M--;
        let date = new Date(obj.y, obj.M, obj.d, obj.H, obj.m, obj.s);
        if (obj.S !== 0)
            date.setMilliseconds(obj.S);
        return date;
    }
    static setDay(date, day) {
        date.setDate(day);
    }
    static setHours(date, hour) {
        date.setHours(hour);
    }
    static setMilliseconds(date, millisec) {
        date.setMilliseconds(millisec);
    }
    static setMinutes(date, min) {
        date.setMinutes(min);
    }
    static setMonth(date, month) {
        date.setMonth(month);
    }
    static setSeconds(date, sec) {
        date.setSeconds(sec);
    }
    static setYear(date, year) {
        date.setFullYear(year);
    }
    static setTime(date, millisec) {
        date.setTime(millisec);
    }
    static toJson(date) {
        let result = date.getFullYear() +
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
    }
    static toString(date) {
        return Date.prototype.toString.call(date);
    }
}
IDate.YEAR = 0;
IDate.MONTH = 1;
IDate.DAY = 2;
IDate.HOUR = 3;
IDate.MINUTE = 4;
IDate.SECOND = 5;
IDate.MILLISECOND = 6;
let isLessIE7 = false;
try {
    let version = navigator.appVersion.split(";")[1].replace(/[ ]/g, "");
    isLessIE7 = (navigator.appName == "Microsoft Internet Explorer" && (version == "MSIE6.0" || version == "MSIE7.0"));
}
catch (e) {
    isLessIE7 = false;
}

class IBoolean {
    static isBoolean(object) {
        return Object.prototype.toString.call(object) === '[object Boolean]';
    }
    static isFalse(object) {
        return !object;
    }
    static isTrue(object) {
        return !!object;
    }
    static valueOf(object) {
        return !!object;
    }
    static toJson(object) {
        return this.valueOf(object);
    }
    static toString(object) {
        return Boolean.prototype.toString.call(object);
    }
}

class IFunction {
    static currying(fn, ...args) {
        let slice = Array.prototype.slice;
        return function () {
            let __inargs = slice.call(arguments);
            return fn.apply(null, args.concat(__inargs));
        };
    }
    static delay(func, delay, ...args) {
        return setTimeout(function () {
            return func.apply(null, args);
        }, delay);
    }
    static emptyFunc() {
        return new Function();
    }
    static isFunction(object) {
        return Object.prototype.toString.call(object) === '[object Function]';
    }
    static bind(fn, context, ...args) {
        return function () {
            return fn.apply(context, args.concat(Array.prototype.slice.call(arguments)));
        };
    }
    static throttle(fn, interval) {
        let timer, firstTime = true;
        return function () {
            let args = arguments, _this = this;
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
    }
}

class IObject {
    static isDefined(object) {
        return !this.isUndefined(object);
    }
    static isUndefined(object) {
        return object == undefined;
    }
    static isObject(object) {
        return 'function' == typeof object || !!(object && 'object' == typeof object);
    }
    static isPlain(object) {
        if (!IObject.isObject(object)) {
            return false;
        }
        if (object.constructor &&
            !this.hasOwn.call(object, "constructor") &&
            !this.hasOwn.call(object.constructor.prototype, "isPrototypeOf")) {
            return false;
        }
        for (let _name in object) {
            return false;
        }
        if (object.item && typeof object.length == "number") {
            return false;
        }
        return true;
    }
    static equals(source, target) {
        return deepEquals(source, target);
    }
    static extend(target, ...source) {
        target = target || {};
        for (let i = 0; i < source.length; i++) {
            let obj = source[i];
            if (!obj)
                continue;
            for (let key in source[i]) {
                if (source[i].hasOwnProperty(key)) {
                    target[key] = source[i][key];
                }
            }
        }
        return target;
    }
    static deepExtend(target, ...source) {
        target = target || {};
        for (let i = 0; i < source.length; i++) {
            let obj = source[i];
            if (!obj)
                continue;
            for (let key in obj) {
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
    }
    static clone(object) {
        return this.deepExtend({}, object);
    }
    static keys(object) {
        if (this.hasOwn.call(Object, "keys")) {
            return Object.keys(object);
        }
        let keys = [];
        for (let key in object) {
            if (this.hasOwn.call(object, key)) {
                keys.push(key);
            }
        }
        return keys;
    }
    static values(object) {
        let values = [], keys = this.keys(object);
        for (let i = 0, len = keys.length; i < len; i++) {
            values.push(object[keys[i]]);
        }
        return values;
    }
    static hasKey(object, key) {
        return object != null && this.hasOwn.call(object, key);
    }
    static each(object, fn) {
        IArray.each(this.keys(object), function (i, key) {
            return fn.call(object, key, object[key], object);
        });
    }
    static toJson(object) {
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
            let array = ["{", ""];
            IObject.each(object, function (i, key, value) {
                if (object.hasOwnProperty(key)) {
                    if (!IFunction.isFunction(value) && value !== undefined) {
                        array.push(IObject.toJson(i), ":", IObject.toJson(value), ',');
                    }
                }
            });
            array[array.length - 1] = '}';
            return array.join("");
        }
        else if (object.toJson) {
            return object.toJson();
        }
        return '';
    }
    static parseJson(data) {
        try {
            if (JSON && JSON.parse) {
                return JSON.parse(data);
            }
            return (new Function("return " + data))();
        }
        catch (e) {
            return null;
        }
    }
}
IObject.hasOwn = Object.prototype.hasOwnProperty;
const deepEquals = function (a, b, aStack = [], bStack = []) {
    if (a === b) {
        return true;
    }
    if (a == null || b == null) {
        return false;
    }
    if (a !== a) {
        return b !== b;
    }
    let type = typeof a;
    if (type !== 'function' && type !== 'object' && typeof b != 'object') {
        return false;
    }
    let toString = Object.prototype.toString;
    let className = toString.call(a);
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
    let areArrays = className === '[object Array]';
    if (!areArrays) {
        if (typeof a != 'object' || typeof b != 'object') {
            return false;
        }
        let aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor && !(IFunction.isFunction(aCtor) && aCtor instanceof aCtor &&
            IFunction.isFunction(bCtor) && bCtor instanceof bCtor)
            && ('constructor' in a && 'constructor' in b)) {
            return false;
        }
    }
    let length = aStack.length;
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
        let keys = IObject.keys(a), key = void 0;
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

class IArray {
    static add(array, item, index = array.length) {
        array.splice(index, 0, item);
    }
    static addAll(array, ...source) {
        for (let i = 0, len = source.length; i < len; i++) {
            let sub = source[i];
            for (let j = 0, len1 = sub.length; j < len1; j++) {
                array.push(sub[j]);
            }
        }
        return array;
    }
    static clear(array) {
        array.length = 0;
    }
    static clone(array) {
        return array.slice(0);
    }
    static contains(array, item) {
        return this.indexOf(array, item) !== -1;
    }
    static each(array, iterator) {
        for (let i = 0, len = array.length; i < len; i++) {
            if (iterator(i, array[i], array) === false) {
                break;
            }
        }
    }
    static filter(array, fn) {
        let result = [];
        this.each(array, function (index, item) {
            if (fn(index, item, array)) {
                result.push(item);
            }
        });
        return result;
    }
    static indexOutOfBounds(array, index) {
        return index < 0 || index >= array.length;
    }
    static isArray(object) {
        if (!Array.isArray) {
            return Object.prototype.toString.call(object) === '[object Array]';
        }
        return Array.isArray(object);
    }
    static isNullOrEmpty(array) {
        return !this.isArray(array) || array.length == 0;
    }
    static isNotNullOrEmpty(array) {
        return !this.isNullOrEmpty(array);
    }
    static indexOf(array, item, index = 0) {
        for (let i = index, length = array.length; i < length; i++) {
            if (IObject.equals(array[i], item)) {
                return i;
            }
        }
        return -1;
    }
    static join(array, separator) {
        return Array.prototype.join.call(array, separator);
    }
    static lastIndexOf(array, item) {
        for (let len = array.length - 1; len >= 0; len--) {
            if (IObject.equals(array[len], item)) {
                return len;
            }
        }
        return -1;
    }
    static remove(array, index) {
        if (this.indexOutOfBounds(array, index)) {
            throw new RangeError("index out of bounds");
        }
        return array.splice(index, 1)[0];
    }
    static removeByValue(array, item) {
        return this.remove(array, this.indexOf(array, item));
    }
    static removeRange(array, startIndex, endIndex) {
        if (this.indexOutOfBounds(array, startIndex) || this.indexOutOfBounds(array, endIndex)) {
            throw new RangeError("startIndex or endIndex out of bounds");
        }
        return array.splice(startIndex, (endIndex - startIndex));
    }
    static reverse(array) {
        return array.reverse();
    }
    static sort(array, fn) {
        return fn ? array.sort(fn) : array.sort();
    }
    static subArray(array, startIndex, endIndex = array.length) {
        if (this.indexOutOfBounds(array, startIndex) || this.indexOutOfBounds(array, endIndex - 1)) {
            throw new RangeError("startIndex or endIndex out of bounds");
        }
        return Array.prototype.slice.call(array, startIndex, endIndex);
    }
    static toJson(array) {
        let result = ["[", ""], len = array.length, i;
        for (i = 0; i < len; i += 1) {
            let val = IObject.toJson(array[i]);
            if (val) {
                result.push(val, ',');
            }
        }
        result[result.length - 1] = ']';
        return result.join("");
    }
    static toString(array) {
        return Array.prototype.toString.call(array);
    }
}

class IStringEscape {
    static escapeReg(source) {
        return String(source).replace(new RegExp("([.*+?^=!:\x24{}()|[\\]\/\\\\])", "g"), '\\\x241');
    }
    static escapeHtml(source) {
        return String(source)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
    static unEscapeHtml(source) {
        let str = String(source)
            .replace(/&quot;/g, '"')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, "&");
        return str.replace(/&#([\d]+);/g, function (_0, _1) {
            return String.fromCharCode(parseInt(_1, 10));
        });
    }
    static escapeJavaScript(source) {
        return '';
    }
    static unEscapeJavaScript(source) {
        return '';
    }
}

exports.IArray = IArray;
exports.IBoolean = IBoolean;
exports.IDate = IDate;
exports.IFunction = IFunction;
exports.INumber = INumber;
exports.IObject = IObject;
exports.IString = IString;
exports.IStringEscape = IStringEscape;
