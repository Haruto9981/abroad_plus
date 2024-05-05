import * as React from 'react';
import { MuiPickersAdapter } from '@mui/x-date-pickers/internals';
import { DateRangePosition } from './DateRangeCalendar.types';
import { DateRange } from '../internal/models';
interface UseDragRangeParams<TDate> {
    disableDragEditing?: boolean;
    utils: MuiPickersAdapter<TDate>;
    setRangeDragDay: (value: TDate | null) => void;
    setIsDragging: (value: boolean) => void;
    isDragging: boolean;
    onDatePositionChange: (position: DateRangePosition) => void;
    onDrop: (newDate: TDate) => void;
    dateRange: DateRange<TDate>;
}
interface UseDragRangeEvents {
    onDragStart?: React.DragEventHandler<HTMLButtonElement>;
    onDragEnter?: React.DragEventHandler<HTMLButtonElement>;
    onDragLeave?: React.DragEventHandler<HTMLButtonElement>;
    onDragOver?: React.DragEventHandler<HTMLButtonElement>;
    onDragEnd?: React.DragEventHandler<HTMLButtonElement>;
    onDrop?: React.DragEventHandler<HTMLButtonElement>;
    onTouchStart?: React.TouchEventHandler<HTMLButtonElement>;
    onTouchMove?: React.TouchEventHandler<HTMLButtonElement>;
    onTouchEnd?: React.TouchEventHandler<HTMLButtonElement>;
}
interface UseDragRangeResponse<TDate> extends UseDragRangeEvents {
    isDragging: boolean;
    rangeDragDay: TDate | null;
    draggingDatePosition: DateRangePosition | null;
}
export declare const useDragRange: <TDate>({ disableDragEditing, utils, onDatePositionChange, onDrop, dateRange, }: Omit<UseDragRangeParams<TDate>, "isDragging" | "setRangeDragDay" | "setIsDragging">) => UseDragRangeResponse<TDate>;
export {};
