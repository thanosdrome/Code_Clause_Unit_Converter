import { React, useState } from "react";

const KmToM = () => {
  const [inputLen, setinputLen] = useState();
  const [result, setResult] = useState();

  const calculateLen = (e) => {
    e.preventDefault();
    
    const KmToM = (km) => {
      let m = (km*1000);
      return m;
    };
    setResult(KmToM(inputLen));
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="h-1/2 w-1/2">
          <form
            id="calcTemp"
            onSubmit={calculateLen}
            className="flex flex-col justify-center items-center h-full rounded-3xl bg-slate-200"
          >
            <label for="temp" className="text-2xl mb-6 font-bold uppercase">
              Enter the length to convert
            </label>
            <input
              type="number"
              name="temp"
              id="temp"
              value={inputLen}
              onChange={(e) => setinputLen(e.target.value)}
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
              Result:- {result}m
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default KmToM;
