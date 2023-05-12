import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate=useNavigate();

  const deleteProduct = () => {
    axios
      .delete(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate('/home')
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div className="container text-center">
      <div className="card col-4 offset-3 mt-3">
        <div className="card-body">
          <h5 className="card-title">{product.productName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Price: ${product.productPrice}</h6>
          <p className="card-text">{product.productDescription}</p>
          <Link to={`/product/edit/${product._id}`}>Edit</Link>
          <Link to="#" onClick={deleteProduct}>Delete</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
