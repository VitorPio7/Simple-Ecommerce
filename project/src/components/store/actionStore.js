import { showNotification } from './sliceUi';
import { replaceCart } from './sliceCar';

export function fetchData() {


    return async dispatch => {
        try {
            let response = await fetch('https://new-project-ca1bd-default-rtdb.firebaseio.com/cart.json')
            if (!response.ok) {
                throw new Error('Could not fetch cart data!')
            }
            const cartData = await response.json();
            dispatch(replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }))


        } catch (error) {
            dispatch(
                showNotification({
                    status: "error",
                    title: "Error",
                    message: "The fetch is not working"
                })
            )
        }
    }
}

export function sendCartData(cart) {
    return async dispatch => {
        try {
            dispatch(showNotification({
                status: "Loading...",
                title: "Loading...",
                message: "The data is loading..."
            }))
            let response = await fetch('https://new-project-ca1bd-default-rtdb.firebaseio.com/cart.json',
                { method: 'PUT', body: JSON.stringify({ items: cart.items, totalQuantity: cart.totalQuantity }) })
            if (!response.ok) {
                throw new Error('Could not fetch cart data!')
            }
            dispatch(showNotification({
                status: "Success",
                title: "Ready",
                message: "The data is ready."
            }))

        } catch (error) {
            dispatch(showNotification({
                status: "error",
                title: "Error",
                message: "An error has occurred sending cart data"
            }))

        }
    }
}