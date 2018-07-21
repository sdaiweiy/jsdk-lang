export default class INumber {
    static isFinite(num: number): boolean;
    static isNaN(num: number): boolean;
    static isNumber(object: any): boolean;
    static max(...nums: number[]): number;
    static min(...nums: number[]): number;
    static parseFloat(num: any): number;
    static parseFloat1(num: any): number;
    static parseInt(num: any, radix?: number): number;
    static parseInt1(num: any, radix?: number): number;
    static randomInt(min: number, max: number): number;
    static toFixed(num: number, decimal: number): string;
    static toJson(num: number): number;
    static toString(num: number): string;
    static valueOf(object: any): number;
}
