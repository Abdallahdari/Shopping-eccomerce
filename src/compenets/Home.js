import Navbar from "./navbar";
import Footer from "./footer";
import Product from "./product";
import Cart from "./Cart";
import Stars from "./stars";
import { useState } from "react";
function Home() {
  const [showCart, SetShowCart] = useState(false);
  const [items, SetItems] = useState([]);
  function Saving(item) {
    SetItems((previous) => [...previous, item]);
  }
  function showCartt() {
    SetShowCart((show) => !show);
  }
  return (
    <div>
      <Navbar showCartt={showCartt} />

      <div className="contanier mx-auto xl:max-w-[1200px] relative ">
        {showCart && <Cart maxRating={5} items={items} />}{" "}
        <div className="my-16">
          <ul className="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4  md:place-items-center sm:grid-cols-2 sm:place-items-center	">
            {Product.map((product, index) => (
              <Items
                photo={product.photo}
                price={product.price}
                Saving={Saving}
                maxRating={5}
              />
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Items({ photo, price, Saving, maxRating }) {
  const [image, setImage] = useState(photo);
  const [Pricee, setPrices] = useState(price);
  function HandleButton(e) {
    e.preventDefault();
    const NewItems = {
      image,
      Pricee,
    };
    Saving(NewItems);
  }
  return (
    <>
      <li className="cursor-pointer group bg-slate-400 rounded-md overflow-hidden my-4 ">
        <img
          value={image}
          onChange={(e) => setImage(e.target.value)}
          src={photo}
          alt=""
          className="group-hover:scale-105  transition duration-200"
        />
        <div className="py-2 px-3">
          <p
            value={Pricee}
            onChange={(e) => setPrices(e.target.value)}
            className="group-hover:text-gray-500 transition duration-200 my-3"
          >
            ${price}
          </p>
          <Stars maxRating={maxRating} />
          <button
            onClick={HandleButton}
            className="px-3 py-2 bg-blue-500  mt-2 rounded-md hover:bg-slate-50 transition duration-200"
          >
            Add to the cart{" "}
          </button>
        </div>
      </li>
    </>
  );
}
export default Home;
