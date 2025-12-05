import "./App.css";
import cartIcon from "/assets/images/icon-add-to-cart.svg";

function App() {
  return (
    <>
      <div className="main_container">
        <h1>Desserts</h1>
        <section className="cards_container">
          <div className="card">
            <div className="img_wrapper">
              <img className="dessert_img" src="./assets/images/image-waffle-mobile.jpg" alt="" />
              <button>
                <img src={cartIcon} alt="" />
                <span className="h4_bold">Add to Cart</span>
              </button>
            </div>
            <h4>Waffle</h4>
            <h3>Waffle with Berries</h3>
            <h3 className="price">£6.50</h3>
          </div>
          <div className="card">
            <div className="img_wrapper">
              <img className="dessert_img" src="./assets/images/image-creme-brulee-mobile.jpg" alt="" />
              <button>
                <img src={cartIcon} alt="" />
                <span className="h4_bold">Add to Cart</span>
              </button>
            </div>
            <h4>Crème Brûlée</h4>
            <h3>Vanilla Bean Crème Brûlée</h3>
            <h3 className="price">£7.00</h3>
          </div>
          <div className="card">
            <div className="img_wrapper">
              <img className="dessert_img" src="./assets/images/image-macaron-mobile.jpg" alt="" />
              <button>
                <img src={cartIcon} alt="" />
                <span className="h4_bold">Add to Cart</span>
              </button>
            </div>
            <h4>Macaron</h4>
            <h3>Macaron Mix of Five</h3>
            <h3 className="price">£8.00</h3>
          </div>
          <div className="card">
            <div className="img_wrapper">
              <img className="dessert_img" src="./assets/images/image-tiramisu-mobile.jpg" alt="" />
              <button>
                <img src={cartIcon} alt="" />
                <span className="h4_bold">Add to Cart</span>
              </button>
            </div>
            <h4>Tiramisu</h4>
            <h3>Classic Tiramisu</h3>
            <h3 className="price">£5.50</h3>
          </div>
          <div className="card">
            <div className="img_wrapper">
              <img className="dessert_img" src="./assets/images/image-baklava-mobile.jpg" alt="" />
              <button>
                <img src={cartIcon} alt="" />
                <span className="h4_bold">Add to Cart</span>
              </button>
            </div>
            <h4>Baklava</h4>
            <h3>Pistachio Baklava</h3>
            <h3 className="price">£4.00</h3>
          </div>
          <div className="card">
            <div className="img_wrapper">
              <img className="dessert_img" src="./assets/images/image-meringue-mobile.jpg" alt="" />
              <button>
                <img src={cartIcon} alt="" />
                <span className="h4_bold">Add to Cart</span>
              </button>
            </div>
            <h4>Pie</h4>
            <h3>Lemon Meringue Pie</h3>
            <h3 className="price">£5.00</h3>
          </div>
          <div className="card">
            <div className="img_wrapper">
              <img className="dessert_img" src="./assets/images/image-cake-mobile.jpg" alt="" />
              <button>
                <img src={cartIcon} alt="" />
                <span className="h4_bold">Add to Cart</span>
              </button>
            </div>
            <h4>Cake</h4>
            <h3>Red Velvet Cake</h3>
            <h3 className="price">£4.50</h3>
          </div>
          <div className="card">
            <div className="img_wrapper">
              <img className="dessert_img" src="./assets/images/image-brownie-mobile.jpg" alt="" />
              <button>
                <img src={cartIcon} alt="" />
                <span className="h4_bold">Add to Cart</span>
              </button>
            </div>
            <h4>Brownie</h4>
            <h3>Salted Caramel Brownie</h3>
            <h3 className="price">£5.50</h3> 
          </div>
          <div className="card">
            <div className="img_wrapper">
              <img className="dessert_img" src="./assets/images/image-panna-cotta-mobile.jpg" alt="" />
              <button>
                <img src={cartIcon} alt="" />
                <span className="h4_bold">Add to Cart</span>
              </button>
            </div>
            <h4>Panna Cotta</h4>
            <h3>Vanilla Panna Cotta</h3>
            <h3 className="price">£6.50</h3> 
          </div>
        </section>
        <section className="cart">
          <h2 className="price">Your Cart (0)</h2>
          <img src="./assets/images/illustration-empty-cart.svg" alt="" />
          <h4 className="h4_bold">Your added items will appear here</h4>
        </section>
      </div>
    </>
  );
}

export default App;
