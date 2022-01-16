import { createSlice } from '@reduxjs/toolkit';

const centresSlice = createSlice({
  name: 'centres',
  initialState: {
    selectedCentreId: '',
    centres: [],
  },
  reducers: {
    setCentres: (state, action) => {
      state.centres = action.payload;
    },
    addCentre: (state, action) => {},
    selectCentre: (state, action) => {
      state.selectedCentreId = action.payload;
    },
  },
});

export const { setCentres, addCentre, selectCentre } = centresSlice.actions;

export default centresSlice.reducer;
