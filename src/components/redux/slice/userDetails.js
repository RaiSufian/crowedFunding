import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {
    },
}

export const userDetail = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {

        addDetails: (state, action) => {
            state.user = action.payload;
        },
        removeDetails: (state, action) => {
            state.user = {}
        }
    },
})

// Action creators are generated for each case reducer function

console.log("current actions", userDetail.actions);
export const { addDetails, removeDetails } = userDetail.actions

export default userDetail.reducer