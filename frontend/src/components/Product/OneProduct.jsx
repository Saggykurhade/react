import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './oneproduct.css';
import { AuthContext } from '../Context/AuthContext';
import api from '../../Helpers/AxiosConfig';
import toast from 'react-hot-toast';

const OneProduct = () => {
    const [productData, setProductData] = useState({});
    const { id } = useParams();
    const { state } = useContext(AuthContext);

    async function Cart(id) {
        if (state.user.id && id) {
            try {
                const response = await api.post("/user/addcart", { userId: state.user.id, productId: id })
                if (response.data.success) {
                    toast.success(response.data.message)
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            toast.error("Please login to add product to cart.")
        }
    }

    useEffect(() => {
        async function getSingleProductData() {
            try {
                const { data } = await api.get(`/product/get-single-product?id=${id}`)
                if (data.success) {
                    setProductData(data.product)
                }
            } catch (error) {
                console.log(error)
            }
        }
        if (id) {
            getSingleProductData();
        }
    }, [id])

    console.log(productData, "productData")

    return (
        <div>
            {productData?.id ?
                <div id='parent'>
                    <div className='border'>
                        <img src={productData.image} />
                        </div>
                    <div className='border'>
                        <h1>Name : {productData.name}</h1>
                        <h4>Category ; {productData.category}</h4>
                        {/* <h4>Description ; {productData.description}</h4> */}
                        <h4>Price ; {productData.price}</h4>
                        {/* <h4>Rating ; {productData.rating.rate}</h4> */}
                        {/* <h4>Number of ratings ; {productData.rating.count}</h4> */}

                        <button onClick={() => Cart(productData._id)}>Cart</button>
                    </div>
                </div>
                :
                <div>Loading...</div>
            }
        </div>
    )
}

export default OneProduct