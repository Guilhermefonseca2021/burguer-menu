import { FiShoppingBag } from "react-icons/fi";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full px-6 py-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">Burguer menew</h1>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <FiShoppingBag className="h-6 w-6 text-gray-600 hover:text-pink-500 transition" />
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            3
          </span>
        </button>
      </div>
    </header>
  );
}
