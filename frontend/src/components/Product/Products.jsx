import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Router, useNavigate } from 'react-router-dom';
import api from '../../Helpers/AxiosConfig';

const Products = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    const router = useNavigate();

    useEffect(() => {
        // toast.success("Page rendered on browser..")
        async function getProducts() {
            try {
                // const { data } = await axios.get('https://fakestoreapi.com/products');
                const { data } = await api.get('/product/get-all-products');
                // console.log(data, "data here")
                if (data.success) {
                    setProducts(data.products)
                }
            } catch (error) {
                toast.error(error.data.message)
            }
        }
        getProducts()
    }, [])
    return (
        <div>{products?.length ? <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
            {products.map((pro) => (
                <div onClick={() => router(`/OneProduct/${pro.id}`)} style={{ border: "1px solid black", width: "23%", height: "380px", marginBottom: "10px" }}>
                    <img style={{ width: "80%", height: "160px" }} src={pro.image} />
                    <h6>Name :{pro.name}</h6>
                    <h6>Price : {pro.price} $</h6>
                    <h6>category :{pro.category}</h6>
                    <button>Add to cart</button>
                </div>
            ))}
        </div> : <div>Loading...</div>}</div>
    )
}

export default Products