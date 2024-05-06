import * as React from 'react';
import { MultiInputDateTimeRangeFieldProps } from './MultiInputDateTimeRangeField.types';
type MultiInputDateTimeRangeFieldComponent = (<TDate>(props: MultiInputDateTimeRangeFieldProps<TDate> & React.RefAttributes<HTMLInputElement>) => JSX.Element) & {
    propTypes?: any;
};
declare const MultiInputDateTimeRangeField: MultiInputDateTimeRangeFieldComponent;
export { MultiInputDateTimeRangeField };
