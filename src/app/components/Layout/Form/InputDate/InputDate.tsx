import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function InputDate(props: any) {
  const { setDate, label } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['DatePicker', 'MobileDatePicker', 'DesktopDatePicker', 'StaticDatePicker']}
      >
        <DemoItem label={label}>
          <DesktopDatePicker
            format="DD-MM-YYYY"
            onChange={(newValue: any) => {
              const isValidDate: any = dayjs(newValue).isValid();
              const formattedDate = isValidDate ? dayjs(isValidDate).format('DD-MM-YYYY') : '';
              setDate(dayjs(formattedDate).format('YYYY-MM-DD'));
            }}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
