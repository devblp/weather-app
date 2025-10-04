import React from "react";

export default function NoResult() {
  return (
    <div className="flex flex-col justify-center items-center h-52 gap-3">
      <p className="text-2xl font-bold text-gray-200">No search result found!</p>
      <p className="text-sm text-gray-400">
        Try searching for another location or check your spelling.
      </p>
    </div>
  );
}
