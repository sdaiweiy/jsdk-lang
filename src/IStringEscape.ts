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
        let s = "";
        if (source.length == 0)
            return "";

        s = source.replace(/&/g, "&amp;");
        s = s.replace(/</g, "&lt;");
        s = s.replace(/>/g, "&gt;");
        s = s.replace(/ /g, "&nbsp;");
        s = s.replace(/\'/g, "&#39;");
        s = s.replace(/\"/g, "&quot;");
        return s;
    }

    /**
     * 对目标字符串进行html解码
     * @param {String} source 目标字符串
     * @return {String} html解码后的字符串
     */
    static unEscapeHtml(source: string): string {
        let s = "";
        if (source.length == 0)
            return "";

        s = source.replace(/&amp;/g, "&");
        s = s.replace(/&lt;/g, "<");
        s = s.replace(/&gt;/g, ">");
        s = s.replace(/&nbsp;/g, " ");
        s = s.replace(/&#39;/g, "\'");
        s = s.replace(/&quot;/g, "\"");
        return s;
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