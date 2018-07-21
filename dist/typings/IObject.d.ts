export default class IObject {
    static isDefined(object: any): boolean;
    static isUndefined(object: any): boolean;
    static isObject(object: any): boolean;
    static isPlain(object: any): boolean;
    static equals(source: any, target: any): boolean;
    static extend(target: object, ...source: object[]): object;
    static deepExtend(target: any, ...source: any[]): any;
    static clone<T>(object: T): T;
    static keys(object: object): string[];
    static values(object: object): any[];
    static hasKey(object: object, key: string): boolean;
    static each(object: object, fn: (key: any, value: any, object: any) => (boolean | void)): void;
    static toJson(object: any): any;
    static parseJson(data: string): object;
}
