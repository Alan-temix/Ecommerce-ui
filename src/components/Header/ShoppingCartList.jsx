import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';

const ShoppingCartList = (props) => {
    const { dispatch } = useContext(CartContext);
    const { id, imageSrc, imageAlt, href, name, price, color, quantity } = props;
    
    return(
        <li key={id} className="py-6 flex">
        <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="ml-4 flex-1 flex flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <a href={href}>{name}</a>
              </h3>
              <p className="ml-4">{price}</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">{color}</p>
          </div>
          <div className="flex-1 flex items-end justify-between text-sm">
            <p className="text-gray-500">
              Quantity: <span style={{marginLeft:'10px', border: '1px solid black'}}><button style={{padding: '10px', color: "blue"}}>-</button> {quantity} <button style={{padding: '10px', color: "blue"}}>+</button></span>
            </p>
            <div className="flex">
              <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => dispatch({type: "Remove", payload: props})}>
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    )
}

export default ShoppingCartList;