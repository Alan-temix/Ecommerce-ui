const ProductElementCheckout = ({productInfo}) => {
    return(
    <li className="grid grid-cols-6 gap-2 border-b-1">
        <div className="col-span-1 self-center">
            <img src={productInfo.imageSrc} alt="Product" className="rounded w-full" />
        </div>
        <div className="flex flex-col col-span-3 pt-2">
            <span className="text-gray-600 text-md font-semi-bold">{productInfo.name}</span>
            <span className="text-gray-400 text-sm inline-block pt-2">Red Headphone</span>
        </div>
        <div className="col-span-2 pt-3">
            <div className="flex items-center space-x-2 text-sm justify-between">
                <span className="text-gray-400">{productInfo.quantity} x €{productInfo.price}</span>
                <span className="text-pink-400 font-semibold inline-block">€{productInfo.price}</span>
            </div>
        </div>
    </li>
    )
}

export default ProductElementCheckout;