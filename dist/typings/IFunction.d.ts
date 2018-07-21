export default class IFunction {
    static currying(fn: Function, ...args: any[]): Function;
    static delay(func: Function, delay: Number, ...args: any[]): any;
    static emptyFunc(): Function;
    static isFunction(object: any): boolean;
    static bind(fn: Function, context: object, ...args: any[]): Function;
    static throttle(fn: Function, interval: number): Function;
}
