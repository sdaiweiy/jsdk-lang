/***
 * Function操作对应的工具类接口定义
 */
export default class IFunction {

    /**
     * 函数柯里化工具函数,具体内容参考 https://www.ibm.com/developerworks/cn/web/1006_qiujt_jsfunctional/
     * @param fn
     * @param args 额外附加的参数
     * @return
     */
    static currying(fn: Function, ...args: any[]): Function {
        let slice = Array.prototype.slice;

        return function () {
            let __inargs = slice.call(arguments);
            return fn.apply(null, args.concat(__inargs));
        };
    }

    /**
     * 等待wait毫秒后调用function,如果传递可选的参数arguments，当函数function执行时， arguments 会作为参数传入。
     * @param func 待执行的函数
     * @param delay 等待时间
     * @param args 额外附加的参数
     * @return func的函数的返回结果
     */
    static delay(func: Function, delay: Number, ...args: any[]): any {
        return setTimeout(function () {
            return func.apply(null, args);
        }, delay);
    }

    /***
     * 提供一个空函数,方便使用
     * @method emptyFunc
     * @return function(){};
     */
    static emptyFunc(): Function {
        return new Function();
    }

    /**
     * 判断给予的对象是否是函数类型
     * @param object 给定的对象
     * @return true:是 false:否
     */
    static isFunction(object: any): boolean {
        return Object.prototype.toString.call(object) === '[object Function]';
    }

    /**
     * 返回一个新函数，并且这个函数始终保持了特定的作用域。
     * @param fn 将要被改变作用域的函数
     * @param context 一个object，那个函数的作用域会被设置到这个object上来
     * @param args 额外的传入参数
     * @returns {Function}
     */
    static bind(fn: Function, context: object, ...args: any[]): Function {
        return function () {
            return fn.apply(context, args.concat(Array.prototype.slice.call(arguments)));
        };
    }

    /**
     * 函数节流，适用于如下场景resize,mousemove等频繁被调用的事件
     * @param fn
     * @param interval 间隔时间,默认是200毫秒
     * @return
     */
    static throttle(fn: Function, interval: number): Function {
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