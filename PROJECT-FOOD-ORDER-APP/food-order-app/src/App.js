import React, { useState } from 'react';

import Header from './Components/LayOut/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider';

const App = () => {

    const [cartIsShown, setCartIsShown] = useState(false);

    const cartShownHandler = () => {
        setCartIsShown(true);
    };

    const cartHideHandler = () => {
        setCartIsShown(false);
    }

    return (
        <CartProvider>
            {cartIsShown && <Cart onHideCart={cartHideHandler} />}
            <Header onShowCart={cartShownHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    )
}

export default App;