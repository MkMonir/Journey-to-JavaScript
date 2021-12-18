const ShoppingCart = (function () {
  const shippingCost = 10;
  const cart = [];
  const totalPrice = 234;
  const totalQuantity = 60;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();
ShoppingCart.addToCart('apple', 5);
ShoppingCart.addToCart('mango', 2);
console.log(ShoppingCart);
// console.log(ShoppingCart.shippingCost);
// console.log(ShoppingCart.orderStock('lol', 5));
