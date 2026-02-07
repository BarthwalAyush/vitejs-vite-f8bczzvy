import CartDisplay from '../components/cart/components/CartDisplay';
import { useCart } from '../components/cart/hooks/useCart';

function Cart() {
  const { loading, productList } = useCart();
  return loading ? 'loading' : <CartDisplay list={productList} />;
}

export default Cart;
