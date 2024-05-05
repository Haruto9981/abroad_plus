import { RangeFieldSection } from '../models/fields';
export declare const splitDateRangeSections: (sections: RangeFieldSection[]) => {
    startDate: RangeFieldSection[];
    endDate: RangeFieldSection[];
};
export declare const removeLastSeparator: (dateSections: RangeFieldSection[]) => (RangeFieldSection | {
    separator: null;
    dateName: "end" | "start";
    value: string;
    format: string;
    placeholder: string;
    type: import("@mui/x-date-pickers").FieldSectionType;
    contentType: "letter" | "digit";
    hasLeadingZeros: boolean;
    modified: boolean;
    start: number;
    end: number;
    startInInput: number;
    endInInput: number;
    startSeparator: string;
    endSeparator: string;
})[];
