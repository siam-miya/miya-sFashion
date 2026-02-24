import { useLocation } from "react-router";
import { useState } from "react";

const Checkout = () => {
  const location = useLocation();
  const product = location.state?.product;

  const [quantity, setQuantity] = useState(product?.quantity || 1);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  if (!product) return <h2 className="text-center mt-10">No product selected</h2>;

  const totalPrice = parseInt(product.price.replace(/\D/g, "")) * quantity;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !phone || !address) {
      setAlertType("error");
      setAlertMessage("Please fill all the fields");
      return;
    }
    setAlertType("success");
    setAlertMessage("Thank you for your order!");
    setFullName("");
    setPhone("");
    setAddress("");
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {alertMessage && (
        <div
          className={`p-4 mb-4 rounded ${
            alertType === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {alertMessage}
        </div>
      )}

      <div className="flex gap-6 mb-8 border p-4 rounded items-center">
        <img src={product.image} className="w-32 h-32" />
        <div className="flex-1">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-green-600 font-semibold">{totalPrice} BDT</p>
        </div>
        <div className="flex flex-col items-center">
          <label className="mb-1 font-semibold">Quantity</label>
          <div className="flex items-center gap-2 border rounded">
            <button
              onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}
              className="px-3 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
            >-</button>
            <input type="text" value={quantity} readOnly className="w-12 text-center border-l border-r"/>
            <button
              onClick={() => setQuantity(prev => prev + 1)}
              className="px-3 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
            >+</button>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Full Name" value={fullName} onChange={(e)=>setFullName(e.target.value)} className="w-full border p-3 rounded"/>
        <input type="text" placeholder="Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)} className="w-full border p-3 rounded"/>
        <input type="text" placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)} className="w-full border p-3 rounded"/>
        <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">Confirm Order</button>
      </form>
    </div>
  );
};

export default Checkout;