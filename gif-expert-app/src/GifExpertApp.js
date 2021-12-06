import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = ({ defaultCategories = [] }) => {
  
  //const [categorias, setcategorias] = useState(['Arcane']);
  const [categorias, setcategorias] = useState(defaultCategories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr/>
      <AddCategory setCategories={setcategorias} />
      <ul>
        {
          categorias.map((c, i) => {
            return <GifGrid key={i} category={c} />
          })
        }
      </ul>
    </>
  );
};

export default GifExpertApp;
