import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import style from "../style/ProductComponent.module.css"
import { selectedProducts, DelProducts, DelCard } from "../redux/actions/ProductAction"
import { MdDelete } from "react-icons/md";
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios';

const SelectedProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productArray.products)
  console.log(products)
  const Total_price = (products || []).reduce((accumulator, product) => {
    return accumulator + product.TotalPrice;
  }, 0);

  const HandleCheckout = async () => {
    try {
      console.log("aliyousaf", products)
      const stripe = await loadStripe('pk_test_51OPrroHw1RpTY5mdmVldWuSuKXM8YfZb4AoDq10umyjUbdS1qoS9tf3yrhJ5w4QmGSkjhUdxjkXCxo5uXXCwBgj000hNQBDJKI');
      const response = await axios.post('http://localhost:8080/create-checkout-session', { products }, {
        headers: {
          "Content-Type": "application/json"
        },
      });


      const session = response.data;
      console.log("Session", session)

      const result = stripe.redirectToCheckout({
        sessionId: session.id
      })

      if (result.error) {
        console.log("result.error")
      }
    } catch (error) {
      console.error('Error during Axios request:', error);
    }
  }

  return (
    <div className="product-wrapper" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "5rem" }}>
        <h1>
          Selected Products
        </h1>
        <button
          onClick={HandleCheckout}
          style={{
            backgroundColor: "#0077B5",
            padding: "1rem 2rem",
            border: "none",
            outline: "none",
            borderRadius: "10px",
            color: "white"
          }}>Pay : ${Total_price && Total_price}</button>
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