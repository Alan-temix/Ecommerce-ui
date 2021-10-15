import React, { useState, createContext, useReducer } from 'react';

const CartContext = createContext();

const products = [
    {
      id: 1,
      name: 'Medium Stuff Satchel',
      href: '#',
      color: 'Blue',
      price: '32.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
      stock: 1
    }
    // More products...
]  

const initialState = {
    statusVisible: false,
    cart: [...products]
};

const reducer = (state, action) => {
    switch (action.type) {
        case "Show Menu":
            return {
                ...state,
                statusVisible: true
            };

        case "Hide Menu":
            return {
                ...state,
                statusVisible: false
            };

        case "Add":
            console.log(action.payload.id);
            return {
                ...state,
                cart: [...state.cart, {...action.payload}]
            }

        case "Remove":
            const newArr = state.cart.filter(element => element.id != action.payload.id);

            return {
                ...state,
                cart: [...newArr]
            }

        default:
            return state;
            break;
    }
}

const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
 
    const data = {
        state,
        dispatch
    };

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext;