import Stars from "./stars";

function Cart({ items, maxRating }) {
  const total = items.reduce((cur, item) => cur + item.Pricee, 0);
  return (
    <>
      {" "}
      <div className="absolute -right-44 bg-red-500 py-5 px-4 -top-14 w-[700px]">
        <div className="">
          {items.map((el, index) => (
            <div key={index} className="flex items-center gap-4 my-5  ">
              <img src={el.image} alt="" />
              <p>${el.Pricee}</p>
              <Stars maxRating={maxRating} />
            </div>
          ))}
          <div className="flex items-center justify-end ">
            {" "}
            <p className="">${total}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
