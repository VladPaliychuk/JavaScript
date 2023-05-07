import React, { useState } from 'react';
import Product from './Task7';
import ProductList from './Task7';

function AddProductForm({ onAddProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Валідація введених даних
    if (!name.trim() || isNaN(price) || isNaN(quantity)) {
      alert('Введіть коректні дані');
      return;
    }

    // Створення нового продукту
    const newProduct = {
      name: name.trim(),
      price: parseFloat(price),
      quantity: parseInt(quantity),
    };

    // Додавання нового продукту до списку продуктів
    onAddProduct(newProduct);

    // Очищення полів для введення даних
    setName('');
    setPrice('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Назва продукту:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Ціна:</label>
        <input
          id="price"
          type="text"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="quantity">Кількість:</label>
        <input
          id="quantity"
          type="text"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />
      </div>
      <button type="submit">Додати</button>
    </form>
  );
}


function App() {
    const [products, setProducts] = useState([
      { id: 1, name: "Apple", price: 2.5, quantity: 10 },
      { id: 2, name: "Banana", price: 1.5, quantity: 15 },
      { id: 3, name: "Orange", price: 3, quantity: 8 },
    ]);
  
    const handleAddProduct = (product) => {
      setProducts((prevProducts) => [...prevProducts, product]);
    };
  
    const handleDeleteProduct = (productId) => {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    };
  
    return (
      <div>
        <h1>Product List</h1>
        <ProductList
          products={products}
          onDeleteProduct={handleDeleteProduct}
        />
        <AddProductForm onAddProduct={handleAddProduct} />
      </div>
    );
  }

export default App;

