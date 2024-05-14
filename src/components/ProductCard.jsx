import { Button } from "@mui/material";
import React from "react";
import { API } from "../helpers/const";
import { Link } from "react-router-dom";

const ProductCard = ({ todoName, todoPhone, id, getTodos }) => {
  const deleteTodo = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
      header: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    getTodos();
  };
  return (
    <div>
      <li className="todo">
        <span>{todoName}</span>
        <span>{todoPhone}</span>
        <Button onClick={() => deleteTodo(id)}>Delete</Button>
        <Link to={`/edit/${id}`}>
          <Button>Edit</Button>
        </Link>
      </li>
    </div>
  );
};

export default ProductCard;
