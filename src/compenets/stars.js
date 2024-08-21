import { useState } from "react";

function Stars({ maxRating }) {
  const [rating, SetRating] = useState(0);
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: maxRating }, (_, i) => (
        <Rating
          key={i}
          filll={rating >= i + 1}
          onRating={() => SetRating(i + 1)}
        />
      ))}
      <p>{rating || ""} </p>
    </div>
  );
}

function Rating({ onRating, filll }) {
  return (
    <>
      <span onClick={onRating} className="w-[28px] h-[28px] cursor-pointer ">
        {" "}
        {filll ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#e67700"
            stroke="#000"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none" // Changed to "none" for unfilled stars
            stroke="#000"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
      </span>
    </>
  );
}
export default Stars;
