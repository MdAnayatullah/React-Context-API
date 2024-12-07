import React from "react";

export default function Card() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <img
          className="p-8 rounded-t-lg"
          src="data:image/jpeg;base64,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"
          alt="product_image1"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            4.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <a
            href="/"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
