import React from "react";
import { MdClose } from "react-icons/md";

const DisplayNote = ({ noteData, onClose }) => {
  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-100"
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="input-label">
          TITLE
        </label>
        <h1 className="text-2xl text-slate-950">{noteData.title}</h1>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="" className="input-label">
          CONTENT
        </label>
        <p className="bg-slate-50 p-3">{noteData.content}</p>
      </div>
      <div className="mt-3">
        <label htmlFor="" className="input-label">
          TAGS
        </label>
        <div className="text-xs text-slate-500">
          {noteData.tags.map((tag) => `#${tag} `)}
        </div>
      </div>
    </div>
  );
};

export default DisplayNote;
