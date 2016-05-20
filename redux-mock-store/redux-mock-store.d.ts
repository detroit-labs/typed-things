// Type definitions for redux-mock-store v1.0.2
// Project: https://github.com/arnaudbenard/redux-mock-store
// Definitions by: Dan Poggi <https://github.com/dpoggi>
// Definitions: https://github.com/detroit-labs/typed-things
//
///<reference path="../redux/redux.d.ts" />

declare module "redux-mock-store" {
    import * as Redux from "redux";

    interface MockStore<T> extends Redux.Store {
        getState(): T;
        getActions(): Array<{}>;
        clearActions(): void;
    }

    function configureStore<T>(middlewares?: Redux.Middleware[]): (getState?: T | (() => T)) => MockStore<T>;
    export default configureStore;
}
