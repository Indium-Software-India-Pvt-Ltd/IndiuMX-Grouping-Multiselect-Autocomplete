/**
 * This file was generated from IndiuMXAutocompleteDropdownGrouping.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";

export type BootstrapStyleEnum = "default" | "primary" | "success" | "info" | "inverse" | "warning" | "danger";

export type IndiumxautocompletedropdowngroupingTypeEnum = "badge" | "label";

export interface IndiuMXAutocompleteDropdownGroupingContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    inputAttribute?: EditableValue<string>;
    responseAttribute: EditableValue<string>;
    grouping: boolean;
    disableDefaultSelect: boolean;
    selectionLimit: number;
    placeholder: string;
    hidePlaceHolder: boolean;
    onSelect?: ActionValue;
    onRemove?: ActionValue;
    bootstrapStyle: BootstrapStyleEnum;
    indiumxautocompletedropdowngroupingType: IndiumxautocompletedropdowngroupingTypeEnum;
}

export interface IndiuMXAutocompleteDropdownGroupingPreviewProps {
    class: string;
    style: string;
    inputAttribute: string;
    responseAttribute: string;
    grouping: boolean;
    disableDefaultSelect: boolean;
    selectionLimit: number | null;
    placeholder: string;
    hidePlaceHolder: boolean;
    onSelect: {} | null;
    onRemove: {} | null;
    bootstrapStyle: BootstrapStyleEnum;
    indiumxautocompletedropdowngroupingType: IndiumxautocompletedropdowngroupingTypeEnum;
}
