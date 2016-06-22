// Type definitions for Numbro.js
// Project: https://github.com/foretagsplatsen/numbro
// Definitions by: Dan Poggi <https://github.com/dpoggi>
// Definitions: https://github.com/detroit-labs/typed-things

declare function numbro(value?: any): numbro.Numbro;

declare namespace numbro {
    export var version: string;
    export function isNumbro(value?: any): boolean;

    export function setCulture(newCulture: string, fallbackCulture?: NumbroCulture): void;
    // TODO: Find a way to represent that if called with parameters, numbro.culture returns numbro.
    export function culture(code?: string, values?: NumbroCulture): string;
    export function cultureData(code?: string): NumbroCulture;
    export function cultures(): NumbroCulture[];

    export function zeroFormat(format: string): void;
    export function defaultFormat(format: string): void;
    export function defaultCurrencyFormat(format: string): void;

    export function validate(val: any, culture?: string);
    export function loadCulturesInNode(): void;

    interface Numbro {
        clone(): Numbro;

        format(inputString?: string, roundingFunction?: (x: number) => number): string;
        formatCurrency(inputString?: string, roundingFunction?: (x: number) => number): string;
        unformat(inputString: string): number;

        binaryByteUnits(): string;
        byteUnits(): string;
        decimalByteUnits(): string;

        value(): number;
        valueOf(): number;

        set(value: any): Numbro;
        add(value: any): Numbro;
        subtract(value: any): Numbro;
        multiply(value: any): Numbro;
        divide(value: any): Numbro;
        difference(value: any): number;
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
            position: "prefix" | "postfix";
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
}

export = numbro;
