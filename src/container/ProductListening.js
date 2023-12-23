import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import { FetchProducts } from './../redux/actions/ProductAction';
import { PulseLoader } from "react-spinners"
import { useDispatch, useSelector } from 'react-redux'

const ProductListening = () => {
    const dispatch = useDispatch()
    const { isLoading } = useSelector((state) => state.allProducts);

    useEffect(() => {
        dispatch(FetchProducts())
    }, [])


    return (
        <div>
            <h1
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "4rem",
                    fontWeight: "bold"

                }}>All Products</h1>
            {isLoading ? <PulseLoader color="#9733EE" />
                : <ProductComponent />}
        </div>
    )
}

export default ProductListening