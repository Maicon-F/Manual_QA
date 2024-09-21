import React from "react";
import style from "./style.module.scss";

export default class ItemCart extends React.Component<any, any> {
  render() {
    const { item } = this.props;
    let price = item.price.toFixed(2);

    return (
      <div className={style.card}>
        {/* Image on the left */}
        <div className={style.container}>
          <a href={`/product/${item.id}`}>
            <img src={`${item.url}.png`} alt={item.name} />
          </a>
        </div>

        {/* Product details on the right */}
        <div className={style.productDetails}>
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Color: {item.color}</p>
          <p>Size: {item.size}</p>
          <p className={style.price}>
            <i className="fas fa-euro-sign"></i> SubTotal: {`${price} * ${item.quantity} =  ${(price * item.quantity).toFixed(2)}`}
          </p>
        </div>
      </div>
    );
  }
}






