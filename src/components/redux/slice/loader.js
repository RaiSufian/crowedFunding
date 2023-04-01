import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    load: false,
}

export const Loader = createSlice({
    name: "load",
    initialState,
    reducers: {

        startload: (state, action) => {
            state.load = true;
        },
        endload: (state, action) => {
            state.load = false;
        }
    },
})
export const { startload, endload } = Loader.actions;
export default Loader.reducer;