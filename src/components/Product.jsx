import { useNavigate } from "react-router";
import bag_1 from "../assets/bag-1.jpg";
import bag_2 from "../assets/bag-2.jpg";
import bag_3 from "../assets/bag-3.jpg";
import bag_4 from "../assets/bag-4.jpg";
import bag_5 from "../assets/bag-5.jpg";

const ProductsItem = [
  { id: 1, name: "pakistani bag", price: "500 BDT", image: bag_1 },
  { id: 2, name: "Dubai bag", price: "800 BDT", image: bag_2 },
  { id: 3, name: "Indian bag", price: "1200 BDT", image: bag_3 },
  { id: 3, name: "USA bag", price: "1200 BDT", image: bag_4 },
  { id: 3, name: "UK bag", price: "1200 BDT", image: bag_5 },
];

const Home = ({ addToCart }) => {
  const navigate = useNavigate();

  const handleOrderNow = (product) => {
    navigate("/checkout", { state: { product } });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {ProductsItem.map((product, index) => (
        <div
         key={`${product.id}-${index}`}
          className="border rounded-lg shadow p-2 flex flex-col items-center"
        >
          <img  src={product.image} className="w-[50%] h-[50%] mb-4" />
          <h2 className="font-bold text-lg">{product.name}</h2>
          <p className="text-green-600 font-semibold">{product.price}</p>
          <div className="flex gap-3 mt-4 ">
           <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
            <button
              onClick={() => handleOrderNow(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Order Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;