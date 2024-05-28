import { useState } from "react";
import "./App.css";

function App() {
  const [price, setPrice] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    let num = Number(price);
    if (num > 100 && num <= 300) {
      setList([...list, num]);
      setPrice("");
      setError(""); // Reset error if input is valid
    } else if (num >= 300) {
      setError("The Sale Price field must be less than or equal to 300.");
    } else if (price === "") {
      setError("The Sale Price field is required.");
    } else if (num < 100) {
      setError("Please enter a valid Sale Price greater than 100.");
    }
  };

  const totalAmount = list.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  const amount = list.reduce((acc, curr) => {
    return acc + (curr - 100);
  }, 0);

  return (
    <>
      <div className="max-w-screen-lg m-auto">
        <div className="mt-24">
          <h1 className="text-3xl font-semibold mb-4">Task Three</h1>
          <p className="text-lg mb-2">
            Storing input textbox value into an array, displaying that array
            list, then calculating total sale price & total profit using
            Javascript
          </p>
          <p>Product Original Price: 100</p>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="productPrice">Sale Price *</label>
              <input
                value={price}
                type="text"
                id="productPrice"
                className="border border-gray-500 w-56 px-4 py-2 rounded-md"
                onChange={(e) => setPrice(e.target.value)}
              />
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <div className="">
              <button
                className="bg-blue-400 rounded-md px-6 py-2"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mt-4">Output Result:</h2>
            <div>
              <h3 className="text-2xl font-semibold">Sale Price</h3>
              <ul className="flex flex-col list-disc mt-2">
                {list.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul >
              <div>
                <h3 className="text-2xl font-semibold">Total Sold Price:</h3>
                <p className="mt-1">{totalAmount}</p>
                <h3 className="text-2xl font-semibold">Total Profit:</h3>
                <p className="mt-1">{amount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
