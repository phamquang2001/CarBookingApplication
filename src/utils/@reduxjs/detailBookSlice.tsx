import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { createSlice } from './toolkit';
import { RootStateKeyType } from '../types/injector-typings';
import { getDetailBooking } from 'app/API/api';

const initialState = {
  detailBook: '',
  show: false,
};

const detailBookSlice = createSlice({
  name: 'detailBook' as RootStateKeyType,
  initialState,
  reducers: {
    setShowOn: (state) => {
      state.show = true;
    },
    setShowOff: (state) => {
      state.show = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDetailBook.fulfilled, (state, action: any) => {
      state.detailBook = action.payload.data;
    });
    builder.addCase(fetchDetailBook.rejected, (state) => {
      state.detailBook = '';
    });
  },
});

export const fetchDetailBook = createAsyncThunk('/fetch-historyBook', async (id_booking: any) => {
  try {
    const data = await getDetailBooking(id_booking);
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const { setShowOn, setShowOff } = detailBookSlice.actions;

export const getDetailHistory = (state: any) => state.detailBook?.detailBook;
export const getShowStatus = (state: any) => state.detailBook?.show;

export default detailBookSlice.reducer;
