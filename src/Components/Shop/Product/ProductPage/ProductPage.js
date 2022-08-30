import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './ProductPage.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

function ProductPage({ match }) {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const clicked = () => {
    console.log('adding to cart ', product)
  }

  useEffect(() => {
    axios.get(`/product/getProductsByID/${id}`)
      .then(res => { console.log(res.data.payload); setProduct(res.data.payload) })
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='productPage'>
      <div className="heading">
        Product Details
      </div>
      <div className="con">
        <div className="productImage">
          <img src={product.img} alt="" />
        </div>
        <div className="textBox">
          <div>{product.name}</div>
          <div className="price">
            <h4 style={{display: "inline"}}>Price: </h4>$ {product.price}
          </div>
          <div className='description'><h4>Description:</h4>{ product.description }</div>
          <button onClick={clicked} >Add to Cart </button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
