import React, { createContext, useReducer } from 'react';

const ProductContext = createContext();

const initialState = {
    products: [
        {
          id: 1,
          name: 'Earthen Bottle',
          href: '#',
          price: 48,
          imageSrc: 'https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
          quantity: 1,
          stock: 2,
        },
        {
          id: 2,
          name: 'Nomad Tumbler',
          href: '#',
          price: 35,
          imageSrc: 'https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
          quantity: 1,
          stock: 2,
        },
        {
          id: 3,
          name: 'Focus Paper Refill',
          href: '#',
          price: 89,
          imageSrc: 'https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          quantity: 1,
          stock: 1,
        },
        {
          id: 4,
          name: 'Machined Mechanical Pencil',
          href: '#',
          price: 35,
          imageSrc: 'https://images.pexels.com/photos/1787235/pexels-photo-1787235.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          quantity: 1,
          stock: 1,
        },
        {
          id: 5,
          name: 'Machined Mechanical Pencil',
          href: '#',
          price: 35,
          imageSrc: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          quantity: 1,
          stock: 1,
        },
        {
          id: 6,
          name: 'Machined Mechanical Pencil',
          href: '#',
          price: 35,
          imageSrc: 'https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          quantity: 1,
          stock: 1,
        },
        {
          id: 7,
          name: 'Machined Mechanical Pencil',
          href: '#',
          price: 35,
          imageSrc: 'https://images.pexels.com/photos/2787216/pexels-photo-2787216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          quantity: 1,
          stock: 1,
        },
        {
          id: 8,
          name: 'Machined Mechanical Pencil',
          href: '#',
          price: 35,
          imageSrc: 'https://media.istockphoto.com/photos/black-digital-slr-camera-in-a-white-background-picture-id185278433?k=20&m=185278433&s=612x612&w=0&h=_JuLqy0HIaC3dq9V0x2xhh_VpUsHMSjAmZJmWMTBK3c=',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          quantity: 1,
          stock: 1,
        },
        {
          id: 9,
          name: 'Machined Mechanical Pencil',
          href: '#',
          price: 35,
          imageSrc: 'https://cdn.pixabay.com/photo/2013/11/18/04/48/photo-212439__340.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          quantity: 1,
          stock: 1,
        },
        {
          id: 10,
          name: 'Machined Mechanical Pencil',
          href: '#',
          price: 35,
          imageSrc: 'https://cdn.pixabay.com/photo/2021/01/11/12/35/camera-5908320__340.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          quantity: 1,
          stock: 1,
        },
        {
          id: 11,
          name: 'Machined Mechanical Pencil',
          href: '#',
          price: 35,
          imageSrc: 'https://cdn.pixabay.com/photo/2018/02/22/08/43/vintage-camera-3172430__340.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          quantity: 1,
          stock: 1,
        },
        {
          id: 12,
          name: 'Machined Mechanical Pencil',
          href: '#',
          price: 35,
          imageSrc: 'https://cdn.pixabay.com/photo/2019/06/19/13/51/costa-rica-4284899__340.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          quantity: 1,
          stock: 1,
        }
        // More products...
      ]
}

const reducer = (state, action) => {
  switch (action.type) {
    case "Show By Id":
      return (state.products.filter(element => element.id === action.payload))

    // case "Increment Stock":
    //   return "";

    // case "Decrement Stock":
    //   const cb = (element) => element.id === action.payload.id
    //   const indexTarget = state.products.find(cb)
    //   return [...state.products];

    default:
      return "Nada"
      break;
  }
}

const ProductProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const data = { state, dispatch };
  
  return(
      <ProductContext.Provider value={data}>
          {children}
      </ProductContext.Provider>
  )
}

export { ProductProvider }
export default ProductContext;