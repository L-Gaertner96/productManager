import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = (props) => {


    const {id} = useParams();
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/'+id)
            .then((res)=>{
                const { productName, productPrice, productDescription } = res.data;
                setProductName(res.data.productName);
                setProductPrice(res.data.productPrice);
                setProductDescription(res.data.productDescription);
            })
            .catch(err=>console.log(err));
    }, [])

    const updateHandler = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/product'+id, {productName, productPrice, productDescription})
            .then(res=>{
                console.log(res);
                navigate('/home');
            })
            .catch(err=>console.log(err))
    }


  return (
    <div>
        <h1>Update A Product</h1>
    <form onSubmit={updateHandler}>
        <p>
            <label htmlFor="productName">Name: </label><br/>
            <input type="text" name="productName" value={productName} onChange={(e)=>{setProductName(e.target.value)}} />
        </p>
        <p>
            <label htmlFor="productPrice">Price: $</label><br/>
            <input type="text" name="productPrice" value={productPrice} onChange={(e)=>{setProductPrice(e.target.value)}} />
        </p>
        <p>
            <label htmlFor="productDescription">Description: </label><br/>
            <input type="text" name="productDescription" value={productDescription} onChange={(e)=>{setProductDescription(e.target.value)}} />
        </p>
        <input type="submit" />
    </form>
    </div>
  )
}

export default UpdateProduct