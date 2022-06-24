import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../slices/cartSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import Product from './Product/Product'
import './Shop.scss'

function Shop() {

  let [productsArray, setProductsArray] = useState([])

  useEffect(() => {
    let products = axios.get('http://47.254.82.226:13371/product/getProducts')
    products.then(res => setProductsArray(res.data)).catch(err => console.log(err))
  }, [])

  const carts = useSelector(state => state.cart)
  //console.log(carts.cart)
  console.log(carts)
  let dispatch = useDispatch()

  let img = "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1633696719/Croma%20Assets/Wearable/Wearable%20Devices/Images/244887_1_njixjc.png/mxw_2256,f_auto"

  const addToCartHandler = () => {
    let item = { name: "hi, age: 20", price: 25 }
    let result = addToCart({ item, quantity: 1 })
    dispatch(result)
    console.log(result)
  }

  const deleteFromCartHandler = () => {
    let result = deleteFromCart("1")
    dispatch(result);
    console.log(result)
  }

  return (
    <div>
      <div className="designContainer">
        <div className="head">Shop</div>

        <div className="shop">
          {
            productsArray.map((d) => {
              return <Product key={d.id} image={d.img} name={d.name} price={d.price} object={d} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Shop
