import { create } from 'zustand';

interface CartProduct {
  name: string;
  description?: string;
  price?: number;
  image?: string;
  quantity: number;
}

interface ProductStoreState {
  cart: CartProduct[];
  setCartProducts: (product: CartProduct) => void;
  removeAllProducts: () => void;
  removeThisProduct?: (id: number) => void;
}

const useCartStore = create<ProductStoreState>((set) => ({
  cart: [],
  setCartProducts: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),
  removeAllProducts: () => set({ cart: [] }),
  removeThisProduct(id) {
    set((state) => ({
      cart: state.cart.filter((_, index) => index !== id),
    }));
  },
}));

export default useCartStore;
