/***
 * 时间操作对应的工具类接口定义
 */
export default class IDate {

    /**
     * 判断给定时间是否在某个时间之后
     * @param date 目标日期
     * @param when 比较的日期
     * @return true:date > when   false:date < when
     */
    static after(date: Date, when: Date): boolean {
        return false;
    }

    /**
     * 判断给定时间是否在某个时间之前
     * @param date 目标日期
     * @param when 比较的日期
     * @return true:date < when   false:date > when
     */
    static before(date: Date, when: Date): boolean {
        return false;
    }

    /**
     * 判断给定的时间是否在指定的start 和 end 时间之间
     * @param date 目标日期
     * @param start 比较开始日期
     * @param end 比较结束日期
     * @return true:是 false:否
     */
    static between(date: Date, start: Date, end: Date): boolean {
        return false;
    }

    /**
     * 比较两个日期的顺序
     * @param date1 目标日期
     * @param date2 比较的日期
     * @return 如果date1等于此date2，则返回值 0；如果date1在date2参数之前，则返回小于 0 的值；如果date1在date2参数之后，则返回大于 0 的值。
     */
    static compareTo(date1: Date, date2: Date): number {
        return 1;
    }

    /**
     * 将给定的 Date 格式化为日期/时间字符串,并返回结果
     * @example
     * var date = Date();
     * Dev.Date.format(date,"yyyy-MM-dd HH:mm:ss")  ==> 2016-07-02 08:09:04
     * Dev.Date.format(date,"yyyy-M-d H:m:s.S")       ==> 2016-7-2 8:9:4.18
     * @param date 目标日期
     * @param  pattern 指定转换的模式字符串,默认为yyyy-MM-dd
     *          <b>格式表达式，变量含义：</b><br><br>
     *          hh: 带 0 补齐的两位 12 进制时表示<br>
     *          h: 不带 0 补齐的 12 进制时表示<br>
     *          HH: 带 0 补齐的两位 24 进制时表示<br>
     *          H: 不带 0 补齐的 24 进制时表示<br>
     *          mm: 带 0 补齐两位分表示<br>
     *          m: 不带 0 补齐分表示<br>
     *          ss: 带 0 补齐两位秒表示<br>
     *          s: 不带 0 补齐秒表示<br>
     *          yyyy: 带 0 补齐的四位年表示<br>
     *          yy: 带 0 补齐的两位年表示<br>
     *          MM: 带 0 补齐的两位月表示<br>
     *          M: 不带 0 补齐的月表示<br>
     *          dd: 带 0 补齐的两位日表示<br>
     *          d: 不带 0 补齐的日表示
     * @return 将格式化的字符串结果
     */
    static format(date: Date, pattern: string): string {
        return '';
    }

    /**
     * 返回月份的某一天
     * @param date 目标日期
     * @return  所指的月份中的某一天，使用本地时间。返回值是 1 ~ 31 之间的一个整数。
     */
    static getDay(date: Date): number {
        return 1;
    }

    /**
     * 从 Date 对象返回一周中的某一天(0 ~ 6)。
     * @param date 目标日期
     * @return
     */
    static getDayOfWeek(date: Date): number {
        return 1;
    }

    /**
     * 获取今天所属的这周是这个月的第几周(0 ~ 5)。
     * @param date 目标日期
     * @return
     */
    static getDayOfWeekInMonth(date: Date): number {
        return 1;
    }

    /**
     * 获取今天是今年的第几天(1~366)
     * @param date 目标日期
     * @return
     */
    static getDayOfYear(date: Date): number {
        return 1;
    }

    /**
     * 返回时间的小时字段。
     * @param date 目标日期
     * @return 以本地时间显示。返回值是 0 （午夜） 到 23 （晚上 11 点）之间的一个整数。
     */
    static getHours(date: Date): number {
        return 1;
    }

    /**
     * 返回时间的毫秒。
     * @param date 目标日期
     * @return 毫秒字段，以本地时间显示。返回值是 0 ~ 999 之间的一个整数。
     */
    static getMilliseconds(date: Date): number {
        return 1;
    }

    /**
     * 返回时间的分钟字段。
     * @param date 目标日期
     * @return 分钟字段，以本地时间显示。返回值是 0 ~ 59 之间的一个整数。
     */
    static getMinutes(date: Date): number {
        return 1;
    }

    /**
     * 返回表示月份的数字。
     * @param date 目标日期
     * @return 月份字段，使用本地时间。返回值是 0（一月） 到 11（十二月） 之间的一个整数。
     */
    static getMonth(date: Date): number {
        return 1;
    }

    /**
     * 获取日期所对应的季度信息
     * @method getQuarter
     * @static
     * @param date 目标日期
     * @return {Number} 季度(1 ~ 4)
     */
    static getQuarter(date): number {
        return 1;
    }

    /**
     * 返回时间的秒。
     * @param date 目标日期
     * @return 秒字段，以本地时间显示。返回值是 0 ~ 59 之间的一个整数。
     */
    static getSeconds(date: Date): number {
        return 1;
    }

    /**
     * 返回距 1970 年 1 月 1 日之间的毫秒数。
     * @param date 目标日期
     * @return 指定的日期和时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数。
     */
    static getTime(date: Date): number {
        return 1;
    }

    /**
     * 获得一个月的周数
     * @param date 目标日期
     * @return 星期数
     */
    static getWeekOfMonth(date: Date): number {
        return 1;
    }

    /**
     * 获取一年中有多少个星期,1号后第一个星期日才算第一周计算
     * @param date 目标日期
     * @return 星期数
     */
    static getWeekOfYear(date: Date): number {
        return 1;
    }

    /**
     * 返回一个表示年份的 4 位数字。
     * @param date 目标日期
     * @return 本地时间表示时返回的年份。返回值是一个四位数，表示包括世纪值在内的完整年份，而不是两位数的缩写形式。
     */
    static getYear(date: Date): number {
        return 1;
    }

    /**
     * 判断给予的对象是否是Date类型
     * @param date 目标日期
     * @return true:包含  false:不包含
     */
    static isDate(date: Date): boolean {
        return false;
    }

    /**
     * 判断给定的日期是否是闰年
     * @param value 目标日期/年份
     * @return true:闰年 false:非闰年
     */
    static isLeapYear(value: number | Date): boolean {
        return false;
    }

    /***
     * 1970 年 1 月 1日午夜与当前日期和时间之间的毫秒数。
     * @return
     */
    static now(): number {
        return 1;
    }

    /**
     * 解析字符串的文本，生成 Date
     * @example
     * Dev.Date.parse('2016-08-11'); // Thu Aug 11 2016 00:00:00 GMT+0800
     * Dev.Date.parse('2016-08-11 13:28:43') // Thu Aug 11 2016 13:28:43 GMT+0800
     * @param source 日期字符串
     * @return 字符串对应的日期
     */
    static parse(source: string): Date {
        return null;
    }

    /**
     * 用于设置一个月的某一天
     * @param date 目标日期
     * @param day 表示一个月中的一天的一个数值（1 ~ 31）。
     */
    static setDay(date: Date, day: number): void {

    }

    /**
     * 设置指定的时间的小时字段。
     * @param date 目标日期
     * @param hour 表示小时的数值，介于 0（午夜） ~ 23（晚上11点） 之间
     */
    static setHours(date: Date, hour: number): void {

    }

    /**
     * 毫秒设置 Date 对象。
     * @param date 目标日期
     * @param millisec 表示毫秒的数值，介于 0 ~ 999之间。
     */
    static setMilliseconds(date: Date, millisec: number): void {

    }

    /**
     * 用于设置分钟
     * @param date 目标日期
     * @param min 表示分钟的数值，介于 0 ~ 59 之间。
     */
    static setMinutes(date: Date, min: number): void {

    }

    /**
     * 用于设置月份
     * @param date 目标日期
     * @param month 一个表示月份的数值，该值介于 0（一月） ~ 11（十二月） 之间。
     */
    static setMonth(date: Date, month: number): void {

    }

    /**
     * 用于设置毫秒。
     * @param date 目标日期
     * @param sec 表示秒的数值，介于 0 ~ 59 之间。
     */
    static setSeconds(date: Date, sec: number): void {

    }

    /**
     * 用于设置年份
     * @param date 目标日期
     * @param year 示年份的四位整数。用本地时间表示。
     */
    static setYear(date: Date, year: number): void {

    }

    /**
     * 毫秒设置 Date 对象。
     * @param date 目标日期
     * @param millisec 要设置的日期和时间据 GMT 时间 1970 年 1 月 1 日午夜之间的毫秒数。这种类型的毫秒值可以传递给 Date() 构造函数，可以通过调用 Date.UTC() 和 Date.parse() 方法获得该值。以毫秒形式表示日期可以使它独立于时区。
     */
    static setTime(date: Date, millisec: number): void {

    }

    /**
     * 将date的对象转为JSON字符串
     * @param date 目标日期
     * @return 转换后的结果
     */
    static toJson(date: Date): object {
        return null;
    }

    /**
     * 等同于toJson方法,将数组转为字符串
     * @param date 目标日期
     * @return
     */
    static toString(date: Date): string {
        return '';
    }

}