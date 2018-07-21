export default class IStringEscape {
    static escapeReg(source: string): string;
    static escapeHtml(source: string): string;
    static unEscapeHtml(source: string): string;
    static escapeJavaScript(source: string): string;
    static unEscapeJavaScript(source: string): string;
}
