import { BiArrowBack } from "react-icons/bi";
import useCartStore from "../../../hooks/useCartStore";
import CartItemCheckout from "../../../components/cartItemCheckout";
import { NavLink } from "react-router-dom";

export default function Checkout() {
  const cart = useCartStore((state) => state.cart);
  const totalCartItems = cart.reduce((total, item) => total + (item.price ?? 0), 0);
  const taxes = parseFloat((totalCartItems * 0.1).toFixed(2));  // 10% de imposto
  const totalCartWithTaxes = parseFloat((totalCartItems + taxes).toFixed(2));

  return (
    <div className="min-w-screen min-h-screen bg-gray-50 py-5">
      <div className="px-5">
        <div className="mb-2">
            <NavLink to="/productstocard" className="flex items-center gap-2 focus:outline-none hover:underline text-gray-500 text-sm">
          <a href="#" className="flex items-center gap-2 focus:outline-none hover:underline text-gray-500 text-sm">
            <i className="mdi mdi-arrow-left text-gray-400"></i> <BiArrowBack /> Back
          </a>
          </NavLink>
        </div>
        <div className="mb-2">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-600">Checkout.</h1>
        </div>
        <div className="mb-5 text-gray-400">
          <a href="#" className="focus:outline-none hover:underline text-gray-500">Home</a> /{" "}
          <a href="#" className="focus:outline-none hover:underline text-gray-500">Cart</a> /{" "}
          <span className="text-gray-600">Checkout</span>
        </div>
      </div>

      <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
        <div className="w-full">
          <div className="-mx-3 md:flex items-start">
              <div className="px-3 md:w-7/12 lg:pr-10">
                {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-20">Your cart is empty.</p>
                ) : (
                <>
                    {cart.map((item, index) => (
                    <CartItemCheckout
                        key={index}
                        name={item.name}
                        image={item.image || "https://via.placeholder.com/50"}
                        price={item.price || 0}
                        quantity={item.quantity}
                    />
                ))}
                </>
                )}
              {/* Discount */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="-mx-2 flex items-end justify-end">
                  <div className="flex-grow px-2 lg:max-w-xs">
                    <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Discount code</label>
                    <input
                      className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="XXXXXX"
                      type="text"
                    />
                  </div>
                  <div className="px-2">
                    <button className="block w-full max-w-xs mx-auto border border-transparent bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">
                      APPLY
                    </button>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                <div className="w-full flex mb-3 items-center">
                  <div className="flex-grow">
                    <span className="text-gray-600">Subtotal</span>
                  </div>
                  <div className="pl-3">
                    <span className="font-semibold">${totalCartItems}</span>
                  </div>
                </div>
                <div className="w-full flex items-center">
                  <div className="flex-grow">
                    <span className="text-gray-600">Taxes (GST)</span>
                  </div>
                  <div className="pl-3">
                    <span className="font-semibold">${taxes}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                <div className="w-full flex items-center">
                  <div className="flex-grow">
                    <span className="text-gray-600"></span>
                  </div>
                  <div className="pl-3">
                    <span className="font-semibold text-gray-400 text-sm">AUD</span>{" "}
                    <span className="font-semibold">${totalCartWithTaxes}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Payment */}
            <div className="px-3 md:w-5/12">
              {/* Contact */}
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-3 items-center">
                  <div className="w-32">
                    <span className="text-gray-600 font-semibold">Contact</span>
                  </div>
                  <div className="flex-grow pl-3">
                    <span>Scott Windon</span>
                  </div>
                </div>
                <div className="w-full flex items-center">
                  <div className="w-32">
                    <span className="text-gray-600 font-semibold">Billing Address</span>
                  </div>
                  <div className="flex-grow pl-3">
                    <span>123 George Street, Sydney, NSW 2000 Australia</span>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                <div className="w-full p-3 border-b border-gray-200">
                  <div className="mb-5">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        className="form-radio h-5 w-5 text-indigo-500"
                        name="payment"
                        defaultChecked
                      />
                      <img
                        src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                        alt="Card"
                        className="h-6 ml-3"
                      />
                    </label>
                  </div>

                  {/* Card Details */}
                  <div className="mb-3">
                    <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Name on card</label>
                    <input
                      className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="John Smith"
                      type="text"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Card number</label>
                    <input
                      className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="0000 0000 0000 0000"
                      type="text"
                    />
                  </div>

                  <div className="mb-3 -mx-2 flex items-end">
                    <div className="px-2 w-1/4">
                      <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Expiration date</label>
                      <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                        {["01","02","03","04","05","06","07","08","09","10","11","12"].map(month => (
                          <option key={month} value={month}>{month}</option>
                        ))}
                      </select>
                    </div>
                    <div className="px-2 w-1/4">
                      <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                        {["2025","2026","2027","2028","2029"].map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                    <div className="px-2 w-1/4">
                      <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Security code</label>
                      <input
                        className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="000"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                {/* Paypal Option */}
                <div className="w-full p-3">
                  <label className="flex items-center cursor-pointer">
                    <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="payment" />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                      alt="Paypal"
                      width="80"
                      className="ml-3"
                    />
                  </label>
                </div>
              </div>

              {/* Pay Now */}
              <div>
                <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold">
                  <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-5">
        <div className="text-center text-gray-400 text-sm">
          <a
            href="https://www.buymeacoffee.com/scottwindon"
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none underline text-gray-400"
          >
            <i className="mdi mdi-beer-outline"></i> Buy me a beer and help support open-resource
          </a>
        </div>
      </div>
    </div>
  );
}
