declare module "material-ui-superselectfield" {
    import * as React from "react"

    interface IMaterialUISuperSelectFieldProps {
        multiple: boolean;
        key: string;
        name: string;
        onChange: (selectedValues: any[], name: string) => void;
        value: object[];
        selectionsRenderer: (values: any[]) => void;
        checkPosition: string;
        hintText: string;
        nb2show: number;
        hoverColor: string;
        elementHeight: number;
        style: { marginBottom: number };
        innerDivStyle: { padding: string, whiteSpace: string };
        selectedMenuItemStyle: { color: string };
    }

    export default class SuperSelectField extends React.Component<IMaterialUISuperSelectFieldProps, any> {}
}
