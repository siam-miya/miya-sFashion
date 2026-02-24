import { useNavigate } from "react-router";

const Cart = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  if (!cartItems || cartItems.length === 0)
    return (
      <div className="p-6">
        <h1 className="text-2xl mb-6 text-center font-extrabold">
          Cart Items
        </h1>
        <p className="text-center font-extrabold">No items in cart</p>
      </div>
    );

  const increaseQuantity = (id) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

  const decreaseQuantity = (id) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );

  const handleOrderNow = (item) => {
    navigate("/checkout", { state: { product: item } });
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + parseInt(item.price.replace(/\D/g, "")) * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl mb-6 text-center font-extrabold">Cart Items</h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 border p-4 mb-4 rounded"
        >
          <img src={item.image} className="w-16 h-16" />
          <div className="flex-1">
            <h2 className="font-bold">{item.name}</h2>
            <p className="text-green-600 font-semibold">
              {parseInt(item.price.replace(/\D/g, "")) * item.quantity} BDT
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => decreaseQuantity(item.id)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => increaseQuantity(item.id)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>

          <button
            onClick={() => handleOrderNow(item)}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Order Now
          </button>
        </div>
      ))}

      <h2 className="text-xl font-bold text-right mt-4">
        Total: {totalPrice} BDT
      </h2>
    </div>
  );
};

export default Cart;