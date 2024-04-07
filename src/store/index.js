import {create} from 'zustand';

//1. Create the store
//2. Create products and cart
//3. Get the data and store it as products
//4. Add cart CRUD:
//....4.1 Add a product to the cart
//....4.2 Clear the cart
//....4.3 Get cart total
//....4.4 Remove a product from the cart

const useProductStore = create((set, get) => ({ 
  products: [],
  cart: [],
  cartTotal: 0,
  addToCart: (id) => {
    // console.log("Adding product to cart. Product Id", id)
    set((state) => {
      // console.log("Current state", state);
      //Getting the current product using the id passed in 
      const product = state.products.find(currentProduct => id === currentProduct.id);
      // console.log('Product to add', product)

      if(!product) {
        return state;
      }
      //Checking if the product exists in the cart
      const productInCartIndex = state.cart.findIndex(currentProduct => id === currentProduct.id);

      //If item doesn't exist, add quantity field to product
      //otherwise increase quantity.
      if(productInCartIndex === -1) {
      // Initialize quantity if it doesn't exist
      const updatedCart = [...state.cart, {...product, quantity: 1}];
        return {
          ...state, 
          cart: updatedCart};
      } 
      //otherwise increase quantity
      // state.cart[productInCartIndex].quantity += 1;
      // return {...state};
      const updatedCart = state.cart.map((item, index) => {
        if(index === productInCartIndex) {
          return {...item, quantity: item.quantity + 1};
        }
        return item;
      });
      return {...state, cart: updatedCart};
    });
  },
  clearCart: () => set(() => ({ cart: []})),
  deleteProductFromCart: (id) => 
    set((state) => {
      const updatedCart = state.cart.filter((product) => product.id !== id);
      return {...state, cart: updatedCart};
    }),
  getCartTotal: () => 
    get().cart.reduce((total, product) => {
      const currentPrice = product.quantity * product.price;
      total += currentPrice;
      return total;
    }, 0),
    getTotalNumberOfItemsInCart: () => get.call().cart.reduce((total, product) => {
      total += product.quantity;
      return total;
    }, 0),
})); 

export default useProductStore;
