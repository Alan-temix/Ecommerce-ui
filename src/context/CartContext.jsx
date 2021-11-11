import React, { useState, createContext, useReducer } from 'react';

const CartContext = createContext();

const products = [
    {
      id: 22,
      name: 'Medium Stuff Satchel',
      href: '#',
      color: 'Blue',
      price: 32.00,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
      quantity: 1,
      stock: 1
    }
    //More products...
]

const initialState = {
    statusVisible: false,
    totalPrice: 0,
    cart: [...products]
};

const reducer = (state, action) => {
    switch (action.type) {
        case "Show Menu":
            return {
                ...state,
                statusVisible: true
                // totalPrice: state.cart.map(element => element.price).reduce((acc, item) => {
                //     return acc += item;
                // }, 0)
            };

        case "Hide Menu":
            return {
                ...state,
                statusVisible: false
            };

        case "Add":
            console.log(state)
            return {
                ...state,
                // cart: [...state.cart, state.cart.some(element => element.id === action.payload.id) ? {...action.payload, quantity: action.payload.id + 1} : {...action.payload}]
                cart: [...state.cart, {...action.payload}]
                // cart: test.map(element => element.id === action.payload.id ? ({...element, quantity: action.payload.quantity + 1}) : {...action.payload})
            }

        case "Remove":
            const newArr = state.cart.filter(element => element.id != action.payload.id);
            return {
                ...state,
                totalPrice: state.cart.reduce((acc, item) => {
                    return acc -= item.price;
                }, 0),
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