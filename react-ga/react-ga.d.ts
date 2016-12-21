declare namespace __reactGA {
    export interface EventArgs {
        category: string;
        action: string;
        label?: string;
        value?: number;
        nonInteraction?: boolean;
    }

    export interface InitializeOptions {
        debug?: boolean;
        gaOptions?: gaOptions;
    }

    export interface gaOptions {
        userId?: number;
        cookieDomain?: string;
    }

    export function initialize(trackingCode: string, options?: InitializeOptions): void;
    export function pageview(path: string): void;
    export function modalview(name: string): void;
    export function event(args: EventArgs): void;
}

declare module 'react-ga' {
    export = __reactGA;
}
