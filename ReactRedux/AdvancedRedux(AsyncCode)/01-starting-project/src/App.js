import { useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
// import Notification from './components/Layout/Notification';
import { sendCartData, fetchCartData } from './store/fetch-cart-data';

let renderInitial = true;

function App() {
  const dispatch = useDispatch();

  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [])

  useEffect(() => {
    if (renderInitial) {
      renderInitial = false;
      return;
    }

    if (cart.changed) {
      // Redux is ready for dispatching the Action Creator Thunk functions which are user defined
      dispatch(sendCartData(cart));
    }
  }, [cart])

  return (
    <Fragment>
      {/* {notification && <Notification title={notification.title} status={notification.status} message={notification.message} />} */}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
