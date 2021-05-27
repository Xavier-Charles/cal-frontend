import React from "react";

const TypeFilter = ({ filterValue, handleFilterValue }) => {
  return (
    <div class="absolute pt-2">
      <select
        value={filterValue}
        onChange={(e) => handleFilterValue(e)}
        class="border focus:border-cerise focus:border-4 h-full rounded-l block appearance-none w-full bg-white border-cyan text-gray-700 py-1 px-4 pr-8 leading-tight focus:outline-none focus:bg-white"
      >
        {" "}
        <option value="None">Filter: All Events</option>
        <option value="Eth1">Ethereum 1.0</option>
        <option value="Eth2">Ethereum 2.0</option>
        <option value="Con">NFTs</option>
        <option value="DC">Dev Call</option>
        <option value="CC">Community Call</option>
      </select>
    </div>
  );
};

export default TypeFilter;
