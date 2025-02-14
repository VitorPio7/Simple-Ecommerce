import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendCartData, fetchData } from './components/store/actionStore';
import Notification from "./components/UI/Notifications"

function App() {
  let dispatch = useDispatch()
  const notification = useSelector((state) => state.ui.notification);
  const showCart = useSelector((state) => state.ui.cartIsVisible)
  let cart = useSelector((store) => store.cart)
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
  useEffect(() => {
    if (cart.change) {
      dispatch(sendCartData(cart))
    }
  }, [cart, dispatch])
  return (
    <>
      {notification && (<Notification
        status={notification.status}
        title={notification.title}
        message={notification.message} />)}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
