import IString from "./IString";
import INumber from "./INumber";

/***
 * 时间操作对应的工具类接口定义
 */
export default class IDate {

    static YEAR = 0;
    static MONTH = 1;
    static DAY = 2;
    static HOUR = 3;
    static MINUTE = 4;
    static SECOND = 5;
    static MILLISECOND = 6;

    /***
     * 为给定的日期和增加类型增加相关数值,注意该方法会修改传递进来的date的值
     * @param date 目标日期
     * @param value 增加数值
     * @param addType: 增加类型 IDate.DAY(日期) | IDate.HOUR(小时) | IDate.MINUTE(分钟) | IDate.SECOND(秒) | IDate.MILLISECOND(毫秒)
     */
    static add(date: Date, value: number, addType: number): void {
        let callFun = {0: "Year", 1: "Month", 2: "Day", 3: "Hours", 4: "Minutes", 5: "Seconds", 6: "Milliseconds"};
        let funSuffixName = callFun[addType];
        if (!funSuffixName) {
            throw new RangeError("addType value must between 0 and 6");
        }
        IDate["set" + funSuffixName](date, IDate["get" + funSuffixName](date) + value);
    }

    /**
     * 判断给定时间是否在某个时间之后
     * @param date 目标日期
     * @param when 比较的日期
     * @return true:date > when   false:date < when
     */
    static after(date: Date, when: Date): boolean {
        return this.compareTo(date, when) > 0;
    }

    /**
     * 判断给定时间是否在某个时间之前
     * @param date 目标日期
     * @param when 比较的日期
     * @return true:date < when   false:date > when
     */
    static before(date: Date, when: Date): boolean {
        return this.compareTo(date, when) < 0;
    }

    /**
     * 判断给定的时间是否在指定的start 和 end 时间之间
     * @param date 目标日期
     * @param start 比较开始日期
     * @param end 比较结束日期
     * @return true:是 false:否
     */
    static between(date: Date, start: Date, end: Date): boolean {
        return this.after(date, start) && this.before(date, end);
    }

    /**
     * 比较两个日期的顺序
     * @param date1 目标日期
     * @param date2 比较的日期
     * @return 如果date1等于此date2，则返回值 0；如果date1在date2参数之前，则返回小于 0 的值；如果date1在date2参数之后，则返回大于 0 的值。
     */
    static compareTo(date1: Date, date2: Date): number {
        return date1.getTime() - date2.getTime();
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
     *          SSS:毫秒的表示
     *          yyyy: 带 0 补齐的四位年表示<br>
     *          yy: 带 0 补齐的两位年表示<br>
     *          MM: 带 0 补齐的两位月表示<br>
     *          M: 不带 0 补齐的月表示<br>
     *          dd: 带 0 补齐的两位日表示<br>
     *          d: 不带 0 补齐的日表示
     * @return 将格式化的字符串结果
     */
    static format(date: Date, pattern: string): string {
        if ('string' != typeof pattern) {
            return date.toString();
        }

        function replacer(patternPart, result) {
            pattern = pattern.replace(patternPart, result);
        }

        let year = date.getFullYear(),
            month = date.getMonth() + 1,
            date2 = date.getDate(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            milliseconds = date.getMilliseconds();

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
        replacer(/SSS/g, IString.padLeft(milliseconds + "", 3, "0"));

        return pattern;
    }


    /**
     * 根据给定的配置将一个日期格式化成友好格式，比如，1分钟以内的返回“刚刚”，1小时内返回"一小时前"等
     * @param {Object} date 需要格式化的时间
     * @param {Object} friendlyPattern 给定的格式 注意：以key,value的形式从<b>小到大</b>排列，如果都不满足条件则value为-1
     *                  默认值为{"刚刚": 60,一小时前": 3600,"HH:mm": 86400,"yyyy年MM月dd日": -1}
     *                  说明:1分钟以内，返回刚刚。1小时内,返回一小时前,一天内返回HH:mm格式，除以上情况(-1)，返回yyyy年MM月dd日格式。
     * @return {String} 按照给定的格式返回友好的格式
     */
    static formatToFriendly(date: Date, friendlyPattern?: { [key: string]: number }): string {
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

    /**
     * 返回月份的某一天
     * @param date 目标日期
     * @return  所指的月份中的某一天，使用本地时间。返回值是 1 ~ 31 之间的一个整数。
     */
    static getDay(date: Date): number {
        return date.getDate();
    }

    /**
     * 从 Date 对象返回一周中的某一天(0 ~ 6)。  其中0（周日） 到 6（周六）
     * @param date 目标日期
     * @return
     */
    static getDayOfWeek(date: Date): number {
        return date.getDay();
    }

    /**
     * 获取今天所属的这周是这个月的第几周(0 ~ 5)。
     * @param date 目标日期
     * @return
     */
    static getDayOfWeekInMonth(date: Date): number {
        let day = this.getDayOfWeek(date), d = date.getDate();
        return Math.ceil((d + 6 - day) / 7);
    }

    /**
     * 获取今天是今年的第几天(1~366)
     * @param date 目标日期
     * @return
     */
    static getDayOfYear(date: Date): number {
        let firstDay = new Date(date.getFullYear(), 0, 1);
        return Math.ceil((date.getTime() - firstDay.getTime()) / (1000 * 60 * 60 * 24));
    }

    /**
     * 返回时间的小时字段。
     * @param date 目标日期
     * @return 以本地时间显示。返回值是 0 （午夜） 到 23 （晚上 11 点）之间的一个整数。
     */
    static getHours(date: Date): number {
        return date.getHours();
    }

    /**
     * 返回时间的毫秒。
     * @param date 目标日期
     * @return 毫秒字段，以本地时间显示。返回值是 0 ~ 999 之间的一个整数。
     */
    static getMilliseconds(date: Date): number {
        return date.getMilliseconds();
    }

    /**
     * 返回时间的分钟字段。
     * @param date 目标日期
     * @return 分钟字段，以本地时间显示。返回值是 0 ~ 59 之间的一个整数。
     */
    static getMinutes(date: Date): number {
        return date.getMinutes();
    }

    /**
     * 返回表示月份的数字。
     * @param date 目标日期
     * @return 月份字段，使用本地时间。返回值是 0（一月） 到 11（十二月） 之间的一个整数。
     */
    static getMonth(date: Date): number {
        return date.getMonth();
    }

    /**
     * 获取日期所对应的季度信息
     * @method getQuarter
     * @static
     * @param date 目标日期
     * @return {Number} 季度(1 ~ 4)
     */
    static getQuarter(date): number {
        return Math.floor((date.getMonth() + 3) / 3);
    }

    /**
     * 返回时间的秒。
     * @param date 目标日期
     * @return 秒字段，以本地时间显示。返回值是 0 ~ 59 之间的一个整数。
     */
    static getSeconds(date: Date): number {
        return date.getSeconds();
    }

    /**
     * 返回距 1970 年 1 月 1 日之间的毫秒数。
     * @param date 目标日期
     * @return 指定的日期和时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数。
     */
    static getTime(date: Date): number {
        return date.getTime();
    }

    /**
     * 获得一个月的周数
     * @param date 目标日期
     * @return 星期数
     */
    static getWeekOfMonth(date: Date): number {
        let year = date.getFullYear(), month = date.getMonth(),
            first = new Date(year, month, 1).getDate(),
            last = 32 - new Date(year, month, 32).getDate();
        return Math.ceil((first + last) / 7);
    }

    /**
     * 获取一年中有多少个星期,1号后第一个星期日才算第一周计算
     * @param date 目标日期
     * @return 星期数
     */
    static getWeekOfYear(date: Date): number {
        let year = date.getFullYear(), beginDay = new Date(year, 0, 1).getDay(),
            days = this.isLeapYear(year) ? 366 : 365;
        return Math.ceil((days - beginDay) / 7.0);
    }

    /**
     * 返回一个表示年份的 4 位数字。
     * @param date 目标日期
     * @return 本地时间表示时返回的年份。返回值是一个四位数，表示包括世纪值在内的完整年份，而不是两位数的缩写形式。
     */
    static getYear(date: Date): number {
        return date.getFullYear();
    }

    /**
     * 判断给予的对象是否是Date类型
     * @param date 目标日期
     * @return true:包含  false:不包含
     */
    static isDate(date: any): boolean {
        return Object.prototype.toString.call(date) === '[object Date]';
    }

    /**
     * 判断给定的日期是否是闰年
     * @param value 目标日期/年份
     * @return true:闰年 false:非闰年
     */
    static isLeapYear(value: number | Date): boolean {
        if (this.isDate(value)) {
            value = this.getYear(<Date>value);
        }
        if (INumber.isNumber(value)) {
            return <number>value % 4 == 0 && (<number>value % 100 != 0 || <number>value % 400 == 0);
        }
        return false;
    }

    /**
     * 比较startTime和EndTime之间的差,根据给定的不同的diffType返回不同的值
     * @example
     *  let d1 = new Date(2015, 0, 3, 12, 34, 12, 128);
     *  let d2 = new Date(2015, 0, 3, 13, 35, 13, 128);
     *  IDate.minus(d2, d1, IDate.HOUR)  =>  -1
     * @param startTime 开始时间
     * @param endTime 结束时间
     * @param diffType 比较方式 IDate.DAY(日期) | IDate.HOUR(小时) | IDate.MINUTE(分钟) | IDate.SECOND(秒) | IDate.MILLISECOND(毫秒)
     * @return 根据给定的diffType相减的差值
     */
    static minus(startTime: Date, endTime: Date, diffType: number): number {
        let diff = endTime.getTime() - startTime.getTime();
        let divisions = [24 * 3600 * 1000, 3600 * 1000, 60000, 1000, 1];

        if (diffType < 2 || diffType > 6) {
            throw new RangeError("diffType value must between 2 and 6");
        }
        return INumber.parseInt(diff / divisions[diffType - 2]);
    }

    /***
     * 1970 年 1 月 1日午夜与当前日期和时间之间的毫秒数。
     * @return
     */
    static now(): number {
        return new Date().getTime();
    }

    /**
     * 解析字符串的文本，生成 Date
     * @example
     * IDate.parse('2016-08-11'); // Thu Aug 11 2016 00:00:00 GMT+0800
     * IDate.parse('2016-08-11 13:28:43','yyyy-MM-dd HH:mm:ss') // Thu Aug 11 2016 13:28:43 GMT+0800
     * @param str 日期字符串
     * @param pattern 参考format的说明
     * @return 字符串对应的日期
     */
    static parse(str: string, pattern: string = "yyyy-MM-dd"): Date {
        let obj = {y: 0, M: 1, d: 0, H: 0, h: 0, m: 0, s: 0, S: 0};
        pattern.replace(/([^yMdHmsS]*?)(([yMdHmsS])\3*)([^yMdHmsS]*?)/g, function (m, $1, $2, $3, $4, idx, old) {
            str = str.replace(new RegExp($1 + '(\\d{1,' + $2.length + '})' + $4), function (_m, _$1) {
                obj[$3] = parseInt(_$1);
                return '';
            });
            return '';
        });

        obj.M--; // 月份是从0开始的，所以要减去1
        let date = new Date(obj.y, obj.M, obj.d, obj.H, obj.m, obj.s);
        if (obj.S !== 0) date.setMilliseconds(obj.S); // 如果设置了毫秒
        return date;
    }


    /**
     * 用于设置一个月的某一天
     * @param date 目标日期
     * @param day 表示一个月中的一天的一个数值（1 ~ 31）。
     */
    static setDay(date: Date, day: number): void {
        date.setDate(day);
    }

    /**
     * 设置指定的时间的小时字段。
     * @param date 目标日期
     * @param hour 表示小时的数值，介于 0（午夜） ~ 23（晚上11点） 之间
     */
    static setHours(date: Date, hour: number): void {
        date.setHours(hour);
    }

    /**
     * 毫秒设置 Date 对象。
     * @param date 目标日期
     * @param millisec 表示毫秒的数值，介于 0 ~ 999之间。
     */
    static setMilliseconds(date: Date, millisec: number): void {
        date.setMilliseconds(millisec);
    }

    /**
     * 用于设置分钟
     * @param date 目标日期
     * @param min 表示分钟的数值，介于 0 ~ 59 之间。
     */
    static setMinutes(date: Date, min: number): void {
        date.setMinutes(min);
    }

    /**
     * 用于设置月份
     * @param date 目标日期
     * @param month 一个表示月份的数值，该值介于 0（一月） ~ 11（十二月） 之间。
     */
    static setMonth(date: Date, month: number): void {
        date.setMonth(month);
    }

    /**
     * 用于设置毫秒。
     * @param date 目标日期
     * @param sec 表示秒的数值，介于 0 ~ 59 之间。
     */
    static setSeconds(date: Date, sec: number): void {
        date.setSeconds(sec);
    }

    /**
     * 用于设置年份
     * @param date 目标日期
     * @param year 示年份的四位整数。用本地时间表示。
     */
    static setYear(date: Date, year: number): void {
        date.setFullYear(year);
    }

    /**
     * 毫秒设置 Date 对象。
     * @param date 目标日期
     * @param millisec 要设置的日期和时间据 GMT 时间 1970 年 1 月 1 日午夜之间的毫秒数。这种类型的毫秒值可以传递给 Date() 构造函数，可以通过调用 Date.UTC() 和 Date.parse() 方法获得该值。以毫秒形式表示日期可以使它独立于时区。
     */
    static setTime(date: Date, millisec: number): void {
        date.setTime(millisec);
    }

    /**
     * 将date的对象转为JSON字符串
     * @param date 目标日期
     * @return 转换后的结果
     */
    static toJson(date: Date): string {
        let result = date.getFullYear() +
            "-" + IString.padLeft(date.getMonth() + 1 + "", 2, "0") +
            "-" + IString.padLeft(date.getDate() + "", 2, "0") +
            "T" + IString.padLeft(date.getHours() + "", 2, "0") +
            ":" + IString.padLeft(date.getMinutes() + "", 2, "0") +
            ":" + IString.padLeft(date.getSeconds() + "", 2, "0") +
            "." + IString.padLeft(date.getMilliseconds() + "", 3, "0") + "Z";

        //date类型在Ie6/7下的写法不同
        if (isLessIE7) {
            result = '"' + result + '"';
        }
        return result;
    }

    /**
     * 等同于原生toString方法,将数组转为字符串
     * @param date 目标日期
     * @return
     */
    static toString(date: Date): string {
        return Date.prototype.toString.call(date);
    }

}

//保证Lang包可以单独打成一个包,浏览器版本的判定单独写了一个简单的版本
let isLessIE7 = false;
try {
    let version = navigator.appVersion.split(";")[1].replace(/[ ]/g, "");
    isLessIE7 = (navigator.appName == "Microsoft Internet Explorer" && (version == "MSIE6.0" || version == "MSIE7.0"));
} catch (e) {
    isLessIE7 = false;
}
