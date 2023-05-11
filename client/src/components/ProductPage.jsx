import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


const ProductPage = (props) => {

    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/'+id)
            .then (res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => {console.error(err);
            });
    }, [id]);


    return (
        <div className = "container text-center">
            <div className="card col-4 offset-3 mt-3">
                <div className="card-body">
                    <h5 className="card-title">{product.productName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Price: ${product.productPrice}</h6>
                    <p className="card-text">{product.productDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductPage