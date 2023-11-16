import { createSlice } from './toolkit';
import { RootStateKeyType } from '../types/injector-typings';

const initialState = {
  isPopUpOn: false,
  isPopUpDriverOn: false,
  isDisplay: 'DriverAvailable',
};

const popUpSlice = createSlice({
  name: 'popUp' as RootStateKeyType,
  initialState,
  reducers: {
    setPopUpOn: (state) => {
      state.isPopUpOn = true;
      state.isPopUpDriverOn = false;
    },
    setPopUpOff: (state) => {
      state.isPopUpOn = false;
    },
    setPopUpDriverOn: (state) => {
      state.isPopUpDriverOn = true;
      state.isPopUpOn = false;
    },
    setPopUpDriverOff: (state) => {
      state.isDisplay = '';
      state.isPopUpDriverOn = false;
    },
    setDisplay: (state, action) => {
      state.isPopUpOn = false;
      state.isDisplay = action.payload;
    },
  },
});
export const { setPopUpOn, setPopUpOff, setPopUpDriverOn, setPopUpDriverOff, setDisplay } =
  popUpSlice.actions;
export const getPopUpStatus = (state: any) => state.popUp.isPopUpOn;
export const getPopUpDriverStatus = (state: any) => state.popUp.isPopUpDriverOn;
export const getDisplayStatus = (state: any) => state.popUp.isDisplay;

export default popUpSlice.reducer;
