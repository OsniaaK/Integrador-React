import style from "./styledProducts.module.css";
import React, { useRef, useEffect, useState } from "react";
import useCart from "../../../../context/useCart";
import useProducts from "../../../../context/useProducts";
const PRODUCTS_PER_PAGE = 8;

let isAdded;
const ProductsSect = () => {
  const { addItem } = useCart();
  const [addedBtnId, setAddedBtnId] = useState(null);

  const {
    count,
    next,
    previus,
    all,
    search,
    setSearch,
    results,
    list,
    category,
    setCategory,
  } = useProducts();

  const [sortType, setSortType] = useState("");

  const handleAddToCart = (product) => {
    addItem(product);
    setAddedBtnId(product.id);
    setTimeout(() => setAddedBtnId(null), 1500);
  };

  const filterCategory = (category = "") => {
    setSearch("");
    setCategory(category);
  };
  const getFinalPrice = (product) => {
    if (product.discount) {
      return product.price * (1 - product.discount / 100);
    }
    return product.price;
  };

  const sortProducts = (products) => {
    if (sortType === "asc") {
      return [...products].sort((a, b) => getFinalPrice(a) - getFinalPrice(b));
    }
    if (sortType === "desc") {
      return [...products].sort((a, b) => getFinalPrice(b) - getFinalPrice(a));
    }
    if (sortType === "popularity") {
      return [...products].sort(
        (a, b) => (b.popularity || 0) - (a.popularity || 0)
      );
    }
    if (sortType === "discounts") {
      return [...products].sort((a, b) => {
        const aHasDiscount = !!a.discount;
        const bHasDiscount = !!b.discount;
        if (aHasDiscount && !bHasDiscount) return -1;
        if (!aHasDiscount && bHasDiscount) return 1;
        return getFinalPrice(a) - getFinalPrice(b);
      });
    }
    return products;
  };

  const baseProducts = search.trim().length > 1 ? results : list;
  const sortedProducts = sortProducts(baseProducts);
  const productsToShow = sortedProducts.slice(0, count);

  const [focusedProduct, setFocusedProduct] = useState(null);
  const focusedRef = useRef(null);

  const handleShowInfo = (product) => {
    setFocusedProduct(product);
  };

  useEffect(() => {
    if (!focusedProduct) return;
    const handleClickOutside = (event) => {
      if (focusedRef.current && focusedRef.current.contains(event.target)) {
        return;
      }
      if (event.target.closest && event.target.closest("button#openInfo")) {
        return;
      }
      setFocusedProduct(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [focusedProduct]);

  useEffect(() => {
    if (focusedProduct) {
      document.body.classList.add("body-blur");
    } else {
      document.body.classList.remove("body-blur");
    }
    return () => document.body.classList.remove("body-blur");
  }, [focusedProduct]);

  return (
    <section id={style.prodsSection}>
      <h1>
        {category == "todos"
          ? "Productos Populares"
          : `Productos de ${category}`}
      </h1>

      <form id={style.filterButtons}>
        <fieldset>
          <button
            type="button"
            className={
              category === "todos" || search.trim().length > 0
                ? style.active
                : ""
            }
            onClick={() => filterCategory("todos")}
          >
            Todos
          </button>
          <button
            type="button"
            className={category === "Ropa" ? style.active : ""}
            onClick={() => filterCategory("Ropa")}
          >
            Ropa
          </button>
          <button
            type="button"
            className={category === "Calzado" ? style.active : ""}
            onClick={() => filterCategory("Calzado")}
          >
            Calzado
          </button>
          <button
            type="button"
            className={category === "Accesorios" ? style.active : ""}
            onClick={() => filterCategory("Accesorios")}
          >
            Accesorios
          </button>
          <button
            type="button"
            className={category === "Deporte" ? style.active : ""}
            onClick={() => filterCategory("Deporte")}
          >
            Deportes
          </button>
        </fieldset>
        <select
          id={style.sortSelect}
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="popularity">Popularidad</option>
          <option value="discounts">Con descuento</option>
          <option value="asc">Precio: menor a mayor</option>
          <option value="desc">Precio: mayor a menor</option>
        </select>
      </form>
      <ul>
        {productsToShow.map((product) => (
          <li key={product.id}>
            <picture>
              <span
                style={{
                  display: product.discount ? "inline" : "none",
                }}
              >
                {product.discount}% OFF
              </span>
              <img src={product.image} alt={product.title} />
            </picture>
            <article>
              <h2>{product.title}</h2>
              <p>
                <span
                  style={
                    product.discount ? { textDecoration: "line-through" } : {}
                  }
                >
                  ${product.price}
                </span>
                {product.discount && (
                  <strong>
                    ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                  </strong>
                )}
              </p>
              <fieldset>
                <button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                  className={addedBtnId === product.id ? `${style.added}` : ""}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                </button>
                <button
                  type="button"
                  id={style.openInfo}
                  onClick={() => handleShowInfo(product)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <line x1="12" x2="12" y1="16" y2="12" />
                    <line x1="12" x2="12.01" y1="8" y2="8" />
                  </svg>
                </button>
              </fieldset>
            </article>
          </li>
        ))}
      </ul>

      {focusedProduct && (
        <dialog ref={focusedRef} id={style.focusedItem}>
          <picture>
            <img src={focusedProduct.image} alt={focusedProduct.title} />
          </picture>
          <strong>
            <h3>{focusedProduct.title}</h3>
            <p>{focusedProduct.description}</p>
          </strong>
        </dialog>
      )}

      <form id={style.pagination}>
        <button
          type="button"
          onClick={previus}
          disabled={count <= PRODUCTS_PER_PAGE}
        >
          Mostrar menos
        </button>
        <button
          type="button"
          onClick={next}
          disabled={
            count >= (search.trim().length > 0 ? results.length : list.length)
          }
        >
          Mostrar más
        </button>
        <button
          type="button"
          onClick={all}
          disabled={
            count >= (search.trim().length > 0 ? results.length : list.length)
          }
        >
          Mostrar todo
        </button>
      </form>
    </section>
  );
};

export default ProductsSect;
