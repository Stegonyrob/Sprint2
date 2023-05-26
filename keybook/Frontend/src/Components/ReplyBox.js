import React, { useState, useEffect } from "react";
import SubmitButton from "./ButtonStyle";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubmitResponse from "./SubmitResponse";

function ReplyBox({ onReply }) {
  const [replyText, setReplyText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function handleReplyClick() {
    setIsOpen(true);
  }

  function handleCloseClick() {
    setIsOpen(false);
  }

  function handleInputChange(event) {
    setReplyText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onReply(replyText);
    setReplyText("");
    setIsOpen(false);
  }

  return (
    <div>
      <button className="reply btn btn-warning" onClick={handleReplyClick}>
        Responder
      </button>
      {isOpen && (
        <div className="reply">
          <form onSubmit={handleSubmit}>
            <textarea
              rows="2"
              cols="70"
              value={replyText}
              onChange={handleInputChange}
            />
            <SubmitButton className="buttonLike btn btn-lg">
              Enviar
            </SubmitButton>
            <SubmitButton
              className="buttonLike btn btn-lg"
              onClick={handleCloseClick}
              id="close-button"
            >
              Cerrar
            </SubmitButton>
          </form>
        </div>
      )}
    </div>
  );
}
export default ReplyBox;
