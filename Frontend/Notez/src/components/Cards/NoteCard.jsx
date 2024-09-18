import React from "react";
import { MdOutlinePushPin } from "react-icons/md";
import { IoMdCreate } from "react-icons/io";
import { RiDeleteBinFill } from "react-icons/ri";
import moment from "moment";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
  onNoteClick,
}) => {
  return (
    <div className="border rounded p-4 bg-white hover:shadow-xl transition-all easy-in-out">
      <div className="flex items-center justify-between">
        <div>
          <h6
            className="text-sm font-medium hover:cursor-pointer"
            onClick={onNoteClick}
          >
            {title?.slice(0, 42)}
          </h6>
          <span
            className="text-xs text-slate-500 hover:cursor-pointer"
            onClick={onNoteClick}
          >
            {moment(date).format("Do MMM YYYY")}
          </span>
        </div>
        <MdOutlinePushPin
          className={`w-10 icon-btn ${
            isPinned ? "text-blue-600" : "text-slate-400"
          }`}
          onClick={onPinNote}
        />
      </div>
      <p
        className="text-sm text-slate-600 mt-2 hover:cursor-pointer"
        onClick={onNoteClick}
      >
        {content?.slice(0, 55) + ` ...`}
      </p>
      <div className="flex items-center justify-between mt-2">
        <div
          className="text-xs text-slate-500 hover:cursor-pointer"
          onClick={onNoteClick}
        >
          {tags.map((tag) => `#${tag}  `)}
        </div>
        <div className="flex items-center gap-2">
          <IoMdCreate
            className="icon-btn cursor-pointer hover:text-black "
            onClick={onEdit}
          />
          <RiDeleteBinFill
            className="icon-btn cursor-pointer hover:text-black"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
