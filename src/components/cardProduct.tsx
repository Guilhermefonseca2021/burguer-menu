interface CardProps {
  name: string;
  description?: string;
  price?: number;
  image?: string;
}

export default function CardProduct({ name, description, price, image }: CardProps) {
  return (
    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
      <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img
          src={image || "https://via.placeholder.com/300x200"}
          alt={name}
        />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
            {name}
          </h5>

          {price && (
            <span className="text-lg font-bold text-pink-500">
              ${price.toFixed(2)}
            </span>
          )}
        </div>

        {description && (
          <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
            {description}
          </p>
        )}
      </div>

      <div className="pt-2 mb-2">
        <button
            className="inline-block cursor-pointer w-full p-3 rounded-lg bg-blue-500 px-6 py-3 text-center text-sm font-bold uppercase leading-normal text-white transition-all hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700"
          type="button"
          onClick={() => alert(`Added ${name} to cart!`)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
