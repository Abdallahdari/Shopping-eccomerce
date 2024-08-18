function Footer() {
  return (
    <div className="bg-slate-950">
      <div className="container mx-auto xl:max-w-[1200px]">
        <div className="grid grid-cols-4 gap-10 py-10 px-4">
          <div className="grid-1">
            <h1 className="mb-4 text-3xl font-semibold">Exclusive</h1>
            <h2 className="text-xl mb-3">Subscripe</h2>
            <p className="text-xs mb-3">Get 10% off your first order</p>
            <div className="flex items-center  relative">
              <input
                type="text"
                required
                className="py-1 w-full px-3 outline-none rounded-md"
              ></input>
              <svg
                className="absolute fill-[#e8eaed] right-3 hover:cursor-pointer hover:fill-slate-500 transition duration-200  "
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
              >
                <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
              </svg>
            </div>
          </div>
          <div>
            <h1 className="mb-4 text-xl font-semibold">Support</h1>
            <address className="not-italic	">
              <p>111 Bijoy sarani,Dhaka,</p>
              <p>DH 1515, Bangladesh</p>
            </address>
            <div className="flex flex-col gap-2 mt-3">
              <a
                href=""
                className="hover:text-slate-500 hover:underline transition duration-200"
              >
                exclusive@gmail.com
              </a>
              <a
                href=""
                className="hover:text-slate-500 hover:underline transition duration-200"
              >
                +88015-88888-9999
              </a>
            </div>
          </div>
          <div>
            {" "}
            <h1 className="mb-4 text-xl font-semibold">Account</h1>
            <div className="flex flex-col gap-4 ">
              <a
                href=""
                className="hover:text-slate-500 transition hover:underline duration-200"
              >
                My Account
              </a>
              <a
                href=""
                className="hover:text-slate-500 transition hover:underline duration-200"
              >
                Login/Register
              </a>
              <a
                href=""
                className="hover:text-slate-500 transition hover:underline duration-200"
              >
                Cart
              </a>
              <a
                href=""
                className="hover:text-slate-500 transition hover:underline duration-200 "
              >
                Wishlist
              </a>
            </div>
          </div>
          <div>
            {" "}
            <h1 className="mb-4 text-xl font-semibold">Quick Link</h1>
            <div className="flex flex-col gap-4 ">
              <a
                href=""
                className="hover:text-slate-500 transition hover:underline duration-200"
              >
                Privacy Policy{" "}
              </a>
              <a
                href=""
                className="hover:text-slate-500 transition hover:underline duration-200"
              >
                Terms Of Use{" "}
              </a>
              <a
                href=""
                className="hover:text-slate-500 transition hover:underline duration-200"
              >
                FAQ{" "}
              </a>
              <a
                href=""
                className="hover:text-slate-500 transition hover:underline duration-200 "
              >
                Contact{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
