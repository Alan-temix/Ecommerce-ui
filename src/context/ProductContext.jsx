import React, { createContext, useReducer } from 'react';

const ProductContext = createContext();

const initialState = {
    products: [
        {
          id: 1,
          name: 'SST AEC SUPEREARTH SW',
          href: '/product/1',
          price: 48,
          imageSrc: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/bea13ab65d384ae2b614ad3300f493d0_9366/SST_AEC_SUPEREARTH_SW_Negro_GX3823_01_standard.jpg',
          imageAlt: 'SST AEC SUPEREARTH SW',
          description: 'Sst Aec Superearth Sw es un nuevo producto para Hombre de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conoces Sst Aec Superearth Sw puedes dejar una reseña abajo; siempre nos encanta conocer tu opinión. Aún estamos trabajando para tener más información de Sst Aec Superearth Sw, así que vuelva pronto. Mientras tanto, toma nota del número de artículo que identifica el producto GX3823 para que lo puedas encontrar de nuevo fácilmente. Está categorizado como: Zapatillas y Tenis',
          quantity: 1,
          stock: 2,
        },
        {
          id: 2,
          name: 'Nomad Tumbler',
          href: '/product/2',
          price: 35,
          imageSrc: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/bd7accade7294eae9ef5ac7700f4f70e_9366/Tenis_Superstar_Blanco_FX5545_01_standard.jpg',
          imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
          description: '',
          quantity: 1,
          stock: 2,
        },
        {
          id: 3,
          name: 'Focus Paper Refill',
          href: '/product/3',
          price: 89,
          imageSrc: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/7ed0855435194229a525aad6009a0497_9366/Tenis_Superstar_Blanco_EG4958_01_standard.jpg',
          imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          description: '',
          quantity: 1,
          stock: 1,
        },
        {
          id: 4,
          name: 'Machined Mechanical Pencil',
          href: '/product/4',
          price: 35,
          imageSrc: 'https://assets.adidas.com/images/w_600,f_auto,q_auto,t_ivy/9af2327aa9de40229a61adde00503b46_faec/Zapatillas_UltraBOOST_Verde_GZ2228_HM19_hover.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          description: '',
          quantity: 1,
          stock: 1,
        },
        {
          id: 5,
          name: 'Machined Mechanical Pencil',
          href: '/product/5',
          price: 35,
          imageSrc: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/c007fb1afb0b452bb595ad2400b201f0_9366/Tenis_Adizero_Adios_Pro_2.0_Azul_FY4082_01_standard.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          description: '',
          quantity: 1,
          stock: 1,
        },
        {
          id: 6,
          name: 'Machined Mechanical Pencil',
          href: '/product/6',
          price: 35,
          imageSrc: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/e9e2c25553a346c2a891ad4a00c51107_9366/Calzado_de_futbol_Predator_Pulse_Terreno_Firme_Negro_GX0219_01_standard.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          description: '',
          quantity: 1,
          stock: 1,
        },
        {
          id: 7,
          name: 'Machined Mechanical Pencil',
          href: '/product/7',
          price: 35,
          imageSrc: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/12ac4f9882814d0fa5d6ad410022cb34_9366/Tenis_Forum_Low_Blanco_H01924_01_standard.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          description: '',
          quantity: 1,
          stock: 1,
        },
        {
          id: 8,
          name: 'Machined Mechanical Pencil',
          href: '/product/8',
          price: 35,
          imageSrc: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/af405adab99747708f01aad8011626ff_9366/Tenis_Superstar_Negro_EG4957_01_standard.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          description: '',
          quantity: 1,
          stock: 1,
        },
        {
          id: 9,
          name: 'Machined Mechanical Pencil',
          href: '/product/9',
          price: 35,
          imageSrc: '',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          description: '',
          quantity: 1,
          stock: 1,
        },
        {
          id: 10,
          name: 'Machined Mechanical Pencil',
          href: '/product/10',
          price: 35,
          imageSrc: '',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          description: '',
          quantity: 1,
          stock: 1,
        },
        {
          id: 11,
          name: 'Machined Mechanical Pencil',
          href: '/product/11',
          price: 35,
          imageSrc: '',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          description: '',
          quantity: 1,
          stock: 1,
        },
        {
          id: 12,
          name: 'Machined Mechanical Pencil',
          href: '/product/12',
          price: 35,
          imageSrc: '',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          description: '',
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
      return "Nada";
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