declare module "redux-recycle" {
    import * as Redux from "redux";

    function recycleState<State>(reducer: Redux.Reducer, actions: string[], defaultState?: State);

    export default recycleState;
}