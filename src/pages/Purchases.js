import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import PurchaseItem from '../components/PurchaseItem';
import { getPurchases } from '../store/Slices/purchases.slice';

const Purchases = () => {

    const dispatch = useDispatch()

    const purchases = useSelector(state => state.purchases)

    useEffect(() => {
        dispatch(getPurchases())
    }, [dispatch])


    return (
        <div>
            <h1>Purchases</h1>
            {
                purchases.length ? (
                    purchases.map(purchase => (
                        <PurchaseItem purchase={purchase} key={purchase.id} />
                    ))
                ) : (
                    <p>Cart is empty</p>
                )
            }
        </div>
    );
};

export default Purchases;