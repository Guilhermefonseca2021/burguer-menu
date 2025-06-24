import { FiShoppingBag } from "react-icons/fi";
import useCartStore from "../hooks/useCartStore";
import { useState } from "react";
import CartModal from "./cartModal";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="flex items-center justify-between w-full px-6 py-4 bg-white shadow-md relative">
      <h1 className="text-2xl font-bold text-gray-800">Burguer menew</h1>
      <div className="flex items-center space-x-4 relative">
        <button
          onClick={() => setShowCart(!showCart)}
          className="relative z-40"
          aria-label="Toggle cart"
        >
          <FiShoppingBag className="h-6 w-6 text-gray-600 hover:text-pink-500 transition" />
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {totalItems > 0 ? totalItems : 0}
          </span>
        </button>

        {showCart && (
          <div
            className="fixed top-16 right-4 z-50 w- max-w-sm bg-white shadow-lg rounded-lg p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center">Your cart is empty.</p>
            ) : (
              <>
                <ul className="space-y-4 max-h-80 overflow-y-auto">
                  {cart.map((item, index) => (
                    <li key={index} className="border-b border-gray-200 pb-2">
                      <CartModal
                        id={index}
                        name={item.name}
                        image={item.image || ""}
                        quantity={item.quantity}
                        price={item.price || 0}
                      />
                    </li>
                  ))}
                </ul>

                <div className="mt-4 space-y-2 text-center">
                  <a
                    href="#"
                    className="block rounded-sm border border-gray-600 px-5 py-2 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
                  >
                    View my cart ({totalItems})
                  </a>
                  <NavLink to="/checkout">
                  <a
                    href="#"
                    className="block rounded-sm bg-gray-700 px-5 py-2 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                  </a>
                  </NavLink>
                  <button onClick={() => setShowCart(false)} className="w-full">
                  <a
                    href="#"
                    className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
                  >
                    Continue shopping
                  </a>
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
