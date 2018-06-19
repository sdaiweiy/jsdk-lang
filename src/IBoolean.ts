/***
 * 布尔操作对应的工具类接口定义
 */
export default class IBoolean {

    /***
     * 判断对象是否是boolean对象
     * @param object 给定的对象
     * @return true:是  false:否
     */
    static isBoolean(object: any): boolean {
        return Object.prototype.toString.call(object) === '[object Boolean]';
    }

    /***
     * 判断给定的对象是false
     * ~~~
     * IBoolean.isFalse()              = true
     * IBoolean.isFalse(null)          = true
     * IBoolean.isFalse("")            = true
     * IBoolean.isFalse(undefined)     = true
     * IBoolean.isFalse({})            = false
     * IBoolean.isFalse([])            = false
     * ~~~
     * @param object
     * @return true:是  false:否
     */
    static isFalse(object: any): boolean {
        return !object;
    }

    /***
     * 判断给定的对象是false
     * ~~~
     * IBoolean.isTrue()              = false
     * IBoolean.isTrue(null)          = false
     * IBoolean.isTrue("")            = false
     * IBoolean.isTrue(undefined)     = false
     * IBoolean.isTrue({})            = true
     * IBoolean.isTrue([])            = true
     * ~~~
     * @param object
     * @return true:是  false:否
     */
    static isTrue(object: any): boolean {
        return !!object;
    }

    /***
     * 将给定对象转化为bool类型
     * @param object 给定的对象
     * @return true/false
     */
    static valueOf(object: any): boolean {
        return !!object;
    }

    /**
     * 将bool的对象转为JSON字符串
     * @param object 目标对象
     * @return 转换后的结果
     */
    static toJson(object: boolean): boolean {
        return this.valueOf(object);
    }

    /***
     * 根据对象的值来返回一个字符串："true" 或 "false"
     * @param object 给定的对象
     * @return "true"/"false"
     */
    static toString(object: boolean): string {
        return Boolean.prototype.toString.call(object);
    }

}