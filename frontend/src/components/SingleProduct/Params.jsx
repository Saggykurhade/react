import React from 'react';
import { useNavigate } from 'react-router-dom';

const Params = () => {
    const router = useNavigate();
    
    return (
        <div>
        <button onClick={() => router("/SingleProduct/12345")}>Click to go Single Product</button>
        </div>
    )
} 

        export default Params