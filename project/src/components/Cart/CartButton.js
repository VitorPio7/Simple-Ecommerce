import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';
const CartButton = (props) => {
  let number = useSelector((store) => store.cart.totalQuantity)
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{number}</span>
    </button>
  );
};

export default CartButton;
