import React, { createContext ,useState } from 'react'
import { food_list } from '../../assets/frontend_assets/assets'; // adding the near restutraunt 

export const StoreContext = createContext(null);

const StoreContextProvider = (props)=>{

    const [cartItems , setCartItems] = useState({})

    const addToCart = async (itemId) => {
      if (!cartItems[itemId]) {
        setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
      } else {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      }
      // if (token) {
      //   const response=await axios.post(
      //     url + "/api/cart/add",
      //     { itemId },
      //     { headers: { token } }
      //   );
      //   if(response.data.success){
      //     toast.success("item Added to Cart")
      //   }else{
      //     toast.error("Something went wrong")
      //   }
      // }
    };

    const removeFromCart = async (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      // if (token) {
      //   const response= await axios.post(
      //     url + "/api/cart/remove",
      //     { itemId },
      //     { headers: { token } }
      //   );
      //   if(response.data.success){
      //     toast.success("item Removed from Cart")
      //   }else{
      //     toast.error("Something went wrong")
      //   }
      // }
    };
  

    //know with the help of this context , we can access food_list anywhere
    const contextValue = {
      food_list,
      cartItems,
      setCartItems,
      addToCart,
      removeFromCart
    }

    // useEffect(() => {
    //   console.log(cartItems);
    // }, cartItems);

    return (
        <StoreContext.Provider value={contextValue}>
          {props.children}
        </StoreContext.Provider>
      );
}

export default StoreContextProvider;
