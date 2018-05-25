/***
 * 数组操作对应的工具类接口定义
 */
export default class IArray {

    /**
     * 向数组添加指定元素
     * @param array 给定的数组
     * @param items 给定的元素
     * @optional
     * @param index 可选参数,需要插入的索引位置,从0开始
     */
    static add<T>(array: T[], items: T, index?: number): void {

    }

    /**
     * 由若干个数组组合而成的新数组,数组的指针指向给定数组
     * ~~~
     * var alpha = ['a', 'b']{
       
    }
     * var numeric = [1, 2]{
       
    }
     * var result = addAll(alpha, numeric){
       
    }
     * ~~~
     * @param target 给定的数组
     * @param source ...  需要合并的数组
     */
    static addAll<T>(target: T[], ...source: T[]): void {

    }

    /***
     * 移除此数组中的所有元素
     * @param array 给定的数组
     */
    static clear<T>(array: T[]): void {

    }

    /**
     * 数组克隆(浅克隆),即数组中的对象指针不发生改变,如需要深度克隆,请使用Dev.ObjectUtils.clone(){
       
    }
     * @param array 给定的数组
     * @return  返回克隆结果集
     */
    static clone<T>(array: T[]): T[] {
        return [];
    }

    /***
     * 判定给定的元素是否在数组中
     * @param array 给定的数组
     * @param item 判定的对象
     * @return  如果此列表中包含指定的元素，则返回 true。
     */
    static contains<T>(array: T[], item: T): boolean {
        return false;
    }

    /**
     * 数组迭代器
     * @param array 给定的数组
     * @param iterator 迭代器 返回false表明阻止循环,
     * iterator参数     index:数组中正在处理的当前元素的索引。
     *                  item:数组中正在处理的当前元素。
     *                  array:正在操作的数组
     */
    static each<T>(array: T[], iterator: (key: any, value: any, object: any) => (boolean | void)): void {

    }

    /**
     * 根据过滤条件,返回结果集合
     * @param array 给定的数组
     * @param fn 过滤条件 true:表示返回数据
     * fn参数       index:数组中正在处理的当前元素的索引。
     *              item:数组中正在处理的当前元素。
     *               array:正在操作的数组
     * @return  符合条件的结果集
     */
    static filter<T>(array: T[], fn: (key: any, value: any, object: any) => (boolean )): T[] {
        return [];
    }

    /**
     * 判断给定的索引位置,是否超出
     * @param array 给定的数组
     * @param index 索引
     * @return  true:超出位置  false:未超出
     */
    static indexOutOfBounds<T>(array: T[], index: number): boolean {
        return false;
    }

    /***
     * 判断给予的对象是否是数组类型
     * @param object
     * @return  true:是 false:不是
     */
    static isArray(object: any): boolean {
        return false;
    }

    /**
     * 如果此列表中没有元素，则返回 true
     * @param array 给定的数组
     * @return  如果此列表中没有元素，则返回 true,否则返回false
     */
    static isNullOrEmpty<T>(array: T[]): boolean {
        return false;
    }

    /**
     * 如果此列表中有元素，则返回 true
     * @param array 给定的数组
     * @return  如果此列表中有元素，则返回 true,否则返回false
     */
    static isNotNullOrEmpty<T>(array: T[]): boolean {
        return false;
    }

    /**
     * 在数组中查找指定的对象是否存在
     * @param array 给定的数组
     * @param item 判定的对象
     * @optional
     * @param index 搜索的起始索引位置
     * @return  返回此列表中首次出现的指定元素的索引，或如果此列表不包含元素，则返回 -1。
     */
    static indexOf<T>(array: T[], item: T, index?: number): number {
        return -1;
    }

    /**
     * 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。
     * @param array 给定的数组
     * @optional
     * @param separator 指定一个字符串来分隔数组的每个元素。如果省略()，数组元素用逗号分隔。默认为 ","。
     * @return
     */
    static join<T>(array: T[], separator?: string): string {
        return '';
    }

    /***
     * 倒叙在数组中查找指定的对象在列表中最后一次出现的指定元素的索引
     * @param array 给定的数组
     * @param item 判定的对象
     * @return  返回此列表中最后一次出现的指定元素的索引，或如果此列表不包含索引，则返回 -1。
     */
    static lastIndexOf<T>(array: T[], item: T): number {
        return -1;
    }

    /**
     * 移除此列表中指定位置上的元素
     * @param array 给定的数组
     * @param index 需要删除的元素索引
     * @return  被移除的元素
     */
    static remove<T>(array: T[], index: number): T {
        return null;
    }

    /**
     * 移除此列表中指定位置上的元素
     * @param array 给定的数组
     * @param item 指定对象
     * @return  被移除的元素
     */
    static removeByValue<T>(array: T[], item: T): T {
        return null;
    }

    /***
     * 移除列表中索引在 startIndex（包括）和 endIndex（不包括）之间的所有元素。
     * @param array 给定的数组
     * @param startIndex 起始索引
     * @param endIndex 结束索引
     * @return  被移除的元素组成的新数组
     */
    static removeRange<T>(array: T[], startIndex: number, endIndex: number): T[] {
        return [];
    }

    /**
     * 颠倒数组中元素的位置，并返回该数组的引用。
     * @param array 给定的数组
     * @return  顺序颠倒后的数组
     */
    static reverse<T>(array: T[]): T[] {
        return [];
    }

    /**
     * 对数组元素进行排序，并返回当前数组
     * @param array 给定的数组
     * @param fn 排序算法,具体算法内容参照JS原生数组sort的用法
     * @return  返回排序后的数组。原数组已经被排序后的数组代替。
     */
    static sort<T>(array: T[], fn: (a: T, b: T) => number): T[] {
        return [];
    }

    /**
     * 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。原数组不会被修改
     * @param array 源数组
     * @param startIndex 起始索引
     * @optional
     * @param endIndex 结束索引,可选参数,默认为数组长度
     * @return  提取元素组成的新数组
     */
    static subArray<T>(array: T[], startIndex: number, endIndex?: number): T[] {
        return [];
    }

    /***
     * 将数组对象转为Json字符串
     * @param array 目标数组
     * @return  数组转成的Json字符串
     */
    static toJson<T>(array: T[]): string {
        return '';
    }

    /***
     * 回一个字符串，表示指定的数组及其元素。
     * @param array 源数组
     * @return   toString 方法把该数组转成一个字符串
     */
    static toString<T>(array: T[]): string {
        return '';
    }

}