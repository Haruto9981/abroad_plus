import * as React from 'react';
import { MultiInputTimeRangeFieldProps } from './MultiInputTimeRangeField.types';
type MultiInputTimeRangeFieldComponent = (<TDate>(props: MultiInputTimeRangeFieldProps<TDate> & React.RefAttributes<HTMLInputElement>) => JSX.Element) & {
    propTypes?: any;
};
declare const MultiInputTimeRangeField: MultiInputTimeRangeFieldComponent;
export { MultiInputTimeRangeField };
