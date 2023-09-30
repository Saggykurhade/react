import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // toast.success("Page rendered on browser..")
        async function getProducts() {
            try {
                const { data } = await axios.get('https://fakestoreapi.com/products');
                // console.log(data, "data here")
                setProducts(data)
            } catch (error) {
                toast.error(error.message)
            }
        }
        getProducts()
    }, [])
    return (
        <div>{products?.length ? <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
            {products.map((pro) => (
                <div style={{ border: "1px solid black", width: "23%", height: "380px", marginBottom: "10px" }}>
                    <img style={{ width: "80%", height: "160px" }} src={pro.image} />
                    <h6>Name :{pro.title}</h6>
                    <h6>Price : {pro.price} $</h6>
                    <button>Add to cart</button>
                </div>
            ))}
        </div> : <div>Loading...</div>}</div>
    )
}

export default Products