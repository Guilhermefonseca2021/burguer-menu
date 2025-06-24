import useCartStore from "../hooks/useCartStore";

export default function CartModal({id, name, quantity, price, image}: CartProduct) {
  const removeThisProduct = useCartStore((state) => state.removeThisProduct);
    
  return (
    <div
        className="relative w-screen max-w-fit border border-gray-600 bg-gray-100 px-2 py-4 sm:px-6 lg:px-4"
        aria-modal="true"
        role="dialog"
        >
        <button onClick={() => removeThisProduct && removeThisProduct(id!)} className="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
            <span className="sr-only">Close cart</span>

            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        <div className="mt-4 space-y-6">
            <ul className="space-y-4">
            <li className="flex items-center gap-4">
                <img
                src={image || "https://via.placeholder.com/50"}
                alt=""
                className="size-16 rounded-sm object-cover"
                />

                <div>
                <h3 className="text-sm text-gray-900">{name}</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                    <dt className="inline">quantity:</dt>
                    <dd className="inline">{quantity}</dd>
                    </div>

                    <div>
                    <dt className="inline">price: {price}</dt>
                    <dd className="inline">approved</dd>
                    </div>
                </dl>
                </div>
            </li>
            </ul>
        </div>
    </div>
  )
}
