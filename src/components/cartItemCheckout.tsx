
export default function CartItemCheckout({name, image, price, quantity }: CartProduct) {
  return (
    <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
        <div className="w-full flex items-center">
            <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
            <img
                src={image || "https://via.placeholder.com/50"}
                alt="Product"
            />
            </div>
            <div className="flex-grow pl-3">
            <h6 className="font-semibold uppercase text-gray-600">{name}.</h6>
            <p className="text-gray-400">x {quantity}</p>
            </div>
            <div>
            <span className="font-semibold text-gray-600 text-xl">${price}</span>
            <span className="font-semibold text-gray-600 text-sm">.00</span>
            </div>
        </div>
    </div>
  )
}
