import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import style from "../style/ProductComponent.module.css"
import { FaShoppingCart } from "react-icons/fa";
import { selectedProducts, getSingleProduct } from "../redux/actions/ProductAction"

const ProductComponent = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);

    const HandleCart = (product) => {
        dispatch(selectedProducts(product))
    }


    return (
        <div className="product-wrapper" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center" }}>
            {
                products && products.length > 0 && products?.map((product) => {
                    const { id, title, category, image, price, quantity } = product
                    return (
                        <section>
                            <div className={style.container}>
                                <div className={style.card}>
                                    <Link to={`/products/${id}`} >
                                        <div className={style.content}>
                                            <div className={style.imgBx}>
                                                <img src={image && image} alt='#' />
                                            </div>
                                            <div className={style.contentBx}>
                                                <h3>{category}</h3>
                                                <p>{title}</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <ul className={style.sci}>
                                        <p>
                                            ${price}
                                        </p>
                                        <p>
                                            <button className={style.cartBTN}
                                                onClick={() => HandleCart(product)}
                                                style={{
                                                    background: 'none',
                                                    border: 'none',
                                                    outline: "none"
                                                }}><FaShoppingCart /></button>
                                        </p>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    )
                })
            }
        </div >
    )
}
export default ProductComponent