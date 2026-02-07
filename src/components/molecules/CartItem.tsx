import type { ProductList } from '../../features/cart/types/cartTypes';

type CartItem = ProductList;

function CartItem(props: CartItem) {
  const { title, price, image } = props || {};
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="price">${price}</p>
    </div>
  );
}
export default CartItem;
