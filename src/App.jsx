import { useSelector } from "react-redux";
import Carts from "./components/Carts";
import Info from "./components/Info";
import Product from "./components/Product";

function App() {
  //const products = useSelector((state) => state.shopping.products);
  const { products, carts } = useSelector((state) => {
    return {
      products: state.shopping.products,
      carts: state.shopping.carts,
    };
  });
  console.log("products-", products);
  const sum = carts.reduce(
    (acc, o) => acc + parseInt(o.price) * parseInt(o.qty),
    0
  );
  const totalItem = carts.reduce((acc, o) => acc + parseInt(o.qty), 0);

  return (
    <>
      <div className="bg-gray-50 h-full md:h-screen">
        <div className="grid place-items-center">
          <h1 className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
            Shopping Cart
          </h1>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
            {products.length > 0
              ? products.map((product, index) => (
                  <Product key={index} product={product}></Product>
                ))
              : "There is no Products!"}
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
              {carts.length > 0
                ? carts.map((cart, index) => (
                    <Carts key={index} cart={cart}></Carts>
                  ))
                : "There is no Cart Items!"}

              <div className="flex justify-center items-center text-center">
                <Info title={"Total Item"} total={totalItem}></Info>
              </div>
            </div>
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
              <div className="flex justify-center items-center text-center">
                <Info title={"Total Price"} total={sum}></Info>
              </div>
            </div>
          </div>
        </div>

        <div
          id="toast-top-right"
          class="hidden flex absolute top-5 right-5 items-center p-4 space-x-4 w-full max-w-xs text-gray-500 bg-white rounded-lg divide-x divide-gray-200 shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
          role="alert"
        >
          <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Error icon</span>
          </div>
          <div class="ml-5 text-sm font-normal">Item has been deleted.</div>
        </div>
      </div>
    </>
  );
}

export default App;
