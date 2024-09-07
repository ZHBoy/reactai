import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 1,
    },
    reducers: {
        incremented: state => {
            state.value += 1;
        },
        decremented: state => {
            state.value -= 1;
        },
        incrementedByAmount: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { incremented, decremented, incrementedByAmount } = counterSlice.actions;

export default counterSlice.reducer;