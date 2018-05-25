export default class IStringEscape {

    /**
     * 将目标字符串中可能会影响正则表达式构造的字符串进行转义。
     * @param {String} source 目标字符串
     * 给以下字符前加上“\”进行转义：.*+?^=!:${}()|[]/\
     * @return {String} 转义后的字符串
     */
    escapeReg(source: string): string {
        return '';
    }

    /**
     * 对目标字符串进行html编码
     * @param {String} source 目标字符串
     * @return {String} html编码后的字符串
     */
    escapeHtml(source: string): string {
        return '';
    }

    /**
     * 对目标字符串进行html解码
     * @param {String} source 目标字符串
     * @return {String} html解码后的字符串
     */
    unEscapeHtml(source: string): string {
        return '';
    }

    /**
     * 对目标js字符串进行编码
     * @param {String} source 目标字符串
     * @return {String} html解码后的字符串
     */
    escapeJavaScript(source: string): string {
        return '';
    }

    /**
     * 对目标js字符串进行解码
     * @param {String} source 目标字符串
     * @return {String} html解码后的字符串
     */
    unEscapeJavaScript(source: string): string {
        return '';
    }
}