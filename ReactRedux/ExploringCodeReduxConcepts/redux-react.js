const redux = require('redux');

const reduxReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increament') {
        return {
            counter: state.counter + 1
        };
    }
    return state;
};

const store = redux.createStore(reduxReducer);

const storeSubscription = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(storeSubscription);

store.dispatch({ type: 'increament' });