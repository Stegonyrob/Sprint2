import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartCrack } from "@fortawesome/free-solid-svg-icons";
const LikeDislike = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleClick = (type) => {
    if (type === "like") {
      if (!liked) {
        setLikeCount(likeCount + 1);
        setLiked(true);
      } else {
        setLikeCount(likeCount - 1);
        setLiked(false);
      }
    } else {
      if (!disliked) {
        setDislikeCount(dislikeCount + 1);
        setDisliked(true);
      } else {
        setDislikeCount(dislikeCount - 1);
        setDisliked(false);
      }
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => handleClick("like")}
        disabled={liked || disliked}
        title="like"
        className=" buttonLike btn-sm"
      >
        <FontAwesomeIcon icon={faHeart} />
        {likeCount}
      </button>
      <button
        type="button"
        onClick={() => handleClick("dislike")}
        disabled={liked || disliked}
        title="dislike"
        className=" buttonLike btn-sm"
      >
        <FontAwesomeIcon icon={faHeartCrack} />
        {dislikeCount}
      </button>
    </div>
  );
};
export default LikeDislike;
