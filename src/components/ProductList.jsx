import React, { useEffect, useState } from "react";
import { API } from "../helpers/const";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setTodos(data);
  };
  useEffect(() => {
    getTodos();
  }, []);
  console.log(todos);
  return (
    <div>
      {todos.map((elem) => (
        <ProductCard key={elem.id} {...elem} getTodos={getTodos} />
      ))}
    </div>
  );
};

export default ProductList;
