import React from "react";
import { useState } from "react";
import "./Modal.css";
import img2 from "../resources/image2.svg";

export const Modal = ({ openModal, setOpenModal, item }) => {
  const [input, setInput] = useState("");
  const [emailSend, setEmailSend] = useState(false);

  const sendEmail = () => {
    setEmailSend(true);
    setTimeout(() => {
      setOpenModal(false);
    }, 2000);
  };
  return (
    <>
      {!emailSend && (
        <div className="main-container">
          <div className="modal-container">
            <h3 className="">DETAILS:</h3>
            <div>
              <div className="modal-text">
                {item && item.description}
              </div>
            </div>
            <div className="modal-input-label">
              <input
                placeholder="Contents"
                className="modal-input"
                label={"Input"}
                type="email"
                onChange={(input) => setInput(input)}
              />
            </div>
            <div>
              <button
                className="modal-footer-button modal-button-send"
                onClick={sendEmail}
              >
                Submit
              </button>
              <button
                className="modal-footer-button modal-button-cancel"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {emailSend && (
        <div className="modal-container-sent">
          <img className="modal-image" src={img2} />
          <div className="modal-text">Text submit!</div>
        </div>
      )}
    </>
  );
};