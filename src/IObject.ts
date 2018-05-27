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
        return false;
    }

    /***
     * 判断给予的对象是否是Undefined类型,注意Undefined和null都返回true
     * @param object 判定对象
     * @return true:未定义  false:已定义
     */
    static isUndefined(object: any): boolean {
        return false;
    }

    /***
     * 如果object是一个对象，返回true。
     * @param object 判定对象
     * @return true:是  false:否
     */
    static isObject(object: any): boolean {
        return false;
    }

    /**
     * 如果object是一个{}对象，返回true。
     * @param object 判定对象
     * @return true:是  false:否
     */
    static isPlain(object: any): boolean {
        return false;
    }

    /**
     * 判断两个对象是否相等,不仅只判断引用
     * 如果引用不同,会判定两者的对象中的属性以及对应的值是否相同
     * @param source
     * @param target
     * @return true:相同  false:不同
     */
    static equals(source: any, target: any): boolean {
        return false;
    }

    /***
     * 浅层次拷贝,如果对象中包含对象,其指针保持不变
     * @param target 目标元素
     * @param source ... 被拷贝的元素
     * @return 拷贝的新对象
     */
    static extend(target: object, ...source: object[]): object {
        return {};
    }

    /**
     * 深度克隆一个对象,并返回结果
     * @param object 目标对象
     * @return 复制的结果对象
     */
    static clone<T>(object: T): T {
        return null;
    }

    /**
     * 获取 object 对象的所有属性名.
     * @param object 目标对象
     * @return 属性集合
     */
    static keys(object: object): string[] {
        return [];
    }

    /**
     * 获取 object 对象的所有属性值.
     * @param object 目标对象
     * @return 属性对应的值的集合
     */
    static values(object: object): any[] {
        return [];
    }

    /***
     * 对象是否包含给定的键
     * @param object 目标对象
     * @param key 给定的键
     * @return true:包含  false:不包含
     */
    static hasKey(object: object, key: string): boolean {
        return false;
    }

    /***
     * 遍历当前元素对象,遍历元素尽量不要使用 for in 去遍历
     * @param object 目标对象
     * @param fn 回调函数
     *         fn回调函数按顺序对应参数,key,value,object,分别为键/值/遍历的对象,回调函数如果返回false则中断循环
     */
    static each(object: object, fn: (key: any, value: any, object: any) => (boolean | void)): void {

    }

    /***
     * 将json对象序列化,通常来说JSON对象序列化只需要调用IObject中的toJson方法即可,不需要调用每个子工具类中的方法
     * @param object 目标对象
     * @return 序列化后的字符串 如果返回''字符串,则序列化失败
     */
    static toJson(object: object): string {
        return '';
    }

    /**
     * 将Json字符转转为Json对象
     * @param data 需要解析的字符串
     * @return 转换成的JSON对象
     */
    static parseJson(data: string): object {
        return {};
    }

}