import React, { useState } from "react";
import { ButtonDefault } from "../ButtonDefault";
import request from "../../utils/url";

export default function Unfollow({ id }) {
  const [isFollowing, setIsFollowing] = useState(true);

  async function unfollowUser(userId) {
    const loggedId = localStorage.getItem("userId");

    const self = {
      logged_id: loggedId,
    };

    try {
      const response = await request({
        method: "DELETE",
        endpoint: `follow/${userId}`,
        body: self,
      });

      if (response.status === "success") {
        setIsFollowing(false);
      }
    } catch (error) {
      alert("Error del servidor. Vuelva a intentarlo");
      console.error(error);
    }
  }

  return (
    <ButtonDefault
      content="Dejar de seguir"
      id={id}
      onClick={() => unfollowUser(id)}
      disabled={!isFollowing}
    />
  );
}

//<UnFollow id={13} />;
