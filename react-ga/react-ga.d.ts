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
        gaOptions?: GaOptions;
    }

    //These are for initialize options
    export interface GaOptions {
        [i: string]: string;
    }

    //These are for set options
    export interface FieldsObject {
        [i: string]: string;
    }

    export function initialize(trackingCode: string, options?: InitializeOptions): void;
    export function pageview(path: string): void;
    export function modalview(name: string): void;
    export function event(args: EventArgs): void;
    export function set(fieldsObject: FieldsObject)
}

declare module 'react-ga' {
    export = __reactGA;
}
