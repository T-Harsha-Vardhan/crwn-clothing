import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import ProductCard from "../product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { productsList: products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
