import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"


const Header = () => {
    const count = useSelector((state) => state.productArray.products)

    return (
        <div style={{ display: "flex", justifyContent: "center", margin: "20px", position: "fixed" }}>
            <div></div>
            <div>
                {
                    count && count?.length > 0 && <Link to={"/selectedProduct"}>
                        <button type="button" className="btn btn-dark" style={{
                            fontSize: "20px",
                        }}>
                            <FaShoppingCart />
                            <span className="badge badge-light mx-1">{count && count?.length}</span>
                        </button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Header