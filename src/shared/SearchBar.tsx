import React, { useState } from "react";

const handymanServices = [
  "Electrician",
  "Plumber",
  "Carpenter",
  "Painter",
  "Handyman",
];

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  return (
    <form className="flex h-full w-full items-center justify-between rounded-md bg-white">
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={handleLocationChange}
        className="w-[50%] rounded-md border p-2"
      />
      <select
        value={selectedService}
        onChange={handleServiceChange}
        className="border-r p-2"
      >
        <option value="" disabled>
          Select the type of service
        </option>
        {handymanServices.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </select>
      <button className=" mr-8 rounded-full border border-secondary-500 bg-secondary-500 p-2 text-white">
        <svg
          className="h-4 w-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
