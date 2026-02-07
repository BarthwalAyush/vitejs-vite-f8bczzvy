import CartDisplay from '../components/organism/CartDisplay';
import { useCart } from '../features/cart/hooks/useCart';

function Cart() {
  const { loading, productList } = useCart();
  return loading ? 'loading' : <CartDisplay list={productList} />;
}

export default Cart;
