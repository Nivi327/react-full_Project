import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

// This is an user defined Action Creator Thunk Function for sending the http request
export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Pending...',
            message: 'Sending the data!'
        }));

        const sendRequest = async () => {

            const response = await fetch('https://redux-async-6b5b2-default-rtdb.firebaseio.com/items.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity
                })
            })
            if (!response.ok) {
                throw new Error('Sending the data failed!');
            }
        };

        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success...',
                message: 'Cart data sent Successfully..'
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'An Error Occoured...',
                message: error.message
            }));
        }
    };
};

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://redux-async-6b5b2-default-rtdb.firebaseio.com/items.json');

            if (!response.ok) {
                throw new Error('Fetching the cart Data failed!');
            }
            const data = await response.json();

            return data;
        }
        try {
            const data = await fetchData();
            dispatch(cartActions.replaceData({
                items: data.items || [],
                totalQuantity: data.totalQuantity
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'An Error Occoured...',
                message: error.message
            }));
        }
    }
}