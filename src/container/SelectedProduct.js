import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import style from "../style/ProductComponent.module.css"
import { selectedProducts, DelProducts, DelCard, Checkout } from "../redux/actions/ProductAction"
import { MdDelete } from "react-icons/md";
// import { loadStripe } from '@stripe/stripe-js'
// import axios from 'axios';

const SelectedProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productArray.products)
  const { isLoading } = useSelector((state) => state.checkout)

  const Total_price = (products || []).reduce((accumulator, product) => {
    return accumulator + product.TotalPrice;
  }, 0);

  return (
    <div className="product-wrapper" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center" }}>

      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "5rem" }}>
        <h1>
          Selected Products
        </h1>


        <button
          onClick={() => dispatch(Checkout(products))}
          style={{
            backgroundColor: "#0077B5",
            padding: "1rem 2rem",
            border: "none",
            outline: "none",
            borderRadius: "10px",
            color: "white"
          }}>

          {isLoading ? 'Loading...' : `Pay : $${Total_price && Total_price}`}
        </button>
      </div>
      {
        products && products.length > 0 && products?.map((product) => {
          const { id, title, category, image, price, quantity, TotalPrice } = product
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
                        <p>Qty: <b>{quantity}</b></p>
                        <p>Total Price: <b>{TotalPrice}</b></p>
                      </div>
                    </div>
                  </Link>


                  <ul className={style.sci}>
                    <p>
                      ${price}
                    </p>
                    <p>
                      <button className={style.cartBTN}
                        onClick={() => dispatch(selectedProducts(product))}
                        style={{
                          background: 'none',
                          border: 'none',
                          outline: "none",
                        }}>+</button>
                    </p>

                    {
                      quantity === 1 ? <p
                        onClick={() => dispatch(DelCard(id))}
                        style={{
                          color: "red",
                          cursor: "pointer"
                        }}>
                        <MdDelete />
                      </p>
                        : <p>
                          <button className={style.cartBTN}
                            onClick={() => dispatch(DelProducts(id))}
                            style={{
                              background: 'none',
                              border: 'none',
                              outline: "none"
                            }}>-</button>
                        </p>
                    }
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
export default SelectedProduct