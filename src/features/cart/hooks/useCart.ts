import { useEffect, useState } from 'react';
import getCartList from '../service/getCartList';
import getCartListItems from '../service/getCartListItems';
import type { CartList, ProductList } from '../types/cartTypes';

type Loading = true | false;

export const useCart = () => {
  const [cartList, setCartList] = useState<CartList[]>([]);
  const [productList, setProductList] = useState<ProductList[]>([]);
  const [loading, setLoading] = useState<Loading>(true);

  const getCartListFn = async () => {
    const res = await getCartList();
    setCartList(res);
    return res;
  };

  const getCartListItemFn = async () => {
    const productListResp = await Promise.all(
      cartList.map((item) => getCartListItems(item.productId))
    );
    setLoading(false);
    setProductList(productListResp);
    return;
  };

  useEffect(() => {
    getCartListFn();
  }, []);

  useEffect(() => {
    if (cartList?.length) {
      getCartListItemFn();
    }
  }, [cartList]);

  return { loading, productList };
};
