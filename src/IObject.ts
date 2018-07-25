import IArray from './IArray';
import IDate from './IDate';
import IString from './IString';
import IBoolean from "./IBoolean";
import IFunction from "./IFunction";
import INumber from "./INumber";

/**
 * 对象操作对应的工具类接口定义
 */
export default class IObject {

    /***
     * 判断给予的对象是否不是空,注意null和Undefined 都返回false
     * @param object 判定对象
     * @return true:已定义 false:未定义
     */
    static isDefined(object: any): boolean {
        return !this.isUndefined(object);
    }

    /***
     * 判断给予的对象是否是Undefined类型,注意Undefined和null都返回true
     * @param object 判定对象
     * @return true:未定义  false:已定义
     */
    static isUndefined(object: any): boolean {
        return object == undefined;
    }

    /***
     * 如果object是一个对象，返回true。
     * @param object 判定对象
     * @return true:是  false:否
     */
    static isObject(object: any): boolean {
        return 'function' == typeof object || !!(object && 'object' == typeof object);
    }

    /**
     * 如果object是一个{}对象，返回true。
     * @param object 判定对象
     * @return true:是  false:否
     */
    static isPlain(object: any): boolean {
        for (let _name in object) {
            return false;
        }
        return true;
    }

    /**
     * 判断两个对象是否相等,不仅只判断引用
     * 如果引用不同,会判定两者的对象中的属性以及对应的值是否相同
     * @param source
     * @param target
     * @return true:相同  false:不同
     */
    static equals(source: any, target: any): boolean {
        return deepEquals(source, target);
    }

    /***
     * 浅层次拷贝,如果对象中包含对象,其指针保持不变
     * @param target 目标元素
     * @param source ... 被拷贝的元素
     * @return 拷贝的新对象
     */
    static extend(target: object, ...source: object[]): object {
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

    /***
     * 深度层次拷贝
     * @param target 目标元素
     * @param source  ... 被拷贝的元素
     * @returns
     */
    static deepExtend(target: any, ...source: any[]): any {
        target = target || {};

        for (let i = 0; i < source.length; i++) {
            let obj = source[i];

            if (!obj)
                continue;

            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (this.isObject(obj[key])) {
                        target[key] = this.deepExtend(target[key], obj[key]);
                    } else {
                        target[key] = obj[key];
                    }
                }
            }
        }
        return target;
    }


    /**
     * 深度克隆一个对象,并返回结果
     * @param object 目标对象
     * @return 复制的结果对象
     */
    static clone<T>(object: T): T {
        return this.deepExtend({}, object);
    }

    /**
     * 获取 object 对象的所有属性名.
     * @param object 目标对象
     * @return 属性集合
     */
    static keys(object: object): string[] {
        let hasOwn = Object.prototype.hasOwnProperty;

        if (hasOwn.call(Object, "keys")) {
            return Object.keys(object);
        }

        let keys = [];
        for (let key in object) {
            if (hasOwn.call(object, key)) {
                keys.push(key);
            }
        }
        return keys;
    }

    /**
     * 获取 object 对象的所有属性值.
     * @param object 目标对象
     * @return 属性对应的值的集合
     */
    static values(object: object): any[] {
        let values = [],
            keys = this.keys(object);

        for (let i = 0, len = keys.length; i < len; i++) {
            values.push(object[keys[i]]);
        }
        return values;
    }

    /***
     * 对象是否包含给定的键
     * @param object 目标对象
     * @param key 给定的键
     * @return true:包含  false:不包含
     */
    static hasKey(object: object, key: string): boolean {
        return object != null && Object.prototype.hasOwnProperty.call(object, key);
    }

    /***
     * 遍历当前元素对象,遍历元素尽量不要使用 for in 去遍历
     * @param object 目标对象
     * @param fn 回调函数
     *         fn回调函数按顺序对应参数,key,value,object,分别为键/值/遍历的对象,回调函数如果返回false则中断循环
     */
    static each(object: object, fn: (key: any, value: any, object: any) => (boolean | void)): void {
        IArray.each(this.keys(object), function (i, key) {
            return fn.call(object, key, object[key], object);
        });
    }

    /***
     * 将json对象序列化,通常来说JSON对象序列化只需要调用IObject中的toJson方法即可,不需要调用每个子工具类中的方法
     * @param object 目标对象
     * @return 序列化后的字符串 如果返回''字符串,则序列化失败
     */
    static toJson(object: any): any {
        if (JSON && JSON.stringify) {
            return JSON.stringify(object);
        }

        if (this.isUndefined(object) || IFunction.isFunction(object)) {
            return null;
        } else if (IBoolean.isBoolean(object)) {
            return IBoolean.toJson(object);
        } else if (IString.isString(object)) {
            return IString.toJson(object);
        } else if (IArray.isArray(object)) {
            return IArray.toJson(object);
        } else if (INumber.isNumber(object)) {
            return INumber.toJson(object);
        } else if (IDate.isDate(object)) {
            return IDate.toJson(object);
        } else if (IObject.isObject(object)) {
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
        } else if (object.toJson) {
            return object.toJson();
        }
        return '';
    }

    /**
     * 将Json字符转转为Json对象
     * @param data 需要解析的字符串
     * @return 转换成的JSON对象
     */
    static parseJson(data: string): object {
        try {
            if (JSON && JSON.parse) {
                return JSON.parse(data);
            }
            return (new Function("return " + data))();
        } catch (e) {
            return null;
        }
    }
}

/**
 * 参考underscore 的 isEqual方法实现,内部函数
 * @method equals
 * @private
 * @static
 * @param {Object} a
 * @param {Object} b
 * @param {Array} aStack
 * @param {Array} bStack
 * @return {boolean}
 */
const deepEquals = function (a, b, aStack: any[] = [], bStack: any[] = []) {
    if (a === b) {
        return true;
    }
    //a和b 有一个为null 则不同
    if (a == null || b == null) {
        return false;
    }
    //用来判断NaN的情况
    if (a !== a) {
        return b !== b;
    }
    let type = typeof a;
    if (type !== 'function' && type !== 'object' && typeof b != 'object') {
        return false;
    }
    let toString = Object.prototype.toString;
    ///通过对象所属的类进行第一步比较，类不相同直接pass掉
    let className = toString.call(a);
    if (className !== toString.call(b)) {
        return false;
    }
    switch (className) {
        //字符串和正则可以看作是同一类，转化成字符串直接比较
        case '[object RegExp]':
        case '[object String]':
            return '' + a === '' + b;
        case '[object Number]':
            if (+a !== +a) {
                return +b !== +b;
            }
            return +a === +b;
        //Date和Boolean可以看作一类比较
        case '[object Date]':
        case '[object Boolean]':
            return +a === +b;
        /*        case '[object Symbol]':
         let symbolProp = Symbol.prototype;
         return symbolProp.valueOf.call(a) === symbolProp.valueOf.call(b);*/
    }
    let areArrays = className === '[object Array]';
    //不是数组情况
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
    //数组情况
    if (areArrays) {
        // 比较数组的长度来判读是否有继续比较的必要
        length = a.length;
        if (length !== b.length) {
            return false;
        }
        //判断数组内容是否相同
        while (length--) {
            // 深度比较数组中的内容
            if (!deepEquals(a[length], b[length], aStack, bStack)) {
                return false;
            }
        }
    }
    else {
        //不是数组是对象的情况
        let keys = IObject.keys(a), key = void 0;
        length = keys.length;
        //如果a,b的键数组的长度不一致，pass掉。
        if (IObject.keys(b).length !== length) {
            return false;
        }
        while (length--) {
            // 深度比较每个成员属性
            key = keys[length];
            if (!(IObject.hasKey(b, key) && deepEquals(a[key], b[key], aStack, bStack))) {
                return false;
            }
        }
    }
    aStack.pop();
    bStack.pop();
    return true;
}