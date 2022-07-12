import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {

  const dispatch = useDispatch();

  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  const toggleCartIsVisibleHandler = () => {
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleCartIsVisibleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
