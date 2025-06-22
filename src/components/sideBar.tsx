import { FiCalendar, FiTrendingUp, FiGift, FiTag } from "react-icons/fi";

export default function SideBar() {
  const menuItems = [
    { label: "Speacial Day", icon: <FiCalendar size={20} /> },
    { label: "Most sellers", icon: <FiTrendingUp size={20} /> },
    { label: "Take two pay 1", icon: <FiGift size={20} /> },
    { label: "All Offers", icon: <FiTag size={20} /> },
  ];

  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <nav className="flex flex-col gap-2 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
          >
            <div className="grid place-items-center mr-4">{item.icon}</div>
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
