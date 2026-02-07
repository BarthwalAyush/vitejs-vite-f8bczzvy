import { endpoints } from "../endpoints";


const getCartListItems = async (id: number) => {
  try {
    const res = await fetch(`${endpoints?.productById(id)}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(`error while fetching Cart Data || ${e}`);
  }
};

export default getCartListItems;
