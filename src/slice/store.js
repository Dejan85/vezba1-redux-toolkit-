import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  data: "data state",
  employer: "employer state"
};

const fetchDataSlice = createSlice({
  name: "fetch-data",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
    },
    getOneEmployer: (state, action) => {
      state.employer = action.payload;
    }
  }
});

const FETCH_API_TYPE = createAction("FETCH_API_TYPE");
const GET_ONE_EMPLOYER_TYPE = createAction("GET_ONE_EMPLOYER_TYPE");

export const { getData, getOneEmployer } = fetchDataSlice.actions;
export { FETCH_API_TYPE, GET_ONE_EMPLOYER_TYPE };

export default fetchDataSlice.reducer;
