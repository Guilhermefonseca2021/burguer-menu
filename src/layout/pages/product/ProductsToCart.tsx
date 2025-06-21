import CardProduct from "../../../components/cardProduct";
import SideBar from "../../../components/sideBar";

export default function ProductsToCart() {
  const products = [
    {
      id: 1,
      name: "Cheeseburguer",
      price: 8.99,
      description: "pão macio, suculento e uma generosa camada de queijo.",
      image: "https://tse4.mm.bing.net/th?id=OIP.mwsAzkT3cHZ83LGMMyXvRAHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 2,
      name: "Mac Burguer",
      price: 12.99,
      description: "queijo, alface, molho especial, picles e cebola.",
      image: "https://tse1.mm.bing.net/th?id=OIP.fwTe7B4fRNiIXrag4DawjAHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 3,
      name: "Spider Burguer",
      price: 15.99,
      description: "duplo, muito bacon, cheddar e molho picante.",
      image: "https://tse3.mm.bing.net/th?id=OIP.3SF6k9boK0QfbWzS-HtzXAHaE7&pid=Api&P=0&h=180",
    },
    {
      id: 4,
      name: "Mr. Burguer",
      price: 24.99,
      description: "Três camadas de carne, queijo, bacon crocante.",
      image: "https://tse2.mm.bing.net/th?id=OIP.Eu9KH3sB_bmomkiY_umZeQHaE7&pid=Api&P=0&h=180",
    },
  ];

  return (
    <div className="flex min-h-screen">
      <SideBar />

      <main className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Products To Cart</h1>
        <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
        <CardProduct
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
        />
        ))}
        </div>
      </main>
    </div>
  );
}
