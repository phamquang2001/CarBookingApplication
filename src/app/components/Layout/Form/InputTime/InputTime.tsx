import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopTimePicker } from '@mui/x-date-pickers';

export default function InputTime(props: any) {
  const { setTime, label } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['TimePicker', 'MobileTimePicker', 'DesktopTimePicker', 'StaticTimePicker']}
      >
        <DesktopTimePicker
          label={label}
          onChange={(e) => {
            setTime(e);
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
