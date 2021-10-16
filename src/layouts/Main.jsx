import React, { useContext } from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import ShoppingCart from '../components/Header/ShoppingCarts';

const Main = ({ children }) => {
    return(
        <>
        <Header />
        {children}
        <Footer />
        </>
    )
}

export default Main;