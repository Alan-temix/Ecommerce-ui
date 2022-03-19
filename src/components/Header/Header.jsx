import { Fragment, useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
import './Header.style.css';
import ShoppingCarts from './ShoppingCarts';
import { getIp } from './Helpers/getIp';

// Context
import CartContext from '../../context/CartContext';

export default function Header() {
  const { state, dispatch } = useContext(CartContext);
  const [displayInputValue, setDisplayInputValue] = useState("hidden");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // getIp();
    console.log("aqui se mostarra el pais y moneda")
  }, [])
  
  return (
    <>
    <div className="bg-white border-b-2">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                    <Link to="/WishList" className="-m-2 p-2 block font-medium text-gray-900">
                      My Wishilst
                    </Link>
                </div>
              </div>

              {/* <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                  <Link to="/Sign-in" className="-m-2 p-2 block font-medium text-gray-900">
                    Sign in
                  </Link>
                </div>
                <div className="flow-root">
                  <Link to="/Sign-up" className="-m-2 p-2 block font-medium text-gray-900">
                    Create account
                  </Link>
                </div>
              </div> */}

              <div className="border-t border-gray-200 py-6 px-4">
                <Link to="/" className="-m-2 p-2 flex items-center">
                  <img
                    src="https://tailwindui.com/img/flags/flag-canada.svg"
                    alt=""
                    className="w-5 h-auto block flex-shrink-0"
                  />
                  <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                  <span className="sr-only">, change currency</span>
                </Link>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
          <span id="thisSelector">Get free delivery on orders over $100</span>
        </p>

        <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center">
              <button
                type="button"
                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <div className="ml-auto flex items-center">
                {/* <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link to="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                  </Link>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create account
                  </a>
                </div> */}

                <div className="hidden lg:ml-8 lg:flex">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="w-5 h-auto block flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">$, change currency</span>
                </div>

                {/* Search */}
                <div className="flex lg:ml-2">
                  <span className="p-1 text-gray-400 hover:text-gray-500 cursor-pointer" onClick={() => displayInputValue === "hidden" ? setDisplayInputValue("inline") : setDisplayInputValue("hidden")}>
                    <span className="sr-only">Search</span>
                    <SearchIcon className="w-6 h-6" aria-hidden="true" />
                  </span>
                  <form className={displayInputValue}>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline cursor-pointer mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => displayInputValue === "inline" ? setDisplayInputValue("hidden") : setDisplayInputValue("inline")}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> */}
                    <input type="text" placeholder="Search by name or category" name="search-keyword" />
                    <button className="ml-4">Search</button>
                  </form>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6" onClick={() => dispatch({type: "Show Menu"})}>
                  <span className="group -m-2 p-2 flex items-center ut-hover-pointer">
                    <ShoppingBagIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{state.cart.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
    <ShoppingCarts />
    </>
  )
}
