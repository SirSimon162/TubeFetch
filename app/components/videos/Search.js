import Link from "next/link";
import { useContext } from "react";
import YTContext from "../../context/YTContext";

function Search() {
  const { searchQuery, setSearchQuery } = useContext(YTContext);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className="flex items-center justify-center bg-black bg-opacity-20 p-1 sm:p-2 w-full border-gradient overflow-hidden text-white"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full focus:outline-none focus:border-opacity-0 bg-transparent"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
      />
      {searchQuery.trim() !== "" ? (
        <Link
          href={`/results?searchQuery=${encodeURIComponent(searchQuery)}`}
          passHref
          className="bg-gradient-to-r from-purple-600 to-yellow-600 text-white font-bold px-4 sm:px-6 py-1"
        >
          Search
        </Link>
      ) : (
        <button
          type="button"
          disabled
          className="bg-gray-400 text-white font-bold px-4 sm:px-6 py-1 cursor-not-allowed"
        >
          Search
        </button>
      )}
    </form>
  );
}

export default Search;
