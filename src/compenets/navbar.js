function Navbarr({ showCart, search, setSearch }) {
  const Handle = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  const Links = `hover:underline hover:text-slate-500 transition duration-200`;
  const svg = `  fill-[#e8eaed] hover:fill-slate-500 cursor-pointer transition duration-200`;
  return (
    <div className="text-black dark:text-white">
      <div className="bg-slate-800 py-5">
        <div className="container mx-auto ">
          <div className="flex items-center justify-between">
            <h1>
              <a href="#" className="text-3xl font-semibold ">
                E-commerce
              </a>{" "}
            </h1>
            <form className="w-[50%] flex relative">
              <input
                className="w-full px-5 py-3 rounded-full outline-none  "
                placeholder="Search Product"
                value={search}
                onChange={Handle}
              />
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
            </form>
            <ul className="flex items-center gap-12">
              <li>
                <a href="login.js" className={Links}>
                  Log in
                </a>
              </li>
              <li>
                <a href="/sigup" className={Links}>
                  Sign up
                </a>
              </li>
              <div className="user-and shpping flex items-center gap-12">
                <svg
                  className={svg}
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                >
                  <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                </svg>
                <svg
                  onClick={showCart}
                  className={svg}
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                >
                  <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                </svg>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbarr;
