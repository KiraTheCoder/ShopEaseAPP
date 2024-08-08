import React, { useState } from 'react';
import axios from 'axios';

function Uploaded() {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('stock', stock);
    formData.append('price', price);
    formData.append('image', image);

//  console.log("formdata", formData);
 
    try {
      const response = await axios.post('http://localhost:8080/product/create-products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // console.log('Product created:', response.data);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-8 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Upload Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full p-2 border rounded-lg bg-fuchsia-200"
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-lg bg-fuchsia-200"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border rounded-lg bg-fuchsia-200"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full p-2 border rounded-lg bg-fuchsia-200"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded-lg bg-fuchsia-200"
            required
          />
        </div>
        <div>
          <input type="file" onChange={handleFileChange} className="w-full p-2 border rounded-lg bg-fuchsia-200" required />
        </div>
        <div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}

export default Uploaded;
