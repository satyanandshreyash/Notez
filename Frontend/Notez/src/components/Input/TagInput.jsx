import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const addNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };
  return (
    <div>
      <div className="flex items-center gap-2 flex-wrap mt-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="flex items-center gap-2 text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded"
          >
            # {tag}
            <button
              onClick={() => {
                handleRemoveTag(tag);
              }}
            >
              <MdClose />
            </button>
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 mt-3">
        <input
          type="text"
          value={inputValue}
          placeholder="Add tags"
          className="text-sm bg-transparent border px-3 py-2 rounded outline-none"
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
        />
        <button
          className="w-8 h-8 flex items-center justify-center border rounded-full border-blue-600 hover:bg-blue-600"
          onClick={() => {
            addNewTag();
          }}
        >
          <MdAdd className="text-blue-600 text-3xl hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default TagInput;
