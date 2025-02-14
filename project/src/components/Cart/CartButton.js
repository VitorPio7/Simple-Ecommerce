import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../store/sliceUi';
const CartButton = (props) => {
  let dispatch = useDispatch()
  let number = useSelector((store) => store.cart.totalQuantity)
  return (
    <button className={classes.button} onClick={() => dispatch(toggle())}>
      <span>My Cart</span>
      <span className={classes.badge}>{number}</span>
    </button>
  );
};

export default CartButton;
