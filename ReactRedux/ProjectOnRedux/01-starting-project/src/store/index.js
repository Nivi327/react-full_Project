import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterInitialState = { counter: 0, showCounter: true }
const authInitialState = { isAuthenticated: false }

const counterSlice = createSlice({
    name: 'counter',
    initialState: counterInitialState,
    reducers: {
        increament(state) {
            state.counter++;
        },
        decreament(state) {
            state.counter--;
        },
        increarse(state, action) {
            state.counter += action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }

})

// const storeReducer = (state = initialState, action) => {
//     if (action.type === 'increament') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     };

//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     };

//     if (action.type === 'decreament') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     };

//     if (action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state;
// }

const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;