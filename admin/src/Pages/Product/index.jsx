import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/actions/productActions';
import AddModal from './AddModal';
import './product.css';

const Product = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
        <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
          <h1 className='h2'>Products</h1>
          <div className='btn-toolbar mb-2 mb-md-0'>
            <div className='btn-group me-2'>
              <button
                type='button'
                className='btn btn-sm btn-outline-secondary'
                onClick={() => setShowModal(true)}
              >
                Add New
              </button>
            </div>
          </div>
        </div>
        <div className='table-responsive'>
          <table className='table table-striped table-sm'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Title</th>
                <th scope='col'>Description</th>
                <th scope='col'>Price</th>
                <th scope='col'>Stock</th>
              </tr>
            </thead>
            <tbody>
              {products.data &&
                products.data.map((product, i) => {
                  return (
                    <tr key={product._id}>
                      <td>{i + 1}</td>
                      <td>{product.title}</td>
                      <td>{product.description}</td>
                      <td>{product.price}</td>
                      <td>{product.stock}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </main>
      {showModal ? <AddModal setShowModal={setShowModal} /> : null}
    </>
  );
};

export default Product;
