import React, { useEffect, useState } from 'react';
import axios from "axios"
import { useNavigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { filterCategories } from '../store/Slices/products.slice';
import { addToCart } from '../store/Slices/cart.slice';

const ProductDetail = () => {

    const [product, setProduct] = useState({})
    const [quantity, setQuantity ] = useState("")

    const { id } = useParams()

    const productsList = useSelector(state => state.products)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/`)
            .then(res => {
                const productSearched = res.data.data.products.find(productItem => productItem.id === Number(id))
                setProduct(productSearched)
                dispatch(filterCategories(productSearched.category.id))
                console.log(productSearched)
            })
    }, [dispatch, id])

    const addProduct = () => {
        const added = {
            id: id,
            quantity: quantity,
        }
        dispatch(addToCart(added))

        console.log(added)
    }

    return (
        <div>
            <h1>Product detail</h1>
            <input
                type="number"
                placeholder='products quantity'
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}></input>
            <button onClick={addProduct}>Add to cart</button>
            <h3>{product?.title}</h3>
            <p>{product.category?.name}</p>
            <p>{product?.price}</p>
            <h2>Similar items</h2>
            {
                productsList?.map(productsItem => (
                    <li onClick={() => navigate(`/Products/${productsItem.id}`) } key={productsItem.id}>{productsItem.title}</li>
                ))
            }
        </div>
    );
};

export default ProductDetail; 