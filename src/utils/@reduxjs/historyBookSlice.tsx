import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { createSlice } from './toolkit';
import { RootStateKeyType } from '../types/injector-typings';
import { fetchApiHistoryBook } from 'app/API/api';

const initialState = {
  listHistory: {},
};

const historyBookSlice = createSlice({
  name: 'historyBook' as RootStateKeyType,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListBook.fulfilled, (state, action: any) => {
      state.listHistory = action.payload.data;
    });

  },
});
export const fetchListBook = createAsyncThunk('/fetch-historyBook', async () => {
  const data = await fetchApiHistoryBook();
  return data;
});


export const getListHistory = (state: any) => state.historyBook?.listHistory;
export default historyBookSlice.reducer;
