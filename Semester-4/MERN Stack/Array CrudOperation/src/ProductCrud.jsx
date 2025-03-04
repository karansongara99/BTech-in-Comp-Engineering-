import React, { useState } from 'react'
import './index.css'

export default function ProductCrud () {
  const [product, setProduct] = useState([
    {
      "id": 1,
      "name": "Men's Casual Shirt",
      "category": "Men's Clothing",
      "price": 29.99,
      "stock": 50,
      "brand": "Fashion Fab",
    },
    {
      "id": 2,
      "name": "Women's Summer Dress",
      "category": "Women's Clothing",
      "price": 39.99,
      "stock": 30,
      "brand": "Fashion Fab",
    },
    {
      "id": 3,
      "name": "Leather Handbag",
      "category": "Accessories",
      "price": 59.99,
      "stock": 20,
      "brand": "Fashion Fab",
    }
  ]
  )

  const handleDelete = id => {
    setProduct(product.filter(e => e.id !== id))
  }

  return (
    <>
      <h1>Product CRUD</h1>
      <br />
      <table className='table table-danger table-hover p-2'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Brand</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.map(pro => (
            <tr key={pro.id}>
              <td>{pro.id}</td>
              <td>{pro.name}</td>
              <td>{pro.category}</td>
              <td>{pro.price}</td>
              <td>{pro.stock}</td>
              <td>{pro.brand}</td>
              <td>
                <button className="deletebtn" onClick={() => handleDelete(pro.id)}>Delete</button>
                &nbsp;
                <button className="editbtn" onClick={() => handleDelete(pro.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
