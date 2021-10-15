import React, { useState, useContext, useEffect } from 'react';
import Details from '../components/Product/Details';
import { useParams } from 'react-router-dom';
import ProductContext from '../context/ProductContext'

const ProductDetails = () => {
    const [stateProductSelected, setStateProductSelected] = useState(null);
    const { state } = useContext(ProductContext);
    const { productId } = useParams();

    useEffect(() => {
        const getProduct = () => {
            const productSelected = state.products.filter(element => element.id === parseInt(productId));
            setStateProductSelected(productSelected[0]);
        }
        getProduct();
    }, [])

    return(
        <>
            {stateProductSelected != null && <Details props={stateProductSelected} />}
            {/* {stateProductSelected != null && <Details id={stateProductSelected[0].id} name={stateProductSelected[0].name} href={stateProductSelected[0].href} price={stateProductSelected[0].price} imageSrc={stateProductSelected[0].imageSrc} imageAlt={stateProductSelected[0].imageAlt} quantity={stateProductSelected[0].quantity} stock={stateProductSelected[0].stock} />} */}
        </>
    )
}

export default ProductDetails;