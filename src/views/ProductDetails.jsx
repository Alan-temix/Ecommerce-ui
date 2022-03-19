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
    }, [productId, state.products])

    return(
        <>
            {stateProductSelected != null && <Details props={stateProductSelected} />}
        </>
    )
}

export default ProductDetails;