import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addItem, removeItemCart, replaceCart } from "../store/sliceCar"
const Cart = (props) => {
  let dispatch = useDispatch()

  useEffect(() => {
    async function myData() {
      try {
        let response = await fetch('https://new-project-ca1bd-default-rtdb.firebaseio.com/cart/totalQuantity/cart.json')
        let cartData = response.json();
        dispatch(replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity
        }))
      } catch (error) {
        console.error('occurr a new error.');
      }
    }
    myData();
  }, [])
  let cartItems = useSelector((state) => state.cart.items)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((el) => {
          return (<CartItem key={el.id}
            item={{ id: el.id, title: el.name, quantity: el.quantity, total: el.totalPrice, price: el.price }}
          />)
        })}

      </ul>
    </Card>
  );
};

export default Cart;
