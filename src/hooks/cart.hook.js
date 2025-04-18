import { CartService } from "../service/cart.service";

const useCart = () => {
  const loadCartCrochets = async () => {
    try {
      const response = await CartService.list();
      return response;
    } catch (error) {
      return [];
    }
  };

  const addToCart = async (crochetId, sizeId, quantity, currency, color) => {
    try {
      const cartItem = await CartService.create(
        crochetId,
        sizeId,
        quantity,
        currency,
        color
      );
      console.log("Crochet Added to Cart Successfully!");
      return cartItem;
    } catch (error) {
      console.error("Crochet was not added!", error);
    }
  };

  const removeCrochet = async (crochetId) => {
    try {
      const response = await CartService.remove(crochetId);
      console.log("response: ", response);
      const { success } = response.data;
      if (success) {
        console.log("Crochet Removed from Cart Successfully!");
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Crochet was not removed!", error);
      return false;
    }
  };

  const clearCrochet = async () => {
    try {
      await CartService.clear();
      console.log("Cart Cleared Successfully!");
    } catch (error) {
      console.error("Cart was not removed!");
    }
  };

  const getCartTotal = (cartItems) => {
    const total = cartItems.reduce((prev, curr) => {
      return prev + curr.total;
    }, 0);
    return total;
  };
  const getCartQuantity = (cartItems) => {
    const totalQtty = cartItems.reduce((prev, curr) => {
      return prev + curr.quantity;
    }, 0);
    return totalQtty;
  };
  const getCartItemCount = (cartItems) => {
    const totalCount = cartItems.reduce((prev, curr) => {
      return prev + curr.count;
    }, 0);
    return totalCount;
  };

  return {
    loadCartCrochets,
    addToCart,
    removeCrochet,
    clearCrochet,
    getCartTotal,
    getCartQuantity,
    getCartItemCount,
  };
};

export { useCart };
