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
}

const useCartStore = create<ProductStoreState>((set) => ({
  cart: [],
  setCartProducts: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),
  removeAllProducts: () => set({ cart: [] }),
}));

export default useCartStore;
