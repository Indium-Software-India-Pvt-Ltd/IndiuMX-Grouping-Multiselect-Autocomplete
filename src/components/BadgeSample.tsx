import { Component, ReactNode, createElement } from "react";
import classNames from "classnames";
import Multiselect from "multiselect-react-dropdown";
export interface BadgeSampleProps {
    type: "badge" | "label";
    defaultValue?: any;
    className?: string;
    style?: object;
    value?: any;
    bootstrapStyle?: BootstrapStyle;
    clickable?: boolean;
    onClickAction?: any;
    getRef?: (node: HTMLElement) => void;
    disablePreSelectedValues: boolean;
    grouping: boolean;
    limit: Number;
    placeholder: string;
    onRemoveAction?: any;
    hidePlaceHolder: boolean;
    responseAttribute: any;
}

export type BootstrapStyle = "default" | "info" | "inverse" | "primary" | "danger" | "success" | "warning";

export class BadgeSample extends Component<BadgeSampleProps> {
    public selectedValue: any = [];
    public objectArray: any = [];
    public inputValue: any = [];
    public newCheck: any = [];
    public SelectedValueObj: { [title: string]: any } = {};
    public dataSources: any = [];

    onSelect = (eve: any) => {
        this.SelectedValueObj = eve.map((element: any) => ({
            title: element.title,
            cat: element.cat,
            defaultSelect: element.defaultSelect
        }));
        if (this.SelectedValueObj) {
            this.props.responseAttribute.setValue(JSON.stringify(this.SelectedValueObj));
            if (this.props.onClickAction && this.props.onClickAction.canExecute) {
                this.props.onClickAction.execute();
            }
        }
    };
    onRemove = (eve: any) => {
        this.SelectedValueObj = eve.map((element: any) => ({
            title: element.title,
            cat: element.cat,
            defaultSelect: element.defaultSelect
        }));
        if (this.SelectedValueObj) {
            this.props.responseAttribute.setValue(JSON.stringify(this.SelectedValueObj));
            if (this.props.onRemoveAction && this.props.onRemoveAction.canExecute) {
                this.props.onRemoveAction.execute();
            }
        }
    };

    render(): ReactNode {
        if (this.props.value.value) {
            this.inputValue = JSON.parse(this.props.value.value);
            this.newCheck = this.inputValue;
            if (this.newCheck) {
                this.newCheck.map((element: any) => {
                    if (element.defaultSelect) {
                        this.selectedValue.push(element);
                    }
                });
            }
        }

        
        console.log(this.selectedValue)

        return (
            <Multiselect
                options={this.newCheck}
                selectedValues={this.selectedValue}
                groupBy={this.props.grouping ? "cat" : ""}
                displayValue="title"
                disablePreSelectedValues={this.props.disablePreSelectedValues}
                selectionLimit={this.props.limit}
                placeholder={this.props.placeholder}
                emptyRecordMsg="No Records Available"
                avoidHighlightFirstOption={true}
                showCheckbox={true}
                onSelect={(eve: any) => this.onSelect(eve)}
                onRemove={(eve: any) => this.onRemove(eve)}
                style={this.props.style}
                className={classNames(
                    "widget-indiumxautocompletedropdowngrouping",
                    this.props.type,
                    this.props.className,
                    {
                        [`label-${this.props.bootstrapStyle}`]: !!this.props.bootstrapStyle,
                        "widget-indiumxautocompletedropdowngrouping-clickable": this.props.clickable
                    }
                )}
            ></Multiselect>
        );
    }
}
