import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setStat(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setData, setStat } = dataSlice.actions;
export default dataSlice.reducer;

// thunks
export function fetchData() {
  return async function fetchDataThunk(dispatch, getState) {
    dispatch(setStat(STATUSES.LOADING));
    try {
      const res = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment "
      );
      const data = await res.json();
      dispatch(setData(data));
      dispatch(setStat(STATUSES.IDLE));
    } catch (e) {
      dispatch(setStat(STATUSES.ERROR));
      console.log(e);
    }
  };
}
