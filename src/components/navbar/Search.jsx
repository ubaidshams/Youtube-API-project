import React, { useContext, useState } from "react";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import { YoutubeContext } from "../../apis/YoutubeContext";

const Search = () => {
  let [state, setState] = useState("");
  let { searchText } = useContext(YoutubeContext);
  let handleSubmit = e => {
    e.preventDefault();
    try {
      setState(searchText(state));
    } catch (error) {
      console.log(error);
    }
    setState("");
  };
  return (
    <div className="searchBlock basis-[50%] flex items-center">
      <form onSubmit={handleSubmit} className="flex w-[100%] items-center">
        <span className="form-group w-[70%]">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            value={state}
            onChange={e => {
              setState(e.target.value);
            }}
            className="border-2 p-2 rounded-sm w-[100%] shadow-sm"
          />
        </span>
        <span
          className="w-[8%] text-center bg-[#e9e9e9] border-2 "
          title="search"
        >
          <button className="bg-[#e9e9e9] p-3 w-[50px] " type="submit">
            <FaSearch className=" font-light " />
          </button>
        </span>
        <span
          className="w-[7%] flex justify-center text-lg bg-[#f9f9f9] p-4 rounded-full ml-3"
          title="Search with your voice"
        >
          <button>
            <FaMicrophone className="text-center" />
          </button>
        </span>
      </form>
    </div>
  );
};

export default Search;
