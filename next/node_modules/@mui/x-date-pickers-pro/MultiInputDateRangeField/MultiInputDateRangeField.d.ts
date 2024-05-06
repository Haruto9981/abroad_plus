import * as React from 'react';
import { MultiInputDateRangeFieldProps } from './MultiInputDateRangeField.types';
type MultiInputDateRangeFieldComponent = (<TDate>(props: MultiInputDateRangeFieldProps<TDate> & React.RefAttributes<HTMLInputElement>) => JSX.Element) & {
    propTypes?: any;
};
declare const MultiInputDateRangeField: MultiInputDateRangeFieldComponent;
export { MultiInputDateRangeField };
