import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import { useDispatch } from 'react-redux'
import { FetchProducts } from './../redux/actions/ProductAction';
// import { PulseLoader } from "react-spinners"

const ProductListening = () => {
    const dispatch = useDispatch()

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
            {/* {loading ? <PulseLoader color="#9733EE" />
                : <ProductComponent />} */}
            <ProductComponent />
        </div>
    )
}

export default ProductListening