import React, {  useState } from 'react'
import axios from 'axios';

const ProductForm = () => {

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product',{
            productName,
            productPrice,
            productDescription
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    }

    return (
        <div className="container">
            <form onSubmit={onSubmitHandler}>
                <div className="form-group col-6" >
                    <label htmlFor="productName">Name: </label>
                    <input type="text" className="form-control" onChange={(e)=>setProductName(e.target.value)} />
                </div>
                <div className="form-group col-6">
                    <label htmlFor="price">Price: </label>
                    <input type="text" className="form-control" onChange = {(e)=>setProductPrice(e.target.value)} />
                </div>
                <div className="form-group col-6">
                    <label htmlFor="productDescription">Description: </label>
                    <input type="text" className="form-control" onChange = {(e)=>setProductDescription(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ProductForm