import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { buy } from '../store/Slices/cart.slice';

const CartSide = () => {

    const cartProducts = useSelector(state => state.Cart)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Cartside</h1>
            <ul>
                {
                    cartProducts.map(product => (
                        <li key={product.id} onClick={() => navigate (`/Products/${product.id}`)}>
                            {product.title}
                        </li>
                    ))
                }
            </ul>
            <button onClick={() => dispatch(buy())}>
                Checkout
            </button>
        </div>
    );
};

export default CartSide;