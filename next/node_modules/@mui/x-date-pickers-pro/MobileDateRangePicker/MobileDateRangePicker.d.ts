import * as React from 'react';
import { MobileDateRangePickerProps } from './MobileDateRangePicker.types';
type MobileDateRangePickerComponent = (<TDate>(props: MobileDateRangePickerProps<TDate> & React.RefAttributes<HTMLDivElement>) => JSX.Element) & {
    propTypes?: any;
};
declare const MobileDateRangePicker: MobileDateRangePickerComponent;
export { MobileDateRangePicker };
