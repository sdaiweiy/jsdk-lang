export default class IArray {
    static add<T>(array: T[], item: T, index?: number): void;
    static addAll<T>(array: T[], ...source: T[][]): T[];
    static clear<T>(array: T[]): void;
    static clone<T>(array: T[]): T[];
    static contains<T>(array: T[], item: T): boolean;
    static each<T>(array: T[], iterator: (index: number, item: T, array: T[]) => (boolean | void)): void;
    static filter<T>(array: T[], fn: (key: any, value: any, array: T[]) => (boolean)): T[];
    static indexOutOfBounds<T>(array: T[], index: number): boolean;
    static isArray(object: any): boolean;
    static isNullOrEmpty<T>(array: T[]): boolean;
    static isNotNullOrEmpty<T>(array: T[]): boolean;
    static indexOf<T>(array: T[], item: T, index?: number): number;
    static join<T>(array: T[], separator?: string): string;
    static lastIndexOf<T>(array: T[], item: T): number;
    static remove<T>(array: T[], index: number): T;
    static removeByValue<T>(array: T[], item: T): T;
    static removeRange<T>(array: T[], startIndex: number, endIndex: number): T[];
    static reverse<T>(array: T[]): T[];
    static sort<T>(array: T[], fn?: (a: T, b: T) => number): T[];
    static subArray<T>(array: T[], startIndex: number, endIndex?: number): T[];
    static toJson<T>(array: T[]): string;
    static toString<T>(array: T[]): string;
}
