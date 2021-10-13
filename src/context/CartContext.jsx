import React, { useState, createContext } from 'react';

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [openCart, setOpenCart] = useState(false);

    const changeOpenClose = () => {
        if(openCart) {
            setOpenCart(false);
        }
        if(openCart == false) {
            setOpenCart(true);
        }
    }

    const globalData = {
        openCart,
        changeOpenClose
    }

    return(
        <CartContext.Provider value={globalData}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext;