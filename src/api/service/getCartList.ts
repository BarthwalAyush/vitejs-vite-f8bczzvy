const getCartList = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/carts/2');
    const data = await res.json();
    return data?.products;
  } catch (e) {
    console.log(`error while fetching Cart Data || ${e}`);
  }
};

export default getCartList;
