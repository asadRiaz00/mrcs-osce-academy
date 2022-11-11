import React from "react";
import { useNavigate } from 'react-router-dom';

const ProductItem = props => {
  const { product } = props;
const navigate = useNavigate();
  return (
    <div className=" column is-half">
      <div className="box">
        <div className="media" onClick={()=> navigate("/courseDetail")}>
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt={product.shortDesc}
              />
            </figure>
          </div>
          <div className="media-content">
            <b style={{ textTransform: "capitalize" }}>
              {product.name}{" "}
            </b>
            <div>{product.shortDesc}</div>
           
            <div className="is-clearfix">
              {/* <button
                className="button is-small is-outlined is-primary   is-pulled-right"
                onClick={() =>
                  props.addToCart({
                    id: product.name,
                    product,
                    amount: 1
                  })
                }
              >
                Add to Cart
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;