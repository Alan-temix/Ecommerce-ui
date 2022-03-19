/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

// Components
import ShoppingCartList from './ShoppingCartList';
// Context
import CartContext from '../../context/CartContext';

export default function ShoppingCarts() {
  const [subtotal, setSubtotal] = useState(0);
  const [open, setOpen] = useState(true)
  const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    const getTotal = () => {
      let priceArray = [];
      let sum = 0;
      for(let i = 0; i < state.cart.length; i++) {
        priceArray = [...priceArray, state.cart[i].price];
      }
      for(let i = 0; i < priceArray.length; i++) {
        sum += parseInt(priceArray[i]);
      }
      return sum;
    }
    setSubtotal(getTotal());
  }, [state])

  return (
    <Transition.Root show={state.statusVisible} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => dispatch({type: "Hide Menu"})}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-200">
                          {state.cart.length > 0 ? (state.cart.map((product) => ( <ShoppingCartList key={product.id} id={product.id} imageSrc={product.imageSrc} imageAlt={product.imageAlt} href={product.href} name={product.name} price={product.price} color={product.color} quantity={product.quantity} /> ))) : (<div className="p-2 bg-red-500 bg-opacity-25 rounded"><p className="text-lg">Empty Cart</p><p className="italic">Click on "Add to Cart" to add the product you want to your cart.</p></div>)}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>{subtotal}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                      <Link
                        to="/Checkout"
                        className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        onClick={() => dispatch({type: "Hide Menu"})}
                      >
                        Checkout
                      </Link>
                    </div>
                    <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                      <p>
                        or{' '}
                        <button
                          type="button"
                          className="text-indigo-600 font-medium hover:text-indigo-500"
                          onClick={() => dispatch({type: "Hide Menu"})}
                        >
                          Continue Shopping<span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
