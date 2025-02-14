import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/sliceCar';
const ProductItem = (props) => {
  const { title, price, description, id } = props;
  let dispatch = useDispatch()

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => dispatch(addItem({
            id: id,
            title: title,
            price: price
          }))}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
