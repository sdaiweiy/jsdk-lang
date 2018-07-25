export default class IStringEscape {

    /**
     * 将目标字符串中可能会影响正则表达式构造的字符串进行转义。
     * @param {String} source 目标字符串
     * 给以下字符前加上“\”进行转义：.*+?^=!:${}()|[]/\
     * @return {String} 转义后的字符串
     */
    static escapeReg(source: string): string {
        return String(source).replace(new RegExp("([.*+?^=!:\x24{}()|[\\]\/\\\\])", "g"), '\\\x241');
    }

    /**
     * 对目标字符串进行html编码
     * @param {String} source 目标字符串
     * @return {String} html编码后的字符串
     */
    static escapeHtml(source: string): string {
        return String(source)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    /**
     * 对目标字符串进行html解码
     * @param {String} source 目标字符串
     * @return {String} html解码后的字符串
     */
    static unEscapeHtml(source: string): string {
        let str = String(source)
            .replace(/&quot;/g, '"')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, "&");
        //处理转义的中文和实体字符
        return str.replace(/&#([\d]+);/g, function (_0, _1) {
            return String.fromCharCode(parseInt(_1, 10));
        });
    }

    /**
     * 对目标js字符串进行编码
     * @param {String} source 目标字符串
     * @return {String} html解码后的字符串
     */
    static escapeJavaScript(source: string): string {
        return '';
    }

    /**
     * 对目标js字符串进行解码
     * @param {String} source 目标字符串
     * @return {String} html解码后的字符串
     */
    static unEscapeJavaScript(source: string): string {
        return '';
    }
}