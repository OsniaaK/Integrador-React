import style from "./styledHeader.module.css";
import useCart from "../../context/useCart.jsx";
import { CartGeneral } from "../Cart/Cart.jsx";
import { NavLink, useNavigate } from "react-router";
import useProducts from "../../context/useProducts.jsx";
import { useRef, useState, useEffect } from "react";

const GeneralHeader = () => {
  const { items, toggle } = useCart();
  const { search, setSearch, setCategory } = useProducts();
  const navigate = useNavigate();
  const cartButtonRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setCategory("todos");
    setSearch(e.target.search.value);
    navigate("/products");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setCategory("todos");
      setSearch(e.target.value);
      navigate("/products");
    }
  };

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.body.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.body.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("body-blur");
    } else {
      document.body.classList.remove("body-blur");
    }

    return () => document.body.classList.remove("body-blur");
  }, [isMenuOpen]);

  return (
    <>
      <header id={style.mainHeader}>
        <h1>LAMM</h1>
        <nav className={style.desktopNav}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : `${style.link}`
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : `${style.link}`
            }
            to={"/products"}
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : `${style.link}`
            }
            to={"/about"}
          >
            About Us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : `${style.link}`
            }
            to={"/contact"}
          >
            Contact
          </NavLink>
        </nav>
        <form id={style.searchHeader} onSubmit={handleSearch}>
          <input
            type="search"
            id="search"
            defaultValue={search}
            onKeyDown={handleKeyDown}
            placeholder="Buscar..."
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </form>
        <form id={style.userHeader}>
          <button
            ref={cartButtonRef}
            id={`${style.btnCart} `}
            type="button"
            onClick={toggle}
          >
            <small
              id="count-cart-header"
              className={items.length > 0 ? "active" : "unActive"}
            >
              {items.reduce((a, item) => (a += item.cantidad), 0)}
            </small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </button>
          <button 
            type="button"
            ref={buttonRef}
            id={style.btnMenu}
            onClick={toggleMenu}
            className={isMenuOpen ? style.menuOpen : ""}
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
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
          </button>
        </form>
      </header>
      <nav ref={menuRef} className={`${style.mobileNav} ${isMenuOpen ? style.active : ""}`}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : `${style.link}`
          }
          to={"/"}
          onClick={handleNavClick}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : `${style.link}`
          }
          to={"/products"}
          onClick={handleNavClick}
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : `${style.link}`
          }
          to={"/about"}
          onClick={handleNavClick}
        >
          About Us
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : `${style.link}`
          }
          to={"/contact"}
          onClick={handleNavClick}
        >
          Contact
        </NavLink>
      </nav>
      <CartGeneral cartButtonRef={cartButtonRef} className="active" />
    </>
  );
};

export default GeneralHeader;
