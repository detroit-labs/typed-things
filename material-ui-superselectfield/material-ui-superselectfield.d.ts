declare module "material-ui-superselectfield" {
    import * as React from "react"

    interface IMaterialUISuperSelectFieldProps {
        name: string;
        value: object[] | object | null;
        multiple?: boolean;
        key?: string;
        onChange?: (...args: any[]) => void;
        selectionsRenderer?: (...args: any[]) => void;
        checkPosition?: string;
        hintText?: string;
        nb2show?: number;
        elementHeight?: number | number[];
        style?: Object;
        innerDivStyle?: Object;
        selectedMenuItemStyle?: Object;
        hoverColor?: string;
        floatingLabel?: any;
        hintTextAutocomplete?: string;
        noMatchFound?: string;
        anchorOrigin?: { vertical: string, horizontal: string };
        canAutoPosition?: boolean;
        disabled?: boolean;
        onAutoCompleteTyping?: (...args: any[]) => void;
        children?: any;
        showAutocompleteThreshold?: number;
        autocompleteFilter?: (...args: any[]) => void;
        useLayerForClickAway?: boolean;
        menuStyle?: Object;
        menuGroupStyle?: Object;
        menuFooterStyle?: Object;
        menuCloseButton?: any;
        checkedIcon?: any;
        unCheckedIcon?: any;
        floatingLabelStyle?: Object;
        floatingLabelFocusStyle?: Object;
        underlineStyle?: Object;
        underlineFocusStyle?: Object;
        autocompleteUnderlineStyle?: Object;
        autocompleteUnderlineFocusStyle?: Object;
        keepSearchOnSelect?: boolean;
    }

    export default class SuperSelectField extends React.Component<IMaterialUISuperSelectFieldProps, any> {}
}
