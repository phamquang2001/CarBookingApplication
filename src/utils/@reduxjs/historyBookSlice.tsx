import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { createSlice } from './toolkit';
import { RootStateKeyType } from '../types/injector-typings';
import { fetchApiWaitingBook } from 'app/API/api';


const initialState = {
  waitingBook: {},
};

const waitingBookSlice = createSlice({
  name: 'waitingBook' as RootStateKeyType,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListBook.fulfilled, (state, action: any) => {
      state.waitingBook = action.payload.data;
    });
  },
});
export const fetchListBook = createAsyncThunk('/fetch-historyBook', async () => {
  const data = await fetchApiWaitingBook();
  return data;
});

export const getListHistory = (state: any) => state.waitingBook?.waitingBook;
export default waitingBookSlice.reducer;
