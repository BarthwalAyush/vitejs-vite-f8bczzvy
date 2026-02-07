import type { ProductList } from '../../../types/product';
import CartItem from './CartItem';

type CartDisplay = {
  list: ProductList[];
};

function CartDisplay(props: CartDisplay) {
  const { list } = props || {};

  return (
    <>
      {list.map((item: ProductList) => (
        <div key={item.id}>
          <CartItem {...item} />
        </div>
      ))}
    </>
  );
}

export default CartDisplay;
