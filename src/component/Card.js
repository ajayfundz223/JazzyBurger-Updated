import React from "react";
import Counter from "./Counter";
import ImgGallery from "./ImgGallery";
import Cart from "./Cart";
import Favourite from "./Favourite";
const Card = ({ product, toCartButton }) => {
  return (
    <div className="card" onDoubleClick={() => toCartButton(product.id)}>
      <Favourite />
      <img src={product.image} className="card-img-top " alt="..." width={200} height={200} />
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex-column">
            <p class="price">Total Price</p>
            <p className="price-tag">&#8358;{product.price}.00</p>
          </div>
          <Counter product={product} />
        </div>
        <div>
          <ImgGallery />
        </div>
        <div>
          <Cart product={product} toCartButton={toCartButton} />
        </div>
      </div>
    </div>
  );
};

export default Card;
