import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import imageWaffleMobile from "./assets/images/image-waffle-mobile.jpg";
import cremeBruleeMobile from "./assets/images/image-creme-brulee-mobile.jpg";
import macaronMobile from "./assets/images/image-macaron-mobile.jpg";
import tiramisuMobile from "./assets/images/image-tiramisu-mobile.jpg";
import baklavaMobile from "./assets/images/image-baklava-mobile.jpg";
import meringueMobile from "./assets/images/image-meringue-mobile.jpg";
import cakeMobile from "./assets/images/image-cake-mobile.jpg";
import brownieMobile from "./assets/images/image-brownie-mobile.jpg";
import cottaMobile from "./assets/images/image-panna-cotta-mobile.jpg";
import emptyCartImg from "./assets/images/illustration-empty-cart.svg";
import CartItem from "./components/CartItem";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Waffle with Berries",
      category: "Waffle",
      price: 6.5,
      image: imageWaffleMobile,
    },
    {
      id: 2,
      title: "Vanilla Bean Crème Brûlée",
      category: "Crème Brûlée",
      price: 7.0,
      image: cremeBruleeMobile,
    },
    {
      id: 3,
      title: "Macaron Mix of Five",
      category: "Macaron",
      price: 8.0,
      image: macaronMobile,
    },
    {
      id: 4,
      title: "Classic Tiramisu",
      category: "Tiramisu",
      price: 5.5,
      image: tiramisuMobile,
    },
    {
      id: 5,
      title: "Pistachio Baklava",
      category: "Baklava",
      price: 4.0,
      image: baklavaMobile,
    },
    {
      id: 6,
      title: "Lemon Meringue Pie",
      category: "Pie",
      price: 5.0,
      image: meringueMobile,
    },
    {
      id: 7,
      title: "Red Velvet Cake",
      category: "Cake",
      price: 4.5,
      image: cakeMobile,
    },
    {
      id: 8,
      title: "Salted Caramel Brownie",
      category: "Brownie",
      price: 5.5,
      image: brownieMobile,
    },
    {
      id: 9,
      title: "Vanilla Panna Cotta",
      category: "Panna Cotta",
      price: 6.5,
      image: cottaMobile,
    },
  ]);
  const [cartState, setCartState] = useState({
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

  let totalItems = 0;

  for (let id in cartState) {
    totalItems += cartState[id];
  }

  const decrement = (id) => {
    setCartState((prev) => {
      return { ...prev, [id]: prev[id] - 1 };
    });
  };
  const increment = (id) => {
    setCartState((prev) => {
      return { ...prev, [id]: prev[id] + 1 };
    });
  };

  return (
    <>
      <div className="main_container">
        <h1>Desserts</h1>
        <section className="cards_container">
          <Card
            product={products[0]}
            increment={increment}
            decrement={decrement}
            count={cartState[products[0].id]}
          />
          <Card
            product={products[1]}
            increment={increment}
            decrement={decrement}
            count={cartState[products[1].id]}
          />
          <Card
            product={products[2]}
            increment={increment}
            decrement={decrement}
            count={cartState[products[2].id]}
          />
          <Card
            product={products[3]}
            increment={increment}
            decrement={decrement}
            count={cartState[products[3].id]}
          />
          <Card
            product={products[4]}
            increment={increment}
            decrement={decrement}
            count={cartState[products[4].id]}
          />
          <Card
            product={products[5]}
            increment={increment}
            decrement={decrement}
            count={cartState[products[5].id]}
          />
          <Card
            product={products[6]}
            increment={increment}
            decrement={decrement}
            count={cartState[products[6].id]}
          />
          <Card
            product={products[7]}
            increment={increment}
            decrement={decrement}
            count={cartState[products[7].id]}
          />
          <Card
            product={products[8]}
            increment={increment}
            decrement={decrement}
            count={cartState[products[8].id]}
          />
        </section>
        <section className="cart">
          <h2 className="price">
            Your Cart ({totalItems > 0 ? totalItems : 0})
          </h2>
          {totalItems > 0 ? (
            products.map((p) => {
              return cartState[p.id] > 0 ? (
                <CartItem product={p} count={cartState[p.id]} key={p.id} />
              ) : (
                ""
              );
            })
          ) : (
            <div>
              <img src={emptyCartImg} alt="" />
              <h4 className="h4_bold">Your added items will appear here</h4>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default App;
