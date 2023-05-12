import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
  const { removeFromDom, product, setProduct } = props;
  
  const deleteProduct = (productId) =>{
    axios.delete('http://localhost:8000/api/product/'+productId)
        .then(res=>{
            removeFromDom(productId)
        })
        .catch(err=>console.log(err))
  }

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/product')
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {product ? (
        <ul>
          {product.map((product, idx) => {
            return (
              <li key={idx}>
                <h3>{product.productName}</h3>
                <p>{product.productDescription}</p>
                <p>Price: ${product.productPrice}</p>
                <Link to={'/product/'+product._id}>View Details On {product.productName} Here </Link>
                |
                <Link to={"/product/edit/"+product._id}> Edit </Link>
                |
                <Link to="#" onClick={()=>deleteProduct(product._id)}> Delete</Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ProductList;