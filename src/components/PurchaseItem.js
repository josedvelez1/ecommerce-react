import React from 'react';
import { useNavigate } from 'react-router-dom';

const PurchaseItem = ({purchase}) => {

    const options = {year: "numeric", month:"long", day:"numeric"}

    const date = new Date(purchase.createdAt).toLocaleDateString('en-us', options)

    const navigate = useNavigate()

    return (
      <div>
        <div>
            <b>{date}</b>
        </div>
        <ul>
            {purchase.cart.products.map(productItem => (
                <li key={productItem.id} onClick={() => navigate(`/products/${productItem.id}`)} >
                    {productItem.title}
                </li>
            ))}
        </ul>
      </div>
    );
};

export default PurchaseItem;