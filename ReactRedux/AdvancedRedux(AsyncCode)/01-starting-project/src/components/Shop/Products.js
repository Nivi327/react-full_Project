import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_ITEMS = [
  {
    id: 'p1',
    name: 'MY First Book',
    price: 6,
    description: 'This is a first product - amazing!',
  },
  {
    id: 'p2',
    name: 'My Second Book',
    price: 5,
    description: 'This is a second product - amazing!',
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_ITEMS.map(product => <ProductItem
            key={product.id}
            id={product.id}
            title={product.name}
            price={product.price}
            description={product.description}
          />)
        }
      </ul>
    </section>
  );
};

export default Products;
