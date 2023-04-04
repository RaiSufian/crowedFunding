import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    payment: null,
}

export const paymentDetails = createSlice({
    name: 'User_payment_details',
    initialState,
    reducers: {

        addPayment: (state, action) => {
            state.payment = action.payload;
        },
        removePayment: (state, action) => {
            state.payment = {}
        }
    },
})
export const { addPayment, removePayment } = paymentDetails.actions;
export default paymentDetails.reducer;