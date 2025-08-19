import { createSlice } from "@reduxjs/toolkit";

const propertiesSlice = createSlice({
  name: "properties",
  initialState: {
    propertiesList: [],
  },
  reducers: {
    setProperties: (state, action) => {
      state.propertiesList = [];
      state.propertiesList.push(...action.payload);
    },
  },
});

export const { setProperties } = propertiesSlice.actions;
export default propertiesSlice.reducer;
