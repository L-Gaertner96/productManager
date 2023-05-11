import React, {  useState } from 'react'
import axios from 'axios';

const ProductForm = (props) => {

    const {product, setProduct} = props;
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product',{
            productName,
            productPrice,
            productDescription
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
                setProductName("");
                setProductPrice("");
                setProductDescription("");
                setProduct([...product, res.data]);

            })
            .catch(err=>console.log(err))
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group col-6" >
                    <label htmlFor="productName">Name: </label>
                    <input type="text" className="form-control" onChange={(e)=>setProductName(e.target.value)} value={productName} />
                </div>
                <div className="form-group col-6">
                    <label htmlFor="price">Price: </label>
                    <input type="text" className="form-control" onChange = {(e)=>setProductPrice(e.target.value)} value={productPrice} />
                </div>
                <div className="form-group col-6">
                    <label htmlFor="productDescription">Description: </label>
                    <input type="text" className="form-control" onChange = {(e)=>setProductDescription(e.target.value)} value={productDescription} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ProductForm