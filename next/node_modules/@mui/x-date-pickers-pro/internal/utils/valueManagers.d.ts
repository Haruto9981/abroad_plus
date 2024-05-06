import { PickerValueManager, FieldValueManager } from '@mui/x-date-pickers/internals';
import { DateRange } from '../models/range';
import type { DateRangeValidationError } from '../hooks/validation/useDateRangeValidation';
import type { TimeRangeValidationError } from '../hooks/validation/useTimeRangeValidation';
import type { DateTimeRangeValidationError } from '../hooks/validation/useDateTimeRangeValidation';
import { RangeFieldSection } from '../models/fields';
export type RangePickerValueManager<TValue = [any, any], TDate = any, TError extends DateRangeValidationError | TimeRangeValidationError | DateTimeRangeValidationError = any> = PickerValueManager<TValue, TDate, TError>;
export declare const rangeValueManager: RangePickerValueManager;
export declare const rangeFieldValueManager: FieldValueManager<DateRange<any>, any, RangeFieldSection, DateRangeValidationError | TimeRangeValidationError | DateTimeRangeValidationError>;
