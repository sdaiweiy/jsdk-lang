/***
 * 数值操作对应的工具类接口定义
 */
export default class INumber {

    /**
     * 用于检查其参数是否是无穷大。
     * @param num 要检测的数字。
     * @return 如果 number 是有限数字（或可转换为有限数字），那么返回 true。否则，如果 number 是 NaN（非数字），或者是正、负无穷大的数，则返回 false。
     */
    static isFinite(num: number): boolean {
        return isFinite(num) && !isNaN(parseFloat(num + ""));
    }

    /**
     * 用于检查其参数是否是非数字值
     * @param num 要检测的数字。
     * @return 如果 x 是特殊的非数字值 NaN（或者能被转换为这样的值），返回的值就是 true。如果 x 是其他值,则返回 false。
     */
    static isNaN(num: number): boolean {
        return this.isNumber(num) && isNaN(num);
    }

    /**
     * 判断给予的对象是否是Number类型
     * @param object 给定的对象
     * @return true:是 false:否
     */
    static isNumber(object: any): boolean {
        return Object.prototype.toString.call(object) === '[object Number]';
    }

    /***
     * 根据给定的参数,返回其中的最大值
     * @param nums 给定参数
     * @return 所有元素中的最大值,如果没有传参数,抛出异常
     */
    static max(...nums: number[]): number {
        return Math.max.apply(Math, nums);
    }

    /***
     * 根据给定的参数,返回其中的最小值
     * @param nums 给定参数
     * @return 所有元素中的最小值,如果没有传参数,抛出异常
     */
    static min(...nums: number[]): number {
        return Math.min.apply(Math, nums);
    }

    /***
     * 原生parseFloat方法
     * @param num 需要转换的数值
     * @return 转换成功,为原值,否则为NaN
     */
    static parseFloat(num: any): number {
        return parseFloat(num);
    }

    /***
     * 补充原生js的parseFloat不足,parseFloat 会出现Nan,不方便计算
     * @param num 需要转换的数值
     * @return 转换成功,为原值,否则为0.0
     */
    static parseFloat1(num: any): number {
        let value = parseFloat(num);
        return this.isNaN(value) ? 0.0 : value;
    }

    /***
     * 原生parseInt 方法
     * @param num  需要转换的数值
     * @optional
     * @param radix 表示数值是多少进制,若2/8/10
     * @return 转换成功,为原值,否则为NaN
     */
    static parseInt(num: any, radix?: number): number {
        return parseInt(num, radix ? radix : 10);
    }

    /***
     * 补充原生js的parseInt,在于parseInt 会出现Nan,不方便计算
     * @param num  需要转换的数值
     * @param radix 表示数值是多少进制,若2/8/10
     * @return 转换成功,为原值,否则为0
     */
    static parseInt1(num: any, radix?: number): number {
        let value = parseInt(num, radix);
        return this.isNaN(value) ? 0 : value;
    }

    /**
     * 生成随机整数，范围是[min, max]
     * @param min    随机整数的最小值
     * @param max    随机整数的最大值
     * @return 生成的随机整数
     */
    static randomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /**
     * 可把 Number 四舍五入为指定小数位数的数字。
     * @param num 需要转换的数值
     * @param decimal 给定小数的位数
     * @return 转换后的结果
     */
    static toFixed(num: number, decimal: number): string {
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
        let digits: any[] = s.split('');
        let pos = decimalIndex + decimal;
        let roundDigit = digits[pos + 1];
        if (roundDigit > 4) {
            //跳过小数点
            if (pos == decimalIndex) {
                --pos;
            }
            digits[pos] = Number(digits[pos] || 0) + 1;
            //循环进位
            while (digits[pos] == 10) {
                digits[pos] = 0;
                --pos;
                if (pos == decimalIndex) {
                    --pos;
                }
                digits[pos] = Number(digits[pos] || 0) + 1;
            }
        }
        //避免包含末尾的.符号
        if (decimal == 0) {
            decimal--;
        }
        return digits.slice(0, decimalIndex + decimal + 1).join('');
    }

    /**
     * 将给定的数值转义为JSON字符串
     * @param num 目标数值
     * @return 1=>'1'
     */
    static toJson(num: number): number {
        return num;
    }

    /**
     * 返回字符串
     * @param num 目标数值
     * @return
     */
    static toString(num: number): string {
        return num + "";
    }

    /***
     * 将给定的对象转为Number类型
     * @param object 给定的对象
     * @return 转换为Number后的结果
     */
    static valueOf(object: any): number {
        return Number(object);
    }

}