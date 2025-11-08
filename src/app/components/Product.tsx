import Image from "next/image";
import { MdAddShoppingCart } from "react-icons/md";

export default function Product() {
  return (
    <div className="product">
      <div className="image_product">
        <Image alt="" src="/iamge_product.png" width={295} height={298} />
      </div>
      <h1 className="product_name">Chodir</h1>
      <div className="raiting">
        <Image alt="" src="/raiting.png" width={150} height={19} />
      </div>
      <div className="product_icon_price">
        <h3 className="product_price">$120</h3>
        <div>
          <MdAddShoppingCart className="product_icon" />
        </div>
      </div>
    </div>
  );
}
