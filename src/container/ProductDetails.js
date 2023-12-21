import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import style from "../style/ProductDetails.module.css"

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState("")
  const { category, description, image, price, rating, title } = product

  const fetchProducts = async () => {
    await axios.get(`https://fakestoreapi.com/products/${id}`).then((data) => {
      setProduct(data?.data)
      console.log(data.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <div className={style.dark}>
        <div className={`${style.container} `}>
          <h1 className={`${style.h1} text-center`} id="pageHeaderTitle">Card Details</h1>
          <article className={`${style.postcard} ${style.dark}${style.blue}`}>
            <a className={style.postcard__img_link} href="#">
              <img className={style.postcard__img} src={image && image} alt="Image Title" />
            </a>
            <div className={style.postcard__text}>
              <div>
                <h1 className={`${style.postcard__title} ${style.blue}`}><a href="#">{title}</a></h1>
                <div className={`${style.postcard__subtitle} ${style.small}`}>
                  <time datetime="2020-05-25 12:00:00">
                    <i className={`${style.fas}${style.fa_calendar_alt} mr-2`}></i>{category}
                    <i className={`${style.fas}${style.fa_calendar_alt} mr-2`}></i>${price}
                  </time>
                  <div className={style.postcard__bar}></div>
                </div>
              </div>

              <div>
                <div className={style.postcard__preview_txt}>{description}</div>
                <ul className={style.postcard__tagbox}>
                  <li className={`${style.tag__item} ${style.play} ${style.blue}`}>
                    <a href="#"><i className="fas fa-play mr-2" ></i>ADD TO CART</a>
                  </li>
                </ul>
              </div>
            </div>
          </article>

        </div>
      </div>
    </>
  )
}

export default ProductDetails