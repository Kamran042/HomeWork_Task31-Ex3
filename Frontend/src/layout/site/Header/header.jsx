import React, { useContext } from "react";
import "./header.css";
import MainContext from "../../../context/context";

const Header = () => {
  const { basket, setBasket } = useContext(MainContext);

  function closeCanvas() {
    const sebetBox = document.querySelector(".sebet__box");
    sebetBox.classList.toggle("basket__canvas__x__none");
  }

  function increaseElementBasket(_id) {
    const target = basket.find((item) => item._id == _id);
    target.count++;
    target.totalPrice += target.price;
    setBasket([...basket]);
    localStorage.setItem("basket", JSON.stringify(basket));
  }

  function decreaseElementBasket(_id) {
    const target = basket.find((item) => item._id == _id);
    if (target.count > 1) {
      target.count--;
      target.totalPrice -= target.price;
    } else {
      const targetOfIndex = basket.indexOf(target);
      basket.splice(targetOfIndex, 1);
    }
    setBasket([...basket]);
    localStorage.setItem("basket", JSON.stringify(basket));
  }

  return (
    <header className="main_menu home_menu">
      <div className="sebet__box basket__canvas__x__none">
        <div className="sebet__box__top">
          <h1>Basket:</h1>
          <div className="sebet__box__top__icon">
            <button onClick={closeCanvas} className="basket__canvas__x">
              <i className="fa-solid fa-x"></i>
            </button>
          </div>
        </div>
        <div className="sebet__box__cards">
          {basket.map((item, index) => (
            <div className="sebet__box__card" key={index}>
              <div className="sebet__box__card__left">
                <img src={item.image} width="70px" height="70px" alt="Bed" />
              </div>
              <div className="sebet__box__card__center">
                <p>{item.totalPrice} $</p>
              </div>
              <div className="sebet__box__card__right">
                <div className="sebet__box__card__right__box">
                  <button
                    onClick={() => {
                      decreaseElementBasket(item._id);
                    }}
                  >
                    -
                  </button>
                  <span>{item.count}</span>
                  <button
                    onClick={() => {
                      increaseElementBasket(item._id);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center m0">
          <div className="col-lg-12 maxWidth">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
              <a className="navbar-brand" href="index.html">
                <img
                  src="https://preview.colorlib.com/theme/aranoz/img/logo.png.webp"
                  alt="logo"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_icon">
                  <i className="fas fa-bars"></i>
                </span>
              </button>
              <div
                className="collapse navbar-collapse main-menu-item navbar__header p-0"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav navbar__header__ul">
                  <li className="nav-item">
                    <a className="nav-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="shop.html"
                      id="navbarDropdown_1"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Shop
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown_1"
                    >
                      <a className="dropdown-item" href="category.html">
                        Shop Category
                      </a>
                      <a className="dropdown-item" href="single-product.html">
                        Product Details
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="pages.html"
                      id="navbarDropdown_3"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown_2"
                    >
                      <a className="dropdown-item" href="login.html">
                        Login
                      </a>
                      <a className="dropdown-item" href="tracking.html">
                        Tracking
                      </a>
                      <a className="dropdown-item" href="checkout.html">
                        Product Checkout
                      </a>
                      <a className="dropdown-item" href="cart.html">
                        Shopping Cart
                      </a>
                      <a className="dropdown-item" href="confirmation.html">
                        Confirmation
                      </a>
                      <a className="dropdown-item" href="elements.html">
                        Elements
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="blog.html"
                      id="navbarDropdown_2"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown_2"
                    >
                      <a className="dropdown-item" href="blog.html">
                        Blog
                      </a>
                      <a className="dropdown-item" href="single-blog.html">
                        Single Blog
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="header_icon d-flex header__right">
                <a id="search_1" href="javascript:void(0)">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a href="">
                  <i className="fa-regular fa-heart"></i>
                </a>
                <div className="dropdown cart">
                  <a className="sebet_a" onClick={closeCanvas}>
                    <i className="fas fa-cart-plus"></i>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div
        className="search_input"
        id="search_input_box"
        style={{ display: "none" }}
      >
        <div className="container">
          <form className="d-flex justify-content-between search-inner">
            <input
              type="text"
              className="form-control"
              id="search_input"
              placeholder="Search Here"
            />
            <button type="submit" className="btn"></button>
            <span
              className="ti-close"
              id="close_search"
              title="Close Search"
            ></span>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
