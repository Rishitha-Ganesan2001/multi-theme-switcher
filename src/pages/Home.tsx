import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center p-8 text-xl">Loading products...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        
      {products.map((product) => (
        <div
          key={product.id}
          className=" text-black dark:text-white border rounded p-4 shadow-md hover:shadow-lg transition"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-40 object-contain mb-4"
          />
          <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
            {product.description}
          </p>
          {/* <div className={`text-sm mb-2 ${theme === 'light' ? 'text-black' : 'mt-2 font-bold text-blue-700 dark:text-yellow-300`}>${product.price}</div> */}
          <p
            className={`text-sm mb-2 ${
              theme === "light"
                ? "text-black"
                : theme === "dark"
                ? "text-yellow-400"
                : "text-purple-900"
            }`}
          >
            ${product.price}
          </p>
        </div>
      ))}
    </div>
  );
};
export default Home;
