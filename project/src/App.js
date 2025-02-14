import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  let dispatch = useDispatch()
  let cart = useSelector((el) => el.cart)
  useEffect(() => {
    async function senData() {
      try {
        let response = await fetch('https://new-project-ca1bd-default-rtdb.firebaseio.com/cart.json', {
          method: 'PUT', body: JSON.stringify(cart)
        })
        if (!response.ok) {
          throw new Error('Sending car data failed.')
        }
      } catch (error) {
        console.error(error)
      }
    }
    senData()
  }, [dispatch, cart])
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
