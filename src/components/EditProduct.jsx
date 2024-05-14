import { Button } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  return (
    <div>
      <input type="text" />
      <input type="text" />
      <Button>Save</Button>
    </div>
  );
};

export default EditProduct;
