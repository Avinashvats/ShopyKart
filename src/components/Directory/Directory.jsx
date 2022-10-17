import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import categories from "../../Data/categories";
import "./Directory.scss";

export default function Directory() {
  return (
    <div className="directory-menu">
      {categories.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
}
