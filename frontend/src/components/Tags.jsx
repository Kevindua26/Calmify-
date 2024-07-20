import React from "react";

const Tags = ({ tags }) => {
  return (
    <div class="Tags pt-4 pb-2 max-w-[20vw] w-full text-center">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          {tag}
        </span>
      ))}

      {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #peace
      </span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #anime
      </span> */}
    </div>
  );
};

export default Tags;
