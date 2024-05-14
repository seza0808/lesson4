import React, { useState } from "react";
import { API } from "../helpers/const";
import { useNavigate } from "react-router-dom";
// !Маршрутизация
// 1)устоновка
// 2)со
// 3)создать компонент в main
// 4) в место div создать ROUTERS
// 5) создать Router
// 6) вызвать MainRoutes в App.js
// 7)navlink link принимает to
const AddProduct = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    if (!name && !phone) {
      return;
    }
    let newProduct = {
      todoName: name,
      todoPhone: phone,
    };
    addTodo(newProduct);
    setName("");
    setPhone("");
    navigate("/products");
  };
  const addTodo = async (newTodo) => {
    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(newTodo),
    });
  };
  return (
    <div>
      <div className="container">
        <h1>Todo App</h1>
        <div>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Введите имя"
            value={name}
          />
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            placeholder="Введите номер телефона"
            value={phone}
          />
          <button onClick={handleClick}>Add Product</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
