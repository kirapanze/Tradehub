import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard.jsx";

export default function App() {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("Loading products...");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setMessage(data.length ? "" : "No products available yet.");
      })
      .catch((error) => setMessage(error.message));
  }, []);

  return (
    <main className="container">
      <h1>Korea-Africa TradeHub</h1>
      <p>Demo Korean products for African buyers.</p>
      {message && <p role="status">{message}</p>}
      <section className="product-grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </section>
    </main>
  );
}