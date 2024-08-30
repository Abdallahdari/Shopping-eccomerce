import Footer from "./footer";
import Product from "./product";
import Cart from "./Cart";
import Stars from "./stars";
import Navbarr from "./navbar";
import { useState } from "react";

function Home() {
  const [showCart, setShowCart] = useState(false);
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  function saveItem(item) {
    setItems((previous) => [...previous, item]);
  }

  function toggleCart() {
    setShowCart((show) => !show);
  }
  const filteredProducts = Product?.filter(
    (el) => el.Name && el.Name.toLowerCase().includes(search.toLowerCase())

    // (el) => el.Name && el.Name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbarr search={search} setSearch={setSearch} showCart={toggleCart} />

      <div className="container mx-auto xl:max-w-[1200px] relative">
        {showCart && <Cart maxRating={5} items={items} />}
        <div className="my-16">
          <ul className="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 md:place-items-center sm:grid-cols-2 sm:place-items-center">
            {filteredProducts.map((product, index) => (
              <Items
                key={product.id} // Add a unique key for each item
                photo={product.photo}
                price={product.price}
                saveItem={saveItem}
                maxRating={5}
                Name={product.Name}
              />
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Items({ photo, price, saveItem, maxRating, Name }) {
  function handleButton(e) {
    e.preventDefault();
    const newItem = {
      image: photo,
      price,
    };
    saveItem(newItem);
  }

  return (
    <li className="cursor-pointer group bg-slate-400 rounded-md overflow-hidden my-4">
      <img
        src={photo}
        alt={Name}
        className="group-hover:scale-105 transition duration-200"
      />
      <div className="py-2 px-3">
        <p className="group-hover:text-gray-500 transition duration-200 my-3">
          ${price}
        </p>
        <p>{Name}</p>
        <Stars maxRating={maxRating} />
        <button
          onClick={handleButton}
          className="px-3 py-2 bg-blue-500 mt-2 rounded-md hover:bg-slate-50 transition duration-200"
        >
          Add to the cart
        </button>
      </div>
    </li>
  );
}

export default Home;
