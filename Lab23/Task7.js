import React, { useState } from 'react';
function Product({ product, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setName(product.name);
    setPrice(product.price);
    setQuantity(product.quantity);
  };

  const handleDelete = () => {
    onDelete(product);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const totalPrice = price * quantity;

  return (
    <tr>
      <td>{isEditing ? <input value={name} onChange={handleChangeName} /> : name}</td>
      <td>{isEditing ? <input value={price} onChange={handleChangePrice} /> : price}</td>
      <td>{isEditing ? <input value={quantity} onChange={handleChangeQuantity} /> : quantity}</td>
      <td>{totalPrice}</td>
      <td>
        {isEditing ? (
          <>
            <button onClick={handleSave}>Зберегти</button>
            <button onClick={handleCancel}>Відмінити</button>
          </>
        ) : (
          <button onClick={handleEdit}>Редагувати</button>
        )}
        <button onClick={handleDelete}>Видалити</button>
      </td>
    </tr>
  );
}

function ProductList() {
  const [products, setProducts] = useState([
    { name: 'Молоко', price: 25, quantity: 2 },
    { name: 'Хліб', price: 10, quantity: 1 },
    { name: 'Яйця', price: 5, quantity: 10 },
  ]);

  function onAddProduct(newProduct) {
    setProducts([...products, newProduct]);
  }
  const handleDelete = (productToDelete) => {
    setProducts(products.filter((product) => product !== productToDelete));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Назва</th>
          <th>Ціна</th>
          <th>Кількість</th>
          <th>Вартість</th>
          <th>Дії</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <Product key={product.name} product={product} onDelete={handleDelete} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;
