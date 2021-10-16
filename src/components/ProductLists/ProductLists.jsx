import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductContext from '../../context/ProductContext';
import CartContext from '../../context/CartContext';
  
export default function ProductLists() {
  const { state : globalStateProduct } = useContext(ProductContext);
  const { state : globalStateCart, dispatch} = useContext(CartContext);

return (
    <div className="bg-white">
    <div className="max-w-2xl mx-auto py-14 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {globalStateProduct.products?.map((product) => (
          <div className="container" key={product.id}>
            <Link to={`/product/${product.id}`} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <div className="flex justify-between">
                <h3 className="mt-2 text-sm text-gray-700">{product.name}</h3>
                <span className="mt-1 text-lg font-medium text-gray-900">{product.price}</span>
              </div>
            </Link>
            <div className="flex justify-between">
              <h3 className="mt-2 text-sm text-gray-700">Stock: </h3>
              <span className="mt-1 text-lg font-medium text-gray-900">{product.stock}</span>
            </div>
            <div className="flex justify-between">
              <button className="text-white bg-purple-600 bg-opacity-100 border-0 py-2 px-6 focus:outline-none hover:bg-purple-900 rounded" onClick={() => dispatch({type: "Add", payload: product})}>Add to Cart</button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-red-300">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
        </div>
    </div>
    </div>
)
}