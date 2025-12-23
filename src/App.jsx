import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import imageWaffleMobile from "./assets/images/image-waffle-mobile.jpg";
import imageWaffleTablet from "./assets/images/image-waffle-tablet.jpg";
import imageWaffleDesktop from "./assets/images/image-waffle-desktop.jpg";
import imageWaffleThumbnail from "./assets/images/image-waffle-thumbnail.jpg";
import cremeBruleeMobile from "./assets/images/image-creme-brulee-mobile.jpg";
import cremeBruleeTablet from "./assets/images/image-creme-brulee-tablet.jpg";
import cremeBruleeDesktop from "./assets/images/image-creme-brulee-desktop.jpg";
import cremeBruleeThumbnail from "./assets/images/image-creme-brulee-thumbnail.jpg";
import macaronMobile from "./assets/images/image-macaron-mobile.jpg";
import macaronTablet from "./assets/images/image-macaron-tablet.jpg";
import macaronDesktop from "./assets/images/image-macaron-desktop.jpg";
import macaronThumbnail from "./assets/images/image-macaron-thumbnail.jpg";
import tiramisuMobile from "./assets/images/image-tiramisu-mobile.jpg";
import tiramisuTablet from "./assets/images/image-tiramisu-tablet.jpg";
import tiramisuDesktop from "./assets/images/image-tiramisu-desktop.jpg";
import tiramisuThumbnail from "./assets/images/image-tiramisu-thumbnail.jpg";
import baklavaMobile from "./assets/images/image-baklava-mobile.jpg";
import baklavaTablet from "./assets/images/image-baklava-tablet.jpg";
import baklavaDesktop from "./assets/images/image-baklava-desktop.jpg";
import baklavaThumbnail from "./assets/images/image-baklava-thumbnail.jpg";
import meringueMobile from "./assets/images/image-meringue-mobile.jpg";
import meringueTablet from "./assets/images/image-meringue-tablet.jpg";
import meringueDesktop from "./assets/images/image-meringue-desktop.jpg";
import meringueThumbnail from "./assets/images/image-meringue-thumbnail.jpg";
import cakeMobile from "./assets/images/image-cake-mobile.jpg";
import cakeTablet from "./assets/images/image-cake-tablet.jpg";
import cakeDesktop from "./assets/images/image-cake-desktop.jpg";
import cakeThumbnail from "./assets/images/image-cake-thumbnail.jpg";
import brownieMobile from "./assets/images/image-brownie-mobile.jpg";
import brownieTablet from "./assets/images/image-brownie-tablet.jpg";
import brownieDesktop from "./assets/images/image-brownie-desktop.jpg";
import brownieThumbnail from "./assets/images/image-brownie-thumbnail.jpg";
import cottaMobile from "./assets/images/image-panna-cotta-mobile.jpg";
import cottaTablet from "./assets/images/image-panna-cotta-tablet.jpg";
import cottaDesktop from "./assets/images/image-panna-cotta-desktop.jpg";
import cottaThumbnail from "./assets/images/image-panna-cotta-thumbnail.jpg";
import emptyCartImg from "./assets/images/illustration-empty-cart.svg";
import carbonNeutral from "./assets/images/icon-carbon-neutral.svg";
import orderConfirmedImg from "./assets/images/icon-order-confirmed.svg";
import CartItem from "./components/CartItem";
import ConfirmedCartItem from "./components/ConfirmedCartItem";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Waffle with Berries",
      category: "Waffle",
      price: 6.5,
      images: {
        mobile: imageWaffleMobile,
        tablet: imageWaffleTablet,
        desktop: imageWaffleDesktop,
        thumbnail: imageWaffleThumbnail,
      },
    },
    {
      id: 2,
      title: "Vanilla Bean Crème Brûlée",
      category: "Crème Brûlée",
      price: 7.0,
      images: {
        mobile: cremeBruleeMobile,
        tablet: cremeBruleeTablet,
        desktop: cremeBruleeDesktop,
        thumbnail: cremeBruleeThumbnail,
      },
    },
    {
      id: 3,
      title: "Macaron Mix of Five",
      category: "Macaron",
      price: 8.0,
      images: {
        mobile: macaronMobile,
        tablet: macaronTablet,
        desktop: macaronDesktop,
        thumbnail: macaronThumbnail,
      },
    },
    {
      id: 4,
      title: "Classic Tiramisu",
      category: "Tiramisu",
      price: 5.5,
      images: {
        mobile: tiramisuMobile,
        tablet: tiramisuTablet,
        desktop: tiramisuDesktop,
        thumbnail: tiramisuThumbnail,
      },
    },
    {
      id: 5,
      title: "Pistachio Baklava",
      category: "Baklava",
      price: 4.0,
      images: {
        mobile: baklavaMobile,
        tablet: baklavaTablet,
        desktop: baklavaDesktop,
        thumbnail: baklavaThumbnail,
      },
    },
    {
      id: 6,
      title: "Lemon Meringue Pie",
      category: "Pie",
      price: 5.0,
      images: {
        mobile: meringueMobile,
        tablet: meringueTablet,
        desktop: meringueDesktop,
        thumbnail: meringueThumbnail,
      },
    },
    {
      id: 7,
      title: "Red Velvet Cake",
      category: "Cake",
      price: 4.5,
      images: {
        mobile: cakeMobile,
        tablet: cakeTablet,
        desktop: cakeDesktop,
        thumbnail: cakeThumbnail,
      },
    },
    {
      id: 8,
      title: "Salted Caramel Brownie",
      category: "Brownie",
      price: 5.5,
      images: {
        mobile: brownieMobile,
        tablet: brownieTablet,
        desktop: brownieDesktop,
        thumbnail: brownieThumbnail,
      },
    },
    {
      id: 9,
      title: "Vanilla Panna Cotta",
      category: "Panna Cotta",
      price: 6.5,
      images: {
        mobile: cottaMobile,
        tablet: cottaTablet,
        desktop: cottaDesktop,
        thumbnail: cottaThumbnail,
      },
    },
  ]);
  const [count, setCount] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  });

  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  let totalItems = 0;

  for (let id in count) {
    totalItems += count[id];
  }

  const decrement = (id) => {
    setCount((prev) => {
      return { ...prev, [id]: prev[id] - 1 };
    });
  };
  const increment = (id) => {
    setCount((prev) => {
      return { ...prev, [id]: prev[id] + 1 };
    });
  };
  let cartTotal = 0;
  const cartCalculation = () => {
    products.map((p) => {
      return (cartTotal += count[p.id] * p.price);
    });
  };

  cartCalculation();

  const removeItem = (id) => {
    setCount((prev) => {
      return { ...prev, [id]: 0 };
    });
  };
  return (
    <>
      <div className="main_container">
        <h1 className="text-preset-1">Desserts</h1>
        <section className="cards_container">
          <Card
            product={products[0]}
            increment={increment}
            decrement={decrement}
            count={count[products[0].id]}
          />
          <Card
            product={products[1]}
            increment={increment}
            decrement={decrement}
            count={count[products[1].id]}
          />
          <Card
            product={products[2]}
            increment={increment}
            decrement={decrement}
            count={count[products[2].id]}
          />
          <Card
            product={products[3]}
            increment={increment}
            decrement={decrement}
            count={count[products[3].id]}
          />
          <Card
            product={products[4]}
            increment={increment}
            decrement={decrement}
            count={count[products[4].id]}
          />
          <Card
            product={products[5]}
            increment={increment}
            decrement={decrement}
            count={count[products[5].id]}
          />
          <Card
            product={products[6]}
            increment={increment}
            decrement={decrement}
            count={count[products[6].id]}
          />
          <Card
            product={products[7]}
            increment={increment}
            decrement={decrement}
            count={count[products[7].id]}
          />
          <Card
            product={products[8]}
            increment={increment}
            decrement={decrement}
            count={count[products[8].id]}
          />
        </section>
        <section className="cart">
          <h2 className="cart-title text-preset-2">
            Your Cart ({totalItems > 0 ? totalItems : 0})
          </h2>

          {totalItems > 0 ? (
            <>
              {products.map((p) => {
                return count[p.id] > 0 ? (
                  <CartItem
                    product={p}
                    count={count[p.id]}
                    key={p.id}
                    deleteItem={removeItem}
                  />
                ) : (
                  ""
                );
              })}
              <div className="cart_total">
                <h4>Order total</h4>
                <h2>£{cartTotal.toFixed(2)}</h2>
              </div>
              <div className="carbon_neutral">
                <img src={carbonNeutral} alt="" />
                <h4>
                  This is a <span className="h4_bold">carbon-neutral</span>{" "}
                  delivery
                </h4>
              </div>
              <button>
                <h3 onClick={() => setIsOrderConfirmed(true)}>Confirm Order</h3>
              </button>
            </>
          ) : (
            <div className="empty-cart-default-img-and-text">
              <img className="empty-cart-default-img" src={emptyCartImg} alt="" />
              <h4 className="text-preset-4-bold empty-cart-default-text">Your added items will appear here</h4>
            </div>
          )}
        </section>
        <section>
          {isOrderConfirmed && (
            <div className="overlay">
              <div className="modal">
                <img src={orderConfirmedImg} alt="" />
                <h1>Order Confirmed</h1>
                <h3>We hope you enjoy your food!</h3>
                <div>
                  {products.map((p) => {
                    return (
                      count[p.id] > 0 && (
                        <ConfirmedCartItem
                          product={p}
                          count={count[p.id]}
                          key={p.id}
                        />
                      )
                    );
                  })}
                  <div>
                    <h4>Order Total</h4>
                    <h2>£{cartTotal.toFixed(2)}</h2>
                  </div>
                  <button>
                    <h3 onClick="">Start New Order</h3>
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default App;

//
