import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import Order from './Order'

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
        <div>
            <span className='logo'> Wear stuff </span>
            <ul className='nav'>
                <li>About me</li>
            </ul>
            <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

            {cartOpen && (
                <div className='shop-cart'>
                    {props.orders.map(el => (
                        <Order key={el.id} item={el}/>
                    ))}
                </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
