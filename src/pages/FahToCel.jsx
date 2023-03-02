import { React, useState } from "react";

const Temperature = () => {
  const [inputTemp, setinputTemp] = useState();
  const [result, setResult] = useState();

  const calculateTemp = (e) => {
    e.preventDefault();

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
      let celsius = (((fah - 32) * 5) / 9).toFixed(1);
      return celsius;
    };
    setResult(fahToCel(inputTemp));
  };
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="h-1/2 w-1/2">
          <form
            id="calcTemp"
            onSubmit={calculateTemp}
            className="flex flex-col justify-center items-center h-full rounded-3xl bg-slate-200"
          >
            <label for="temp" className="text-2xl mb-6 font-bold uppercase">
              Enter the temperature to convert
            </label>
            <input
              type="number"
              name="temp"
              id="temp"
              value={inputTemp}
              onChange={(e) => setinputTemp(e.target.value)}
              className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input
              type="submit"
              name="temp"
              id="submit"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mb-8"
            />
            <span
              id="result"
              className="font-bold mb-4 text-2xl bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              Result:- {result}&#176; Celsius
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Temperature;
