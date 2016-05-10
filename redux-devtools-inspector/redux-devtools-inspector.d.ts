declare module "redux-devtools-inspector" {
    import * as React from "react"

    interface IInspectorProps {
        theme?: string
        supportImmutable?: boolean
    }

    export default class Inspector extends React.Component<IInspectorProps, any> {}
}