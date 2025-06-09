import { createContext, useContext, useState, useEffect } from "react";
import products from "../data/products.js";
const Catalog = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [list, setList] = useState(products);
  const [results, setResults] = useState(products);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(8);
  const [category, setCategory] = useState("todos");

  const next = () => setCount((count) => Math.min(count + 8, products.length));
  const previus = () =>
    setCount((count) => Math.max(count - 8, 8));
  const all = () => setCount(products.length);

  useEffect(() => {
    const filterSearch = () => {
      if (search.trim().length < 2){
        setSearch("")
        setCount(8)
          return setResults(products);
      }
      const filtered = products.filter((product) =>
        product.search.includes(search.toLowerCase())
      );
      setResults(filtered);
      setCount(filtered.length > 8 ? 8 : filtered.length);
    };
    filterSearch();

    const filterCategory = () => {
      if (category == "todos") {
        setCount(8)
          return setList(products);
      } 
      const filtered = products.filter(
        (product) => product.category === category
      );
    
      setList(filtered);
      setCount(filtered.length > 8 ? 8 : filtered.length);
    };
    
    filterCategory();
  }, [search, category]);

  return (
    <Catalog.Provider
      value={{
        list,
        results,
        search,
        setSearch,
        count,
        next,
        previus,
        all,
        category,
        setCategory,
      }}
    >
      {children}
    </Catalog.Provider>
  );
};

const useProducts = () => useContext(Catalog);
export default useProducts;
