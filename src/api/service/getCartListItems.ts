const getCartListItems = async (id: number) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(`error while fetching Cart Data || ${e}`);
  }
};

export default getCartListItems;
