import { useReducer } from 'react';
import CartContext from './cart-context';


const defaultCartState = {
    items: [],
    totalPrice: 0
}

const cartReducer = (state, action) => {

    if (action.type === 'ADD_ITEM') {
        const updatedPrice = state.totalPrice + action.item.amount * action.item.price;

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItem;
        let updatedItems;

        if (existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                amount: action.item.amount + existingCartItem.amount
            }

            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalPrice: updatedPrice
        };
    }

    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex(item => action.id === item.id)
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalPrice = state.totalPrice - existingItem.price;

        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => action.id !== item.id)
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalPrice: updatedTotalPrice,
        }
    }

    if (action.type === 'CLEAR') {
        return defaultCartState;
    }

    return defaultCartState;
}



const CartProvider = props => {

    const [cartState, cartDiscpatchFn] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item) => {
        cartDiscpatchFn({ type: 'ADD_ITEM', item: item })
    }

    const removeItemFromCartHandler = id => {
        cartDiscpatchFn({ type: 'REMOVE_ITEM', id: id })
    }

    const clearItemsFromCartHandler = () => {
        cartDiscpatchFn({ type: 'CLEAR' })
    }

    const cartContext = {
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearItems: clearItemsFromCartHandler,
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;