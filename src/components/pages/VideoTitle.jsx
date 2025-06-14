import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowTrailer } from "../../ReduxSlice/showTrailerSlice";

const VideoTitle = ({ title, overView, movieId, isModal }) => {
  const dispatch = useDispatch();
  const handleShowTrailerButton = () => {
    dispatch(toggleShowTrailer({ movieId: movieId, showTrailer: true }));
  };
  return (
    <div
      className={`absolute text-white left-20 ${isModal ? "top-30" : "top-80"}`}
    >
      <div>
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
        </div>
        <p
          title={overView}
          className={`text-gray-300 mt-4" ${
            isModal ? "w-1/4 text-wrap truncate-2-custom" : "w-1/3"
          }`}
        >
          {overView}
        </p>
        <div className="flex items-center mt-4">
          <button
            className="mr-2 cursor-pointer px-20 py-3 rounded-xl bg-linear-65 from-purple-500 to-pink-500"
            onClick={handleShowTrailerButton}
          >
            <i className="bi bi-play-fill"></i> Watch Trailer
          </button>
          <i
            className="bi bi-file-plus-fill text-4xl text-gray-300 cursor-pointer"
            title="wishlist"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
