import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../../context/CartContext';
import ProductElementCheckout from './ProductElementCheckout';
import './CheckoutForm.style.css';

const CheckoutForm = () => {
    const { state } = useContext(CartContext);
    const [modalState, setModalState] = useState("");
    const [subtotal, setSubtotal] = useState(0);

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

    return(
    <div className="flex flex-wrap mx-2 my-4 sm:mx-16">
        <div className="bg-white lg:w-1/3 w-full border">
        <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">Order Summary</h1>
        <ul className="py-6 border-b space-y-6 px-8">
            {state.cart?.map(element => <ProductElementCheckout key={element.id} productInfo={element}/>)}
        </ul>
        <div className="px-8 border-b">
            <div className="flex justify-between py-4 text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold text-pink-500">€{subtotal}</span>
            </div>
            <div className="flex justify-between py-4 text-gray-600">
                <span>Shipping</span>
                <span className="font-semibold text-pink-500">Free</span>
            </div>
        </div>
        <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
            <span>Total</span>
            <span>€{subtotal}</span>
        </div>
        </div>
        <div className="bg-indigo-50 space-y-8 px-12 lg:w-2/3 w-full">
            <div className={`mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md ${modalState}`}>
                <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                    <div className="text-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-5 h-6 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="text-sm font-medium ml-3">Checkout</div>
                </div>
                <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">Complete your shipping and payment details below.</div>
                <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => setModalState("hidden")}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
            </div>
            <div className="rounded-md">
                <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Shipping &amp; Billing Information</h2>
            </div>
            {/* Aca va */}
            <div className="leading-loose">
                <form className="m-2 p-5 bg-white rounded shadow-xl">
                <p className="text-gray-800 font-medium">Customer information</p>
                <div className="">
                    <label className="block text-sm text-gray-00" htmlFor="cus_name">Name</label>
                    <input className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name" />
                </div>
                <div className="mt-2">
                    <label className="block text-sm text-gray-600" htmlFor="cus_email">Email</label>
                    <input className="w-full px-5  py-3 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Your Email" aria-label="Email" />
                </div>
                <div className="mt-2">
                    <label className=" block text-sm text-gray-600" htmlFor="cus_email">Address</label>
                    <input className="w-full px-2 py-3 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Street" aria-label="Email" />
                </div>
                <div className="mt-2">
                    <label className="hidden text-sm block text-gray-600" htmlFor="cus_email">City</label>
                    <input className="w-full px-2 py-3 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="City" aria-label="Email" />
                </div>
                <div className="inline-block mt-2 w-1/2 pr-2">
                    <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">Country</label>
                    <input className="w-full px-2 py-3 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Country" aria-label="Email" />
                </div>
                <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                    <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">Zip</label>
                    <input className="w-full px-2 py-3 text-gray-700 bg-gray-200 rounded" id="cus_email"  name="cus_email" type="text" required="" placeholder="Zip" aria-label="Email" />
                </div>
                <p className="mt-4 text-gray-800 font-medium">Payment information</p>
                <div className="">
                    <label className="block text-sm text-gray-600" htmlFor="cus_name">Card</label>
                    <input className="w-full px-2 py-3 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Card Number MM/YY CVC" aria-label="Name" />
                </div>
                <div className="mt-4">
                    <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">SUBMIT</button>
                </div>
                </form>
            </div>
            {/* Aca es el ifn */}
        </div>
    </div>
    )
}

export default CheckoutForm;