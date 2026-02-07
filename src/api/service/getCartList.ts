import { endpoints } from "../endpoints";

const getCartList = async () => {
  try {
    const res = await fetch(`${endpoints?.cartById(2)}`);
    const data = await res.json();
    return data?.products;
  } catch (e) {
    console.log(`error while fetching Cart Data || ${e}`);
  }
};

export default getCartList;
