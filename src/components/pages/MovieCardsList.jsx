import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleShowTrailer } from "../../ReduxSlice/showTrailerSlice";
import { VIDEO_IMAGE_PREFIX } from "../../utils/constants";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import MainContainer from "./MainContainer";

const MovieCardsList = ({ listTitle, moviesSelector, titleSelector }) => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [showMovieModal, setShowMovieModal] = useState();
  const dispatch = useDispatch();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    bgcolor: "black",
  };

  return (
    <div>
      <h3 className="text-2xl mb-2 font-semibold text-gray-200">{listTitle}</h3>
      <div className="w-full overflow-x-scroll hide-scrollbar">
        <div className="flex  gap-3 w-max">
          {moviesSelector?.map((movie) => (
            <div
              key={movie.id}
              className="cursor-pointer"
              onClick={() => {
                setShowMovieModal(movie.id);
                setIsModelOpen(true);
              }}
            >
              <img
                src={VIDEO_IMAGE_PREFIX + movie.poster_path}
                className="w-[250px] h-[350px]"
              />
            </div>
          ))}
        </div>
      </div>
      <Modal
        open={isModelOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={() => {
          // Fix the Bug where Main Movie Trailer Should be show
          dispatch(toggleShowTrailer({ movieId: null, showTrailer: null }));
          setIsModelOpen(false);
        }}
      >
        <Box sx={style}>
          <MainContainer
            id={showMovieModal}
            titleSelector={titleSelector}
            isModal={true}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default MovieCardsList;
