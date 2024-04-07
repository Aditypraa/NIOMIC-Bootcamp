import { ProductCard } from "./ProductCard";

export function ProductList({ products, onDeleteProduct }) {
  return (
    <div className="cards">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            onDeleteProduct={onDeleteProduct}
          />
        );
      })}
    </div>
  );
}
