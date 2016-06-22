// Type definitions for Numbro.js
// For Node.js, with the TypeScript compiler targeting ES5
// Project: https://github.com/foretagsplatsen/numbro
// Definitions by: Dan Poggi <https://github.com/dpoggi>
// Definitions: https://github.com/detroit-labs/typed-things

interface NumbroStatic {
    (value?: any): Numbro;

    version: string;
    isNumbro(value: any): value is Numbro;

    setCulture(newCultureCode: string, fallbackCultureCode?: string): void;
    culture(): string;
    culture(cultureCode: string): void;
    culture(cultureCode: string, newCulture: NumbroCulture): NumbroStatic;
    cultureData(cultureCode?: string): NumbroCulture;
    cultures(): Array<NumbroCulture>;

    zeroFormat(newFormat: string): void;
    defaultFormat(newFormat: string): void;
    defaultCurrencyFormat(newFormat: string): void;

    validate(value: string | any, cultureCode?: string): boolean;

    loadCulturesInNode(): void;
}

interface Numbro {
    clone(): Numbro;

    format(formatString?: string, roundingFunction?: RoundingFunction): string;
    formatCurrency(formatString?: string, roundingFunction?: RoundingFunction): string;
    unformat(formattedNumber: string): number;

    binaryByteUnits(): string;
    byteUnits(): string;
    decimalByteUnits(): string;

    value(): number;
    valueOf(): number;

    set(value: number | any): this;
    add(value: number): this;
    subtract(value: number): this;
    multiply(value: number): this;
    divide(value: number): this;

    difference(value: number): number;
}

interface NumbroCulture {
    langLocaleCode: string;
    cultureCode: string;
    delimiters: {
        thousands: string;
        decimal: string;
    };
    abbreviations: {
        thousand: string;
        million: string;
        billion: string;
        trillion: string;
    };
    ordinal(num: number): string;
    currency: {
        symbol: string;
        position: string;
    };
    defaults: {
        currencyFormat: string;
    };
    formats: {
        fourDigits: string;
        fullWithTwoDecimals: string;
        fullWithTwoDecimalsNoCurrency: string;
        fullWithNoDecimals: string;
    };
}

interface RoundingFunction {
    (x: number): number;
}

declare const numbro: NumbroStatic;
export = numbro;
