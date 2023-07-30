import { useState } from "react";
function Search() {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something", "error");
    } else {
      alert(text);
      setText("");
    }
  };
  return (
    <form
      className="flex items-center justify-center bg-black bg-opacity-20 p-1 sm:p-2 w-full border-gradient overflow-hidden"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full focus:outline-none focus:border-opacity-0 bg-transparent"
        placeholder="Search..."
        value={text}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-purple-600 to-yellow-600 text-white font-bold px-4 sm:px-6 py-1"
      >
        Search
      </button>
    </form>
  );
}

export default Search;
